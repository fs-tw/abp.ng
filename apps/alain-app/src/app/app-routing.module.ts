import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LayoutDefaultComponent } from '@fs/alain';
//import { AuthGuard } from '@fs/core';
const routes: Routes = [
    {//default
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {//application
        path: 'main',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
        //canActivateChild: [AuthGuard]
    },
    {
        path: 'account',
        loadChildren: () => import('./lazy-libs/account-wrapper.module').then(m => m.AccountWrapperModule),
    },
    //{//alain routers demo
    //    path: '',
    //    loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule)
    //}

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
    exports: [RouterModule],
})
export class AppRoutingModule { }
