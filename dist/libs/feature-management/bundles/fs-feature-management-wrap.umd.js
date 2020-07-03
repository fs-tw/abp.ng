(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.feature-management')) :
    typeof define === 'function' && define.amd ? define('@fs/feature-management/wrap', ['exports', '@angular/core', '@abp/ng.feature-management'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['feature-management'] = global.fs['feature-management'] || {}, global.fs['feature-management'].wrap = {}), global.ng.core, global.ng_featureManagement));
}(this, (function (exports, i0, ng_featureManagement) { 'use strict';

    var FeatureManagementWrapModule = /** @class */ (function () {
        function FeatureManagementWrapModule() {
        }
        return FeatureManagementWrapModule;
    }());
    FeatureManagementWrapModule.ɵmod = i0.ɵɵdefineNgModule({ type: FeatureManagementWrapModule });
    FeatureManagementWrapModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FeatureManagementWrapModule_Factory(t) { return new (t || FeatureManagementWrapModule)(); }, imports: [[ng_featureManagement.FeatureManagementModule],
            ng_featureManagement.FeatureManagementModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FeatureManagementWrapModule, { imports: [ng_featureManagement.FeatureManagementModule], exports: [ng_featureManagement.FeatureManagementModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FeatureManagementWrapModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [ng_featureManagement.FeatureManagementModule],
                        exports: [ng_featureManagement.FeatureManagementModule]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FeatureManagementWrapModule = FeatureManagementWrapModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-feature-management-wrap.umd.js.map
