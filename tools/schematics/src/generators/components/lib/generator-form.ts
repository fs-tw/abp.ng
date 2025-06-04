import { formatFiles, Tree } from '@nx/devkit';
import { ComponentsGeneratorSchema } from '../schema';
import { ensureComponent } from './ensure-component';

export async function formGenerator(
  tree: Tree,
  options: ComponentsGeneratorSchema,
  filesRoot: string
) {
  // form 類型只需要產生 component 檔案
  const wasComponentCreated = ensureComponent(
    tree,
    {
      directory: options.directory,
      name: options.name,
      project: options.project,
      prefix: options.prefix,
      filesRoot,
    },
    'form'
  );

  if (wasComponentCreated) {
    console.log('已創建新的 component 檔案');
  }

  await formatFiles(tree);
}

export default formGenerator;
