// import { Injectable } from '@angular/core';
// import { addAbpRoutes, eLayoutType, PatchRouteByName, ABP } from '@abp/ng.core';
// import { getSettingTabs } from '@abp/ng.theme.shared';
// import { Store } from '@ngxs/store';

// @Injectable({
//   providedIn: 'root',
// })
// export class IdentityConfigService {
//   constructor() {
//     const rootRoute = {
//       name: 'AbpUiNavigation::Menu:Administration',
//       path: '',
//       order: 1,
//       wrapper: true,
//       iconClass: 'fa fa-wrench',
//     } as ABP.FullRoute;

//     const route = {
//       name: 'AbpIdentity::Menu:IdentityManagement',
//       path: 'identity',
//       order: 1,
//       requiredPolicy: 'AbpIdentity.Roles || AbpIdentity.Users',
//       parentName: 'AbpUiNavigation::Menu:Administration',
//       layout: eLayoutType.application,
//       iconClass: 'fa fa-id-card-o',
//       children: [
//         { path: 'roles', name: 'AbpIdentity::Roles', order: 1, requiredPolicy: 'AbpIdentity.Roles' },
//         { path: 'users', name: 'AbpIdentity::Users', order: 2, requiredPolicy: 'AbpIdentity.Users' },
//       ],
//     } as ABP.FullRoute;

//     addAbpRoutes([rootRoute, route]);
//   }
// }