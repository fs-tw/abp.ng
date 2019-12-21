"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular-devkit/schematics");
var workspace_1 = require("@nrwl/workspace");
var tasks_1 = require("@angular-devkit/schematics/tasks");
var appProjectRoot = "";
var appProjectName = "";
function addSchematicFiles() {
    return schematics_1.chain([
        function (host) {
            host.visit(function (file) {
                if (file.startsWith("/apps/" + appProjectRoot + "/")) {
                    host.delete(file);
                    console.log('delete file', file);
                }
            });
        },
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/ng-alain'), [
            schematics_1.move("apps/" + appProjectRoot)
        ]))
    ]);
}
function updateProject() {
    return function (host) {
        return schematics_1.chain([
            workspace_1.updateJsonInTree(workspace_1.getWorkspacePath(host), function (json) {
                json.projects[appProjectRoot]
                    .architect.build.options.assets =
                    [
                        "apps/" + appProjectRoot + "/src/favicon.ico",
                        "apps/" + appProjectRoot + "/src/assets",
                        {
                            "glob": "**/*",
                            "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",
                            "output": "/assets/"
                        }
                    ];
                json.projects[appProjectName]
                    .architect.build.options.styles =
                    [
                        "apps/" + appProjectRoot + "/src/styles.less",
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
            })
        ]);
    };
}
function doUpdateJsonInTree() {
    return function (host) {
        return workspace_1.updateJsonInTree(workspace_1.getWorkspacePath(host), function (json) {
            console.log(json);
            console.log("project=" + appProjectName);
            json.projects[appProjectName]
                .architect.build.options.assets =
                [
                    "apps/" + appProjectRoot + "/src/favicon.ico",
                    "apps/" + appProjectRoot + "/src/assets",
                    {
                        "glob": "**/*",
                        "input": "./node_modules/@ant-design/icons-angular/src/inline-svg/",
                        "output": "/assets/"
                    }
                ];
            json.projects[appProjectName]
                .architect.build.options.styles =
                [
                    "apps/" + appProjectRoot + "/src/styles.less",
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
    return function (_host, context) {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
function default_1(schema) {
    return function (host, context) {
        var workspaceJson = workspace_1.readJsonInTree(host, workspace_1.getWorkspacePath(host));
        var appDirectory = schema.directory
            ? workspace_1.toFileName(schema.directory) + "/" + workspace_1.toFileName(schema.name)
            : "" + workspace_1.toFileName(schema.name);
        appProjectName = appDirectory.replace(new RegExp('/', 'g'), '-');
        appProjectRoot = workspaceJson.newProjectRoot
            ? workspaceJson.newProjectRoot + "/" + schema.name
            : schema.name;
        return schematics_1.chain([
            schematics_1.externalSchematic('@nrwl/angular', 'application', {
                e2eTestRunner: 'none',
                directory: schema.directory,
                name: schema.name,
                routing: true,
                style: 'less'
            }),
            addSchematicFiles(),
            //doUpdateJsonInTree(),
            updateProject(),
        ])(host, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map