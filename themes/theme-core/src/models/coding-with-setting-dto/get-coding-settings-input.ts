export class GetCodingSettingsInput {
    definitionNos: string[];

    constructor(initialValues: Partial<GetCodingSettingsInput> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
  