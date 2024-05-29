import { signalStore, withHooks } from '@ngrx/signals';
import { withUser } from './user.feature';

export const UserStore = signalStore(
  withUser(),
  withHooks({
    onInit() {
      console.log('UserStore initialized');
    },
  })
);
