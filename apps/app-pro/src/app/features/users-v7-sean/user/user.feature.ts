import { Injector, inject, runInInjectionContext } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, mergeMap, tap } from 'rxjs';
import { signalStoreFeature, withMethods } from '@ngrx/signals';
import { eUserNames, userProxy, R } from './user.types';
import { userDefaults } from './user.default';
import { withDefaults } from '../../../shared/defaults.feature';
import { withEditModal } from '../../../shared/edit-modal.feature';

export function withUser() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eUserNames.User,
      defaults: userDefaults,
    }),
    // 关于user的资料的一切状态交给@tanstack-query处理
    // withListService({
    //   collection: 'user',
    //   list: userProxy.list,
    // }),
    withEditModal({
      collection: 'user',
      extensionsIdentifier: eUserNames.User,
      get: userProxy.get,
      create: userProxy.create,
      update: userProxy.update,
    })

    // Create， Update， Delete也交给@tanstack-query处理
    // withMethods(
    //   (
    //     store,
    //     confirmationService = inject(ConfirmationService),
    //     injector = inject(Injector)
    //   ) => {
    //     return {
    //       deleteUser: (record: R) => {
    //         confirmationService
    //           .warn(
    //             'AbpIdentity::RoleDeletionConfirmationMessage',
    //             'AbpUi::AreYouSure',
    //             {
    //               messageLocalizationParams: [record.name || ''],
    //             }
    //           )
    //           .pipe(
    //             filter(
    //               (status: Confirmation.Status) =>
    //                 status === Confirmation.Status.confirm
    //             ),
    //             mergeMap(() =>
    //               runInInjectionContext(injector, () =>
    //                 userProxy
    //                   .delete(record.id || '')
    //                   .pipe(tap(() => store.getUserListService().get()))
    //               )
    //             )
    //           )
    //           .subscribe();
    //       },
    //     };
    //   }
    // )
  );
}
