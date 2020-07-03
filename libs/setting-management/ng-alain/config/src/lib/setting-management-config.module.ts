import { NgModule, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { noop } from '@abp/ng.core';
import { ROUTE_PROVIDERS } from './providers/route.provider';
import { STYLES_PROVIDERS } from './providers/styles.provider';

@NgModule({
  imports: [
    SettingManagementConfigModule.forRoot()
  ]
})
export class SettingManagementNgAlainConfigModule {
  static forRoot(): ModuleWithProviders<SettingManagementNgAlainConfigModule> {
    return {
      ngModule: SettingManagementNgAlainConfigModule,
      providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
    };
  }


}
