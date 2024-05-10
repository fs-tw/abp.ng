import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { provideUsers } from './users.provide';
import { UserComponent } from './user/user.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },
  {
    path: '',
    component: UsersComponent,
    children: [
      {
       path: 'user',
       component: UserComponent,
      },
      //{
      //  path: 'email-settings',
      //  component: EmailSettingsComponent,
      //}
    ],
    providers: [provideUsers()],
  },
] as Routes;
