import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsModule } from './settings/settings.module';
import { DynamicLayoutComponent, AuthGuard, PermissionGuard } from '@abp/ng.core';

const routes: Routes = [
  {
    path: '',
    component: DynamicLayoutComponent,
    canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        path: 'settings',
        loadChildren: SettingsModule.forEarly
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
