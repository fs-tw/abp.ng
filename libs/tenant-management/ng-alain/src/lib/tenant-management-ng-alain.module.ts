import { TenantManagementModule } from '@fs/tenant-management';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { TenantManagementNgAlainRoutingModule } from './tenant-management-ng-alain-routing.module';
import { TenantsComponent } from './components/tenants/tenants.component';

@NgModule({
    declarations: [TenantsComponent],
    imports: [
        CoreModule,
        NgAlainBasicModule,
        TenantManagementNgAlainRoutingModule,
        TenantManagementModule
    ]
})
export class TenantManagementNgAlainModule { }
