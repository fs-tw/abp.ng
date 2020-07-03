import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class PermissionManagementModule {
}
PermissionManagementModule.ɵmod = ɵɵdefineNgModule({ type: PermissionManagementModule });
PermissionManagementModule.ɵinj = ɵɵdefineInjector({ factory: function PermissionManagementModule_Factory(t) { return new (t || PermissionManagementModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PermissionManagementModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PermissionManagementModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PermissionManagementModule };
//# sourceMappingURL=fs-permission-management.js.map
