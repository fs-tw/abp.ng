import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44376/',
  redirectUri: baseUrl,
  clientId: 'FuseTheme_App',
  responseType: 'code',
  scope: 'offline_access FuseTheme Abp',
  requireHttps: true
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'FuseTheme',
    logoUrl: '',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44376',
      rootNamespace: 'Further.FuseTheme',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
    FuseTheme: {
      url: 'https://localhost:44397',
      rootNamespace: 'Further.FuseTheme',
    },
  },
} as Environment;
