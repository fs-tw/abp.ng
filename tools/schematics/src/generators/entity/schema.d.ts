export enum ComponentKind {
  Entity = 'entity',
}

export interface ComponentsGeneratorSchema {
  componentType: ComponentKind;
  name: string;
  directory: string;
  project: string;
  prefix?: string;
  url?: string;
  entityType?: string;
  createFormType?: string;
  editFormType?: string;
  // CRUD 相關選項
  entityServiceType?: string;
  listInputType?: string;
}
