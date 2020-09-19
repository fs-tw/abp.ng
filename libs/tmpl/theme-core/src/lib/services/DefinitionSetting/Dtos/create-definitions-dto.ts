import { CreateDefinitionsDtoModel } from '../../../models/theme-core/DefinitionSetting/create-definitions-dto-model';

export class CreateDefinitionsDto {
    settingValues: Array<{ name: string, value: string }>;
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
