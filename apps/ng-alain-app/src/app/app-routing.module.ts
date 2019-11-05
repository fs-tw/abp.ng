import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountConfigService } from '@abp/ng.account.config';
import { addAbpRoutes, eLayoutType, ABP } from '@abp/ng.core';
//import { LayoutDefaultComponent } from '@fs/ng-alain';
//import { AuthGuard } from '@fs/core';
const routes: Routes = [
    //{//default
    //    path: '',
    //    redirectTo: 'main',
    //    pathMatch: 'full'
    //},

    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: {
            routes: {
                name: '::Menu:Home',
                parentName: 'AbpUiNavigation::Menu:Administration',
                path: '',
                iconClass: 'fa fa-home',
            } as ABP.Route,
        },
    },
    {
        path: 'account',
        loadChildren: () => import('./lazy-libs/account-wrapper.module').then(m => m.AccountWrapperModule)
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
    {//alain routers demo
        path: 'pages',
        loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule),
        data: {
            routes: {
                name: 'Ng-Alain Pages',
                order: 99,
                path: '',
                iconClass: 'fa fa-folder',
                children: [
                    {
                        path: 'dashboard', name: 'Dashboard', iconClass: 'anticon-dashboard', order: 1,
                        children: [
                            { path: 'v1', name: 'Default', order: 1 },
                            { path: 'analysis', name: 'Analysis', order: 2 },
                            { path: 'monitor', name: 'Monitor', order: 3 },
                            { path: 'workplace', name: 'Workplace', order: 4 },
                        ]
                    },
                    {
                        path: 'pro/form', name: 'Form Page', iconClass: 'anticon-edit', order: 2,
                        children: [
                            { path: 'basic-form', name: 'Basic Form', order: 1 },
                            { path: 'step-form', name: 'Step Form', order: 2 },
                            { path: 'advanced-form', name: 'Advanced Form', order: 3 }
                        ]
                    },
                    {
                        path: 'pro/list', name: 'List', iconClass: 'anticon-appstore', order: 2,
                        children: [
                            { path: 'table-list', name: 'Table List', order: 1 },
                            { path: 'basic-list', name: 'Basic List', order: 2 },
                            { path: 'card-list', name: 'Card List', order: 3 }
                        ]
                    }
                ],
            } as ABP.Route,
        }
    }


];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
            // Pls refer to https://ng-alain.com/components/reuse-tab
            scrollPositionRestoration: 'top',
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
