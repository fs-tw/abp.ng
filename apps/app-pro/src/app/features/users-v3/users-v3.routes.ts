import { Routes } from '@angular/router';
import { UsersV3Component } from './users-v3.component';
import { provideUsersV3 } from './users-v3.provide';
import { UserComponent } from './user/user.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },
  {
    path: '',
    component: UsersV3Component,
    children: [
      {
       path: 'user',
       component: UserComponent,
      },
      {
       path: 'user-settings',
       component: UserSettingsComponent,
      }
    ],
    providers: [provideUsersV3()],
  },
] as Routes;
