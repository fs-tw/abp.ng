import { TenantManagementService, TenantsComponent as AbpTenantsComponent } from '@abp/ng.tenant-management';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
export declare class TenantsComponent extends AbpTenantsComponent implements OnInit {
    private _confirmationService;
    private _tenantService;
    private _fb;
    private _store;
    constructor(_confirmationService: ConfirmationService, _tenantService: TenantManagementService, _fb: FormBuilder, _store: Store);
}
