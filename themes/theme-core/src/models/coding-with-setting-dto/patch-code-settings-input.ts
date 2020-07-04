export class PatchCodeSettingsInput {
  editItems: any[];
  deleteItemIds: string[];
  definitionNos: string[];
  
  constructor(initialValues: Partial<PatchCodeSettingsInput> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
