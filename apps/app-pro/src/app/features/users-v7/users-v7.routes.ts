import { Routes } from '@angular/router';
import { UsersV7Component } from './users-v7.component';
import { provideUsersV7 } from './users-v7.provide';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { OrganizationUnitComponent } from './organization-unit/organization-unit.component';
import { LanguageComponent } from './language/language.component';
import { UserFormComponent } from './user-form/user-form.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'role',
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
        path: 'user-form',
        component: UserFormComponent,
      },
      {
        path: 'role',
        component: RoleComponent,
      },
      {
        path: 'organization-unit',
        component: OrganizationUnitComponent,
      },
      {
        path: 'language',
        component: LanguageComponent,
      }
    ],
    providers: [provideUsersV7()]
  },
] as Routes;

