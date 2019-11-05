import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { RegisterComponent } from '@abp/ng.account';
import { AccountService } from '@abp/ng.account/services/account.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { ToasterService } from '@abp/ng.theme.shared';

@Component({
    selector: 'passport-register',
    templateUrl: './register.component.html',
    styleUrls: [],
})
export class UserRegisterComponent extends RegisterComponent {
    constructor(
        private _fb: FormBuilder,
        private _accountService: AccountService,
        private _oauthService: OAuthService,
        private _store: Store,
        private _toasterService: ToasterService,
    ) {
        super(_fb, _accountService, _oauthService, _store, _toasterService)
    }
}