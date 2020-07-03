(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs/identity', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.identity = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var IdentityModule = /** @class */ (function () {
        function IdentityModule() {
        }
        return IdentityModule;
    }());
    IdentityModule.ɵmod = i0.ɵɵdefineNgModule({ type: IdentityModule });
    IdentityModule.ɵinj = i0.ɵɵdefineInjector({ factory: function IdentityModule_Factory(t) { return new (t || IdentityModule)(); }, imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IdentityModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IdentityModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.IdentityModule = IdentityModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-identity.umd.js.map
