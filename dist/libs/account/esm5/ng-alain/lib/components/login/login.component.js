/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/login/login.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LoginComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
var UserLoginComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UserLoginComponent, _super);
    function UserLoginComponent(_fb, _oauthService, _store, _toasterService, _options) {
        return _super.call(this, _fb, _oauthService, _store, _toasterService, _options) || this;
    }
    UserLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-login',
                    template: "<ng-alain-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" role=\"form\">\r\n      <nz-tabset [nzAnimated]=\"false\" class=\"tabs\">\r\n        <nz-tab [nzTitle]=\"'AbpAccount::Login' | abpLocalization\">\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter mobile number!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"user\">\r\n                <input nz-input formControlName=\"username\" placeholder=\"{{'AbpAccount::UserNameOrEmailAddress' | abpLocalization}}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter password!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"lock\">\r\n                <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'AbpAccount::Password' | abpLocalization }}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n      <nz-form-item>\r\n        <nz-col [nzSpan]=\"12\">\r\n          <label nz-checkbox formControlName=\"remember\">{{ 'AbpAccount::RememberMe' | abpLocalization }}</label>\r\n        </nz-col>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"inProgress\" nzBlock>\r\n          {{ 'AbpAccount::Login' | abpLocalization }}\r\n        </button>\r\n      </nz-form-item>\r\n    </form>\r\n    <div class=\"other\">\r\n      <a class=\"register\" routerLink=\"/account/register\">{{ 'AbpAccount::Register' | abpLocalization }}</a>\r\n    </div>\r\n  </ng-template>\r\n</ng-alain-auth-wrapper>\r\n\r\n",
                    styles: [":host{display:block;width:368px;margin:0 auto}:host ::ng-deep .ant-tabs .ant-tabs-bar{margin-bottom:24px;text-align:center;border-bottom:0}:host ::ng-deep .ant-tabs-tab{font-size:16px;line-height:24px}:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:34px}:host ::ng-deep .icon{margin-left:16px;color:rgba(0,0,0,.2);font-size:24px;vertical-align:middle;cursor:pointer;-webkit-transition:color .3s;transition:color .3s}:host ::ng-deep .icon:hover{color:#1890ff}:host ::ng-deep .other{margin-top:24px;line-height:22px;text-align:left}:host ::ng-deep .other nz-tooltip{vertical-align:middle}:host ::ng-deep .other .register{float:right}"]
                }] }
    ];
    /** @nocollapse */
    UserLoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: OAuthService },
        { type: Store },
        { type: ToasterService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['ACCOUNT_OPTIONS',] }] }
    ]; };
    return UserLoginComponent;
}(LoginComponent));
export { UserLoginComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRW5EO0lBS3dDLDhDQUFjO0lBRWxELDRCQUNJLEdBQWdCLEVBQ2hCLGFBQTJCLEVBQzNCLE1BQWEsRUFDYixlQUErQixFQUNRLFFBQWlCO2VBRXhELGtCQUFNLEdBQUcsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUM7SUFDaEUsQ0FBQzs7Z0JBZkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLG01REFBcUM7O2lCQUV4Qzs7OztnQkFSUSxXQUFXO2dCQUVYLFlBQVk7Z0JBRFosS0FBSztnQkFITCxjQUFjO2dEQWtCZCxRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs7SUFLN0MseUJBQUM7Q0FBQSxBQWpCRCxDQUt3QyxjQUFjLEdBWXJEO1NBWlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9naW5Db21wb25lbnQsIE9wdGlvbnMgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmctYWxhaW4tbG9naW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJMb2dpbkNvbXBvbmVudCBleHRlbmRzIExvZ2luQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIF9vYXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcclxuICAgICAgICBfc3RvcmU6IFN0b3JlLFxyXG4gICAgICAgIF90b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdCgnQUNDT1VOVF9PUFRJT05TJykgX29wdGlvbnM6IE9wdGlvbnMsXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihfZmIsIF9vYXV0aFNlcnZpY2UsIF9zdG9yZSwgX3RvYXN0ZXJTZXJ2aWNlLCBfb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==