import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree
} from '@nx/devkit';
import { ComponentGeneratorSchema } from './schema';
import { normalizeOptions } from './lib/normalize-options';

export async function componentGenerator(
  tree: Tree,
  rawOptions: ComponentGeneratorSchema
) {

  let options = normalizeOptions(tree, rawOptions);
  const componentNames = names(options.name);
  options = {
    ...options,
    ...{
      fileName: componentNames.fileName,
      className: componentNames.className,
      propertyName: componentNames.propertyName,
      tpl: ''
    }
  };

  console.log(options);

  generateFiles(
    tree,
    joinPathFragments(__dirname, `files/${options.componentType}`),
    options.directory,
    options);

  if (options.path.trim().length !== 0) {
    tree.delete(joinPathFragments(options.directory, `${options.name}.routes.ts`));
    tree.delete(joinPathFragments(options.directory, `${options.name}.provide.ts`));
    tree.delete(joinPathFragments(options.directory, `${options.name}.localizations.ts`));
  }

  // if(options.namePath){
  //   console.log(options);
  //   addProviderToRoute(tree, options.path,options.namePath,componentNames.fileName,componentNames.className);
  // }



  await formatFiles(tree);
}

export default componentGenerator;
