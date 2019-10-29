import { AccountModule } from '@abp/ng.account';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgxAdminBasicModule } from '@fs/ngx-admin/basic';
import { AccountNgxAdminRoutingModule } from './account-ngx-admin-routing.module';
import { UserLoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [],//[UserLoginComponent, UserRegisterComponent],
    imports: [
        CoreModule,
        NgxAdminBasicModule,
        AccountNgxAdminRoutingModule,
        AccountModule
    ]
})
export class AccountNgxAdminModule { }
