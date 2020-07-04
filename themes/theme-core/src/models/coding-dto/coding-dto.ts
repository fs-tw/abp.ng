export class CodingDto {
  no: string;
  displayName: string;
  description: string;
  code: string;
  definitionId?: string;
  parentId?: string;
  enable: boolean;
  lastModificationTime?: string;
  lastModifierId?: string;
  creationTime: string;
  creatorId?: string;
  id: string;

  constructor(initialValues: Partial<CodingDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
