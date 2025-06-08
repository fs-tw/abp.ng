import { Tree, generateFiles, joinPathFragments } from '@nx/devkit';
import { OptionsBuilder } from '../../../../lib';
import { EnsureComponentParams } from './types';

export function ensureTableComponent(
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
    joinPathFragments(params.filesRoot, 'files/component/table'),
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
