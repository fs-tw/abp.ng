import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantManagementModule as AbpTenantManagementModule } from '@abp/ng.tenant-management';
import { FeatureManagementModule } from '@abp/ng.feature-management';

 
@NgModule({
    imports: [AbpTenantManagementModule],
    exports: [
        AbpTenantManagementModule,
        FeatureManagementModule
    ]
})
export class TenantManagementModule {}
