import { ReplaceableComponentsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eSettingManagementComponents } from '@abp/ng.setting-management';
import { SettingManagementComponent } from '@fs/setting-management/ng-alain';

export const STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [ReplaceableComponentsService],
    multi: true,
  },
];

export function configureStyles(replaceableComponents: ReplaceableComponentsService) {
  return () => {
    initLayouts(replaceableComponents);
  };
}

function initLayouts(replaceableComponents: ReplaceableComponentsService) {
  replaceableComponents.add({
    key: eSettingManagementComponents.SettingManagement,
    component: SettingManagementComponent
  });  
}
