import { Routes } from '@angular/router';
import { UsersV7Component } from './users-v7.component';
import { provideUsersV7 } from './users-v7.provide';
import { UserComponent } from './user/user.component';
import { EmailSettingsFormComponent } from './email-settings-form/email-settings-form.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'email-settings-form',
  },
  {
    path: '',
    component: UsersV7Component,
    children: [
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'email-settings-form',
        component: EmailSettingsFormComponent,
      },
    ],
    providers: [provideUsersV7()],
  },
] as Routes;
