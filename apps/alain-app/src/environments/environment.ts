import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  hmr: false,
  application: {
    baseUrl,
    name: 'MyProjectName',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44305',
    clientId: 'MyProjectName_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'offline_access MyProjectName',
    responseType: 'password',
    redirectUri: baseUrl,
  },
  apis: {
    default: {
      url: 'https://localhost:44305',
      rootNamespace: '',
    }
  },
} as Environment;
