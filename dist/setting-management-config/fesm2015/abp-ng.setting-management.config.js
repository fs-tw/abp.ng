import { Injectable, Injector, ɵɵdefineInjectable, ɵɵinject, INJECTOR, NgModule, APP_INITIALIZER } from '@angular/core';
import { addAbpRoutes, PatchRouteByName, noop } from '@abp/ng.core';
import { getSettingTabs } from '@abp/ng.theme.shared';
import { Store } from '@ngxs/store';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/setting-management-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingManagementConfigService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        /** @type {?} */
        const route = (/** @type {?} */ ({
            name: "AbpSettingManagement::Settings" /* Settings */,
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
        () => {
            /** @type {?} */
            const tabs = getSettingTabs();
            if (!tabs || !tabs.length) {
                this.store.dispatch(new PatchRouteByName('AbpSettingManagement::Settings', Object.assign({}, route, { invisible: true })));
            }
        }));
    }
    /**
     * @return {?}
     */
    get store() {
        return this.injector.get(Store);
    }
}
SettingManagementConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SettingManagementConfigService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ SettingManagementConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SettingManagementConfigService_Factory() { return new SettingManagementConfigService(ɵɵinject(INJECTOR)); }, token: SettingManagementConfigService, providedIn: "root" });
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
const ɵ0 = noop;
class SettingManagementConfigModule {
}
SettingManagementConfigModule.decorators = [
    { type: NgModule, args: [{
                providers: [{ provide: APP_INITIALIZER, deps: [SettingManagementConfigService], useFactory: ɵ0, multi: true }],
            },] }
];

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
