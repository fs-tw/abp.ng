import { ABP, DynamicLayoutComponent, eLayoutType } from '@abp/ng.core';
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
      },
      {
        path: 'coding-management',
        loadChildren: () =>
          import('@fs/coding-management/ng-alain').then(m => m.CodingManagementNgAlainModule.forLazy()),
      },      
      {
        path: 'tourmap-management',
        loadChildren: () =>
          import('@fs/tourmap-management/ng-alain').then(m => m.TourmapManagementNgAlainModule.forLazy()),
      }, 
      //Add Module 
      // {
      //   path: 'ota',
      //   loadChildren: () =>
      //     import('@fs/ota/ng-alain').then(m => m.OtaNgAlainModule.forLazy()),
      // },                           
      {
        path: '',
        loadChildren: () =>
          import('./routes/routes.module').then(m =>m.RoutesModule),
      }
    ],
    data:{
      routes: [
        {
          path: '',
          layout: eLayoutType.application,
          invisible:true
        }]
    }    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
