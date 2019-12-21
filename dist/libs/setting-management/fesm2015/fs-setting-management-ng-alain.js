import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import { NgAlainBasicModule, LayoutDefaultComponent } from '@fs/ng-alain/basic';
import { SettingManagementModule } from '@fs/setting-management';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared/shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    SettingManagementModule,
                    NgAlainBasicModule,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/settings/main/main.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MainComponent.decorators = [
    { type: Component, args: [{
                selector: 'fs-main',
                template: "<p>main works!</p>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MainComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/settings/settings-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    {
        path: '',
        component: MainComponent,
    }
];
class SettingsRoutingModule {
}
SettingsRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/settings/settings.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingsModule {
}
SettingsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MainComponent],
                imports: [
                    SharedModule,
                    SettingsRoutingModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/setting-management-ng-alain-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = /**
 * @return {?}
 */
() => SettingsModule;
/** @type {?} */
const routes$1 = [
    { path: '', pathMatch: 'full', redirectTo: 'settings' },
    {
        path: '',
        component: LayoutDefaultComponent,
        canActivate: [AuthGuard, PermissionGuard],
        children: [
            {
                path: 'settings',
                loadChildren: (ɵ0)
            },
        ],
    }
];
// @dynamic
class SettingManagementNgAlainRoutingModule {
}
SettingManagementNgAlainRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes$1)],
                exports: [RouterModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/setting-management-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingManagementNgAlainModule {
}
SettingManagementNgAlainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    SharedModule,
                    SettingManagementNgAlainRoutingModule,
                    SettingsModule,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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
 * Generated from: fs-setting-management-ng-alain.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SettingManagementNgAlainModule, SharedModule, SettingManagementNgAlainRoutingModule as ɵa, SettingsModule as ɵb, MainComponent as ɵc, SettingsRoutingModule as ɵd };
//# sourceMappingURL=fs-setting-management-ng-alain.js.map
