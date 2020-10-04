export class SettingInput {
  providerName: string;
  providerKey: string;
  name: string;

  constructor(initialValues: Partial<SettingInput> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
