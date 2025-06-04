import type { Tree } from '@nx/devkit';
import {
  readProjectConfiguration,
  updateProjectConfiguration,
} from '@nx/devkit';
import { ApplicationGeneratorSchema } from '../../schema';

export function updateProjectConfigurationJson(
  tree: Tree,
  options: ApplicationGeneratorSchema
): void {
  const projectJson = readProjectConfiguration(tree, options.name);
  const buildOptions = projectJson.targets['build'].options;
  buildOptions['allowedCommonJsDependencies'] = ['chart.js', 'js-sha256'];
  buildOptions['polyfills'] = ['zone.js', '@angular/localize/init'];
  buildOptions['assets'] = [
    `apps/${options.name}/src/favicon.ico`,
    `apps/${options.name}/src/assets`,
  ];
  buildOptions['styles'] = [
    {
      input: 'node_modules/ng-zorro-antd/ng-zorro-antd.min.css',
      inject: true,
      bundleName: 'ng-zorro-antd',
    },
    {
      input: 'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
      inject: true,
      bundleName: 'fontawesome-all.min',
    },
    {
      input: 'node_modules/@fortawesome/fontawesome-free/css/v4-shims.min.css',
      inject: true,
      bundleName: 'fontawesome-v4-shims.min',
    },
    {
      input: 'node_modules/@swimlane/ngx-datatable/index.css',
      inject: true,
      bundleName: 'ngx-datatable-index',
    },
    {
      input: 'node_modules/@swimlane/ngx-datatable/assets/icons.css',
      inject: true,
      bundleName: 'ngx-datatable-icons',
    },
    {
      input: 'node_modules/@swimlane/ngx-datatable/themes/material.css',
      inject: true,
      bundleName: 'ngx-datatable-material',
    },
    {
      input:
        'node_modules/@volo/ngx-lepton-x.lite/assets/css/bootstrap-dim.css',
      inject: false,
      bundleName: 'bootstrap-dim',
    },
    {
      input: 'node_modules/@volo/ngx-lepton-x.lite/assets/css/ng-bundle.css',
      inject: false,
      bundleName: 'ng-bundle',
    },
    {
      input:
        'node_modules/@volo/ngx-lepton-x.lite/assets/css/side-menu/layout-bundle.css',
      inject: false,
      bundleName: 'layout-bundle',
    },
    {
      input: 'node_modules/@abp/ng.theme.lepton-x/assets/css/abp-bundle.css',
      inject: false,
      bundleName: 'abp-bundle',
    },
    {
      input:
        'node_modules/@volo/ngx-lepton-x.lite/assets/css/bootstrap-dim.rtl.css',
      inject: false,
      bundleName: 'bootstrap-dim.rtl',
    },
    {
      input: 'node_modules/@volo/ngx-lepton-x.lite/assets/css/font-bundle.css',
      inject: false,
      bundleName: 'font-bundle',
    },
    {
      input:
        'node_modules/@volo/ngx-lepton-x.lite/assets/css/font-bundle.rtl.css',
      inject: false,
      bundleName: 'font-bundle.rtl',
    },
    {
      input:
        'node_modules/@volo/ngx-lepton-x.lite/assets/css/ng-bundle.rtl.css',
      inject: false,
      bundleName: 'ng-bundle.rtl',
    },
    {
      input:
        'node_modules/@volo/ngx-lepton-x.lite/assets/css/side-menu/layout-bundle.rtl.css',
      inject: false,
      bundleName: 'layout-bundle.rtl',
    },
    {
      input:
        'node_modules/@abp/ng.theme.lepton-x/assets/css/abp-bundle.rtl.css',
      inject: false,
      bundleName: 'abp-bundle.rtl',
    },
    {
      input: 'node_modules/bootstrap-icons/font/bootstrap-icons.css',
      inject: true,
      bundleName: 'bootstrap-icons',
    },
    `apps/${options.name}/src/styles.scss`,
  ];

  projectJson.targets['build'].configurations['production'] = {
    budgets: [
      {
        type: 'initial',
        maximumWarning: '2mb',
        maximumError: '5mb',
      },
      {
        type: 'anyComponentStyle',
        maximumWarning: '4kb',
        maximumError: '8kb',
      },
    ],
    outputHashing: 'all',
  };

  updateProjectConfiguration(tree, options.name, projectJson);
}
