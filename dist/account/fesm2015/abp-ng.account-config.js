import { __decorate } from 'tslib';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RoutesService } from '@abp/ng.core';

const ACCOUNT_ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
function configureRoutes(routes) {
    return () => {
        routes.add([
            {
                path: '/account',
                name: "AbpAccount::Menu:Account" /* Account */,
                invisible: true,
                layout: "application" /* application */,
                order: 1,
            },
            {
                path: '/account/login',
                name: "AbpAccount::Login" /* Login */,
                parentName: "AbpAccount::Menu:Account" /* Account */,
                order: 1,
            },
            {
                path: '/account/register',
                name: "AbpAccount::Register" /* Register */,
                parentName: "AbpAccount::Menu:Account" /* Account */,
                order: 2,
            },
            {
                path: '/account/manage-profile',
                name: "AbpAccount::ManageYourProfile" /* ManageProfile */,
                parentName: "AbpAccount::Menu:Account" /* Account */,
                order: 3,
            },
        ]);
    };
}

var AccountConfigModule_1;
let AccountConfigModule = AccountConfigModule_1 = class AccountConfigModule {
    static forRoot() {
        return {
            ngModule: AccountConfigModule_1,
            providers: [ACCOUNT_ROUTE_PROVIDERS],
        };
    }
};
AccountConfigModule = AccountConfigModule_1 = __decorate([
    NgModule()
], AccountConfigModule);

/**
 * Generated bundle index. Do not edit.
 */

export { ACCOUNT_ROUTE_PROVIDERS, AccountConfigModule, configureRoutes, ACCOUNT_ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb };
//# sourceMappingURL=abp-ng.account-config.js.map
