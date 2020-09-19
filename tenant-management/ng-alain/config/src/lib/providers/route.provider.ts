import { RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(routes: RoutesService) {
  return () => {
  };
}
