import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'MyProjectName1',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44301/',
    redirectUri: baseUrl,
    clientId: 'MyProjectName1_App',
    responseType: 'code',
    scope: 'offline_access MyProjectName1',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44300',
      rootNamespace: 'MyCompanyName.MyProjectName1',
    },
  },
} as Environment;
