"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ora = require('ora');
var kleur = require('kleur');
kleur.enabled = require('color-support').level;
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.log = function (text, color) {
        console.log(kleur[color]().bold(text));
    };
    Log.info = function (text) {
        this.log(text, 'cyan');
    };
    Log.primary = function (text) {
        this.log(text, 'blue');
    };
    Log.success = function (text) {
        this.log(text, 'green');
    };
    Log.error = function (text) {
        this.log(text, 'red');
    };
    Log.spinner = function (text) {
        var spinner = ora(kleur.white().bold(text));
        spinner.color = 'yellow';
        return spinner;
    };
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=log.js.map