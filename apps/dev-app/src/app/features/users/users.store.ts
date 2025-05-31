import { signalStore, withHooks } from '@ngrx/signals';
import { withUsers } from './users.feature';
import { withDefaults } from '../../shared/defaults.feature';
import { eUsersNames } from './users.types';
import { usersDefaults } from './users.default';

export const UsersStore = signalStore(
  withDefaults({
    extensionsIdentifier: eUsersNames.Users,
    defaults: usersDefaults,
  }),
  withUsers(),
  withHooks({
    onInit() {
      console.log('UsersStore initialized');
    },
  })
);
