import type { GeneratorCallback, Tree } from '@nx/devkit';
import { addDependenciesToPackageJson, } from '@nx/devkit';
import { abpVersion, leptonXVersion, angularVersion, bootstrapIconsVersion, ngrxVersion } from './versions';

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
      "@abp/ng.identity": abpVersion,
      "@abp/ng.oauth": abpVersion,
      "@abp/ng.setting-management": abpVersion,
      "@abp/ng.tenant-management": abpVersion,
      "@abp/ng.theme.lepton-x": leptonXVersion,
      "@abp/ng.theme.shared": abpVersion,
      '@volo/abp.commercial.ng.ui': abpVersion,
      "@angular/animations": angularVersion,
      "@angular/localize": angularVersion,
      "bootstrap-icons": bootstrapIconsVersion,
      "@ngrx/signals":ngrxVersion,
      "@ngrx/operators":ngrxVersion
    },
    {
      "@abp/ng.schematics": abpVersion,
      "@abp/nx.generators": abpVersion
    }
  );
}
