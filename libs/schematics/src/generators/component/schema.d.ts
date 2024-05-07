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
  directory:string;
  project: string;
  selector?: string;
  prefix?: string;
  pageWrap: boolean;
  navStyle: string;
}

export interface NormalizedSchema extends ComponentGeneratorSchema {
  selector: string;
  path: string;
  relationPath: string;
  resourceName: string;
}