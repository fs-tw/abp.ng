import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLayoutComponent, AuthGuard, PermissionGuard } from '@abp/ng.core';
import { LayoutDefaultComponent } from '@fs/ng-alain/basic';
import { TenantsComponent } from './components/tenants/tenants.component';

const routes: Routes = [
    { path: '', redirectTo: 'tenants', pathMatch: 'full' },
    {
        path: 'tenants',
        component: LayoutDefaultComponent,
        canActivate: [AuthGuard, PermissionGuard],
        data: { requiredPolicy: 'AbpTenantManagement.Tenants' },
        children: [{ path: '', component: TenantsComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TenantManagementNgAlainRoutingModule { }
