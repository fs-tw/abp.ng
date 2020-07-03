import { __decorate } from 'tslib';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RoutesService } from '@abp/ng.core';

const IDENTITY_ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
function configureRoutes(routes) {
    return () => {
        routes.add([
            {
                path: '/identity',
                name: "AbpIdentity::Menu:IdentityManagement" /* IdentityManagement */,
                parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
                requiredPolicy: "AbpIdentity.Roles || AbpIdentity.Users" /* IdentityManagement */,
                iconClass: 'fa fa-id-card-o',
                layout: "application" /* application */,
                order: 1,
            },
            {
                path: '/identity/roles',
                name: "AbpIdentity::Roles" /* Roles */,
                parentName: "AbpIdentity::Menu:IdentityManagement" /* IdentityManagement */,
                requiredPolicy: "AbpIdentity.Roles" /* Roles */,
                order: 1,
            },
            {
                path: '/identity/users',
                name: "AbpIdentity::Users" /* Users */,
                parentName: "AbpIdentity::Menu:IdentityManagement" /* IdentityManagement */,
                requiredPolicy: "AbpIdentity.Users" /* Users */,
                order: 2,
            },
        ]);
    };
}

var IdentityConfigModule_1;
let IdentityConfigModule = IdentityConfigModule_1 = class IdentityConfigModule {
    static forRoot() {
        return {
            ngModule: IdentityConfigModule_1,
            providers: [IDENTITY_ROUTE_PROVIDERS],
        };
    }
};
IdentityConfigModule = IdentityConfigModule_1 = __decorate([
    NgModule()
], IdentityConfigModule);

/**
 * Generated bundle index. Do not edit.
 */

export { IDENTITY_ROUTE_PROVIDERS, IdentityConfigModule, configureRoutes, IDENTITY_ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb };
//# sourceMappingURL=abp-ng.identity-config.js.map
