import { OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils/layout.service';
export declare class HeaderComponent implements OnInit, OnDestroy {
    private sidebarService;
    private menuService;
    private themeService;
    private userService;
    private layoutService;
    private breakpointService;
    private destroy$;
    userPictureOnly: boolean;
    user: any;
    themes: {
        value: string;
        name: string;
    }[];
    currentTheme: string;
    userMenu: {
        title: string;
    }[];
    constructor(sidebarService: NbSidebarService, menuService: NbMenuService, themeService: NbThemeService, userService: UserData, layoutService: LayoutService, breakpointService: NbMediaBreakpointsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    changeTheme(themeName: string): void;
    toggleSidebar(): boolean;
    navigateHome(): boolean;
}
