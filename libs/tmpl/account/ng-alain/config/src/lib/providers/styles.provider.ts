import { ReplaceableComponentsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { UserLoginComponent } from '@fs/account/ng-alain';
import { UserRegisterComponent } from '@fs/account/ng-alain';
import { ManageProfileComponent } from '@fs/account/ng-alain';
import { eAccountComponents } from '@abp/ng.account';

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
    key: eAccountComponents.Login,
    component: UserLoginComponent
  });
  replaceableComponents.add({
    key: eAccountComponents.Register,
    component: UserRegisterComponent
  });
  replaceableComponents.add({
    key: eAccountComponents.ManageProfile,
    component: ManageProfileComponent
  });    
}
