import {
  formatFiles,
  generateFiles,
  Tree,
  joinPathFragments
} from '@nx/devkit';
//import * as path from 'path';
import { ApplicationGeneratorSchema } from './schema';

import { E2eTestRunner, applicationGenerator as nxApplicationGenerator, UnitTestRunner } from '@nx/angular/generators';
import { updateProjectConfigurationJson } from './lib/app-pro/update-project-configuration-json';
import { packageAddGenerator } from '../package-add/generator';
import { Styles } from '@nx/angular/src/generators/utils/types';

export async function applicationGenerator(
  tree: Tree,
  rawOptions: ApplicationGeneratorSchema
) {

  const appRoot = joinPathFragments(
    'apps',
    rawOptions.directory ?? '',
    `${rawOptions.name}`
  );

  const options = {
    ...rawOptions,
    ...{
      standalone: true,
      addTailwind: false,
      e2eTestRunner: E2eTestRunner.None,
      inlineStyle: true,
      skipTests: true,
      unitTestRunner: UnitTestRunner.None,
      style: 'scss' as Styles,
      prefix: 'app',
      tpl: ''
    }
  }

  await nxApplicationGenerator(tree, options)

  tree.delete(joinPathFragments(appRoot, `src/`));

  generateFiles(tree, joinPathFragments(__dirname, `files/${options.template}`), appRoot, options);

  if (options.name === 'app-pro') {
    updateProjectConfigurationJson(tree, options);
  }

  await formatFiles(tree);

  await packageAddGenerator(tree, { name: options.template })
}

export default applicationGenerator;
