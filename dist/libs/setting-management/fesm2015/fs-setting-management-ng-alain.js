import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { RouterModule } from '@angular/router';

const routes = [
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
class SettingManagementNgAlainRoutingModule {
}
SettingManagementNgAlainRoutingModule.ɵmod = ɵɵdefineNgModule({ type: SettingManagementNgAlainRoutingModule });
SettingManagementNgAlainRoutingModule.ɵinj = ɵɵdefineInjector({ factory: function SettingManagementNgAlainRoutingModule_Factory(t) { return new (t || SettingManagementNgAlainRoutingModule)(); }, imports: [[RouterModule.forChild(routes)],
        RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SettingManagementNgAlainRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SettingManagementNgAlainRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            }]
    }], null, null); })();

//import { SharedModule } from './shared/shared.module';
class SettingManagementNgAlainModule {
}
SettingManagementNgAlainModule.ɵmod = ɵɵdefineNgModule({ type: SettingManagementNgAlainModule });
SettingManagementNgAlainModule.ɵinj = ɵɵdefineInjector({ factory: function SettingManagementNgAlainModule_Factory(t) { return new (t || SettingManagementNgAlainModule)(); }, imports: [[
            //SharedModule,
            NgAlainBasicModule,
            SettingManagementNgAlainRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SettingManagementNgAlainModule, { imports: [
        //SharedModule,
        NgAlainBasicModule,
        SettingManagementNgAlainRoutingModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SettingManagementNgAlainModule, [{
        type: NgModule,
        args: [{
                imports: [
                    //SharedModule,
                    NgAlainBasicModule,
                    SettingManagementNgAlainRoutingModule
                ],
                exports: [
                //SharedModule,
                ],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SettingManagementNgAlainModule };
//# sourceMappingURL=fs-setting-management-ng-alain.js.map
