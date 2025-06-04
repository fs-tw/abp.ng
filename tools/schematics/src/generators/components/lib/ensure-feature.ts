import { Tree, generateFiles, joinPathFragments } from '@nx/devkit';
import { OptionsBuilder } from '../../../lib/options-builder';

/**
 * 確認 feature 相關檔案是否存在，不存在則產生。
 * Feature 包含四個檔案：
 * - routes.ts
 * - provide.ts
 * - localizations.ts
 * - feature.ts
 * @returns 是否已建立檔案 (true 表示新建, false 表示已存在)
 */
export function ensureFeature(
  tree: Tree,
  params: {
    directory: string;
    name: string;
    project: string;
    filesRoot: string; // e.g. __dirname
  }
): boolean {
  // 步驟1: 先取得 featureNames
  const featureResult = new OptionsBuilder(tree, {
    directory: params.directory,
    name: params.name,
    project: params.project,
  })
    .withFeatureNames()
    .build();

  const { featureNames } = featureResult;

  // 步驟2: 用 featureNames 來取得正確的目錄
  const directoryResult = new OptionsBuilder(tree, {
    directory: params.directory,
    name: featureNames.name, // 使用 featureNames
    project: params.project,
  })
    .withDirectory()
    .build();

  const { directory } = directoryResult;

  // 構建路由檔案路徑作為檢查點
  const routesFilePath = joinPathFragments(
    directory,
    `${featureNames.fileName}.routes.ts`
  );

  // 如果路由檔案存在，表示整個 feature 已經生成過
  if (tree.exists(routesFilePath)) {
    return false;
  }

  // 產生所有 feature 相關檔案
  generateFiles(
    tree,
    joinPathFragments(params.filesRoot, 'files/feature'),
    directory,
    {
      names: featureNames,
      fileName: featureNames.fileName,
      featureNames,
      tpl: '',
    }
  );

  return true;
}
