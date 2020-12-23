import { Config } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  hmr: false,
  application: {
    baseUrl,
    name: 'FS',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44309',
    redirectUri: baseUrl,
    clientId: 'FS_App',
    responseType: 'code',
    scope: 'offline_access FS',
  },
  apis: {
    default: {
      url: 'https://localhost:44309',
    },
  },
} as Config.Environment;
