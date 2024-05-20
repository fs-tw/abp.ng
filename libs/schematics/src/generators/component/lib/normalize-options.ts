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
