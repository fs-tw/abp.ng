
export class EditDefinitionsDto {
    settingValues: Array<{ name: string, value: string }>;
    no: string;
    displayName: string;
    description?: string;
    enable?: boolean;
    config?: {
        excludeSettingsGroups: string[],
        includeSettingsGroups: string[]
    };
    id: string;

    constructor(initialValues: Partial<EditDefinitionsDto> = {}) {
        if (initialValues) {
            for (const key in initialValues) {
                if (initialValues.hasOwnProperty(key)) {
                    this[key] = initialValues[key];
                }
            }
        }
    }
}