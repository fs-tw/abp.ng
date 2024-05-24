import { signalStoreFeature, withHooks } from '@ngrx/signals';
import { eUsersV7Names } from './users-v7.types';
import { usersV7Defaults } from './users-v7.default';
import { withDefaults } from '../../shared/defaults.feature';
import { withRoutes } from '../../shared/routes.feature';


export function withUsersV7() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eUsersV7Names.UsersV7,
      defaults: usersV7Defaults,
    }),
    withRoutes({
      collection: 'usersV7',
    }),
    withHooks({
      onInit(store) {
        store.addUsersV7Routes([
          {
            name: 'email-settings-form',
            path: 'email-settings-form',
            order: 1,
            requiredPolicy: '',
          },
          {
            name: 'user',
            path: 'user',
            order: 2,
            requiredPolicy: '',
          }
        ]);
      },
    })
  );
}
