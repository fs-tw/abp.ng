/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/register/register.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { AccountService } from '@abp/ng.account';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
var UserRegisterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UserRegisterComponent, _super);
    function UserRegisterComponent(_fb, _accountService, _oauthService, _store, _toasterService) {
        var _this = _super.call(this, _fb, _accountService, _oauthService, _store, _toasterService) || this;
        _this._fb = _fb;
        _this._accountService = _accountService;
        _this._oauthService = _oauthService;
        _this._store = _store;
        _this._toasterService = _toasterService;
        return _this;
    }
    UserRegisterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fs-register',
                    template: "<ng-alain-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <h3>{{ 'AbpAccount::Register' | abpLocalization }}</h3>\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input formControlName=\"username\" placeholder=\"{{ 'AbpAccount::UserName' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input formControlName=\"email\" placeholder=\"{{ 'AbpAccount::EmailAddress' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'AbpAccount::Password' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <button nz-button nzType=\"primary\" nzSize=\"large\" type=\"submit\" [nzLoading]=\"inProgress\" class=\"submit\">\r\n          {{ 'AbpAccount::Register' | abpLocalization }}\r\n        </button>\r\n        <a class=\"login\" routerLink=\"/account/login\">{{ 'AbpAccount::Login' | abpLocalization }}</a>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n</ng-alain-auth-wrapper>\r\n\r\n",
                    styles: [":host{display:block;width:368px;margin:0 auto}:host ::ng-deep h3{margin-bottom:20px;font-size:16px}:host ::ng-deep .submit{width:50%}:host ::ng-deep .login{float:right;line-height:40px}::ng-deep .register-password-cdk .error,::ng-deep .register-password-cdk .success,::ng-deep .register-password-cdk .warning{-webkit-transition:color .3s;transition:color .3s}::ng-deep .register-password-cdk .success{color:#52c41a}::ng-deep .register-password-cdk .warning{color:#faad14}::ng-deep .register-password-cdk .error{color:#f5222d}::ng-deep .register-password-cdk .progress-pass>.progress .ant-progress-bg{background-color:#faad14}"]
                }] }
    ];
    /** @nocollapse */
    UserRegisterComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: AccountService },
        { type: OAuthService },
        { type: Store },
        { type: ToasterService }
    ]; };
    return UserRegisterComponent;
}(RegisterComponent));
export { UserRegisterComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserRegisterComponent.prototype._fb;
    /**
     * @type {?}
     * @private
     */
    UserRegisterComponent.prototype._accountService;
    /**
     * @type {?}
     * @private
     */
    UserRegisterComponent.prototype._oauthService;
    /**
     * @type {?}
     * @private
     */
    UserRegisterComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    UserRegisterComponent.prototype._toasterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQWEsV0FBVyxFQUEyQixNQUFNLGdCQUFnQixDQUFDO0FBR2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEM7SUFLMkMsaURBQWlCO0lBQ3hELCtCQUNZLEdBQWdCLEVBQ2hCLGVBQStCLEVBQy9CLGFBQTJCLEVBQzNCLE1BQWEsRUFDYixlQUErQjtRQUwzQyxZQU9JLGtCQUFNLEdBQUcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBQyxlQUFlLENBQUMsU0FDdkU7UUFQYSxTQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLHFCQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixtQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixZQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IscUJBQWUsR0FBZixlQUFlLENBQWdCOztJQUc3QyxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDRsREFBd0M7O2lCQUV6Qzs7OztnQkFibUIsV0FBVztnQkFLdEIsY0FBYztnQkFDZCxZQUFZO2dCQUNaLEtBQUs7Z0JBSEwsY0FBYzs7SUFvQnZCLDRCQUFDO0NBQUEsQUFmRCxDQUsyQyxpQkFBaUIsR0FVM0Q7U0FWWSxxQkFBcUI7Ozs7OztJQUUxQixvQ0FBd0I7Ozs7O0lBQ3hCLGdEQUF1Qzs7Ozs7SUFDdkMsOENBQW1DOzs7OztJQUNuQyx1Q0FBcUI7Ozs7O0lBQ3JCLGdEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZzLXJlZ2lzdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyUmVnaXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBSZWdpc3RlckNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX29hdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3N0b3JlOiBTdG9yZSxcclxuICAgICAgICBwcml2YXRlIF90b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihfZmIsIF9hY2NvdW50U2VydmljZSwgX29hdXRoU2VydmljZSwgX3N0b3JlLF90b2FzdGVyU2VydmljZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==