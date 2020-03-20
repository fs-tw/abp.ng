/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth-wrapper/auth-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ConfigState, takeUntilDestroy } from '@abp/ng.core';
import { Component, Input, TemplateRef } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
export class AuthWrapperComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.enableLocalLogin = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store
            .select(ConfigState.getSetting('Abp.Account.EnableLocalLogin'))
            .pipe(takeUntilDestroy(this))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (value) {
                this.enableLocalLogin = value.toLowerCase() !== 'false';
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
AuthWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-auth-wrapper',
                template: "<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <ng-container *ngIf=\"isMultiTenancyEnabled$ | async\">\r\n      <abp-tenant-box\r\n        *abpReplaceableTemplate=\"{ componentKey: 'Account.TenantBoxComponent' }\"\r\n      ></abp-tenant-box>\r\n    </ng-container>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div\r\n        *ngIf=\"enableLocalLogin; else disableLocalLoginTemplate\"\r\n        class=\"card mt-3 shadow-sm rounded\"\r\n      >\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #disableLocalLoginTemplate>\r\n  <div class=\"alert alert-warning\">\r\n    <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r\n    {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r\n  </div>\r\n</ng-template>\r\n",
                exportAs: 'abpAuthWrapper'
            }] }
];
/** @nocollapse */
AuthWrapperComponent.ctorParameters = () => [
    { type: Store }
];
AuthWrapperComponent.propDecorators = {
    mainContentRef: [{ type: Input }],
    cancelContentRef: [{ type: Input }]
};
tslib_1.__decorate([
    Select(ConfigState.getDeep('multiTenancy.isEnabled')),
    tslib_1.__metadata("design:type", Observable)
], AuthWrapperComponent.prototype, "isMultiTenancyEnabled$", void 0);
if (false) {
    /** @type {?} */
    AuthWrapperComponent.prototype.mainContentRef;
    /** @type {?} */
    AuthWrapperComponent.prototype.cancelContentRef;
    /** @type {?} */
    AuthWrapperComponent.prototype.isMultiTenancyEnabled$;
    /** @type {?} */
    AuthWrapperComponent.prototype.enableLocalLogin;
    /**
     * @type {?}
     * @private
     */
    AuthWrapperComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgtd3JhcHBlci9hdXRoLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUWxDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFpQi9CLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBRmhDLHFCQUFnQixHQUFHLElBQUksQ0FBQztJQUVXLENBQUM7Ozs7SUFFcEMsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLO2FBQ1AsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQzthQUM5RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUIsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxDQUFDO2FBQ3pEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsV0FBVyxLQUFJLENBQUM7OztZQW5DakIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDBoQ0FBNEM7Z0JBQzVDLFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFSZ0IsS0FBSzs7OzZCQWVuQixLQUFLOytCQUdMLEtBQUs7O0FBSU47SUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO3NDQUM5QixVQUFVO29FQUFVOzs7SUFQNUMsOENBQzBDOztJQUUxQyxnREFDNEM7O0lBRTVDLHNEQUM0Qzs7SUFFNUMsZ0RBQXdCOzs7OztJQUVaLHFDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ1N0YXRlLCB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uLy4uL21vZGVscy9hY2NvdW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWF1dGgtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGgtd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgZXhwb3J0QXM6ICdhYnBBdXRoV3JhcHBlcicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoV3JhcHBlckNvbXBvbmVudFxyXG4gIGltcGxlbWVudHNcclxuICAgIEFjY291bnQuQXV0aFdyYXBwZXJDb21wb25lbnRJbnB1dHMsXHJcbiAgICBBY2NvdW50LkF1dGhXcmFwcGVyQ29tcG9uZW50T3V0cHV0cyxcclxuICAgIE9uSW5pdCxcclxuICAgIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICByZWFkb25seSBtYWluQ29udGVudFJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICByZWFkb25seSBjYW5jZWxDb250ZW50UmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAU2VsZWN0KENvbmZpZ1N0YXRlLmdldERlZXAoJ211bHRpVGVuYW5jeS5pc0VuYWJsZWQnKSlcclxuICBpc011bHRpVGVuYW5jeUVuYWJsZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICBlbmFibGVMb2NhbExvZ2luID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuc2VsZWN0KENvbmZpZ1N0YXRlLmdldFNldHRpbmcoJ0FicC5BY2NvdW50LkVuYWJsZUxvY2FsTG9naW4nKSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSlcclxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLmVuYWJsZUxvY2FsTG9naW4gPSB2YWx1ZS50b0xvd2VyQ2FzZSgpICE9PSAnZmFsc2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcbn1cclxuIl19