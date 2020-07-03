import { APP_INITIALIZER, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
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
    // store.dispatch([
    //   new AddReplaceableComponent({
    //     key: eIdentityComponents.Users,
    //     component: UsersComponent,
    //   }),
    //   new AddReplaceableComponent({
    //     key: eIdentityComponents.Roles,
    //     component: RolesComponent
    //   })
    // ]);
}

class SettingManagementNgAlainConfigModule {
    static forRoot() {
        return {
            ngModule: SettingManagementNgAlainConfigModule,
            providers: [ROUTE_PROVIDERS, STYLES_PROVIDERS],
        };
    }
}
SettingManagementNgAlainConfigModule.ɵmod = ɵɵdefineNgModule({ type: SettingManagementNgAlainConfigModule });
SettingManagementNgAlainConfigModule.ɵinj = ɵɵdefineInjector({ factory: function SettingManagementNgAlainConfigModule_Factory(t) { return new (t || SettingManagementNgAlainConfigModule)(); }, imports: [[
            SettingManagementConfigModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SettingManagementNgAlainConfigModule, { imports: [SettingManagementConfigModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SettingManagementNgAlainConfigModule, [{
        type: NgModule,
        args: [{
                imports: [
                    SettingManagementConfigModule.forRoot()
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SettingManagementNgAlainConfigModule };
//# sourceMappingURL=fs-setting-management-ng-alain-config.js.map
