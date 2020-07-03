import { NgModule, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';

@NgModule({
  imports: [
    IdentityConfigModule.forRoot()
  ]
})
export class IdentityNgAlainConfigModule {
  static forRoot(): ModuleWithProviders<IdentityNgAlainConfigModule> {
    return {
      ngModule: IdentityNgAlainConfigModule,
      providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
    };
  }

}
