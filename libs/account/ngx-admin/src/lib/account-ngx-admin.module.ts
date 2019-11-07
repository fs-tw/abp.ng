import { AccountModule } from '@fs/account';
import { CoreModule } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { NgxAdminBasicModule } from '@fs/ngx-admin/basic';
import { AccountNgxAdminRoutingModule } from './account-ngx-admin-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TenantBoxComponent } from './components/tenant-box/tenant-box.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, TenantBoxComponent],
  imports: [
    CoreModule,
    NgxAdminBasicModule,
    AccountNgxAdminRoutingModule,
    AccountModule
  ]
})
export class AccountNgxAdminModule { }
