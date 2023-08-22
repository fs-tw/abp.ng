import type { GeneratorCallback, Tree } from '@nx/devkit';
import { addDependenciesToPackageJson, } from '@nx/devkit';
import { abpVersion, leptonXVersion, angularVersion, bootstrapIconsVersion } from './versions';

export function addAppToPackageJson(
  tree: Tree,
): GeneratorCallback {

  process.env.npm_config_legacy_peer_deps ??= 'true';

  return addDependenciesToPackageJson(
    tree,
    {
      "@abp/ng.account": abpVersion,
      "@abp/ng.components": abpVersion,
      "@abp/ng.core": abpVersion,
      "@abp/ng.oauth": abpVersion,
      "@abp/ng.identity": abpVersion,
      "@abp/ng.setting-management": abpVersion,
      "@abp/ng.tenant-management": abpVersion,
      "@abp/ng.theme.shared": abpVersion,
      "@abp/ng.theme.lepton-x": leptonXVersion,
      "@angular/localize": angularVersion,
      "bootstrap-icons": bootstrapIconsVersion,
    },
    {
      "@abp/ng.schematics": abpVersion,
      "@abp/nx.generators": abpVersion
    }
  );
}