export class SettingInputDto {
    name: string;
    value: string;
    properties: any;

    constructor(initialValues: Partial<SettingInputDto> = {}) {
        if (initialValues) {
        for (const key in initialValues) {
            if (initialValues.hasOwnProperty(key)) {
            this[key] = initialValues[key];
            }
        }
        }
    }
}