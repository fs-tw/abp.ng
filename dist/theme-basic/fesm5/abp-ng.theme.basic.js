import { __spread, __assign, __decorate, __metadata, __extends } from 'tslib';
import { takeUntilDestroy, AddReplaceableComponent, CONTENT_STRATEGY, DomInsertionService, ConfigState, SessionState, SetLanguage, AuthService, CoreModule } from '@abp/ng.core';
import { slideFromBottom, collapseWithMargin, ThemeSharedModule } from '@abp/ng.theme.shared';
import { Component, Injectable, ChangeDetectionStrategy, ViewEncapsulation, ɵɵdefineInjectable, ɵɵinject, Renderer2, Input, ViewChild, TemplateRef, NgModule } from '@angular/core';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidationErrorComponent as ValidationErrorComponent$1, NgxValidateCoreModule } from '@ngx-validate/core';
import { Store, Action, Selector, State, Select, NgxsModule } from '@ngxs/store';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';
import snq from 'snq';
import { Navigate, RouterState } from '@ngxs/router-plugin';
import compare from 'just-compare';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/account-layout/account-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccountLayoutComponent = /** @class */ (function () {
    function AccountLayoutComponent() {
    }
    // required for dynamic component
    AccountLayoutComponent.type = "account" /* account */;
    AccountLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-layout-account',
                    template: "\n    <router-outlet></router-outlet>\n    <abp-confirmation></abp-confirmation>\n    <abp-toast-container right=\"30px\" bottom=\"30px\"></abp-toast-container>\n  "
                }] }
    ];
    return AccountLayoutComponent;
}());
if (false) {
    /** @type {?} */
    AccountLayoutComponent.type;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/application-layout/application-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApplicationLayoutComponent = /** @class */ (function () {
    function ApplicationLayoutComponent(store) {
        this.store = store;
        this.isCollapsed = true;
        // do not set true or false
        this.logoComponentKey = "Theme.LogoComponent" /* Logo */;
        this.routesComponentKey = "Theme.RoutesComponent" /* Routes */;
        this.navItemsComponentKey = "Theme.NavItemsComponent" /* NavItems */;
    }
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
    // required for dynamic component
    ApplicationLayoutComponent.type = "application" /* application */;
    ApplicationLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-layout-application',
                    template: "<nav\r\n  class=\"navbar navbar-expand-lg navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4\"\r\n  id=\"main-navbar\"\r\n  style=\"min-height: 4rem;\"\r\n>\r\n  <div class=\"container\">\r\n    <abp-logo *abpReplaceableTemplate=\"{ componentKey: logoComponentKey }\"></abp-logo>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      (click)=\"isCollapsed = !isCollapsed\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [class.overflow-hidden]=\"smallScreen\" id=\"main-navbar-collapse\">\r\n      <ng-container *ngTemplateOutlet=\"!smallScreen ? navigations : null\"></ng-container>\r\n\r\n      <div *ngIf=\"smallScreen\" [@collapseWithMargin]=\"isCollapsed ? 'collapsed' : 'expanded'\">\r\n        <ng-container *ngTemplateOutlet=\"navigations\"></ng-container>\r\n      </div>\r\n\r\n      <ng-template #navigations>\r\n        <abp-routes\r\n          *abpReplaceableTemplate=\"{ componentKey: routesComponentKey }\"\r\n          class=\"mx-auto\"\r\n          [smallScreen]=\"smallScreen\"\r\n          [isDropdownChildDynamic]=\"isDropdownChildDynamic\"\r\n        ></abp-routes>\r\n\r\n        <abp-nav-items\r\n          *abpReplaceableTemplate=\"{ componentKey: navItemsComponentKey }\"\r\n          [smallScreen]=\"smallScreen\"\r\n        ></abp-nav-items>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div\r\n  [@slideFromBottom]=\"\r\n    outlet && outlet.isActivated && outlet.activatedRoute && outlet.activatedRoute.routeConfig.path\r\n  \"\r\n  class=\"container\"\r\n>\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n",
                    animations: [slideFromBottom, collapseWithMargin]
                }] }
    ];
    /** @nocollapse */
    ApplicationLayoutComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ApplicationLayoutComponent;
}());
if (false) {
    /** @type {?} */
    ApplicationLayoutComponent.type;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.isDropdownChildDynamic;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.isCollapsed;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.smallScreen;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.logoComponentKey;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.routesComponentKey;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.navItemsComponentKey;
    /**
     * @type {?}
     * @private
     */
    ApplicationLayoutComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/empty-layout/empty-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EmptyLayoutComponent = /** @class */ (function () {
    function EmptyLayoutComponent() {
    }
    EmptyLayoutComponent.type = "empty" /* empty */;
    EmptyLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-layout-empty',
                    template: "\n    <router-outlet></router-outlet>\n    <abp-confirmation></abp-confirmation>\n    <abp-toast-container right=\"30px\" bottom=\"30px\"></abp-toast-container>\n  "
                }] }
    ];
    return EmptyLayoutComponent;
}());
if (false) {
    /** @type {?} */
    EmptyLayoutComponent.type;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/layout.actions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddNavigationElement = /** @class */ (function () {
    function AddNavigationElement(payload) {
        this.payload = payload;
    }
    AddNavigationElement.type = '[Layout] Add Navigation Element';
    return AddNavigationElement;
}());
if (false) {
    /** @type {?} */
    AddNavigationElement.type;
    /** @type {?} */
    AddNavigationElement.prototype.payload;
}
var RemoveNavigationElementByName = /** @class */ (function () {
    function RemoveNavigationElementByName(name) {
        this.name = name;
    }
    RemoveNavigationElementByName.type = '[Layout] Remove Navigation ElementByName';
    return RemoveNavigationElementByName;
}());
if (false) {
    /** @type {?} */
    RemoveNavigationElementByName.type;
    /** @type {?} */
    RemoveNavigationElementByName.prototype.name;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/layout.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutState = /** @class */ (function () {
    function LayoutState() {
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    LayoutState.getNavigationElements = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var navigationElements = _a.navigationElements;
        return navigationElements;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    LayoutState.prototype.layoutAddAction = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var _c = _b.payload, payload = _c === void 0 ? [] : _c;
        var navigationElements = getState().navigationElements;
        if (!Array.isArray(payload)) {
            payload = [payload];
        }
        if (navigationElements.length) {
            payload = snq((/**
             * @return {?}
             */
            function () {
                return ((/** @type {?} */ (payload))).filter((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var name = _a.name;
                    return navigationElements.findIndex((/**
                     * @param {?} nav
                     * @return {?}
                     */
                    function (nav) { return nav.name === name; })) < 0;
                }));
            }), []);
        }
        if (!payload.length)
            return;
        navigationElements = __spread(navigationElements, payload).map((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return (__assign({}, element, { order: element.order || 99 })); }))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.order - b.order; }));
        return patchState({
            navigationElements: navigationElements,
        });
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    LayoutState.prototype.layoutRemoveAction = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var name = _b.name;
        var navigationElements = getState().navigationElements;
        /** @type {?} */
        var index = navigationElements.findIndex((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element.name === name; }));
        if (index > -1) {
            navigationElements = navigationElements.splice(index, 1);
        }
        return patchState({
            navigationElements: navigationElements,
        });
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
    return LayoutState;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/validation-error/validation-error.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidationErrorComponent = /** @class */ (function (_super) {
    __extends(ValidationErrorComponent, _super);
    function ValidationErrorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ValidationErrorComponent.prototype, "abpErrors", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.errors || !this.errors.length)
                return [];
            return this.errors.map((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                if (!error.message)
                    return error;
                /** @type {?} */
                var index = error.message.indexOf('[');
                if (index > -1) {
                    return __assign({}, error, { message: error.message.slice(0, index), interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(',') });
                }
                return error;
            }));
        },
        enumerable: true,
        configurable: true
    });
    ValidationErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-validation-error',
                    template: "\n    <div class=\"invalid-feedback\" *ngFor=\"let error of abpErrors; trackBy: trackByFn\">\n      {{ error.message | abpLocalization: error.interpoliteParams }}\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return ValidationErrorComponent;
}(ValidationErrorComponent$1));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants/styles.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var styles = "\n.content-header-title {\n    font-size: 24px;\n}\n\n.entry-row {\n    margin-bottom: 15px;\n}\n#main-navbar-tools a.dropdown-toggle {\n    text-decoration: none;\n    color: #fff;\n}\n.navbar .dropdown-submenu {\n    position: relative;\n}\n.navbar .dropdown-menu {\n    margin: 0;\n    padding: 0;\n}\n.navbar .dropdown-menu a {\n    font-size: .9em;\n    padding: 10px 15px;\n    display: block;\n    min-width: 210px;\n    text-align: left;\n    border-radius: 0.25rem;\n    min-height: 44px;\n}\n.navbar .dropdown-submenu a::after {\n    transform: rotate(-90deg);\n    position: absolute;\n    right: 16px;\n    top: 18px;\n}\n.navbar .dropdown-submenu .dropdown-menu {\n    top: 0;\n    left: 100%;\n}\n\n.card-header .btn {\n    padding: 2px 6px;\n}\n.card-header h5 {\n    margin: 0;\n}\n.container > .card {\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n@media screen and (min-width: 768px) {\n    .navbar .dropdown:hover > .dropdown-menu {\n        display: block;\n    }\n\n    .navbar .dropdown-submenu:hover > .dropdown-menu {\n        display: block;\n    }\n}\n.input-validation-error {\n    border-color: #dc3545;\n}\n.field-validation-error {\n    font-size: 0.8em;\n}\n.ui-table .ui-table-tbody > tr.empty-row > div.empty-row-content {\n    border: 1px solid #c8c8c8;\n  }\n.abp-loading {\n    background: rgba(0, 0, 0, 0.1);\n}\n.modal-backdrop {\nbackground-color: rgba(0, 0, 0, 0.6);\n}\n\n.confirmation .confirmation-backdrop {\n\t background: rgba(0, 0, 0, 0.7) !important;\n}\n .confirmation .confirmation-dialog {\n\t border: none;\n\t border-radius: 10px;\n\t background-color: #fff;\n\t box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.5);\n}\n .confirmation .confirmation-dialog .icon-container .icon {\n\t stroke: #fff;\n\t color: #fff;\n}\n .confirmation .confirmation-dialog .icon-container.info .icon {\n\t stroke: #2f96b4;\n\t color: #2f96b4;\n}\n .confirmation .confirmation-dialog .icon-container.success .icon {\n\t stroke: #51a351;\n\t color: #51a351;\n}\n .confirmation .confirmation-dialog .icon-container.warning .icon {\n\t stroke: #f89406;\n\t color: #f89406;\n}\n .confirmation .confirmation-dialog .icon-container.error .icon {\n\t stroke: #bd362f;\n\t color: #bd362f;\n}\n .confirmation .confirmation-dialog .content .title {\n\t color: #222;\n}\n .confirmation .confirmation-dialog .content .message {\n\t color: #777;\n}\n .confirmation .confirmation-dialog .footer {\n\t background: transparent;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button {\n\t background-color: #eee;\n\t color: #777;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button:hover, .confirmation .confirmation-dialog .footer .confirmation-button:focus, .confirmation .confirmation-dialog .footer .confirmation-button:active {\n\t background-color: #bbb;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button--confirm {\n\t background-color: #2f96b4;\n\t color: #fff;\n}\n .confirmation .confirmation-dialog .footer .confirmation-button--confirm:hover {\n\t background-color: #2e819b;\n}\n.ui-table .pagination-wrapper {\n    background-color: #f4f4f4;\n    border: 1px solid #c8c8c8;\n}\n";

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/initial.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InitialService = /** @class */ (function () {
    function InitialService(domInsertion, store) {
        this.domInsertion = domInsertion;
        this.store = store;
        this.appendStyle();
        this.store.dispatch([
            new AddReplaceableComponent({
                key: "Theme.ApplicationLayoutComponent" /* ApplicationLayout */,
                component: ApplicationLayoutComponent,
            }),
            new AddReplaceableComponent({
                key: "Theme.AccountLayoutComponent" /* AccountLayout */,
                component: AccountLayoutComponent,
            }),
            new AddReplaceableComponent({
                key: "Theme.EmptyLayoutComponent" /* EmptyLayout */,
                component: EmptyLayoutComponent,
            }),
        ]);
    }
    /**
     * @return {?}
     */
    InitialService.prototype.appendStyle = /**
     * @return {?}
     */
    function () {
        this.domInsertion.insertContent(CONTENT_STRATEGY.AppendStyleToHead(styles));
    };
    InitialService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    InitialService.ctorParameters = function () { return [
        { type: DomInsertionService },
        { type: Store }
    ]; };
    /** @nocollapse */ InitialService.ngInjectableDef = ɵɵdefineInjectable({ factory: function InitialService_Factory() { return new InitialService(ɵɵinject(DomInsertionService), ɵɵinject(Store)); }, token: InitialService, providedIn: "root" });
    return InitialService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.domInsertion;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/logo/logo.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent(store) {
        this.store = store;
    }
    Object.defineProperty(LogoComponent.prototype, "appInfo", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot(ConfigState.getApplicationInfo);
        },
        enumerable: true,
        configurable: true
    });
    LogoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-logo',
                    template: "\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <img\n        *ngIf=\"appInfo.logoUrl; else appName\"\n        [src]=\"appInfo.logoUrl\"\n        [alt]=\"appInfo.name\"\n        width=\"100%\"\n        height=\"auto\"\n      />\n    </a>\n\n    <ng-template #appName>\n      {{ appInfo.name }}\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    LogoComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return LogoComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LogoComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/routes/routes.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RoutesComponent = /** @class */ (function () {
    function RoutesComponent(renderer) {
        this.renderer = renderer;
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        function (_, item) { return item.name; });
    }
    Object.defineProperty(RoutesComponent.prototype, "visibleRoutes$", {
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
    /**
     * @param {?} event
     * @param {?} childrenContainer
     * @return {?}
     */
    RoutesComponent.prototype.openChange = /**
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
    RoutesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-routes',
                    template: "<ul class=\"navbar-nav\">\r\n  <ng-container\r\n    *ngFor=\"let route of visibleRoutes$ | async; trackBy: trackByFn\"\r\n    [ngTemplateOutlet]=\"route?.children?.length ? dropdownLink : defaultLink\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: route }\"\r\n  >\r\n  </ng-container>\r\n\r\n  <ng-template #defaultLink let-route>\r\n    <li class=\"nav-item\" *abpPermission=\"route.requiredPolicy\">\r\n      <a class=\"nav-link\" [routerLink]=\"[route.url]\"\r\n        ><i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n        {{ route.name | abpLocalization }}</a\r\n      >\r\n    </li>\r\n  </ng-template>\r\n\r\n  <ng-template #dropdownLink let-route>\r\n    <li\r\n      #navbarRootDropdown\r\n      *abpPermission=\"route.requiredPolicy\"\r\n      [abpVisibility]=\"routeContainer\"\r\n      class=\"nav-item dropdown\"\r\n      display=\"static\"\r\n      (click)=\"\r\n        navbarRootDropdown.expand\r\n          ? (navbarRootDropdown.expand = false)\r\n          : (navbarRootDropdown.expand = true)\r\n      \"\r\n    >\r\n      <a\r\n        class=\"nav-link dropdown-toggle\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n        href=\"javascript:void(0)\"\r\n      >\r\n        <i *ngIf=\"route.iconClass\" [ngClass]=\"route.iconClass\"></i>\r\n        {{ route.name | abpLocalization }}\r\n      </a>\r\n      <div\r\n        #routeContainer\r\n        class=\"dropdown-menu border-0 shadow-sm\"\r\n        (click)=\"$event.preventDefault(); $event.stopPropagation()\"\r\n        [class.d-block]=\"smallScreen && navbarRootDropdown.expand\"\r\n      >\r\n        <ng-template\r\n          #forTemplate\r\n          ngFor\r\n          [ngForOf]=\"route.children\"\r\n          [ngForTrackBy]=\"trackByFn\"\r\n          [ngForTemplate]=\"childWrapper\"\r\n        ></ng-template>\r\n      </div>\r\n    </li>\r\n  </ng-template>\r\n\r\n  <ng-template #childWrapper let-child>\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"child?.children?.length ? dropdownChild : defaultChild\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: child }\"\r\n    ></ng-template>\r\n  </ng-template>\r\n\r\n  <ng-template #defaultChild let-child>\r\n    <div class=\"dropdown-submenu\" *abpPermission=\"child.requiredPolicy\">\r\n      <a class=\"dropdown-item\" [routerLink]=\"[child.url]\">\r\n        <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n        {{ child.name | abpLocalization }}</a\r\n      >\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #dropdownChild let-child>\r\n    <div\r\n      [abpVisibility]=\"childrenContainer\"\r\n      class=\"dropdown-submenu\"\r\n      ngbDropdown\r\n      #dropdownSubmenu=\"ngbDropdown\"\r\n      [display]=\"isDropdownChildDynamic ? 'dynamic' : 'static'\"\r\n      placement=\"right-top\"\r\n      [autoClose]=\"true\"\r\n      *abpPermission=\"child.requiredPolicy\"\r\n      (openChange)=\"openChange($event, childrenContainer)\"\r\n    >\r\n      <div ngbDropdownToggle [class.dropdown-toggle]=\"false\">\r\n        <a\r\n          abpEllipsis=\"210px\"\r\n          [abpEllipsisEnabled]=\"isDropdownChildDynamic\"\r\n          role=\"button\"\r\n          class=\"btn d-block text-left dropdown-toggle\"\r\n        >\r\n          <i *ngIf=\"child.iconClass\" [ngClass]=\"child.iconClass\"></i>\r\n          {{ child.name | abpLocalization }}\r\n        </a>\r\n      </div>\r\n      <div\r\n        #childrenContainer\r\n        class=\"dropdown-menu border-0 shadow-sm\"\r\n        [class.d-block]=\"smallScreen && dropdownSubmenu.isOpen()\"\r\n      >\r\n        <ng-template\r\n          ngFor\r\n          [ngForOf]=\"child.children\"\r\n          [ngForTrackBy]=\"trackByFn\"\r\n          [ngForTemplate]=\"childWrapper\"\r\n        ></ng-template>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ul>\r\n"
                }] }
    ];
    /** @nocollapse */
    RoutesComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    RoutesComponent.propDecorators = {
        smallScreen: [{ type: Input }],
        isDropdownChildDynamic: [{ type: Input }]
    };
    __decorate([
        Select(ConfigState.getOne('routes')),
        __metadata("design:type", Observable)
    ], RoutesComponent.prototype, "routes$", void 0);
    return RoutesComponent;
}());
if (false) {
    /** @type {?} */
    RoutesComponent.prototype.routes$;
    /** @type {?} */
    RoutesComponent.prototype.smallScreen;
    /** @type {?} */
    RoutesComponent.prototype.isDropdownChildDynamic;
    /** @type {?} */
    RoutesComponent.prototype.trackByFn;
    /**
     * @type {?}
     * @private
     */
    RoutesComponent.prototype.renderer;
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
        return __spread(acc, [val]);
    }), []);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/nav-items/nav-items.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavItemsComponent = /** @class */ (function () {
    function NavItemsComponent(store, authService) {
        this.store = store;
        this.authService = authService;
        this.rightPartElements = [];
        this.trackByFn = (/**
         * @param {?} _
         * @param {?} element
         * @return {?}
         */
        function (_, element) { return element; });
    }
    Object.defineProperty(NavItemsComponent.prototype, "defaultLanguage$", {
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
    Object.defineProperty(NavItemsComponent.prototype, "dropdownLanguages$", {
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
    Object.defineProperty(NavItemsComponent.prototype, "selectedLangCulture", {
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
     * @return {?}
     */
    NavItemsComponent.prototype.ngAfterViewInit = /**
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
        if (navigations.indexOf("LanguageRef" /* Language */) < 0) {
            this.store.dispatch(new AddNavigationElement([
                { element: this.languageRef, order: 4, name: "LanguageRef" /* Language */ },
                { element: this.currentUserRef, order: 5, name: "CurrentUserRef" /* User */ },
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
    };
    /**
     * @return {?}
     */
    NavItemsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} cultureName
     * @return {?}
     */
    NavItemsComponent.prototype.onChangeLang = /**
     * @param {?} cultureName
     * @return {?}
     */
    function (cultureName) {
        this.store.dispatch(new SetLanguage(cultureName));
    };
    /**
     * @return {?}
     */
    NavItemsComponent.prototype.logout = /**
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
    NavItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-nav-items',
                    template: "<ul class=\"navbar-nav\">\r\n  <ng-container\r\n    *ngFor=\"let element of rightPartElements; trackBy: trackByFn\"\r\n    [ngTemplateOutlet]=\"element\"\r\n    [ngTemplateOutletContext]=\"{ smallScreen: smallScreen }\"\r\n  ></ng-container>\r\n</ul>\r\n\r\n<ng-template #language let-smallScreen=\"smallScreen\">\r\n  <li *ngIf=\"(dropdownLanguages$ | async)?.length > 0\" class=\"nav-item\">\r\n    <div class=\"dropdown\" ngbDropdown #languageDropdown=\"ngbDropdown\" display=\"static\">\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ defaultLanguage$ | async }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.d-block]=\"smallScreen && languageDropdown.isOpen()\"\r\n      >\r\n        <a\r\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\r\n          href=\"javascript:void(0)\"\r\n          class=\"dropdown-item\"\r\n          (click)=\"onChangeLang(lang.cultureName)\"\r\n          >{{ lang?.displayName }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n\r\n<ng-template #currentUser let-smallScreen=\"smallScreen\">\r\n  <li class=\"nav-item\">\r\n    <ng-template #loginBtn>\r\n      <a role=\"button\" class=\"nav-link\" routerLink=\"/account/login\">{{\r\n        'AbpAccount::Login' | abpLocalization\r\n      }}</a>\r\n    </ng-template>\r\n    <div\r\n      *ngIf=\"(currentUser$ | async)?.isAuthenticated; else loginBtn\"\r\n      ngbDropdown\r\n      class=\"dropdown\"\r\n      #currentUserDropdown=\"ngbDropdown\"\r\n      display=\"static\"\r\n    >\r\n      <a\r\n        ngbDropdownToggle\r\n        class=\"nav-link\"\r\n        href=\"javascript:void(0)\"\r\n        role=\"button\"\r\n        id=\"dropdownMenuLink\"\r\n        data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"false\"\r\n      >\r\n        {{ (currentUser$ | async)?.userName }}\r\n      </a>\r\n      <div\r\n        class=\"dropdown-menu dropdown-menu-right border-0 shadow-sm\"\r\n        aria-labelledby=\"dropdownMenuLink\"\r\n        [class.d-block]=\"smallScreen && currentUserDropdown.isOpen()\"\r\n      >\r\n        <a class=\"dropdown-item\" routerLink=\"/account/manage-profile\"\r\n          ><i class=\"fa fa-cog mr-1\"></i>{{ 'AbpAccount::ManageYourProfile' | abpLocalization }}</a\r\n        >\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"\r\n          ><i class=\"fa fa-power-off mr-1\"></i>{{ 'AbpUi::Logout' | abpLocalization }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ng-template>\r\n"
                }] }
    ];
    /** @nocollapse */
    NavItemsComponent.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    NavItemsComponent.propDecorators = {
        currentUserRef: [{ type: ViewChild, args: ['currentUser', { static: false, read: TemplateRef },] }],
        languageRef: [{ type: ViewChild, args: ['language', { static: false, read: TemplateRef },] }],
        smallScreen: [{ type: Input }]
    };
    __decorate([
        Select(LayoutState.getNavigationElements),
        __metadata("design:type", Observable)
    ], NavItemsComponent.prototype, "navElements$", void 0);
    __decorate([
        Select(ConfigState.getOne('currentUser')),
        __metadata("design:type", Observable)
    ], NavItemsComponent.prototype, "currentUser$", void 0);
    __decorate([
        Select(ConfigState.getDeep('localization.languages')),
        __metadata("design:type", Observable)
    ], NavItemsComponent.prototype, "languages$", void 0);
    return NavItemsComponent;
}());
if (false) {
    /** @type {?} */
    NavItemsComponent.prototype.navElements$;
    /** @type {?} */
    NavItemsComponent.prototype.currentUser$;
    /** @type {?} */
    NavItemsComponent.prototype.languages$;
    /** @type {?} */
    NavItemsComponent.prototype.currentUserRef;
    /** @type {?} */
    NavItemsComponent.prototype.languageRef;
    /** @type {?} */
    NavItemsComponent.prototype.smallScreen;
    /** @type {?} */
    NavItemsComponent.prototype.rightPartElements;
    /** @type {?} */
    NavItemsComponent.prototype.trackByFn;
    /**
     * @type {?}
     * @private
     */
    NavItemsComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    NavItemsComponent.prototype.authService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/theme-basic.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var LAYOUTS = [ApplicationLayoutComponent, AccountLayoutComponent, EmptyLayoutComponent];
var ThemeBasicModule = /** @class */ (function () {
    function ThemeBasicModule(initialService) {
        this.initialService = initialService;
    }
    ThemeBasicModule.decorators = [
        { type: NgModule, args: [{
                    declarations: __spread(LAYOUTS, [
                        ValidationErrorComponent,
                        LogoComponent,
                        NavItemsComponent,
                        RoutesComponent,
                    ]),
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
                                maxlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf{0}[{{ requiredLength }}]',
                                min: 'AbpAccount::ThisFieldMustBeBetween{0}And{1}[{{ min }},{{ max }}]',
                                minlength: 'AbpAccount::ThisFieldMustBeAStringOrArrayTypeWithAMinimumLengthOf{0}[{{ requiredLength }}]',
                                required: 'AbpAccount::ThisFieldIsRequired.',
                                passwordMismatch: 'AbpIdentity::Identity.PasswordConfirmationFailed',
                            },
                            errorTemplate: ValidationErrorComponent,
                        }),
                    ],
                    exports: __spread(LAYOUTS, [LogoComponent, ValidationErrorComponent]),
                    entryComponents: __spread(LAYOUTS, [ValidationErrorComponent]),
                },] }
    ];
    /** @nocollapse */
    ThemeBasicModule.ctorParameters = function () { return [
        { type: InitialService }
    ]; };
    return ThemeBasicModule;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeBasicModule.prototype.initialService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/actions/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/enums/components.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var eThemeBasicComponents = {
    ApplicationLayout: "Theme.ApplicationLayoutComponent",
    AccountLayout: "Theme.AccountLayoutComponent",
    EmptyLayout: "Theme.EmptyLayoutComponent",
    Logo: "Theme.LogoComponent",
    Routes: "Theme.RoutesComponent",
    NavItems: "Theme.NavItemsComponent",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/enums/navigation-element-names.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var eNavigationElementNames = {
    Language: "LanguageRef",
    User: "CurrentUserRef",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/enums/index.ts
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
 * Generated from: lib/services/layout-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutStateService = /** @class */ (function () {
    function LayoutStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    LayoutStateService.prototype.getNavigationElements = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(LayoutState.getNavigationElements);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LayoutStateService.prototype.dispatchAddNavigationElement = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (AddNavigationElement.bind.apply(AddNavigationElement, __spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LayoutStateService.prototype.dispatchRemoveNavigationElementByName = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (RemoveNavigationElementByName.bind.apply(RemoveNavigationElementByName, __spread([void 0], args)))());
    };
    LayoutStateService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LayoutStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ LayoutStateService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LayoutStateService_Factory() { return new LayoutStateService(ɵɵinject(Store)); }, token: LayoutStateService, providedIn: "root" });
    return LayoutStateService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayoutStateService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/index.ts
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

export { AccountLayoutComponent, AddNavigationElement, ApplicationLayoutComponent, EmptyLayoutComponent, InitialService, LAYOUTS, LayoutState, LayoutStateService, LogoComponent, NavItemsComponent, RemoveNavigationElementByName, RoutesComponent, ThemeBasicModule, ValidationErrorComponent, ApplicationLayoutComponent as ɵa, AccountLayoutComponent as ɵb, EmptyLayoutComponent as ɵc, ValidationErrorComponent as ɵd, LogoComponent as ɵe, NavItemsComponent as ɵf, LayoutState as ɵg, AddNavigationElement as ɵh, RemoveNavigationElementByName as ɵi, RoutesComponent as ɵk, InitialService as ɵl };
//# sourceMappingURL=abp-ng.theme.basic.js.map
