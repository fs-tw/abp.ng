import { PatchCodesInputModel } from '../../models/theme-core/CodeSetting/patch-codes-input-model';
import { CreateCodesDto } from './Dtos/create-codes-dto';
import { EditCodesDto } from './Dtos/edit-codes-dto';
/**
 * 修改CodeSetting postPatchCodes API Dto 也需要修改 PatchCodesInputModel Dto
 */
export class PatchCodesInput {
  addItems: Array<CreateCodesDto>;
  editItems: Array<EditCodesDto>;
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
