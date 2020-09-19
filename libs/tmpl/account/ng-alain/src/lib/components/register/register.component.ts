import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { RegisterComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { AccountService } from '@abp/ng.account';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { AuthService } from '@abp/ng.core';

@Component({
  selector: 'fs-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class UserRegisterComponent extends RegisterComponent {
    constructor(
        private _fb: FormBuilder,
        private _accountService: AccountService,
        private _oauthService: OAuthService,
        private _store: Store,
        private _toasterService: ToasterService,
        private _authService: AuthService,
    ) {
        super(_fb, _accountService, _oauthService, _store,_toasterService,_authService);
  }
}
