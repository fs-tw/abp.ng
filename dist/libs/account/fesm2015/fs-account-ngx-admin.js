import { AccountModule } from '@fs/account';
import { AuthService, PatchRouteByName, AddReplaceableComponent, CoreModule } from '@abp/ng.core';
import { Component, NgModule } from '@angular/core';
import { NgxAdminBasicModule } from '@fs/ngx-admin/basic';
import { FormBuilder } from '@angular/forms';
import { RegisterComponent as RegisterComponent$1, AccountService, LoginComponent as LoginComponent$1, TenantBoxComponent as TenantBoxComponent$1 } from '@abp/ng.account';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { ToasterService } from '@abp/ng.theme.shared';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/register/register.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RegisterComponent extends RegisterComponent$1 {
    /**
     * @param {?} _fb
     * @param {?} _accountService
     * @param {?} _oauthService
     * @param {?} _store
     * @param {?} _toasterService
     * @param {?} _authService
     */
    constructor(_fb, _accountService, _oauthService, _store, _toasterService, _authService) {
        super(_fb, _accountService, _oauthService, _store, _toasterService, _authService);
        this._fb = _fb;
        this._accountService = _accountService;
        this._oauthService = _oauthService;
        this._store = _store;
        this._toasterService = _toasterService;
        this._authService = _authService;
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
    { type: ToasterService },
    { type: AuthService }
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
    /**
     * @type {?}
     * @private
     */
    RegisterComponent.prototype._authService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/login/login.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginComponent extends LoginComponent$1 {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tenant-box/tenant-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TenantBoxComponent extends TenantBoxComponent$1 {
    /**
     * @param {?} _store
     * @param {?} _toasterService
     * @param {?} _accountService
     */
    constructor(_store, _toasterService, _accountService) {
        super(_store, _toasterService, _accountService);
        this._store = _store;
        this._toasterService = _toasterService;
        this._accountService = _accountService;
    }
}
TenantBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-admin-tenant-box',
                template: "<nb-card class=\"shadow-sm rounded mb-3 bg-light\" *ngIf=\"(currentTenant$ | async) || {} as currentTenant\">\r\n  <nb-card-body class=\"px-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <span style=\"font-size: 0.8em;\" class=\"text-uppercase text-muted\">{{\r\n          'AbpUiMultiTenancy::Tenant' | abpLocalization\r\n        }}</span\r\n        ><br />\r\n        <h6 class=\"m-0 d-inline-block\">\r\n          <span>\r\n            {{ currentTenant.name || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}\r\n          </span>\r\n        </h6>\r\n      </div>\r\n      <div class=\"col-auto\">\r\n        <a\r\n          id=\"AbpTenantSwitchLink\"\r\n          href=\"javascript:void(0);\"\r\n          class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n          (click)=\"onSwitch()\"\r\n          >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" size=\"md\">\r\n  <ng-template #abpHeader>\r\n    <h5>Switch Tenant</h5>\r\n  </ng-template>\r\n  <ng-template #abpBody>\r\n    <form (ngSubmit)=\"save()\">\r\n      <div class=\"mt-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</label>\r\n          <input [(ngModel)]=\"name\" type=\"text\" id=\"name\" name=\"tenant\" class=\"form-control\" autofocus />\r\n        </div>\r\n        <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n  <ng-template #abpFooter>\r\n    <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">\r\n      <i class=\"fa fa-check mr-1\"></i> <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\r\n    </button>\r\n  </ng-template>\r\n</abp-modal>\r\n"
            }] }
];
/** @nocollapse */
TenantBoxComponent.ctorParameters = () => [
    { type: Store },
    { type: ToasterService },
    { type: AccountService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantBoxComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    TenantBoxComponent.prototype._toasterService;
    /**
     * @type {?}
     * @private
     */
    TenantBoxComponent.prototype._accountService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/account-ngx-admin.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccountNgxAdminModule {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        store.dispatch(new PatchRouteByName('AbpAccount::Menu:Account', { layout: "account" /* account */ }));
        store.dispatch(new PatchRouteByName('AbpAccount::ManageYourProfile', { layout: "application" /* application */ }));
        store.dispatch(new AddReplaceableComponent({ component: LoginComponent, key: 'Account.LoginComponent' }));
        store.dispatch(new AddReplaceableComponent({ component: RegisterComponent, key: 'Account.RegisterComponent' }));
    }
}
AccountNgxAdminModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LoginComponent, RegisterComponent, TenantBoxComponent],
                entryComponents: [LoginComponent, RegisterComponent],
                imports: [
                    CoreModule,
                    NgxAdminBasicModule,
                    AccountModule
                ]
            },] }
];
/** @nocollapse */
AccountNgxAdminModule.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccountNgxAdminModule.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fs-account-ngx-admin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AccountNgxAdminModule, LoginComponent as ɵa, RegisterComponent as ɵb, TenantBoxComponent as ɵc };
//# sourceMappingURL=fs-account-ngx-admin.js.map
