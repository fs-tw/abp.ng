import { ABP } from '@abp/ng.core';

export class CreateDefinitionsDtoModel {
    settingValues: Array<ABP.Dictionary<string>>;
    no: string;
    displayName: string;
    description?: string;
    enable?: boolean;
    config?: {
        excludeSettingsGroups: string[],
        includeSettingsGroups: string[]
    };

  constructor(initialValues: Partial<CreateDefinitionsDtoModel> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
