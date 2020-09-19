import { CreateDefinitionsInputModel } from '../../models/theme-core/DefinitionSetting/create-definitions-input-model';
import { CreateDefinitionsDto } from './Dtos/create-definitions-dto';

/**
 * 修改DefinitionSetting postCreateDefinitions API Dto 也需要修改 CreateDefinitionsInputModel Dto
 */
export class CreateDefinitionsInput {
  codes: Array<CreateDefinitionsDto>;

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
