import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthComponent } from './auth/auth.component';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'demo',
    component: NxWelcomeComponent,
  },
];
