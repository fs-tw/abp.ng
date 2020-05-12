(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.identity.config', ['exports', '@abp/ng.core', '@angular/core'], factory) :
    (global = global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng.identity = global.abp.ng.identity || {}, global.abp.ng.identity.config = {}), global.ng_core, global.ng.core));
}(this, (function (exports, ng_core, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/identity-config.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IdentityConfigService = /** @class */ (function () {
        function IdentityConfigService() {
            ng_core.addAbpRoutes([
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
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        IdentityConfigService.ctorParameters = function () { return []; };
        /** @nocollapse */ IdentityConfigService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function IdentityConfigService_Factory() { return new IdentityConfigService(); }, token: IdentityConfigService, providedIn: "root" });
        return IdentityConfigService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/identity-config.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = ng_core.noop;
    var IdentityConfigModule = /** @class */ (function () {
        function IdentityConfigModule() {
        }
        IdentityConfigModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [{ provide: core.APP_INITIALIZER, deps: [IdentityConfigService], useFactory: ɵ0, multi: true }],
                    },] }
        ];
        return IdentityConfigModule;
    }());

    exports.IdentityConfigModule = IdentityConfigModule;
    exports.IdentityConfigService = IdentityConfigService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.identity.config.umd.js.map
