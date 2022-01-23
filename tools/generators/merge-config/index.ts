import { SchematicContext, Tree, chain, Rule } from '@angular-devkit/schematics';
import { updateJsonInTree, readJsonInTree } from '@nrwl/workspace';
import type { NxJsonConfiguration } from '@nrwl/devkit';
import { ProjectConfigFile } from './commons';

let configs: Array<ProjectConfigFile> = [];
export default function (): Rule {
  return (host: Tree, context: SchematicContext) => {
    let files: Array<string> = [];
    host.getDir('./config').visit(f => files.push(f));
    configs = files
      .filter(p => p.endsWith('config.json'))
      .map(p => readJsonInTree<ProjectConfigFile>(host, p))
      .sort((a, b) => { return a.order - b.order; });

    return chain([
      //updateNx,
      updateNg,
      updateTs,
      updatePackage
      //updateTsProd,
      //updateSymLink
    ])(host, context);
  }

}

// const updateNx = (host: Tree, context: SchematicContext) => {
//   let nxs = configs
//     .map(j => j.nx)
//     .reduce((a, b) => { return { ...a, ...b } });
//   const nxJson = readJsonInTree<NxJsonConfiguration>(host, 'config/nx.base.json');
//   nxJson.projects = { ...nxJson.projects, ...nxs };
//   return updateJsonInTree('/nx.json', json => nxJson);
// }

const updatePackage = (host: Tree, context: SchematicContext) => {
  const packageJson = readJsonInTree<any>(host, 'config/package.base.json');

  let devDependencies = configs
    .map(j => j.devDependencies)
    .reduce((a, b) => { return { ...a, ...b } });
  packageJson.devDependencies = { ...packageJson.devDependencies, ...devDependencies };

  let dependencies = configs
    .map(j => j.dependencies)
    .reduce((a, b) => { return { ...a, ...b } });
  
  packageJson.dependencies = { ...packageJson.dependencies, ...dependencies };

  return updateJsonInTree('/package.json', json => packageJson);
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
  return updateJsonInTree('/tsconfig.base.json', json => tsJson);
}
const updateTsProd = (host: Tree, context: SchematicContext) => {
  let tsProds = configs
    .map(j => j.tsconfigProd)
    .reduce((a, b) => { return { ...a, ...b } });
  const tsProdJson = readJsonInTree<any>(host, 'config/tsconfig.prod.base.json');
  tsProdJson.compilerOptions.paths = { ...tsProdJson.compilerOptions.paths, ...tsProds };
  return updateJsonInTree('/tsconfig.prod.json', json => tsProdJson);
}

const updateBuild = (host: Tree, context: SchematicContext) => {
  let builds = configs
    .map(j => j.build)
    .reduce((a, b) => { return !b ? a : a.concat(b) });
  return updateJsonInTree('/build.json', json => builds);
}

