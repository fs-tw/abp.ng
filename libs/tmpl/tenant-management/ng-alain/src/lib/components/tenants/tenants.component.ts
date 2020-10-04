import { TenantManagementService, TenantsComponent as AbpTenantsComponent, GetTenantsInput } from '@abp/ng.tenant-management';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ListService } from '@abp/ng.core';

@Component({
    selector: 'ng-alain-tenants',
    templateUrl: './tenants.component.html',
    providers: [ListService]
})
export class TenantsComponent extends AbpTenantsComponent implements OnInit {
    constructor(
        private _list: ListService<GetTenantsInput>,
        private _confirmationService: ConfirmationService,
        private _tenantService: TenantManagementService,
        private _fb: FormBuilder,
        private _store: Store
    ) {
        super(_list, _confirmationService, _tenantService, _fb, _store);
    }
}
