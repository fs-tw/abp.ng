import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountConfigService } from '@abp/ng.account.config';
import { addAbpRoutes, eLayoutType, ABP } from '@abp/ng.core';
//import { LayoutDefaultComponent } from '@fs/alain';
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
        //data: {
        //    routes: {
        //        name: '::Menu:Home',
        //    } as ABP.Route,
        //},
    },
    {
        path: 'account',
        loadChildren: () => import('./lazy-libs/account-wrapper.module').then(m => m.AccountWrapperModule),
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
        path: '',
        loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule)
    }

];
//@Injectable()
//export class AlainAccountConfigService {
//    constructor() {//private router: Router, private restService: RestService) {
//        addAbpRoutes({
//            name: 'AbpAccount::Menu:Account',
//            path: 'account',
//            invisible: true,
//            layout: eLayoutType.account,
//            children: [
//                { path: 'login', name: 'AbpAccount::Login', order: 1 },
//                { path: 'register', name: 'AbpAccount::Register', order: 2 },
//            ],
//        });
//    }
//}
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
            // Pls refer to https://ng-alain.com/components/reuse-tab
            scrollPositionRestoration: 'top',
        })
    ],
    exports: [RouterModule],
    //providers: [
    //    {
    //        provide: AccountConfigService,
    //        useClass: AlainAccountConfigService,
    //    }
    //]
})
export class AppRoutingModule { }
