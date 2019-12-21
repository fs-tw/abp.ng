import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { ITokenService } from '@delon/auth';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { ApplicationConfiguration, ABP } from '@abp/ng.core';
import { Observable } from 'rxjs';
export declare class HeaderUserComponent {
    settings: SettingsService;
    private router;
    private tokenService;
    private store;
    private oauthService;
    currentUser$: Observable<ApplicationConfiguration.CurrentUser>;
    tenant: ABP.BasicItem;
    tenantName: string;
    constructor(settings: SettingsService, router: Router, tokenService: ITokenService, store: Store, oauthService: OAuthService);
    logout(): void;
}
