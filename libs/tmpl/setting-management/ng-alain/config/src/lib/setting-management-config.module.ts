import { NgModule, ModuleWithProviders } from '@angular/core';
import { SETTING_MANAGEMENT_ROUTE_PROVIDERS } from '@abp/ng.setting-management/config';
import { ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class SettingManagementNgAlainConfigModule {
  static forRoot(): ModuleWithProviders<SettingManagementNgAlainConfigModule> {
    return {
      ngModule: SettingManagementNgAlainConfigModule,
      providers: [SETTING_MANAGEMENT_ROUTE_PROVIDERS, ROUTE_PROVIDERS],
    };
  }


}
