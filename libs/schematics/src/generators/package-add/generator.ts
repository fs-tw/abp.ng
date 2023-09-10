import {
  GeneratorCallback,
  Tree,
} from '@nx/devkit';
import { PackageAddGeneratorSchema } from './schema';
import { addAppProToPackageJson } from './lib/add-app-pro-package-json';
import { addAppToPackageJson } from './lib/add-app-package-json';
import { addFuseAppProToPackageJson } from './lib/add-fuse-app-pro-package-json';

export async function packageAddGenerator(
  tree: Tree,
  options: PackageAddGeneratorSchema
) {
  let packageInstallationTask: GeneratorCallback = () => { ; };

  switch (options.name) {
    case 'app':
      packageInstallationTask = addAppToPackageJson(tree);
      break;
    case 'app-pro':
      packageInstallationTask = addAppProToPackageJson(tree);
      break;
    case 'fuse-app-pro':
      packageInstallationTask = addFuseAppProToPackageJson(tree);
      break;
  }

  return packageInstallationTask;
}

export default packageAddGenerator;
