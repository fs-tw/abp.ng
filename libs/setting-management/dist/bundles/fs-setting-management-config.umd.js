(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@ngxs/store')) :
    typeof define === 'function' && define.amd ? define('@fs/setting-management/config', ['exports', '@angular/core', '@abp/ng.core', '@ngxs/store'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['setting-management'] = global.fs['setting-management'] || {}, global.fs['setting-management'].config = {}), global.ng.core, global.ng_core, global.store));
}(this, (function (exports, core, ng_core, store) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/setting-management-config.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingManagementConfigService = /** @class */ (function () {
        function SettingManagementConfigService(store) {
            this.store = store;
            /** @type {?} */
            var route = (/** @type {?} */ ({
                name: 'Setting management',
                path: 'setting-management',
                parentName: 'AbpUiNavigation::Menu:Administration',
                //requiredPolicy: 'AbpAccount.SettingManagement',
                layout: "application" /* application */,
                order: 6,
                iconClass: 'fa fa-cog',
                children: [
                    {
                        path: 'settings',
                        name: 'Settings',
                        order: 1,
                        requiredPolicy: 'AbpTenantManagement.Tenants',
                    },
                ],
            }));
            ng_core.addAbpRoutes(route);
            // setTimeout(() => {
            //   const tabs = getSettingTabs();
            //   if (!tabs || !tabs.length) {
            //     this.store.dispatch(new PatchRouteByName('AbpSettingManagement::Settings', { ...route, invisible: true }));
            //   }
            // });
        }
        SettingManagementConfigService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        SettingManagementConfigService.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        /** @nocollapse */ SettingManagementConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SettingManagementConfigService_Factory() { return new SettingManagementConfigService(core.ɵɵinject(store.Store)); }, token: SettingManagementConfigService, providedIn: "root" });
        return SettingManagementConfigService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SettingManagementConfigService.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/setting-management-config.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = ng_core.noop;
    var SettingManagementConfigModule = /** @class */ (function () {
        function SettingManagementConfigModule() {
        }
        SettingManagementConfigModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [{ provide: core.APP_INITIALIZER, deps: [SettingManagementConfigService], useFactory: ɵ0, multi: true }],
                    },] }
        ];
        return SettingManagementConfigModule;
    }());

    exports.SettingManagementConfigModule = SettingManagementConfigModule;
    exports.ɵa = SettingManagementConfigService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-setting-management-config.umd.js.map
