import { ABP } from '@abp/ng.core'

export class EditDefinitionsDtoModel {
    settingValues: Array<ABP.Dictionary<string>>;
    no: string;
    displayName: string;
    description?: string;
    enable?: boolean;
    config?: {
      excludeSettingsGroups: string[],
      includeSettingsGroups: string[]
    };
    id: string;

    constructor(initialValues: Partial<EditDefinitionsDtoModel> = {}) {
        if (initialValues) {
            for (const key in initialValues) {
                if (initialValues.hasOwnProperty(key)) {
                    this[key] = initialValues[key];
                }
            }
        }
    }
}