(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@fs/ng-alain/basic'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@fs/setting-management/ng-alain', ['exports', '@angular/core', '@fs/ng-alain/basic', '@angular/router'], factory) :
    (global = global || self, factory((global.fs = global.fs || {}, global.fs['setting-management'] = global.fs['setting-management'] || {}, global.fs['setting-management']['ng-alain'] = {}), global.ng.core, global.basic, global.ng.router));
}(this, (function (exports, i0, basic, i1) { 'use strict';

    var routes = [
        { path: '', pathMatch: 'full', redirectTo: 'settings' },
        {
            path: '',
            // component: DynamicLayoutComponent,
            // canActivate: [AuthGuard, PermissionGuard],
            children: [
                {
                    path: 'settings',
                },
            ],
        }
    ];
    // @dynamic
    var SettingManagementNgAlainRoutingModule = /** @class */ (function () {
        function SettingManagementNgAlainRoutingModule() {
        }
        return SettingManagementNgAlainRoutingModule;
    }());
    SettingManagementNgAlainRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: SettingManagementNgAlainRoutingModule });
    SettingManagementNgAlainRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SettingManagementNgAlainRoutingModule_Factory(t) { return new (t || SettingManagementNgAlainRoutingModule)(); }, imports: [[i1.RouterModule.forChild(routes)],
            i1.RouterModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingManagementNgAlainRoutingModule, { imports: [i1.RouterModule], exports: [i1.RouterModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SettingManagementNgAlainRoutingModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes)],
                        exports: [i1.RouterModule],
                    }]
            }], null, null);
    })();

    //import { SharedModule } from './shared/shared.module';
    var SettingManagementNgAlainModule = /** @class */ (function () {
        function SettingManagementNgAlainModule() {
        }
        return SettingManagementNgAlainModule;
    }());
    SettingManagementNgAlainModule.ɵmod = i0.ɵɵdefineNgModule({ type: SettingManagementNgAlainModule });
    SettingManagementNgAlainModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SettingManagementNgAlainModule_Factory(t) { return new (t || SettingManagementNgAlainModule)(); }, imports: [[
                //SharedModule,
                basic.NgAlainBasicModule,
                SettingManagementNgAlainRoutingModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SettingManagementNgAlainModule, { imports: [
                //SharedModule,
                basic.NgAlainBasicModule,
                SettingManagementNgAlainRoutingModule
            ] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SettingManagementNgAlainModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            //SharedModule,
                            basic.NgAlainBasicModule,
                            SettingManagementNgAlainRoutingModule
                        ],
                        exports: [
                        //SharedModule,
                        ],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SettingManagementNgAlainModule = SettingManagementNgAlainModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fs-setting-management-ng-alain.umd.js.map
