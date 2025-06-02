import { Tree, generateFiles, joinPathFragments } from '@nx/devkit';
import { OptionsBuilder } from '../../../lib/options-builder';

/**
 * 確認 component 檔案是否存在，不存在則產生。
 * 負責生成 __fileName__.component.ts 和 __fileName__.component.html 檔案
 * @returns 是否已建立檔案 (true 表示新建, false 表示已存在)
 */
export function ensureComponent(
  tree: Tree,
  params: {
    directory: string;
    name: string;
    project: string;
    prefix?: string;
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
    .withStoreNames()
    .withSelector(params.prefix) // 添加選擇器
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

  // 構建檔案路徑 - 檢查 .ts 檔案即可
  const componentFilePath = joinPathFragments(
    directory,
    `${currentNames.fileName}.component.ts`
  );

  // 檢查檔案是否存在
  const fileExists = tree.exists(componentFilePath);

  // 如果檔案不存在，產生 component 檔
  if (!fileExists) {
    generateFiles(
      tree,
      joinPathFragments(params.filesRoot, `files/component`),
      directory,
      {
        names: currentNames,
        fileName: currentNames.fileName,
        featureNames, // 使用 featureNames 代替 rootNames
        sharedPath,
        storeNames,
        selector,
        propertyName: currentNames.propertyName, // 確保模板中的 propertyName 可用
        tpl: '',
      }
    );

    return true; // 表示新建了檔案
  }

  return false; // 表示檔案已存在，未進行任何操作
}
