import { APP_INITIALIZER } from '@angular/core';
import { eIdentityRouteNames } from '@abp/ng.identity/config';
import { WrapRoutesService } from '@fs/theme.core';

export const ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [WrapRoutesService], multi: true },
];

function configureRoutes(_routes: WrapRoutesService) {
  return () => {
    let routes = _routes.Proxy;
    routes.patch(eIdentityRouteNames.Users, {
      profile: {
        title: 'users title',
        doc: 'user doc',
        nav: { routeName: 'user sub ' }
      }
    })
  };
}
