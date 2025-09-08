import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44364/',
  redirectUri: baseUrl,
  clientId: 'Booking_Admin1',
  responseType: 'code',
  scope: 'offline_access Booking',
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
      url: 'https://localhost:44364',
      rootNamespace: '',
    },
  }
} as Environment;