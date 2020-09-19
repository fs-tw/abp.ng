import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgAlainBasicModule } from '@fs/theme.ng-alain/basic';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { SettingManagementNgAlainRoutingModule } from './setting-management-ng-alain-routing.module';
import { SharedModule } from './shared/shared.module';
import { SettingManagementModule } from '@abp/ng.setting-management';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    NgAlainBasicModule,
    SettingManagementModule,
    SettingManagementNgAlainRoutingModule
  ],
  exports: [
    SharedModule,
  ],
})
export class SettingManagementNgAlainModule {
  static forChild(): ModuleWithProviders<SettingManagementNgAlainModule> {
    return {
      ngModule: SettingManagementNgAlainModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<SettingManagementNgAlainModule> {
    return new LazyModuleFactory(SettingManagementNgAlainModule.forChild());
  }

}
