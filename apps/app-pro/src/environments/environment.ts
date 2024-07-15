import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44336/',
  redirectUri: baseUrl,
  clientId: 'ExamineApp_App',
  responseType: 'code',
  scope: 'offline_access ExamineApp',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'ExamineApp',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44336',
      rootNamespace: '',
    }
  },
} as Environment;
