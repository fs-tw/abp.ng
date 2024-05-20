import { Names } from "../types";

export enum ComponentKind {
  Routes = 'routes',
  Tabs = 'tabs',
  Entity = 'entity',
  Tree = 'tree',
  Form = 'form',
  Modal = 'modal'
}

export interface ComponentGeneratorSchema {
  componentType: ComponentKind;
  name: string;
  directory: string;
  project: string;
  selector?: string;
  prefix?: string;
  pageWrap: boolean;
  navStyle: string;

  url: string;
  listInputType: string;
  entityType: string;
  createFormType: string;
  editFormType: string;
}