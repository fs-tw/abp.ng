import { inject, Injectable, Injector } from '@angular/core';
import {
  IdentityConfigOptions,
  eIdentityComponents,
  DEFAULT_IDENTITY_CREATE_FORM_PROPS,
  DEFAULT_IDENTITY_EDIT_FORM_PROPS,
  DEFAULT_IDENTITY_ENTITY_ACTIONS,
  DEFAULT_IDENTITY_ENTITY_PROPS,
  DEFAULT_IDENTITY_TOOLBAR_ACTIONS,
  IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS,
  IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS,
  IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
  IDENTITY_ENTITY_PROP_CONTRIBUTORS,
  IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
} from '@abp/ng.identity';
import {
  UiExtensionsModule,
  ToolbarAction,
  ExtensionsService,
  getObjectExtensionEntitiesFromStore,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
  mapEntitiesToContributors,
} from '@abp/ng.theme.shared/extensions';
import { map, mapTo, tap } from 'rxjs/operators';
import { ConfigStateService } from '@abp/ng.core';

@Injectable()
export class IdentityContributor {
  constructor(injector: Injector) {
    let extensions: ExtensionsService = injector.get(ExtensionsService);
    let options: IdentityConfigOptions = {
      entityActionContributors:
        injector.get(IDENTITY_ENTITY_ACTION_CONTRIBUTORS) || {},
      toolbarActionContributors:
        injector.get(IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS) || {},
      entityPropContributors:
        injector.get(IDENTITY_ENTITY_PROP_CONTRIBUTORS) || {},
      createFormPropContributors:
        injector.get(IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS) || {},
      editFormPropContributors:
        injector.get(IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS) || {},
    };
    const configState = injector.get(ConfigStateService);

    mergeWithDefaultActions(
      extensions.entityActions,
      DEFAULT_IDENTITY_ENTITY_ACTIONS,
      options.entityActionContributors
    );
    mergeWithDefaultActions(
      extensions.toolbarActions,
      DEFAULT_IDENTITY_TOOLBAR_ACTIONS,
      options.toolbarActionContributors
    );
    mergeWithDefaultProps(
      extensions.entityProps,
      DEFAULT_IDENTITY_ENTITY_PROPS,
      //   objectExtensionContributors.prop,
      options.entityPropContributors
    );
    //     mergeWithDefaultProps(
    //       extensions.createFormProps,
    //       DEFAULT_IDENTITY_CREATE_FORM_PROPS,
    //       //objectExtensionContributors.createForm,
    //       options.createFormPropContributors
    //     );
    //     mergeWithDefaultProps(
    //       extensions.editFormProps,
    //       DEFAULT_IDENTITY_EDIT_FORM_PROPS,
    //       //   objectExtensionContributors.editForm,
    //       options.editFormPropContributors
    //     );
    //   }
    // }
  }
}
