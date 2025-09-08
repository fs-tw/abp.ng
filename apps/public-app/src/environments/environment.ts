import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44305/',
  redirectUri: baseUrl,
  clientId: 'MyProjectName_App',
  responseType: 'code',
  scope: 'offline_access MyProjectName',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Tourmap Public',
    logoUrl: './assets/images/logo.png',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44305',
      rootNamespace: '',
    },
  },
} as Environment;
