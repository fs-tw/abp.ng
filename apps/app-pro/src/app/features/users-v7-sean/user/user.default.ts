import { Validators } from '@angular/forms';
import {
  EntityProp,
  ePropType,
  FormProp,
  EntityAction,
  ToolbarAction,
} from '@abp/ng.components/extensible';
import { eUserNames, R } from './user.types';
import { UsersV7Store } from './../users-v7.store';
import { UserComponent } from './user.component';

const resourceName = eUserNames.DefaultsResourceName;

export const ENTITY_ACTIONS = EntityAction.createMany<R>([
  {
    text: 'AbpUi::Edit',
    action: (data) => {
      const usersV7Store = data.getInjected(UsersV7Store);
      usersV7Store.openUserEditModal(data.record.id || '');
    },
    permission: '',
  },
  {
    text: 'AbpUi::Delete',
    action: (data) => {
      const component = data.getInjected(UserComponent);
      component.deleteUser(data.record);
    },
    permission: '',
  },
]);

export const TOOLBAR_ACTIONS = ToolbarAction.createMany<R[]>([
  {
    text: 'AbpUi::AddNew',
    action: (data) => {
      const component = data.getInjected(UserComponent);
      component.openEditModal();
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
    name: 'userName',
    type: ePropType.String,
    displayName: `${resourceName}::UserName`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'email',
    type: ePropType.String,
    displayName: `${resourceName}::Email`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'name',
    type: ePropType.String,
    displayName: `${resourceName}::Name`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'surname',
    type: ePropType.String,
    displayName: `${resourceName}::Surname`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'emailConfirmed',
    type: ePropType.Boolean,
    displayName: `${resourceName}::EmailConfirmed`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'phoneNumber',
    type: ePropType.String,
    displayName: `${resourceName}::PhoneNumber`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'phoneNumberConfirmed',
    type: ePropType.Boolean,
    displayName: `${resourceName}::PhoneNumberConfirmed`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'supportTwoFactor',
    type: ePropType.Boolean,
    displayName: `${resourceName}::SupportTwoFactor`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'twoFactorEnabled',
    type: ePropType.Boolean,
    displayName: `${resourceName}::TwoFactorEnabled`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'isActive',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsActive`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'lockoutEnabled',
    type: ePropType.Boolean,
    displayName: `${resourceName}::LockoutEnabled`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'isLockedOut',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsLockedOut`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'lockoutEnd',
    type: ePropType.String,
    displayName: `${resourceName}::LockoutEnd`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'shouldChangePasswordOnNextLogin',
    type: ePropType.Boolean,
    displayName: `${resourceName}::ShouldChangePasswordOnNextLogin`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'accessFailedCount',
    type: ePropType.Number,
    displayName: `${resourceName}::AccessFailedCount`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'lastPasswordChangeTime',
    type: ePropType.DateTime,
    displayName: `${resourceName}::LastPasswordChangeTime`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'isExternal',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsExternal`,
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
    id: 'userName',
    name: 'userName',
    type: ePropType.String,
    displayName: `${resourceName}::UserName`,
    defaultValue: undefined,
    validators: () => [Validators.required],
  },
  {
    id: 'name',
    name: 'name',
    type: ePropType.String,
    displayName: `${resourceName}::Name`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'surname',
    name: 'surname',
    type: ePropType.String,
    displayName: `${resourceName}::Surname`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'email',
    name: 'email',
    type: ePropType.String,
    displayName: `${resourceName}::Email`,
    defaultValue: undefined,
    validators: () => [Validators.required],
  },
  {
    id: 'phoneNumber',
    name: 'phoneNumber',
    type: ePropType.String,
    displayName: `${resourceName}::PhoneNumber`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'isActive',
    name: 'isActive',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsActive`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'shouldChangePasswordOnNextLogin',
    name: 'shouldChangePasswordOnNextLogin',
    type: ePropType.Boolean,
    displayName: `${resourceName}::ShouldChangePasswordOnNextLogin`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'lockoutEnabled',
    name: 'lockoutEnabled',
    type: ePropType.Boolean,
    displayName: `${resourceName}::LockoutEnabled`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'password',
    name: 'password',
    type: ePropType.String,
    displayName: `${resourceName}::Password`,
    defaultValue: undefined,
    validators: () => [Validators.required],
  },
  {
    id: 'sendConfirmationEmail',
    name: 'sendConfirmationEmail',
    type: ePropType.Boolean,
    displayName: `${resourceName}::SendConfirmationEmail`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'emailConfirmed',
    name: 'emailConfirmed',
    type: ePropType.Boolean,
    displayName: `${resourceName}::EmailConfirmed`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'phoneNumberConfirmed',
    name: 'phoneNumberConfirmed',
    type: ePropType.Boolean,
    displayName: `${resourceName}::PhoneNumberConfirmed`,
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
    id: 'userName',
    name: 'userName',
    type: ePropType.String,
    displayName: `${resourceName}::UserName`,
    defaultValue: undefined,
    validators: () => [Validators.required],
  },
  {
    id: 'name',
    name: 'name',
    type: ePropType.String,
    displayName: `${resourceName}::Name`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'surname',
    name: 'surname',
    type: ePropType.String,
    displayName: `${resourceName}::Surname`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'email',
    name: 'email',
    type: ePropType.String,
    displayName: `${resourceName}::Email`,
    defaultValue: undefined,
    validators: () => [Validators.required],
  },
  {
    id: 'phoneNumber',
    name: 'phoneNumber',
    type: ePropType.String,
    displayName: `${resourceName}::PhoneNumber`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'isActive',
    name: 'isActive',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsActive`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'shouldChangePasswordOnNextLogin',
    name: 'shouldChangePasswordOnNextLogin',
    type: ePropType.Boolean,
    displayName: `${resourceName}::ShouldChangePasswordOnNextLogin`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'lockoutEnabled',
    name: 'lockoutEnabled',
    type: ePropType.Boolean,
    displayName: `${resourceName}::LockoutEnabled`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'emailConfirmed',
    name: 'emailConfirmed',
    type: ePropType.Boolean,
    displayName: `${resourceName}::EmailConfirmed`,
    defaultValue: false,
    validators: () => [],
  },
  {
    id: 'phoneNumberConfirmed',
    name: 'phoneNumberConfirmed',
    type: ePropType.Boolean,
    displayName: `${resourceName}::PhoneNumberConfirmed`,
    defaultValue: false,
    validators: () => [],
  },
]);

export const userDefaults = {
  entityActions: ENTITY_ACTIONS,
  toolbarActions: TOOLBAR_ACTIONS,
  entityProps: ENTITY_PROPS,
  createFormProps: CREATE_FORM_PROPS,
  editFormProps: EDIT_FORM_PROPS,
};
