import { NgModule } from '@angular/core';
import { TenantManagementModule } from '@abp/ng.tenant-management';
import { TenantManagementNgAlainModule } from '@fs/tenant-management/ng-alain';

@NgModule({
    imports: [TenantManagementNgAlainModule],
})
export class TenantManagementWrapperModule {}
