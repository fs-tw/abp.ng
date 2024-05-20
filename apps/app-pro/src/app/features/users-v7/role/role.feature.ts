import { Injector, inject, runInInjectionContext } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, mergeMap, tap } from 'rxjs';
import { signalStoreFeature, withMethods } from '@ngrx/signals';
import { eRoleNames, roleProxy } from './role.types';
import { roleDefaults } from './role.default';
import { withDefaults } from '../../../shared/defaults.feature';
import { withListService } from '../../../shared/list.feature';
import { withEditModal } from '../../../shared/edit-modal.feature';

export function withRole() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eRoleNames.Role,
      defaults: roleDefaults,
    }),
    withListService({
      collection: 'role',
      list: roleProxy.list,
    }),

    withEditModal({
      collection: 'role',
      extensionsIdentifier: eRoleNames.Role,
      get: roleProxy.get,
      create: roleProxy.create,
      update: roleProxy.update,
    }),

    withMethods(
      (
        store,
        confirmationService = inject(ConfirmationService),
        injector = inject(Injector)
      ) => {
        return {
          deleteRole: (id: string, name: string) => {
            confirmationService
              .warn(
                'AbpIdentity::RoleDeletionConfirmationMessage',
                'AbpUi::AreYouSure',
                {
                  messageLocalizationParams: [name],
                }
              )
              .pipe(
                filter(
                  (status: Confirmation.Status) =>
                    status === Confirmation.Status.confirm
                ),
                mergeMap(() =>
                  runInInjectionContext(injector, () =>
                    roleProxy
                      .delete(id)
                      .pipe(tap(() => store.getRoleListService().get()))
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
