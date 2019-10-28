import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent,RegisterComponent } from '@abp/ng.account'
import { UserRegisterComponent } from './components/register/register.component';
import { DynamicLayoutComponent } from '@abp/ng.core';
import { LayoutPassportComponent } from '@fs/alain/basic';
import { NbAuthComponent } from '@nebular/auth';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: NbAuthComponent,
        children: [{ path: 'login', component: LoginComponent }, { path: 'register', component: RegisterComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountNgxAdminRoutingModule { }
