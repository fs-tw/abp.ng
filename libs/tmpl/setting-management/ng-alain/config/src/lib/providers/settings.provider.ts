import { APP_INITIALIZER } from '@angular/core';
import { SettingTabsService } from '@abp/ng.core';
import { MySettingsComponent } from '@fs/setting-management/ng-alain';
import { MySettings2Component } from '@fs/setting-management/ng-alain';

export const SETTINGS_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureSettings, deps: [SettingTabsService], multi: true },
];

function configureSettings(settingTabs: SettingTabsService) {
  return () => {
    settingTabs.add([
      {
        name: 'MySettings',
        order: 1,
        component: MySettingsComponent,
      },
      {
        name: 'MySettings2',
        order: 2,
        component: MySettings2Component,
      },      
    ]);
  };
}
