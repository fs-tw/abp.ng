import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  joinPathFragments,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ApplicationGeneratorSchema } from './schema';
import { E2eTestRunner, applicationGenerator as nxApplicationGenerator, UnitTestRunner } from '@nx/angular/generators';
import { Styles } from '@nx/angular/src/generators/utils/types';
import packageGenerator from '../package/generator';
import { updateProjectConfigurationJson as appUpdateProjectConfigurationJson } from './lib/app/update-project-configuration-json';
// import { updateProjectConfigurationJson as appProUpdateProjectConfigurationJson } from './lib/app-pro/update-project-configuration-json';
import {
  addOverrideToLintConfig,
  lintConfigHasOverride,
  updateOverrideInLintConfig
} from '@nx/eslint/src/generators/utils/eslint-file';

export async function applicationGenerator(
  tree: Tree,
  options: ApplicationGeneratorSchema
) {
  const appRoot = options.directory;

  const _options = {
    ...options,
    ...{
      standalone: true,
      addTailwind: false,
      e2eTestRunner: E2eTestRunner.None,
      inlineStyle: true,
      skipTests: true,
      unitTestRunner: UnitTestRunner.None,
      style: 'scss' as Styles,
      prefix: 'app',
      tpl: '',
    }
  }

  await nxApplicationGenerator(tree, _options);

  tree.delete(joinPathFragments(appRoot, `src/`));
  tree.delete(joinPathFragments(appRoot, `public/`));

  generateFiles(tree, joinPathFragments(__dirname, `files/${options.template}`), appRoot, _options);



  switch (options.template) {
    case 'app':
      appUpdateProjectConfigurationJson(tree, _options);


      updateOverrideInLintConfig(tree, appRoot, (o) =>
        o.files?.includes('**/*.html') , (o) => {
          o.rules = {
            ...o.rules,
            ['@angular-eslint/template/click-events-have-key-events']: 'off',
            ['@angular-eslint/template/interactive-supports-focus']: 'off',
          };
          return o;
        });

      // addOverrideToLintConfig(tree, appRoot, {
      //   files: ['**/*.html'],
      //   rules: {
      //     ['@angular-eslint/template/click-events-have-key-events']: 'off',
      //     ['@angular-eslint/template/interactive-supports-focus']: 'off',
      //   },
      // });
      break;
    case 'app-pro':
      // appProUpdateProjectConfigurationJson(tree, _options);
      break;
  }

  await formatFiles(tree);

  await packageGenerator(tree, { name: options.template })

}

export default applicationGenerator;