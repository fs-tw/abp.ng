// import { Tree, joinPathFragments } from '@nx/devkit';
// import { insertImport } from '@nx/js';
// import { ensureTypescript } from '@nx/js/src/utils/typescript/ensure-typescript';
// import { addProviderToRoute as nxAddProviderToRoute } from '@nx/angular/utils';

// let tsModule: typeof import('typescript');

// /**
//  * Add a provider to a standalone routes definition
//  * @param tree Virtual Tree
//  * @param routesFile The file containing the routes definition
//  * @param routeToAddProviderTo The route to add the provider to
//  * @param providerToAdd The provider to add to the route
//  */
// export function addProviderToRoute(
//   tree: Tree,
//   path:string,
//   namePath:string,
//   fileName: string,
//   className: string
// ) {
//   const routesPath = joinPathFragments(path, `${namePath}.routes.ts`)

//   const routesContents = tree.read(routesPath, 'utf-8');

//   if (!tsModule) {
//     tsModule = ensureTypescript();
//   }
  
//   const source = tsModule.createSourceFile(
//     routesPath,
//     routesContents,
//     tsModule.ScriptTarget.Latest,
//     true
//   );

//   insertImport(tree, source, routesPath, `provide${className}`, `./${fileName}/${fileName}.provide`);

//   nxAddProviderToRoute(tree, routesPath, "''", `provide${className}()`);
// }
