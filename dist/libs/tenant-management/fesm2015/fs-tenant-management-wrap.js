import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { TenantManagementModule } from '@abp/ng.tenant-management';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { CoreModule } from '@abp/ng.core';

class TenantManagementWrapModule {
}
TenantManagementWrapModule.ɵmod = ɵɵdefineNgModule({ type: TenantManagementWrapModule });
TenantManagementWrapModule.ɵinj = ɵɵdefineInjector({ factory: function TenantManagementWrapModule_Factory(t) { return new (t || TenantManagementWrapModule)(); }, imports: [[TenantManagementModule],
        TenantManagementModule, CoreModule, NgxValidateCoreModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TenantManagementWrapModule, { imports: [TenantManagementModule], exports: [TenantManagementModule, CoreModule, NgxValidateCoreModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TenantManagementWrapModule, [{
        type: NgModule,
        args: [{
                imports: [TenantManagementModule],
                exports: [TenantManagementModule, CoreModule, NgxValidateCoreModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TenantManagementWrapModule };
//# sourceMappingURL=fs-tenant-management-wrap.js.map
