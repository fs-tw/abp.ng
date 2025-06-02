import { Tree, generateFiles, joinPathFragments } from '@nx/devkit';
import { OptionsBuilder } from '../../../lib/options-builder';

/**
 * 確認 store 檔案是否存在，不存在則產生。
 * 負責生成 __fileName__.store.ts 檔案
 * @returns 是否已建立檔案 (true 表示新建, false 表示已存在)
 */
export function ensureStore(
  tree: Tree,
  params: {
    directory: string;
    name: string;
    project: string;
    filesRoot: string; // e.g. __dirname
  }
): boolean {
  // 使用 Builder 計算所有需要的屬性
  const builderResult = new OptionsBuilder(tree, {
    directory: params.directory,
    name: params.name,
    project: params.project,
  })
    .withFeatureNames()
    .withCurrentNames()
    .withSharedPath()
    .withStoreNames() // store 檔案需要 storeNames
    .withDirectory()
    .build();

  const { currentNames, sharedPath, featureNames, directory, storeNames } =
    builderResult;

  // 構建檔案路徑
  const storeFilePath = joinPathFragments(
    directory,
    `${currentNames.fileName}.store.ts`
  );

  // 檢查檔案是否存在
  const fileExists = tree.exists(storeFilePath);

  // 如果檔案不存在，產生 store 檔
  if (!fileExists) {
    generateFiles(
      tree,
      joinPathFragments(params.filesRoot, `files/store`),
      directory,
      {
        names: currentNames,
        fileName: currentNames.fileName,
        featureNames,
        sharedPath,
        storeNames,
        tpl: '',
      }
    );

    return true; // 表示新建了檔案
  }

  return false; // 表示檔案已存在，未進行任何操作
}
