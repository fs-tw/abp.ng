// import { Tree } from '@nx/devkit';
// import { TypeFileAnalyzer } from './type-file-analyzer';

// /**
//  * 測試函數，用於直接測試 TypeFileAnalyzer 類
//  * @param tree 檔案樹
//  * @param filePath 要測試的檔案路徑
//  */
// export function testTypeAnalyzer(tree: Tree, filePath: string) {
//   console.log(`測試文件: ${filePath}`);
//   console.log(`檔案存在: ${tree.exists(filePath)}`);

//   // 讀取檔案內容
//   if (tree.exists(filePath)) {
//     const contents = tree.read(filePath, 'utf-8');
//     console.log(`檔案內容片段: ${contents?.substring(0, 200)}...`);
//   }

//   // 使用分析器
//   const analyzer = new TypeFileAnalyzer(tree, filePath);
//   const result = analyzer
//     .withPolicyNamesEnum()
//     .withNamesEnum()
//     .withRType()
//     .build();

//   console.log('分析結果:');
//   console.log(JSON.stringify(result, null, 2));

//   return result;
// }
