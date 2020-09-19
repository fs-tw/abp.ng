import { AddReplaceableComponent, CONTENT_STRATEGY, DomInsertionService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { Store } from '@ngxs/store';
import { LayoutPassportComponent, PageBarComponent } from '@fs/theme.ng-alain/layout';
import { LayoutDefaultComponent } from '@fs/theme.ng-alain/layout';
import { LayoutFullScreenComponent } from '@fs/theme.ng-alain/layout';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { eThemeCoreComponents } from '@fs/theme.core';

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
    new AddReplaceableComponent({
      key: eThemeCoreComponents.PageBar,
      component: PageBarComponent,
    }),
  ]);
}
