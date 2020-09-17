import { __decorate } from 'tslib';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { TENANT_MANAGEMENT_ROUTE_PROVIDERS } from '@abp/ng.tenant-management/config';
import { RoutesService, AddReplaceableComponent } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { TenantsComponent } from '@fs/tenant-management/ng-alain';

const ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
function configureRoutes(routes) {
    return () => {
    };
}

const STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [Store],
        multi: true,
    },
];
function configureStyles(store) {
    return () => {
        initLayouts(store);
    };
}
function initLayouts(store) {
    store.dispatch([
        new AddReplaceableComponent({
            key: "TenantManagement.TenantsComponent" /* Tenants */,
            component: TenantsComponent,
        })
    ]);
}

var TenantManagementNgAlainConfigModule_1;
let TenantManagementNgAlainConfigModule = TenantManagementNgAlainConfigModule_1 = class TenantManagementNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: TenantManagementNgAlainConfigModule_1,
            providers: [TENANT_MANAGEMENT_ROUTE_PROVIDERS, ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
};
TenantManagementNgAlainConfigModule = TenantManagementNgAlainConfigModule_1 = __decorate([
    NgModule()
], TenantManagementNgAlainConfigModule);

/**
 * Generated bundle index. Do not edit.
 */

export { TenantManagementNgAlainConfigModule, ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb, STYLES_PROVIDERS as ɵc, configureStyles as ɵd };
//# sourceMappingURL=fs-tenant-management-ng-alain-config.js.map
