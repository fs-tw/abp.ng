import { AccountModule } from '@abp/ng.account';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { AlainBasicModule } from '@fs/alain/basic';
import { AccountAlainRoutingModule } from './account-alain-routing.module';
import { UserLoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [UserLoginComponent, UserRegisterComponent],
    imports: [
        CoreModule,
        AlainBasicModule,
        AccountAlainRoutingModule,
        AccountModule
    ]
})
export class AccountAlainModule { }
