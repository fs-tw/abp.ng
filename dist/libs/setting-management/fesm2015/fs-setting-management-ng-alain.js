import { __decorate } from 'tslib';
import { NgModule } from '@angular/core';
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
let SettingManagementNgAlainRoutingModule = class SettingManagementNgAlainRoutingModule {
};
SettingManagementNgAlainRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SettingManagementNgAlainRoutingModule);

//import { SharedModule } from './shared/shared.module';
let SettingManagementNgAlainModule = class SettingManagementNgAlainModule {
};
SettingManagementNgAlainModule = __decorate([
    NgModule({
        imports: [
            //SharedModule,
            NgAlainBasicModule,
            SettingManagementNgAlainRoutingModule
        ],
        exports: [
        //SharedModule,
        ],
    })
], SettingManagementNgAlainModule);

/**
 * Generated bundle index. Do not edit.
 */

export { SettingManagementNgAlainModule, SettingManagementNgAlainRoutingModule as ɵa };
//# sourceMappingURL=fs-setting-management-ng-alain.js.map
