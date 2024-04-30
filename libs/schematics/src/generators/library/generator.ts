import {
  formatFiles,
  joinPathFragments,
  Tree,
} from '@nx/devkit';
import { LibraryGeneratorSchema } from './schema';
import { libraryGenerator as nxlibraryGenerator, UnitTestRunner } from '@nx/angular/generators';

export async function libraryGenerator(
  tree: Tree,
  options: LibraryGeneratorSchema
) {
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
