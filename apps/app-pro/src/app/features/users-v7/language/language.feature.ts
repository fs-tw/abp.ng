import { Injector, inject, runInInjectionContext } from '@angular/core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { filter, mergeMap, tap } from 'rxjs';
import { signalStoreFeature, withMethods } from '@ngrx/signals';
import { eLanguageNames, languageProxy, R } from './language.types';
import { languageDefaults } from './language.default';
import { withDefaults } from '../../../shared/defaults.feature';
import { withListService } from '../../../shared/list.feature';
import { withEditModal } from '../../../shared/edit-modal.feature';

export function withLanguage() {
  return signalStoreFeature(
    withDefaults({
      extensionsIdentifier: eLanguageNames.Language,
      defaults: languageDefaults,
    }),
    withListService({
      collection: 'language',
      list: languageProxy.list,
    }),

    withEditModal({
      collection: 'language',
      extensionsIdentifier: eLanguageNames.Language,
      get: languageProxy.get,
      create: languageProxy.create,
      update: languageProxy.update,
    }),

    withMethods(
      (
        store,
        confirmationService = inject(ConfirmationService),
        injector = inject(Injector)
      ) => {
        return {
          deleteLanguage: (record: R) => {
            confirmationService
              .warn(
                'AbpIdentity::RoleDeletionConfirmationMessage',
                'AbpUi::AreYouSure',
                {
                  messageLocalizationParams: [record.displayName || ''],
                }
              )
              .pipe(
                filter(
                  (status: Confirmation.Status) =>
                    status === Confirmation.Status.confirm
                ),
                mergeMap(() =>
                  runInInjectionContext(injector, () =>
                    languageProxy
                      .delete(record.id || '')
                      .pipe(tap(() => store.getLanguageListService().get()))
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
