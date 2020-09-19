import { ModuleWithProviders, NgModule } from '@angular/core';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';
import { ACCOUNT_ROUTE_PROVIDERS } from '@abp/ng.account/config';

@NgModule()
export class AccountNgAlainConfigModule {
  static forRoot(): ModuleWithProviders<AccountNgAlainConfigModule> {
    return {
      ngModule: AccountNgAlainConfigModule,
      providers: [ACCOUNT_ROUTE_PROVIDERS,ROUTE_PROVIDERS, STYLES_PROVIDERS],
    };
  }
}
