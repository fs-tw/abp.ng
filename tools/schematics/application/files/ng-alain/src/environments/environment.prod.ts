export const environment = {
  production: false,
  hmr: false,
  application: {
    name: 'MyProjectName',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: '',
    clientId: 'MyProjectName_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'MyProjectName',
    showDebugInformation: false,
    oidc: false,
    requireHttps: false,
    skipIssuerCheck:true
  },
  apis: {
    default: {
      url: '',
    },
  },
  localization: {
    defaultResourceName: 'MyProjectName',
  },
};
