import { Injector, inject, runInInjectionContext } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, mergeMap, tap } from 'rxjs';
import { signalStoreFeature, withMethods } from '@ngrx/signals';
import { eAuditLogsNames, auditLogsProxy, R } from './audit-logs.types';
import { auditLogsDefaults } from './audit-logs.default';
import { withDefaults } from '../../../../shared/defaults.feature';
import { withListService } from '../../../../shared/list.feature';
import { withEditModal } from '../../../../shared/edit-modal.feature';

export function withAuditLogs() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eAuditLogsNames.AuditLogs,
      defaults: auditLogsDefaults,
    }),
    withListService({
      collection: 'auditLogs',
      list: auditLogsProxy.list,
    }),
    withEditModal({
      collection: 'auditLogs',
      extensionsIdentifier: eAuditLogsNames.AuditLogs,
      get: auditLogsProxy.get,
      create: auditLogsProxy.create,
      update: auditLogsProxy.update,
    }),

    withMethods(
      (
        store,
        confirmationService = inject(ConfirmationService),
        injector = inject(Injector)
      ) => {
        return {
          deleteAuditLogs: (record: R) => {
            confirmationService
              .warn(
                'AbpIdentity::RoleDeletionConfirmationMessage',
                'AbpUi::AreYouSure',
                {
                  messageLocalizationParams: [record.id || ''],
                }
              )
              .pipe(
                filter(
                  (status: Confirmation.Status) =>
                    status === Confirmation.Status.confirm
                ),
                mergeMap(() =>
                  runInInjectionContext(injector, () =>
                    auditLogsProxy
                      .delete(record.id || '')
                      .pipe(tap(() => store.getAuditLogsListService().get()))
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
