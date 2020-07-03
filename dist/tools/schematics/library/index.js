"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var schematics_1 = require("@angular-devkit/schematics");
var workspace_1 = require("@nrwl/workspace");
function updateTsConfig(options) {
    return schematics_1.chain([
        function (host, context) {
            var nxJson = workspace_1.readJsonInTree(host, 'nx.json');
            return workspace_1.updateJsonInTree('tsconfig.json', function (json) {
                var c = json.compilerOptions;
                delete c.paths[options.name];
                c.paths["@" + nxJson.npmScope + "/" + options.projectDirectory + "/*"] = [
                    "libs/" + options.projectDirectory + "/*/src/index.ts"
                ];
                return json;
            })(host, context);
        }
    ]);
}
function updateProject(options) {
    return function (host) {
        return schematics_1.chain([
            workspace_1.updateJsonInTree(workspace_1.getWorkspacePath(host), function (json) {
                var nxJson = workspace_1.readJsonInTree(host, 'nx.json');
                var project = json.projects[options.name];
                json.projects[nxJson.npmScope + "." + options.name] = project;
                delete json.projects[options.name];
                return json;
            }),
            workspace_1.updateJsonInTree("/nx.json", function (json) {
                var nxJson = workspace_1.readJsonInTree(host, 'nx.json');
                var project = json.projects[options.name];
                json.projects[nxJson.npmScope + "." + options.name] = project;
                delete json.projects[options.name];
                return json;
            })
        ]);
    };
}
function default_1(schema) {
    return function (host, context) {
        var options = normalizeOptions(host, schema);
        return schematics_1.chain([
            schematics_1.externalSchematic('@nrwl/angular', 'lib', {
                name: schema.name,
                publishable: true,
                routing: true
            }),
            updateTsConfig(options),
            updateProject(options),
            schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files'), [
                schematics_1.template({
                    fileName: options.fileName,
                    projectName: options.moduleName,
                    tmpl: ''
                }),
                schematics_1.move(options.projectRoot)
            ]))
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
    var projectRoot = "libs/" + projectDirectory;
    var moduleName = "" + workspace_1.toClassName(fileName);
    var parsedTags = options.tags
        ? options.tags.split(',').map(function (s) { return s.trim(); })
        : [];
    var modulePath = projectRoot + "/src/lib/" + fileName + ".module.ts";
    var defaultPrefix = workspace_1.getNpmScope(host);
    return tslib_1.__assign(tslib_1.__assign({}, options), { prefix: options.prefix ? options.prefix : defaultPrefix, name: projectName, projectRoot: projectRoot, entryFile: 'index', moduleName: moduleName,
        projectDirectory: projectDirectory,
        modulePath: modulePath,
        parsedTags: parsedTags,
        fileName: fileName });
}
//# sourceMappingURL=index.js.map