import { TenantManagementModule } from '@fs/tenant-management';
import { CoreModule, AddReplaceableComponent } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { TenantsComponent } from './components/tenants/tenants.component';
import { FeatureManagementNgAlainModule } from '@fs/feature-management/ng-alain'
import { Store } from '@ngxs/store';

@NgModule({
    declarations: [TenantsComponent],
    entryComponents: [TenantsComponent],
    imports: [
        CoreModule,
        NgAlainBasicModule,
        TenantManagementModule,
        FeatureManagementNgAlainModule
    ]
})
export class TenantManagementNgAlainModule {
    constructor(private store: Store) {
        store.dispatch(new AddReplaceableComponent({ component: TenantsComponent, key: 'TenantManagement.TenantsComponent' }));
    }    
 }
