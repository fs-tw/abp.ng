import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  joinPathFragments,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { LibraryGeneratorSchema } from './schema';
import { E2eTestRunner, libraryGenerator as nxlibraryGenerator, UnitTestRunner } from '@nx/angular/generators';

export async function libraryGenerator(
  tree: Tree,
  options: LibraryGeneratorSchema
) {
  const libRoot = joinPathFragments(
    'libs',
    options.directory ?? '',
    `${options.name}`
  );

  await nxlibraryGenerator(tree, {
    ...options,
    ...{
      standalone: true,
      addTailwind: false,
      inlineStyle: true,
      skipTests: true,
      unitTestRunner: UnitTestRunner.None,
      style: 'scss',
      prefix: 'fs-tw',
      buildable: true,
      publishable: true,
      routing: true
    }
  })

  await formatFiles(tree);
}

export default libraryGenerator;
