import { __decorate } from 'tslib';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RoutesService, AddReplaceableComponent } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { UserLoginComponent, UserRegisterComponent, ManageProfileComponent } from '@fs/account/ng-alain';
import { ACCOUNT_ROUTE_PROVIDERS } from '@abp/ng.account/config';

const ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
function configureRoutes(routes) {
    return () => {
        routes.patch('AbpAccount::Menu:Account', { layout: "account" /* account */ });
        routes.patch('AbpAccount::ManageYourProfile', { layout: "application" /* application */ });
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
    store.dispatch(new AddReplaceableComponent({ component: UserLoginComponent, key: "Account.LoginComponent" /* Login */ }));
    store.dispatch(new AddReplaceableComponent({ component: UserRegisterComponent, key: "Account.RegisterComponent" /* Register */ }));
    store.dispatch(new AddReplaceableComponent({ component: ManageProfileComponent, key: "Account.ManageProfileComponent" /* ManageProfile */ }));
}

var AccountNgAlainConfigModule_1;
let AccountNgAlainConfigModule = AccountNgAlainConfigModule_1 = class AccountNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: AccountNgAlainConfigModule_1,
            providers: [ACCOUNT_ROUTE_PROVIDERS, ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
};
AccountNgAlainConfigModule = AccountNgAlainConfigModule_1 = __decorate([
    NgModule()
], AccountNgAlainConfigModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AccountNgAlainConfigModule, ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb, STYLES_PROVIDERS as ɵc, configureStyles as ɵd };
//# sourceMappingURL=fs-account-ng-alain-config.js.map
