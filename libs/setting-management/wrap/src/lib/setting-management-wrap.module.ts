import { NgModule } from '@angular/core';
import { SettingManagementModule } from '@abp/ng.setting-management';

@NgModule({
    imports: [SettingManagementModule],
    exports: [SettingManagementModule]
})
export class SettingManagementWrapModule {}
