import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  joinPathFragments,
  Tree,
  names,
} from '@nx/devkit';
import * as path from 'path';
import { ExtensionsGeneratorSchema } from './schema';
import { normalizeNamePaths } from '../../lib';
import { getEntityType } from './lib/api-definition';
import { addEntityPropToDefault } from './lib/add-entity-prop-to-default';

// 支援依序執行三種 variable
export async function extensionsGenerator(
  tree: Tree,
  options: ExtensionsGeneratorSchema & {
    entityType?: string;
    createFormType?: string;
    editFormType?: string;
  }
) {
  // 取得 normalizeNamePaths 的結果
  const { storeNames, directory } = normalizeNamePaths(tree, options);

  const _options = {
    storeNames: storeNames,
    names: names(options.name),
    fileName: names(options.name).fileName,
    tpl: '',
  };

  const generatedFile = joinPathFragments(
    directory,
    `${_options.fileName}.default.ts`
  );
  // 檢查檔案是否存在，若不存在才產生
  if (!tree.exists(generatedFile)) {
    console.log('generating extensions for:', _options);
    generateFiles(
      tree,
      joinPathFragments(__dirname, `files`),
      directory,
      _options
    );
  }

  // 定義三種 variable 與對應 type 的對映
  const variableTypeMap: Array<{
    typeKey: keyof typeof options;
    variable: string;
  }> = [
    { typeKey: 'entityType', variable: 'ENTITY_PROPS' },
    { typeKey: 'createFormType', variable: 'CREATE_FORM_PROPS' },
    { typeKey: 'editFormType', variable: 'EDIT_FORM_PROPS' },
  ];

  for (const { typeKey, variable } of variableTypeMap) {
    const typeValue = options[typeKey];
    if (typeof typeValue === 'string' && typeValue.trim().length > 0) {
      const targetType = await getEntityType(options.url, typeValue);
      if (targetType) {
        const fileFullName = joinPathFragments(
          directory,
          `${_options.fileName}.default.ts`
        );
        console.log(
          `Adding ${variable} to ${fileFullName} for type ${typeValue}`
        );
        addEntityPropToDefault(tree, fileFullName, targetType, variable);
      }
    }
  }

  await formatFiles(tree);
}

export default extensionsGenerator;
