import { CodesWithSettingsOutput } from '../Coding/codes-with-settings';

export class ListByInput {
    definitionNos: string[];

    constructor(initialValues: Partial<ListByInput> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}

export class ListByOutput {
  [key: string]: Array<CodesWithSettingsOutput>;

  constructor(initialValues: Partial<ListByOutput> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}