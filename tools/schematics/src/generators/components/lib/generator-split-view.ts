import { formatFiles, Tree, joinPathFragments } from '@nx/devkit';
import { ComponentsGeneratorSchema } from '../schema';
import { ensureTypes, ensureDefault, ensureStore } from '.';
import { ensureComponent } from './ensure-component';

export async function splitViewGenerator(
  tree: Tree,
  options: ComponentsGeneratorSchema,
  filesRoot: string
) {
  // 產生 types 檔案
  const wasTypesCreated = ensureTypes(
    tree,
    {
      directory: options.directory,
      name: options.name,
      project: options.project,
      crudProxy: {
        entityServiceType: options.entityServiceType || '',
        listInputType: options.listInputType || '',
        entityType: options.entityType || '',
        createFormType: options.createFormType || '',
        editFormType: options.editFormType || '',
      },
      filesRoot,
    },
    'split-view'
  );

  // 產生 default 檔案
  const wasDefaultCreated = await ensureDefault(
    tree,
    {
      directory: options.directory,
      name: options.name,
      project: options.project,
      url: options.url,
      entityType: options.entityType,
      createFormType: options.createFormType,
      editFormType: options.editFormType,
      filesRoot,
    },
    'split-view'
  );

  // 產生 store 檔案
  const wasStoreCreated = ensureStore(
    tree,
    {
      directory: options.directory,
      name: options.name,
      project: options.project,
      filesRoot,
    },
    'split-view'
  );

  // 產生 component 檔案
  const wasComponentCreated = ensureComponent(
    tree,
    {
      directory: options.directory,
      name: options.name,
      project: options.project,
      prefix: options.prefix,
      filesRoot,
      detailType: options.detailType,
    },
    'split-view'
  );

  // 顯示生成結果
  if (wasTypesCreated) {
    console.log('已創建新的 types 檔案');
  }

  if (wasDefaultCreated) {
    console.log('已創建新的 default 檔案');
  }

  if (wasStoreCreated) {
    console.log('已創建新的 store 檔案');
  }

  if (wasComponentCreated) {
    console.log('已創建新的 split-view component 檔案');
  }

  await formatFiles(tree);
}

export default splitViewGenerator;
