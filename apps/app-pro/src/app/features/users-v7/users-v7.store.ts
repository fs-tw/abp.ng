import { signalStore, withHooks } from '@ngrx/signals';
import { withUsersV7 } from './users-v7.feature';
import { withUser } from './user/user.feature';
import { withRole } from './role/role.feature';
import { withOrganizationUnit } from './organization-unit/organization-unit.feature';
import { withLanguage } from './language/language.feature';

export const UsersV7Store = signalStore(
  withUsersV7(),
  withUser(),
  withRole(),
  withOrganizationUnit(),
  withLanguage(),
  withHooks({
    onInit() {
      console.log('UsersV7Store initialized');
    },
  })
);
