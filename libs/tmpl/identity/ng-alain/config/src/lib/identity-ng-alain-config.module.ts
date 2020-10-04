import { NgModule, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { IdentityConfigModule, IDENTITY_ROUTE_PROVIDERS } from '@abp/ng.identity/config';
import { ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class IdentityNgAlainConfigModule {
  static forRoot(): ModuleWithProviders<IdentityNgAlainConfigModule> {
    return {
      ngModule: IdentityNgAlainConfigModule,
      providers: [IDENTITY_ROUTE_PROVIDERS,ROUTE_PROVIDERS],
    };
  }

}
