import { Tree, generateFiles, joinPathFragments } from '@nx/devkit';
import { OptionsBuilder } from '../../../lib/options-builder';

/**
 * 確認 type 檔案是否存在，不存在則產生。簡化版本，暫不分析檔案內容。
 * @returns 是否已建立檔案 (true 表示新建, false 表示已存在)
 */
import { ComponentKind } from '../schema';

export function ensureTypes(
  tree: Tree,
  params: {
    directory: string;
    name: string;
    project: string;
    crudProxy?: any;
    filesRoot: string; // e.g. __dirname
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
    .withDirectory()
    .build();

  const { currentNames, sharedPath, featureNames, directory } = builderResult;

  // 構建檔案路徑
  const typeFilePath = joinPathFragments(
    directory,
    `${currentNames.fileName}.types.ts`
  );
  // 檢查檔案是否存在
  const fileExists = tree.exists(typeFilePath);

  // 如果檔案不存在，產生 type 檔
  if (!fileExists) {
    // 根據組件類型決定使用哪個範本
    let typeTemplatePath: string;
    switch (componentType) {
      case 'select':
        typeTemplatePath = joinPathFragments(
          params.filesRoot,
          'files/types/select'
        );
        break;
      case 'entity':
      case 'form':
      case 'modal':
        typeTemplatePath = joinPathFragments(
          params.filesRoot,
          'files/types/entity'
        );
        break;
      default:
        throw new Error(`未支援的元件類型: ${componentType}`);
    }

    generateFiles(tree, typeTemplatePath, directory, {
      names: currentNames,
      fileName: currentNames.fileName,
      featureNames,
      sharedPath,
      crudProxy: params.crudProxy ?? {
        entityServiceType: '',
        listInputType: '',
        entityType: '',
        createFormType: '',
        editFormType: '',
      },
      tpl: '',
    });

    // 顯示生成結果和提示訊息
    console.log('\n=== Types 檔案生成結果 ===');
    console.log(`檔案位置: ${typeFilePath}`);
    console.log('\n注意事項:');
    console.log('1. 請檢查並補充以下依賴項:');
    console.log('   - IdentityUserService');
    console.log('   - GetIdentityUsersInput');
    console.log('   - IdentityUserDto');
    console.log('   - IdentityUserCreateDto');
    console.log('   - IdentityUserUpdateDto');
    console.log('\n2. 這些型別通常來自 @abp 生成的Proxy模組');
    console.log('   未來將由 AI 協助推斷正確的 import 路徑\n');

    return true; // 表示新建了檔案
  }

  return false; // 表示檔案已存在，未進行任何操作
}
