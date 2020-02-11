(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs/packages', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.packages = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/further.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FurtherModule = /** @class */ (function () {
        function FurtherModule() {
        }
        FurtherModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule]
                    },] }
        ];
        return FurtherModule;
    }());

    exports.FurtherModule = FurtherModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-packages.umd.js.map
