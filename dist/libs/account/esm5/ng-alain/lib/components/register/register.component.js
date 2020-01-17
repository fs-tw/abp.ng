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
import { AuthService } from '@abp/ng.core';
var UserRegisterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UserRegisterComponent, _super);
    function UserRegisterComponent(_fb, _accountService, _oauthService, _store, _toasterService, _authService) {
        var _this = _super.call(this, _fb, _accountService, _oauthService, _store, _toasterService, _authService) || this;
        _this._fb = _fb;
        _this._accountService = _accountService;
        _this._oauthService = _oauthService;
        _this._store = _store;
        _this._toasterService = _toasterService;
        _this._authService = _authService;
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
        { type: ToasterService },
        { type: AuthService }
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
    /**
     * @type {?}
     * @private
     */
    UserRegisterComponent.prototype._authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQWEsV0FBVyxFQUEyQixNQUFNLGdCQUFnQixDQUFDO0FBR2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUzQztJQUsyQyxpREFBaUI7SUFDeEQsK0JBQ1ksR0FBZ0IsRUFDaEIsZUFBK0IsRUFDL0IsYUFBMkIsRUFDM0IsTUFBYSxFQUNiLGVBQStCLEVBQy9CLFlBQXlCO1FBTnJDLFlBUUksa0JBQU0sR0FBRyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFDLGVBQWUsRUFBQyxZQUFZLENBQUMsU0FDcEY7UUFSYSxTQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLHFCQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixtQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixZQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IscUJBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLGtCQUFZLEdBQVosWUFBWSxDQUFhOztJQUd2QyxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDRsREFBd0M7O2lCQUV6Qzs7OztnQkFkbUIsV0FBVztnQkFLdEIsY0FBYztnQkFDZCxZQUFZO2dCQUNaLEtBQUs7Z0JBSEwsY0FBYztnQkFJZCxXQUFXOztJQWtCcEIsNEJBQUM7Q0FBQSxBQWhCRCxDQUsyQyxpQkFBaUIsR0FXM0Q7U0FYWSxxQkFBcUI7Ozs7OztJQUUxQixvQ0FBd0I7Ozs7O0lBQ3hCLGdEQUF1Qzs7Ozs7SUFDdkMsOENBQW1DOzs7OztJQUNuQyx1Q0FBcUI7Ozs7O0lBQ3JCLGdEQUF1Qzs7Ozs7SUFDdkMsNkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmcy1yZWdpc3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQubGVzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclJlZ2lzdGVyQ29tcG9uZW50IGV4dGVuZHMgUmVnaXN0ZXJDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2FjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9vYXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9zdG9yZTogU3RvcmUsXHJcbiAgICAgICAgcHJpdmF0ZSBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKF9mYiwgX2FjY291bnRTZXJ2aWNlLCBfb2F1dGhTZXJ2aWNlLCBfc3RvcmUsX3RvYXN0ZXJTZXJ2aWNlLF9hdXRoU2VydmljZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==