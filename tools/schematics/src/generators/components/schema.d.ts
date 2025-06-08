export type ComponentKind = 'entity' | 'form' | 'modal' | 'select' | 'table';

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
