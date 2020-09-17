// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  SERVER_URL: `./`,
  production: false,
  useHash: true,
  hmr: false,
  application: {
    name: 'FS',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44356',
    clientId: 'WebSite_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'WebSite',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
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

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
