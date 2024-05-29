import { Injector, inject, runInInjectionContext } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, mergeMap, tap } from 'rxjs';
import { signalStoreFeature, withHooks, withMethods } from '@ngrx/signals';
import { eUserNames, userProxy, R } from './user.types';
import { userDefaults } from './user.default';
import { withDefaults } from '../../../shared/defaults.feature';
import { withListService } from '../../../shared/list.feature';
import { withEditModal } from '../../../shared/edit-modal.feature';
import { withRoutes } from '../../../shared/routes.feature';

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
    }),
    withRoutes({
      collection: 'user',
    }),

    withMethods(
      (
        store,
        confirmationService = inject(ConfirmationService),
        injector = inject(Injector)
      ) => {
        return {
          deleteUser: (record: R) => {
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
                    userProxy
                      .delete(record.id || '')
                      .pipe(tap(() => store.getUserListService().get()))
                  )
                )
              )
              .subscribe();
          },
        };
      }
    ),

    withHooks({
      onInit(store) {
        store.addUserRoutes([
          {
            name: 'role',
            path: 'role',
            order: 1,
            requiredPolicy: ''//eUserPolicyNames.User,
          }, {
            name: 'audit-logs',
            path: 'audit-logs',
            order: 2,
            requiredPolicy: ''//eUserPolicyNames.User,
          }
        ])
        //store.getUserListService().get();
      },
    })
  );
}
