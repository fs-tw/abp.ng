import { ModuleWithProviders, NgModule } from '@angular/core';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';
import { AccountConfigModule } from '@abp/ng.account/config';

@NgModule({
  imports: [
    AccountConfigModule.forRoot()
  ]
})
export class AccountNgAlainConfigModule {
  static forRoot(): ModuleWithProviders<AccountNgAlainConfigModule> {
    return {
      ngModule: AccountNgAlainConfigModule,
      providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
    };
  }
}
