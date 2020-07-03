import { Router } from '@angular/router';
import { ITokenService } from '@delon/auth';
import { SettingsService } from '@delon/theme';
import { ApplicationConfiguration, AuthService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class HeaderUserComponent {
    settings: SettingsService;
    private router;
    private authService;
    private tokenService;
    currentUser$: Observable<ApplicationConfiguration.CurrentUser>;
    constructor(settings: SettingsService, router: Router, authService: AuthService, tokenService: ITokenService);
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDef<HeaderUserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HeaderUserComponent, "header-user", never, {}, {}, never, never>;
}
