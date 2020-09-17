import { __decorate } from 'tslib';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { SETTING_MANAGEMENT_ROUTE_PROVIDERS } from '@abp/ng.setting-management/config';
import { RoutesService, AddReplaceableComponent, SettingTabsService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { SettingManagementComponent, MySettingsComponent, MySettings2Component } from '@fs/setting-management/ng-alain';

const ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
function configureRoutes(routes) {
    return () => {
        routes.add([
            {
                path: '/setting-management',
                name: "SettingManagement::Menu:SettingManagement.MySettings" /* MySettings */,
                parentName: "AbpSettingManagement::Settings" /* Settings */,
                order: 1,
            },
        ]);
    };
}

const STYLES_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureStyles,
        deps: [Store],
        multi: true,
    },
];
function configureStyles(store) {
    return () => {
        initLayouts(store);
    };
}
function initLayouts(store) {
    store.dispatch([
        new AddReplaceableComponent({
            key: "SettingManagement.SettingManagementComponent" /* SettingManagement */,
            component: SettingManagementComponent,
        })
    ]);
}

const SETTINGS_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureSettings, deps: [SettingTabsService], multi: true },
];
function configureSettings(settingTabs) {
    return () => {
        settingTabs.add([
            {
                name: 'MySettings',
                order: 1,
                component: MySettingsComponent,
            },
            {
                name: 'MySettings2',
                order: 2,
                component: MySettings2Component,
            },
        ]);
    };
}

var SettingManagementNgAlainConfigModule_1;
let SettingManagementNgAlainConfigModule = SettingManagementNgAlainConfigModule_1 = class SettingManagementNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: SettingManagementNgAlainConfigModule_1,
            providers: [SETTING_MANAGEMENT_ROUTE_PROVIDERS, ROUTE_PROVIDERS, STYLES_PROVIDERS, SETTINGS_PROVIDERS],
        };
    }
};
SettingManagementNgAlainConfigModule = SettingManagementNgAlainConfigModule_1 = __decorate([
    NgModule()
], SettingManagementNgAlainConfigModule);

/**
 * Generated bundle index. Do not edit.
 */

export { SettingManagementNgAlainConfigModule, ROUTE_PROVIDERS as ɵa, STYLES_PROVIDERS as ɵb, configureStyles as ɵc, SETTINGS_PROVIDERS as ɵd };
//# sourceMappingURL=fs-setting-management-ng-alain-config.js.map
