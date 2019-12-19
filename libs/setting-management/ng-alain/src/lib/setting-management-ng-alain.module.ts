import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingManagementModule } from '@fs/setting-management';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { SettingManagementNgAlainRoutingModule } from './setting-management-ng-alain-routing.module';
import { SharedModule } from './shared/shared.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  imports: [
    SharedModule,
    SettingManagementNgAlainRoutingModule,
    SettingsModule,

    
  ]
})
export class SettingManagementNgAlainModule {}
