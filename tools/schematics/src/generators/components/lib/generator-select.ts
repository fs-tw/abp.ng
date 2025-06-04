import { formatFiles, Tree } from '@nx/devkit';
import { ComponentsGeneratorSchema } from '../schema';
import { ensureTypes, ensureDefault, ensureStore, ensureFeature } from '.';
import { ensureComponent } from './ensure-component';

export async function selectGenerator(
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

  // 產生 types 檔案 - 使用 ComponentKind 參數
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
      },
      filesRoot,
    },
    'select'
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
    'select'
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
    'select'
  );

  // 顯示生成結果
  if (wasFeatureCreated) {
    console.log('已創建新的 feature 檔案');
  }

  if (wasTypesCreated) {
    console.log('已創建新的 types 檔案');
  }

  if (wasStoreCreated) {
    console.log('已創建新的 store 檔案');
  }

  if (wasComponentCreated) {
    console.log('已創建新的 component 檔案');
  }

  await formatFiles(tree);
}

export default selectGenerator;
