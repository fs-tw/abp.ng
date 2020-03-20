import { Injectable, Injector, ɵɵdefineInjectable, ɵɵinject, INJECTOR, NgModule, APP_INITIALIZER } from '@angular/core';
import { __assign } from 'tslib';
import { addAbpRoutes, PatchRouteByName, noop } from '@abp/ng.core';
import { getSettingTabs } from '@abp/ng.theme.shared';
import { Store } from '@ngxs/store';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/setting-management-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SettingManagementConfigService = /** @class */ (function () {
    function SettingManagementConfigService(injector) {
        var _this = this;
        this.injector = injector;
        /** @type {?} */
        var route = (/** @type {?} */ ({
            name: 'AbpSettingManagement::Settings',
            path: 'setting-management',
            parentName: 'AbpUiNavigation::Menu:Administration',
            requiredPolicy: 'AbpAccount.SettingManagement',
            layout: "application" /* application */,
            order: 6,
            iconClass: 'fa fa-cog',
        }));
        addAbpRoutes(route);
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var tabs = getSettingTabs();
            if (!tabs || !tabs.length) {
                _this.store.dispatch(new PatchRouteByName('AbpSettingManagement::Settings', __assign({}, route, { invisible: true })));
            }
        }));
    }
    Object.defineProperty(SettingManagementConfigService.prototype, "store", {
        get: /**
         * @return {?}
         */
        function () {
            return this.injector.get(Store);
        },
        enumerable: true,
        configurable: true
    });
    SettingManagementConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SettingManagementConfigService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ SettingManagementConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SettingManagementConfigService_Factory() { return new SettingManagementConfigService(ɵɵinject(INJECTOR)); }, token: SettingManagementConfigService, providedIn: "root" });
    return SettingManagementConfigService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingManagementConfigService.prototype.injector;
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
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: abp-ng.setting-management.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SettingManagementConfigModule, SettingManagementConfigService as ɵa };
//# sourceMappingURL=abp-ng.setting-management.config.js.map
