export class SettingValueModel {
    name: string;
    value: string;
    displayName: string;
    properties: any;

    constructor(initialValues: Partial<SettingValueModel> = {}) {
        if (initialValues) {
            for (const key in initialValues) {
                if (initialValues.hasOwnProperty(key)) {
                    this[key] = initialValues[key];
                }
            }
        }
    }
}