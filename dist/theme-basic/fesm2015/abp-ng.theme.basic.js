import { ConfigState, SessionState, takeUntilDestroy, SetLanguage, AuthService, LazyLoadService, CoreModule } from '@abp/ng.core';
import { slideFromBottom, collapseWithMargin, ThemeSharedModule } from '@abp/ng.theme.shared';
import { Component, Injectable, Renderer2, ViewChild, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidationErrorComponent as ValidationErrorComponent$1, NgxValidateCoreModule } from '@ngx-validate/core';
import { Action, Selector, State, Store, Select, NgxsModule } from '@ngxs/store';
import { __decorate, __metadata } from 'tslib';
import { Navigate, RouterState } from '@ngxs/router-plugin';
import compare from 'just-compare';
import { fromEvent, Observable } from 'rxjs';
import { map, filter, debounceTime } from 'rxjs/operators';
import snq from 'snq';

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
                selector: 'abp-layout-account',
                template: `
    <router-outlet></router-outlet>
    <abp-confirmation></abp-confirmation>
    <abp-toast-container right="30px" bottom="30px"></abp-toast-container>
  `
            }] }
];
if (false) {
    /** @type {?} */
    AccountLayoutComponent.type;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/layout.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddNavigationElement {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
    }
}
AddNavigationElement.type = '[Layout] Add Navigation Element';
if (false) {
    /** @type {?} */
    AddNavigationElement.type;
    /** @type {?} */
    AddNavigationElement.prototype.payload;
}
class RemoveNavigationElementByName {
    /**
     * @param {?} name
     */
    constructor(name) {
        this.name = name;
    }
}
RemoveNavigationElementByName.type = '[Layout] Remove Navigation ElementByName';
if (false) {
    /** @type {?} */
    RemoveNavigationElementByName.type;
    /** @type {?} */
    RemoveNavigationElementByName.prototype.name;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/layout.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let LayoutState = class LayoutState {
    /**
     * @param {?} __0
     * @return {?}
     */
    static getNavigationElements({ navigationElements }) {
        return navigationElements;
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    layoutAddAction({ getState, patchState }, { payload = [] }) {
        let { navigationElements } = getState();
        if (!Array.isArray(payload)) {
            payload = [payload];
        }
        if (navigationElements.length) {
            payload = snq((/**
             * @return {?}
             */
            () => ((/** @type {?} */ (payload))).filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ name }) => navigationElements.findIndex((/**
             * @param {?} nav
             * @return {?}
             */
            nav => nav.name === name)) < 0))), []);
        }
        if (!payload.length)
            return;
        navigationElements = [...navigationElements, ...payload]
            .map((/**
         * @param {?} element
         * @return {?}
         */
        element => (Object.assign({}, element, { order: element.order || 99 }))))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order - b.order));
        return patchState({
            navigationElements,
        });
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    layoutRemoveAction({ getState, patchState }, { name }) {
        let { navigationElements } = getState();
        /** @type {?} */
        const index = navigationElements.findIndex((/**
         * @param {?} element
         * @return {?}
         */
        element => element.name === name));
        if (index > -1) {
            navigationElements = navigationElements.splice(index, 1);
        }
        return patchState({
            navigationElements,
        });
    }
};
LayoutState.decorators = [
    { type: Injectable }
];
__decorate([
    Action(AddNavigationElement),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, AddNavigationElement]),
    __metadata("design:returntype", void 0)
], LayoutState.prototype, "layoutAddAction", null);
__decorate([
    Action(RemoveNavigationElementByName),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, RemoveNavigationElementByName]),
    __metadata("design:returntype", void 0)
], LayoutState.prototype, "layoutRemoveAction", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], LayoutState, "getNavigationElements", null);
LayoutState = __decorate([
    State({
        name: 'LayoutState',
        defaults: (/** @type {?} */ ({ navigationElements: [] })),
    })
], LayoutState);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/application-layout/application-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApplicationLayoutComponent {
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
__decorate([
    Select(ConfigState.getOne('routes')),
    __metadata("design:type", Observable)
], ApplicationLayoutComponent.prototype, "routes$", void 0);
__decorate([
    Select(ConfigState.getOne('currentUser')),
    __metadata("design:type", Observable)
], ApplicationLayoutComponent.prototype, "currentUser$", void 0);
__decorate([
    Select(ConfigState.getDeep('localization.languages')),
    __metadata("design:type", Observable)
], ApplicationLayoutComponent.prototype, "languages$", void 0);
__decorate([
    Select(LayoutState.getNavigationElements),
    __metadata("design:type", Observable)
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
                selector: 'abp-layout-empty',
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
 * Generated from: lib/components/validation-error/validation-error.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidationErrorComponent extends ValidationErrorComponent$1 {
    /**
     * @return {?}
     */
    get abpErrors() {
        if (!this.errors || !this.errors.length)
            return [];
        return this.errors.map((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            if (!error.message)
                return error;
            /** @type {?} */
            const index = error.message.indexOf('[');
            if (index > -1) {
                return Object.assign({}, error, { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
            }
            return error;
        }));
    }
}
ValidationErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-validation-error',
                template: `
    <div class="invalid-feedback" *ngFor="let error of abpErrors; trackBy: trackByFn">
      {{ error.message | abpLocalization: error.interpoliteParams }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/styles.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var styles = `
.content-header-title {
    font-size: 24px;
}

.entry-row {
    margin-bottom: 15px;
}
#main-navbar-tools a.dropdown-toggle {
    text-decoration: none;
    color: #fff;
}
.navbar .dropdown-submenu {
    position: relative;
}
.navbar .dropdown-menu {
    margin: 0;
    padding: 0;
}
.navbar .dropdown-menu a {
    font-size: .9em;
    padding: 10px 15px;
    display: block;
    min-width: 210px;
    text-align: left;
    border-radius: 0.25rem;
    min-height: 44px;
}
.navbar .dropdown-submenu a::after {
    transform: rotate(-90deg);
    position: absolute;
    right: 16px;
    top: 18px;
}
.navbar .dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
}

.card-header .btn {
    padding: 2px 6px;
}
.card-header h5 {
    margin: 0;
}
.container > .card {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
@media screen and (min-width: 768px) {
    .navbar .dropdown:hover > .dropdown-menu {
        display: block;
    }

    .navbar .dropdown-submenu:hover > .dropdown-menu {
        display: block;
    }
}
.input-validation-error {
    border-color: #dc3545;
}
.field-validation-error {
    font-size: 0.8em;
}
.ui-table .ui-table-tbody > tr.empty-row > div.empty-row-content {
    border: 1px solid #c8c8c8;
  }
.abp-loading {
    background: rgba(0, 0, 0, 0.1);
}
.modal-backdrop {
background-color: rgba(0, 0, 0, 0.6);
}

.confirmation .confirmation-backdrop {
	 background: rgba(0, 0, 0, 0.7) !important;
}
 .confirmation .confirmation-dialog {
	 border: none;
	 border-radius: 10px;
	 background-color: #fff;
	 box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.5);
}
 .confirmation .confirmation-dialog .icon-container .icon {
	 stroke: #fff;
	 color: #fff;
}
 .confirmation .confirmation-dialog .icon-container.info .icon {
	 stroke: #2f96b4;
	 color: #2f96b4;
}
 .confirmation .confirmation-dialog .icon-container.success .icon {
	 stroke: #51a351;
	 color: #51a351;
}
 .confirmation .confirmation-dialog .icon-container.warning .icon {
	 stroke: #f89406;
	 color: #f89406;
}
 .confirmation .confirmation-dialog .icon-container.error .icon {
	 stroke: #bd362f;
	 color: #bd362f;
}
 .confirmation .confirmation-dialog .content .title {
	 color: #222;
}
 .confirmation .confirmation-dialog .content .message {
	 color: #777;
}
 .confirmation .confirmation-dialog .footer {
	 background: transparent;
}
 .confirmation .confirmation-dialog .footer .confirmation-button {
	 background-color: #eee;
	 color: #777;
}
 .confirmation .confirmation-dialog .footer .confirmation-button:hover, .confirmation .confirmation-dialog .footer .confirmation-button:focus, .confirmation .confirmation-dialog .footer .confirmation-button:active {
	 background-color: #bbb;
}
 .confirmation .confirmation-dialog .footer .confirmation-button--confirm {
	 background-color: #2f96b4;
	 color: #fff;
}
 .confirmation .confirmation-dialog .footer .confirmation-button--confirm:hover {
	 background-color: #2e819b;
}
.ui-table .pagination-wrapper {
    background-color: #f4f4f4;
    border: 1px solid #c8c8c8;
}
`;

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/initial.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitialService {
    /**
     * @param {?} lazyLoadService
     */
    constructor(lazyLoadService) {
        this.lazyLoadService = lazyLoadService;
        this.appendStyle().subscribe();
    }
    /**
     * @return {?}
     */
    appendStyle() {
        return this.lazyLoadService.load(null, 'style', styles, 'head', 'beforeend');
    }
}
InitialService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
InitialService.ctorParameters = () => [
    { type: LazyLoadService }
];
/** @nocollapse */ InitialService.ngInjectableDef = ɵɵdefineInjectable({ factory: function InitialService_Factory() { return new InitialService(ɵɵinject(LazyLoadService)); }, token: InitialService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.lazyLoadService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-basic.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
class ThemeBasicModule {
    /**
     * @param {?} initialService
     */
    constructor(initialService) {
        this.initialService = initialService;
    }
}
ThemeBasicModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...LAYOUTS, ValidationErrorComponent],
                imports: [
                    CoreModule,
                    ThemeSharedModule,
                    NgbCollapseModule,
                    NgbDropdownModule,
                    NgxValidateCoreModule,
                    NgxsModule.forFeature([LayoutState]),
                    NgxValidateCoreModule.forRoot({
                        targetSelector: '.form-group',
                        blueprints: {
                            email: 'AbpAccount::ThisFieldIsNotAValidEmailAddress.',
                            max: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            maxlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthoOf{0}[{{ requiredLength }}]',
                            min: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                            minlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                            required: 'AbpAccount::ThisFieldIsRequired.',
                            passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                        },
                        errorTemplate: ValidationErrorComponent,
                    }),
                ],
                exports: [...LAYOUTS],
                entryComponents: [...LAYOUTS, ValidationErrorComponent],
            },] }
];
/** @nocollapse */
ThemeBasicModule.ctorParameters = () => [
    { type: InitialService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeBasicModule.prototype.initialService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Layout;
(function (Layout) {
    /**
     * @record
     */
    function State() { }
    Layout.State = State;
    if (false) {
        /** @type {?} */
        State.prototype.navigationElements;
    }
    /**
     * @record
     */
    function NavigationElement() { }
    Layout.NavigationElement = NavigationElement;
    if (false) {
        /** @type {?} */
        NavigationElement.prototype.name;
        /** @type {?} */
        NavigationElement.prototype.element;
        /** @type {?|undefined} */
        NavigationElement.prototype.order;
    }
})(Layout || (Layout = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: abp-ng.theme.basic.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AccountLayoutComponent, AddNavigationElement, ApplicationLayoutComponent, EmptyLayoutComponent, LAYOUTS, LayoutState, RemoveNavigationElementByName, ThemeBasicModule, ValidationErrorComponent, ApplicationLayoutComponent as ɵa, LayoutState as ɵb, AccountLayoutComponent as ɵc, EmptyLayoutComponent as ɵd, ValidationErrorComponent as ɵe, LayoutState as ɵf, AddNavigationElement as ɵg, RemoveNavigationElementByName as ɵh, InitialService as ɵj };
//# sourceMappingURL=abp-ng.theme.basic.js.map
