import { Routes } from '@angular/router';
import { UsersV5Component } from './users-v5.component';
import { provideUsersV5 } from './users-v5.provide';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './user/role/role.component';
import { AuditLogsComponent } from './user/audit-logs/audit-logs.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },
  {
    path: '',
    component: UsersV5Component,
    children: [
      {
        path: 'user',
        component: UserComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'role',
          },
          {
            path: 'role',
            component: RoleComponent,
          },
          {
            path: 'audit-logs',
            component: AuditLogsComponent,
          }
        ]
      },
      //{
      //  path: 'email-settings',
      //  component: EmailSettingsComponent,
      //}
    ],
    providers: [provideUsersV5()],
  },
] as Routes;
