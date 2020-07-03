import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { FeatureManagementModule } from '@abp/ng.feature-management';

class FeatureManagementWrapModule {
}
FeatureManagementWrapModule.ɵmod = ɵɵdefineNgModule({ type: FeatureManagementWrapModule });
FeatureManagementWrapModule.ɵinj = ɵɵdefineInjector({ factory: function FeatureManagementWrapModule_Factory(t) { return new (t || FeatureManagementWrapModule)(); }, imports: [[FeatureManagementModule],
        FeatureManagementModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FeatureManagementWrapModule, { imports: [FeatureManagementModule], exports: [FeatureManagementModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FeatureManagementWrapModule, [{
        type: NgModule,
        args: [{
                imports: [FeatureManagementModule],
                exports: [FeatureManagementModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureManagementWrapModule };
//# sourceMappingURL=fs-feature-management-wrap.js.map
