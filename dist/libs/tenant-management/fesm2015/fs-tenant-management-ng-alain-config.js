import { APP_INITIALIZER, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
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

class TenantManagementNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: TenantManagementNgAlainConfigModule,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
}
TenantManagementNgAlainConfigModule.ɵmod = ɵɵdefineNgModule({ type: TenantManagementNgAlainConfigModule });
TenantManagementNgAlainConfigModule.ɵinj = ɵɵdefineInjector({ factory: function TenantManagementNgAlainConfigModule_Factory(t) { return new (t || TenantManagementNgAlainConfigModule)(); }, imports: [[
            TenantManagementConfigModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TenantManagementNgAlainConfigModule, { imports: [TenantManagementConfigModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TenantManagementNgAlainConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    TenantManagementConfigModule.forRoot()
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TenantManagementNgAlainConfigModule };
//# sourceMappingURL=fs-tenant-management-ng-alain-config.js.map
