import { __decorate } from 'tslib';
import { APP_INITIALIZER, NgModule } from '@angular/core';
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

var IdentityNgAlainConfigModule_1;
let IdentityNgAlainConfigModule = IdentityNgAlainConfigModule_1 = class IdentityNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: IdentityNgAlainConfigModule_1,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
};
IdentityNgAlainConfigModule = IdentityNgAlainConfigModule_1 = __decorate([
    NgModule({
        imports: [
            IdentityConfigModule.forRoot()
        ]
    })
], IdentityNgAlainConfigModule);

/**
 * Generated bundle index. Do not edit.
 */

export { IdentityNgAlainConfigModule, ROUTE_PROVIDERS as ɵa, STYLES_PROVIDERS as ɵb, configureStyles as ɵc };
//# sourceMappingURL=fs-identity-ng-alain-config.js.map
