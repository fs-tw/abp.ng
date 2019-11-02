import { SettingsService, _HttpClient } from '@delon/theme';
import { Component, OnDestroy, Inject, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { SocialService, SocialOpenType, ITokenService, DA_SERVICE_TOKEN } from '@delon/auth';
import { ReuseTabService } from '@delon/abc';
//import { environment } from '../../../../environments/environment';
import { StartupService } from '@fs/ng-alain';
import { LoginComponent, Options } from '@abp/ng.account';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { ToasterService } from '@abp/ng.theme.shared';

@Component({
    selector: 'fs-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class UserLoginComponent extends LoginComponent {

    constructor(
        fb: FormBuilder,
        oauthService: OAuthService,
        store: Store,
        toasterService: ToasterService,
        @Optional() @Inject('ACCOUNT_OPTIONS') options: Options,
    ) {
        super(fb, oauthService, store, toasterService, options);
    }

}
