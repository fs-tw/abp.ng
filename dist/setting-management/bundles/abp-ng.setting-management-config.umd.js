(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@abp/ng.core'), require('@angular/core'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@abp/ng.setting-management/config', ['exports', '@abp/ng.core', '@angular/core', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.abp = global.abp || {}, global.abp.ng = global.abp.ng || {}, global.abp.ng['setting-management'] = global.abp.ng['setting-management'] || {}, global.abp.ng['setting-management'].config = {}), global.ng_core, global.ng.core, global.rxjs.operators));
}(this, (function (exports, ng_core, core, operators) { 'use strict';

    var SETTING_MANAGEMENT_ROUTE_PROVIDERS = [
        { provide: core.APP_INITIALIZER, useFactory: configureRoutes, deps: [ng_core.RoutesService], multi: true },
        {
            provide: core.APP_INITIALIZER,
            useFactory: hideRoutes,
            deps: [ng_core.RoutesService, ng_core.SettingTabsService],
            multi: true,
        },
    ];
    function configureRoutes(routes) {
        return function () {
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
        return function () {
            tabs.visible$
                .pipe(operators.debounceTime(0), operators.map(function (nodes) { return !nodes.length; }))
                .subscribe(function (invisible) { return routes.patch("AbpSettingManagement::Settings" /* Settings */, { invisible: invisible }); });
        };
    }

    var SettingManagementConfigModule = /** @class */ (function () {
        function SettingManagementConfigModule() {
        }
        SettingManagementConfigModule.forRoot = function () {
            return {
                ngModule: SettingManagementConfigModule,
                providers: [SETTING_MANAGEMENT_ROUTE_PROVIDERS],
            };
        };
        return SettingManagementConfigModule;
    }());
    SettingManagementConfigModule.decorators = [
        { type: core.NgModule }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SETTING_MANAGEMENT_ROUTE_PROVIDERS = SETTING_MANAGEMENT_ROUTE_PROVIDERS;
    exports.SettingManagementConfigModule = SettingManagementConfigModule;
    exports.configureRoutes = configureRoutes;
    exports.hideRoutes = hideRoutes;
    exports.ɵa = SETTING_MANAGEMENT_ROUTE_PROVIDERS;
    exports.ɵb = configureRoutes;
    exports.ɵc = hideRoutes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=abp-ng.setting-management-config.umd.js.map
