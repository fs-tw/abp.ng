import {
  EntityAction,
  EntityProp,
  ExtensionsService,
  FormProp,
  ToolbarAction,
  ToolbarComponent,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
} from '@abp/ng.components/extensible';
import { inject } from '@angular/core';
import { signalStoreFeature, withHooks } from '@ngrx/signals';

export type Defaults<E> = {
  entityActions?: EntityAction<E>[];
  toolbarActions?: ToolbarAction<E[]>[];
  toolbarComponents?: ToolbarComponent<E[]>[];
  entityProps?: EntityProp<E>[];
  createFormProps?: FormProp<E>[];
  editFormProps?: FormProp<E>[];
};

export function withDefaults<E>(options: {
  extensionsIdentifier: string;
  defaults: Defaults<E>;
}) {
  return signalStoreFeature(
    withHooks({
      onInit(store, extensionsService = inject(ExtensionsService)) {
        const { extensionsIdentifier, defaults } = options;

        mergeWithDefaultActions(extensionsService.entityActions, {
          [extensionsIdentifier]: defaults.entityActions || [],
        });

        mergeWithDefaultActions(extensionsService.toolbarActions, {
          [extensionsIdentifier]: [
            ...(defaults.toolbarComponents || []),
            ...(defaults.toolbarActions || []),
          ],
        });

        mergeWithDefaultProps(extensionsService.entityProps, {
          [extensionsIdentifier]: defaults.entityProps || [],
        });
        mergeWithDefaultProps(extensionsService.createFormProps, {
          [extensionsIdentifier]: defaults.createFormProps || [],
        });
        mergeWithDefaultProps(extensionsService.editFormProps, {
          [extensionsIdentifier]: defaults.editFormProps || [],
        });
      },
    })
  );
}
