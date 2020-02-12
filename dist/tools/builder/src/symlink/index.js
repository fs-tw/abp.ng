"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var architect_1 = require("@angular-devkit/architect");
var execa_1 = tslib_1.__importDefault(require("execa"));
var path = tslib_1.__importStar(require("path"));
var fs_1 = require("fs");
exports.default = architect_1.createBuilder(function (options, context) {
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var systemRoot, symlinkConfigPath, buildActions, i;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    systemRoot = context.workspaceRoot;
                    symlinkConfigPath = options.symlinkConfig
                        ? path.resolve(systemRoot, options.symlinkConfig)
                        : null;
                    buildActions = JSON.parse(getFileContents(symlinkConfigPath));
                    console.log("Task Executing ...");
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < buildActions.length)) return [3 /*break*/, 4];
                    console.log("\"" + buildActions[i].name + "\" Symlink building ...");
                    return [4 /*yield*/, execa_1.default('yarn', [
                            'symlink',
                            'copy',
                            '--angular',
                            '--no-watch',
                            buildActions[i].sync ? '--sync' : '',
                            '--packages',
                            buildActions[i].packages.join(',')
                        ], { stdout: 'inherit', cwd: './' })];
                case 2:
                    _a.sent();
                    console.log("\"" + buildActions[i].name + "\" Symlink done ...");
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("Others packages Symlink building ...");
                    //others
                    return [4 /*yield*/, execa_1.default('yarn', [
                            'symlink',
                            'copy',
                            '--angular',
                            '--no-watch',
                            '--all-packages',
                            '--excluded-packages',
                            buildActions.reduce(function (a, b) { return { sync: false, packages: a.packages.concat(b.packages) }; }).packages.join(','),
                        ], { stdout: 'inherit', cwd: './' })];
                case 5:
                    //others
                    _a.sent();
                    console.log("Others packages Symlink done ...");
                    console.log("Task Done.");
                    resolve({ success: true });
                    return [2 /*return*/];
            }
        });
    }); });
});
function getFileContents(file) {
    try {
        return fs_1.readFileSync(file, 'utf-8');
    }
    catch (_a) {
        throw new Error("Could not read file '" + file + "'.");
    }
}
//# sourceMappingURL=index.js.map