import { AccountModule } from '@fs/account';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { AccountNgAlainRoutingModule } from './account-ng-alain-routing.module';
import { UserLoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/register/register.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { PersonalSettingsComponent } from './components/personal-settings/personal-settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { TenantBoxComponent } from './components/tenant-box/tenant-box.component';

@NgModule({
  declarations: [
    AuthWrapperComponent,
    TenantBoxComponent,
    UserLoginComponent,
    UserRegisterComponent,
    ManageProfileComponent,
    PersonalSettingsComponent,
    ChangePasswordComponent
  ],
  imports: [
    CoreModule,
    NgAlainBasicModule,
    AccountNgAlainRoutingModule,
    AccountModule
  ]
})
export class AccountNgAlainModule { }
