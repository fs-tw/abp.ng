import { formatFiles, Tree } from '@nx/devkit';
import { ComponentsGeneratorSchema } from './schema';
import {
  entityGenerator,
  formGenerator,
  modalGenerator,
  selectGenerator,
} from './lib';
import tableGenerator from './lib/generator-table';

export async function componentsGenerator(
  tree: Tree,
  options: ComponentsGeneratorSchema
) {
  console.log('開始生成元件:', options.componentType);
  switch (options.componentType) {
    case 'entity':
      await entityGenerator(tree, options, __dirname);
      break;
    case 'table':
      await tableGenerator(tree, options, __dirname);
      break;
    case 'form':
      await formGenerator(tree, options, __dirname);
      break;
    case 'modal':
      await modalGenerator(tree, options, __dirname);
      break;
    case 'select':
      await selectGenerator(tree, options, __dirname);
      break;
    default:
      throw new Error(`未支援的元件類型: ${options.componentType}`);
  }

  await formatFiles(tree);
}

export default componentsGenerator;
