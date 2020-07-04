"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var architect_1 = require("@angular-devkit/architect");
var execa = require("execa");
var path = require("path");
var fs_1 = require("fs");
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
                    console.log("//////////////////////////////////////////");
                    console.log("Task Executing ...");
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
                    console.log("//////////////////////////////////////////");
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
function doJob(buildAction) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var buildPackages, commands;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    buildPackages = buildAction.packages.filter(function (x) { return !buildAction.ignore_packages || buildAction.ignore_packages.indexOf(x) == -1; });
                    console.log('----------------------------------------------');
                    console.log("Building packages: " + buildPackages.join(','));
                    commands = buildPackages.map(function (packName) {
                        return [
                            'ng',
                            'build',
                            packName,
                            '--prod'
                        ];
                    });
                    if (!buildAction.sync) return [3 /*break*/, 1];
                    commands.forEach(function (command) {
                        execa.sync('yarn', command);
                        console.log("\n" + command[2] + " successfully built.");
                    });
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, Promise.all(commands.map(function (command) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, execa('yarn', command)];
                                case 1:
                                    _a.sent();
                                    console.log("\n" + command[2] + " successfully built.");
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=index.js.map