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
        this.tenantBoxKey = "Account.TenantBoxComponent" /* TenantBox */;
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
                template: "<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <ng-container *ngIf=\"isMultiTenancyEnabled$ | async\">\r\n      <abp-tenant-box *abpReplaceableTemplate=\"{ componentKey: tenantBoxKey }\"></abp-tenant-box>\r\n    </ng-container>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div\r\n        *ngIf=\"enableLocalLogin; else disableLocalLoginTemplate\"\r\n        class=\"card mt-3 shadow-sm rounded\"\r\n      >\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #disableLocalLoginTemplate>\r\n  <div class=\"alert alert-warning\">\r\n    <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r\n    {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r\n  </div>\r\n</ng-template>\r\n",
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
    /** @type {?} */
    AuthWrapperComponent.prototype.tenantBoxKey;
    /**
     * @type {?}
     * @private
     */
    AuthWrapperComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgtd3JhcHBlci9hdXRoLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBU2xDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFtQi9CLFlBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBSmhDLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUV4QixpQkFBWSxnREFBZ0M7SUFFVCxDQUFDOzs7O0lBRXBDLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSzthQUNQLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUM7YUFDOUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sQ0FBQzthQUN6RDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFdBQVcsS0FBSSxDQUFDOzs7WUFyQ2pCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixxL0JBQTRDO2dCQUM1QyxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBVGdCLEtBQUs7Ozs2QkFnQm5CLEtBQUs7K0JBR0wsS0FBSzs7QUFJTjtJQURDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7c0NBQzlCLFVBQVU7b0VBQVU7OztJQVA1Qyw4Q0FDMEM7O0lBRTFDLGdEQUM0Qzs7SUFFNUMsc0RBQzRDOztJQUU1QyxnREFBd0I7O0lBRXhCLDRDQUE0Qzs7Ozs7SUFFaEMscUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnU3RhdGUsIHRha2VVbnRpbERlc3Ryb3kgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FjY291bnQnO1xyXG5pbXBvcnQgeyBlQWNjb3VudENvbXBvbmVudHMgfSBmcm9tICcuLi8uLi9lbnVtcy9jb21wb25lbnRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWF1dGgtd3JhcHBlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGgtd3JhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgZXhwb3J0QXM6ICdhYnBBdXRoV3JhcHBlcicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoV3JhcHBlckNvbXBvbmVudFxyXG4gIGltcGxlbWVudHNcclxuICAgIEFjY291bnQuQXV0aFdyYXBwZXJDb21wb25lbnRJbnB1dHMsXHJcbiAgICBBY2NvdW50LkF1dGhXcmFwcGVyQ29tcG9uZW50T3V0cHV0cyxcclxuICAgIE9uSW5pdCxcclxuICAgIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICByZWFkb25seSBtYWluQ29udGVudFJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICByZWFkb25seSBjYW5jZWxDb250ZW50UmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAU2VsZWN0KENvbmZpZ1N0YXRlLmdldERlZXAoJ211bHRpVGVuYW5jeS5pc0VuYWJsZWQnKSlcclxuICBpc011bHRpVGVuYW5jeUVuYWJsZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICBlbmFibGVMb2NhbExvZ2luID0gdHJ1ZTtcclxuXHJcbiAgdGVuYW50Qm94S2V5ID0gZUFjY291bnRDb21wb25lbnRzLlRlbmFudEJveDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuc2VsZWN0KENvbmZpZ1N0YXRlLmdldFNldHRpbmcoJ0FicC5BY2NvdW50LkVuYWJsZUxvY2FsTG9naW4nKSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSlcclxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLmVuYWJsZUxvY2FsTG9naW4gPSB2YWx1ZS50b0xvd2VyQ2FzZSgpICE9PSAnZmFsc2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcbn1cclxuIl19