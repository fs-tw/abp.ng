/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/i18n.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ConfigState, SessionState, SetLanguage } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import snq from 'snq';
var HeaderI18nComponent = /** @class */ (function () {
    function HeaderI18nComponent(store) {
        this.store = store;
    }
    Object.defineProperty(HeaderI18nComponent.prototype, "selectedLangCulture", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot(SessionState.getLanguage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderI18nComponent.prototype, "defaultLanguage$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.languages$.pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            function (languages) { return snq((/**
             * @return {?}
             */
            function () { return languages.find((/**
             * @param {?} lang
             * @return {?}
             */
            function (lang) { return lang.cultureName === _this.selectedLangCulture; })).displayName; })); }), ''));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderI18nComponent.prototype, "dropdownLanguages$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.languages$.pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            function (languages) { return snq((/**
             * @return {?}
             */
            function () { return languages; }), []); })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} cultureName
     * @return {?}
     */
    HeaderI18nComponent.prototype.onChangeLang = /**
     * @param {?} cultureName
     * @return {?}
     */
    function (cultureName) {
        this.store.dispatch(new SetLanguage(cultureName));
    };
    HeaderI18nComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-i18n',
                    template: "\n    <div nz-dropdown [nzDropdownMenu]=\"langMenu\" nzPlacement=\"bottomRight\">\n      <i nz-icon nzType=\"global\"></i>\n      {{ defaultLanguage$ | async }}\n      <i nz-icon nzType=\"down\"></i>\n    </div>\n    <nz-dropdown-menu #langMenu=\"nzDropdownMenu\">\n      <ul nz-menu>\n        <li\n          nz-menu-item\n          *ngFor=\"let lang of dropdownLanguages$ | async\"\n          [nzSelected]=\"lang.cultureName === selectedLangCulture\"\n          (click)=\"onChangeLang(lang.cultureName)\"\n        >\n         <span role=\"img\" [attr.aria-label]=\"lang?.displayName\" class=\"pr-xs\">{{lang.cultureName}}</span>\n          {{ lang?.displayName }}\n        </li>\n      </ul>\n    </nz-dropdown-menu>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderI18nComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    tslib_1.__decorate([
        Select(ConfigState.getDeep('localization.languages')),
        tslib_1.__metadata("design:type", Observable)
    ], HeaderI18nComponent.prototype, "languages$", void 0);
    return HeaderI18nComponent;
}());
export { HeaderI18nComponent };
if (false) {
    /** @type {?} */
    HeaderI18nComponent.prototype.languages$;
    /**
     * @type {?}
     * @private
     */
    HeaderI18nComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvaTE4bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNbEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLFdBQVcsRUFBNEIsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFFdEI7SUF3Q0ksNkJBQ1ksS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFDckIsQ0FBQztJQWZKLHNCQUFJLG9EQUFtQjs7OztRQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9ELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksaURBQWdCOzs7O1FBQXBCO1lBQUEsaUJBSUM7WUFIRyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN2QixHQUFHOzs7O1lBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSSxDQUFDLG1CQUFtQixFQUE3QyxDQUE2QyxFQUFDLENBQUMsV0FBVyxFQUFqRixDQUFpRixFQUFDLEVBQTVGLENBQTRGLEdBQUUsRUFBRSxDQUFDLENBQ3JILENBQUM7UUFDTixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLG1EQUFrQjs7OztRQUF0QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3ZCLEdBQUc7Ozs7WUFBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxTQUFTLEVBQVQsQ0FBUyxHQUFFLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixFQUFDLENBQzdDLENBQUM7UUFDTixDQUFDOzs7T0FBQTs7Ozs7SUFJRCwwQ0FBWTs7OztJQUFaLFVBQWEsV0FBbUI7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkE3Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsbXRCQW1CWDtvQkFDQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDbEQ7Ozs7Z0JBN0JnQixLQUFLOztJQWdDbEI7UUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzBDQUMxQyxVQUFVOzJEQUFzQztJQW9CaEUsMEJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQXRCWSxtQkFBbUI7OztJQUM1Qix5Q0FDNEQ7Ozs7O0lBZXhELG9DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBJMThOU2VydmljZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbic7XHJcbmltcG9ydCB7IFNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlLCBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24sIFNlc3Npb25TdGF0ZSwgU2V0TGFuZ3VhZ2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2hlYWRlci1pMThuJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IG56LWRyb3Bkb3duIFtuekRyb3Bkb3duTWVudV09XCJsYW5nTWVudVwiIG56UGxhY2VtZW50PVwiYm90dG9tUmlnaHRcIj5cclxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJnbG9iYWxcIj48L2k+XHJcbiAgICAgIHt7IGRlZmF1bHRMYW5ndWFnZSQgfCBhc3luYyB9fVxyXG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIj48L2k+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuei1kcm9wZG93bi1tZW51ICNsYW5nTWVudT1cIm56RHJvcGRvd25NZW51XCI+XHJcbiAgICAgIDx1bCBuei1tZW51PlxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgbnotbWVudS1pdGVtXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgbGFuZyBvZiBkcm9wZG93bkxhbmd1YWdlcyQgfCBhc3luY1wiXHJcbiAgICAgICAgICBbbnpTZWxlY3RlZF09XCJsYW5nLmN1bHR1cmVOYW1lID09PSBzZWxlY3RlZExhbmdDdWx0dXJlXCJcclxuICAgICAgICAgIChjbGljayk9XCJvbkNoYW5nZUxhbmcobGFuZy5jdWx0dXJlTmFtZSlcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIFthdHRyLmFyaWEtbGFiZWxdPVwibGFuZz8uZGlzcGxheU5hbWVcIiBjbGFzcz1cInByLXhzXCI+e3tsYW5nLmN1bHR1cmVOYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICB7eyBsYW5nPy5kaXNwbGF5TmFtZSB9fVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L256LWRyb3Bkb3duLW1lbnU+XHJcbiAgYCxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVySTE4bkNvbXBvbmVudCB7XHJcbiAgICBAU2VsZWN0KENvbmZpZ1N0YXRlLmdldERlZXAoJ2xvY2FsaXphdGlvbi5sYW5ndWFnZXMnKSlcclxuICAgIGxhbmd1YWdlcyQ6IE9ic2VydmFibGU8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLkxhbmd1YWdlW10+O1xyXG4gICAgZ2V0IHNlbGVjdGVkTGFuZ0N1bHR1cmUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChTZXNzaW9uU3RhdGUuZ2V0TGFuZ3VhZ2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRlZmF1bHRMYW5ndWFnZSQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZXMkLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChsYW5ndWFnZXMgPT4gc25xKCgpID0+IGxhbmd1YWdlcy5maW5kKGxhbmcgPT4gbGFuZy5jdWx0dXJlTmFtZSA9PT0gdGhpcy5zZWxlY3RlZExhbmdDdWx0dXJlKS5kaXNwbGF5TmFtZSksICcnKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBnZXQgZHJvcGRvd25MYW5ndWFnZXMkKCk6IE9ic2VydmFibGU8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLkxhbmd1YWdlW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZXMkLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChsYW5ndWFnZXMgPT4gc25xKCgpID0+IGxhbmd1YWdlcywgW10pKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZVxyXG4gICAgKSB7fVxyXG4gICAgb25DaGFuZ2VMYW5nKGN1bHR1cmVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZXRMYW5ndWFnZShjdWx0dXJlTmFtZSkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==