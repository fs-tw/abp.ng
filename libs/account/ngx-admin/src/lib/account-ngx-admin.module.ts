import { AccountModule } from '@fs/account';
import { CoreModule, PatchRouteByName, AddReplaceableComponent, eLayoutType } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgxAdminBasicModule } from '@fs/ngx-admin/basic';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TenantBoxComponent } from './components/tenant-box/tenant-box.component';
import { Store } from '@ngxs/store';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, TenantBoxComponent],
  entryComponents:[LoginComponent, RegisterComponent],
  imports: [
    CoreModule,
    NgxAdminBasicModule,
    AccountModule
  ]
})
export class AccountNgxAdminModule {
  constructor(private store: Store) {
    store.dispatch(new PatchRouteByName('AbpAccount::Menu:Account', { layout: eLayoutType.account}));
    store.dispatch(new PatchRouteByName('AbpAccount::ManageYourProfile', { layout: eLayoutType.application}));
    store.dispatch(new AddReplaceableComponent({ component: LoginComponent, key: 'Account.LoginComponent' }));
    store.dispatch(new AddReplaceableComponent({ component: RegisterComponent, key: 'Account.RegisterComponent' }));
  }

 }
