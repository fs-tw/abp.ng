import { ReplaceableComponentsService, CONTENT_STRATEGY, DomInsertionService, RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { AccountLayoutComponent } from '../components/account-layout/account-layout.component';
import { ApplicationLayoutComponent } from '../components/application-layout/application-layout.component';
import { EmptyLayoutComponent } from '../components/empty-layout/empty-layout.component';
import { eThemeBasicComponents } from '../enums/components';
import styles from '../constants/styles';

export const NG_ALAIN_THEME_STYLES_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureStyles,
    deps: [DomInsertionService, ReplaceableComponentsService,RoutesService],
    multi: true,
  },
];

export function configureStyles(
  domInsertion: DomInsertionService,
  replaceableComponents: ReplaceableComponentsService,
  routesService:RoutesService
) {
  return () => {

    domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));

    routesService.patch('AbpAccount::Login', { layout: eLayoutType.account });

    initLayouts(replaceableComponents);
  };
}

function initLayouts(replaceableComponents: ReplaceableComponentsService) {
  replaceableComponents.add({
    key: eThemeBasicComponents.ApplicationLayout,
    component: ApplicationLayoutComponent,
  });
  replaceableComponents.add({
    key: eThemeBasicComponents.AccountLayout,
    component: AccountLayoutComponent,
  });
  replaceableComponents.add({
    key: eThemeBasicComponents.EmptyLayout,
    component: EmptyLayoutComponent,
  });
}
