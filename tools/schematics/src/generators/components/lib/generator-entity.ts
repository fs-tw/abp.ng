import { formatFiles, Tree, joinPathFragments } from '@nx/devkit';
import { ComponentsGeneratorSchema } from '../schema';
import { ensureTypes, ensureDefault, ensureStore, ensureFeature } from '.';
import { ensureComponent } from './ensure-component';

export async function entityGenerator(
  tree: Tree,
  options: ComponentsGeneratorSchema,
  filesRoot: string
) {
  // 產生 feature 檔案（如果需要）
  const wasFeatureCreated = ensureFeature(tree, {
    directory: options.directory,
    name: options.name,
    project: options.project,
    filesRoot,
  });

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
    'entity' // 使用 ComponentKind
  );

  // 產生 default 檔案，並傳遞擴展相關的參數
  const wasDefaultCreated = await ensureDefault(tree, {
    directory: options.directory,
    name: options.name,
    project: options.project,
    // 擴展支持 API 定義相關參數
    url: options.url,
    entityType: options.entityType,
    createFormType: options.createFormType,
    editFormType: options.editFormType,
    filesRoot,
  });

  // 產生 store 檔案
  const wasStoreCreated = ensureStore(
    tree,
    {
      directory: options.directory,
      name: options.name,
      project: options.project,
      filesRoot,
    },
    'entity'
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
    },
    'entity'
  );

  // 顯示生成結果
  if (wasFeatureCreated) {
    console.log('已創建新的 feature 檔案');
  }

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

export default entityGenerator;
