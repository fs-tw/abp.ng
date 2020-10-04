import { ModuleWithProviders, NgModule } from '@angular/core';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { ACCOUNT_ROUTE_PROVIDERS } from '@abp/ng.account/config';

@NgModule()
export class AccountNgAlainConfigModule {
  static forRoot(): ModuleWithProviders<AccountNgAlainConfigModule> {
    return {
      ngModule: AccountNgAlainConfigModule,
      providers: [ACCOUNT_ROUTE_PROVIDERS,ROUTE_PROVIDERS],
    };
  }
}
