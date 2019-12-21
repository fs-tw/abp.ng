/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/header/header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UserData } from '@fs/ngx-admin';
import { LayoutService } from '@fs/ngx-admin';
import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { Navigate, RouterState } from '@ngxs/router-plugin';
import { GetAppConfiguration } from '@abp/ng.core';
import { ConfigState } from '@abp/ng.core';
import { SessionState } from '@abp/ng.core';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, themeService, userService, layoutService, breakpointService, store, oauthService) {
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
    HeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.menuService.onItemClick()
            .pipe(filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var tag = _a.tag;
            return tag === 'user-menu';
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var title = _a.item.title;
            return title;
        })))
            .subscribe((/**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            switch (title) {
                case "Log out":
                    _this.oauthService.logOut();
                    _this.store.dispatch(new Navigate(['/'], null, {
                        state: { redirectUrl: _this.store.selectSnapshot(RouterState).state.url },
                    }));
                    _this.store.dispatch(new GetAppConfiguration());
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
        function (users) { return _this.user = users.jack; }));
        var xl = this.breakpointService.getBreakpointsMap().xl;
        this.themeService.onMediaQueryChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), currentBreakpoint = _b[1];
            return currentBreakpoint.width < xl;
        })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} isLessThanXl
         * @return {?}
         */
        function (isLessThanXl) { return _this.userPictureOnly = isLessThanXl; }));
        this.themeService.onThemeChange()
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var name = _a.name;
            return name;
        })), takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} themeName
         * @return {?}
         */
        function (themeName) { return _this.currentTheme = themeName; }));
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @param {?} themeName
     * @return {?}
     */
    HeaderComponent.prototype.changeTheme = /**
     * @param {?} themeName
     * @return {?}
     */
    function (themeName) {
        this.themeService.changeTheme(themeName);
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.toggleSidebar = /**
     * @return {?}
     */
    function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.navigateHome = /**
     * @return {?}
     */
    function () {
        this.menuService.navigateHome();
        return false;
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-admin-header',
                    template: "<div class=\"header-container\">\r\n  <div class=\"logo-container\">\r\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\r\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\r\n    </a>\r\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">ngx-<span>admin</span></a>\r\n  </div>\r\n  <nb-select [selected]=\"currentTheme\" (selectedChange)=\"changeTheme($event)\" status=\"primary\">\r\n    <nb-option *ngFor=\"let theme of themes\" [value]=\"theme.value\"> {{ theme.name }}</nb-option>\r\n  </nb-select>\r\n</div>\r\n\r\n<div class=\"header-container\">\r\n  <nb-actions size=\"small\">\r\n\r\n    <nb-action class=\"control-item\">\r\n      <nb-search type=\"rotate-layout\"></nb-search>\r\n    </nb-action>\r\n    <nb-action class=\"control-item\" icon=\"email-outline\"></nb-action>\r\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\r\n    <nb-action class=\"user-action\" *nbIsGranted=\"['view', 'user']\" >\r\n      <nb-user [nbContextMenu]=\"userMenu\"\r\n               nbContextMenuTag=\"user-menu\"\r\n               [onlyPicture]=\"userPictureOnly\"\r\n               [name]=\"tenantName+'/'+(currentUser$ | async)?.userName\"\r\n               [picture]=\"user?.picture\">\r\n      </nb-user>\r\n    </nb-action>\r\n  </nb-actions>\r\n</div>\r\n",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:100%}.nb-theme-default :host .logo-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default :host nb-action{height:auto;display:-webkit-box;display:flex;align-content:center}.nb-theme-default :host nb-user{cursor:pointer}.nb-theme-default :host ::ng-deep nb-search button{padding:0!important}.nb-theme-default :host .header-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:auto}.nb-theme-default :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-default :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-default :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-default :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-default :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-default :host .control-item{display:none}.nb-theme-default :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-default :host nb-select{display:none}}.nb-theme-dark :host{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:100%}.nb-theme-dark :host .logo-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-dark :host nb-action{height:auto;display:-webkit-box;display:flex;align-content:center}.nb-theme-dark :host nb-user{cursor:pointer}.nb-theme-dark :host ::ng-deep nb-search button{padding:0!important}.nb-theme-dark :host .header-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:auto}.nb-theme-dark :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-dark :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-dark :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-dark :host .header-container .logo{border-left:1px solid #151a30}[dir=rtl] .nb-theme-dark :host .header-container .logo{border-right:1px solid #151a30}@media (max-width:767.98px){.nb-theme-dark :host .control-item{display:none}.nb-theme-dark :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-dark :host nb-select{display:none}}.nb-theme-cosmic :host{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:100%}.nb-theme-cosmic :host .logo-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-cosmic :host nb-action{height:auto;display:-webkit-box;display:flex;align-content:center}.nb-theme-cosmic :host nb-user{cursor:pointer}.nb-theme-cosmic :host ::ng-deep nb-search button{padding:0!important}.nb-theme-cosmic :host .header-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:auto}.nb-theme-cosmic :host .header-container .sidebar-toggle{text-decoration:none;color:#b4b4db}[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-cosmic :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-cosmic :host .header-container .logo{border-left:1px solid #1b1b38}[dir=rtl] .nb-theme-cosmic :host .header-container .logo{border-right:1px solid #1b1b38}@media (max-width:767.98px){.nb-theme-cosmic :host .control-item{display:none}.nb-theme-cosmic :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-cosmic :host nb-select{display:none}}.nb-theme-corporate :host{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:100%}.nb-theme-corporate :host .logo-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate :host nb-action{height:auto;display:-webkit-box;display:flex;align-content:center}.nb-theme-corporate :host nb-user{cursor:pointer}.nb-theme-corporate :host ::ng-deep nb-search button{padding:0!important}.nb-theme-corporate :host .header-container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;width:auto}.nb-theme-corporate :host .header-container .sidebar-toggle{text-decoration:none;color:#8f9bb3}[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-right:1.25rem}[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle{padding-left:1.25rem}.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon{font-size:1.75rem}.nb-theme-corporate :host .header-container .logo{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr] .nb-theme-corporate :host .header-container .logo{border-left:1px solid #edf1f7}[dir=rtl] .nb-theme-corporate :host .header-container .logo{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-corporate :host .control-item{display:none}.nb-theme-corporate :host .user-action{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-corporate :host nb-select{display:none}}"]
                }] }
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: NbSidebarService },
        { type: NbMenuService },
        { type: NbThemeService },
        { type: UserData },
        { type: LayoutService },
        { type: NbMediaBreakpointsService },
        { type: Store },
        { type: OAuthService }
    ]; };
    tslib_1.__decorate([
        Select(ConfigState.getOne('currentUser')),
        tslib_1.__metadata("design:type", Observable)
    ], HeaderComponent.prototype, "currentUser$", void 0);
    return HeaderComponent;
}());
export { HeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQWlDLE1BQU0sY0FBYyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU1QztJQXlDRSx5QkFDVSxjQUFnQyxFQUNoQyxXQUEwQixFQUMxQixZQUE0QixFQUM1QixXQUFxQixFQUNyQixhQUE0QixFQUM1QixpQkFBNEMsRUFDNUMsS0FBWSxFQUNaLFlBQTBCO1FBUDFCLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNoQyxnQkFB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WUFBWSxFQUFFLENBQUM7UUFDaEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkF4SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBRTVCLCt5Q0FBc0M7O2lCQUN2Qzs7OztnQkFqQmtELGdCQUFnQjtnQkFBL0IsYUFBYTtnQkFBb0IsY0FBYztnQkFFMUUsUUFBUTtnQkFDUixhQUFhO2dCQUhiLHlCQUF5QjtnQkFNekIsS0FBSztnQkFDTCxZQUFZOztJQWNuQjtRQURDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzBDQUM1QixVQUFVO3lEQUF1QztJQWlIakUsc0JBQUM7Q0FBQSxBQXpIRCxJQXlIQztTQXBIWSxlQUFlOzs7SUFFMUIsdUNBQytEOztJQUUvRCxpQ0FBNkI7O0lBRTdCLHFDQUFtQjs7Ozs7SUFFbkIsbUNBQXNEOztJQUN0RCwwQ0FBaUM7O0lBQ2pDLCtCQUFVOztJQUVWLGlDQWlCRTs7SUFFRix1Q0FBeUI7O0lBRXpCLG1DQUF3Rjs7Ozs7SUFHdEYseUNBQXdDOzs7OztJQUN4QyxzQ0FBa0M7Ozs7O0lBQ2xDLHVDQUFvQzs7Ozs7SUFDcEMsc0NBQTZCOzs7OztJQUM3Qix3Q0FBb0M7Ozs7O0lBQ3BDLDRDQUFvRDs7Ozs7SUFDcEQsZ0NBQW9COzs7OztJQUNwQix1Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5iTWVkaWFCcmVha3BvaW50c1NlcnZpY2UsIE5iTWVudVNlcnZpY2UsIE5iU2lkZWJhclNlcnZpY2UsIE5iVGhlbWVTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICdAZnMvbmd4LWFkbWluJztcclxuaW1wb3J0IHsgTGF5b3V0U2VydmljZSB9IGZyb20gJ0Bmcy9uZ3gtYWRtaW4nO1xyXG5pbXBvcnQgeyBtYXAsIHRha2VVbnRpbCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN0b3JlLCBTZWxlY3QgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZSwgUm91dGVyU3RhdGUgfSBmcm9tICdAbmd4cy9yb3V0ZXItcGx1Z2luJztcclxuaW1wb3J0IHsgR2V0QXBwQ29uZmlndXJhdGlvbiwgQXBwbGljYXRpb25Db25maWd1cmF0aW9uLCBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFNlc3Npb25TdGF0ZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1hZG1pbi1oZWFkZXInLFxyXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBAU2VsZWN0KENvbmZpZ1N0YXRlLmdldE9uZSgnY3VycmVudFVzZXInKSlcclxuICBjdXJyZW50VXNlciQ6IE9ic2VydmFibGU8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLkN1cnJlbnRVc2VyPjtcclxuXHJcbiAgdGVuYW50ID0ge30gYXMgQUJQLkJhc2ljSXRlbTtcclxuXHJcbiAgdGVuYW50TmFtZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICB1c2VyUGljdHVyZU9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB1c2VyOiBhbnk7XHJcblxyXG4gIHRoZW1lcyA9IFtcclxuICAgIHtcclxuICAgICAgdmFsdWU6ICdkZWZhdWx0JyxcclxuICAgICAgbmFtZTogJ0xpZ2h0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiAnZGFyaycsXHJcbiAgICAgIG5hbWU6ICdEYXJrJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiAnY29zbWljJyxcclxuICAgICAgbmFtZTogJ0Nvc21pYycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTogJ2NvcnBvcmF0ZScsXHJcbiAgICAgIG5hbWU6ICdDb3Jwb3JhdGUnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjdXJyZW50VGhlbWUgPSAnZGVmYXVsdCc7XHJcblxyXG4gIHVzZXJNZW51ID0gW3sgdGl0bGU6ICdQcm9maWxlJywgbGluazonL2FjY291bnQvbWFuYWdlLXByb2ZpbGUnIH0sIHsgdGl0bGU6ICdMb2cgb3V0JyB9XTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBOYlNpZGViYXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogTmJNZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgdGhlbWVTZXJ2aWNlOiBOYlRoZW1lU2VydmljZSxcclxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJEYXRhLFxyXG4gICAgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogTmJNZWRpYUJyZWFrcG9pbnRzU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBvYXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy50ZW5hbnQgPVxyXG4gICAgICB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFNlc3Npb25TdGF0ZS5nZXRUZW5hbnQpIHx8XHJcbiAgICAgICh7fSBhcyBBQlAuQmFzaWNJdGVtKTtcclxuICAgIHRoaXMudGVuYW50TmFtZSA9IHRoaXMudGVuYW50Lm5hbWUgfHwgJy4nO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm1lbnVTZXJ2aWNlLm9uSXRlbUNsaWNrKClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKCh7IHRhZyB9KSA9PiB0YWcgPT09ICd1c2VyLW1lbnUnKSxcclxuICAgICAgICBtYXAoKHsgaXRlbTogeyB0aXRsZSB9IH0pID0+IHRpdGxlKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHRpdGxlID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHRpdGxlKSB7XHJcbiAgICAgICAgICBjYXNlIFwiTG9nIG91dFwiOlxyXG4gICAgICAgICAgICAgIHRoaXMub2F1dGhTZXJ2aWNlLmxvZ091dCgpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICBuZXcgTmF2aWdhdGUoWycvJ10sIG51bGwsIHtcclxuICAgICAgICAgICAgICAgICAgc3RhdGU6IHsgcmVkaXJlY3RVcmw6IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoUm91dGVyU3RhdGUpLnN0YXRlLnVybCB9LFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRBcHBDb25maWd1cmF0aW9uKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy5jdXJyZW50VGhlbWUgPSB0aGlzLnRoZW1lU2VydmljZS5jdXJyZW50VGhlbWU7XHJcblxyXG4gICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VycygpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgodXNlcnM6IGFueSkgPT4gdGhpcy51c2VyID0gdXNlcnMuamFjayk7XHJcblxyXG4gICAgY29uc3QgeyB4bCB9ID0gdGhpcy5icmVha3BvaW50U2VydmljZS5nZXRCcmVha3BvaW50c01hcCgpO1xyXG4gICAgdGhpcy50aGVtZVNlcnZpY2Uub25NZWRpYVF1ZXJ5Q2hhbmdlKClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChbLCBjdXJyZW50QnJlYWtwb2ludF0pID0+IGN1cnJlbnRCcmVha3BvaW50LndpZHRoIDwgeGwpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChpc0xlc3NUaGFuWGw6IGJvb2xlYW4pID0+IHRoaXMudXNlclBpY3R1cmVPbmx5ID0gaXNMZXNzVGhhblhsKTtcclxuXHJcbiAgICB0aGlzLnRoZW1lU2VydmljZS5vblRoZW1lQ2hhbmdlKClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKCh7IG5hbWUgfSkgPT4gbmFtZSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUodGhlbWVOYW1lID0+IHRoaXMuY3VycmVudFRoZW1lID0gdGhlbWVOYW1lKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy50aGVtZVNlcnZpY2UuY2hhbmdlVGhlbWUodGhlbWVOYW1lKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNpZGViYXIoKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh0cnVlLCAnbWVudS1zaWRlYmFyJyk7XHJcbiAgICB0aGlzLmxheW91dFNlcnZpY2UuY2hhbmdlTGF5b3V0U2l6ZSgpO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlSG9tZSgpIHtcclxuICAgIHRoaXMubWVudVNlcnZpY2UubmF2aWdhdGVIb21lKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==