import { AccountModule } from '@fs/account';
import { CoreModule, AddReplaceableComponent, PatchRouteByName, eLayoutType } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UserLoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/register/register.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { PersonalSettingsComponent } from './components/personal-settings/personal-settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { TenantBoxComponent } from './components/tenant-box/tenant-box.component';
import { Store } from '@ngxs/store';

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
  entryComponents:[
    UserLoginComponent,
    UserRegisterComponent,
    ManageProfileComponent
  ],
  imports: [
    CoreModule,
    NgAlainBasicModule,
    AccountModule
  ]
})
export class AccountNgAlainModule {
  constructor(private store: Store) {

    store.dispatch(new PatchRouteByName('AbpAccount::Menu:Account', { layout: eLayoutType.account}));
    store.dispatch(new PatchRouteByName('AbpAccount::ManageYourProfile', { layout: eLayoutType.application}));
    store.dispatch(new AddReplaceableComponent({ component: UserLoginComponent, key: 'Account.LoginComponent' }));
    store.dispatch(new AddReplaceableComponent({ component: UserRegisterComponent, key: 'Account.RegisterComponent' }));
    store.dispatch(new AddReplaceableComponent({ component: ManageProfileComponent, key: 'Account.ManageProfileComponent' }));
    
    
  }

 }
