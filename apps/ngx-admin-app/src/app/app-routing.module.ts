import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { ABP, eLayoutType } from '@abp/ng.core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      routes: {
        name: '::Menu:Home',
        parentName:'AbpUiNavigation::Menu:Administration',
        path: '',
        iconClass:'fa fa-home',
      } as ABP.Route,
    },
  },
  {
    path: 'account',
    loadChildren: () => import('./lazy-libs/account-wrapper.module').then(m => m.AccountWrapperModule),
    // data:{
    //   routes:{
    //     name: 'YinChang',
    //     path: 'account',
    //     invisible: false,
    //     layout: eLayoutType.application,
    //     children: [
    //       { path: 'login', name: 'AbpAccount::Login', order: 1 },
    //       { path: 'register', name: 'AbpAccount::Register', order: 2 },
    //       { path: 'manage-profile', name: 'AbpAccount::ManageYourProfile', order: 3 },
    //     ],
    //   } 
    // }   
  },
  {
    path: 'identity',
    loadChildren: () => import('./lazy-libs/identity-wrapper.module').then(m => m.IdentityWrapperModule),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('./lazy-libs/tenant-management-wrapper.module').then(m => m.TenantManagementWrapperModule),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('./lazy-libs/setting-management-wrapper.module').then(m => m.SettingManagementWrapperModule),
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    data: {
      routes: {
        name: 'Ngx-Admin Pages',
        order:99,
        path: 'pages',
        iconClass: 'fa fa-folder',
        children: [
          { path: 'dashboard', name: 'dashboard', iconClass:'shopping-cart-outline', order: 1},
          { path: 'iot-dashboard', name: 'iot-dashboard', iconClass: 'home-outline', order: 2 },
          {
            path:'layout',name: 'Layout', iconClass: 'layout-outline', order: 3,
            children: [
              { path: 'stepper', name: 'Stepper', order: 1 },
              { path: 'list', name: 'List', order: 2 },
              { path: 'infinite-list', name: 'Infinite List', order: 3 },
              { path: 'accordion', name: 'Accordion', order: 4 },
              { path: 'tabs', name: 'Tabs', order: 5 },
            ],
          },
          {
            path: 'forms', name: 'Forms', iconClass: 'edit-2-outline', order: 4,
            children: [
              { path: 'inputs', name: 'Form Inputs', order: 1 },
              { path: 'layouts', name: 'Form Layouts', order: 2 },
              { path: 'buttons', name: 'Buttons', order: 3 },
              { path: 'datepicker', name: 'Datepicker', order: 4 }
            ],
          },
        ],
      } as ABP.Route,
    },
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
