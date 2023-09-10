import { Environment } from '@abp/ng.core';

const baseUrl = 'https://fuse-further.netlify.app';

const oAuthConfig = {
  issuer: 'https://authserver.stage.furthersoftware.com.tw/',
  redirectUri: baseUrl,
  clientId: 'FuseTheme_App',
  responseType: 'code',
  scope: 'offline_access FuseTheme Abp',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'FuseTheme',
    logoUrl: '',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://authserver.stage.furthersoftware.com.tw',
      rootNamespace: 'Further.FuseTheme',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
    FuseTheme: {
      url: 'https://fusetheme.stage.furthersoftware.com.tw',
      rootNamespace: 'Further.FuseTheme',
    },
  },
} as Environment;
