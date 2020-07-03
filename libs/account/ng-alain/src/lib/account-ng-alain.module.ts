import { AccountModule } from '@fs/account';
import { CoreModule, AddReplaceableComponent, eLayoutType, LazyModuleFactory } from '@abp/ng.core';
import { NgModule, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UserLoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/register/register.component';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';
import { PersonalSettingsComponent } from './components/personal-settings/personal-settings.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthWrapperComponent } from './components/auth-wrapper/auth-wrapper.component';
import { TenantBoxComponent } from './components/tenant-box/tenant-box.component';
import { Options, ACCOUNT_OPTIONS } from '@abp/ng.account';
import { AccountWrapModule } from '@fs/account/wrap';
export function accountOptionsFactory(options: Options) {
  return {
    redirectUrl: '/',
    ...options,
  };
}

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
  entryComponents: [
    UserLoginComponent,
    UserRegisterComponent,
    ManageProfileComponent
  ],
  imports: [
    CoreModule,
    NgAlainBasicModule,
    AccountWrapModule
  ]
})
export class AccountNgAlainModule {
  static forChild(options): ModuleWithProviders<AccountNgAlainModule> {
    return {
      ngModule: AccountNgAlainModule,
      providers: [
        { provide: ACCOUNT_OPTIONS, useValue: options },
        {
          provide: 'ACCOUNT_OPTIONS',
          useFactory: accountOptionsFactory,
          deps: [ACCOUNT_OPTIONS],
        },        
      ],
    };
  }
  static forLazy(options: Options): NgModuleFactory<AccountModule> {
    return new LazyModuleFactory(AccountNgAlainModule.forChild(options));
  }  
}
