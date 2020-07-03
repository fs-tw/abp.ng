(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fs/feature-management', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['feature-management'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var FeatureManagementModule = /** @class */ (function () {
        function FeatureManagementModule() {
        }
        return FeatureManagementModule;
    }());
    FeatureManagementModule.ɵmod = i0.ɵɵdefineNgModule({ type: FeatureManagementModule });
    FeatureManagementModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FeatureManagementModule_Factory(t) { return new (t || FeatureManagementModule)(); }, imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FeatureManagementModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FeatureManagementModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FeatureManagementModule = FeatureManagementModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-feature-management.umd.js.map
