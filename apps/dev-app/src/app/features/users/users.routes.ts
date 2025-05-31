import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { provideUsers } from './users.provide';

export default [
  {
    path: '',
    component: UsersComponent,
    providers: [provideUsers()],
  },
] as Routes;
