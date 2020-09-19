import { AddReplaceableComponent, CONTENT_STRATEGY, DomInsertionService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngxs/store';
import { eSettingManagementComponents } from '@abp/ng.setting-management';
import { SettingManagementComponent } from '@fs/setting-management/ng-alain';

export const STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [Store],
    multi: true,
  },
];

export function configureStyles(store: Store) {
  return () => {
    initLayouts(store);
  };
}

function initLayouts(store: Store) {
  store.dispatch([
    new AddReplaceableComponent({
      key: eSettingManagementComponents.SettingManagement,
      component: SettingManagementComponent,
    })
  ]);
}
