import { NgModule } from '@angular/core';
import { AccountModule } from '@abp/ng.account';
import { AccountNgxAdminModule } from '@fs/account/ngx-admin';

@NgModule({
    imports: [AccountNgxAdminModule],
})
export class AccountWrapperModule { }
