import {
  Tree, formatFiles,
} from '@nx/devkit';
import { ExtensionsGeneratorSchema } from './schema';
import { getApiDefinition } from './/lib/get-api-definition'
import { ApiDefinition, Type } from '@abp/ng.schematics/models';
import { addEntityPropToDefault } from './lib/add-entity-prop-to-default';
import { normalizeNameAndPaths } from './lib/normalize-name-and-paths';

export async function extensionsGenerator(
  tree: Tree,
  options: ExtensionsGeneratorSchema
) {

  const path = normalizeNameAndPaths(tree, options);

  const apiDefinition: ApiDefinition = await getApiDefinition(options.url);

  const targets = Object.keys(apiDefinition.types).filter(key => key.includes(options.type));

  if (targets.length === 0) {
    console.log('No target found. Please check your url or dto type name.');
    return;
  }

  if (targets.length > 1) {
    console.log('More than one target found. Please select one of them.');
    return;
  }

  const targetType: Type & { name: string } = {
    ...{ name: targets[0] },
    ...apiDefinition.types[targets[0]],
  };

  addEntityPropToDefault(tree, path.filePath, targetType, options.variable);



  await formatFiles(tree);
}

export default extensionsGenerator;
