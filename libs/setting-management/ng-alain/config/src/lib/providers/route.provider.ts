import { APP_INITIALIZER } from '@angular/core';
import { eSettingManagementRouteNames } from '../enums/route-names';
import { eSettingManagementRouteNames as AbpeSettingManagementRouteNames } from '@abp/ng.setting-management';
import { RoutesService } from '@abp/ng.core';

export const ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/setting-management',
        name:eSettingManagementRouteNames.MySettings,
        parentName:AbpeSettingManagementRouteNames.Settings,
        order: 1,
      },
      {
        path: '/setting-management/settings',
        name:eSettingManagementRouteNames.DevelopPage,
        parentName:AbpeSettingManagementRouteNames.Settings,
        order: 2,
      }      
    ]);
  };
}
