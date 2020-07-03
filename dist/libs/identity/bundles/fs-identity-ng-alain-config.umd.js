(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.identity/config'), require('@abp/ng.core'), require('@ngxs/store'), require('@fs/identity/ng-alain')) :
    typeof define === 'function' && define.amd ? define('@fs/identity/ng-alain/config', ['exports', '@angular/core', '@abp/ng.identity/config', '@abp/ng.core', '@ngxs/store', '@fs/identity/ng-alain'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs.identity = global.fs.identity || {}, global.fs.identity['ng-alain'] = global.fs.identity['ng-alain'] || {}, global.fs.identity['ng-alain'].config = {}), global.ng.core, global.i1, global.ng_core, global.store, global.fs.identity['ng-alain']));
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
                key: "Identity.UsersComponent" /* Users */,
                component: ngAlain.UsersComponent,
            }),
            new ng_core.AddReplaceableComponent({
                key: "Identity.RolesComponent" /* Roles */,
                component: ngAlain.RolesComponent
            })
        ]);
    }

    var IdentityNgAlainConfigModule = /** @class */ (function () {
        function IdentityNgAlainConfigModule() {
        }
        IdentityNgAlainConfigModule.forRoot = function () {
            return {
                ngModule: IdentityNgAlainConfigModule,
                providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
            };
        };
        return IdentityNgAlainConfigModule;
    }());
    IdentityNgAlainConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: IdentityNgAlainConfigModule });
    IdentityNgAlainConfigModule.ɵinj = i0.ɵɵdefineInjector({ factory: function IdentityNgAlainConfigModule_Factory(t) { return new (t || IdentityNgAlainConfigModule)(); }, imports: [[
                i1.IdentityConfigModule.forRoot()
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IdentityNgAlainConfigModule, { imports: [i1.IdentityConfigModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(IdentityNgAlainConfigModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.IdentityConfigModule.forRoot()
                        ]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.IdentityNgAlainConfigModule = IdentityNgAlainConfigModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-identity-ng-alain-config.umd.js.map
