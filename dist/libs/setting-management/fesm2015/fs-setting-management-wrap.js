import { __decorate } from 'tslib';
import { NgModule } from '@angular/core';
import { SettingManagementModule } from '@abp/ng.setting-management';

let SettingManagementWrapModule = class SettingManagementWrapModule {
};
SettingManagementWrapModule = __decorate([
    NgModule({
        imports: [SettingManagementModule],
        exports: [SettingManagementModule]
    })
], SettingManagementWrapModule);

/**
 * Generated bundle index. Do not edit.
 */

export { SettingManagementWrapModule };
//# sourceMappingURL=fs-setting-management-wrap.js.map
