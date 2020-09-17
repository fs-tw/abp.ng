import { LoginComponent, Options } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService, SetRemember, GetAppConfiguration } from '@abp/ng.core';
import { LoginService, LoginDto } from '../../service/login.service'
import { Navigate, RouterState } from '@ngxs/router-plugin';
import { catchError, finalize, tap } from 'rxjs/operators';
import snq from 'snq';
import { throwError } from 'rxjs';
@Component({
    selector: 'ng-alain-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class UserLoginComponent extends LoginComponent {

    constructor(
        protected loginService: LoginService,
        @Optional() @Inject('ACCOUNT_OPTIONS') private options: any,
        _fb: FormBuilder,
        _oauthService: OAuthService,
        protected _store: Store,
        protected _toasterService: ToasterService,
        _authService: AuthService
    ) {
        super(_fb, _oauthService, _store, _toasterService, _authService);
    }

    // override
    // onSubmit() {
    //     alert("override")
    //     if (this.form.invalid) return;

    //     let input: LoginDto = {
    //         userNameOrEmailAddress: this.form.get('username').value,
    //         password: this.form.get('password').value,
    //         rememberClient: false
    //     }
    //     this.inProgress = true;
    //     this.loginService.login(input).pipe(
    //         catchError(err => {
    //             this._toasterService.error(
    //                 snq(() => err.error.error_description) ||
    //                 snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'),
    //                 'Error',
    //                 { life: 7000 },
    //             );
    //             return throwError(err);
    //         }),
    //         finalize(() => (this.inProgress = false)),
    //     ).subscribe((x: any) => {
    //         localStorage.setItem('access_token', x.token.accessToken);
    //         this._store.dispatch(new SetRemember(this.form.get('remember').value));
    //         this._store.dispatch(new GetAppConfiguration())
    //         const redirectUrl =
    //             snq(() => window.history.state.redirectUrl) || (this.options || {}).redirectUrl || '/';
    //         this._store.dispatch(new Navigate([redirectUrl]));
    //     })
    // }
}
