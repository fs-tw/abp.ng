import { AddReplaceableComponent, CONTENT_STRATEGY, DomInsertionService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserLoginComponent } from '@fs/account/ng-alain';
import { UserRegisterComponent } from '@fs/account/ng-alain';
import { ManageProfileComponent } from '@fs/account/ng-alain';
import { eAccountComponents } from '@abp/ng.account';

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
  store.dispatch(new AddReplaceableComponent({ component: UserLoginComponent, key: eAccountComponents.Login }));
  store.dispatch(new AddReplaceableComponent({ component: UserRegisterComponent, key: eAccountComponents.Register }));
  store.dispatch(new AddReplaceableComponent({ component: ManageProfileComponent, key: eAccountComponents.ManageProfile }));
}
