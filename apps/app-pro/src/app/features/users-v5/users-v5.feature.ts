import { signalStoreFeature, withHooks } from '@ngrx/signals';
import { eUsersV5Names } from './users-v5.types';
import { usersV5Defaults } from './users-v5.default';
import { withDefaults } from '../../shared/defaults.feature';
import { withRoutes } from '../../shared/routes.feature';
import { eUserPolicyNames } from './user/user.types';

export function withUsersV5() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eUsersV5Names.UsersV5,
      defaults: usersV5Defaults,
    }),
    withRoutes({
      collection: 'usersV5',
    }),
    withHooks({
      onInit(store) {
        store.addUsersV5Routes([
          {
            name: 'user',
            path: 'user',
            order: 1,
            requiredPolicy: eUserPolicyNames.User,
          },
          //{
          //  name: 'basic',
          //  path: 'basic',
          //  order: 2,
          // requiredPolicy: eBasicPolicyNames.Basic,
          //},
        ]);
      },
    })
  );
}
