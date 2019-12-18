import { RolesComponent as AbpRolesComponent } from '@abp/ng.identity/components/roles/roles.component';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
export declare class RolesComponent extends AbpRolesComponent implements OnInit {
    private _confirmationService;
    private _fb;
    private _store;
    constructor(_confirmationService: ConfirmationService, _fb: FormBuilder, _store: Store);
}
