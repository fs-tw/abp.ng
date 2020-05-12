import { addAbpRoutes, noop } from '@abp/ng.core';
import { Injectable, ɵɵdefineInjectable, NgModule, APP_INITIALIZER } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/identity-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IdentityConfigService = /** @class */ (function () {
    function IdentityConfigService() {
        addAbpRoutes([
            {
                name: "AbpUiNavigation::Menu:Administration" /* Administration */,
                path: '',
                order: 1,
                wrapper: true,
                iconClass: 'fa fa-wrench',
            },
            {
                name: "AbpIdentity::Menu:IdentityManagement" /* IdentityManagement */,
                path: 'identity',
                order: 1,
                parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
                layout: "application" /* application */,
                iconClass: 'fa fa-id-card-o',
                children: [
                    {
                        path: 'roles',
                        name: "AbpIdentity::Roles" /* Roles */,
                        order: 1,
                        requiredPolicy: 'AbpIdentity.Roles',
                    },
                    {
                        path: 'users',
                        name: "AbpIdentity::Users" /* Users */,
                        order: 2,
                        requiredPolicy: 'AbpIdentity.Users',
                    },
                ],
            },
        ]);
    }
    IdentityConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    IdentityConfigService.ctorParameters = function () { return []; };
    /** @nocollapse */ IdentityConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function IdentityConfigService_Factory() { return new IdentityConfigService(); }, token: IdentityConfigService, providedIn: "root" });
    return IdentityConfigService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/identity-config.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = noop;
var IdentityConfigModule = /** @class */ (function () {
    function IdentityConfigModule() {
    }
    IdentityConfigModule.decorators = [
        { type: NgModule, args: [{
                    providers: [{ provide: APP_INITIALIZER, deps: [IdentityConfigService], useFactory: ɵ0, multi: true }],
                },] }
    ];
    return IdentityConfigModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: abp-ng.identity.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IdentityConfigModule, IdentityConfigService };
//# sourceMappingURL=abp-ng.identity.config.js.map
