
export class EditCodesDto {
    settingValues: Array<{ name: string, value: string }>;
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
    id: string;

    constructor(initialValues: Partial<EditCodesDto> = {}) {
        if (initialValues) {
            for (const key in initialValues) {
                if (initialValues.hasOwnProperty(key)) {
                    this[key] = initialValues[key];
                }
            }
        }
    }
}