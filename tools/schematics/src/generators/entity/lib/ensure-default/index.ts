import {
  Tree,
  generateFiles,
  joinPathFragments,
  formatFiles,
  applyChangesToString,
  ChangeType,
} from '@nx/devkit';
import { OptionsBuilder } from '../../../../lib/options-builder';
import { getEntityType } from './api-definition';
import { addEntityPropToDefault, Variable } from './add-entity-prop-to-default';
import { Type } from '@abp/ng.schematics/models';

/**
 * 確認 default 檔案是否存在，不存在則產生。
 * 負責生成 __fileName__.default.ts 檔案
 * @returns 是否已建立檔案 (true 表示新建, false 表示已存在)
 */
export async function ensureDefault(
  tree: Tree,
  params: {
    directory: string;
    name: string;
    project: string;
    filesRoot: string; // e.g. __dirname
    entityType?: string;
    createFormType?: string;
    editFormType?: string;
    url?: string;
  }
) {
  // 使用 Builder 計算所有需要的屬性
  const builderResult = new OptionsBuilder(tree, {
    directory: params.directory,
    name: params.name,
    project: params.project,
  })
    .withFeatureNames()
    .withCurrentNames()
    .withSharedPath()
    .withStoreNames() // 添加 storeNames
    .withDirectory()
    .build();

  const { currentNames, sharedPath, featureNames, directory, storeNames } =
    builderResult;

  // 構建檔案路徑
  const defaultFilePath = joinPathFragments(
    directory,
    `${currentNames.fileName}.default.ts`
  );

  // 檢查檔案是否存在
  const fileExists = tree.exists(defaultFilePath);

  let wasCreated = false;

  // 如果檔案不存在，產生 default 檔
  if (!fileExists) {
    generateFiles(
      tree,
      joinPathFragments(params.filesRoot, `files/default`),
      directory,
      {
        names: currentNames,
        fileName: currentNames.fileName,
        featureNames,
        sharedPath,
        storeNames, // 添加 storeNames
        tpl: '',
      }
    );

    wasCreated = true; // 表示新建了檔案
  }

  // 如果提供了 url 以及類型，則嘗試將屬性添加到 default 檔案中
  if (params.url) {
    // 定義三種 variable 與對應 type 的對映
    const variableTypeMap: Array<{
      typeKey: keyof typeof params;
      variable: Variable;
    }> = [
      { typeKey: 'entityType', variable: Variable.ENTITY_PROPS },
      { typeKey: 'createFormType', variable: Variable.CREATE_FORM_PROPS },
      { typeKey: 'editFormType', variable: Variable.EDIT_FORM_PROPS },
    ];

    for (const { typeKey, variable } of variableTypeMap) {
      const typeValue = params[typeKey];
      if (typeof typeValue === 'string' && typeValue.trim().length > 0) {
        const targetType = await getEntityType(params.url, typeValue);
        if (targetType) {
          addEntityPropToDefault(tree, defaultFilePath, targetType, variable);
        }
      }
    }
  }

  return wasCreated;
}

export * from './api-definition';
export * from './add-entity-prop-to-default';
export * from './get-api-definition';
