import { Names } from "../types";

export enum ComponentKind {
  Tabs = 'tabs',
  Form = 'form',
  Tree = 'tree',
  Basic = 'basic',
  Entity = 'entity',
  Modal = 'modal'

}

export interface ComponentGeneratorSchema {
  componentType: ComponentKind;
  name: string;
  project: string;
  //module?: string;
  //path?: string;
  //type?: string;
  selector?: string;
  prefix?: string;
  pageWrap: boolean;
  navStyle: string;
}

export interface NormalizedSchema extends ComponentGeneratorSchema {
  directory: string;
  //filePath: string;
  //projectSourceRoot: string;
  //projectRoot: string;
  selector: string;
  path: string;
  //featureNames: Names;
  //componentNames: Names;
  relationPath: string;
  resourceName: string;
}