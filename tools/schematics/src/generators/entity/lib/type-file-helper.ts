// import { Tree, generateFiles, joinPathFragments } from '@nx/devkit';
// import { OptionsBuilder } from '../../../lib/options-builder';
// import { TypeFileAnalyzer } from './type-file-analyzer';

// /**
//  * 確認 type 檔案是否存在，不存在則產生，然後分析其內容。
//  * @returns 檔案分析結果，包含檔案狀態與枚舉資訊
//  */
// export function ensureTypeFile(
//   tree: Tree,
//   params: {
//     directory: string;
//     name: string;
//     project: string;
//     crudProxy?: any;
//     filesRoot: string; // e.g. __dirname
//   }
// ): {
//   wasCreated: boolean;
//   exists: boolean;
//   isCompatible: boolean;
//   policyNamesEnum?: string;
//   namesEnum?: string;
//   hasRType?: boolean;
//   issues?: string[];
// } {
//   // 使用 Builder 計算所有需要的屬性
//   const builderResult = new OptionsBuilder(tree, {
//     directory: params.directory,
//     name: params.name,
//     project: params.project,
//   })
//     .withFeatureNames()
//     .withCurrentNames()
//     .withSharedPath()
//     .withDirectory()
//     .build();

//   const { currentNames, sharedPath, featureNames, directory } = builderResult;

//   // 構建檔案路徑
//   const typeFilePath = joinPathFragments(
//     directory,
//     `${currentNames.fileName}.types.ts`
//   );

//   // 檢查檔案是否存在
//   const fileExists = tree.exists(typeFilePath);

//   // 如果檔案不存在，產生 type 檔
//   if (!fileExists) {
//     generateFiles(
//       tree,
//       joinPathFragments(params.filesRoot, `files/types`),
//       directory,
//       {
//         names: currentNames,
//         fileName: currentNames.fileName,
//         featureNames,
//         sharedPath,
//         crudProxy: params.crudProxy ?? {
//           entityServiceType: '',
//           listInputType: '',
//           entityType: '',
//           createFormType: '',
//           editFormType: '',
//         },
//         tpl: '',
//       }
//     );
//   }

//   // 無論檔案是否新建，都進行分析
//   const analyzer = new TypeFileAnalyzer(tree, typeFilePath);
//   const analysisResult = analyzer
//     .withPolicyNamesEnum()
//     .withNamesEnum()
//     .withRType()
//     .build(); // 合併返回結果
//   return {
//     wasCreated: !fileExists,
//     exists: true, // 現在檔案一定存在
//     isCompatible: analysisResult.isCompatible,
//     policyNamesEnum: analysisResult.policyNamesEnum,
//     namesEnum: analysisResult.namesEnum,
//     hasRType: analysisResult.hasRType,
//     issues: analysisResult.issues,
//   };
// }
