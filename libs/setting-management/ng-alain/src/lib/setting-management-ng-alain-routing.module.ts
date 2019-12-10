import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLayoutComponent, AuthGuard, PermissionGuard } from '@abp/ng.core';
import { LayoutPassportComponent, LayoutDefaultComponent } from '@fs/ng-alain/basic';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'settings' },
    {
        path: '',
        component: LayoutDefaultComponent,
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'settings',
                loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingManagementNgAlainRoutingModule { }
