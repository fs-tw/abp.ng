import { signalStore, withHooks } from '@ngrx/signals';
import { withUsersV7 } from './users-v7.feature';
import { withUser } from './user/user.feature';

export const UsersV7Store = signalStore(
  withUsersV7(),
  withUser(),
  withHooks({
    onInit() {
      console.log('UsersV7Store initialized');
    },
  })
);
