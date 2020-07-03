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
    {
        path: 'coding-management',
        loadChildren: () =>
            import('./lazy-libs/coding-management-wrapper.module').then(m => m.CodingManagementWrapperModule),
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
