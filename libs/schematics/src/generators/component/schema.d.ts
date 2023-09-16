import { Names } from "../types";

export enum ComponentKind {
  SettingPage = 'setting-page',
  SettingTab = 'setting-tab',
  TreePage = 'tree-page',
  BasicPage = 'basic-page',
  EntityPage = 'entity-page',
  Modal = 'modal'

}

export interface SettingPageGeneratorSchema {
  componentType: ComponentKind;
  name: string;
  project: string;
  module?: string;
  path?: string;
  type?: string;
  selector?: string;
  prefix?: string;
}

export interface NormalizedSchema extends SettingPageGeneratorSchema {
  directory: string;
  filePath: string;
  projectSourceRoot: string;
  projectRoot: string;
  selector: string;
  namePath: string;
  featureNames: Names;
  componentNames: Names;
}