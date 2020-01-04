"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var architect_1 = require("@angular-devkit/architect");
var execa_1 = tslib_1.__importDefault(require("execa"));
exports.default = architect_1.createBuilder(function (options, context) {
    return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    context.reportStatus("Executing \"" + options.command + "\"...");
                    return [4 /*yield*/, execa_1.default(options.command, options.args, { stdout: 'inherit', cwd: './' })];
                case 1:
                    _a.sent();
                    context.reportStatus("Done.");
                    resolve({ success: true });
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=index.js.map