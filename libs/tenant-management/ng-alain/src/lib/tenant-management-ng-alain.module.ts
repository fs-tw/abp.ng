import { TenantManagementModule } from '@fs/tenant-management';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { TenantManagementNgAlainRoutingModule } from './tenant-management-ng-alain-routing.module';
import { TenantsComponent } from './components/tenants/tenants.component';
import { FeatureManagementNgAlainModule } from '@fs/feature-management/ng-alain'

@NgModule({
    declarations: [TenantsComponent],
    imports: [
        CoreModule,
        NgAlainBasicModule,
        TenantManagementNgAlainRoutingModule,
        TenantManagementModule,
        FeatureManagementNgAlainModule
    ]
})
export class TenantManagementNgAlainModule { }
