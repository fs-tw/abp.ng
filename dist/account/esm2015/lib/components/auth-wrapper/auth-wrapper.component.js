/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth-wrapper/auth-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ConfigState, takeUntilDestroy } from '@abp/ng.core';
import { Component, Input, TemplateRef } from '@angular/core';
import { Store } from '@ngxs/store';
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
                template: "<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <abp-tenant-box\r\n      *abpReplaceableTemplate=\"{ componentKey: 'Account.TenantBoxComponent' }\"\r\n    ></abp-tenant-box>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div\r\n        *ngIf=\"enableLocalLogin; else disableLocalLoginTemplate\"\r\n        class=\"card mt-3 shadow-sm rounded\"\r\n      >\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #disableLocalLoginTemplate>\r\n  <div class=\"alert alert-warning\">\r\n    <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r\n    {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r\n  </div>\r\n</ng-template>\r\n",
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
if (false) {
    /** @type {?} */
    AuthWrapperComponent.prototype.mainContentRef;
    /** @type {?} */
    AuthWrapperComponent.prototype.cancelContentRef;
    /** @type {?} */
    AuthWrapperComponent.prototype.enableLocalLogin;
    /**
     * @type {?}
     * @private
     */
    AuthWrapperComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgtd3JhcHBlci9hdXRoLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFRcEMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQWMvQixZQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztRQUZoQyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFFVyxDQUFDOzs7O0lBRXBDLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSzthQUNQLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUM7YUFDOUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sQ0FBQzthQUN6RDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFdBQVcsS0FBSSxDQUFDOzs7WUFoQ2pCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw4N0JBQTRDO2dCQUM1QyxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBUFEsS0FBSzs7OzZCQWNYLEtBQUs7K0JBR0wsS0FBSzs7OztJQUhOLDhDQUMwQzs7SUFFMUMsZ0RBQzRDOztJQUU1QyxnREFBd0I7Ozs7O0lBRVoscUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnU3RhdGUsIHRha2VVbnRpbERlc3Ryb3kgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWNjb3VudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1hdXRoLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRoLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGV4cG9ydEFzOiAnYWJwQXV0aFdyYXBwZXInLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFdyYXBwZXJDb21wb25lbnRcclxuICBpbXBsZW1lbnRzXHJcbiAgICBBY2NvdW50LkF1dGhXcmFwcGVyQ29tcG9uZW50SW5wdXRzLFxyXG4gICAgQWNjb3VudC5BdXRoV3JhcHBlckNvbXBvbmVudE91dHB1dHMsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgbWFpbkNvbnRlbnRSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgY2FuY2VsQ29udGVudFJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgZW5hYmxlTG9jYWxMb2dpbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLnNlbGVjdChDb25maWdTdGF0ZS5nZXRTZXR0aW5nKCdBYnAuQWNjb3VudC5FbmFibGVMb2NhbExvZ2luJykpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpXHJcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5lbmFibGVMb2NhbExvZ2luID0gdmFsdWUudG9Mb3dlckNhc2UoKSAhPT0gJ2ZhbHNlJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG59XHJcbiJdfQ==