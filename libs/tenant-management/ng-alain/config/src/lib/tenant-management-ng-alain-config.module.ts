import { NgModule, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { TenantManagementConfigModule} from '@abp/ng.tenant-management/config'
import { noop } from '@abp/ng.core';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';

@NgModule({
  imports: [
    TenantManagementConfigModule.forRoot()
  ]
})
export class TenantManagementNgAlainConfigModule {
  static forRoot(): ModuleWithProviders<TenantManagementNgAlainConfigModule> {
    return {
      ngModule: TenantManagementNgAlainConfigModule,
      providers: [ROUTE_PROVIDERS,STYLES_PROVIDERS],
    };
  }
}
