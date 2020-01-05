import { chain, externalSchematic, Rule, Tree, SchematicContext, mergeWith, apply, url, template, move } from '@angular-devkit/schematics';
import { UnitTestRunner } from '@nrwl/angular/src/utils/test-runners';
import {
  addGlobal,
  addIncludeToTsConfig,
  addLintFiles,
  formatFiles,
  getNpmScope,
  getWorkspacePath,
  insert,
  Linter,
  NxJson,
  offsetFromRoot,
  readJsonInTree,
  replaceAppNameWithPath,
  toClassName,
  toFileName,
  toPropertyName,
  updateJsonInTree
} from '@nrwl/workspace';

function updateTsConfig(options: NormalizedSchema): Rule {
  return chain([
    (host: Tree, context: any) => {
      const nxJson = readJsonInTree<NxJson>(host, 'nx.json');
      return updateJsonInTree('tsconfig.json', json => {
        const c = json.compilerOptions;
        delete c.paths[options.name];
        c.paths[`@${nxJson.npmScope}/${options.projectDirectory}/*`] = [
          `libs/${options.projectDirectory}/*/src/index.ts`
        ];
        return json;
      })(host, context) as any;
    }
  ]);
}

function updateProject(options: NormalizedSchema): Rule {
  return (host: Tree) => {
    return chain([
      updateJsonInTree(getWorkspacePath(host), json => {
        const nxJson = readJsonInTree<NxJson>(host, 'nx.json');
        const project = json.projects[options.name];
        json.projects[`${nxJson.npmScope}.${options.name}`]=project;
        delete json.projects[options.name];
        return json;
      }),
      updateJsonInTree(`/nx.json`, json => {
        const nxJson = readJsonInTree<NxJson>(host, 'nx.json');
        const project = json.projects[options.name];
        json.projects[`${nxJson.npmScope}.${options.name}`]=project;
        delete json.projects[options.name];
        return json;
      }) as any
    ]);
  };
}

export default function(schema: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    const options = normalizeOptions(host, schema);
    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        name: schema.name,
        publishable:true,
        routing:true
      }),
      updateTsConfig(options),
      updateProject(options),
      mergeWith(
        apply(url('./files'), [
          template({
            fileName:options.fileName,
            projectName:options.moduleName,
            tmpl:''
          }),
          move(options.projectRoot)
        ])
      )      
    ])(host,context);
  }

}
interface NormalizedSchema{
  name: string;
  fileName: string;
  projectRoot: string;
  entryFile: string;
  modulePath: string;
  moduleName: string;
  projectDirectory: string;
  parsedTags: string[];
  skipFormat: boolean;
  simpleModuleName: boolean;
  directory?: string;
  sourceDir?: string;
  publishable: boolean;

  spec?: boolean;
  flat?: boolean;
  commonModule?: boolean;

  style?: string;
  prefix?: string;
  routing?: boolean;
  lazy?: boolean;
  parentModule?: string;
  tags?: string;

  unitTestRunner: UnitTestRunner;  
}
function normalizeOptions(host: Tree, options: any): NormalizedSchema {
  const name = toFileName(options.name);
  const projectDirectory = options.directory
    ? `${toFileName(options.directory)}/${name}`
    : name;

  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const fileName = options.simpleModuleName ? name : projectName;
  const projectRoot = `libs/${projectDirectory}`;

  const moduleName = `${toClassName(fileName)}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map(s => s.trim())
    : [];
  const modulePath = `${projectRoot}/src/lib/${fileName}.module.ts`;
  const defaultPrefix = getNpmScope(host);

  return {
    ...options,
    prefix: options.prefix ? options.prefix : defaultPrefix,
    name: projectName,
    projectRoot,
    entryFile: 'index',
    moduleName,
    projectDirectory,
    modulePath,
    parsedTags,
    fileName
  };
}
