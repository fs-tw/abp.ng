import { signalStoreFeature, withHooks } from '@ngrx/signals';
import { eUsersV3Names } from './users-v3.types';
import { usersV3Defaults } from './users-v3.default';
import { withDefaults } from '../../shared/defaults.feature';
import { withRoutes } from '../../shared/routes.feature';
import { eUserPolicyNames } from './user/user.types';
import { eUserSettingsPolicyNames } from './user-settings/user-settings.types';

export function withUsersV3() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eUsersV3Names.UsersV3,
      defaults: usersV3Defaults,
    }),
    withRoutes({
      collection: 'usersV3',
    }),
    withHooks({
      onInit(store) {
        store.addUsersV3Routes([
          {
          name: 'user',
          path: 'user',
          order: 1,
          requiredPolicy: eUserPolicyNames.User,
          },
          {
           name: 'user-settings',
           path: 'user-settings',
           order: 2,
          requiredPolicy: eUserSettingsPolicyNames.UserSettings,
          },
        ]);
      },
    })
  );
}
