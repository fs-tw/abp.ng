import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { PermissionManagementModule } from '@abp/ng.permission-management';

class PermissionManagementWrapModule {
}
PermissionManagementWrapModule.ɵmod = ɵɵdefineNgModule({ type: PermissionManagementWrapModule });
PermissionManagementWrapModule.ɵinj = ɵɵdefineInjector({ factory: function PermissionManagementWrapModule_Factory(t) { return new (t || PermissionManagementWrapModule)(); }, imports: [[PermissionManagementModule],
        PermissionManagementModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PermissionManagementWrapModule, { imports: [PermissionManagementModule], exports: [PermissionManagementModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PermissionManagementWrapModule, [{
        type: NgModule,
        args: [{
                imports: [PermissionManagementModule],
                exports: [PermissionManagementModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PermissionManagementWrapModule };
//# sourceMappingURL=fs-permission-management-wrap.js.map
