import {
  GeneratorCallback,
  Tree,
} from '@nx/devkit';
import { PackageAddGeneratorSchema } from './schema';
import { addAppProToPackageJson } from './lib/add-app-pro-package-json';

export async function packageAddGenerator(
  tree: Tree,
  options: PackageAddGeneratorSchema
) {
  let packageInstallationTask: GeneratorCallback = () => {;};
  
  if (options.name==='app-pro') {
    packageInstallationTask = addAppProToPackageJson(tree);
  }  

  return packageInstallationTask;
}

export default packageAddGenerator;
