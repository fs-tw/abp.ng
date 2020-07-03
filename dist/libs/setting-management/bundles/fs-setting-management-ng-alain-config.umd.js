(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.setting-management/config'), require('@abp/ng.core'), require('@ngxs/store')) :
    typeof define === 'function' && define.amd ? define('@fs/setting-management/ng-alain/config', ['exports', '@angular/core', '@abp/ng.setting-management/config', '@abp/ng.core', '@ngxs/store'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['setting-management'] = global.fs['setting-management'] || {}, global.fs['setting-management']['ng-alain'] = global.fs['setting-management']['ng-alain'] || {}, global.fs['setting-management']['ng-alain'].config = {}), global.ng.core, global.i1, global.ng_core, global.store));
}(this, (function (exports, i0, i1, ng_core, store) { 'use strict';

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
        // store.dispatch([
        //   new AddReplaceableComponent({
        //     key: eIdentityComponents.Users,
        //     component: UsersComponent,
        //   }),
        //   new AddReplaceableComponent({
        //     key: eIdentityComponents.Roles,
        //     component: RolesComponent
        //   })
        // ]);
    }

    var SettingManagementNgAlainConfigModule = /** @class */ (function () {
        function SettingManagementNgAlainConfigModule() {
        }
        SettingManagementNgAlainConfigModule.forRoot = function () {
            return {
                ngModule: SettingManagementNgAlainConfigModule,
                providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
            };
        };
        return SettingManagementNgAlainConfigModule;
    }());
    SettingManagementNgAlainConfigModule.ɵmod = i0.ɵɵdefineNgModule({ type: SettingManagementNgAlainConfigModule });
    SettingManagementNgAlainConfigModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SettingManagementNgAlainConfigModule_Factory(t) { return new (t || SettingManagementNgAlainConfigModule)(); }, imports: [[
                i1.SettingManagementConfigModule.forRoot()
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingManagementNgAlainConfigModule, { imports: [i1.SettingManagementConfigModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SettingManagementNgAlainConfigModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.SettingManagementConfigModule.forRoot()
                        ]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SettingManagementNgAlainConfigModule = SettingManagementNgAlainConfigModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-setting-management-ng-alain-config.umd.js.map
