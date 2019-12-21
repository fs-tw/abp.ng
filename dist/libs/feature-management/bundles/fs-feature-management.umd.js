(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.feature-management')) :
    typeof define === 'function' && define.amd ? define('@fs/feature-management', ['exports', '@angular/core', '@abp/ng.feature-management'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['feature-management'] = {}), global.ng.core, global.ng_featureManagement));
}(this, (function (exports, core, ng_featureManagement) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/feature-management.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureManagementModule = /** @class */ (function () {
        function FeatureManagementModule() {
        }
        FeatureManagementModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [ng_featureManagement.FeatureManagementModule],
                        exports: [ng_featureManagement.FeatureManagementModule]
                    },] }
        ];
        return FeatureManagementModule;
    }());

    exports.FeatureManagementModule = FeatureManagementModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-feature-management.umd.js.map
