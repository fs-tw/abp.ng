// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    SERVER_URL: `./`,
    production: false,
    useHash: true,
    hmr: false,
    application: {
        name: 'WebSite',
        logoUrl: '',
    },
    oAuthConfig: {
        issuer: 'https://localhost:44366',
        clientId: 'WebSite_App',
        dummyClientSecret: '1q2w3e*',
        scope: 'WebSite',
        showDebugInformation: true,
        oidc: false,
        requireHttps: true,
    },
    apis: {
        default: {
            url: 'https://localhost:44366',
        },
    },
    localization: {
        defaultResourceName: 'WebSite',
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
