import { Validators } from '@angular/forms';
import {
  EntityProp,
  ePropType,
  FormProp,
  EntityAction,
  ToolbarAction,
} from '@abp/ng.components/extensible';
import { eAuditLogsNames, R } from './audit-logs.types';
import { AuditLogsStore } from './audit-logs.store';

const resourceName = eAuditLogsNames.DefaultsResourceName;

export const ENTITY_ACTIONS = EntityAction.createMany<R>([
  {
    text: 'AbpUi::Edit',
    action: (data) => {
      const auditLogsStore = data.getInjected(AuditLogsStore);
      auditLogsStore.openAuditLogsEditModal(data.record.id || '');
    },
    permission: '',
  },
  {
    text: 'AbpUi::Delete',
    action: (data) => {
      const auditLogsStore = data.getInjected(AuditLogsStore);
      auditLogsStore.deleteAuditLogs(data.record);
    },
    permission: '',
  },
]);

export const TOOLBAR_ACTIONS = ToolbarAction.createMany<R[]>([
  {
    text: 'AbpUi::AddNew',
    action: (data) => {
      const auditLogsStore = data.getInjected(AuditLogsStore);
      auditLogsStore.openAuditLogsEditModal(null);
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
    name: 'userId',
    type: ePropType.String,
    displayName: `${resourceName}::UserId`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'userName',
    type: ePropType.String,
    displayName: `${resourceName}::UserName`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'tenantName',
    type: ePropType.String,
    displayName: `${resourceName}::TenantName`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'impersonatorUserId',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorUserId`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'impersonatorUserName',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorUserName`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'impersonatorTenantId',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorTenantId`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'impersonatorTenantName',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorTenantName`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'executionTime',
    type: ePropType.String,
    displayName: `${resourceName}::ExecutionTime`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'executionDuration',
    type: ePropType.Number,
    displayName: `${resourceName}::ExecutionDuration`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'clientIpAddress',
    type: ePropType.String,
    displayName: `${resourceName}::ClientIpAddress`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'clientName',
    type: ePropType.String,
    displayName: `${resourceName}::ClientName`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'browserInfo',
    type: ePropType.String,
    displayName: `${resourceName}::BrowserInfo`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'httpMethod',
    type: ePropType.String,
    displayName: `${resourceName}::HttpMethod`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'url',
    type: ePropType.String,
    displayName: `${resourceName}::Url`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'exceptions',
    type: ePropType.String,
    displayName: `${resourceName}::Exceptions`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'comments',
    type: ePropType.String,
    displayName: `${resourceName}::Comments`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'applicationName',
    type: ePropType.String,
    displayName: `${resourceName}::ApplicationName`,
    sortable: true,
    columnWidth: 100,
  },
  {
    name: 'correlationId',
    type: ePropType.String,
    displayName: `${resourceName}::CorrelationId`,
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
    id: 'userId',
    name: 'userId',
    type: ePropType.String,
    displayName: `${resourceName}::UserId`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'userName',
    name: 'userName',
    type: ePropType.String,
    displayName: `${resourceName}::UserName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'tenantName',
    name: 'tenantName',
    type: ePropType.String,
    displayName: `${resourceName}::TenantName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'impersonatorUserId',
    name: 'impersonatorUserId',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorUserId`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'impersonatorUserName',
    name: 'impersonatorUserName',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorUserName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'impersonatorTenantId',
    name: 'impersonatorTenantId',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorTenantId`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'impersonatorTenantName',
    name: 'impersonatorTenantName',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorTenantName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'executionTime',
    name: 'executionTime',
    type: ePropType.String,
    displayName: `${resourceName}::ExecutionTime`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'executionDuration',
    name: 'executionDuration',
    type: ePropType.Number,
    displayName: `${resourceName}::ExecutionDuration`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'clientIpAddress',
    name: 'clientIpAddress',
    type: ePropType.String,
    displayName: `${resourceName}::ClientIpAddress`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'clientName',
    name: 'clientName',
    type: ePropType.String,
    displayName: `${resourceName}::ClientName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'browserInfo',
    name: 'browserInfo',
    type: ePropType.String,
    displayName: `${resourceName}::BrowserInfo`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'httpMethod',
    name: 'httpMethod',
    type: ePropType.String,
    displayName: `${resourceName}::HttpMethod`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'url',
    name: 'url',
    type: ePropType.String,
    displayName: `${resourceName}::Url`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'exceptions',
    name: 'exceptions',
    type: ePropType.String,
    displayName: `${resourceName}::Exceptions`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'comments',
    name: 'comments',
    type: ePropType.String,
    displayName: `${resourceName}::Comments`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'applicationName',
    name: 'applicationName',
    type: ePropType.String,
    displayName: `${resourceName}::ApplicationName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'correlationId',
    name: 'correlationId',
    type: ePropType.String,
    displayName: `${resourceName}::CorrelationId`,
    defaultValue: undefined,
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
    id: 'userId',
    name: 'userId',
    type: ePropType.String,
    displayName: `${resourceName}::UserId`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'userName',
    name: 'userName',
    type: ePropType.String,
    displayName: `${resourceName}::UserName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'tenantName',
    name: 'tenantName',
    type: ePropType.String,
    displayName: `${resourceName}::TenantName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'impersonatorUserId',
    name: 'impersonatorUserId',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorUserId`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'impersonatorUserName',
    name: 'impersonatorUserName',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorUserName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'impersonatorTenantId',
    name: 'impersonatorTenantId',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorTenantId`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'impersonatorTenantName',
    name: 'impersonatorTenantName',
    type: ePropType.String,
    displayName: `${resourceName}::ImpersonatorTenantName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'executionTime',
    name: 'executionTime',
    type: ePropType.String,
    displayName: `${resourceName}::ExecutionTime`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'executionDuration',
    name: 'executionDuration',
    type: ePropType.Number,
    displayName: `${resourceName}::ExecutionDuration`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'clientIpAddress',
    name: 'clientIpAddress',
    type: ePropType.String,
    displayName: `${resourceName}::ClientIpAddress`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'clientName',
    name: 'clientName',
    type: ePropType.String,
    displayName: `${resourceName}::ClientName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'browserInfo',
    name: 'browserInfo',
    type: ePropType.String,
    displayName: `${resourceName}::BrowserInfo`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'httpMethod',
    name: 'httpMethod',
    type: ePropType.String,
    displayName: `${resourceName}::HttpMethod`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'url',
    name: 'url',
    type: ePropType.String,
    displayName: `${resourceName}::Url`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'exceptions',
    name: 'exceptions',
    type: ePropType.String,
    displayName: `${resourceName}::Exceptions`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'comments',
    name: 'comments',
    type: ePropType.String,
    displayName: `${resourceName}::Comments`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'applicationName',
    name: 'applicationName',
    type: ePropType.String,
    displayName: `${resourceName}::ApplicationName`,
    defaultValue: undefined,
    validators: () => [],
  },
  {
    id: 'correlationId',
    name: 'correlationId',
    type: ePropType.String,
    displayName: `${resourceName}::CorrelationId`,
    defaultValue: undefined,
    validators: () => [],
  },
]);

export const auditLogsDefaults = {
  entityActions: ENTITY_ACTIONS,
  toolbarActions: TOOLBAR_ACTIONS,
  entityProps: ENTITY_PROPS,
  createFormProps: CREATE_FORM_PROPS,
  editFormProps: EDIT_FORM_PROPS,
};
