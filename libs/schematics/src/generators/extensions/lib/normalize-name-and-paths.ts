import { Tree, joinPathFragments, readProjectConfiguration } from '@nx/devkit';
import { ExtensionsGeneratorSchema } from '../schema';
import { parseNameWithPath } from './names';
import { GenerationPaths } from './generation-paths';


export function normalizeNameAndPaths(
  tree: Tree,
  options: ExtensionsGeneratorSchema
): GenerationPaths {
  const { root, sourceRoot, projectType } = readProjectConfiguration(
    tree,
    options.project
  );

  const projectSourceRoot = sourceRoot ?? joinPathFragments(root, 'src');
  const { name, path: namePath } = parseNameWithPath(options.name);

  const path = joinPathFragments(
    projectSourceRoot,
    projectType === 'application' ? 'app' : 'lib',
    namePath
  );



  const directory = joinPathFragments(path, name);


  const fileName = `${name}.default`;

  const filePath = joinPathFragments(directory, `${fileName}.ts`);

  return {
    directory,
    fileName,
    filePath,
    name,
    path,
    root,
    sourceRoot,
    namePath
  };
}
