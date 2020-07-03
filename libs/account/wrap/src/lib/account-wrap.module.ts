import { NgModule } from '@angular/core';
import { AccountModule as AbpAccountModule } from '@abp/ng.account';
import { NgxValidateCoreModule } from '@ngx-validate/core';

@NgModule({
    imports: [AbpAccountModule],
    exports: [AbpAccountModule, NgxValidateCoreModule]
})
export class AccountWrapModule {}
