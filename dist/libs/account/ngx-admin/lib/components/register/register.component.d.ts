import { FormBuilder } from '@angular/forms';
import { RegisterComponent as AbpRegisterComponent } from '@abp/ng.account';
import { AccountService } from '@abp/ng.account';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { ToasterService } from '@abp/ng.theme.shared';
import { AuthService } from '@abp/ng.core';
export declare class RegisterComponent extends AbpRegisterComponent {
    private _fb;
    private _accountService;
    private _oauthService;
    private _store;
    private _toasterService;
    private _authService;
    constructor(_fb: FormBuilder, _accountService: AccountService, _oauthService: OAuthService, _store: Store, _toasterService: ToasterService, _authService: AuthService);
}
