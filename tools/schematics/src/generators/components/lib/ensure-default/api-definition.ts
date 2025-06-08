import { ApiDefinition, Type } from '@abp/ng.schematics/models';
import { getApiDefinition } from './get-api-definition';

export function findEntityType(
  apiDefinition: ApiDefinition,
  entityType: string
) {
  // 先嘗試完整名稱匹配
  if (apiDefinition.types[entityType]) {
    return {
      name: entityType,
      ...apiDefinition.types[entityType],
    };
  }

  // 如果完整名稱找不到，則嘗試匹配最後一個部分
  const targets = Object.keys(apiDefinition.types).filter(
    (key) => key.split('.').pop() === entityType.split('.').pop()
  );

  if (targets.length !== 1) return null;
  const targetType: Type & { name: string } = {
    ...{ name: targets[0] },
    ...apiDefinition.types[targets[0]],
  };
  return targetType;
}

function getBaseTypes(
  apiDefinition: ApiDefinition,
  targetType: Type & { name: string },
  baseTypes: string[]
) {
  if (targetType.baseType) {
    baseTypes.push(targetType.baseType);
    const baseType = findEntityType(apiDefinition, targetType.baseType);
    if (baseType !== null) getBaseTypes(apiDefinition, baseType, baseTypes);
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
    baseTypes.forEach((baseType) => {
      const baseTypeEntity = findEntityType(apiDefinition, baseType);

      if (baseTypeEntity && baseTypeEntity.properties) {
        allProperties.unshift(...baseTypeEntity.properties);
      }
    });

    target.properties = allProperties;
  }

  return target;
}
