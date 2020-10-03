import { RoutesService, SettingTabsService } from '@abp/ng.core';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';

const SETTING_MANAGEMENT_ROUTE_PROVIDERS = [
    { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
    {
        provide: APP_INITIALIZER,
        useFactory: hideRoutes,
        deps: [RoutesService, SettingTabsService],
        multi: true,
    },
];
function configureRoutes(routes) {
    return () => {
        routes.add([
            {
                name: "AbpSettingManagement::Settings" /* Settings */,
                path: '/setting-management',
                parentName: "AbpUiNavigation::Menu:Administration" /* Administration */,
                layout: "application" /* application */,
                order: 100,
                iconClass: 'fa fa-cog',
            },
        ]);
    };
}
function hideRoutes(routes, tabs) {
    return () => {
        tabs.visible$
            .pipe(debounceTime(0), map(nodes => !nodes.length))
            .subscribe(invisible => routes.patch("AbpSettingManagement::Settings" /* Settings */, { invisible }));
    };
}

class SettingManagementConfigModule {
    static forRoot() {
        return {
            ngModule: SettingManagementConfigModule,
            providers: [SETTING_MANAGEMENT_ROUTE_PROVIDERS],
        };
    }
}
SettingManagementConfigModule.decorators = [
    { type: NgModule }
];

/**
 * Generated bundle index. Do not edit.
 */

export { SETTING_MANAGEMENT_ROUTE_PROVIDERS, SettingManagementConfigModule, configureRoutes, hideRoutes, SETTING_MANAGEMENT_ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb, hideRoutes as ɵc };
//# sourceMappingURL=abp-ng.setting-management-config.js.map
