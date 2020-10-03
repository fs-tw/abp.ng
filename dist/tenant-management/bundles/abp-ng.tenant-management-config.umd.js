(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.tenant-management/config', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng['tenant-management'] = global.abp.ng['tenant-management'] || {}, global.abp.ng['tenant-management'].config = {}), global.ng_core, global.ng.core));
}(this, (function (exports, ng_core, core) { 'use strict';

    var TENANT_MANAGEMENT_ROUTE_PROVIDERS = [
        { provide: core.APP_INITIALIZER, useFactory: configureRoutes, deps: [ng_core.RoutesService], multi: true },
    ];
    function configureRoutes(routes) {
        return function () {
            routes.add([
                {
                    path: '/tenant-management',
                    name: "AbpTenantManagement::Menu:TenantManagement" /* TenantManagement */,
                    parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
                    requiredPolicy: "AbpTenantManagement.Tenants" /* TenantManagement */,
                    layout: "application" /* application */,
                    iconClass: 'fa fa-users',
                    order: 2,
                },
                {
                    path: '/tenant-management/tenants',
                    name: "AbpTenantManagement::Tenants" /* Tenants */,
                    parentName: "AbpTenantManagement::Menu:TenantManagement" /* TenantManagement */,
                    requiredPolicy: "AbpTenantManagement.Tenants" /* Tenants */,
                    order: 1,
                },
            ]);
        };
    }

    var TenantManagementConfigModule = /** @class */ (function () {
        function TenantManagementConfigModule() {
        }
        TenantManagementConfigModule.forRoot = function () {
            return {
                ngModule: TenantManagementConfigModule,
                providers: [TENANT_MANAGEMENT_ROUTE_PROVIDERS],
            };
        };
        return TenantManagementConfigModule;
    }());
    TenantManagementConfigModule.decorators = [
        { type: core.NgModule }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TENANT_MANAGEMENT_ROUTE_PROVIDERS = TENANT_MANAGEMENT_ROUTE_PROVIDERS;
    exports.TenantManagementConfigModule = TenantManagementConfigModule;
    exports.configureRoutes = configureRoutes;
    exports.ɵa = TENANT_MANAGEMENT_ROUTE_PROVIDERS;
    exports.ɵb = configureRoutes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.tenant-management-config.umd.js.map
