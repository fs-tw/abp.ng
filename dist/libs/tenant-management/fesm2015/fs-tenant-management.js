import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class TenantManagementModule {
}
TenantManagementModule.ɵmod = ɵɵdefineNgModule({ type: TenantManagementModule });
TenantManagementModule.ɵinj = ɵɵdefineInjector({ factory: function TenantManagementModule_Factory(t) { return new (t || TenantManagementModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TenantManagementModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TenantManagementModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TenantManagementModule };
//# sourceMappingURL=fs-tenant-management.js.map
