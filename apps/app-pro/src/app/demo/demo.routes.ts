import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { DemoComponent } from './demo.component';
import { provideDemo } from './demo.provide';
import { DemoListComponent } from './demo-list/demo-list.component';
import { ExternalLoginComponent } from './external-login/external-login.component';
import { provideExternalLogin } from './external-login/external-login.provide';
import { DemoDetailsComponent } from './demo-details/demo-details.component';
import { provideDemoDetails } from './demo-details/demo-details.provide';
import { inject } from '@angular/core';
import { IdentityUserService } from '@abp/ng.identity/proxy';

export default [
  {
    path: '',
    component: DemoComponent,
    providers: [provideDemo()],
    children: [
      {
        path: '',
        component: DemoListComponent,
      },
      {
        path: 'external-login',
        component: ExternalLoginComponent,
        providers: [provideExternalLogin()],
      },
      {
        path: ':id',
        children: [
          {
            path: 'details',
            component: DemoDetailsComponent,
            resolve: {
              selectedData: (route: ActivatedRouteSnapshot) => {
                const identityUserService = inject(IdentityUserService);
                return identityUserService.get(route.params['id']);
              },
            },
            providers: [provideDemoDetails()],
          },
        ],
      },
    ],
  },
] as Route[];
