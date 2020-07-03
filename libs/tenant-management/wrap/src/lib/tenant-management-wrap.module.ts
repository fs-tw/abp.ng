import { NgModule } from '@angular/core';
import { TenantManagementModule } from '@abp/ng.tenant-management';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { CoreModule } from '@abp/ng.core';

@NgModule({
    imports: [TenantManagementModule],
    exports: [TenantManagementModule, CoreModule, NgxValidateCoreModule]
})
export class TenantManagementWrapModule { }
