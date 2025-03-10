import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema } from './schema';
import { normalizeOptions } from './lib/normalize-options';
import { postGenerateFiles, preGenerateFiles } from './lib/generate-files-process';

export async function componentGenerator(
  tree: Tree,
  rawOptions: ComponentGeneratorSchema
) {
  let options = normalizeOptions(tree, rawOptions);
  const componentNames = names(options.name);
  options = {
    ...rawOptions,
    ...{
      rootNames: options.rootNames,
      storeNames: options.storeNames,
      name: options.name,
      names: options.names,
      componentType: options.componentType,
      project: options.project,
      directory: options.directory,
      pageWrap: options.pageWrap,
      navStyle: options.navStyle,
      path: options.path,
      relationPath: options.relationPath,
      sharedPath: options.sharedPath,
      selector: options.selector,
      resourceName: options.resourceName,
      prefix: options.prefix,
      tpl: ''
    },
    ...{
      fileName: componentNames.fileName,
      className: componentNames.className,
      propertyName: componentNames.propertyName,
    },
    ...{
      resourceNames: names(options.resourceName),
      //names_: names
    }
  };

  console.log(options);

  await preGenerateFiles(tree, rawOptions, options);

  generateFiles(
    tree,
    joinPathFragments(__dirname, `files/${options.componentType}`),
    options.directory,
    options);

  await postGenerateFiles(tree, rawOptions, options);




  // if (options.path.trim().length !== 0) {
  //   tree.delete(joinPathFragments(options.directory, `${options.name}.routes.ts`));
  //   tree.delete(joinPathFragments(options.directory, `${options.name}.provide.ts`));
  //   tree.delete(joinPathFragments(options.directory, `${options.name}.localizations.ts`));
  // }

  // if(options.namePath){
  //   console.log(options);
  //   addProviderToRoute(tree, options.path,options.namePath,componentNames.fileName,componentNames.className);
  // }



  await formatFiles(tree);
}

export default componentGenerator;
