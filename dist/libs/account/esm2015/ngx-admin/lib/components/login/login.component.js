/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/login/login.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LoginComponent as AbpLoginComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '@abp/ng.core';
export class LoginComponent extends AbpLoginComponent {
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
    { type: AuthService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL2FjY291bnQvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsSUFBSSxpQkFBaUIsRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU0zQyxNQUFNLE9BQU8sY0FBZSxTQUFRLGlCQUFpQjs7Ozs7Ozs7SUFFakQsWUFDSSxHQUFnQixFQUNoQixhQUEyQixFQUMzQixNQUFhLEVBQ2IsZUFBK0IsRUFDL0IsWUFBeUI7UUFFekIsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7WUFkSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMHZHQUFxQzthQUN4Qzs7OztZQVRRLFdBQVc7WUFFWCxZQUFZO1lBRFosS0FBSztZQUhMLGNBQWM7WUFNZCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9naW5Db21wb25lbnQgYXMgQWJwTG9naW5Db21wb25lbnQsIE9wdGlvbnMgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IE5iTG9naW5Db21wb25lbnQgfSBmcm9tICdAbmVidWxhci9hdXRoJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25neC1hZG1pbi1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBleHRlbmRzIEFicExvZ2luQ29tcG9uZW50ICB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgX2ZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBfb2F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgX3N0b3JlOiBTdG9yZSxcclxuICAgICAgICBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihfZmIsIF9vYXV0aFNlcnZpY2UsIF9zdG9yZSwgX3RvYXN0ZXJTZXJ2aWNlLCBfYXV0aFNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=