import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { SettingManagementNgAlainRoutingModule } from './setting-management-ng-alain-routing.module';
//import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    //SharedModule,
    NgAlainBasicModule,
    SettingManagementNgAlainRoutingModule
  ],
  exports: [
    //SharedModule,
  ],
})
export class SettingManagementNgAlainModule { }
