// import { Tree } from '@nx/devkit';

// /**
//  * 更簡單的方式：不依賴 AST 分析，直接使用字符串處理
//  * 這樣可以避免複雜的 AST 解析問題
//  */

// /**
//  * TypeFile 分析器，採用 Builder 風格 API
//  * 實作懶加載分析，每個 with* 方法調用時才進行相應的分析
//  * 可用於檢查和分析 .types.ts 文件中的關鍵結構，如枚舉和類型定義
//  */
// export class TypeFileAnalyzer {
//   private tree: Tree;
//   private filePath: string;
//   private ast: any = null;
//   private result: Record<string, any> = {
//     exists: false,
//     isCompatible: true,
//     issues: [],
//   };

//   /**
//    * 建構子，初始化分析器
//    * @param tree 檔案樹
//    * @param filePath 要分析的檔案路徑
//    */
//   constructor(tree: Tree, filePath: string) {
//     this.tree = tree;
//     this.filePath = filePath;
//   }

//   /**
//    * 檢查檔案是否存在並讀取內容
//    * @returns AST 或 null
//    */
//   private ensureAst(): any | null {
//     if (this.ast) return this.ast;

//     ensureTsQuery();

//     // 檢查檔案是否存在
//     if (!this.tree.exists(this.filePath)) {
//       this.result.exists = false;
//       this.result.issues.push(`檔案不存在: ${this.filePath}`);
//       return null;
//     }

//     this.result.exists = true;

//     // 讀取檔案內容
//     const contents = this.tree.read(this.filePath, 'utf-8');
//     if (!contents) {
//       this.result.issues.push(`無法讀取檔案: ${this.filePath}`);
//       return null;
//     }

//     try {
//       // 解析 AST
//       this.ast = tsquery(contents, 'SourceFile');
//       return this.ast;
//     } catch (error) {
//       this.result.issues.push(`分析檔案時出錯: ${error.message || error}`);
//       return null;
//     }
//   }
//   /**
//    * 取得 PolicyNames 枚舉名稱
//    * @returns 本實例，用於鏈式呼叫
//    */
//   withPolicyNamesEnum() {
//     const ast = this.ensureAst();
//     if (!ast) return this;

//     try {
//       // 使用更簡單的方法：找出所有變量宣告和枚舉宣告
//       const variableDeclarations = tsquery(ast, 'VariableDeclaration');
//       const enumDeclarations = tsquery(ast, 'EnumDeclaration');

//       // 從變量宣告和枚舉宣告中找出名稱以 PolicyNames 結尾的項目
//       let policyEnumName = null;

//       // 檢查變量宣告
//       for (const node of variableDeclarations) {
//         if (
//           node.name &&
//           node.name.text &&
//           node.name.text.endsWith('PolicyNames')
//         ) {
//           policyEnumName = node.name.text;
//           break;
//         }
//       }

//       // 如果變量宣告中沒找到，檢查枚舉宣告
//       if (!policyEnumName) {
//         for (const node of enumDeclarations) {
//           if (
//             node.name &&
//             node.name.text &&
//             node.name.text.endsWith('PolicyNames')
//           ) {
//             policyEnumName = node.name.text;
//             break;
//           }
//         }
//       }

//       this.result.policyNamesEnum = policyEnumName;

//       // 添加除錯信息
//       console.log(`找到的 PolicyNames 枚舉: ${this.result.policyNamesEnum}`);
//     } catch (error) {
//       this.result.issues.push(
//         `分析 PolicyNames 枚舉時出錯: ${error.message || error}`
//       );
//     }

//     return this;
//   }
//   /**
//    * 取得 Names 枚舉名稱
//    * @returns 本實例，用於鏈式呼叫
//    */
//   withNamesEnum() {
//     const ast = this.ensureAst();
//     if (!ast) return this;

//     try {
//       // 使用更簡單的方法：找出所有變量宣告和枚舉宣告
//       const variableDeclarations = tsquery(ast, 'VariableDeclaration');
//       const enumDeclarations = tsquery(ast, 'EnumDeclaration');

//       // 從變量宣告和枚舉宣告中找出名稱以 Names 結尾但不以 PolicyNames 結尾的項目
//       let namesEnumName = null;

//       // 檢查變量宣告
//       for (const node of variableDeclarations) {
//         if (
//           node.name &&
//           node.name.text &&
//           node.name.text.endsWith('Names') &&
//           !node.name.text.endsWith('PolicyNames')
//         ) {
//           namesEnumName = node.name.text;
//           break;
//         }
//       }

//       // 如果變量宣告中沒找到，檢查枚舉宣告
//       if (!namesEnumName) {
//         for (const node of enumDeclarations) {
//           if (
//             node.name &&
//             node.name.text &&
//             node.name.text.endsWith('Names') &&
//             !node.name.text.endsWith('PolicyNames')
//           ) {
//             namesEnumName = node.name.text;
//             break;
//           }
//         }
//       }

//       if (!namesEnumName) {
//         this.result.issues.push(`檔案中未找到必要的枚舉定義: *Names`);
//         this.result.isCompatible = false;
//       } else {
//         this.result.namesEnum = namesEnumName;
//         // 添加除錯信息
//         console.log(`找到的 Names 枚舉: ${this.result.namesEnum}`);
//       }
//     } catch (error) {
//       this.result.issues.push(
//         `分析 Names 枚舉時出錯: ${error.message || error}`
//       );
//     }

//     return this;
//   }
//   /**
//    * 檢查 R 類型別名是否存在
//    */
//   withRType() {
//     const ast = this.ensureAst();
//     if (!ast) return this;

//     try {
//       // 使用更簡單的方法：找出所有類型別名宣告
//       const typeAliasDeclarations = tsquery(ast, 'TypeAliasDeclaration');

//       // 檢查是否有名為 "R" 的類型別名
//       let hasRType = false;

//       for (const node of typeAliasDeclarations) {
//         if (node.name && node.name.text === 'R') {
//           hasRType = true;
//           break;
//         }
//       }

//       if (!hasRType) {
//         this.result.issues.push('檔案中未找到必要的類型別名: R');
//         this.result.isCompatible = false;
//       } else {
//         this.result.hasRType = true;
//         // 添加除錯信息
//         console.log(`找到 R 類型別名`);
//       }
//     } catch (error) {
//       this.result.issues.push(`分析 R 類型時出錯: ${error.message || error}`);
//     }

//     return this;
//   }

//   /**
//    * 構建最終結果
//    * @returns 分析結果
//    */
//   build() {
//     // 清理空的 issues 陣列
//     if (this.result.issues.length === 0) {
//       delete this.result.issues;
//     }

//     return this.result;
//   }
// }
