import { ModuleWithProviders, NgModuleFactory } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./components/users/users.component";
import * as i2 from "./components/roles/roles.component";
import * as i3 from "@abp/ng.core";
import * as i4 from "@fs/ng-alain/basic";
import * as i5 from "@fs/permission-management/ng-alain";
import * as i6 from "@fs/identity/wrap";
export declare class IdentityNgAlainModule {
    static forChild(): ModuleWithProviders<IdentityNgAlainModule>;
    static forLazy(): NgModuleFactory<IdentityNgAlainModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<IdentityNgAlainModule, [typeof i1.UsersComponent, typeof i2.RolesComponent], [typeof i3.CoreModule, typeof i4.NgAlainBasicModule, typeof i5.PermissionManagementNgAlainModule, typeof i6.IdentityWrapModule], never>;
    static ɵinj: i0.ɵɵInjectorDef<IdentityNgAlainModule>;
}
