import { Tree, generateFiles, joinPathFragments } from '@nx/devkit';
import { OptionsBuilder } from '../../../../lib/options-builder';
import { EnsureComponentParams } from './types';

export function ensureSelectComponent(
  tree: Tree,
  params: EnsureComponentParams
): boolean {
  const builderResult = new OptionsBuilder(tree, {
    directory: params.directory,
    name: params.name,
    project: params.project,
  })
    .withFeatureNames()
    .withCurrentNames()
    .withSharedPath()
    .withStoreNames()
    .withSelector(params.prefix)
    .withDirectory()
    .build();

  const {
    currentNames,
    sharedPath,
    featureNames,
    directory,
    storeNames,
    selector,
  } = builderResult;

  const componentFilePath = joinPathFragments(
    directory,
    `${currentNames.fileName}.component.ts`
  );

  if (tree.exists(componentFilePath)) {
    return false;
  }

  generateFiles(
    tree,
    joinPathFragments(params.filesRoot, 'files/component/select'),
    directory,
    {
      names: currentNames,
      fileName: currentNames.fileName,
      featureNames,
      sharedPath,
      storeNames,
      selector,
      propertyName: currentNames.propertyName,
      tpl: '',
    }
  );

  return true;
}

export default ensureSelectComponent;
