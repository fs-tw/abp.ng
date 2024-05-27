import { signalStore, withHooks } from '@ngrx/signals';
import { withUsersV3 } from './users-v3.feature';

export const UsersV3Store = signalStore(
  withUsersV3(),
  withHooks({
    onInit() {
      console.log('UsersV3Store initialized');
    },
  })
);
