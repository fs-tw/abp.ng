import { Rule, Tree, noop } from '@angular-devkit/schematics';
import { CONFIG_FILE_NAME } from './constants';
import { dasherize } from '@angular-devkit/core/src/utils/strings';
import * as Path from 'path';

export interface ProjectConfigFile {
  order:number,
  angular: any;
  nx: any;
  tsconfig: any;
  tsconfigProd: any;
  workspace?: any;
  [key:string]: any;
}

/**
 * Get/set an index of an object based on match dot string
 * @param obj Referenced obj
 * @param match Match string with dots. Ex: compilerOptions.paths
 * @param value Set value to referenced object
 */
export function indexObj(obj: any, match: string | string[], value?: any): any {
  if (typeof match == 'string')
    return indexObj(obj, match.split('.'), value);

  if (match.length == 1 && value !== undefined)
    return obj[match[0]] = value;

  if (match.length == 0)
    return obj;
  
  return indexObj(obj[match[0]], match.slice(1), value);
}

/**
 * Writes in project.config.json based on previous creation schematic
 * @param schema options - must contain a name attribute
 * @param rootDirectory root directory that lib would be created, example: libs, apps
 * @param fileName angular, nx or tsconfig available
 * @param keyPath object key to global file input, example: projects, compilerOptions.paths
 */
export function writeProjectConfigFiles(
  schema: any,
  rootDirectory: string,
  fileName: string,
  keyPath: string = 'projects'
): Rule {
  const fileBase: ProjectConfigFile = {
    order:0,
    angular: {},
    nx: {},
    workspace: {},
    tsconfig: {},
    tsconfigProd:{}
  };

  return (tree: Tree) => {
    const resultPath = Path.join(rootDirectory, dasherize(schema.name));
    const projectFile = Path.join(resultPath, CONFIG_FILE_NAME);
    const npmScope: string = JSON.parse(tree.read('nx.json') as any).npmScope;
    const fileContent: any = JSON.parse(tree.read(`${fileName}.json`) as any);

    let name = dasherize(schema.name).replace(/\//g, '-');
    if (keyPath.indexOf('compilerOptions') > -1) {
      name = `@${npmScope}/${dasherize(schema.name)}`;
    }

    const prjData = indexObj(fileContent, keyPath)[name];
    if (tree.exists(projectFile)) {
      const projectContent: any = JSON.parse(tree.read(projectFile) as any);

      projectContent[fileName] = { [name]: prjData };

      tree.overwrite(projectFile, JSON.stringify(projectContent, null, 2));
      return noop;
    }

    fileBase[fileName] = { [name]: prjData };
    tree.create(projectFile, JSON.stringify(fileBase, null, 2));

    return noop;
  };
}

export function writeProjectConfigFilesCaller(_options: any): Rule {
  return writeProjectConfigFiles(_options, _options.rootDirectory, _options.fileName, _options.keyPath)
};