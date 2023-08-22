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
    "@ant-design/colors",
    "chart.js",
    "js-sha256",
    "@uppy/xhr-upload",
    "@uppy/dashboard",
    "@uppy/core"
  ];
  buildOptions['styles'] = [
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/dark.css",
      "inject": false,
      "bundleName": "dark"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/light.css",
      "inject": false,
      "bundleName": "light"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/dim.css",
      "inject": false,
      "bundleName": "dim"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/bootstrap-dim.css",
      "inject": false,
      "bundleName": "bootstrap-dim"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/bootstrap-dark.css",
      "inject": false,
      "bundleName": "bootstrap-dark"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/bootstrap-light.css",
      "inject": false,
      "bundleName": "bootstrap-light"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/ng-bundle.css",
      "inject": false,
      "bundleName": "ng-bundle"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/side-menu/layout-bundle.css",
      "inject": false,
      "bundleName": "layout-bundle"
    },
    {
      "input": "node_modules/@volosoft/abp.ng.theme.lepton-x/assets/css/abp-bundle.css",
      "inject": false,
      "bundleName": "abp-bundle"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/dark.rtl.css",
      "inject": false,
      "bundleName": "dark.rtl"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/light.rtl.css",
      "inject": false,
      "bundleName": "light.rtl"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/dim.rtl.css",
      "inject": false,
      "bundleName": "dim.rtl"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/bootstrap-dim.rtl.css",
      "inject": false,
      "bundleName": "bootstrap-dim.rtl"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/bootstrap-dark.rtl.css",
      "inject": false,
      "bundleName": "bootstrap-dark.rtl"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/bootstrap-light.rtl.css",
      "inject": false,
      "bundleName": "bootstrap-light.rtl"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/font-bundle.css",
      "inject": false,
      "bundleName": "font-bundle"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/font-bundle.rtl.css",
      "inject": false,
      "bundleName": "font-bundle.rtl"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/ng-bundle.rtl.css",
      "inject": false,
      "bundleName": "ng-bundle.rtl"
    },
    {
      "input": "node_modules/@volosoft/ngx-lepton-x/assets/css/side-menu/layout-bundle.rtl.css",
      "inject": false,
      "bundleName": "layout-bundle.rtl"
    },
    {
      "input": "node_modules/@volosoft/abp.ng.theme.lepton-x/assets/css/abp-bundle.rtl.css",
      "inject": false,
      "bundleName": "abp-bundle.rtl"
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
      "input": "node_modules/ng-zorro-antd/tree/style/index.min.css",
      "inject": false,
      "bundleName": "ng-zorro-antd-tree"
    },
    "node_modules/bootstrap-icons/font/bootstrap-icons.css",
    `apps/${options.name}/src/styles.scss`];

  updateProjectConfiguration(tree, options.name, projectJson);
}
