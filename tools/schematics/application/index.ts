import {
  apply,
  chain,
  externalSchematic,
  mergeWith,
  move,
  noop,
  Rule,
  schematic,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { updateJsonInTree, getWorkspacePath, toFileName, readJsonInTree } from '@nrwl/workspace';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

var appProjectRoot = "";
var appProjectName = "";
var themeName;


function addSchematicFiles(themeName): Rule {
  return chain([
    host => {
      host.visit(file => {
        if (file.startsWith(`/apps/${appProjectRoot}/`)) {
          host.delete(file);
          console.log('delete file', file);
        }
      })
    },
    mergeWith(
      apply(url(`./files/${themeName}`), [
        move(`apps/${appProjectRoot}`)
      ])
    )
  ]);
}
function updateProject(themeName): Rule {
  return ngAlainTheme();
  //themes: ng-alain
  function ngAlainTheme() {
    return (host: Tree) => {
      return chain([
        updateJsonInTree(getWorkspacePath(host), json => {
          json.projects[appProjectName]
            .architect.build.options.assets =
            [
              `apps/${appProjectRoot}/src/favicon.ico`,
              `apps/${appProjectRoot}/src/assets`,
              {
                "glob": "**/*",
                "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",
                "output": "/assets/"
              }
            ];
          json.projects[appProjectName]
            .architect.build.options.styles =
            [
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
              `apps/${appProjectRoot}/src/styles.less`,
            ];
          json.projects[appProjectName]
            .architect.build.options.stylePreprocessorOptions = {
            "includePaths": [
              "node_modules/"
            ]
          };
          json.projects[appProjectName]
            .architect.build.options.scripts =
            [
              "node_modules/ajv/dist/ajv.bundle.js",
              "node_modules/qrious/dist/qrious.min.js"
            ];
          json.projects[appProjectName]
            .architect.build.options.tsConfig = `apps/${appProjectRoot}/tsconfig.dev.json`;
          return json;
        })
      ]);
    };
  }

}

function installPackages() {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function (schema: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspaceJson = readJsonInTree(host, getWorkspacePath(host));
    var appDirectory = schema.directory
      ? `${toFileName(schema.directory)}/${toFileName(schema.name)}`
      : `${toFileName(schema.name)}`;
    appProjectName = appDirectory.replace(new RegExp('/', 'g'), '-');
    appProjectRoot = appDirectory;
    themeName = schema.theme;
    return chain([
      externalSchematic('@nrwl/angular', 'application', {
        e2eTestRunner: 'none',
        directory: schema.directory,
        name: schema.name,
        routing: true,
        style: schema.css
      }),
      addSchematicFiles(themeName),
      updateProject(themeName),
      //installPackages()
    ])(host, context);
  };
}
