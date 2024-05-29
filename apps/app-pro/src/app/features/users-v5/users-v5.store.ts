import { signalStore, withHooks } from '@ngrx/signals';
import { withUsersV5 } from './users-v5.feature';

export const UsersV5Store = signalStore(
  withUsersV5(),
  withHooks({
    onInit() {
      console.log('UsersV5Store initialized');
    },
  })
);
