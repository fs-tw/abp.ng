import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  GeneratorCallback,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { PackageGeneratorSchema } from './schema';
import { addAppToPackageJson } from './lib/add-app-package-json';
// import { addAppProToPackageJson } from './lib/add-app-pro-package-json';

export async function packageGenerator(
  tree: Tree,
  options: PackageGeneratorSchema
) {
  let packageInstallationTask: GeneratorCallback = () => { ; };

  switch (options.name) {
    case 'app':
      packageInstallationTask = addAppToPackageJson(tree);
      break;
    case 'app-pro':
      // packageInstallationTask = addAppProToPackageJson(tree);
      break;
  }

  return packageInstallationTask;
}

export default packageGenerator;
