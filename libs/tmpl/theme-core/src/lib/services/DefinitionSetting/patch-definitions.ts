import { PatchDefinitionsInputModel } from '../../models/theme-core/DefinitionSetting/patch-definitions-input-model';
import { EditDefinitionsDto } from './Dtos/edit-definitions-dto';

/**
 * 修改DefinitionSetting postPatchDefinitions API Dto 也需要修改 PatchDefinitionsInputModel Dto
 */
export class PatchDefinitionsInput {
  editItems: Array<EditDefinitionsDto>;
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
