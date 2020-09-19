export class CreateCodesWithChildtenDto {
    settingValues: Array<{ name: string, value: string }>;
    no: string;
    displayName: string;
    description?: string;
    enable?: boolean;
    config?: {
        excludeSettingsGroups: string[],
        includeSettingsGroups: string[]
    };
    children: Array<CreateCodesWithChildtenDto>;

  constructor(initialValues: Partial<CreateCodesWithChildtenDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
