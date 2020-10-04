import { ABP, DynamicLayoutComponent, eLayoutType } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@fs/account/ng-alain').then(m => m.AccountNgAlainModule.forLazy({ redirectUrl: '/' })),
  },
  {
    path: 'identity',
    loadChildren: () => import('@fs/identity/ng-alain').then(m => m.IdentityNgAlainModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@fs/tenant-management/ng-alain').then(m => m.TenantManagementNgAlainModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@fs/setting-management/ng-alain').then(m => m.SettingManagementNgAlainModule.forLazy()),
  }
  //,
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./routes/routes.module').then(m =>m.RoutesModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
