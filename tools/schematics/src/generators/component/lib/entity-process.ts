import { Tree } from '@nx/devkit';
import extensionsGenerator from '../../extensions/generator';
import { ComponentGeneratorSchema } from '../schema';

export async function executeExtensions(
  tree: Tree,
  rawOptions: ComponentGeneratorSchema
) {
  if (rawOptions.url.trim().length === 0) return;

  // 只需呼叫一次 extensionsGenerator，傳入三種 type
  await extensionsGenerator(tree, {
    directory: rawOptions.directory,
    url: rawOptions.url,
    project: rawOptions.project,
    name: rawOptions.name,
    entityType: rawOptions.entityType,
    createFormType: rawOptions.createFormType,
    editFormType: rawOptions.editFormType,
  });
}
