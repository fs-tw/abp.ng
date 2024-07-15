import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'ExamineApp',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44336/',
    redirectUri: baseUrl,
    clientId: 'ExamineApp_App',
    responseType: 'code',
    scope: 'offline_access ExamineApp',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44336',
      rootNamespace: '',
    },
  }
} as Environment;
