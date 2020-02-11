/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/login/login.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LoginComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '@abp/ng.core';
export class UserLoginComponent extends LoginComponent {
    /**
     * @param {?} _fb
     * @param {?} _oauthService
     * @param {?} _store
     * @param {?} _toasterService
     * @param {?} _authService
     */
    constructor(_fb, _oauthService, _store, _toasterService, _authService) {
        super(_fb, _oauthService, _store, _toasterService, _authService);
    }
}
UserLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-alain-login',
                template: "<ng-alain-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" role=\"form\">\r\n      <nz-tabset [nzAnimated]=\"false\" class=\"tabs\">\r\n        <nz-tab [nzTitle]=\"'AbpAccount::Login' | abpLocalization\">\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter mobile number!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"user\">\r\n                <input nz-input formControlName=\"username\" placeholder=\"{{'AbpAccount::UserNameOrEmailAddress' | abpLocalization}}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter password!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"lock\">\r\n                <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'AbpAccount::Password' | abpLocalization }}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n      <nz-form-item>\r\n        <nz-col [nzSpan]=\"12\">\r\n          <label nz-checkbox formControlName=\"remember\">{{ 'AbpAccount::RememberMe' | abpLocalization }}</label>\r\n        </nz-col>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"inProgress\" nzBlock>\r\n          {{ 'AbpAccount::Login' | abpLocalization }}\r\n        </button>\r\n      </nz-form-item>\r\n    </form>\r\n    <div class=\"other\">\r\n      <a class=\"register\" routerLink=\"/account/register\">{{ 'AbpAccount::Register' | abpLocalization }}</a>\r\n    </div>\r\n  </ng-template>\r\n</ng-alain-auth-wrapper>\r\n\r\n",
                styles: [":host{display:block;width:368px;margin:0 auto}:host ::ng-deep .ant-tabs .ant-tabs-bar{margin-bottom:24px;text-align:center;border-bottom:0}:host ::ng-deep .ant-tabs-tab{font-size:16px;line-height:24px}:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:34px}:host ::ng-deep .icon{margin-left:16px;color:rgba(0,0,0,.2);font-size:24px;vertical-align:middle;cursor:pointer;transition:color .3s}:host ::ng-deep .icon:hover{color:#1890ff}:host ::ng-deep .other{margin-top:24px;line-height:22px;text-align:left}:host ::ng-deep .other nz-tooltip{vertical-align:middle}:host ::ng-deep .other .register{float:right}"]
            }] }
];
/** @nocollapse */
UserLoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: OAuthService },
    { type: Store },
    { type: ToasterService },
    { type: AuthService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFXLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTzNDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxjQUFjOzs7Ozs7OztJQUVsRCxZQUNJLEdBQWdCLEVBQ2hCLGFBQTJCLEVBQzNCLE1BQWEsRUFDYixlQUErQixFQUMvQixZQUF5QjtRQUV6QixLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OztZQWZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixtNURBQXFDOzthQUV4Qzs7OztZQVRRLFdBQVc7WUFFWCxZQUFZO1lBRFosS0FBSztZQUhMLGNBQWM7WUFLZCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9naW5Db21wb25lbnQsIE9wdGlvbnMgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZy1hbGFpbi1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckxvZ2luQ29tcG9uZW50IGV4dGVuZHMgTG9naW5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgX29hdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLFxyXG4gICAgICAgIF9zdG9yZTogU3RvcmUsXHJcbiAgICAgICAgX3RvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcclxuICAgICAgICBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihfZmIsIF9vYXV0aFNlcnZpY2UsIF9zdG9yZSwgX3RvYXN0ZXJTZXJ2aWNlLCBfYXV0aFNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=