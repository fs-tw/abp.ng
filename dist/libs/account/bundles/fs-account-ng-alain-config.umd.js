(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@ngxs/store'), require('@fs/account/ng-alain'), require('@abp/ng.account/config')) :
    typeof define === 'function' && define.amd ? define('@fs/account/ng-alain/config', ['exports', '@angular/core', '@abp/ng.core', '@ngxs/store', '@fs/account/ng-alain', '@abp/ng.account/config'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.account = global.fs.account || {}, global.fs.account['ng-alain'] = global.fs.account['ng-alain'] || {}, global.fs.account['ng-alain'].config = {}), global.ng.core, global.ng_core, global.store, global.fs.account['ng-alain'], global.i1));
}(this, (function (exports, i0, ng_core, store, ngAlain, i1) { 'use strict';

    var ROUTE_PROVIDERS = [
        { provide: i0.APP_INITIALIZER, useFactory: configureRoutes, deps: [ng_core.RoutesService], multi: true },
    ];
    function configureRoutes(routes) {
        return function () {
            routes.patch('AbpAccount::Menu:Account', { layout: "account" /* account */ });
            routes.patch('AbpAccount::ManageYourProfile', { layout: "application" /* application */ });
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
        store.dispatch(new ng_core.AddReplaceableComponent({ component: ngAlain.UserLoginComponent, key: "Account.LoginComponent" /* Login */ }));
        store.dispatch(new ng_core.AddReplaceableComponent({ component: ngAlain.UserRegisterComponent, key: "Account.RegisterComponent" /* Register */ }));
        store.dispatch(new ng_core.AddReplaceableComponent({ component: ngAlain.ManageProfileComponent, key: "Account.ManageProfileComponent" /* ManageProfile */ }));
    }

    var AccountNgAlainConfigModule = /** @class */ (function () {
        function AccountNgAlainConfigModule() {
        }
        AccountNgAlainConfigModule.forRoot = function () {
            return {
                ngModule: AccountNgAlainConfigModule,
                providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
            };
        };
        return AccountNgAlainConfigModule;
    }());
    AccountNgAlainConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccountNgAlainConfigModule });
    AccountNgAlainConfigModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AccountNgAlainConfigModule_Factory(t) { return new (t || AccountNgAlainConfigModule)(); }, imports: [[
                i1.AccountConfigModule.forRoot()
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccountNgAlainConfigModule, { imports: [i1.AccountConfigModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AccountNgAlainConfigModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.AccountConfigModule.forRoot()
                        ]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AccountNgAlainConfigModule = AccountNgAlainConfigModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-account-ng-alain-config.umd.js.map
