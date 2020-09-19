import { ABP } from '@abp/ng.core';
import { EditDefinitionsDtoModel } from './edit-definitions-dto-model';

export class PatchDefinitionsInputModel {
  editItems: Array<EditDefinitionsDtoModel>;
  deleteItemIds: string[];
  
  constructor(initialValues: Partial<PatchDefinitionsInputModel> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}