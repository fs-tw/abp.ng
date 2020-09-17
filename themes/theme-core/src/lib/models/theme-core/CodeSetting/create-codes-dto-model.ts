import { ABP } from '@abp/ng.core'

export class CreateCodesDtoModel {
    settingValues: Array<ABP.Dictionary<string>>;
    no: string;
    displayName: string;
    description?: string;
    definitionId: string;
    parentId: string;
    enable?: boolean;
    config?: {
      excludeSettingsGroups: string[],
      includeSettingsGroups: string[]
    };

    constructor(initialValues: Partial<CreateCodesDtoModel> = {}) {
        if (initialValues) {
            for (const key in initialValues) {
                if (initialValues.hasOwnProperty(key)) {
                    this[key] = initialValues[key];
                }
            }
        }
    }
}