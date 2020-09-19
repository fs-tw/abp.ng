import { CreateCodesWithChildtenDto } from './Dtos/create-codes-with-childten-dto';

export class CreateCodesInput {
  codes: Array<CreateCodesWithChildtenDto>;
  parentId: string;

  constructor(initialValues: Partial<CreateCodesInput> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
