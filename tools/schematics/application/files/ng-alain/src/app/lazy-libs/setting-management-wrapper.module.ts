import { NgModule } from '@angular/core';
import { SettingManagementModule } from '@abp/ng.setting-management'
import { SettingManagementNgAlainModule } from '@fs/setting-management/ng-alain'

@NgModule({
  imports: [SettingManagementNgAlainModule],
})
export class SettingManagementWrapperModule { }
