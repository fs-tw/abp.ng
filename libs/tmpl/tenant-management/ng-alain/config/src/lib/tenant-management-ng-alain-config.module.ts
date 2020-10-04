import { NgModule, ModuleWithProviders } from '@angular/core';
import { TENANT_MANAGEMENT_ROUTE_PROVIDERS} from '@abp/ng.tenant-management/config'
import { ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class TenantManagementNgAlainConfigModule {
  static forRoot(): ModuleWithProviders<TenantManagementNgAlainConfigModule> {
    return {
      ngModule: TenantManagementNgAlainConfigModule,
      providers: [TENANT_MANAGEMENT_ROUTE_PROVIDERS,ROUTE_PROVIDERS],
    };
  }
}
