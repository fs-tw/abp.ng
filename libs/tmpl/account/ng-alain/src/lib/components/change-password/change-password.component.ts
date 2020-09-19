import { ChangePasswordComponent as AbpChangePasswordComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

@Component({
    selector: 'ng-alain-change-password-form',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.less']
})
export class ChangePasswordComponent extends AbpChangePasswordComponent implements OnInit {

    constructor(private _fb: FormBuilder, private _store: Store, private _toasterService: ToasterService) {
        super(_fb, _store, _toasterService);
    }

}
