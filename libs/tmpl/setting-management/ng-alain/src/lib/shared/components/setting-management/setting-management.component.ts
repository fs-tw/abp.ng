import { Component, OnInit } from '@angular/core';
import { SettingManagementComponent as AbpSettingManagementComponent } from '@abp/ng.setting-management'
import { Store } from '@ngxs/store';
import { ABP, SettingTabsService } from '@abp/ng.core';

@Component({
  selector: 'fs-setting-management',
  templateUrl: './setting-management.component.html',
  styleUrls: ['./setting-management.component.css']
})
export class SettingManagementComponent extends AbpSettingManagementComponent {
  constructor(
    private _store: Store,
    private _settingTabs: SettingTabsService) {
    super(_store, _settingTabs);
  }
}
