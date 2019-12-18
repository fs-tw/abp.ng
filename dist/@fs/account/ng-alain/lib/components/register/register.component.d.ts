import { FormBuilder } from '@angular/forms';
import { RegisterComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { AccountService } from '@abp/ng.account/services/account.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
export declare class UserRegisterComponent extends RegisterComponent {
    private _fb;
    private _accountService;
    private _oauthService;
    private _store;
    private _toasterService;
    constructor(_fb: FormBuilder, _accountService: AccountService, _oauthService: OAuthService, _store: Store, _toasterService: ToasterService);
}
