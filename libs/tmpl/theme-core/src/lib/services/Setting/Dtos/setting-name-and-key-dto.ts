export class SettingNameAndKeyDto {
  providerName: string;
  providerKey: string;

  constructor(initialValues: Partial<SettingNameAndKeyDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
