import { formatFiles, Tree, joinPathFragments } from '@nx/devkit';
import { ComponentsGeneratorSchema } from './schema';
import {
  ensureTypes,
  ensureDefault,
  ensureStore,
  ensureComponent,
  ensureFeature,
} from './lib';

export async function componentsGenerator(
  tree: Tree,
  options: ComponentsGeneratorSchema
) {
  // 產生 feature 檔案（如果需要）
  const wasFeatureCreated = ensureFeature(tree, {
    directory: options.directory,
    name: options.name,
    project: options.project,
    filesRoot: __dirname,
  });

  // 產生 types 檔案
  const wasTypesCreated = ensureTypes(tree, {
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
    filesRoot: __dirname,
  });

  // 產生 default 檔案，並傳遞擴展相關的參數
  const wasDefaultCreated = await ensureDefault(tree, {
    directory: options.directory,
    name: options.name,
    project: options.project,
    filesRoot: __dirname,
    // 擴展支持 API 定義相關參數
    url: options.url,
    entityType: options.entityType,
    createFormType: options.createFormType,
    editFormType: options.editFormType,
  });

  // 產生 store 檔案
  const wasStoreCreated = ensureStore(tree, {
    directory: options.directory,
    name: options.name,
    project: options.project,
    filesRoot: __dirname,
  });

  // 產生 component 檔案
  const wasComponentCreated = ensureComponent(tree, {
    directory: options.directory,
    name: options.name,
    project: options.project,
    prefix: options.prefix, // 可能來自選項
    filesRoot: __dirname,
  });

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
    console.log('已創建新的 component 檔案');
  }

  await formatFiles(tree);
}

export default componentsGenerator;
