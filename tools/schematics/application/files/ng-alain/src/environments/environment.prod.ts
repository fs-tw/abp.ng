export const environment = {
  SERVER_URL: `./`,
  production: true,
  useHash: true,
  application: {
    name: 'FS',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44356',
    clientId: 'WebSite_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'WebSite',
    showDebugInformation: false,
    oidc: false,
    requireHttps: false,
    skipIsserCheck:true
  },
  apis: {
    default: {
      url: 'https://localhost:44356',
    },
  },
  localization: {
    defaultResourceName: 'WebSite',
  },
};