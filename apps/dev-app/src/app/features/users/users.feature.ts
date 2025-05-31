import { Injector, inject, runInInjectionContext } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, mergeMap, tap } from 'rxjs';
import { signalStoreFeature, withMethods } from '@ngrx/signals';
import { eUsersNames, usersProxy, R } from './users.types';
import { usersDefaults } from './users.default';
import { withDefaults } from '../../shared/defaults.feature';
import { withListService } from '../../shared/list.feature';
import { withEditModal } from '../../shared/edit-modal.feature';

export function withUsers() {
  return signalStoreFeature(
    // withDefaults({
    //   extensionsIdentifier: eUsersNames.Users,
    //   defaults: usersDefaults,
    // }),
    withListService({
      collection: 'users',
      list: usersProxy.list,
    }),
    withEditModal({
      collection: 'users',
      extensionsIdentifier: eUsersNames.Users,
      get: usersProxy.get,
      create: usersProxy.create,
      update: usersProxy.update,
    }),

    withMethods(
      (
        store,
        confirmationService = inject(ConfirmationService),
        injector = inject(Injector)
      ) => {
        return {
          deleteUsers: (record: R) => {
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
                    usersProxy
                      .delete(record.id || '')
                      .pipe(tap(() => store.getUsersListService().get()))
                  )
                )
              )
              .subscribe();
          },
        };
      }
    )
  );
}
