import { LoginComponent as AbpLoginComponent, Options } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
export declare class LoginComponent extends AbpLoginComponent {
    constructor(_fb: FormBuilder, _oauthService: OAuthService, _store: Store, _toasterService: ToasterService, _options: Options);
}
