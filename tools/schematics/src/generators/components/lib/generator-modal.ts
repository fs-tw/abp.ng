import { formatFiles, Tree } from '@nx/devkit';
import { ComponentsGeneratorSchema } from '../schema';
import { ensureTypes, ensureDefault, ensureStore, ensureFeature } from '.';
import { ensureComponent } from './ensure-component';

export async function modalGenerator(
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
    'modal'
  );

  // 顯示生成結果
  if (wasFeatureCreated) {
    console.log('已創建新的 feature 檔案');
  }

  if (wasComponentCreated) {
    console.log('已創建新的 component 檔案');
  }

  await formatFiles(tree);
}

export default modalGenerator;
