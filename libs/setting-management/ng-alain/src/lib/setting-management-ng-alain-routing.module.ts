import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'settings' },
  {
    path: '',
    // component: DynamicLayoutComponent,
    // canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        path: 'settings',
        //loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule.forLazy())
      },
    ],
  }
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingManagementNgAlainRoutingModule { }
