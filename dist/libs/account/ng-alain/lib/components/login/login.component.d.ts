import { LoginComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '@abp/ng.core';
import { LoginService } from '../../service/login.service';
export declare class UserLoginComponent extends LoginComponent {
    protected loginService: LoginService;
    private options;
    protected _store: Store;
    protected _toasterService: ToasterService;
    constructor(loginService: LoginService, options: any, _fb: FormBuilder, _oauthService: OAuthService, _store: Store, _toasterService: ToasterService, _authService: AuthService);
}
