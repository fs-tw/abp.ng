import { __decorate } from 'tslib';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { IDENTITY_ROUTE_PROVIDERS } from '@abp/ng.identity/config';
import { RoutesService, AddReplaceableComponent } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { UsersComponent, RolesComponent } from '@fs/identity/ng-alain';

const ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
function configureRoutes(_routes) {
    return () => {
        _routes.patch("AbpUiNavigation::Menu:Administration" /* Administration */, {
            path: 'identity/users',
            profile: {
                title: 'Administrator',
                doc: 'user doc',
                nav: { routeName: "AbpUiNavigation::Menu:Administration" /* Administration */ }
            }
        });
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
            providers: [IDENTITY_ROUTE_PROVIDERS, ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
};
IdentityNgAlainConfigModule = IdentityNgAlainConfigModule_1 = __decorate([
    NgModule()
], IdentityNgAlainConfigModule);

/**
 * Generated bundle index. Do not edit.
 */

export { IdentityNgAlainConfigModule, ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb, STYLES_PROVIDERS as ɵc, configureStyles as ɵd };
//# sourceMappingURL=fs-identity-ng-alain-config.js.map
