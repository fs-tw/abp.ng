import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  Tree,
  GeneratorCallback,
  installPackagesTask,
  readJson,
  writeJson,
} from '@nx/devkit';
import { ApplicationGeneratorSchema } from './schema';
import {
  E2eTestRunner,
  applicationGenerator as nxApplicationGenerator,
  UnitTestRunner,
} from '@nx/angular/generators';
import { updateProjectConfigurationJson as appUpdateProjectConfigurationJson } from './lib/app/update-project-configuration-json';
import { updateOverrideInLintConfig } from '@nx/eslint/src/generators/utils/eslint-file';
import { addAppToPackageJson } from './lib/app/add-app-package-json';
import { addAppCoreToPackageJson } from './lib/app-core/add-app-core-package-json';

export async function applicationGenerator(
  tree: Tree,
  options: ApplicationGeneratorSchema
) {
  const appRoot = options.directory;

  // 生成基礎的 Angular 應用程式
  await nxApplicationGenerator(tree, {
    name: options.name,
    directory: options.directory,
    standalone: true, // 使用獨立元件架構
    addTailwind: false, // 不加入 Tailwind
    e2eTestRunner: E2eTestRunner.None, // 不使用 E2E 測試
    inlineStyle: true, // 使用內嵌樣式
    skipTests: true, // 不生成測試檔案
    unitTestRunner: UnitTestRunner.None, // 不使用單元測試
    style: 'scss', // 使用 SCSS 樣式
    prefix: 'app', // 使用 'app' 前綴
    routing: true, // 啟用路由
    strict: false, // 停用嚴格模式
    tags: '', // 標籤
  });

  // 刪除預設生成的檔案
  tree.delete(joinPathFragments(appRoot, 'src/'));
  if (options.template !== 'app-core') {
    tree.delete(joinPathFragments(appRoot, 'public/'));
  }

  // 生成自訂範本檔案
  generateFiles(
    tree,
    joinPathFragments(__dirname, `files/${options.template}`),
    appRoot,
    {
      name: options.name,
      template: options.template,
      directory: appRoot,
      tpl: '',
    }
  );

  // 修改 tsconfig.json，設定 isolatedModules: false, strict: false
  const tsconfigPath = joinPathFragments(appRoot, 'tsconfig.json');
  if (tree.exists(tsconfigPath)) {
    const tsconfig = readJson(tree, tsconfigPath);
    if (tsconfig.compilerOptions) {
      tsconfig.compilerOptions.isolatedModules = false;
      tsconfig.compilerOptions.strict = false;
    }
    // 設定 Angular 編譯器選項
    if (!tsconfig.angularCompilerOptions) {
      tsconfig.angularCompilerOptions = {};
    }
    tsconfig.angularCompilerOptions.strictTemplates = false;
    writeJson(tree, tsconfigPath, tsconfig);
  }

  switch (options.template) {
    case 'app':
      // 更新專案配置
      appUpdateProjectConfigurationJson(tree, options);

      // 設定 ESLint 規則
      updateOverrideInLintConfig(
        tree,
        appRoot,
        (override) => override.files?.includes('**/*.html'),
        (override) => ({
          ...override,
          rules: {
            ...override.rules,
            '@angular-eslint/template/click-events-have-key-events': 'off',
            '@angular-eslint/template/interactive-supports-focus': 'off',
          },
        })
      ); // 添加套件相依性
      addAppToPackageJson(tree);
      break;

    case 'app-core':
      // 僅啟動 ABP core 和 OAuth 配置
      addAppCoreToPackageJson(tree);
      break;
  }

  // 格式化檔案
  await formatFiles(tree);

  // 安裝新添加的套件
  return () => {
    installPackagesTask(tree);
  };
}

export default applicationGenerator;
