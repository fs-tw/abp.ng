import type { Tree } from '@nx/devkit';
import { readProjectConfiguration, updateProjectConfiguration, } from '@nx/devkit';
import { ApplicationGeneratorSchema } from '../../schema';

export function updateProjectConfigurationJson(
  tree: Tree,
  options: ApplicationGeneratorSchema
): void {
  const projectJson = readProjectConfiguration(tree, options.name);
  const buildOptions = projectJson.targets['build'].options;
  buildOptions['allowedCommonJsDependencies'] = [
    "apexcharts",
    "highlight.js",
    "crypto-js/enc-utf8",
    "crypto-js/hmac-sha256",
    "crypto-js/enc-base64",
    "flat",
    "quill"
  ];
  buildOptions['assets'] = [
    `apps/${options.name}/src/favicon-16x16.png`,
    `apps/${options.name}/src/favicon-32x32.png`,
    `apps/${options.name}/src/assets`,
    {
      "glob": "**/*.svg",
      "input": "node_modules/@fortawesome/",
      "output": "/assets/@fortawesome/"
    },
    {
      "glob": "_redirects",
      "input": `apps/${options.name}/src`,
      "output": "/"
    }
  ];
  buildOptions['styles'] = [
    `apps/${options.name}/tailwind-preset/src/styles/tailwind.scss`,
    `apps/${options.name}/tailwind-preset/src/styles/themes.scss`,
    `apps/${options.name}/tailwind-preset/src/styles/main.scss`,
    `apps/${options.name}/src/styles/vendors.scss`,
    `apps/${options.name}/src/styles/styles.scss`,
    `apps/${options.name}/src/styles/tailwind.scss`,
    "node_modules/@fs-tw/fuse/themes/tailwind.css",
    "node_modules/@fs-tw/theme-fuse/themes/tailwind.css",
    {
      "input": "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
      "inject": true,
      "bundleName": "fontawesome-all.min"
    },
    {
      "input": "node_modules/@fortawesome/fontawesome-free/css/v4-shims.min.css",
      "inject": true,
      "bundleName": "fontawesome-v4-shims.min"
    },
    {
      "input": "node_modules/@swimlane/ngx-datatable/index.css",
      "inject": true,
      "bundleName": "ngx-datatable-index"
    },
    {
      "input": "node_modules/@swimlane/ngx-datatable/assets/icons.css",
      "inject": true,
      "bundleName": "ngx-datatable-icons"
    },
    {
      "input": "node_modules/@swimlane/ngx-datatable/themes/material.css",
      "inject": true,
      "bundleName": "ngx-datatable-material"
    },
    {
      "input": "node_modules/bootstrap/dist/css/bootstrap.css",
      "inject": false,
      "bundleName": "bootstrap"
    },
    {
      "input": "node_modules/ng-zorro-antd/tree/style/index.min.css",
      "inject": false,
      "bundleName": "ng-zorro-antd-tree"
    }
  ];

  updateProjectConfiguration(tree, options.name, projectJson);
}
