import { AccountModule } from '@abp/ng.account';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { AccountNgAlainRoutingModule } from './account-ng-alain-routing.module';
import { UserLoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [UserLoginComponent, UserRegisterComponent],
    imports: [
        CoreModule,
        NgAlainBasicModule,
        AccountNgAlainRoutingModule,
        AccountModule
    ]
})
export class AccountNgAlainModule { }
