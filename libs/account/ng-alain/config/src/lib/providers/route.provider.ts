import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.patch('AbpAccount::Menu:Account',{ layout: eLayoutType.account});
    routes.patch('AbpAccount::ManageYourProfile',{ layout: eLayoutType.application});
  };
}
