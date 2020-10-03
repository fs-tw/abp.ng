import { RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER, NgModule } from '@angular/core';

const TENANT_MANAGEMENT_ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
function configureRoutes(routes) {
    return () => {
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

class TenantManagementConfigModule {
    static forRoot() {
        return {
            ngModule: TenantManagementConfigModule,
            providers: [TENANT_MANAGEMENT_ROUTE_PROVIDERS],
        };
    }
}
TenantManagementConfigModule.decorators = [
    { type: NgModule }
];

/**
 * Generated bundle index. Do not edit.
 */

export { TENANT_MANAGEMENT_ROUTE_PROVIDERS, TenantManagementConfigModule, configureRoutes, TENANT_MANAGEMENT_ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb };
//# sourceMappingURL=abp-ng.tenant-management-config.js.map
