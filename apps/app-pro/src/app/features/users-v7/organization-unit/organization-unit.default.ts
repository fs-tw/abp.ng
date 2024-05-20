import { Validators } from '@angular/forms';
import {
  EntityProp,
  ePropType,
  FormProp,
  EntityAction,
  ToolbarAction,
} from '@abp/ng.components/extensible';
import { OrganizationUnitComponent } from './organization-unit.component';
import { eOrganizationUnitNames, R } from './organization-unit.types';

const resourceName = eOrganizationUnitNames.DefaultsResourceName;

export const ENTITY_ACTIONS = EntityAction.createMany<R>([
  {
    text: 'AbpUi::Edit',
    action: (data) => {
      const component = data.getInjected(OrganizationUnitComponent);
      component.onEdit(data.record.id || '');
    },
    permission: '',
  },
  {
    text: 'AbpUi::Delete',
    action: (data) => {
      const component = data.getInjected(OrganizationUnitComponent);
      component.onDelete(data.record.id || '', data.record.displayName || '');
    },
    permission: '',
    visible: (data) => true,
  },
]);

export const TOOLBAR_ACTIONS = ToolbarAction.createMany<R[]>([
  {
    text: 'AbpUi::AddNew',
    action: (data) => {
      const component = data.getInjected(OrganizationUnitComponent);
      component.onAdd();
    },
    //permission: 'AbpIdentity.Roles.Create',
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
    name: 'parentId',
    type: ePropType.String,
    displayName: `${resourceName}::ParentId`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'code',
    type: ePropType.String,
    displayName: `${resourceName}::Code`,
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
    id: 'displayName',
    name: 'displayName',
    type: ePropType.String,
    displayName: `${resourceName}::DisplayName`,
    validators: () => [Validators.required],
  },
  {
    id: 'parentId',
    name: 'parentId',
    type: ePropType.String,
    displayName: `${resourceName}::ParentId`,
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
    validators: () => [Validators.required],
  },
]);

export const organizationUnitDefaults = {
  entityActions: ENTITY_ACTIONS,
  toolbarActions: TOOLBAR_ACTIONS,
  entityProps: ENTITY_PROPS,
  createFormProps: CREATE_FORM_PROPS,
  editFormProps: EDIT_FORM_PROPS,
};
