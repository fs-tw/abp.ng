import type { GeneratorCallback, Tree } from '@nx/devkit';
import { addDependenciesToPackageJson } from '@nx/devkit';
import { abpVersion, angularVersion } from '../app/versions';

export function addAppCoreToPackageJson(
  tree: Tree,
): GeneratorCallback {

  process.env.npm_config_legacy_peer_deps ??= 'true';

  return addDependenciesToPackageJson(
    tree,
    {
      "@abp/ng.core": abpVersion,
      "@abp/ng.oauth": abpVersion,
      "@angular/animations": angularVersion,
      "@angular/localize": angularVersion,
    },
    {
      "@abp/ng.schematics": abpVersion,
      "@abp/nx.generators": abpVersion
    }
  );
}