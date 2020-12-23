import {
  ConfigStateService,
  CONTENT_STRATEGY,
  CORE_OPTIONS,
  DomInsertionService,
  ReplaceableComponentsService,
} from '@abp/ng.core';
import { APP_INITIALIZER, Injector } from '@angular/core';
import { LayoutBasicComponent, LayoutBlankComponent, LayoutPassportComponent } from '@fs/theme.ng-alain/layout'
import styles from '../constants/styles';
import { eThemeNgAlainComponents } from '../enums/components';

export const NGALAIN_THEME_STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [Injector],
    multi: true,
  },
];

export function configureStyles(injector: Injector) {
  return () => {
    const replaceableComponents = injector.get(ReplaceableComponentsService);
    const domInsertion = injector.get(DomInsertionService);

    domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
    initLayouts(replaceableComponents);
  };
}

function initLayouts(replaceableComponents: ReplaceableComponentsService) {
  replaceableComponents.add({
    key: eThemeNgAlainComponents.ApplicationLayout,
    component: LayoutBasicComponent,
  });
  replaceableComponents.add({
    key: eThemeNgAlainComponents.AccountLayout,
    component: LayoutPassportComponent,
  });
  replaceableComponents.add({
    key: eThemeNgAlainComponents.EmptyLayout,
    component: LayoutBlankComponent,
  });
}
