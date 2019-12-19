import { OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UserData } from '@fs/ngx-admin';
import { LayoutService } from '@fs/ngx-admin';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { ApplicationConfiguration, ABP } from '@abp/ng.core';
export declare class HeaderComponent implements OnInit, OnDestroy {
    private sidebarService;
    private menuService;
    private themeService;
    private userService;
    private layoutService;
    private breakpointService;
    private store;
    private oauthService;
    currentUser$: Observable<ApplicationConfiguration.CurrentUser>;
    tenant: ABP.BasicItem;
    tenantName: string;
    private destroy$;
    userPictureOnly: boolean;
    user: any;
    themes: {
        value: string;
        name: string;
    }[];
    currentTheme: string;
    userMenu: ({
        title: string;
        link: string;
    } | {
        title: string;
        link?: undefined;
    })[];
    constructor(sidebarService: NbSidebarService, menuService: NbMenuService, themeService: NbThemeService, userService: UserData, layoutService: LayoutService, breakpointService: NbMediaBreakpointsService, store: Store, oauthService: OAuthService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    changeTheme(themeName: string): void;
    toggleSidebar(): boolean;
    navigateHome(): boolean;
}
