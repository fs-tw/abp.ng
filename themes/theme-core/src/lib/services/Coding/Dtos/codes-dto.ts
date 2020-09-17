export class CodesDto {
  no: string;
  displayName: string;
  description: string;
  code: string;
  level: number;
  definitionId: string;
  parentId: string;
  enable: boolean;
  config: {
    excludeSettingsGroups: string[],
    includeSettingsGroups: string[]
  };
  lastModificationTime: string;
  lastModifierId: string;
  creationTime: string;
  creatorId: string;
  id: string;

  constructor(initialValues: Partial<CodesDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
