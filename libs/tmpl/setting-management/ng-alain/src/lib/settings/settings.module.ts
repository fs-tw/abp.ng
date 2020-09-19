import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModuleFactory } from '@angular/core';
import { NgAlainBasicModule } from '@fs/theme.ng-alain/basic'
import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { LazyModuleFactory } from '@abp/ng.core';

@NgModule({
  declarations: [LayoutComponent, MainComponent],
  imports: [
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { 
  static forChild(): ModuleWithProviders<SettingsModule> {
    return {
      ngModule: SettingsModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<SettingsModule> {
    return new LazyModuleFactory(SettingsModule.forChild());
  }  
  static forEarly(): NgModuleFactory<SettingsModule> {
    return new LazyModuleFactory(SettingsModule.forChild());
  }    
}
