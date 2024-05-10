import { escapeHtmlChars, LocalizationService } from '@abp/ng.core';
import {
  EntityProp,
  ePropType,
  ExtensionsService,
  FormProp,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
  EntityAction,
  ToolbarAction,
} from '@abp/ng.components/extensible';
import { IdentityRoleDto } from '@volo/abp.ng.identity/proxy';
import { of } from 'rxjs';
import { UserComponent } from './user.component';
import { eUserNames } from './user.model';
import { Validators } from '@angular/forms';

export const ENTITY_ACTIONS = EntityAction.createMany<IdentityRoleDto>([
  {
    text: 'AbpIdentity::Edit',
    action: (data) => {
      const component = data.getInjected(UserComponent);
      component.onEdit(data.record.id || '');
    },
    permission: 'AbpIdentity.Roles.Update',
  },
  {
    text: 'AbpIdentity::Delete',
    action: (data) => {
      const component = data.getInjected(UserComponent);
      component.onDelete(data.record.id || '', data.record.name || '');
    },
    permission: 'AbpIdentity.Roles.Delete',
    visible: (data) => !data?.record.isStatic,
  },
]);

export const TOOLBAR_ACTIONS = ToolbarAction.createMany<IdentityRoleDto[]>([
  {
    text: 'AbpIdentity::NewRole',
    action: (data) => {
      const component = data.getInjected(UserComponent);
      component.onAdd();
    },
    permission: 'AbpIdentity.Roles.Create',
    icon: 'fa fa-plus',
  },
]);

export const ENTITY_PROPS = EntityProp.createMany<IdentityRoleDto>([
  {
    type: ePropType.String,
    name: 'name',
    displayName: 'AbpIdentity::RoleName',
    sortable: true,
    valueResolver: (data) => {
      const l10n = data.getInjected(LocalizationService);
      const t = l10n.instant.bind(l10n);
      const { isDefault, isPublic, name } = data.record;

      return of(
        escapeHtmlChars(name) +
          (isDefault
            ? `<span class="badge rounded-pill bg-success ms-1">${t(
                'AbpIdentity::DisplayName:IsDefault'
              )}</span>`
            : '') +
          (isPublic
            ? `<span class="badge rounded-pill bg-info ms-1">${t(
                'AbpIdentity::DisplayName:IsPublic'
              )}</span>`
            : '')
      );
    },
  },
]);

export const CREATE_FORM_PROPS = FormProp.createMany<IdentityRoleDto>([
  {
    type: ePropType.String,
    name: 'name',
    displayName: 'AbpIdentity::RoleName',
    id: 'role-name',
    //disabled: (data: PropData<IdentityRoleDto>) => data.record && data.record.isStatic,
    validators: () => [Validators.required],
  },
  {
    type: ePropType.Boolean,
    name: 'isDefault',
    displayName: 'AbpIdentity::DisplayName:IsDefault',
    id: 'role-is-default',
    defaultValue: false,
  },
  {
    type: ePropType.Boolean,
    name: 'isPublic',
    displayName: 'AbpIdentity::DisplayName:IsPublic',
    id: 'role-is-public',
    defaultValue: false,
  },
]);
export const EDIT_FORM_PROPS = CREATE_FORM_PROPS;

export function MergeDefaultsUser(extensions: ExtensionsService) {
  mergeWithDefaultActions(extensions.entityActions, {
    [eUserNames.User]: ENTITY_ACTIONS,
  });
  mergeWithDefaultActions(extensions.toolbarActions, {
    [eUserNames.User]: TOOLBAR_ACTIONS,
  });
  mergeWithDefaultProps(extensions.entityProps, {
    [eUserNames.User]: ENTITY_PROPS,
  });
  mergeWithDefaultProps(extensions.createFormProps, {
    [eUserNames.User]: CREATE_FORM_PROPS,
  });
  mergeWithDefaultProps(extensions.editFormProps, {
    [eUserNames.User]: EDIT_FORM_PROPS,
  });
}
