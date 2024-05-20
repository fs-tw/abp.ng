import { Validators } from '@angular/forms';
import {
  EntityProp,
  ePropType,
  FormProp,
  EntityAction,
  ToolbarAction,
} from '@abp/ng.components/extensible';
import { eLanguageNames, R } from './language.types';
import { UsersV7Store } from './../users-v7.store';

const resourceName = eLanguageNames.DefaultsResourceName;

export const ENTITY_ACTIONS = EntityAction.createMany<R>([
  {
    text: 'AbpUi::Edit',
    action: (data) => {
      const usersV7Store = data.getInjected(UsersV7Store);
      usersV7Store.openLanguageEditModal(data.record.id || '');
    },
    permission: '',
  },
  {
    text: 'AbpUi::Delete',
    action: (data) => {
      const usersV7Store = data.getInjected(UsersV7Store);
      usersV7Store.deleteLanguage(data.record);
    },
    permission: '',
  },
]);

export const TOOLBAR_ACTIONS = ToolbarAction.createMany<R[]>([
  {
    text: 'AbpUi::AddNew',
    action: (data) => {
      const usersV7Store = data.getInjected(UsersV7Store);
      usersV7Store.openLanguageEditModal(null);
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
    name: 'cultureName',
    type: ePropType.String,
    displayName: `${resourceName}::CultureName`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'uiCultureName',
    type: ePropType.String,
    displayName: `${resourceName}::UiCultureName`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'displayName',
    type: ePropType.String,
    displayName: `${resourceName}::DisplayName`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'flagIcon',
    type: ePropType.String,
    displayName: `${resourceName}::FlagIcon`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'isEnabled',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsEnabled`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'isDefaultLanguage',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsDefaultLanguage`,
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
    id: 'displayName',
    name: 'displayName',
    type: ePropType.String,
    displayName: `${resourceName}::DisplayName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'cultureName',
    name: 'cultureName',
    type: ePropType.String,
    displayName: `${resourceName}::CultureName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'uiCultureName',
    name: 'uiCultureName',
    type: ePropType.String,
    displayName: `${resourceName}::UiCultureName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'flagIcon',
    name: 'flagIcon',
    type: ePropType.String,
    displayName: `${resourceName}::FlagIcon`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'isEnabled',
    name: 'isEnabled',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsEnabled`,
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
    id: 'displayName',
    name: 'displayName',
    type: ePropType.String,
    displayName: `${resourceName}::DisplayName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'flagIcon',
    name: 'flagIcon',
    type: ePropType.String,
    displayName: `${resourceName}::FlagIcon`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'isEnabled',
    name: 'isEnabled',
    type: ePropType.Boolean,
    displayName: `${resourceName}::IsEnabled`,
    defaultValue: false,
    validators: () => [],
  },
]);

export const languageDefaults = {
  entityActions: ENTITY_ACTIONS,
  toolbarActions: TOOLBAR_ACTIONS,
  entityProps: ENTITY_PROPS,
  createFormProps: CREATE_FORM_PROPS,
  editFormProps: EDIT_FORM_PROPS,
};
