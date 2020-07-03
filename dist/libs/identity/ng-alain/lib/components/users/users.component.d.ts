import { UsersComponent as AbpUsersComponent, IdentityService } from '@abp/ng.identity';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ListService } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class UsersComponent extends AbpUsersComponent implements OnInit {
    private _list;
    private _confirmationService;
    private _fb;
    private _store;
    private _identityService;
    constructor(_list: ListService, _confirmationService: ConfirmationService, _fb: FormBuilder, _store: Store, _identityService: IdentityService);
    static ɵfac: i0.ɵɵFactoryDef<UsersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UsersComponent, "ng-alain-users", never, {}, {}, never, never>;
}
