import type { Tree } from '@nx/devkit';
import {
  joinPathFragments,
  names,
  readProjectConfiguration
} from '@nx/devkit';
import { parseNameWithPath } from './parse-name-with-path';
import { InputOptions, OutputOptions } from './types';


export function normalizeNamePaths(
  tree: Tree,
  options: InputOptions
): OutputOptions {
  const { root, sourceRoot, projectType } = readProjectConfiguration(
    tree,
    options.project
  );

  const projectSourceRoot = sourceRoot ?? joinPathFragments(root, 'src');
  const { name, path, relationPath, resourceName } = parseNameWithPath(options);

  const directory = joinPathFragments(
    projectSourceRoot,
    projectType === 'application' ? 'app' : 'lib',
    options.directory,
    path,
    name
  );

  const fileName = options.type
    ? `${name}.${names(options.type).fileName}`
    : name;

  return {
    directory,
    fileName,
    path,
    name,
    relationPath,
    resourceName
  };
}
