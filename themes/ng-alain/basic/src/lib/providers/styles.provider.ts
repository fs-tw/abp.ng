import { AddReplaceableComponent, CONTENT_STRATEGY, DomInsertionService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngxs/store';
import { LayoutPassportComponent } from '@fs/ng-alain/layout';
import { LayoutDefaultComponent } from '@fs/ng-alain/layout';
import { LayoutFullScreenComponent } from '@fs/ng-alain/layout';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';

export const BASIC_THEME_STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [Store],
    multi: true,
  },
];

export function configureStyles(store: Store) {
  return () => {
    //domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));

    initLayouts(store);
  };
}

function initLayouts(store: Store) {
  store.dispatch([
    new AddReplaceableComponent({
      key: eThemeBasicComponents.ApplicationLayout,
      component: LayoutDefaultComponent,
    }),
    new AddReplaceableComponent({
      key: eThemeBasicComponents.AccountLayout,
      component: LayoutPassportComponent,
    }),
    new AddReplaceableComponent({
      key: eThemeBasicComponents.EmptyLayout,
      component: LayoutFullScreenComponent,
    }),
  ]);
}
