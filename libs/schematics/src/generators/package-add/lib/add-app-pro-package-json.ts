import type { GeneratorCallback, Tree } from '@nx/devkit';
import { addDependenciesToPackageJson, } from '@nx/devkit';
import { abpVersion,leptonXVersion } from './versions';

export function addAppProToPackageJson(
  tree: Tree,
): GeneratorCallback {

  process.env.npm_config_legacy_peer_deps ??= 'true';

  return addDependenciesToPackageJson(
    tree,
    {
      "@abp/ng.components": abpVersion,
      "@abp/ng.core": abpVersion,
      "@abp/ng.oauth": abpVersion,
      "@abp/ng.setting-management": abpVersion,
      "@abp/ng.theme.shared": abpVersion,
      "@volo/abp.commercial.ng.ui": abpVersion,
      "@volo/abp.ng.account": abpVersion,
      "@volo/abp.ng.audit-logging": abpVersion,
      "@volo/abp.ng.gdpr": abpVersion,
      "@volo/abp.ng.identity": abpVersion,
      "@volo/abp.ng.openiddictpro": abpVersion,
      "@volo/abp.ng.language-management": abpVersion,
      "@volo/abp.ng.saas": abpVersion,
      "@volo/abp.ng.text-template-management": abpVersion,
      "@volosoft/abp.ng.theme.lepton-x": leptonXVersion,
    },
    {
      "@abp/ng.schematics": abpVersion,
      "@abp/nx.generators":abpVersion
    }
  );
}
