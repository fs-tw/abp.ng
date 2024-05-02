import type { Tree } from '@nx/devkit';
import { readProjectConfiguration } from '@nx/devkit';
import type { AngularProjectConfiguration } from './types';
import { normalizeNamePaths } from './normalize-name-paths';
import { buildSelector } from './selector';
import type { NormalizedSchema, ComponentGeneratorSchema } from '../schema';

export function normalizeOptions(
  tree: Tree,
  options: ComponentGeneratorSchema
): NormalizedSchema {
  const { directory, name, path, relationPath, resourceName } =
    normalizeNamePaths(tree, options);

  const { prefix } = readProjectConfiguration(
    tree,
    options.project
  ) as AngularProjectConfiguration;

  const selector =
    options.selector ??
    buildSelector(tree, name, options.prefix, prefix, 'fileName');

  return {
    ...options,
    name,
    directory,
    path,
    relationPath,
    selector,
    resourceName
  };
}
