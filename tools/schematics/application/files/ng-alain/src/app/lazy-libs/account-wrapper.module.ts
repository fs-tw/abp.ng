import { NgModule } from '@angular/core';
import { AccountModule } from '@abp/ng.account';
import { AccountNgAlainModule } from '@fs/account/ng-alain';

@NgModule({
    imports: [AccountNgAlainModule]
})
export class AccountWrapperModule {
}

