import { Router } from '@angular/router';
import { ITokenService } from '@delon/auth';
import { SettingsService } from '@delon/theme';
import { ApplicationConfiguration, AuthService } from '@abp/ng.core';
import { Observable } from 'rxjs';
export declare class HeaderUserComponent {
    settings: SettingsService;
    private router;
    private authService;
    private tokenService;
    currentUser$: Observable<ApplicationConfiguration.CurrentUser>;
    constructor(settings: SettingsService, router: Router, authService: AuthService, tokenService: ITokenService);
    logout(): void;
}
