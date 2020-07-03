import { ChangePasswordComponent as AbpChangePasswordComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
export declare class ChangePasswordComponent extends AbpChangePasswordComponent implements OnInit {
    private _fb;
    private _store;
    private _toasterService;
    constructor(_fb: FormBuilder, _store: Store, _toasterService: ToasterService);
    static ɵfac: i0.ɵɵFactoryDef<ChangePasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ChangePasswordComponent, "ng-alain-change-password-form", never, {}, {}, never, never>;
}
