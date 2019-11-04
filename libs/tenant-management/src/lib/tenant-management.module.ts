import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantManagementModule as AbpTenantManagementModule } from '@abp/ng.tenant-management';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { TableModule } from 'primeng/table';

 
@NgModule({
    imports: [AbpTenantManagementModule],
    exports: [
        TableModule,
        AbpTenantManagementModule,
        FeatureManagementModule
    ]
})
export class TenantManagementModule {}
