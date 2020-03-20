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
export class ApplicationLayoutComponent {
    /**
     * @param {?} store
     * @param {?} renderer
     * @param {?} authService
     */
    constructor(store, renderer, authService) {
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
        (_, item) => item.name);
        this.trackElementByFn = (/**
         * @param {?} _
         * @param {?} element
         * @return {?}
         */
        (_, element) => element);
    }
    // do not set true or false
    /**
     * @return {?}
     */
    get appInfo() {
        return this.store.selectSnapshot(ConfigState.getApplicationInfo);
    }
    /**
     * @return {?}
     */
    get visibleRoutes$() {
        return this.routes$.pipe(map((/**
         * @param {?} routes
         * @return {?}
         */
        routes => getVisibleRoutes(routes))));
    }
    /**
     * @return {?}
     */
    get defaultLanguage$() {
        return this.languages$.pipe(map((/**
         * @param {?} languages
         * @return {?}
         */
        languages => snq((/**
         * @return {?}
         */
        () => languages.find((/**
         * @param {?} lang
         * @return {?}
         */
        lang => lang.cultureName === this.selectedLangCulture)).displayName))), ''));
    }
    /**
     * @return {?}
     */
    get dropdownLanguages$() {
        return this.languages$.pipe(map((/**
         * @param {?} languages
         * @return {?}
         */
        languages => snq((/**
         * @return {?}
         */
        () => languages.filter((/**
         * @param {?} lang
         * @return {?}
         */
        lang => lang.cultureName !== this.selectedLangCulture))))), []));
    }
    /**
     * @return {?}
     */
    get selectedLangCulture() {
        return this.store.selectSnapshot(SessionState.getLanguage);
    }
    /**
     * @private
     * @return {?}
     */
    checkWindowWidth() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (window.innerWidth < 768) {
                this.isDropdownChildDynamic = false;
                if (this.smallScreen === false) {
                    this.isCollapsed = false;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.isCollapsed = true;
                    }), 100);
                }
                this.smallScreen = true;
            }
            else {
                this.isDropdownChildDynamic = true;
                this.smallScreen = false;
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const navigations = this.store
            .selectSnapshot(LayoutState.getNavigationElements)
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name }) => name));
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
        elements => elements.map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ element }) => element)))), filter((/**
         * @param {?} elements
         * @return {?}
         */
        elements => !compare(elements, this.rightPartElements))), takeUntilDestroy(this))
            .subscribe((/**
         * @param {?} elements
         * @return {?}
         */
        elements => {
            setTimeout((/**
             * @return {?}
             */
            () => (this.rightPartElements = elements)), 0);
        }));
        this.checkWindowWidth();
        fromEvent(window, 'resize')
            .pipe(takeUntilDestroy(this), debounceTime(150))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.checkWindowWidth();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @param {?} cultureName
     * @return {?}
     */
    onChangeLang(cultureName) {
        this.store.dispatch(new SetLanguage(cultureName));
    }
    /**
     * @return {?}
     */
    logout() {
        this.authService.logout().subscribe((/**
         * @return {?}
         */
        () => {
            this.store.dispatch(new Navigate(['/'], null, {
                state: { redirectUrl: this.store.selectSnapshot(RouterState).state.url },
            }));
        }));
    }
    /**
     * @param {?} event
     * @param {?} childrenContainer
     * @return {?}
     */
    openChange(event, childrenContainer) {
        if (!event) {
            Object.keys(childrenContainer.style)
                .filter((/**
             * @param {?} key
             * @return {?}
             */
            key => Number.isInteger(+key)))
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                this.renderer.removeStyle(childrenContainer, childrenContainer.style[key]);
            }));
            this.renderer.removeStyle(childrenContainer, 'left');
        }
    }
}
// required for dynamic component
ApplicationLayoutComponent.type = "application" /* application */;
ApplicationLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-layout-application',
                template: "<nav\r\n  class=\"navbar navbar-expand-lg navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4\"\r\n  id=\"main-navbar\"\r\n  style=\"min-height: 4rem;\"\r\n>\r\n  <div class=\"container \">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">\r\n      <img *ngIf=\"appInfo.logoUrl; else appName\" [src]=\"appInfo.logoUrl\" [alt]=\"appInfo.name\" />\r\n    </a>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      (click)=\"isCollapsed = !isCollapsed\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [class.overflow-hidden]=\"smallScreen\" id=\"main-navbar-collapse\">\r\n      <ng-container *ngTemplateOutlet=\"!smallScreen ? navigations : null\"></ng-container>\r\n\r\n      <div *ngIf=\"smallScreen\" [@collapseWithMargin]=\"isCollapsed ? 'collapsed' : 'expanded'\">\r\n        <ng-container *ngTemplateOutlet=\"navigations\"></ng-container>\r\n      </div>\r\n\r\n      <ng-template #navigations>\r\n        <ul class=\"navbar-nav mx-auto\">\r\n          <ng-container\r\n            *ngFor=\"let route of visibleRoutes$ | async; trackBy: trackByFn\"\r\n            [ngTemplateOutlet]=\"route?.children?.length ? dropdownLink : defaultLink\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: route }\"\r\n          >\r\n          </ng-container>\r\n\r\n          <ng-template #defaultLink let-route>\r\n            <li class=\"nav-item\" *abpPermission=\"route.requiredPolicy\">\r\n              <a class=\"nav-link\" [routerLink]=\"[route.url]\"\r\n                ><i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n                {{ route.name | abpLocalization }}</a\r\n              >\r\n            </li>\r\n          </ng-template>\r\n\r\n          <ng-template #dropdownLink let-route>\r\n            <li\r\n              #navbarRootDropdown\r\n              *abpPermission=\"route.requiredPolicy\"\r\n              [abpVisibility]=\"routeContainer\"\r\n              class=\"nav-item dropdown\"\r\n              display=\"static\"\r\n              (click)=\"\r\n                navbarRootDropdown.expand\r\n                  ? (navbarRootDropdown.expand = false)\r\n                  : (navbarRootDropdown.expand = true)\r\n              \"\r\n            >\r\n              <a\r\n                class=\"nav-link dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                aria-expanded=\"false\"\r\n                href=\"javascript:void(0)\"\r\n              >\r\n                <i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n                {{ route.name | abpLocalization }}\r\n              </a>\r\n              <div\r\n                #routeContainer\r\n                class=\"dropdown-menu border-0 shadow-sm\"\r\n                (click)=\"$event.preventDefault(); $event.stopPropagation()\"\r\n                [class.d-block]=\"smallScreen && navbarRootDropdown.expand\"\r\n              >\r\n                <ng-template\r\n                  #forTemplate\r\n                  ngFor\r\n                  [ngForOf]=\"route.children\"\r\n                  [ngForTrackBy]=\"trackByFn\"\r\n                  [ngForTemplate]=\"childWrapper\"\r\n                ></ng-template>\r\n              </div>\r\n            </li>\r\n          </ng-template>\r\n\r\n          <ng-template #childWrapper let-child>\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"child?.children?.length ? dropdownChild : defaultChild\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: child }\"\r\n            ></ng-template>\r\n          </ng-template>\r\n\r\n          <ng-template #defaultChild let-child>\r\n            <div class=\"dropdown-submenu\" *abpPermission=\"child.requiredPolicy\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"[child.url]\">\r\n                <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n                {{ child.name | abpLocalization }}</a\r\n              >\r\n            </div>\r\n          </ng-template>\r\n\r\n          <ng-template #dropdownChild let-child>\r\n            <div\r\n              [abpVisibility]=\"childrenContainer\"\r\n              class=\"dropdown-submenu\"\r\n              ngbDropdown\r\n              #dropdownSubmenu=\"ngbDropdown\"\r\n              [display]=\"isDropdownChildDynamic ? 'dynamic' : 'static'\"\r\n              placement=\"right-top\"\r\n              [autoClose]=\"true\"\r\n              *abpPermission=\"child.requiredPolicy\"\r\n              (openChange)=\"openChange($event, childrenContainer)\"\r\n            >\r\n              <div ngbDropdownToggle [class.dropdown-toggle]=\"false\">\r\n                <a\r\n                  abpEllipsis=\"210px\"\r\n                  [abpEllipsisEnabled]=\"isDropdownChildDynamic\"\r\n                  role=\"button\"\r\n                  class=\"btn d-block text-left dropdown-toggle\"\r\n                >\r\n                  <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n                  {{ child.name | abpLocalization }}\r\n                </a>\r\n              </div>\r\n              <div\r\n                #childrenContainer\r\n                class=\"dropdown-menu border-0 shadow-sm\"\r\n                [class.d-block]=\"smallScreen && dropdownSubmenu.isOpen()\"\r\n              >\r\n                <ng-template\r\n                  ngFor\r\n                  [ngForOf]=\"child.children\"\r\n                  [ngForTrackBy]=\"trackByFn\"\r\n                  [ngForTemplate]=\"childWrapper\"\r\n                ></ng-template>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ul>\r\n\r\n        <ul class=\"navbar-nav\">\r\n          <ng-container\r\n            *ngFor=\"let element of rightPartElements; trackBy: trackElementByFn\"\r\n            [ngTemplateOutlet]=\"element\"\r\n          ></ng-container>\r\n        </ul>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div\r\n  [@slideFromBottom]=\"\r\n    outlet && outlet.isActivated && outlet.activatedRoute && outlet.activatedRoute.routeConfig.path\r\n  \"\r\n  class=\"container\"\r\n>\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n\r\n<abp-confirmation></abp-confirmation>\r\n<abp-toast-container right=\"30px\" bottom=\"30px\"></abp-toast-container>\r\n\r\n<ng-template #appName>\r\n  {{ appInfo.name }}\r\n</ng-template>\r\n\r\n<ng-template #language>\r\n  <li *ngIf=\"(dropdownLanguages$ | async)?.length > 0\" class=\"nav-item\">\r\n    <div class=\"dropdown\" ngbDropdown #languageDropdown=\"ngbDropdown\" display=\"static\">\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ defaultLanguage$ | async }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.d-block]=\"smallScreen && languageDropdown.isOpen()\"\r\n      >\r\n        <a\r\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\r\n          href=\"javascript:void(0)\"\r\n          class=\"dropdown-item\"\r\n          (click)=\"onChangeLang(lang.cultureName)\"\r\n          >{{ lang?.displayName }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n\r\n<ng-template #currentUser>\r\n  <li *ngIf=\"(currentUser$ | async)?.isAuthenticated\" class=\"nav-item\">\r\n    <div ngbDropdown class=\"dropdown\" #currentUserDropdown=\"ngbDropdown\" display=\"static\">\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ (currentUser$ | async)?.userName }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.d-block]=\"smallScreen && currentUserDropdown.isOpen()\"\r\n      >\r\n        <a class=\"dropdown-item\" routerLink=\"/account/manage-profile\"\r\n          ><i class=\"fa fa-cog mr-1\"></i>{{ 'AbpAccount::ManageYourProfile' | abpLocalization }}</a\r\n        >\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"\r\n          ><i class=\"fa fa-power-off mr-1\"></i>{{ 'AbpUi::Logout' | abpLocalization }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n",
                animations: [slideFromBottom, collapseWithMargin]
            }] }
];
/** @nocollapse */
ApplicationLayoutComponent.ctorParameters = () => [
    { type: Store },
    { type: Renderer2 },
    { type: AuthService }
];
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
    (acc, val) => {
        if (val.invisible)
            return acc;
        if (val.children && val.children.length) {
            val.children = getVisibleRoutes(val.children);
        }
        return [...acc, val];
    }), []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuYmFzaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1sYXlvdXQvYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBR0wsV0FBVyxFQUVYLFdBQVcsRUFFWCxZQUFZLEVBQ1osV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUVMLFNBQVMsRUFFVCxTQUFTLEVBQ1QsV0FBVyxFQUVYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sT0FBTyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFPM0MsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBb0VyQyxZQUNVLEtBQVksRUFDWixRQUFtQixFQUNuQixXQUF3QjtRQUZ4QixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNu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LENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN2QyxHQUFHLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQztRQUVELE9BQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBQlAsXHJcbiAgQXBwbGljYXRpb25Db25maWd1cmF0aW9uLFxyXG4gIEF1dGhTZXJ2aWNlLFxyXG4gIENvbmZpZyxcclxuICBDb25maWdTdGF0ZSxcclxuICBlTGF5b3V0VHlwZSxcclxuICBTZXNzaW9uU3RhdGUsXHJcbiAgU2V0TGFuZ3VhZ2UsXHJcbiAgdGFrZVVudGlsRGVzdHJveSxcclxufSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBjb2xsYXBzZVdpdGhNYXJnaW4sIHNsaWRlRnJvbUJvdHRvbSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFRyYWNrQnlGdW5jdGlvbixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRlLCBSb3V0ZXJTdGF0ZSB9IGZyb20gJ0BuZ3hzL3JvdXRlci1wbHVnaW4nO1xyXG5pbXBvcnQgeyBTZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgY29tcGFyZSBmcm9tICdqdXN0LWNvbXBhcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBBZGROYXZpZ2F0aW9uRWxlbWVudCB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGF5b3V0JztcclxuaW1wb3J0IHsgTGF5b3V0U3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtbGF5b3V0LWFwcGxpY2F0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVGcm9tQm90dG9tLCBjb2xsYXBzZVdpdGhNYXJnaW5dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25MYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIHJlcXVpcmVkIGZvciBkeW5hbWljIGNvbXBvbmVudFxyXG4gIHN0YXRpYyB0eXBlID0gZUxheW91dFR5cGUuYXBwbGljYXRpb247XHJcblxyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdyb3V0ZXMnKSlcclxuICByb3V0ZXMkOiBPYnNlcnZhYmxlPEFCUC5GdWxsUm91dGVbXT47XHJcblxyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0T25lKCdjdXJyZW50VXNlcicpKVxyXG4gIGN1cnJlbnRVc2VyJDogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uQ3VycmVudFVzZXI+O1xyXG5cclxuICBAU2VsZWN0KENvbmZpZ1N0YXRlLmdldERlZXAoJ2xvY2FsaXphdGlvbi5sYW5ndWFnZXMnKSlcclxuICBsYW5ndWFnZXMkOiBPYnNlcnZhYmxlPEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5MYW5ndWFnZVtdPjtcclxuXHJcbiAgQFNlbGVjdChMYXlvdXRTdGF0ZS5nZXROYXZpZ2F0aW9uRWxlbWVudHMpXHJcbiAgbmF2RWxlbWVudHMkOiBPYnNlcnZhYmxlPExheW91dC5OYXZpZ2F0aW9uRWxlbWVudFtdPjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY3VycmVudFVzZXInLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgY3VycmVudFVzZXJSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2xhbmd1YWdlJywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIGxhbmd1YWdlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBpc0Ryb3Bkb3duQ2hpbGREeW5hbWljOiBib29sZWFuO1xyXG5cclxuICBpc0NvbGxhcHNlZCA9IHRydWU7XHJcblxyXG4gIHNtYWxsU2NyZWVuOiBib29sZWFuOyAvLyBkbyBub3Qgc2V0IHRydWUgb3IgZmFsc2VcclxuXHJcbiAgZ2V0IGFwcEluZm8oKTogQ29uZmlnLkFwcGxpY2F0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFwcGxpY2F0aW9uSW5mbyk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmlzaWJsZVJvdXRlcyQoKTogT2JzZXJ2YWJsZTxBQlAuRnVsbFJvdXRlW10+IHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlcyQucGlwZShtYXAocm91dGVzID0+IGdldFZpc2libGVSb3V0ZXMocm91dGVzKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRMYW5ndWFnZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcyQucGlwZShcclxuICAgICAgbWFwKFxyXG4gICAgICAgIGxhbmd1YWdlcyA9PlxyXG4gICAgICAgICAgc25xKFxyXG4gICAgICAgICAgICAoKSA9PiBsYW5ndWFnZXMuZmluZChsYW5nID0+IGxhbmcuY3VsdHVyZU5hbWUgPT09IHRoaXMuc2VsZWN0ZWRMYW5nQ3VsdHVyZSkuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICcnLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldCBkcm9wZG93bkxhbmd1YWdlcyQoKTogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uTGFuZ3VhZ2VbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzJC5waXBlKFxyXG4gICAgICBtYXAoXHJcbiAgICAgICAgbGFuZ3VhZ2VzID0+XHJcbiAgICAgICAgICBzbnEoKCkgPT4gbGFuZ3VhZ2VzLmZpbHRlcihsYW5nID0+IGxhbmcuY3VsdHVyZU5hbWUgIT09IHRoaXMuc2VsZWN0ZWRMYW5nQ3VsdHVyZSkpLFxyXG4gICAgICAgIFtdLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZExhbmdDdWx0dXJlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0TGFuZ3VhZ2UpO1xyXG4gIH1cclxuXHJcbiAgcmlnaHRQYXJ0RWxlbWVudHM6IFRlbXBsYXRlUmVmPGFueT5bXSA9IFtdO1xyXG5cclxuICB0cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxBQlAuRnVsbFJvdXRlPiA9IChfLCBpdGVtKSA9PiBpdGVtLm5hbWU7XHJcblxyXG4gIHRyYWNrRWxlbWVudEJ5Rm46IFRyYWNrQnlGdW5jdGlvbjxBQlAuRnVsbFJvdXRlPiA9IChfLCBlbGVtZW50KSA9PiBlbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIGNoZWNrV2luZG93V2lkdGgoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgdGhpcy5pc0Ryb3Bkb3duQ2hpbGREeW5hbWljID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuc21hbGxTY3JlZW4gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNtYWxsU2NyZWVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzRHJvcGRvd25DaGlsZER5bmFtaWMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc21hbGxTY3JlZW4gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9ucyA9IHRoaXMuc3RvcmVcclxuICAgICAgLnNlbGVjdFNuYXBzaG90KExheW91dFN0YXRlLmdldE5hdmlnYXRpb25FbGVtZW50cylcclxuICAgICAgLm1hcCgoeyBuYW1lIH0pID0+IG5hbWUpO1xyXG5cclxuICAgIGlmIChuYXZpZ2F0aW9ucy5pbmRleE9mKCdMYW5ndWFnZVJlZicpIDwgMCkge1xyXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIG5ldyBBZGROYXZpZ2F0aW9uRWxlbWVudChbXHJcbiAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMubGFuZ3VhZ2VSZWYsIG9yZGVyOiA0LCBuYW1lOiAnTGFuZ3VhZ2VSZWYnIH0sXHJcbiAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMuY3VycmVudFVzZXJSZWYsIG9yZGVyOiA1LCBuYW1lOiAnQ3VycmVudFVzZXJSZWYnIH0sXHJcbiAgICAgICAgXSksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uYXZFbGVtZW50cyRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKGVsZW1lbnRzID0+IGVsZW1lbnRzLm1hcCgoeyBlbGVtZW50IH0pID0+IGVsZW1lbnQpKSxcclxuICAgICAgICBmaWx0ZXIoZWxlbWVudHMgPT4gIWNvbXBhcmUoZWxlbWVudHMsIHRoaXMucmlnaHRQYXJ0RWxlbWVudHMpKSxcclxuICAgICAgICB0YWtlVW50aWxEZXN0cm95KHRoaXMpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoZWxlbWVudHMgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMucmlnaHRQYXJ0RWxlbWVudHMgPSBlbGVtZW50cyksIDApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNoZWNrV2luZG93V2lkdGgoKTtcclxuXHJcbiAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSwgZGVib3VuY2VUaW1lKDE1MCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tXaW5kb3dXaWR0aCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxuXHJcbiAgb25DaGFuZ2VMYW5nKGN1bHR1cmVOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNldExhbmd1YWdlKGN1bHR1cmVOYW1lKSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgbmV3IE5hdmlnYXRlKFsnLyddLCBudWxsLCB7XHJcbiAgICAgICAgICBzdGF0ZTogeyByZWRpcmVjdFVybDogdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChSb3V0ZXJTdGF0ZSkuc3RhdGUudXJsIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5DaGFuZ2UoZXZlbnQ6IGJvb2xlYW4sIGNoaWxkcmVuQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgaWYgKCFldmVudCkge1xyXG4gICAgICBPYmplY3Qua2V5cyhjaGlsZHJlbkNvbnRhaW5lci5zdHlsZSlcclxuICAgICAgICAuZmlsdGVyKGtleSA9PiBOdW1iZXIuaXNJbnRlZ2VyKCtrZXkpKVxyXG4gICAgICAgIC5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGNoaWxkcmVuQ29udGFpbmVyLCBjaGlsZHJlbkNvbnRhaW5lci5zdHlsZVtrZXldKTtcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShjaGlsZHJlbkNvbnRhaW5lciwgJ2xlZnQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZpc2libGVSb3V0ZXMocm91dGVzOiBBQlAuRnVsbFJvdXRlW10pIHtcclxuICByZXR1cm4gcm91dGVzLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgIGlmICh2YWwuaW52aXNpYmxlKSByZXR1cm4gYWNjO1xyXG5cclxuICAgIGlmICh2YWwuY2hpbGRyZW4gJiYgdmFsLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICB2YWwuY2hpbGRyZW4gPSBnZXRWaXNpYmxlUm91dGVzKHZhbC5jaGlsZHJlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFsuLi5hY2MsIHZhbF07XHJcbiAgfSwgW10pO1xyXG59XHJcbiJdfQ==