import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule, APP_INITIALIZER } from '@angular/core';
import { addAbpRoutes, noop } from '@abp/ng.core';
import { Store } from '@ngxs/store';

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
        addAbpRoutes(route);
        // setTimeout(() => {
        //   const tabs = getSettingTabs();
        //   if (!tabs || !tabs.length) {
        //     this.store.dispatch(new PatchRouteByName('AbpSettingManagement::Settings', { ...route, invisible: true }));
        //   }
        // });
    }
    SettingManagementConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SettingManagementConfigService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ SettingManagementConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SettingManagementConfigService_Factory() { return new SettingManagementConfigService(ɵɵinject(Store)); }, token: SettingManagementConfigService, providedIn: "root" });
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
var ɵ0 = noop;
var SettingManagementConfigModule = /** @class */ (function () {
    function SettingManagementConfigModule() {
    }
    SettingManagementConfigModule.decorators = [
        { type: NgModule, args: [{
                    providers: [{ provide: APP_INITIALIZER, deps: [SettingManagementConfigService], useFactory: ɵ0, multi: true }],
                },] }
    ];
    return SettingManagementConfigModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fs-setting-management-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SettingManagementConfigModule, SettingManagementConfigService as ɵa };
//# sourceMappingURL=fs-setting-management-config.js.map
