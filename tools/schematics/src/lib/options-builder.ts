import {
  normalizePath,
  joinPathFragments,
  names,
  Tree,
  readProjectConfiguration,
} from '@nx/devkit';
import { getNpmScope } from '@nx/js/src/utils/package-json/get-npm-scope';
import type { AngularProjectConfiguration } from './types';

export class OptionsBuilder {
  private tree: Tree = null;
  private option: {
    project: string;
    name: string;
    directory: string;
  };
  private result: Record<string, any> = {};

  constructor(
    tree: Tree,
    option: {
      directory: string;
      name: string;
      project: string;
    }
  ) {
    this.tree = tree;
    this.option = option;
  }
  /**
   * 計算目錄的完整路徑，參考 normalize-name-paths.ts 的邏輯
   * 直接使用 joinPathFragments 來處理路徑拼接
   *
   * @param projectSourceRoot 專案原始碼根目錄
   * @param projectType 專案類型 (application 或 library)
   * @returns this
   */
  withDirectory() {
    const { root, sourceRoot, projectType } = readProjectConfiguration(
      this.tree,
      this.option.project
    );

    const projectSourceRoot = sourceRoot ?? joinPathFragments(root, 'src');
    const directory = joinPathFragments(
      projectSourceRoot,
      projectType === 'application' ? 'app' : 'lib',
      this.option.directory,
      this.option.name
    );

    // 直接存儲字串格式的完整路徑
    this.result.directory = directory;

    return this;
  }

  withFeatureNames() {
    const parsedName = normalizePath(this.option.name).split('/');

    // 從 parsedName[0] 建立 featureNames，只使用 names() 函式的結果
    this.result.featureNames = names(parsedName[0]);

    return this;
  }
  withCurrentNames() {
    const parsedName = normalizePath(this.option.name).split('/');
    const filteredParts = parsedName.filter((x) => x.trim().length !== 0);

    // 從最後一層取得 currentNames
    if (filteredParts.length > 0) {
      const currentPart = filteredParts[filteredParts.length - 1];
      this.result.currentNames = names(currentPart);
    }

    return this;
  }
  /**
   * 計算到 shared 資料夾的相對路徑，參考 parse-name-with-path.ts 的實作
   * @returns this
   */
  withSharedPath() {
    const parsedName = normalizePath(this.option.name).split('/');
    const nameLength = parsedName.filter((x) => x.trim().length !== 0).length;
    const parsedDirectory = normalizePath(this.option.directory).split('/');
    const directoryLength = parsedDirectory.filter(
      (x) => x.trim().length !== 0
    ).length;

    // 參考 parseNameWithPath 邏輯，計算到 shared 資料夾的相對路徑
    this.result.sharedPath = joinPathFragments(
      getRelationPath(nameLength + directoryLength),
      'shared'
    );

    // 同時計算 relationPath (回上層的相對路徑)
    this.result.relationPath = getRelationPath(
      nameLength - 1 + directoryLength
    );

    return this;
  }

  /**
   * 建立 storeNames，參考 parse-name-with-path.ts 的實作
   * 為當前元件名稱添加 .store 後綴，然後使用 names() 函式轉換
   * @returns this
   */
  withStoreNames() {
    // 確保已經計算了 currentNames
    if (!this.result.currentNames) {
      this.withCurrentNames();
    }

    // 使用 currentNames.fileName 或從 name 中提取最後一部分
    const baseName =
      this.result.currentNames?.fileName ||
      normalizePath(this.option.name).split('/').pop();

    // 生成 store 的名稱
    this.result.storeNames = names(`${baseName}.store`);

    return this;
  }
  /**
   * 計算選擇器
   * 簡化版本，只使用 userPrefix 或 projectPrefix
   * @param userPrefix 使用者指定的前綴（可選）
   * @param casing 要使用的名稱轉換樣式 ('fileName' 或 'propertyName')，預設為 'fileName'
   * @returns this
   */
  withSelector(
    userPrefix?: string,
    casing: 'fileName' | 'propertyName' = 'fileName'
  ) {
    // 確保已經計算了 currentNames
    if (!this.result.currentNames) {
      this.withCurrentNames();
    }

    // 從最後一部分取得名稱
    const name = normalizePath(this.option.name).split('/').pop();

    // 讀取專案設定以取得專案前綴
    const { prefix: projectPrefix } = readProjectConfiguration(
      this.tree,
      this.option.project
    ) as AngularProjectConfiguration;

    // 優先使用使用者指定的前綴，如果沒有則使用專案前綴
    const prefix = userPrefix || projectPrefix;

    // 建立選擇器
    let selector = name;
    if (prefix) {
      selector = `${prefix}-${selector}`;
    }

    // 使用指定的 casing 進行轉換
    this.result.selector = names(selector)[casing];

    return this;
  }

  build() {
    return this.result;
  }
}

/**
 * 產生上層相對路徑 (例如 ../../)
 * @param length 路徑深度
 * @returns 相對路徑字串
 */
function getRelationPath(length: number): string {
  return [...Array(length)].map(() => '../').join('');
}
