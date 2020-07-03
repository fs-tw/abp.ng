(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs/packages', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.packages = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var FurtherModule = /** @class */ (function () {
        function FurtherModule() {
        }
        return FurtherModule;
    }());
    /** @nocollapse */ FurtherModule.ɵmod = i0.ɵɵdefineNgModule({ type: FurtherModule });
    /** @nocollapse */ FurtherModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FurtherModule_Factory(t) { return new (t || FurtherModule)(); }, imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FurtherModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FurtherModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FurtherModule = FurtherModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-packages.umd.js.map
