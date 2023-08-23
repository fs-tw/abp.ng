import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44344/',
  redirectUri: baseUrl,
  clientId: 'Further_App',
  responseType: 'code',
  scope: 'offline_access Further',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Further',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44316',
      rootNamespace: 'Further',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  remoteEnv: {
    url: '/getEnvConfig',
    mergeStrategy: 'deepmerge'
  }
} as Environment;
