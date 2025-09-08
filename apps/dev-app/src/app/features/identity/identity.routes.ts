import { Routes } from '@angular/router';
import { IdentityComponent } from './identity.component';
import { provideIdentity } from './identity.provide';

export default [
  {
    path: '',
    component: IdentityComponent,
    providers: [provideIdentity()],
  },
] as Routes;
