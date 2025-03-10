import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  joinPathFragments,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ExtensionsGeneratorSchema } from './schema';
import { normalizeNamePaths } from '../../lib';
import { getEntityType } from './lib/api-definition';
import { addEntityPropToDefault } from './lib/add-entity-prop-to-default';

export async function extensionsGenerator(
  tree: Tree,
  options: ExtensionsGeneratorSchema
) {
  const { directory, fileName, rootNames } = normalizeNamePaths(tree, options);

  const _options = {
    ...options,
    ...{
      rootNames: rootNames
    },
  }

  const targetType = await getEntityType(options.url, options.type);


  const fileFullName = joinPathFragments(directory, `${fileName}.default.ts`);

  if (targetType)
    addEntityPropToDefault(tree, fileFullName, targetType, _options);

  await formatFiles(tree);
}

export default extensionsGenerator;
