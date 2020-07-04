export class SettingNameAndKey {
  providerName: string;
  providerKey: string;

  constructor(initialValues: Partial<SettingNameAndKey> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
  