"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var architect_1 = require("@angular-devkit/architect");
var execa = require("execa");
var path = require("path");
var fs_1 = require("fs");
var log_1 = require("../utils/log");
var spinner = log_1.Log.spinner('Processing...');
exports.default = architect_1.createBuilder(function (options, context) {
    return new Promise(function (resolve) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var systemRoot, symlinkConfigPath, buildActions, i, job;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    systemRoot = context.workspaceRoot;
                    symlinkConfigPath = options.symlinkConfig
                        ? path.resolve(systemRoot, options.symlinkConfig)
                        : '';
                    buildActions = JSON.parse(getFileContents(symlinkConfigPath));
                    log_1.Log.primary("\nTask Executing ...");
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < buildActions.length)) return [3 /*break*/, 4];
                    job = buildActions[i];
                    return [4 /*yield*/, doJob(job)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    log_1.Log.primary("Task Done.");
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
function doJob(buildAction) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var buildPackages, commands, i, command, error_1;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    buildPackages = buildAction.packages.filter(function (x) { return !buildAction.ignore_packages || buildAction.ignore_packages.indexOf(x) == -1; });
                    commands = buildPackages.map(function (packName) {
                        return [
                            'ng',
                            'build',
                            packName,
                            '--prod'
                        ];
                    });
                    log_1.Log.info("\nBuilding packages(" + (buildAction.sync ? "sync" : "async") + "): " + buildPackages.join(','));
                    spinner.start();
                    if (!buildAction.sync) return [3 /*break*/, 7];
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < commands.length)) return [3 /*break*/, 6];
                    command = commands[i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, execa('yarn', command)];
                case 3:
                    _a.sent();
                    log_1.Log.success(command[2] + " successfully built.");
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    log_1.Log.error("\"" + command[2] + "\" ERR!!!.Rebuild again in ng command");
                    process.exit(1);
                    return [2 /*return*/];
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6: return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, Promise.all(commands.map(function (command) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var error_2;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, execa('yarn', command)];
                                case 1:
                                    _a.sent();
                                    log_1.Log.success(command[2] + " successfully built.");
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_2 = _a.sent();
                                    log_1.Log.error("\"" + command[2] + "\" ERR!!!.Rebuild again in ng command");
                                    process.exit(1);
                                    return [2 /*return*/];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); }))];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=index.js.map