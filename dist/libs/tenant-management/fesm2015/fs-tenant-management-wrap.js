import { __decorate } from 'tslib';
import { NgModule } from '@angular/core';
import { TenantManagementModule } from '@abp/ng.tenant-management';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { CoreModule } from '@abp/ng.core';

let TenantManagementWrapModule = class TenantManagementWrapModule {
};
TenantManagementWrapModule = __decorate([
    NgModule({
        imports: [TenantManagementModule],
        exports: [TenantManagementModule, CoreModule, NgxValidateCoreModule]
    })
], TenantManagementWrapModule);

/**
 * Generated bundle index. Do not edit.
 */

export { TenantManagementWrapModule };
//# sourceMappingURL=fs-tenant-management-wrap.js.map
