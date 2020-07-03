import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class FeatureManagementModule {
}
FeatureManagementModule.ɵmod = ɵɵdefineNgModule({ type: FeatureManagementModule });
FeatureManagementModule.ɵinj = ɵɵdefineInjector({ factory: function FeatureManagementModule_Factory(t) { return new (t || FeatureManagementModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FeatureManagementModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FeatureManagementModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureManagementModule };
//# sourceMappingURL=fs-feature-management.js.map
