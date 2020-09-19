import { AddReplaceableComponent, CONTENT_STRATEGY, DomInsertionService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngxs/store';
import { eIdentityComponents } from '@abp/ng.identity';
import { UsersComponent } from '@fs/identity/ng-alain';
import { RolesComponent } from '@fs/identity/ng-alain';

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
      key: eIdentityComponents.Users,
      component: UsersComponent,
    }),
    new AddReplaceableComponent({
      key: eIdentityComponents.Roles,
      component: RolesComponent
    })
  ]);
}
