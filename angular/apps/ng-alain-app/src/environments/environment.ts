export const environment = {
  production: false,
  hmr: false,
  application: {
    name: 'Identity',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44367',
    clientId: 'Identity_ConsoleTestApp',
    dummyClientSecret: '1q2w3e*',
    scope: 'Identity',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44358',
    },
  },
  localization: {
    defaultResourceName: 'Identity',
  },
};
