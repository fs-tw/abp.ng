import { APP_INITIALIZER } from '@angular/core';
import { eIdentityRouteNames } from '@abp/ng.identity/config';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { RoutesService } from '@abp/ng.core';

export const ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(_routes: RoutesService) {
  return () => {
    _routes.patch(eThemeSharedRouteNames.Administration, {
      path: 'identity/users',
      profile: {
        title: 'Administrator',
        doc: 'user doc',
        nav: { routeName: eThemeSharedRouteNames.Administration }
      }
    } as any);
  };
}
