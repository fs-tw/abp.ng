import { ABP } from '@abp/ng.core';
import { CreateCodesDtoModel } from './create-codes-dto-model';
import { EditCodesDtoModel } from './edit-codes-dto-model';

export class PatchCodesInputModel {
  addItems: Array<CreateCodesDtoModel>;
  editItems: Array<EditCodesDtoModel>;
  deleteItemIds: string[];
  
  constructor(initialValues: Partial<PatchCodesInputModel> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}