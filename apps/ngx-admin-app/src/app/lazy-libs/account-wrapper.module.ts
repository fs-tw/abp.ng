import { NgModule } from '@angular/core';
import { AccountModule } from '@abp/ng.account';
import { AccountNgxAdminModule } from './account-ngx-admin.module';

@NgModule({
    imports: [AccountNgxAdminModule],
})
export class AccountWrapperModule { }
