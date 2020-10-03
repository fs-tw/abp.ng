(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.identity/config', ['exports', '@angular/core', '@abp/ng.core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng.identity = global.abp.ng.identity || {}, global.abp.ng.identity.config = {}), global.ng.core, global.ng_core));
}(this, (function (exports, core, ng_core) { 'use strict';

    var IDENTITY_ROUTE_PROVIDERS = [
        { provide: core.APP_INITIALIZER, useFactory: configureRoutes, deps: [ng_core.RoutesService], multi: true },
    ];
    function configureRoutes(routes) {
        return function () {
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

    var IdentityConfigModule = /** @class */ (function () {
        function IdentityConfigModule() {
        }
        IdentityConfigModule.forRoot = function () {
            return {
                ngModule: IdentityConfigModule,
                providers: [IDENTITY_ROUTE_PROVIDERS],
            };
        };
        return IdentityConfigModule;
    }());
    IdentityConfigModule.decorators = [
        { type: core.NgModule }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.IDENTITY_ROUTE_PROVIDERS = IDENTITY_ROUTE_PROVIDERS;
    exports.IdentityConfigModule = IdentityConfigModule;
    exports.configureRoutes = configureRoutes;
    exports.ɵa = IDENTITY_ROUTE_PROVIDERS;
    exports.ɵb = configureRoutes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.identity-config.umd.js.map
