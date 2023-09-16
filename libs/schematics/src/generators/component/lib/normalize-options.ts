import type { Tree } from '@nx/devkit';
import { names, normalizePath, readProjectConfiguration } from '@nx/devkit';
import type { AngularProjectConfiguration } from './types';
import { normalizeNameAndPaths } from './path';
import { buildSelector } from './selector';
import type { NormalizedSchema, SettingPageGeneratorSchema } from '../schema';

export function normalizeOptions(
  tree: Tree,
  options: SettingPageGeneratorSchema
): NormalizedSchema {
  options.type ??= 'component';
  const { directory, filePath, name, path, root, sourceRoot, namePath } =
    normalizeNameAndPaths(tree, options);

  const featureName = normalizePath(namePath).split('/').reverse().pop();
  const featureNames = names(featureName === '' ? name : featureName);

  const componentNames = names(options.name);

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
    //changeDetection: options.changeDetection ?? 'Default',
    //style: options.style ?? 'css',
    //flat: options.flat ?? false,
    directory,
    filePath,
    path,
    namePath,
    projectSourceRoot: sourceRoot,
    projectRoot: root,
    selector,
    featureNames,
    componentNames
  };
}
