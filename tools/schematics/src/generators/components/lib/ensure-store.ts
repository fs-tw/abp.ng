import { Tree, generateFiles, joinPathFragments } from '@nx/devkit';
import { OptionsBuilder } from '../../../lib/options-builder';
import { ComponentKind } from '../schema';

/**
 * 確認 store 檔案是否存在，不存在則產生。
 * 負責生成 __fileName__.store.ts 檔案
 * 只有 entity 和 select 元件需要 store
 * @returns 是否已建立檔案 (true 表示新建, false 表示已存在)
 */
export function ensureStore(
  tree: Tree,
  params: {
    directory: string;
    name: string;
    project: string;
    filesRoot: string;
  },
  componentType: ComponentKind
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
    // 根據組件類型決定使用哪個範本
    let storeTemplatePath: string;
    switch (componentType) {
      case 'select':
        storeTemplatePath = joinPathFragments(
          params.filesRoot,
          'files/store/select'
        );
        break;
      case 'entity':
        storeTemplatePath = joinPathFragments(
          params.filesRoot,
          'files/store/entity'
        );
        break;
      default:
        // 其他類型不需要 store
        return false;
    }

    generateFiles(tree, storeTemplatePath, directory, {
      names: currentNames,
      fileName: currentNames.fileName,
      featureNames,
      sharedPath,
      storeNames,
      tpl: '',
    });

    return true; // 表示新建了檔案
  }

  return false; // 表示檔案已存在，未進行任何操作
}
