(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs/dev', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.dev = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dev.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DevModule = /** @class */ (function () {
        function DevModule() {
        }
        DevModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule]
                    },] }
        ];
        return DevModule;
    }());

    exports.DevModule = DevModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-dev.umd.js.map
