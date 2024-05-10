import { UserComponent } from './user.component';
import { provideUser } from './user.provide';

export default [
  {
    path: '',
    component: UserComponent,
    providers: [provideUser()],
  },
];
