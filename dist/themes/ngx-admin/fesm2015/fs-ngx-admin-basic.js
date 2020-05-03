import { LocalizationPipe, ConfigState, SessionState, GetAppConfiguration, CoreModule } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { Component, NgModule } from '@angular/core';
import { NgxAdminSharedModule } from '@fs/ngx-admin/shared';
import { __decorate, __metadata } from 'tslib';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { map, filter, takeUntil } from 'rxjs/operators';
import { NbIconLibraries, NbSidebarService, NbMenuService, NbThemeService, NbMediaBreakpointsService, NbUserModule } from '@nebular/theme';
import { UserData, LayoutService } from '@fs/ngx-admin';
import { OAuthService } from 'angular-oauth2-oidc';
import { Navigate, RouterState } from '@ngxs/router-plugin';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/application-layout/application-layout-menu.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MENU_ITEMS = [
    {
        title: 'E-commerce',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'IoT Dashboard',
        icon: 'home-outline',
        link: '/pages/iot-dashboard',
    },
    {
        title: 'FEATURES',
        group: true,
    },
    {
        title: 'Layout',
        icon: 'layout-outline',
        children: [
            {
                title: 'Stepper',
                link: '/pages/layout/stepper',
            },
            {
                title: 'List',
                link: '/pages/layout/list',
            },
            {
                title: 'Infinite List',
                link: '/pages/layout/infinite-list',
            },
            {
                title: 'Accordion',
                link: '/pages/layout/accordion',
            },
            {
                title: 'Tabs',
                pathMatch: 'prefix',
                link: '/pages/layout/tabs',
            },
        ],
    },
    {
        title: 'Forms',
        icon: 'edit-2-outline',
        children: [
            {
                title: 'Form Inputs',
                link: '/pages/forms/inputs',
            },
            {
                title: 'Form Layouts',
                link: '/pages/forms/layouts',
            },
            {
                title: 'Buttons',
                link: '/pages/forms/buttons',
            },
            {
                title: 'Datepicker',
                link: '/pages/forms/datepicker',
            },
        ],
    },
    {
        title: 'UI Features',
        icon: 'keypad-outline',
        link: '/pages/ui-features',
        children: [
            {
                title: 'Grid',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Typography',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                link: '/pages/ui-features/search-fields',
            },
        ],
    },
    {
        title: 'Modal & Overlays',
        icon: 'browser-outline',
        children: [
            {
                title: 'Dialog',
                link: '/pages/modal-overlays/dialog',
            },
            {
                title: 'Window',
                link: '/pages/modal-overlays/window',
            },
            {
                title: 'Popover',
                link: '/pages/modal-overlays/popover',
            },
            {
                title: 'Toastr',
                link: '/pages/modal-overlays/toastr',
            },
            {
                title: 'Tooltip',
                link: '/pages/modal-overlays/tooltip',
            },
        ],
    },
    {
        title: 'Extra Components',
        icon: 'message-circle-outline',
        children: [
            {
                title: 'Calendar',
                link: '/pages/extra-components/calendar',
            },
            {
                title: 'Progress Bar',
                link: '/pages/extra-components/progress-bar',
            },
            {
                title: 'Spinner',
                link: '/pages/extra-components/spinner',
            },
            {
                title: 'Alert',
                link: '/pages/extra-components/alert',
            },
            {
                title: 'Calendar Kit',
                link: '/pages/extra-components/calendar-kit',
            },
            {
                title: 'Chat',
                link: '/pages/extra-components/chat',
            },
        ],
    },
    {
        title: 'Maps',
        icon: 'map-outline',
        children: [
            {
                title: 'Google Maps',
                link: '/pages/maps/gmaps',
            },
            {
                title: 'Leaflet Maps',
                link: '/pages/maps/leaflet',
            },
            {
                title: 'Bubble Maps',
                link: '/pages/maps/bubble',
            },
            {
                title: 'Search Maps',
                link: '/pages/maps/searchmap',
            },
        ],
    },
    {
        title: 'Charts',
        icon: 'pie-chart-outline',
        children: [
            {
                title: 'Echarts',
                link: '/pages/charts/echarts',
            },
            {
                title: 'Charts.js',
                link: '/pages/charts/chartjs',
            },
            {
                title: 'D3',
                link: '/pages/charts/d3',
            },
        ],
    },
    {
        title: 'Editors',
        icon: 'text-outline',
        children: [
            {
                title: 'TinyMCE',
                link: '/pages/editors/tinymce',
            },
            {
                title: 'CKEditor',
                link: '/pages/editors/ckeditor',
            },
        ],
    },
    {
        title: 'Tables & Data',
        icon: 'grid-outline',
        children: [
            {
                title: 'Smart Table',
                link: '/pages/tables/smart-table',
            },
            {
                title: 'Tree Grid',
                link: '/pages/tables/tree-grid',
            },
        ],
    },
    {
        title: 'Miscellaneous',
        icon: 'shuffle-2-outline',
        children: [
            {
                title: '404',
                link: '/pages/miscellaneous/404',
            },
        ],
    },
    {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
            {
                title: 'Login',
                link: '/auth/login',
            },
            {
                title: 'Register',
                link: '/auth/register',
            },
            {
                title: 'Request Password',
                link: '/auth/request-password',
            },
            {
                title: 'Reset Password',
                link: '/auth/reset-password',
            },
        ],
    },
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/application-layout/application-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApplicationLayoutComponent {
    /**
     * @param {?} localizationPipe
     * @param {?} iconLibraries
     */
    constructor(localizationPipe, iconLibraries) {
        this.localizationPipe = localizationPipe;
        this.iconLibraries = iconLibraries;
        this.menu = MENU_ITEMS;
        this.iconLibraries.registerFontPack('fa', { packClass: 'fa' });
        this.routes$.pipe(map((/**
         * @param {?} routes
         * @return {?}
         */
        routes => getVisibleRoutes(routes)))).subscribe((/**
         * @param {?} routes
         * @return {?}
         */
        routes => {
            /** @type {?} */
            let result = [];
            routes.forEach((/**
             * @param {?} first
             * @return {?}
             */
            first => {
                /** @type {?} */
                let group = {
                    title: this.localizationPipe.transform(first.name),
                    group: true
                };
                result.push(group);
                if (!first.children)
                    return;
                first.children.forEach((/**
                 * @param {?} second
                 * @return {?}
                 */
                second => {
                    if (!second.children || second.children.length === 0) { //left
                        //left
                        /** @type {?} */
                        let left = this.createNbMenuItem(second);
                        result.push(left);
                        return;
                    }
                    if (second.children.length != 0) { //non left
                        //non left
                        /** @type {?} */
                        let node = this.createNbMenuItem(second);
                        node.children = [];
                        result.push(node);
                        second.children.forEach((/**
                         * @param {?} third
                         * @return {?}
                         */
                        third => {
                            /** @type {?} */
                            let left = this.createNbMenuItem(third);
                            node.children.push(left);
                        }));
                    }
                }));
            }));
            //this.menuService.clear();
            //this.menuService.add(result);
            this.menu = result;
        }));
    }
    /**
     * @param {?} router
     * @return {?}
     */
    createNbMenuItem(router) {
        /** @type {?} */
        let result = {
            title: this.localizationPipe.transform(router.name),
            link: router.url
        };
        if (!!router.iconClass) {
            /** @type {?} */
            let params = router.iconClass.split(' ');
            if (params.length === 1) {
                result.icon = router.iconClass;
                return result;
            }
            /** @type {?} */
            let pack = params[0];
            /** @type {?} */
            let iconName = params[1];
            result.icon = {
                icon: iconName,
                pack: pack
            };
        }
        return result;
    }
}
ApplicationLayoutComponent.type = "application" /* application */;
ApplicationLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-admin-layout-application',
                template: `
    <ngx-admin-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-admin-one-column-layout>
  `,
                styles: [".nb-theme-default :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}@-webkit-keyframes fade{from{opacity:0}to{opacity:1}}.nb-theme-dark :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}.nb-theme-cosmic :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}.nb-theme-corporate :host ::ng-deep router-outlet+*{display:block;-webkit-animation:1s fade;animation:1s fade}@keyframes fade{from{opacity:0}to{opacity:1}}"]
            }] }
];
/** @nocollapse */
ApplicationLayoutComponent.ctorParameters = () => [
    { type: LocalizationPipe },
    { type: NbIconLibraries }
];
__decorate([
    Select(ConfigState.getOne('routes')),
    __metadata("design:type", Observable)
], ApplicationLayoutComponent.prototype, "routes$", void 0);
if (false) {
    /** @type {?} */
    ApplicationLayoutComponent.type;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.routes$;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.menu;
    /**
     * @type {?}
     * @private
     */
    ApplicationLayoutComponent.prototype.localizationPipe;
    /**
     * @type {?}
     * @private
     */
    ApplicationLayoutComponent.prototype.iconLibraries;
}
/**
 * @param {?} routes
 * @return {?}
 */
