import { LoginComponent as AbpLoginComponent, Options } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { NbLoginComponent } from '@nebular/auth';
import { AuthService } from '@abp/ng.core';

@Component({
    selector: 'ngx-admin-login',
    templateUrl: './login.component.html'
})
export class LoginComponent extends AbpLoginComponent  {

    constructor(
        _fb: FormBuilder,
        _oauthService: OAuthService,
        _store: Store,
        _toasterService: ToasterService,
        _authService: AuthService,
    ) {
        super(_fb, _oauthService, _store, _toasterService, _authService);
    }

}
