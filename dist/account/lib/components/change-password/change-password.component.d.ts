import { ToasterService } from '@abp/ng.theme.shared';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validation } from '@ngx-validate/core';
import { Store } from '@ngxs/store';
import { Account } from '../../models/account';
export declare class ChangePasswordComponent implements OnInit, Account.ChangePasswordComponentInputs, Account.ChangePasswordComponentOutputs {
    private fb;
    private store;
    private toasterService;
    form: FormGroup;
    inProgress: boolean;
    hideCurrentPassword: boolean;
    mapErrorsFn: Validation.MapErrorsFn;
    constructor(fb: FormBuilder, store: Store, toasterService: ToasterService);
    ngOnInit(): void;
    onSubmit(): void;
}
