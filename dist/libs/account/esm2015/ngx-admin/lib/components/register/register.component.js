/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/register/register.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterComponent as AbpRegisterComponent } from '@abp/ng.account';
import { AccountService } from '@abp/ng.account';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { ToasterService } from '@abp/ng.theme.shared';
export class RegisterComponent extends AbpRegisterComponent {
    /**
     * @param {?} _fb
     * @param {?} _accountService
     * @param {?} _oauthService
     * @param {?} _store
     * @param {?} _toasterService
     */
    constructor(_fb, _accountService, _oauthService, _store, _toasterService) {
        super(_fb, _accountService, _oauthService, _store, _toasterService);
        this._fb = _fb;
        this._accountService = _accountService;
        this._oauthService = _oauthService;
        this._store = _store;
        this._toasterService = _toasterService;
    }
}
RegisterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-admin-register',
                template: "<ngx-admin-tenant-box></ngx-admin-tenant-box>\r\n<nb-card class=\"mt-3 shadow-sm rounded bg-light\">\r\n  <nb-card-body class=\"p-5\">\r\n    <h1 id=\"title\" class=\"title\">{{ 'AbpAccount::Register' | abpLocalization }}</h1>\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" novalidate aria-labelledby=\"title\">\r\n\r\n      <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"input-user-name\">\r\n          {{\r\n          'AbpAccount::UserName' | abpLocalization\r\n          }}\r\n        </label>\r\n        <input nbInput\r\n               formControlName=\"username\"\r\n               id=\"input-user-name\"\r\n               placeholder=\"username\"\r\n               autofocus\r\n               fullWidth\r\n               fieldSize=\"large\">\r\n      </div>\r\n\r\n      <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"input-email-address\">{{ 'AbpAccount::EmailAddress' | abpLocalization }}</label>\r\n        <input nbInput\r\n               type=\"email\"\r\n               formControlName=\"email\"\r\n               id=\"input-email-address\"\r\n               placeholder=\"Email address\"\r\n               fullWidth\r\n               fieldSize=\"large\">\r\n      </div>\r\n\r\n      <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"input-password\">{{ 'AbpAccount::Password' | abpLocalization }}<</label>\r\n        <input nbInput\r\n               formControlName=\"password\"\r\n               type=\"password\"\r\n               id=\"input-password\"\r\n               name=\"password\"\r\n               placeholder=\"Password\"\r\n               fullWidth\r\n               fieldSize=\"large\">\r\n      </div>\r\n\r\n      <button nbButton\r\n              fullWidth\r\n              status=\"primary\"\r\n              size=\"large\"\r\n              [disabled]=\"!form.valid\">\r\n        {{ 'AbpAccount::Register' | abpLocalization }}\r\n      </button>\r\n    </form>\r\n\r\n    <section class=\"another-action\" aria-label=\"Sign in\">\r\n      {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }} <a class=\"text-link\" routerLink=\"/account/login\">{{ 'AbpAccount::Login' | abpLocalization }}</a>\r\n    </section>\r\n\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"
            }] }
];
/** @nocollapse */
RegisterComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: AccountService },
    { type: OAuthService },
    { type: Store },
    { type: ToasterService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype._fb;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype._accountService;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype._oauthService;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype._toasterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQWEsV0FBVyxFQUEyQixNQUFNLGdCQUFnQixDQUFDO0FBR2pGLE9BQU8sRUFBRSxpQkFBaUIsSUFBSSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPdEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLG9CQUFvQjs7Ozs7Ozs7SUFDekQsWUFDVSxHQUFnQixFQUNoQixlQUErQixFQUMvQixhQUEyQixFQUMzQixNQUFhLEVBQ2IsZUFBK0I7UUFFdkMsS0FBSyxDQUFDLEdBQUcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQTtRQU4zRCxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBR3pDLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QiwrdkVBQXdDO2FBRXpDOzs7O1lBYm1CLFdBQVc7WUFJdEIsY0FBYztZQUNkLFlBQVk7WUFDWixLQUFLO1lBQ0wsY0FBYzs7Ozs7OztJQVNuQixnQ0FBd0I7Ozs7O0lBQ3hCLDRDQUF1Qzs7Ozs7SUFDdkMsMENBQW1DOzs7OztJQUNuQyxtQ0FBcUI7Ozs7O0lBQ3JCLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgYXMgQWJwUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1hZG1pbi1yZWdpc3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBBYnBSZWdpc3RlckNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIF9hY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9vYXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcclxuICAgIHByaXZhdGUgX3N0b3JlOiBTdG9yZSxcclxuICAgIHByaXZhdGUgX3RvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcclxuICApIHtcclxuICAgIHN1cGVyKF9mYiwgX2FjY291bnRTZXJ2aWNlLCBfb2F1dGhTZXJ2aWNlLCBfc3RvcmUsIF90b2FzdGVyU2VydmljZSlcclxuICB9XHJcbn1cclxuIl19