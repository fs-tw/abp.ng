import { APP_INITIALIZER, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { RoutesService, AddReplaceableComponent } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { UserLoginComponent, UserRegisterComponent, ManageProfileComponent } from '@fs/account/ng-alain';
import { AccountConfigModule } from '@abp/ng.account/config';

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

class AccountNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: AccountNgAlainConfigModule,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
}
AccountNgAlainConfigModule.ɵmod = ɵɵdefineNgModule({ type: AccountNgAlainConfigModule });
AccountNgAlainConfigModule.ɵinj = ɵɵdefineInjector({ factory: function AccountNgAlainConfigModule_Factory(t) { return new (t || AccountNgAlainConfigModule)(); }, imports: [[
            AccountConfigModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AccountNgAlainConfigModule, { imports: [AccountConfigModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AccountNgAlainConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    AccountConfigModule.forRoot()
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AccountNgAlainConfigModule };
//# sourceMappingURL=fs-account-ng-alain-config.js.map
