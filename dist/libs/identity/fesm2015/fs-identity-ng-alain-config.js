import { APP_INITIALIZER, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { RoutesService, AddReplaceableComponent } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { UsersComponent, RolesComponent } from '@fs/identity/ng-alain';

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
            key: "Identity.UsersComponent" /* Users */,
            component: UsersComponent,
        }),
        new AddReplaceableComponent({
            key: "Identity.RolesComponent" /* Roles */,
            component: RolesComponent
        })
    ]);
}

class IdentityNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: IdentityNgAlainConfigModule,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
}
IdentityNgAlainConfigModule.ɵmod = ɵɵdefineNgModule({ type: IdentityNgAlainConfigModule });
IdentityNgAlainConfigModule.ɵinj = ɵɵdefineInjector({ factory: function IdentityNgAlainConfigModule_Factory(t) { return new (t || IdentityNgAlainConfigModule)(); }, imports: [[
            IdentityConfigModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(IdentityNgAlainConfigModule, { imports: [IdentityConfigModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(IdentityNgAlainConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    IdentityConfigModule.forRoot()
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { IdentityNgAlainConfigModule };
//# sourceMappingURL=fs-identity-ng-alain-config.js.map
