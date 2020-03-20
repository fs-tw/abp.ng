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
var AuthWrapperComponent = /** @class */ (function () {
    function AuthWrapperComponent(store) {
        this.store = store;
        this.enableLocalLogin = true;
    }
    /**
     * @return {?}
     */
    AuthWrapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.store
            .select(ConfigState.getSetting('Abp.Account.EnableLocalLogin'))
            .pipe(takeUntilDestroy(this))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.enableLocalLogin = value.toLowerCase() !== 'false';
            }
        }));
    };
    /**
     * @return {?}
     */
    AuthWrapperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    AuthWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-auth-wrapper',
                    template: "<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <ng-container *ngIf=\"isMultiTenancyEnabled$ | async\">\r\n      <abp-tenant-box\r\n        *abpReplaceableTemplate=\"{ componentKey: 'Account.TenantBoxComponent' }\"\r\n      ></abp-tenant-box>\r\n    </ng-container>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div\r\n        *ngIf=\"enableLocalLogin; else disableLocalLoginTemplate\"\r\n        class=\"card mt-3 shadow-sm rounded\"\r\n      >\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #disableLocalLoginTemplate>\r\n  <div class=\"alert alert-warning\">\r\n    <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r\n    {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r\n  </div>\r\n</ng-template>\r\n",
                    exportAs: 'abpAuthWrapper'
                }] }
    ];
    /** @nocollapse */
    AuthWrapperComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    AuthWrapperComponent.propDecorators = {
        mainContentRef: [{ type: Input }],
        cancelContentRef: [{ type: Input }]
    };
    tslib_1.__decorate([
        Select(ConfigState.getDeep('multiTenancy.isEnabled')),
        tslib_1.__metadata("design:type", Observable)
    ], AuthWrapperComponent.prototype, "isMultiTenancyEnabled$", void 0);
    return AuthWrapperComponent;
}());
export { AuthWrapperComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgtd3JhcHBlci9hdXRoLXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDO0lBc0JFLDhCQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztRQUZoQyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFFVyxDQUFDOzs7O0lBRXBDLHVDQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLEtBQUs7YUFDUCxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2FBQzlELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QixTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLENBQUM7YUFDekQ7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVgsY0FBZSxDQUFDOztnQkFuQ2pCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QiwwaENBQTRDO29CQUM1QyxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFSZ0IsS0FBSzs7O2lDQWVuQixLQUFLO21DQUdMLEtBQUs7O0lBSU47UUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzBDQUM5QixVQUFVO3dFQUFVO0lBa0I5QywyQkFBQztDQUFBLEFBcENELElBb0NDO1NBL0JZLG9CQUFvQjs7O0lBTS9CLDhDQUMwQzs7SUFFMUMsZ0RBQzRDOztJQUU1QyxzREFDNEM7O0lBRTVDLGdEQUF3Qjs7Ozs7SUFFWixxQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWdTdGF0ZSwgdGFrZVVudGlsRGVzdHJveSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYWNjb3VudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1hdXRoLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRoLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGV4cG9ydEFzOiAnYWJwQXV0aFdyYXBwZXInLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFdyYXBwZXJDb21wb25lbnRcclxuICBpbXBsZW1lbnRzXHJcbiAgICBBY2NvdW50LkF1dGhXcmFwcGVyQ29tcG9uZW50SW5wdXRzLFxyXG4gICAgQWNjb3VudC5BdXRoV3JhcHBlckNvbXBvbmVudE91dHB1dHMsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgbWFpbkNvbnRlbnRSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcmVhZG9ubHkgY2FuY2VsQ29udGVudFJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFNlbGVjdChDb25maWdTdGF0ZS5nZXREZWVwKCdtdWx0aVRlbmFuY3kuaXNFbmFibGVkJykpXHJcbiAgaXNNdWx0aVRlbmFuY3lFbmFibGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcbiAgZW5hYmxlTG9jYWxMb2dpbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3RvcmVcclxuICAgICAgLnNlbGVjdChDb25maWdTdGF0ZS5nZXRTZXR0aW5nKCdBYnAuQWNjb3VudC5FbmFibGVMb2NhbExvZ2luJykpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcykpXHJcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5lbmFibGVMb2NhbExvZ2luID0gdmFsdWUudG9Mb3dlckNhc2UoKSAhPT0gJ2ZhbHNlJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7fVxyXG59XHJcbiJdfQ==