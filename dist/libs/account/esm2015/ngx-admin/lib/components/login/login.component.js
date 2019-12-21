/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/login/login.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LoginComponent as AbpLoginComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
export class LoginComponent extends AbpLoginComponent {
    /**
     * @param {?} _fb
     * @param {?} _oauthService
     * @param {?} _store
     * @param {?} _toasterService
     * @param {?} _options
     */
    constructor(_fb, _oauthService, _store, _toasterService, _options) {
        super(_fb, _oauthService, _store, _toasterService, _options);
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-admin-login',
                template: "<ngx-admin-tenant-box></ngx-admin-tenant-box>\r\n\r\n<nb-card class=\"mt-3 shadow-sm rounded bg-light\">\r\n  <nb-card-body class=\"p-5\">\r\n    <h1 id=\"title\" class=\"title\">{{ 'AbpAccount::Login' | abpLocalization }}</h1>\r\n\r\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" novalidate aria-labelledby=\"title\">\r\n\r\n      <div class=\"form-control-group\">\r\n        <label class=\"label\" for=\"login-input-user-name-or-email-address\">\r\n          {{\r\n          'AbpAccount::UserNameOrEmailAddress' | abpLocalization\r\n          }}\r\n        </label>\r\n        <input nbInput\r\n               fullWidth\r\n               id=\"login-input-user-name-or-email-address\"\r\n               fieldSize=\"large\"\r\n               placeholder=\"username\"\r\n               formControlName=\"username\"\r\n               autofocus>\r\n      </div>\r\n\r\n      <div class=\"form-control-group\">\r\n        <span class=\"label-with-link\">\r\n          <label class=\"label\" for=\"login-input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label>\r\n        </span>\r\n        <input nbInput\r\n               fullWidth\r\n               formControlName=\"password\"\r\n               type=\"password\"\r\n               id=\"login-input-password\"\r\n               placeholder=\"Password\"\r\n               fieldSize=\"large\">\r\n      </div>\r\n\r\n      <div class=\"form-control-group accept-group\">\r\n        <nb-checkbox formControlName=\"remember\">{{ 'AbpAccount::RememberMe' | abpLocalization }}</nb-checkbox>\r\n      </div>\r\n\r\n      <button nbButton\r\n              fullWidth\r\n              status=\"primary\"\r\n              size=\"large\"\r\n              [disabled]=\"!form.valid\">\r\n        {{ 'AbpAccount::Login' | abpLocalization }}\r\n      </button>\r\n    </form>\r\n\r\n    <!-- <section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\r\n      or enter with:\r\n      <div class=\"socials\">\r\n        <ng-container *ngFor=\"let socialLink of socialLinks\">\r\n          <a *ngIf=\"socialLink.link\"\r\n             [routerLink]=\"socialLink.link\"\r\n             [attr.target]=\"socialLink.target\"\r\n             [attr.class]=\"socialLink.icon\"\r\n             [class.with-icon]=\"socialLink.icon\">\r\n            <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\r\n            <ng-template #title>{{ socialLink.title }}</ng-template>\r\n          </a>\r\n          <a *ngIf=\"socialLink.url\"\r\n             [attr.href]=\"socialLink.url\"\r\n             [attr.target]=\"socialLink.target\"\r\n             [attr.class]=\"socialLink.icon\"\r\n             [class.with-icon]=\"socialLink.icon\">\r\n            <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\r\n            <ng-template #title>{{ socialLink.title }}</ng-template>\r\n          </a>\r\n        </ng-container>\r\n      </div>\r\n    </section> -->\r\n\r\n    <section class=\"another-action\" aria-label=\"Register\">\r\n      {{ 'AbpAccount::AreYouANewUser' | abpLocalization }} <a class=\"text-link\" routerLink=\"/account/register\">{{ 'AbpAccount::Register' | abpLocalization }}</a>\r\n    </section>\r\n  </nb-card-body>\r\n</nb-card>\r\n"
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: OAuthService },
    { type: Store },
    { type: ToasterService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['ACCOUNT_OPTIONS',] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsSUFBSSxpQkFBaUIsRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBT25ELE1BQU0sT0FBTyxjQUFlLFNBQVEsaUJBQWlCOzs7Ozs7OztJQUVqRCxZQUNJLEdBQWdCLEVBQ2hCLGFBQTJCLEVBQzNCLE1BQWEsRUFDYixlQUErQixFQUNRLFFBQWlCO1FBRXhELEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7O1lBZEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDB2R0FBcUM7YUFDeEM7Ozs7WUFSUSxXQUFXO1lBRVgsWUFBWTtZQURaLEtBQUs7WUFITCxjQUFjOzRDQWtCZCxRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2luQ29tcG9uZW50IGFzIEFicExvZ2luQ29tcG9uZW50LCBPcHRpb25zIH0gZnJvbSAnQGFicC9uZy5hY2NvdW50JztcclxuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJ2FuZ3VsYXItb2F1dGgyLW9pZGMnO1xyXG5pbXBvcnQgeyBOYkxvZ2luQ29tcG9uZW50IH0gZnJvbSAnQG5lYnVsYXIvYXV0aCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWFkbWluLWxvZ2luJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGV4dGVuZHMgQWJwTG9naW5Db21wb25lbnQgIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIF9vYXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcclxuICAgICAgICBfc3RvcmU6IFN0b3JlLFxyXG4gICAgICAgIF90b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdCgnQUNDT1VOVF9PUFRJT05TJykgX29wdGlvbnM6IE9wdGlvbnMsXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihfZmIsIF9vYXV0aFNlcnZpY2UsIF9zdG9yZSwgX3RvYXN0ZXJTZXJ2aWNlLCBfb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==