import { Validators } from '@angular/forms';
import {
  EntityProp,
  ePropType,
  FormProp,
  EntityAction,
  ToolbarAction,
} from '@abp/ng.components/extensible';
import { R } from './user-entity.types';
import { UserEntityStore } from './user-entity.store';

const resourceName = 'Identity';

export const ENTITY_ACTIONS = EntityAction.createMany<R>([
  {
    text: 'AbpUi::Edit',
    action: (data) => {
      const userEntityStore = data.getInjected(UserEntityStore);
      userEntityStore.openUserEntityEditModal(data.record.id || '');
    },
    permission: '',
  },
  {
    text: 'AbpUi::Delete',
    action: (data) => {
      const userEntityStore = data.getInjected(UserEntityStore);
      userEntityStore.deleteUserEntity(data.record);
    },
    permission: '',
  },
]);

export const TOOLBAR_ACTIONS = ToolbarAction.createMany<R[]>([
  {
    text: 'AbpUi::AddNew',
    action: (data) => {
      const userEntityStore = data.getInjected(UserEntityStore);
      userEntityStore.openUserEntityEditModal(null);
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
    name: 'email',
    type: ePropType.String,
    displayName: `${resourceName}::Email`,
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
    name: 'accessFailedCount',
    type: ePropType.Number,
    displayName: `${resourceName}::AccessFailedCount`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'lockoutEnd',
    type: ePropType.DateTime,
    displayName: `${resourceName}::LockoutEnd`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'entityVersion',
    type: ePropType.Number,
    displayName: `${resourceName}::EntityVersion`,
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
]);

export const CREATE_FORM_PROPS = FormProp.createMany<R>([
  {
    type: ePropType.String,
    name: 'id',
    displayName: '',
    id: 'id',
    visible: () => false,
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
]);
export const EDIT_FORM_PROPS = FormProp.createMany<R>([
  {
    type: ePropType.String,
    name: 'id',
    displayName: '',
    id: 'id',
    visible: () => false,
    validators: () => [Validators.required],
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
    validators: () => [],
  },
]);

export const userEntityDefaults = {
  entityActions: ENTITY_ACTIONS,
  toolbarActions: TOOLBAR_ACTIONS,
  entityProps: ENTITY_PROPS,
  createFormProps: CREATE_FORM_PROPS,
  editFormProps: EDIT_FORM_PROPS,
};
