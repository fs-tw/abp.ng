import { NavItemsService,NavItem } from '@abp/ng.theme.shared';
import { APP_INITIALIZER } from '@angular/core';
import { HeaderFullScreenComponent } from '@fs/theme.ng-alain/layout';
import { CurrentUserComponent } from '../components/current-user/current-user.component';
import { LanguagesComponent } from '../components/languages/languages.component';
import { eThemeNgAlainComponents } from '../enums/components';

export const NGALAIN_THEME_NAV_ITEM_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: configureNavItems,
    deps: [NavItemsService],
    multi: true,
  },
];

export function configureNavItems(navItems: NavItemsService) {
  return () => {
    navItems.addItems([
      {
        id: eThemeNgAlainComponents.Languages,
        order: 1,
        component: LanguagesComponent,
        data:{
          direction:'right'
        }
      } as NavItem,
      {
        id: eThemeNgAlainComponents.FullScreen,
        order: 2,
        component: HeaderFullScreenComponent,
        data:{
          direction:'right'
        }
      } as NavItem,
      {
        id: eThemeNgAlainComponents.CurrentUser,
        order: 999,
        component: CurrentUserComponent,
        data:{
          direction:'right'
        }
      } as NavItem
    ]);
  };
}
