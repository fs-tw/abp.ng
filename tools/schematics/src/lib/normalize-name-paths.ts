import type { Tree } from '@nx/devkit';
import {
  joinPathFragments,
  readProjectConfiguration
} from '@nx/devkit';
import { parseNameWithPath } from './parse-name-with-path';
import { InputOptions } from './types';


export function normalizeNamePaths(
  tree: Tree,
  options: InputOptions
) {
  const { root, sourceRoot, projectType } = readProjectConfiguration(
    tree,
    options.project
  );

  const projectSourceRoot = sourceRoot ?? joinPathFragments(root, 'src');
  const { rootNames, storeNames, name, path, relationPath, sharedPath, resourceName } = parseNameWithPath(options);

  const directory = joinPathFragments(
    projectSourceRoot,
    projectType === 'application' ? 'app' : 'lib',
    options.directory,
    path,
    name
  );

  // const fileName = options.namePostFix
  //   ? `${name}.${names(options.namePostFix).fileName}`
  //   : name;
  const fileName = name;

  return {
    rootNames,
    storeNames,
    directory,
    fileName,
    path,
    name,
    relationPath,
    sharedPath,
    resourceName
  };
}
