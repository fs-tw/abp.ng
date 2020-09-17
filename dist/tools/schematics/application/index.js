"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular-devkit/schematics");
var workspace_1 = require("@nrwl/workspace");
var tasks_1 = require("@angular-devkit/schematics/tasks");
var appProjectRoot = "";
var appProjectName = "";
var themeName;
function addSchematicFiles(themeName) {
    return schematics_1.chain([
        function (host) {
            host.visit(function (file) {
                if (file.startsWith("/apps/" + appProjectRoot + "/")) {
                    host.delete(file);
                    console.log('delete file', file);
                }
            });
        },
        schematics_1.mergeWith(schematics_1.apply(schematics_1.url("./files/" + themeName), [
            schematics_1.move("apps/" + appProjectRoot)
        ]))
    ]);
}
function updateProject(themeName) {
    switch (themeName) {
        case 'ng-alain':
            return ngAlainTheme();
        case 'ng-alain-ms':
            return ngAlainMsTheme();
        default:
            return ngAlainTheme();
    }
    //themes:ng-alain-ms
    function ngAlainMsTheme() {
        return function (host) {
            return schematics_1.chain([
                workspace_1.updateJsonInTree(workspace_1.getWorkspacePath(host), function (json) {
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
                            "node_modules/perfect-scrollbar/css/perfect-scrollbar.css",
                            "node_modules/quill/dist/quill.snow.css",
                            "apps/" + appProjectRoot + "/src/styles.less",
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
                            "node_modules/qrious/dist/qrious.min.js",
                            "node_modules/masonry-layout/dist/masonry.pkgd.js",
                            "node_modules/quill/dist/quill.min.js",
                            "node_modules/perfect-scrollbar/dist/perfect-scrollbar.js"
                        ];
                    json.projects[appProjectName]
                        .architect.build.options.tsConfig = "apps/" + appProjectRoot + "/tsconfig.dev.json";
                    return json;
                })
            ]);
        };
    }
    //themes: ng-alain
    function ngAlainTheme() {
        return function (host) {
            return schematics_1.chain([
                workspace_1.updateJsonInTree(workspace_1.getWorkspacePath(host), function (json) {
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
                            "apps/" + appProjectRoot + "/src/styles.less",
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
                        .architect.build.options.tsConfig = "apps/" + appProjectRoot + "/tsconfig.dev.json";
                    return json;
                })
            ]);
        };
    }
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
        appProjectRoot = appDirectory;
        themeName = schema.theme;
        return schematics_1.chain([
            schematics_1.externalSchematic('@nrwl/angular', 'application', {
                e2eTestRunner: 'none',
                directory: schema.directory,
                name: schema.name,
                routing: true,
                style: schema.css
            }),
            addSchematicFiles(themeName),
            updateProject(themeName),
        ])(host, context);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map