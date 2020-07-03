(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.tenant-management/config'), require('@abp/ng.core'), require('@ngxs/store'), require('@fs/tenant-management/ng-alain')) :
    typeof define === 'function' && define.amd ? define('@fs/tenant-management/ng-alain/config', ['exports', '@angular/core', '@abp/ng.tenant-management/config', '@abp/ng.core', '@ngxs/store', '@fs/tenant-management/ng-alain'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['tenant-management'] = global.fs['tenant-management'] || {}, global.fs['tenant-management']['ng-alain'] = global.fs['tenant-management']['ng-alain'] || {}, global.fs['tenant-management']['ng-alain'].config = {}), global.ng.core, global.i1, global.ng_core, global.store, global.fs['tenant-management']['ng-alain']));
}(this, (function (exports, i0, i1, ng_core, store, ngAlain) { 'use strict';

    var ROUTE_PROVIDERS = [
        { provide: i0.APP_INITIALIZER, useFactory: configureRoutes, deps: [ng_core.RoutesService], multi: true },
    ];
    function configureRoutes(routes) {
        return function () {
        };
    }

    var STYLES_PROVIDERS = [
        {
            provide: i0.APP_INITIALIZER,
            useFactory: configureStyles,
            deps: [store.Store],
            multi: true,
        },
    ];
    function configureStyles(store) {
        return function () {
            initLayouts(store);
        };
    }
    function initLayouts(store) {
        store.dispatch([
            new ng_core.AddReplaceableComponent({
                key: "TenantManagement.TenantsComponent" /* Tenants */,
                component: ngAlain.TenantsComponent,
            })
        ]);
    }

    var TenantManagementNgAlainConfigModule = /** @class */ (function () {
        function TenantManagementNgAlainConfigModule() {
        }
        TenantManagementNgAlainConfigModule.forRoot = function () {
            return {
                ngModule: TenantManagementNgAlainConfigModule,
                providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
            };
        };
        return TenantManagementNgAlainConfigModule;
    }());
    TenantManagementNgAlainConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: TenantManagementNgAlainConfigModule });
    TenantManagementNgAlainConfigModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TenantManagementNgAlainConfigModule_Factory(t) { return new (t || TenantManagementNgAlainConfigModule)(); }, imports: [[
                i1.TenantManagementConfigModule.forRoot()
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TenantManagementNgAlainConfigModule, { imports: [i1.TenantManagementConfigModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TenantManagementNgAlainConfigModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.TenantManagementConfigModule.forRoot()
                        ]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TenantManagementNgAlainConfigModule = TenantManagementNgAlainConfigModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-tenant-management-ng-alain-config.umd.js.map
