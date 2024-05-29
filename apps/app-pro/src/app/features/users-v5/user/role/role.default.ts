import { Validators } from '@angular/forms';
import {
  EntityProp,
  ePropType,
  FormProp,
  EntityAction,
  ToolbarAction,
} from '@abp/ng.components/extensible';
import { eRoleNames, R } from './role.types';
import { RoleStore } from './role.store';

const resourceName = eRoleNames.DefaultsResourceName;

export const ENTITY_ACTIONS = EntityAction.createMany<R>([
  {
    text: 'AbpUi::Edit',
    action: (data) => {
      const roleStore = data.getInjected(RoleStore);
      roleStore.openRoleEditModal(data.record.id || '');
    },
    permission: '',
  },
  {
    text: 'AbpUi::Delete',
    action: (data) => {
      const roleStore = data.getInjected(RoleStore);
      roleStore.deleteRole(data.record);
    },
    permission: '',
  },
]);

export const TOOLBAR_ACTIONS = ToolbarAction.createMany<R[]>([
  {
    text: 'AbpUi::AddNew',
    action: (data) => {
      const roleStore = data.getInjected(RoleStore);
      roleStore.openRoleEditModal(null);
    },
    permission: '',
    icon: 'fa fa-plus',
  },
]);

export const ENTITY_PROPS = EntityProp.createMany<R>([
  {
    type: ePropType.String,
    name: 'id',
    displayName: '',
    sortable: false,
    // valueResolver: (data) => {
    //   const l10n = data.getInjected(LocalizationService);
    //   const t = l10n.instant.bind(l10n);
    //   const { name } = data.record;
    //   const isDefault = false,
    //     isPublic = false;

    //   return of(
    //     escapeHtmlChars(name) +
    //       (isDefault
    //         ? `<span class="badge rounded-pill bg-success ms-1">${t(
    //             'AbpIdentity::DisplayName:IsDefault'
    //           )}</span>`
    //         : '') +
    //       (isPublic
    //         ? `<span class="badge rounded-pill bg-info ms-1">${t(
    //             'AbpIdentity::DisplayName:IsPublic'
    //           )}</span>`
    //         : '')
    //   );
    // },
    columnVisible: () => false,
  },
  {
    name: 'name',
    type: ePropType.String,
    displayName: `${resourceName}::Name`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'isDefault',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsDefault`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'isStatic',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsStatic`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'isPublic',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsPublic`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'userCount',
    type: ePropType.Number,
    displayName: `${resourceName}::UserCount`,
    sortable: true,
    columnWidth: 100,
  },
]);

export const CREATE_FORM_PROPS = FormProp.createMany<R>([
  {
    type: ePropType.String,
    name: 'id',
    displayName: '',
    id: 'id',
    visible: () => false,
    //disabled: (data: PropData<IdentityRoleDto>) => data.record && data.record.isStatic,
    //validators: () => [Validators.required],
  },
  {
    id: 'name',
    name: 'name',
    type: ePropType.String,
    displayName: `${resourceName}::Name`,
    defaultValue: undefined,
    validators: () => [Validators.required],
  },
  {
    id: 'isDefault',
    name: 'isDefault',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsDefault`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'isPublic',
    name: 'isPublic',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsPublic`,
    defaultValue: false,
    validators: () => [],
  },
]);
export const EDIT_FORM_PROPS = FormProp.createMany<R>([
  {
    type: ePropType.String,
    name: 'id',
    displayName: '',
    id: 'id',
    visible: () => false,
    //disabled: (data: PropData<IdentityRoleDto>) => data.record && data.record.isStatic,
    //validators: () => [Validators.required],
  },
  {
    id: 'name',
    name: 'name',
    type: ePropType.String,
    displayName: `${resourceName}::Name`,
    defaultValue: undefined,
    validators: () => [Validators.required],
  },
  {
    id: 'isDefault',
    name: 'isDefault',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsDefault`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'isPublic',
    name: 'isPublic',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsPublic`,
    defaultValue: false,
    validators: () => [],
  },
]);

export const roleDefaults = {
  entityActions: ENTITY_ACTIONS,
  toolbarActions: TOOLBAR_ACTIONS,
  entityProps: ENTITY_PROPS,
  createFormProps: CREATE_FORM_PROPS,
  editFormProps: EDIT_FORM_PROPS,
};
