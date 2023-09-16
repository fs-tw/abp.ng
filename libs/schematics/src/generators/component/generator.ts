import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree
} from '@nx/devkit';
import { SettingPageGeneratorSchema } from './schema';
import { normalizeOptions } from './lib/normalize-options';

export async function settingPageGenerator(
  tree: Tree,
  rawOptions: SettingPageGeneratorSchema
) {

  let options = normalizeOptions(tree, rawOptions);
  const componentNames = names(options.name);
  const typeNames = names('component');
  const namePathNames = names(options.namePath);
  options = {
    ...options,
    ...{
      fileName: componentNames.fileName,
      className: componentNames.className,
      type: typeNames.fileName,
      typeClassName: typeNames.className,
      propertyName: componentNames.propertyName,
      constantName: componentNames.constantName,
      namePathName: namePathNames.className,
      tpl: '',
      flat: true
    }
  };

  generateFiles(
    tree,
    joinPathFragments(__dirname, `files/${options.componentType}`),
    options.directory,
    options);

  // if(options.namePath){
  //   console.log(options);
  //   addProviderToRoute(tree, options.path,options.namePath,componentNames.fileName,componentNames.className);
  // }

  console.log(options);

  await formatFiles(tree);
}

export default settingPageGenerator;
