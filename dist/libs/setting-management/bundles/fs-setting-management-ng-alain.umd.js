(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@abp/ng.core'), require('@fs/ng-alain/basic'), require('@fs/setting-management')) :
    typeof define === 'function' && define.amd ? define('@fs/setting-management/ng-alain', ['exports', '@angular/core', '@angular/router', '@abp/ng.core', '@fs/ng-alain/basic', '@fs/setting-management'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['setting-management'] = global.fs['setting-management'] || {}, global.fs['setting-management']['ng-alain'] = {}), global.ng.core, global.ng.router, global.ng_core, global.basic, global.fs['setting-management']));
}(this, (function (exports, core, router, ng_core, basic, settingManagement) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/shared/shared.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            settingManagement.SettingManagementModule,
                            basic.NgAlainBasicModule,
                        ]
                    },] }
        ];
        return SharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/settings/main/main.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MainComponent = /** @class */ (function () {
        function MainComponent() {
        }
        /**
         * @return {?}
         */
        MainComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        MainComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'fs-main',
                        template: "<p>main works!</p>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        MainComponent.ctorParameters = function () { return []; };
        return MainComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/settings/settings-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: '',
            component: MainComponent,
        }
    ];
    var SettingsRoutingModule = /** @class */ (function () {
        function SettingsRoutingModule() {
        }
        SettingsRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return SettingsRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/settings/settings.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingsModule = /** @class */ (function () {
        function SettingsModule() {
        }
        SettingsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MainComponent],
                        imports: [
                            SharedModule,
                            SettingsRoutingModule
                        ]
                    },] }
        ];
        return SettingsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/setting-management-ng-alain-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = /**
     * @return {?}
     */
    function () { return SettingsModule; };
    /** @type {?} */
    var routes$1 = [
        { path: '', pathMatch: 'full', redirectTo: 'settings' },
        {
            path: '',
            component: basic.LayoutDefaultComponent,
            canActivate: [ng_core.AuthGuard, ng_core.PermissionGuard],
            children: [
                {
                    path: 'settings',
                    loadChildren: (ɵ0)
                },
            ],
        }
    ];
    // @dynamic
    var SettingManagementNgAlainRoutingModule = /** @class */ (function () {
        function SettingManagementNgAlainRoutingModule() {
        }
        SettingManagementNgAlainRoutingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes$1)],
                        exports: [router.RouterModule],
                    },] }
        ];
        return SettingManagementNgAlainRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/setting-management-ng-alain.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingManagementNgAlainModule = /** @class */ (function () {
        function SettingManagementNgAlainModule() {
        }
        SettingManagementNgAlainModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            SharedModule,
                            SettingManagementNgAlainRoutingModule,
                            SettingsModule,
                        ]
                    },] }
        ];
        return SettingManagementNgAlainModule;
    }());

    exports.SettingManagementNgAlainModule = SettingManagementNgAlainModule;
    exports.SharedModule = SharedModule;
    exports.ɵa = SettingManagementNgAlainRoutingModule;
    exports.ɵb = SettingsModule;
    exports.ɵc = MainComponent;
    exports.ɵd = SettingsRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-setting-management-ng-alain.umd.js.map
