import { CodingWithSettingsDto } from './coding-with-settings-dto';

export class CodingChildrenSettingsDto {
    [key: string]: Array<CodingWithSettingsDto>;
  
    constructor(initialValues: Partial<CodingChildrenSettingsDto> = {}) {
      if (initialValues) {
        for (const key in initialValues) {
          if (initialValues.hasOwnProperty(key)) {
            this[key] = initialValues[key];
          }
        }
      }
    }
  }
  