/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/components/header/header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils/layout.service';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, themeService, userService, layoutService, breakpointService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.userService = userService;
        this.layoutService = layoutService;
        this.breakpointService = breakpointService;
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
        this.userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentTheme = this.themeService.currentTheme;
        this.userService.getUsers()
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @param {?} users
         * @return {?}
         */
        function (users) { return _this.user = users.nick; }));
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
                    selector: 'ngx-header',
                    template: "<div class=\"header-container\">\r\n  <div class=\"logo-container\">\r\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\r\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\r\n    </a>\r\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">ngx-<span>admin</span></a>\r\n  </div>\r\n  <nb-select [selected]=\"currentTheme\" (selectedChange)=\"changeTheme($event)\" status=\"primary\">\r\n    <nb-option *ngFor=\"let theme of themes\" [value]=\"theme.value\"> {{ theme.name }}</nb-option>\r\n  </nb-select>\r\n</div>\r\n\r\n<div class=\"header-container\">\r\n  <nb-actions size=\"small\">\r\n\r\n    <nb-action class=\"control-item\">\r\n      <nb-search type=\"rotate-layout\"></nb-search>\r\n    </nb-action>\r\n    <nb-action class=\"control-item\" icon=\"email-outline\"></nb-action>\r\n    <nb-action class=\"control-item\" icon=\"bell-outline\"></nb-action>\r\n    <nb-action class=\"user-action\" *nbIsGranted=\"['view', 'user']\" >\r\n      <nb-user [nbContextMenu]=\"userMenu\"\r\n               [onlyPicture]=\"userPictureOnly\"\r\n               [name]=\"user?.name\"\r\n               [picture]=\"user?.picture\">\r\n      </nb-user>\r\n    </nb-action>\r\n  </nb-actions>\r\n</div>\r\n",
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
        { type: NbMediaBreakpointsService }
    ]; };
    return HeaderComponent;
}());
export { HeaderComponent };
if (false) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQHRoZW1lL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQWtDRSx5QkFBb0IsY0FBZ0MsRUFDaEMsV0FBMEIsRUFDMUIsWUFBNEIsRUFDNUIsV0FBcUIsRUFDckIsYUFBNEIsRUFDNUIsaUJBQTRDO1FBTDVDLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQVU7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEyQjtRQWhDeEQsYUFBUSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3RELG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBR2pDLFdBQU0sR0FBRztZQUNQO2dCQUNFLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLE1B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OztJQUU5Qyx5Q0FBd0M7Ozs7O0lBQ3hDLHNDQUFrQzs7Ozs7SUFDbEMsdUNBQW9DOzs7OztJQUNwQyxzQ0FBNkI7Ozs7O0lBQzdCLHdDQUFvQzs7Ozs7SUFDcEMsNENBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYk1lZGlhQnJlYWtwb2ludHNTZXJ2aWNlLCBOYk1lbnVTZXJ2aWNlLCBOYlNpZGViYXJTZXJ2aWNlLCBOYlRoZW1lU2VydmljZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuXHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0YS91c2Vycyc7XHJcbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS91dGlscy9sYXlvdXQuc2VydmljZSc7XHJcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1oZWFkZXInLFxyXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICB1c2VyUGljdHVyZU9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB1c2VyOiBhbnk7XHJcblxyXG4gIHRoZW1lcyA9IFtcclxuICAgIHtcclxuICAgICAgdmFsdWU6ICdkZWZhdWx0JyxcclxuICAgICAgbmFtZTogJ0xpZ2h0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiAnZGFyaycsXHJcbiAgICAgIG5hbWU6ICdEYXJrJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiAnY29zbWljJyxcclxuICAgICAgbmFtZTogJ0Nvc21pYycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTogJ2NvcnBvcmF0ZScsXHJcbiAgICAgIG5hbWU6ICdDb3Jwb3JhdGUnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjdXJyZW50VGhlbWUgPSAnZGVmYXVsdCc7XHJcblxyXG4gIHVzZXJNZW51ID0gWyB7IHRpdGxlOiAnUHJvZmlsZScgfSwgeyB0aXRsZTogJ0xvZyBvdXQnIH0gXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaWRlYmFyU2VydmljZTogTmJTaWRlYmFyU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG1lbnVTZXJ2aWNlOiBOYk1lbnVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgdGhlbWVTZXJ2aWNlOiBOYlRoZW1lU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyRGF0YSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGxheW91dFNlcnZpY2U6IExheW91dFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBicmVha3BvaW50U2VydmljZTogTmJNZWRpYUJyZWFrcG9pbnRzU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRUaGVtZSA9IHRoaXMudGhlbWVTZXJ2aWNlLmN1cnJlbnRUaGVtZTtcclxuXHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXJzKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCh1c2VyczogYW55KSA9PiB0aGlzLnVzZXIgPSB1c2Vycy5uaWNrKTtcclxuXHJcbiAgICBjb25zdCB7IHhsIH0gPSB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmdldEJyZWFrcG9pbnRzTWFwKCk7XHJcbiAgICB0aGlzLnRoZW1lU2VydmljZS5vbk1lZGlhUXVlcnlDaGFuZ2UoKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKFssIGN1cnJlbnRCcmVha3BvaW50XSkgPT4gY3VycmVudEJyZWFrcG9pbnQud2lkdGggPCB4bCksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKGlzTGVzc1RoYW5YbDogYm9vbGVhbikgPT4gdGhpcy51c2VyUGljdHVyZU9ubHkgPSBpc0xlc3NUaGFuWGwpO1xyXG5cclxuICAgIHRoaXMudGhlbWVTZXJ2aWNlLm9uVGhlbWVDaGFuZ2UoKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoKHsgbmFtZSB9KSA9PiBuYW1lKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSh0aGVtZU5hbWUgPT4gdGhpcy5jdXJyZW50VGhlbWUgPSB0aGVtZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRoZW1lU2VydmljZS5jaGFuZ2VUaGVtZSh0aGVtZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2lkZWJhcigpOiBib29sZWFuIHtcclxuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHRydWUsICdtZW51LXNpZGViYXInKTtcclxuICAgIHRoaXMubGF5b3V0U2VydmljZS5jaGFuZ2VMYXlvdXRTaXplKCk7XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVIb21lKCkge1xyXG4gICAgdGhpcy5tZW51U2VydmljZS5uYXZpZ2F0ZUhvbWUoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19