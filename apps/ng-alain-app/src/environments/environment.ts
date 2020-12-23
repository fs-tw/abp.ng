import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'FS',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44309',
    redirectUri: baseUrl,
    clientId: 'FS_App',
    responseType: 'password',
    scope: 'offline_access FS',
  },
  apis: {
    default: {
      url: 'https://localhost:44309',
      rootNamespace: 'FS',
    },
    AbpFeatureManagement: {
      url: 'https://localhost:44309',
      rootNamespace: 'Volo.Abp',
    },
    AbpPermissionManagement: {
      url: 'https://localhost:44309',
      rootNamespace: 'Volo.Abp.PermissionManagement',
    },
    AbpTenantManagement: {
      url: 'https://localhost:44309',
      rootNamespace: 'Volo.Abp.TenantManagement',
    },
    AbpIdentity: {
      url: 'https://localhost:44309',
      rootNamespace: 'Volo.Abp',
    },
  },
} as Environment;

