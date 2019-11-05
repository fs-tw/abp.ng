import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/login/login.component'
import { UserRegisterComponent } from './components/register/register.component';
import { DynamicLayoutComponent } from '@abp/ng.core';
import { LayoutPassportComponent,LayoutDefaultComponent } from '@fs/ng-alain/basic';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            {
                path: 'manage-profile',
                component: ManageProfileComponent,
            }
        ],
    },
    {
        path: '',
        component: LayoutPassportComponent,
        children: [
            { path: 'login', component: UserLoginComponent },
            { path: 'register', component: UserRegisterComponent },
        ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountNgAlainRoutingModule { }
