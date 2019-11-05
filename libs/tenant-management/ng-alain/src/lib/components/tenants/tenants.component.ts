import { TenantManagementService, TenantsComponent as AbpTenantsComponent } from '@abp/ng.tenant-management';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
@Component({
  selector: 'ng-alain-tenants',
  templateUrl: './tenants.component.html',
})
export class TenantsComponent extends AbpTenantsComponent implements OnInit {
    constructor(
        private _confirmationService: ConfirmationService,
        private _tenantService: TenantManagementService,
        private _fb: FormBuilder,
        private _store: Store
    ) {
        super(_confirmationService, _tenantService, _fb, _store);
    }
}
