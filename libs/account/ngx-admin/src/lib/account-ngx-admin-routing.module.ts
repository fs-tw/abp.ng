import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLayoutComponent, ABP, eLayoutType } from '@abp/ng.core';
import { LayoutPassportComponent } from '@fs/ng-alain/basic';
import { NbAuthComponent, NbLoginComponent, NbRegisterComponent } from '@nebular/auth';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountLayoutComponent } from '@fs/ngx-admin/basic';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: '',
    component: DynamicLayoutComponent,
    children: [{ path: 'login', component: LoginComponent }, { path: 'register', component: RegisterComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountNgxAdminRoutingModule { }
