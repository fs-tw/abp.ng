import { chain, externalSchematic, Rule, mergeWith, apply, move, Tree, url, SchematicContext, HostTree } from '@angular-devkit/schematics';
import { updateJsonInTree, getWorkspacePath, toFileName } from '@nrwl/workspace';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

var appProjectRoot = "";
var appProjectName = "";
var schema:any;

function removeOrginalFiles() {
  return (host: Tree) => {
    host.visit(file => {

      if (file.startsWith(`/${appProjectRoot}/src/`)) {
        host.delete(file);
        console.log('delete file', file);
      }
    })
  };
}

function addFilesToRoot() {
  return chain([
    mergeWith(
      apply(url('./files'), [
        move(appProjectRoot),
      ]),
    )
  ]);
}

function doUpdateJsonInTree(){
  return (host: Tree) => {
      return updateJsonInTree(getWorkspacePath(host), json => {
        json.projects[appProjectName]
          .architect.build.options.assets =
          [
            `apps/${schema.directory}/alain/src/favicon.ico`,
            `apps/${schema.directory}/alain/src/assets`,
            {
              "glob": "**/*",
              "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",
              "output": "/assets/"
            }
          ];
        json.projects[appProjectName]
          .architect.build.options.styles =
          [
            `apps/${schema.directory}/alain/src/styles.less`,
            "node_modules/font-awesome/css/font-awesome.css",
            "node_modules/primeng/resources/themes/nova-light/theme.css",
            "node_modules/primeicons/primeicons.css",
            "node_modules/primeng/resources/primeng.min.css"
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
  this.schema=schema;
  return (host: Tree, context: SchematicContext) => {
    var appDirectory = schema.directory
      ? `${toFileName(schema.directory)}/${toFileName(schema.name)}`
      : `${toFileName(schema.name)}`;
    appProjectName = appDirectory.replace(new RegExp('/', 'g'), '-');
    appProjectRoot = `apps/${appDirectory}`;
    return chain([
      externalSchematic('@nrwl/angular', 'application', {
        e2eTestRunner:'none',
        directory: schema.directory,
        name: schema.name,
        routing: true,
        style: 'less'
      }),
      removeOrginalFiles(),
      addFilesToRoot(),
      doUpdateJsonInTree(),
      //installPackages()
    ])(host, context);
  };
}