function getVisibleRoutes(routes) {
    return routes.reduce((/**
     * @param {?} acc
     * @param {?} val
     * @return {?}
     */
    (acc, val) => {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return [...acc, val];
    }), []);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layouts/one-column/one-column.layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OneColumnLayoutComponent {
}
OneColumnLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-admin-one-column-layout',
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-admin-header></ngx-admin-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
    <abp-confirmation></abp-confirmation>
    <abp-toast-container right="30px" bottom="30px"></abp-toast-container>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/header/header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderComponent {
    /**
     * @param {?} sidebarService
     * @param {?} menuService
     * @param {?} themeService
     * @param {?} userService
     * @param {?} layoutService
     * @param {?} breakpointService
     * @param {?} store
     * @param {?} oauthService
     */
    constructor(sidebarService, menuService, themeService, userService, layoutService, breakpointService, store, oauthService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.userService = userService;
        this.layoutService = layoutService;
        this.breakpointService = breakpointService;
        this.store = store;
        this.oauthService = oauthService;
        this.tenant = (/** @type {?} */ ({}));
        this.destroy$ = new Subject();
        this.userPictureOnly = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
            },
            {
                value: 'dark',
                name: 'Dark',
            },
            {
                value: 'cosmic',
                name: 'Cosmic',
            },
            {
                value: 'corporate',
                name: 'Corporate',
            },
        ];
        this.currentTheme = 'default';
        this.userMenu = [{ title: 'Profile', link: '/account/manage-profile' }, { title: 'Log out' }];
        this.tenant =
            this.store.selectSnapshot(SessionState.getTenant) ||
                ((/** @type {?} */ ({})));
        this.tenantName = this.tenant.name || '.';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.menuService.onItemClick()
            .pipe(filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ tag }) => tag === 'user-menu')), map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ item: { title } }) => title)))
            .subscribe((/**
         * @param {?} title
         * @return {?}
         */
        title => {
            switch (title) {
                case "Log out":
                    this.oauthService.logOut();
                    this.store.dispatch(new Navigate(['/'], null, {
                        state: { redirectUrl: this.store.selectSnapshot(RouterState).state.url },
                    }));
                    this.store.dispatch(new GetAppConfiguration());
                default:
            }
        }));
        this.currentTheme = this.themeService.currentTheme;
        this.userService.getUsers()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} users
         * @return {?}
         */
        (users) => this.user = users.jack));
        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([, currentBreakpoint]) => currentBreakpoint.width < xl)), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} isLessThanXl
         * @return {?}
         */
        (isLessThanXl) => this.userPictureOnly = isLessThanXl));
        this.themeService.onThemeChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name }) => name)), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} themeName
         * @return {?}
         */
        themeName => this.currentTheme = themeName));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} themeName
     * @return {?}
     */
    changeTheme(themeName) {
        this.themeService.changeTheme(themeName);
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    }
    /**
     * @return {?}
     */
    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-admin-header',
                template: "<div class=\"header-container\">\r\n  <div class=\"logo-container\">\r\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\r\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\r\n    </a>\r\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">ngx-<span>admin</span></a>\r\n  </div>\r\n  <nb-select [selected]=\"currentTheme\" (selectedChange)=\"changeTheme($event)\" status=\"primary\">\r\n    <nb-option *ngFor=\"let theme of themes\" [value]=\"theme.value\"> {{ theme.name }}</nb-option>\r\n  </nb-select>\r\n</div>\r\n\r\n<div class=\"header-container\">\r\n  <nb-actions size=\"small\">\r\n\r\n    <nb-action class=\"control-item\">\r\n      <nb-search type=\"rotate-layout\"></nb-search>\r\n    </nb-action>\r\n    <nb-action class=\"control-item\" icon=\"email-outline\"></nb-action>\r\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\r\n    <nb-action class=\"user-action\" *nbIsGranted=\"['view', 'user']\" >\r\n      <nb-user [nbContextMenu]=\"userMenu\"\r\n               nbContextMenuTag=\"user-menu\"\r\n               [onlyPicture]=\"userPictureOnly\"\r\n               [name]=\"tenantName+'/'+(currentUser$ | async)?.userName\"\r\n               [picture]=\"user?.picture\">\r\n      </nb-user>\r\n    </nb-action>\r\n  </nb-actions>\r\n</div>\r\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{display:flex;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-default :host .control-item{display:none}.nb-theme-default :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:flex;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-dark :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}@media (max-width:767.98px){.nb-theme-dark :host .control-item{display:none}.nb-theme-dark :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-cosmic :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}@media (max-width:767.98px){.nb-theme-cosmic :host .control-item{display:none}.nb-theme-cosmic :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate :host nb-action{height:auto;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:flex;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-corporate :host .control-item{display:none}.nb-theme-corporate :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-corporate :host nb-select{display:none}}"]
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
    { type: NbSidebarService },
    { type: NbMenuService },
    { type: NbThemeService },
    { type: UserData },
    { type: LayoutService },
    { type: NbMediaBreakpointsService },
    { type: Store },
    { type: OAuthService }
];
__decorate([
    Select(ConfigState.getOne('currentUser')),
    __metadata("design:type", Observable)
], HeaderComponent.prototype, "currentUser$", void 0);
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.currentUser$;
    /** @type {?} */
    HeaderComponent.prototype.tenant;
    /** @type {?} */
    HeaderComponent.prototype.tenantName;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.destroy$;
    /** @type {?} */
    HeaderComponent.prototype.userPictureOnly;
    /** @type {?} */
    HeaderComponent.prototype.user;
    /** @type {?} */
    HeaderComponent.prototype.themes;
    /** @type {?} */
    HeaderComponent.prototype.currentTheme;
    /** @type {?} */
    HeaderComponent.prototype.userMenu;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.sidebarService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.menuService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.themeService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.layoutService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.breakpointService;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.oauthService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/account-layout/account-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccountLayoutComponent {
}
// required for dynamic component
AccountLayoutComponent.type = "account" /* account */;
AccountLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-admin-layout-account',
                template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>
            <nav class="navigation">
              <a href="#" class="link back-link" aria-label="Back">
                <nb-icon icon="arrow-back"></nb-icon>
              </a>
            </nav>
          </nb-card-header>
          <nb-card-body>
            <nb-auth-block>
              <router-outlet></router-outlet>
            </nb-auth-block>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
    <abp-confirmation></abp-confirmation>
    <abp-toast-container right="30px" bottom="30px"></abp-toast-container>
  `,
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host nb-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    AccountLayoutComponent.type;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/empty-layout/empty-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmptyLayoutComponent {
}
EmptyLayoutComponent.type = "empty" /* empty */;
EmptyLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-admin-layout-empty',
                template: `
    <router-outlet></router-outlet>
    <abp-confirmation></abp-confirmation>
    <abp-toast-container right="30px" bottom="30px"></abp-toast-container>
  `
            }] }
];
if (false) {
    /** @type {?} */
    EmptyLayoutComponent.type;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-admin-basic.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
class NgxAdminBasicModule {
}
NgxAdminBasicModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    HeaderComponent,
                    OneColumnLayoutComponent,
                    ...LAYOUTS
                ],
                imports: [
                    //abp
                    CoreModule,
                    ThemeBasicModule,
                    //ngx-admin
                    NgxAdminSharedModule,
                    NbUserModule
                ],
                exports: [
                    ThemeBasicModule,
                    //ngx-admin
                    NgxAdminSharedModule,
                    ...LAYOUTS
                ],
                entryComponents: [...LAYOUTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/application-layout/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/account-layout/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fs-ngx-admin-basic.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AccountLayoutComponent, ApplicationLayoutComponent, LAYOUTS, NgxAdminBasicModule, EmptyLayoutComponent as ɵa, HeaderComponent as ɵb, OneColumnLayoutComponent as ɵc };
//# sourceMappingURL=fs-ngx-admin-basic.js.map
