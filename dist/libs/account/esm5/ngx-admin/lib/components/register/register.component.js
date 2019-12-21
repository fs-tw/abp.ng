/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/register/register.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterComponent as AbpRegisterComponent } from '@abp/ng.account';
import { AccountService } from '@abp/ng.account';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { ToasterService } from '@abp/ng.theme.shared';
var RegisterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(RegisterComponent, _super);
    function RegisterComponent(_fb, _accountService, _oauthService, _store, _toasterService) {
        var _this = _super.call(this, _fb, _accountService, _oauthService, _store, _toasterService) || this;
        _this._fb = _fb;
        _this._accountService = _accountService;
        _this._oauthService = _oauthService;
        _this._store = _store;
        _this._toasterService = _toasterService;
        return _this;
    }
    RegisterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-admin-register',
                    template: "<ngx-admin-tenant-box></ngx-admin-tenant-box>\r\n<nb-card class=\"mt-3 shadow-sm rounded bg-light\">\r\n  <nb-card-body class=\"p-5\">\r\n    <h1 id=\"title\" class=\"title\">{{ 'AbpAccount::Register' | abpLocalization }}</h1>\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" novalidate aria-labelledby=\"title\">\r\n\r\n      <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"input-user-name\">\r\n          {{\r\n          'AbpAccount::UserName' | abpLocalization\r\n          }}\r\n        </label>\r\n        <input nbInput\r\n               formControlName=\"username\"\r\n               id=\"input-user-name\"\r\n               placeholder=\"username\"\r\n               autofocus\r\n               fullWidth\r\n               fieldSize=\"large\">\r\n      </div>\r\n\r\n      <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"input-email-address\">{{ 'AbpAccount::EmailAddress' | abpLocalization }}</label>\r\n        <input nbInput\r\n               type=\"email\"\r\n               formControlName=\"email\"\r\n               id=\"input-email-address\"\r\n               placeholder=\"Email address\"\r\n               fullWidth\r\n               fieldSize=\"large\">\r\n      </div>\r\n\r\n      <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"input-password\">{{ 'AbpAccount::Password' | abpLocalization }}<</label>\r\n        <input nbInput\r\n               formControlName=\"password\"\r\n               type=\"password\"\r\n               id=\"input-password\"\r\n               name=\"password\"\r\n               placeholder=\"Password\"\r\n               fullWidth\r\n               fieldSize=\"large\">\r\n      </div>\r\n\r\n      <button nbButton\r\n              fullWidth\r\n              status=\"primary\"\r\n              size=\"large\"\r\n              [disabled]=\"!form.valid\">\r\n        {{ 'AbpAccount::Register' | abpLocalization }}\r\n      </button>\r\n    </form>\r\n\r\n    <section class=\"another-action\" aria-label=\"Sign in\">\r\n      {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }} <a class=\"text-link\" routerLink=\"/account/login\">{{ 'AbpAccount::Login' | abpLocalization }}</a>\r\n    </section>\r\n\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n"
                }] }
    ];
    /** @nocollapse */
    RegisterComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: AccountService },
        { type: OAuthService },
        { type: Store },
        { type: ToasterService }
    ]; };
    return RegisterComponent;
}(AbpRegisterComponent));
export { RegisterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFhLFdBQVcsRUFBMkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRixPQUFPLEVBQUUsaUJBQWlCLElBQUksb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXREO0lBS3VDLDZDQUFvQjtJQUN6RCwyQkFDVSxHQUFnQixFQUNoQixlQUErQixFQUMvQixhQUEyQixFQUMzQixNQUFhLEVBQ2IsZUFBK0I7UUFMekMsWUFPRSxrQkFBTSxHQUFHLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLFNBQ3BFO1FBUFMsU0FBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixxQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsbUJBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsWUFBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLHFCQUFlLEdBQWYsZUFBZSxDQUFnQjs7SUFHekMsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLCt2RUFBd0M7aUJBRXpDOzs7O2dCQWJtQixXQUFXO2dCQUl0QixjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osS0FBSztnQkFDTCxjQUFjOztJQWlCdkIsd0JBQUM7Q0FBQSxBQWZELENBS3VDLG9CQUFvQixHQVUxRDtTQVZZLGlCQUFpQjs7Ozs7O0lBRTFCLGdDQUF3Qjs7Ozs7SUFDeEIsNENBQXVDOzs7OztJQUN2QywwQ0FBbUM7Ozs7O0lBQ25DLG1DQUFxQjs7Ozs7SUFDckIsNENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCBhcyBBYnBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5hY2NvdW50JztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWFkbWluLXJlZ2lzdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBleHRlbmRzIEFicFJlZ2lzdGVyQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgX2FjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcclxuICAgIHByaXZhdGUgX29hdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmU6IFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgc3VwZXIoX2ZiLCBfYWNjb3VudFNlcnZpY2UsIF9vYXV0aFNlcnZpY2UsIF9zdG9yZSwgX3RvYXN0ZXJTZXJ2aWNlKVxyXG4gIH1cclxufVxyXG4iXX0=