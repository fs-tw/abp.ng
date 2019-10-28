import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLayoutComponent, ABP, eLayoutType } from '@abp/ng.core';
import { LayoutPassportComponent } from '@fs/alain/basic';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from '@abp/ng.account';
import { RegisterComponent } from '@abp/ng.account';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: NbAuthComponent,
        children: [{ path: 'login', component: LoginComponent }, { path: 'register', component: RegisterComponent }],
        //data: {
        //    routes: {
        //        layout:eLayoutType.account
        //    } as ABP.Route,
        //},
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountNgxAdminRoutingModule { }
