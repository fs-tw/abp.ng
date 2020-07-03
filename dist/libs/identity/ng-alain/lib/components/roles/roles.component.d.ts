import { RolesComponent as AbpRolesComponent } from '@abp/ng.identity';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ListService } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class RolesComponent extends AbpRolesComponent implements OnInit {
    private _list;
    private _confirmationService;
    private _fb;
    private _store;
    constructor(_list: ListService, _confirmationService: ConfirmationService, _fb: FormBuilder, _store: Store);
    static ɵfac: i0.ɵɵFactoryDef<RolesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RolesComponent, "ng-alain-roles", never, {}, {}, never, never>;
}