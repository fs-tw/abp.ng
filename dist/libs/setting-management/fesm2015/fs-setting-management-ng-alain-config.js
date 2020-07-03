import { __decorate } from 'tslib';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { RoutesService } from '@abp/ng.core';
import { Store } from '@ngxs/store';

const ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];
function configureRoutes(routes) {
    return () => {
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
}

var SettingManagementNgAlainConfigModule_1;
let SettingManagementNgAlainConfigModule = SettingManagementNgAlainConfigModule_1 = class SettingManagementNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: SettingManagementNgAlainConfigModule_1,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
};
SettingManagementNgAlainConfigModule = SettingManagementNgAlainConfigModule_1 = __decorate([
    NgModule({
        imports: [
            SettingManagementConfigModule.forRoot()
        ]
    })
], SettingManagementNgAlainConfigModule);

/**
 * Generated bundle index. Do not edit.
 */

export { SettingManagementNgAlainConfigModule, ROUTE_PROVIDERS as ɵa, STYLES_PROVIDERS as ɵb, configureStyles as ɵc };
//# sourceMappingURL=fs-setting-management-ng-alain-config.js.map
