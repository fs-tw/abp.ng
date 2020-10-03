import { ReplaceableComponentsService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eIdentityComponents } from '@abp/ng.identity';
import { UsersComponent } from '@fs/identity/ng-alain';
import { RolesComponent } from '@fs/identity/ng-alain';

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
    key: eIdentityComponents.Users,
    component: UsersComponent
  });
  replaceableComponents.add({
    key: eIdentityComponents.Roles,
    component: RolesComponent
  });  
}
