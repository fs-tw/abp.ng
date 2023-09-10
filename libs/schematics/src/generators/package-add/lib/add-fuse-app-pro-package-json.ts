import type { GeneratorCallback, Tree } from '@nx/devkit';
import { addDependenciesToPackageJson, } from '@nx/devkit';
import { angularMaterialVersion, fuseVersion } from './versions';

export function addFuseAppProToPackageJson(
  tree: Tree,
): GeneratorCallback {

  process.env.npm_config_legacy_peer_deps ??= 'true';

  return addDependenciesToPackageJson(
    tree,
    {
      "@fs-tw/fuse": fuseVersion,
      "@fs-tw/theme-fuse": fuseVersion,
      "@angular/material": angularMaterialVersion,
      "@angular/material-luxon-adapter": angularMaterialVersion,
      "tailwindcss": "3.3.2",
      "@tailwindcss/typography": "0.5.9",
      "chroma-js": "2.4.2",
      "highlight.js": "11.8.0",
      "perfect-scrollbar": "1.5.5",
      "luxon": "^3.3.0"
    },
    {
      "@types/lodash": "4.14.195",
      "@types/lodash-es": "4.17.7",
    }
  );
}
