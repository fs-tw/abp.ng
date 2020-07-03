import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class SettingManagementModule {
}
SettingManagementModule.ɵmod = ɵɵdefineNgModule({ type: SettingManagementModule });
SettingManagementModule.ɵinj = ɵɵdefineInjector({ factory: function SettingManagementModule_Factory(t) { return new (t || SettingManagementModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SettingManagementModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SettingManagementModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SettingManagementModule };
//# sourceMappingURL=fs-setting-management.js.map
