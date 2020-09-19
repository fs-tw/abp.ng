import { CreateDefinitionsDtoModel } from './create-definitions-dto-model';

export class CreateDefinitionsInputModel {
  codes: Array<CreateDefinitionsDtoModel>;

  constructor(initialValues: Partial<CreateDefinitionsInputModel> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
