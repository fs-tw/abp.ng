import { signalStoreFeature } from '@ngrx/signals';
import { eUserNames, userProxy } from './user.types';
import { userDefaults } from './user.default';
import { withDefaults } from '../../../shared/defaults.feature';
import { withListService } from '../../../shared/list.feature';
import { withEditModal } from '../../../shared/edit-modal.feature';

export function withUser() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eUserNames.User,
      defaults: userDefaults,
    }),
    withListService({
      collection: 'user',
      list: userProxy.list,
    }),

    withEditModal({
      collection: 'user',
      extensionsIdentifier: eUserNames.User,
      get: userProxy.get,
      create: userProxy.create,
      update: userProxy.update,
    })
  );
}
