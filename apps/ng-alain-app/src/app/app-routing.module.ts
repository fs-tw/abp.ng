import { ABP, DynamicLayoutComponent } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DynamicLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' }, 
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'account',
        loadChildren: () =>
          import('@fs/account/ng-alain').then(m => m.AccountNgAlainModule.forLazy({ redirectUrl: '/' })),
      },
      {
        path: 'identity',
        loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
      },
      {
        path: 'tenant-management',
        loadChildren: () =>
          import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
      },
      {
        path: 'setting-management',
        loadChildren: () =>
          import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
      },
      {
        path: '',
        loadChildren: () =>
          import('./routes/routes.module').then(m =>m.RoutesModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
