import { ModuleWithProviders, NgModuleFactory } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./components/tenants/tenants.component";
import * as i2 from "@fs/ng-alain/basic";
import * as i3 from "@fs/feature-management/ng-alain";
import * as i4 from "@fs/tenant-management/wrap";
export declare class TenantManagementNgAlainModule {
    static forChild(): ModuleWithProviders<TenantManagementNgAlainModule>;
    static forLazy(): NgModuleFactory<TenantManagementNgAlainModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<TenantManagementNgAlainModule, [typeof i1.TenantsComponent], [typeof i2.NgAlainBasicModule, typeof i3.FeatureManagementNgAlainModule, typeof i4.TenantManagementWrapModule], [typeof i1.TenantsComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<TenantManagementNgAlainModule>;
}
