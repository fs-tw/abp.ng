import { TenantManagementService, TenantsComponent as AbpTenantsComponent } from '@abp/ng.tenant-management';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ListService } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class TenantsComponent extends AbpTenantsComponent implements OnInit {
    private _list;
    private _confirmationService;
    private _tenantService;
    private _fb;
    private _store;
    constructor(_list: ListService, _confirmationService: ConfirmationService, _tenantService: TenantManagementService, _fb: FormBuilder, _store: Store);
    static ɵfac: i0.ɵɵFactoryDef<TenantsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TenantsComponent, "ng-alain-tenants", never, {}, {}, never, never>;
}
