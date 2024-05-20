import { ApiDefinition, Type } from "@abp/ng.schematics/models";
import { getApiDefinition } from "./get-api-definition";

// export async function getEntityType(url: string, entityType: string) {

//     const apiDefinition: ApiDefinition = await getApiDefinition(url);

//     const targets = Object.keys(apiDefinition.types).filter(key => key.includes(entityType));

//     if (targets.length === 0) {
//         console.log('No target found. Please check your url or dto type name.');
//         return;
//     }

//     if (targets.length > 1) {
//         console.log('More than one target found. Please select one of them.');
//         return;
//     }
//     const targetType: Type & { name: string } = {
//         ...{ name: targets[0] },
//         ...apiDefinition.types[targets[0]],
//     };

//     return targetType;
// }

export function findEntityType(apiDefinition: ApiDefinition, entityType: string) {
    //Volo.Abp.LanguageManagement.Dto.CreateLanguageDto
    //Volo.Abp.LanguageManagement.Dto.LanguageDto
    
    const targets = Object.keys(apiDefinition.types).filter(key => key.split('.').pop() === entityType.split('.').pop());
    
    if (targets.length !== 1)
        return null;
    const targetType: Type & { name: string } = {
        ...{ name: targets[0] },
        ...apiDefinition.types[targets[0]],
    };
    return targetType;
}

function getBaseTypes(apiDefinition: ApiDefinition, targetType: Type & { name: string }, baseTypes: string[]) {
    if (targetType.baseType) {
        baseTypes.push(targetType.baseType);
        const baseType = findEntityType(apiDefinition, targetType.baseType);
        if (baseType !== null)
            getBaseTypes(apiDefinition, baseType, baseTypes);
    }
}

export async function getEntityType(url: string, entityType: string) {
    const apiDefinition: ApiDefinition = await getApiDefinition(url);
    const target = findEntityType(apiDefinition, entityType);

    if (target !== null) {
        const baseTypes: string[] = [];
        getBaseTypes(apiDefinition, target, baseTypes);



        const allProperties = [];
        allProperties.push(...target.properties);
        baseTypes.forEach(baseType => {
            const baseTypeEntity = findEntityType(apiDefinition, baseType);

            if (baseTypeEntity && baseTypeEntity.properties) {
                allProperties.unshift(...baseTypeEntity.properties);
            }
        });

        
        target.properties = allProperties;
    }

    return target;
}