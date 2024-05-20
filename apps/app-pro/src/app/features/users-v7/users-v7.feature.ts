import { signalStoreFeature, withHooks } from '@ngrx/signals';
import { eUsersV7Names } from './users-v7.types';
import { usersV7Defaults } from './users-v7.default';
import { withDefaults } from '../../shared/defaults.feature';
import { eUserPolicyNames } from './user/user.types';
import { eRolePolicyNames } from './role/role.types';
import { eOrganizationUnitPolicyNames } from './organization-unit/organization-unit.types';
import { eLanguagePolicyNames } from './language/language.types';
import { withRoutes } from '../../shared/routes.feature';

export function withUsersV7() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eUsersV7Names.UsersV7,
      defaults: usersV7Defaults,
    }),

    withRoutes({}),

    withHooks({
      onInit(store) {
        store.addRoutes([
          {
            name: 'user',
            path: 'user',
            order: 1,
            requiredPolicy: eUserPolicyNames.User,
          },
          {
            name: 'role',
            path: 'role',
            order: 2,
            requiredPolicy: eRolePolicyNames.Role,
          },
          {
            name: 'organization-unit',
            path: 'organization-unit',
            order: 3,
            requiredPolicy: eOrganizationUnitPolicyNames.OrganizationUnit,
          },
          {
            name: 'language',
            path: 'language',
            order: 4,
            requiredPolicy: eLanguagePolicyNames.Language,
          },
        ]);
      },
    })
  );
}
