import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { provideUsers } from './users.provide';
import { RoleComponent } from './role/role.component';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.components/extensible';
import { eRoleNames } from './role/role.model';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'role',
  },
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'role',
        component: RoleComponent,
        providers: [
          {
            provide: EXTENSIONS_IDENTIFIER,
            useValue: eRoleNames.Role,
          },
        ]
      },
      //{
      //  path: 'email-settings',
      //  component: EmailSettingsComponent,
      //}
    ],
    providers: [provideUsers()],
  },
] as Routes;
