import { Injector, inject, runInInjectionContext } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, mergeMap, tap } from 'rxjs';
import { signalStore, withHooks, withMethods } from '@ngrx/signals';
import { eUserEntityNames, userEntityProxy, R } from './user-entity.types';
import { userEntityDefaults } from './user-entity.default';
import { withDefaults } from '../../../shared/defaults.feature';
import { withListService } from '../../../shared/list.feature';
import { withEditModal } from '../../../shared/edit-modal.feature';

export const UserEntityStore = signalStore(
  withDefaults({
    extensionsIdentifier: eUserEntityNames.UserEntity,
    defaults: userEntityDefaults,
  }),
  withListService({
    collection: 'userEntity',
    list: userEntityProxy.list,
  }),
  withEditModal({
    collection: 'userEntity',
    extensionsIdentifier: eUserEntityNames.UserEntity,
    get: userEntityProxy.get,
    create: userEntityProxy.create,
    update: userEntityProxy.update,
  }),

  withMethods(
    (
      store,
      confirmationService = inject(ConfirmationService),
      injector = inject(Injector)
    ) => {
      return {
        deleteUserEntity: (record: R) => {
          confirmationService
            .warn(
              'AbpIdentity::RoleDeletionConfirmationMessage',
              'AbpUi::AreYouSure',
              {
                messageLocalizationParams: [record.name || ''],
              }
            )
            .pipe(
              filter(
                (status: Confirmation.Status) =>
                  status === Confirmation.Status.confirm
              ),
              mergeMap(() =>
                runInInjectionContext(injector, () =>
                  userEntityProxy
                    .delete(record.id || '')
                    .pipe(tap(() => store.getUserEntityListService().get()))
                )
              )
            )
            .subscribe();
        },
      };
    }
  ),
  withHooks({
    onInit() {
      console.log('UserEntityStore initialized');
    },
  })
);
