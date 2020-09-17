import { SchematicContext, Tree, chain, Rule } from '@angular-devkit/schematics';
//import * as glob from 'glob';
//import { ProjectConfigFile, indexObj } from './commons';
import { updateJsonInTree, readJsonInTree, NxJson } from '@nrwl/workspace';
import { ProjectConfigFile } from './commons';
import { map } from 'rxjs/operators';
let configs: Array<ProjectConfigFile> = [];

export default function (schema: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    let files: Array<string> = [];
    host.getDir('./config').visit(f => files.push(f));
    configs = files
      .filter(p => p.endsWith('config.json'))
      .map(p => readJsonInTree<ProjectConfigFile>(host, p))
      .sort((a, b) => { return a.order - b.order; });
    

    return chain([
      updateNx,
      updateNg,
      updateTs,
      updateTsProd
      // updateJsonInTree(`/nx.json`, json => {

      //   return json;
      // }) as any,
    ])(host, context);
  }

}


const updateNx = (host: Tree, context: SchematicContext) => {
  let nxs = configs
    .map(j => j.nx)
    .reduce((a, b) => { return { ...a, ...b } });
  const nxJson = readJsonInTree<NxJson>(host, 'config/nx.base.json');
  nxJson.projects = { ...nxJson.projects, ...nxs };
  return updateJsonInTree('/nx.json', json => nxJson);
}
const updateNg = (host: Tree, context: SchematicContext) => {
  let ngs = configs
    .map(j => j.angular)
    .reduce((a, b) => { return { ...a, ...b } });
  const ngJson = readJsonInTree<any>(host, 'config/angular.base.json');
  ngJson.projects = { ...ngJson.projects, ...ngs };
  return updateJsonInTree('/angular.json', json => ngJson);
}
const updateTs = (host: Tree, context: SchematicContext) => {
  let tss = configs
    .map(j => j.tsconfig)
    .reduce((a, b) => { return { ...a, ...b } });
  const tsJson = readJsonInTree<any>(host, 'config/tsconfig.base.json');
  tsJson.compilerOptions.paths = { ...tsJson.compilerOptions.paths, ...tss };
  return updateJsonInTree('/tsconfig.json', json => tsJson);
}
const updateTsProd = (host: Tree, context: SchematicContext) => {
  let tsProds = configs
    .map(j => j.tsconfigProd)
    .reduce((a, b) => { return { ...a, ...b } });
  const tsProdJson = readJsonInTree<any>(host, 'config/tsconfig.prod.base.json');
  tsProdJson.compilerOptions.paths = { ...tsProdJson.compilerOptions.paths, ...tsProds };
  return updateJsonInTree('/tsconfig.prod.json', json => tsProdJson);
}

// function updateProject(host: Tree, context: SchematicContext) {
//   return (host: Tree) => {
//     return chain([
//       updateJsonInTree(`/nx.json`, json => json)
//     ]);
//   };
// }

