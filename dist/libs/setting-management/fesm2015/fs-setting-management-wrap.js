import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { SettingManagementModule } from '@abp/ng.setting-management';

class SettingManagementWrapModule {
}
SettingManagementWrapModule.ɵmod = ɵɵdefineNgModule({ type: SettingManagementWrapModule });
SettingManagementWrapModule.ɵinj = ɵɵdefineInjector({ factory: function SettingManagementWrapModule_Factory(t) { return new (t || SettingManagementWrapModule)(); }, imports: [[SettingManagementModule],
        SettingManagementModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SettingManagementWrapModule, { imports: [SettingManagementModule], exports: [SettingManagementModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SettingManagementWrapModule, [{
        type: NgModule,
        args: [{
                imports: [SettingManagementModule],
                exports: [SettingManagementModule]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SettingManagementWrapModule };
//# sourceMappingURL=fs-setting-management-wrap.js.map
