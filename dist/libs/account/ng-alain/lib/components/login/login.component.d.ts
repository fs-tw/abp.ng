import { LoginComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '@abp/ng.core';
import * as i0 from "@angular/core";
export declare class UserLoginComponent extends LoginComponent {
    constructor(_fb: FormBuilder, _oauthService: OAuthService, _store: Store, _toasterService: ToasterService, _authService: AuthService);
    static ɵfac: i0.ɵɵFactoryDef<UserLoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UserLoginComponent, "ng-alain-login", never, {}, {}, never, never>;
}
