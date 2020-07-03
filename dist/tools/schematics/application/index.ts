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


function addSchematicFiles(): Rule {
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
      apply(url('./files/ng-alain'), [
        move(`apps/${appProjectRoot}`)
      ])
    )
  ]);
}
function updateProject(): Rule {
  return (host: Tree) => {
    return chain([
      updateJsonInTree(getWorkspacePath(host),json=>{
        json.projects[appProjectRoot]
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
          `apps/${appProjectRoot}/src/styles.less`,
          "node_modules/font-awesome/css/font-awesome.css"
        ];          
      json.projects[appProjectName]
        .architect.build.options.scripts =
        [
          "node_modules/@antv/g2/build/g2.js",
          "node_modules/@antv/data-set/dist/data-set.min.js",
          "node_modules/@antv/g2-plugin-slider/dist/g2-plugin-slider.min.js",
          "node_modules/ajv/dist/ajv.bundle.js",
          "node_modules/qrious/dist/qrious.min.js"
        ];
      return json;          
      })
    ]);
  };
}

function doUpdateJsonInTree(){
  return (host: Tree) => {
      return updateJsonInTree(getWorkspacePath(host), json => {
        console.log(json);
        console.log("project="+appProjectName);
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
            `apps/${appProjectRoot}/src/styles.less`,
            "node_modules/font-awesome/css/font-awesome.css",
          ];          
        json.projects[appProjectName]
          .architect.build.options.scripts =
          [
            "node_modules/@antv/g2/build/g2.js",
            "node_modules/@antv/data-set/dist/data-set.min.js",
            "node_modules/@antv/g2-plugin-slider/dist/g2-plugin-slider.min.js",
            "node_modules/ajv/dist/ajv.bundle.js",
            "node_modules/qrious/dist/qrious.min.js"
          ];
        return json;
      });
  };

}

function installPackages() {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function(schema: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspaceJson = readJsonInTree(host, getWorkspacePath(host));
    
    var appDirectory = schema.directory
      ? `${toFileName(schema.directory)}/${toFileName(schema.name)}`
      : `${toFileName(schema.name)}`;
    appProjectName = appDirectory.replace(new RegExp('/', 'g'), '-');
    appProjectRoot = workspaceJson.newProjectRoot
    ? `${workspaceJson.newProjectRoot}/${schema.name}`
    : schema.name;
    return chain([
      externalSchematic('@nrwl/angular', 'application', {
        e2eTestRunner:'none',
        directory: schema.directory,
        name: schema.name,
        routing: true,
        style: 'less'
      }),
      addSchematicFiles(),
      //doUpdateJsonInTree(),
      updateProject(),
      //installPackages()
    ])(host, context);
  };
}
