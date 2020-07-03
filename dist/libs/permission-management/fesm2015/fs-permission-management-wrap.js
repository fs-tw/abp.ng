import { __decorate } from 'tslib';
import { NgModule } from '@angular/core';
import { PermissionManagementModule } from '@abp/ng.permission-management';

let PermissionManagementWrapModule = class PermissionManagementWrapModule {
};
PermissionManagementWrapModule = __decorate([
    NgModule({
        imports: [PermissionManagementModule],
        exports: [PermissionManagementModule]
    })
], PermissionManagementWrapModule);

/**
 * Generated bundle index. Do not edit.
 */

export { PermissionManagementWrapModule };
//# sourceMappingURL=fs-permission-management-wrap.js.map
