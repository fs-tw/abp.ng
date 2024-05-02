import type { Tree } from '@nx/devkit';
import {
  joinPathFragments,
  names,
  readProjectConfiguration
} from '@nx/devkit';
import { parseNameWithPath } from './names';
type InputOptions = {
  name: string;
  project: string;
  path?: string;
  type?: string;
};

type OutputOptions = {
  directory: string;
  fileName: string;
  name: string;
  path: string;
  relationPath: string;
  resourceName: string;
};


export function normalizeNamePaths(
  tree: Tree,
  options: InputOptions
): OutputOptions {
  const { root, sourceRoot, projectType } = readProjectConfiguration(
    tree,
    options.project
  );

  const projectSourceRoot = sourceRoot ?? joinPathFragments(root, 'src');
  const { name, path, relationPath, resourceName } = parseNameWithPath(options.name);

  const fullPath = joinPathFragments(
    projectSourceRoot,
    projectType === 'application' ? 'app' : 'lib',
    path
  );

  const directory = joinPathFragments(fullPath, name);

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
