import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44301/',
  redirectUri: baseUrl,
  clientId: 'MyProjectName1_App',
  responseType: 'code',
  scope: 'offline_access MyProjectName1',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'MyProjectName1',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44300',
      rootNamespace: 'MyCompanyName.MyProjectName1',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
