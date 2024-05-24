import type { Tree } from '@nx/devkit';
import { names, readProjectConfiguration } from '@nx/devkit';
import type { AngularProjectConfiguration } from '../../../lib/types';
import { normalizeNamePaths } from '../../../lib/normalize-name-paths';
import { buildSelector } from './selector';
import type { ComponentGeneratorSchema } from '../schema';

export function normalizeOptions(
  tree: Tree,
  options: ComponentGeneratorSchema
) {

  switch (options.componentType) {
    case 'routes':
      break;
    case 'entity':
      break;
    case 'form':
      if (!options.name.endsWith('-form')) {
        options.name += '-form';
      }      
      break;
    case 'modal':
      break;
    case 'tabs':
      break;
    case 'tree':
      break;
    case 'nz-select':
      if (!options.name.endsWith('-select')) {
        options.name += '-select';
      }
      break;
  }



  const { rootNames, storeNames, directory, name, path, relationPath, sharedPath, resourceName } =
    normalizeNamePaths(tree, options);

  const { prefix } = readProjectConfiguration(
    tree,
    options.project
  ) as AngularProjectConfiguration;

  const selector =
    options.selector ??
    buildSelector(tree, name, options.prefix, prefix, 'fileName');


  return {
    rootNames,
    storeNames,
    componentType: options.componentType,
    project: options.project,
    prefix: options.prefix ?? prefix,
    pageWrap: options.pageWrap,
    navStyle: options.navStyle,
    name,
    names: names(name),
    directory,
    path,
    relationPath,
    sharedPath,
    resourceName,
    selector
  };
}
