import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://your-production-issuer/',
  redirectUri: baseUrl,
  clientId: 'Web_App',
  responseType: 'code',
  scope: 'offline_access Web',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Tourmap Public',
    logoUrl: './assets/images/logo.png',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://your-production-api',
      rootNamespace: 'Web',
    },
  },
  localization: {
    defaultResourceName: 'Web',
  },
} as Environment;
