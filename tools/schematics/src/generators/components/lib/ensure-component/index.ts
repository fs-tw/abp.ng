import { Tree } from '@nx/devkit';
import { ComponentKind } from '../../schema';
import { EnsureComponentParams } from './types';
import { ensureEntityComponent } from './entity';
import { ensureFormComponent } from './form';
import { ensureModalComponent } from './modal';
import { ensureSelectComponent } from './select';

export function ensureComponent(
  tree: Tree,
  params: EnsureComponentParams,
  componentType: ComponentKind
): boolean {
  switch (componentType) {
    case 'entity':
      return ensureEntityComponent(tree, params);
    case 'form':
      return ensureFormComponent(tree, params);
    case 'modal':
      return ensureModalComponent(tree, params);
    case 'select':
      return ensureSelectComponent(tree, params);
    default:
      throw new Error(`未支援的元件類型: ${componentType}`);
  }
}
