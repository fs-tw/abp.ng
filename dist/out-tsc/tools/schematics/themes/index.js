"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular-devkit/core");
var schematics_1 = require("@angular-devkit/schematics");
var path = require("path");
var ts = require("typescript");
var workspace_1 = require("@nrwl/workspace");
var init_1 = require("@nrwl/angular/src/schematics/init/init");
var ast_utils_1 = require("@nrwl/angular/src/utils/ast-utils");
var ast_utils_2 = require("@nrwl/workspace/src/utils/ast-utils");
function addLazyLoadedRouterConfiguration(options) {
    return function (host) {
        var moduleSource = host.read(options.modulePath).toString('utf-8');
        var sourceFile = ts.createSourceFile(options.modulePath, moduleSource, ts.ScriptTarget.Latest, true);
        workspace_1.insert(host, options.modulePath, [
            ast_utils_2.insertImport(sourceFile, options.modulePath, 'RouterModule', '@angular/router')
        ].concat(ast_utils_1.addImportToModule(sourceFile, options.modulePath, "\n        RouterModule.forChild([\n        /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */\n       ]) ")));
        return host;
    };
}
function addRouterConfiguration(options) {
    return function (host) {
        var moduleSource = host.read(options.modulePath).toString('utf-8');
        var moduleSourceFile = ts.createSourceFile(options.modulePath, moduleSource, ts.ScriptTarget.Latest, true);
        var constName = workspace_1.toPropertyName(options.fileName) + "Routes";
        workspace_1.insert(host, options.modulePath, [
            ast_utils_2.insertImport(moduleSourceFile, options.modulePath, 'RouterModule, Route', '@angular/router')
        ].concat(ast_utils_1.addImportToModule(moduleSourceFile, options.modulePath, "RouterModule"), workspace_1.addGlobal(moduleSourceFile, options.modulePath, "export const " + constName + ": Route[] = [];")));
        return host;
    };
}
function addLoadChildren(options) {
    return function (host) {
        var npmScope = workspace_1.getNpmScope(host);
        if (!host.exists(options.parentModule)) {
            throw new Error("Cannot find '" + options.parentModule + "'");
        }
        var moduleSource = host.read(options.parentModule).toString('utf-8');
        var sourceFile = ts.createSourceFile(options.parentModule, moduleSource, ts.ScriptTarget.Latest, true);
        workspace_1.insert(host, options.parentModule, ast_utils_1.addRoute(options.parentModule, sourceFile, "{path: '" + workspace_1.toFileName(options.fileName) + "', loadChildren: () => import('@" + npmScope + "/" + options.projectDirectory + "').then(module => module." + options.moduleName + ")}").slice());
        var tsConfig = findClosestTsConfigApp(host, options.parentModule);
        if (tsConfig) {
            var tsConfigAppSource = host.read(tsConfig).toString('utf-8');
            var tsConfigAppFile = ts.createSourceFile(tsConfig, tsConfigAppSource, ts.ScriptTarget.Latest, true);
            var offset = workspace_1.offsetFromRoot(path.dirname(tsConfig));
            workspace_1.insert(host, tsConfig, workspace_1.addIncludeToTsConfig(tsConfig, tsConfigAppFile, "\n    , \"" + offset + options.projectRoot + "/src/index.ts\"\n").slice());
        }
        else {
            // we should warn the user about not finding the config
        }
        return host;
    };
}
function findClosestTsConfigApp(host, parentModule) {
    var dir = path.parse(parentModule).dir;
    if (host.exists(dir + "/tsconfig.app.json")) {
        return dir + "/tsconfig.app.json";
    }
    else if (dir != '') {
        return findClosestTsConfigApp(host, dir);
    }
    else {
        return null;
    }
}
function addChildren(options) {
    return function (host) {
        var npmScope = workspace_1.getNpmScope(host);
        if (!host.exists(options.parentModule)) {
            throw new Error("Cannot find '" + options.parentModule + "'");
        }
        var moduleSource = host.read(options.parentModule).toString('utf-8');
        var sourceFile = ts.createSourceFile(options.parentModule, moduleSource, ts.ScriptTarget.Latest, true);
        var constName = workspace_1.toPropertyName(options.fileName) + "Routes";
        var importPath = "@" + npmScope + "/" + options.projectDirectory;
        workspace_1.insert(host, options.parentModule, [
            ast_utils_2.insertImport(sourceFile, options.parentModule, options.moduleName + ", " + constName, importPath)
        ].concat(ast_utils_1.addImportToModule(sourceFile, options.parentModule, options.moduleName), ast_utils_1.addRoute(options.parentModule, sourceFile, "{path: '" + workspace_1.toFileName(options.fileName) + "', children: " + constName + "}")));
        return host;
    };
}
function updateNgPackage(options) {
    if (!options.publishable) {
        return schematics_1.noop();
    }
    var dest = workspace_1.offsetFromRoot(options.projectRoot) + "dist/themes/" + options.projectDirectory;
    return schematics_1.chain([
        workspace_1.updateJsonInTree(options.projectRoot + "/ng-package.json", function (json) {
            var $schema = json.$schema;
            if (json.$schema && json.$schema.indexOf('node_modules') >= 0) {
                $schema = "" + workspace_1.offsetFromRoot(options.projectRoot) + json.$schema.substring(json.$schema.indexOf('node_modules'), json.$schema.length);
            }
            return tslib_1.__assign({}, json, { dest: dest,
                $schema: $schema });
        })
    ]);
}
function updateProject(options) {
    return function (host, context) {
        var libRoot = options.projectRoot + "/src/lib/";
        host.delete(path.join(libRoot, options.name + ".service.ts"));
        host.delete(path.join(libRoot, options.name + ".service.spec.ts"));
        host.delete(path.join(libRoot, options.name + ".component.ts"));
        host.delete(path.join(libRoot, options.name + ".component.spec.ts"));
        if (!options.publishable) {
            host.delete(path.join(options.projectRoot, 'ng-package.json'));
            host.delete(path.join(options.projectRoot, 'package.json'));
        }
        host.delete(path.join(options.projectRoot, 'karma.conf.js'));
        host.delete(path.join(options.projectRoot, 'src/test.ts'));
        host.delete(path.join(options.projectRoot, 'tsconfig.spec.json'));
        host.delete(path.join(libRoot, options.name + ".module.ts"));
        host.create(path.join(libRoot, options.fileName + ".module.ts"), "\n        import { NgModule } from '@angular/core';\n        import { CommonModule } from '@angular/common';\n        \n        @NgModule({\n          imports: [\n            CommonModule\n          ]\n        })\n        export class " + options.moduleName + " { }\n        ");
        if (options.unitTestRunner !== 'none') {
            host.create(path.join(libRoot, options.fileName + ".module.spec.ts"), "\n    import { async, TestBed } from '@angular/core/testing';\n    import { " + options.moduleName + " } from './" + options.fileName + ".module';\n    \n    describe('" + options.moduleName + "', () => {\n      beforeEach(async(() => {\n        TestBed.configureTestingModule({\n          imports: [ " + options.moduleName + " ]\n        })\n        .compileComponents();\n      }));\n    \n      it('should create', () => {\n        expect(" + options.moduleName + ").toBeDefined();\n      });\n    });\n          ");
        }
        host.overwrite(options.projectRoot + "/src/index.ts", "\n        export * from './lib/" + options.fileName + ".module';\n        ");
        return schematics_1.chain([
            schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/lib'), [
                schematics_1.template(tslib_1.__assign({}, options, { offsetFromRoot: workspace_1.offsetFromRoot(options.projectRoot) })),
                schematics_1.move(options.projectRoot)
            ]), schematics_1.MergeStrategy.Overwrite),
            workspace_1.updateJsonInTree(workspace_1.getWorkspacePath(host), function (json) {
                var project = json.projects[options.name];
                var fixedProject = workspace_1.replaceAppNameWithPath(project, options.name, options.projectRoot);
                fixedProject.schematics = fixedProject.schematics || {};
                if (options.style !== 'css') {
                    fixedProject.schematics = tslib_1.__assign({}, fixedProject.schematics, { '@nrwl/angular:component': {
                            styleext: options.style
                        } });
                }
                if (!options.publishable) {
                    delete fixedProject.architect.build;
                }
                delete fixedProject.architect.test;
                fixedProject.architect.lint.options.tsConfig = fixedProject.architect.lint.options.tsConfig.filter(function (path) {
                    return path !== core_1.join(core_1.normalize(options.projectRoot), 'tsconfig.spec.json');
                });
                fixedProject.architect.lint.options.exclude.push('!' + core_1.join(core_1.normalize(options.projectRoot), '**'));
                json.projects[options.name] = fixedProject;
                return json;
            }),
            workspace_1.updateJsonInTree(options.projectRoot + "/tsconfig.lib.json", function (json) {
                if (options.unitTestRunner === 'jest') {
                    json.exclude = ['src/test-setup.ts', '**/*.spec.ts'];
                }
                else if (options.unitTestRunner === 'none') {
                    json.exclude = [];
                }
                else {
                    json.exclude = json.exclude || [];
                }
                return tslib_1.__assign({}, json, { extends: "./tsconfig.json", compilerOptions: tslib_1.__assign({}, json.compilerOptions, { outDir: workspace_1.offsetFromRoot(options.projectRoot) + "dist/out-tsc" }) });
            }),
            workspace_1.updateJsonInTree(options.projectRoot + "/tslint.json", function (json) {
                return tslib_1.__assign({}, json, { extends: workspace_1.offsetFromRoot(options.projectRoot) + "tslint.json" });
            }),
            workspace_1.updateJsonInTree("/nx.json", function (json) {
                var _a;
                return tslib_1.__assign({}, json, { projects: tslib_1.__assign({}, json.projects, (_a = {}, _a[options.name] = { tags: options.parsedTags }, _a)) });
            }),
            updateNgPackage(options)
        ])(host, context);
    };
}
function updateTsConfig(options) {
    return schematics_1.chain([
        function (host, context) {
            var nxJson = workspace_1.readJsonInTree(host, 'nx.json');
            return workspace_1.updateJsonInTree('tsconfig.json', function (json) {
                var c = json.compilerOptions;
                delete c.paths[options.name];
                c.paths["@" + nxJson.npmScope + "/" + options.projectDirectory] = [
                    "themes/" + options.projectDirectory + "/src/index.ts"
                ];
                return json;
            })(host, context);
        }
    ]);
}
function updateLibPackageNpmScope(options) {
    return function (host) {
        return workspace_1.updateJsonInTree(options.projectRoot + "/package.json", function (json) {
            json.name = "@" + workspace_1.getNpmScope(host) + "/" + options.name;
            return json;
        });
    };
}
function addModule(options) {
    return schematics_1.chain([
        options.routing && options.lazy
            ? addLazyLoadedRouterConfiguration(options)
            : schematics_1.noop(),
        options.routing && options.lazy && options.parentModule
            ? addLoadChildren(options)
            : schematics_1.noop(),
        options.routing && !options.lazy ? addRouterConfiguration(options) : schematics_1.noop(),
        options.routing && !options.lazy && options.parentModule
            ? addChildren(options)
            : schematics_1.noop()
    ]);
}
function default_1(schema) {
    return function (host, context) {
        var options = normalizeOptions(host, schema);
        if (!options.routing && options.lazy) {
            throw new Error("routing must be set");
        }
        return schematics_1.chain([
            workspace_1.addLintFiles(options.projectRoot, "tslint" /* TsLint */, { onlyGlobal: true }),
            init_1.addUnitTestRunner(options),
            schematics_1.externalSchematic('@schematics/angular', 'library', {
                name: options.name,
                prefix: options.prefix,
                style: options.style,
                entryFile: 'index',
                skipPackageJson: !options.publishable,
                skipTsConfig: true
            }),
            schematics_1.move(options.name, options.projectRoot),
            updateProject(options),
            updateTsConfig(options),
            options.unitTestRunner === 'jest'
                ? schematics_1.externalSchematic('@nrwl/jest', 'jest-project', {
                    project: options.name,
                    setupFile: 'angular',
                    supportTsx: false,
                    skipSerializers: false
                })
                : schematics_1.noop(),
            options.unitTestRunner === 'karma'
                ? schematics_1.schematic('karma-project', {
                    project: options.name
                })
                : schematics_1.noop(),
            options.publishable ? updateLibPackageNpmScope(options) : schematics_1.noop(),
            addModule(options),
            workspace_1.formatFiles(options)
        ])(host, context);
    };
}
exports.default = default_1;
function normalizeOptions(host, options) {
    var name = workspace_1.toFileName(options.name);
    var projectDirectory = options.directory
        ? workspace_1.toFileName(options.directory) + "/" + name
        : name;
    var projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
    var fileName = options.simpleModuleName ? name : projectName;
    var projectRoot = "themes/" + projectDirectory;
    var moduleName = workspace_1.toClassName(fileName) + "Module";
    var parsedTags = options.tags
        ? options.tags.split(',').map(function (s) { return s.trim(); })
        : [];
    var modulePath = projectRoot + "/src/lib/" + fileName + ".module.ts";
    var defaultPrefix = workspace_1.getNpmScope(host);
    return tslib_1.__assign({}, options, { prefix: options.prefix ? options.prefix : defaultPrefix, name: projectName, projectRoot: projectRoot, entryFile: 'index', moduleName: moduleName,
        projectDirectory: projectDirectory,
        modulePath: modulePath,
        parsedTags: parsedTags,
        fileName: fileName });
}
//# sourceMappingURL=index.js.map