/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/nav-items/nav-items.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, TemplateRef, ViewChild, Input, } from '@angular/core';
import { takeUntilDestroy, SetLanguage, AuthService, ConfigState, SessionState, } from '@abp/ng.core';
import { LayoutState } from '../../states/layout.state';
import { Store, Select } from '@ngxs/store';
import { AddNavigationElement } from '../../actions/layout.actions';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Navigate, RouterState } from '@ngxs/router-plugin';
import snq from 'snq';
import compare from 'just-compare';
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
    tslib_1.__decorate([
        Select(LayoutState.getNavigationElements),
        tslib_1.__metadata("design:type", Observable)
    ], NavItemsComponent.prototype, "navElements$", void 0);
    tslib_1.__decorate([
        Select(ConfigState.getOne('currentUser')),
        tslib_1.__metadata("design:type", Observable)
    ], NavItemsComponent.prototype, "currentUser$", void 0);
    tslib_1.__decorate([
        Select(ConfigState.getDeep('localization.languages')),
        tslib_1.__metadata("design:type", Observable)
    ], NavItemsComponent.prototype, "languages$", void 0);
    return NavItemsComponent;
}());
export { NavItemsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuYmFzaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9uYXYtaXRlbXMvbmF2LWl0ZW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULFdBQVcsRUFDWCxTQUFTLEVBRVQsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLFdBQVcsRUFDWCxXQUFXLEVBRVgsWUFBWSxHQUNiLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxPQUFPLE1BQU0sY0FBYyxDQUFDO0FBRW5DO0lBcURFLDJCQUFvQixLQUFZLEVBQVUsV0FBd0I7UUFBOUMsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBOUJsRSxzQkFBaUIsR0FBdUIsRUFBRSxDQUFDO1FBRTNDLGNBQVM7Ozs7O1FBQW1DLFVBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSyxPQUFBLE9BQU8sRUFBUCxDQUFPLEVBQUM7SUE0QkMsQ0FBQztJQTFCdEUsc0JBQUksK0NBQWdCOzs7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OztJQTRCeEQsa0NBQW9COzs7OztJQUFFLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQUJQLFxyXG4gIHRha2VVbnRpbERlc3Ryb3ksXHJcbiAgU2V0TGFuZ3VhZ2UsXHJcbiAgQXV0aFNlcnZpY2UsXHJcbiAgQ29uZmlnU3RhdGUsXHJcbiAgQXBwbGljYXRpb25Db25maWd1cmF0aW9uLFxyXG4gIFNlc3Npb25TdGF0ZSxcclxufSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBMYXlvdXRTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlcy9sYXlvdXQuc3RhdGUnO1xyXG5pbXBvcnQgeyBTdG9yZSwgU2VsZWN0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBlTmF2aWdhdGlvbkVsZW1lbnROYW1lcyB9IGZyb20gJy4uLy4uL2VudW1zL25hdmlnYXRpb24tZWxlbWVudC1uYW1lcyc7XHJcbmltcG9ydCB7IEFkZE5hdmlnYXRpb25FbGVtZW50IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9sYXlvdXQuYWN0aW9ucyc7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uLy4uL21vZGVscy9sYXlvdXQnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZSwgUm91dGVyU3RhdGUgfSBmcm9tICdAbmd4cy9yb3V0ZXItcGx1Z2luJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgY29tcGFyZSBmcm9tICdqdXN0LWNvbXBhcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtbmF2LWl0ZW1zJyxcclxuICB0ZW1wbGF0ZVVybDogJ25hdi1pdGVtcy5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQFNlbGVjdChMYXlvdXRTdGF0ZS5nZXROYXZpZ2F0aW9uRWxlbWVudHMpXHJcbiAgbmF2RWxlbWVudHMkOiBPYnNlcnZhYmxlPExheW91dC5OYXZpZ2F0aW9uRWxlbWVudFtdPjtcclxuXHJcbiAgQFNlbGVjdChDb25maWdTdGF0ZS5nZXRPbmUoJ2N1cnJlbnRVc2VyJykpXHJcbiAgY3VycmVudFVzZXIkOiBPYnNlcnZhYmxlPEFwcGxpY2F0aW9uQ29uZmlndXJhdGlvbi5DdXJyZW50VXNlcj47XHJcblxyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0RGVlcCgnbG9jYWxpemF0aW9uLmxhbmd1YWdlcycpKVxyXG4gIGxhbmd1YWdlcyQ6IE9ic2VydmFibGU8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLkxhbmd1YWdlW10+O1xyXG5cclxuICBAVmlld0NoaWxkKCdjdXJyZW50VXNlcicsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBjdXJyZW50VXNlclJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbGFuZ3VhZ2UnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgbGFuZ3VhZ2VSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc21hbGxTY3JlZW46IGJvb2xlYW47XHJcblxyXG4gIHJpZ2h0UGFydEVsZW1lbnRzOiBUZW1wbGF0ZVJlZjxhbnk+W10gPSBbXTtcclxuXHJcbiAgdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248QUJQLkZ1bGxSb3V0ZT4gPSAoXywgZWxlbWVudCkgPT4gZWxlbWVudDtcclxuXHJcbiAgZ2V0IGRlZmF1bHRMYW5ndWFnZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcyQucGlwZShcclxuICAgICAgbWFwKFxyXG4gICAgICAgIGxhbmd1YWdlcyA9PlxyXG4gICAgICAgICAgc25xKFxyXG4gICAgICAgICAgICAoKSA9PiBsYW5ndWFnZXMuZmluZChsYW5nID0+IGxhbmcuY3VsdHVyZU5hbWUgPT09IHRoaXMuc2VsZWN0ZWRMYW5nQ3VsdHVyZSkuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICcnLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldCBkcm9wZG93bkxhbmd1YWdlcyQoKTogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24uTGFuZ3VhZ2VbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzJC5waXBlKFxyXG4gICAgICBtYXAoXHJcbiAgICAgICAgbGFuZ3VhZ2VzID0+XHJcbiAgICAgICAgICBzbnEoKCkgPT4gbGFuZ3VhZ2VzLmZpbHRlcihsYW5nID0+IGxhbmcuY3VsdHVyZU5hbWUgIT09IHRoaXMuc2VsZWN0ZWRMYW5nQ3VsdHVyZSkpLFxyXG4gICAgICAgIFtdLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZExhbmdDdWx0dXJlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0TGFuZ3VhZ2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9ucyA9IHRoaXMuc3RvcmVcclxuICAgICAgLnNlbGVjdFNuYXBzaG90KExheW91dFN0YXRlLmdldE5hdmlnYXRpb25FbGVtZW50cylcclxuICAgICAgLm1hcCgoeyBuYW1lIH0pID0+IG5hbWUpO1xyXG5cclxuICAgIGlmIChuYXZpZ2F0aW9ucy5pbmRleE9mKGVOYXZpZ2F0aW9uRWxlbWVudE5hbWVzLkxhbmd1YWdlKSA8IDApIHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICBuZXcgQWRkTmF2aWdhdGlvbkVsZW1lbnQoW1xyXG4gICAgICAgICAgeyBlbGVtZW50OiB0aGlzLmxhbmd1YWdlUmVmLCBvcmRlcjogNCwgbmFtZTogZU5hdmlnYXRpb25FbGVtZW50TmFtZXMuTGFuZ3VhZ2UgfSxcclxuICAgICAgICAgIHsgZWxlbWVudDogdGhpcy5jdXJyZW50VXNlclJlZiwgb3JkZXI6IDUsIG5hbWU6IGVOYXZpZ2F0aW9uRWxlbWVudE5hbWVzLlVzZXIgfSxcclxuICAgICAgICBdKSxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hdkVsZW1lbnRzJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoZWxlbWVudHMgPT4gZWxlbWVudHMubWFwKCh7IGVsZW1lbnQgfSkgPT4gZWxlbWVudCkpLFxyXG4gICAgICAgIGZpbHRlcihlbGVtZW50cyA9PiAhY29tcGFyZShlbGVtZW50cywgdGhpcy5yaWdodFBhcnRFbGVtZW50cykpLFxyXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3kodGhpcyksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShlbGVtZW50cyA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5yaWdodFBhcnRFbGVtZW50cyA9IGVsZW1lbnRzKSwgMCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG5cclxuICBvbkNoYW5nZUxhbmcoY3VsdHVyZU5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2V0TGFuZ3VhZ2UoY3VsdHVyZU5hbWUpKTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICBuZXcgTmF2aWdhdGUoWycvJ10sIG51bGwsIHtcclxuICAgICAgICAgIHN0YXRlOiB7IHJlZGlyZWN0VXJsOiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFJvdXRlclN0YXRlKS5zdGF0ZS51cmwgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=