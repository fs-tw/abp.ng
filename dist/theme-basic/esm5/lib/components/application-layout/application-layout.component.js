/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/application-layout/application-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AuthService, ConfigState, SessionState, SetLanguage, takeUntilDestroy, } from '@abp/ng.core';
import { collapseWithMargin, slideFromBottom } from '@abp/ng.theme.shared';
import { Component, Renderer2, TemplateRef, ViewChild, } from '@angular/core';
import { Navigate, RouterState } from '@ngxs/router-plugin';
import { Select, Store } from '@ngxs/store';
import compare from 'just-compare';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import snq from 'snq';
import { AddNavigationElement } from '../../actions';
import { LayoutState } from '../../states';
var ApplicationLayoutComponent = /** @class */ (function () {
    function ApplicationLayoutComponent(store, renderer, authService) {
        this.store = store;
        this.renderer = renderer;
        this.authService = authService;
        this.isCollapsed = true;
        this.rightPartElements = [];
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        function (_, item) { return item.name; });
        this.trackElementByFn = (/**
         * @param {?} _
         * @param {?} element
         * @return {?}
         */
        function (_, element) { return element; });
    }
    Object.defineProperty(ApplicationLayoutComponent.prototype, "appInfo", {
        get: 
        // do not set true or false
        /**
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot(ConfigState.getApplicationInfo);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationLayoutComponent.prototype, "visibleRoutes$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.routes$.pipe(map((/**
             * @param {?} routes
             * @return {?}
             */
            function (routes) { return getVisibleRoutes(routes); })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationLayoutComponent.prototype, "defaultLanguage$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.languages$.pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            function (languages) {
                return snq((/**
                 * @return {?}
                 */
                function () { return languages.find((/**
                 * @param {?} lang
                 * @return {?}
                 */
                function (lang) { return lang.cultureName === _this.selectedLangCulture; })).displayName; }));
            }), ''));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationLayoutComponent.prototype, "dropdownLanguages$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.languages$.pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            function (languages) {
                return snq((/**
                 * @return {?}
                 */
                function () { return languages.filter((/**
                 * @param {?} lang
                 * @return {?}
                 */
                function (lang) { return lang.cultureName !== _this.selectedLangCulture; })); }));
            }), []));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationLayoutComponent.prototype, "selectedLangCulture", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot(SessionState.getLanguage);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.checkWindowWidth = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (window.innerWidth < 768) {
                _this.isDropdownChildDynamic = false;
                if (_this.smallScreen === false) {
                    _this.isCollapsed = false;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.isCollapsed = true;
                    }), 100);
                }
                _this.smallScreen = true;
            }
            else {
                _this.isDropdownChildDynamic = true;
                _this.smallScreen = false;
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var navigations = this.store
            .selectSnapshot(LayoutState.getNavigationElements)
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var name = _a.name;
            return name;
        }));
        if (navigations.indexOf('LanguageRef') < 0) {
            this.store.dispatch(new AddNavigationElement([
                { element: this.languageRef, order: 4, name: 'LanguageRef' },
                { element: this.currentUserRef, order: 5, name: 'CurrentUserRef' },
            ]));
        }
        this.navElements$
            .pipe(map((/**
         * @param {?} elements
         * @return {?}
         */
        function (elements) { return elements.map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var element = _a.element;
            return element;
        })); })), filter((/**
         * @param {?} elements
         * @return {?}
         */
        function (elements) { return !compare(elements, _this.rightPartElements); })), takeUntilDestroy(this))
            .subscribe((/**
         * @param {?} elements
         * @return {?}
         */
        function (elements) {
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this.rightPartElements = elements); }), 0);
        }));
        this.checkWindowWidth();
        fromEvent(window, 'resize')
            .pipe(takeUntilDestroy(this), debounceTime(150))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.checkWindowWidth();
        }));
    };
    /**
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} cultureName
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.onChangeLang = /**
     * @param {?} cultureName
     * @return {?}
     */
    function (cultureName) {
        this.store.dispatch(new SetLanguage(cultureName));
    };
    /**
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.authService.logout().subscribe((/**
         * @return {?}
         */
        function () {
            _this.store.dispatch(new Navigate(['/'], null, {
                state: { redirectUrl: _this.store.selectSnapshot(RouterState).state.url },
            }));
        }));
    };
    /**
     * @param {?} event
     * @param {?} childrenContainer
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.openChange = /**
     * @param {?} event
     * @param {?} childrenContainer
     * @return {?}
     */
    function (event, childrenContainer) {
        var _this = this;
        if (!event) {
            Object.keys(childrenContainer.style)
                .filter((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return Number.isInteger(+key); }))
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                _this.renderer.removeStyle(childrenContainer, childrenContainer.style[key]);
            }));
            this.renderer.removeStyle(childrenContainer, 'left');
        }
    };
    // required for dynamic component
    ApplicationLayoutComponent.type = "application" /* application */;
    ApplicationLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-layout-application',
                    template: "<nav\r\n  class=\"navbar navbar-expand-lg navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4\"\r\n  id=\"main-navbar\"\r\n  style=\"min-height: 4rem;\"\r\n>\r\n  <div class=\"container \">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">\r\n      <img *ngIf=\"appInfo.logoUrl; else appName\" [src]=\"appInfo.logoUrl\" [alt]=\"appInfo.name\" />\r\n    </a>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      (click)=\"isCollapsed = !isCollapsed\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [class.overflow-hidden]=\"smallScreen\" id=\"main-navbar-collapse\">\r\n      <ng-container *ngTemplateOutlet=\"!smallScreen ? navigations : null\"></ng-container>\r\n\r\n      <div *ngIf=\"smallScreen\" [@collapseWithMargin]=\"isCollapsed ? 'collapsed' : 'expanded'\">\r\n        <ng-container *ngTemplateOutlet=\"navigations\"></ng-container>\r\n      </div>\r\n\r\n      <ng-template #navigations>\r\n        <ul class=\"navbar-nav mx-auto\">\r\n          <ng-container\r\n            *ngFor=\"let route of visibleRoutes$ | async; trackBy: trackByFn\"\r\n            [ngTemplateOutlet]=\"route?.children?.length ? dropdownLink : defaultLink\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: route }\"\r\n          >\r\n          </ng-container>\r\n\r\n          <ng-template #defaultLink let-route>\r\n            <li class=\"nav-item\" *abpPermission=\"route.requiredPolicy\">\r\n              <a class=\"nav-link\" [routerLink]=\"[route.url]\"\r\n                ><i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n                {{ route.name | abpLocalization }}</a\r\n              >\r\n            </li>\r\n          </ng-template>\r\n\r\n          <ng-template #dropdownLink let-route>\r\n            <li\r\n              #navbarRootDropdown\r\n              *abpPermission=\"route.requiredPolicy\"\r\n              [abpVisibility]=\"routeContainer\"\r\n              class=\"nav-item dropdown\"\r\n              display=\"static\"\r\n              (click)=\"\r\n                navbarRootDropdown.expand\r\n                  ? (navbarRootDropdown.expand = false)\r\n                  : (navbarRootDropdown.expand = true)\r\n              \"\r\n            >\r\n              <a\r\n                class=\"nav-link dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                aria-expanded=\"false\"\r\n                href=\"javascript:void(0)\"\r\n              >\r\n                <i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n                {{ route.name | abpLocalization }}\r\n              </a>\r\n              <div\r\n                #routeContainer\r\n                class=\"dropdown-menu border-0 shadow-sm\"\r\n                (click)=\"$event.preventDefault(); $event.stopPropagation()\"\r\n                [class.d-block]=\"smallScreen && navbarRootDropdown.expand\"\r\n              >\r\n                <ng-template\r\n                  #forTemplate\r\n                  ngFor\r\n                  [ngForOf]=\"route.children\"\r\n                  [ngForTrackBy]=\"trackByFn\"\r\n                  [ngForTemplate]=\"childWrapper\"\r\n                ></ng-template>\r\n              </div>\r\n            </li>\r\n          </ng-template>\r\n\r\n          <ng-template #childWrapper let-child>\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"child?.children?.length ? dropdownChild : defaultChild\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: child }\"\r\n            ></ng-template>\r\n          </ng-template>\r\n\r\n          <ng-template #defaultChild let-child>\r\n            <div class=\"dropdown-submenu\" *abpPermission=\"child.requiredPolicy\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"[child.url]\">\r\n                <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n                {{ child.name | abpLocalization }}</a\r\n              >\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template #dropdownChild let-child>\r\n            <div\r\n              [abpVisibility]=\"childrenContainer\"\r\n              class=\"dropdown-submenu\"\r\n              ngbDropdown\r\n              #dropdownSubmenu=\"ngbDropdown\"\r\n              [display]=\"isDropdownChildDynamic ? 'dynamic' : 'static'\"\r\n              placement=\"right-top\"\r\n              [autoClose]=\"true\"\r\n              *abpPermission=\"child.requiredPolicy\"\r\n              (openChange)=\"openChange($event, childrenContainer)\"\r\n            >\r\n              <div ngbDropdownToggle [class.dropdown-toggle]=\"false\">\r\n                <a\r\n                  abpEllipsis=\"210px\"\r\n                  [abpEllipsisEnabled]=\"isDropdownChildDynamic\"\r\n                  role=\"button\"\r\n                  class=\"btn d-block text-left dropdown-toggle\"\r\n                >\r\n                  <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n                  {{ child.name | abpLocalization }}\r\n                </a>\r\n              </div>\r\n              <div\r\n                #childrenContainer\r\n                class=\"dropdown-menu border-0 shadow-sm\"\r\n                [class.d-block]=\"smallScreen && dropdownSubmenu.isOpen()\"\r\n              >\r\n                <ng-template\r\n                  ngFor\r\n                  [ngForOf]=\"child.children\"\r\n                  [ngForTrackBy]=\"trackByFn\"\r\n                  [ngForTemplate]=\"childWrapper\"\r\n                ></ng-template>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ul>\r\n\r\n        <ul class=\"navbar-nav\">\r\n          <ng-container\r\n            *ngFor=\"let element of rightPartElements; trackBy: trackElementByFn\"\r\n            [ngTemplateOutlet]=\"element\"\r\n          ></ng-container>\r\n        </ul>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div\r\n  [@slideFromBottom]=\"\r\n    outlet && outlet.isActivated && outlet.activatedRoute && outlet.activatedRoute.routeConfig.path\r\n  \"\r\n  class=\"container\"\r\n>\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n\r\n<ng-template #appName>\r\n  {{ appInfo.name }}\r\n</ng-template>\r\n\r\n<ng-template #language>\r\n  <li *ngIf=\"(dropdownLanguages$ | async)?.length > 0\" class=\"nav-item\">\r\n    <div class=\"dropdown\" ngbDropdown #languageDropdown=\"ngbDropdown\" display=\"static\">\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ defaultLanguage$ | async }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.d-block]=\"smallScreen && languageDropdown.isOpen()\"\r\n      >\r\n        <a\r\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\r\n          href=\"javascript:void(0)\"\r\n          class=\"dropdown-item\"\r\n          (click)=\"onChangeLang(lang.cultureName)\"\r\n          >{{ lang?.displayName }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n\r\n<ng-template #currentUser>\r\n  <li class=\"nav-item\">\r\n    <ng-template #loginBtn>\r\n      <a role=\"button\" class=\"nav-link\" routerLink=\"/account/login\">{{\r\n        'AbpAccount::Login' | abpLocalization\r\n      }}</a>\r\n    </ng-template>\r\n    <div\r\n      *ngIf=\"(currentUser$ | async)?.isAuthenticated; else loginBtn\"\r\n      ngbDropdown\r\n      class=\"dropdown\"\r\n      #currentUserDropdown=\"ngbDropdown\"\r\n      display=\"static\"\r\n    >\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ (currentUser$ | async)?.userName }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.d-block]=\"smallScreen && currentUserDropdown.isOpen()\"\r\n      >\r\n        <a class=\"dropdown-item\" routerLink=\"/account/manage-profile\"\r\n          ><i class=\"fa fa-cog mr-1\"></i>{{ 'AbpAccount::ManageYourProfile' | abpLocalization }}</a\r\n        >\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"\r\n          ><i class=\"fa fa-power-off mr-1\"></i>{{ 'AbpUi::Logout' | abpLocalization }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n",
                    animations: [slideFromBottom, collapseWithMargin]
                }] }
    ];
    /** @nocollapse */
    ApplicationLayoutComponent.ctorParameters = function () { return [
        { type: Store },
        { type: Renderer2 },
        { type: AuthService }
    ]; };
    ApplicationLayoutComponent.propDecorators = {
        currentUserRef: [{ type: ViewChild, args: ['currentUser', { static: false, read: TemplateRef },] }],
        languageRef: [{ type: ViewChild, args: ['language', { static: false, read: TemplateRef },] }]
    };
    tslib_1.__decorate([
        Select(ConfigState.getOne('routes')),
        tslib_1.__metadata("design:type", Observable)
    ], ApplicationLayoutComponent.prototype, "routes$", void 0);
    tslib_1.__decorate([
        Select(ConfigState.getOne('currentUser')),
        tslib_1.__metadata("design:type", Observable)
    ], ApplicationLayoutComponent.prototype, "currentUser$", void 0);
    tslib_1.__decorate([
        Select(ConfigState.getDeep('localization.languages')),
        tslib_1.__metadata("design:type", Observable)
    ], ApplicationLayoutComponent.prototype, "languages$", void 0);
    tslib_1.__decorate([
        Select(LayoutState.getNavigationElements),
        tslib_1.__metadata("design:type", Observable)
    ], ApplicationLayoutComponent.prototype, "navElements$", void 0);
    return ApplicationLayoutComponent;
}());
export { ApplicationLayoutComponent };
if (false) {
    /** @type {?} */
    ApplicationLayoutComponent.type;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.routes$;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.currentUser$;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.languages$;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.navElements$;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.currentUserRef;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.languageRef;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.isDropdownChildDynamic;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.isCollapsed;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.smallScreen;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.rightPartElements;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.trackByFn;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.trackElementByFn;
    /**
     * @type {?}
     * @private
     */
    ApplicationLayoutComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ApplicationLayoutComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ApplicationLayoutComponent.prototype.authService;
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
    function (acc, val) {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return tslib_1.__spread(acc, [val]);
    }), []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuYmFzaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1sYXlvdXQvYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBR0wsV0FBVyxFQUVYLFdBQVcsRUFFWCxZQUFZLEVBQ1osV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUVMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsV0FBVyxFQUVYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sT0FBTyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFM0M7SUF5RUUsb0NBQ1UsS0FBWSxFQUNaLFFBQW1CLEVBQ25CLFdBQXdCO1FBRnhCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFh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QWdDOztJQUVoQyxpREFBbUI7O0lBRW5CLGlEQUFxQjs7SUFvQ3JCLHVEQUEyQzs7SUFFM0MsK0NBQW1FOztJQUVuRSxzREFBMkU7Ozs7O0lBR3pFLDJDQUFvQjs7Ozs7SUFDcEIsOENBQTJCOzs7OztJQUMzQixpREFBZ0M7Ozs7OztBQWtGcEMsU0FBUyxnQkFBZ0IsQ0FBQyxNQUF1QjtJQUMvQyxPQUFPLE1BQU0sQ0FBQyxNQUFNOzs7OztJQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7UUFDNUIsSUFBSSxHQUFHLENBQUMsU0FBUztZQUFFLE9BQU8sR0FBRyxDQUFDO1FBRTlCLElBQUksR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN2QyxHQUFHLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQztRQUVELHdCQUFXLEdBQUcsR0FBRSxHQUFHLEdBQUU7SUFDdkIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQUJQLFxyXG4gIEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbixcclxuICBBdXRoU2VydmljZSxcclxuICBDb25maWcsXHJcbiAgQ29uZmlnU3RhdGUsXHJcbiAgZUxheW91dFR5cGUsXHJcbiAgU2Vzc2lvblN0YXRlLFxyXG4gIFNldExhbmd1YWdlLFxyXG4gIHRha2VVbnRpbERlc3Ryb3ksXHJcbn0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgY29sbGFwc2VXaXRoTWFyZ2luLCBzbGlkZUZyb21Cb3R0b20gfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgT25EZXN0cm95LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBUcmFja0J5RnVuY3Rpb24sXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZSwgUm91dGVyU3RhdGUgfSBmcm9tICdAbmd4cy9yb3V0ZXItcGx1Z2luJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IGNvbXBhcmUgZnJvbSAnanVzdC1jb21wYXJlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuaW1wb3J0IHsgQWRkTmF2aWdhdGlvbkVsZW1lbnQgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xheW91dCc7XHJcbmltcG9ydCB7IExheW91dFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWxheW91dC1hcHBsaWNhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcGxpY2F0aW9uLWxheW91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlRnJvbUJvdHRvbSwgY29sbGFwc2VXaXRoTWFyZ2luXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAvLyByZXF1aXJlZCBmb3IgZHluYW1pYyBjb21wb25lbnRcclxuICBzdGF0aWMgdHlwZSA9IGVMYXlvdXRUeXBlLmFwcGxpY2F0aW9uO1xyXG5cclxuICBAU2VsZWN0KENvbmZpZ1N0YXRlLmdldE9uZSgncm91dGVzJykpXHJcbiAgcm91dGVzJDogT2JzZXJ2YWJsZTxBQlAuRnVsbFJvdXRlW10+O1xyXG5cclxuICBAU2VsZWN0KENvbmZpZ1N0YXRlLmdldE9uZSgnY3VycmVudFVzZXInKSlcclxuICBjdXJyZW50VXNlciQ6IE9ic2VydmFibGU8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLkN1cnJlbnRVc2VyPjtcclxuXHJcbiAgQFNlbGVjdChDb25maWdTdGF0ZS5nZXREZWVwKCdsb2NhbGl6YXRpb24ubGFuZ3VhZ2VzJykpXHJcbiAgbGFuZ3VhZ2VzJDogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uTGFuZ3VhZ2VbXT47XHJcblxyXG4gIEBTZWxlY3QoTGF5b3V0U3RhdGUuZ2V0TmF2aWdhdGlvbkVsZW1lbnRzKVxyXG4gIG5hdkVsZW1lbnRzJDogT2JzZXJ2YWJsZTxMYXlvdXQuTmF2aWdhdGlvbkVsZW1lbnRbXT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2N1cnJlbnRVc2VyJywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIGN1cnJlbnRVc2VyUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAVmlld0NoaWxkKCdsYW5ndWFnZScsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBsYW5ndWFnZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgaXNEcm9wZG93bkNoaWxkRHluYW1pYzogYm9vbGVhbjtcclxuXHJcbiAgaXNDb2xsYXBzZWQgPSB0cnVlO1xyXG5cclxuICBzbWFsbFNjcmVlbjogYm9vbGVhbjsgLy8gZG8gbm90IHNldCB0cnVlIG9yIGZhbHNlXHJcblxyXG4gIGdldCBhcHBJbmZvKCk6IENvbmZpZy5BcHBsaWNhdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRBcHBsaWNhdGlvbkluZm8pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZpc2libGVSb3V0ZXMkKCk6IE9ic2VydmFibGU8QUJQLkZ1bGxSb3V0ZVtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXMkLnBpcGUobWFwKHJvdXRlcyA9PiBnZXRWaXNpYmxlUm91dGVzKHJvdXRlcykpKTtcclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0TGFuZ3VhZ2UkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5sYW5ndWFnZXMkLnBpcGUoXHJcbiAgICAgIG1hcChcclxuICAgICAgICBsYW5ndWFnZXMgPT5cclxuICAgICAgICAgIHNucShcclxuICAgICAgICAgICAgKCkgPT4gbGFuZ3VhZ2VzLmZpbmQobGFuZyA9PiBsYW5nLmN1bHR1cmVOYW1lID09PSB0aGlzLnNlbGVjdGVkTGFuZ0N1bHR1cmUpLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAnJyxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgZHJvcGRvd25MYW5ndWFnZXMkKCk6IE9ic2VydmFibGU8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLkxhbmd1YWdlW10+IHtcclxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcyQucGlwZShcclxuICAgICAgbWFwKFxyXG4gICAgICAgIGxhbmd1YWdlcyA9PlxyXG4gICAgICAgICAgc25xKCgpID0+IGxhbmd1YWdlcy5maWx0ZXIobGFuZyA9PiBsYW5nLmN1bHR1cmVOYW1lICE9PSB0aGlzLnNlbGVjdGVkTGFuZ0N1bHR1cmUpKSxcclxuICAgICAgICBbXSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRMYW5nQ3VsdHVyZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoU2Vzc2lvblN0YXRlLmdldExhbmd1YWdlKTtcclxuICB9XHJcblxyXG4gIHJpZ2h0UGFydEVsZW1lbnRzOiBUZW1wbGF0ZVJlZjxhbnk+W10gPSBbXTtcclxuXHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248QUJQLkZ1bGxSb3V0ZT4gPSAoXywgaXRlbSkgPT4gaXRlbS5uYW1lO1xyXG5cclxuICB0cmFja0VsZW1lbnRCeUZuOiBUcmFja0J5RnVuY3Rpb248QUJQLkZ1bGxSb3V0ZT4gPSAoXywgZWxlbWVudCkgPT4gZWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1dpbmRvd1dpZHRoKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICAgIHRoaXMuaXNEcm9wZG93bkNoaWxkRHluYW1pYyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnNtYWxsU2NyZWVuID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zbWFsbFNjcmVlbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pc0Ryb3Bkb3duQ2hpbGREeW5hbWljID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNtYWxsU2NyZWVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbnMgPSB0aGlzLnN0b3JlXHJcbiAgICAgIC5zZWxlY3RTbmFwc2hvdChMYXlvdXRTdGF0ZS5nZXROYXZpZ2F0aW9uRWxlbWVudHMpXHJcbiAgICAgIC5tYXAoKHsgbmFtZSB9KSA9PiBuYW1lKTtcclxuXHJcbiAgICBpZiAobmF2aWdhdGlvbnMuaW5kZXhPZignTGFuZ3VhZ2VSZWYnKSA8IDApIHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICBuZXcgQWRkTmF2aWdhdGlvbkVsZW1lbnQoW1xyXG4gICAgICAgICAgeyBlbGVtZW50OiB0aGlzLmxhbmd1YWdlUmVmLCBvcmRlcjogNCwgbmFtZTogJ0xhbmd1YWdlUmVmJyB9LFxyXG4gICAgICAgICAgeyBlbGVtZW50OiB0aGlzLmN1cnJlbnRVc2VyUmVmLCBvcmRlcjogNSwgbmFtZTogJ0N1cnJlbnRVc2VyUmVmJyB9LFxyXG4gICAgICAgIF0pLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmF2RWxlbWVudHMkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcChlbGVtZW50cyA9PiBlbGVtZW50cy5tYXAoKHsgZWxlbWVudCB9KSA9PiBlbGVtZW50KSksXHJcbiAgICAgICAgZmlsdGVyKGVsZW1lbnRzID0+ICFjb21wYXJlKGVsZW1lbnRzLCB0aGlzLnJpZ2h0UGFydEVsZW1lbnRzKSksXHJcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveSh0aGlzKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKGVsZW1lbnRzID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnJpZ2h0UGFydEVsZW1lbnRzID0gZWxlbWVudHMpLCAwKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGVja1dpbmRvd1dpZHRoKCk7XHJcblxyXG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcyksIGRlYm91bmNlVGltZSgxNTApKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNoZWNrV2luZG93V2lkdGgoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcblxyXG4gIG9uQ2hhbmdlTGFuZyhjdWx0dXJlTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZXRMYW5ndWFnZShjdWx0dXJlTmFtZSkpO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIG5ldyBOYXZpZ2F0ZShbJy8nXSwgbnVsbCwge1xyXG4gICAgICAgICAgc3RhdGU6IHsgcmVkaXJlY3RVcmw6IHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoUm91dGVyU3RhdGUpLnN0YXRlLnVybCB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ2hhbmdlKGV2ZW50OiBib29sZWFuLCBjaGlsZHJlbkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIGlmICghZXZlbnQpIHtcclxuICAgICAgT2JqZWN0LmtleXMoY2hpbGRyZW5Db250YWluZXIuc3R5bGUpXHJcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gTnVtYmVyLmlzSW50ZWdlcigra2V5KSlcclxuICAgICAgICAuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShjaGlsZHJlbkNvbnRhaW5lciwgY2hpbGRyZW5Db250YWluZXIuc3R5bGVba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoY2hpbGRyZW5Db250YWluZXIsICdsZWZ0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWaXNpYmxlUm91dGVzKHJvdXRlczogQUJQLkZ1bGxSb3V0ZVtdKSB7XHJcbiAgcmV0dXJuIHJvdXRlcy5yZWR1Y2UoKGFjYywgdmFsKSA9PiB7XHJcbiAgICBpZiAodmFsLmludmlzaWJsZSkgcmV0dXJuIGFjYztcclxuXHJcbiAgICBpZiAodmFsLmNoaWxkcmVuICYmIHZhbC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgdmFsLmNoaWxkcmVuID0gZ2V0VmlzaWJsZVJvdXRlcyh2YWwuY2hpbGRyZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbLi4uYWNjLCB2YWxdO1xyXG4gIH0sIFtdKTtcclxufVxyXG4iXX0=