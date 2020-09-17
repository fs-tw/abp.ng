import { __decorate, __metadata, __param } from 'tslib';
import { SessionState, RestService, AuthService, ConfigState, LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { Injectable, Component, Optional, Inject, Input, TemplateRef, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { LoginComponent, RegisterComponent, AccountService, PersonalSettingsComponent as PersonalSettingsComponent$1, ChangePasswordComponent as ChangePasswordComponent$1, TenantBoxComponent as TenantBoxComponent$1, AuthenticationFlowGuard, ACCOUNT_OPTIONS, AccountModule } from '@abp/ng.account';
import { ToasterService, fadeIn } from '@abp/ng.theme.shared';
import { FormBuilder } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { trigger, transition, useAnimation } from '@angular/animations';
import { Observable } from 'rxjs';
import { NgxValidateCoreModule } from '@ngx-validate/core';

class LoginDto {
}
let LoginService = class LoginService {
    constructor(restService, store) {
        this.restService = restService;
        this.store = store;
    }
    login(body) {
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        return this.restService.request({
            url: '/api/token/authenticate',
            method: 'POST',
            body,
            headers: Object.assign({}, (tenant && tenant.id && { __tenant: tenant.id }))
        });
    }
};
LoginService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [RestService,
        Store])
], LoginService);
// {
//   "userNameOrEmailAddress": "string",
//   "password": "string",
//   "rememberClient": true,
//   "tenanId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
// }

let UserLoginComponent = class UserLoginComponent extends LoginComponent {
    constructor(loginService, options, _fb, _oauthService, _store, _toasterService, _authService) {
        super(_fb, _oauthService, _store, _toasterService, _authService);
        this.loginService = loginService;
        this.options = options;
        this._store = _store;
        this._toasterService = _toasterService;
    }
};
UserLoginComponent = __decorate([
    Component({
        selector: 'ng-alain-login',
        template: "<ng-alain-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" role=\"form\">\r\n      <nz-tabset [nzAnimated]=\"false\" class=\"tabs\">\r\n        <nz-tab [nzTitle]=\"'AbpAccount::Login' | abpLocalization\">\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter mobile number!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"user\">\r\n                <input nz-input formControlName=\"username\" placeholder=\"{{'AbpAccount::UserNameOrEmailAddress' | abpLocalization}}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter password!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"lock\">\r\n                <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'AbpAccount::Password' | abpLocalization }}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n      <nz-form-item>\r\n        <nz-col [nzSpan]=\"12\">\r\n          <label nz-checkbox formControlName=\"remember\">{{ 'AbpAccount::RememberMe' | abpLocalization }}</label>\r\n        </nz-col>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"inProgress\" nzBlock>\r\n          {{ 'AbpAccount::Login' | abpLocalization }}\r\n        </button>\r\n      </nz-form-item>\r\n    </form>\r\n    <div class=\"other\">\r\n      <a class=\"register\" routerLink=\"/account/register\">{{ 'AbpAccount::Register' | abpLocalization }}</a>\r\n    </div>\r\n  </ng-template>\r\n</ng-alain-auth-wrapper>\r\n\r\n",
        styles: [":host{display:block;margin:0 auto;width:368px}:host ::ng-deep .ant-tabs .ant-tabs-bar{border-bottom:0;margin-bottom:24px;text-align:center}:host ::ng-deep .ant-tabs-tab{font-size:16px;line-height:24px}:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:34px}:host ::ng-deep .icon{color:rgba(0,0,0,.2);cursor:pointer;font-size:24px;margin-left:16px;transition:color .3s;vertical-align:middle}:host ::ng-deep .icon:hover{color:#1890ff}:host ::ng-deep .other{line-height:22px;margin-top:24px;text-align:left}:host ::ng-deep .other nz-tooltip{vertical-align:middle}:host ::ng-deep .other .register{float:right}"]
    }),
    __param(1, Optional()), __param(1, Inject('ACCOUNT_OPTIONS')),
    __metadata("design:paramtypes", [LoginService, Object, FormBuilder,
        OAuthService,
        Store,
        ToasterService,
        AuthService])
], UserLoginComponent);

let UserRegisterComponent = class UserRegisterComponent extends RegisterComponent {
    constructor(_fb, _accountService, _oauthService, _store, _toasterService, _authService) {
        super(_fb, _accountService, _oauthService, _store, _toasterService, _authService);
        this._fb = _fb;
        this._accountService = _accountService;
        this._oauthService = _oauthService;
        this._store = _store;
        this._toasterService = _toasterService;
        this._authService = _authService;
    }
};
UserRegisterComponent = __decorate([
    Component({
        selector: 'fs-register',
        template: "<ng-alain-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <h3>{{ 'AbpAccount::Register' | abpLocalization }}</h3>\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input formControlName=\"username\" placeholder=\"{{ 'AbpAccount::UserName' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input formControlName=\"email\" placeholder=\"{{ 'AbpAccount::EmailAddress' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\">\r\n            <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'AbpAccount::Password' | abpLocalization }}\" />\r\n          </nz-input-group>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <button nz-button nzType=\"primary\" nzSize=\"large\" type=\"submit\" [nzLoading]=\"inProgress\" class=\"submit\">\r\n          {{ 'AbpAccount::Register' | abpLocalization }}\r\n        </button>\r\n        <a class=\"login\" routerLink=\"/account/login\">{{ 'AbpAccount::Login' | abpLocalization }}</a>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n</ng-alain-auth-wrapper>\r\n\r\n",
        styles: [":host{display:block;margin:0 auto;width:368px}:host ::ng-deep h3{font-size:16px;margin-bottom:20px}:host ::ng-deep .submit{width:50%}:host ::ng-deep .login{float:right;line-height:40px}::ng-deep .register-password-cdk .error,::ng-deep .register-password-cdk .success,::ng-deep .register-password-cdk .warning{transition:color .3s}::ng-deep .register-password-cdk .success{color:#52c41a}::ng-deep .register-password-cdk .warning{color:#faad14}::ng-deep .register-password-cdk .error{color:#ff4d4f}::ng-deep .register-password-cdk .progress-pass>.progress .ant-progress-bg{background-color:#faad14}"]
    }),
    __metadata("design:paramtypes", [FormBuilder,
        AccountService,
        OAuthService,
        Store,
        ToasterService,
        AuthService])
], UserRegisterComponent);

let ManageProfileComponent = class ManageProfileComponent {
    constructor() {
        this.selectedTab = 0;
    }
};
ManageProfileComponent = __decorate([
    Component({
        selector: 'ng-alain-manage-profile',
        template: "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\"></div>\r\n  <div id=\"breadcrumb\" class=\"col-md-auto pl-md-0\"></div>\r\n  <div class=\"col\"></div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"menu\">\r\n    <ul nz-menu nzMode=\"inline\">\r\n      <li nz-menu-item [nzSelected]=\"selectedTab === 0\" (click)=\"selectedTab = 0\">\r\n        {{\r\n            'AbpUi::ChangePassword' | abpLocalization\r\n        }}\r\n      </li>\r\n      <li nz-menu-item [nzSelected]=\"selectedTab === 1\" (click)=\"selectedTab = 1\">\r\n        {{\r\n            'AbpAccount::PersonalSettings' | abpLocalization\r\n        }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"title\">{{ 'AbpAccount::ChangePassword' | abpLocalization }}</div>\r\n    <ng-alain-change-password-form *ngIf=\"selectedTab === 0\"></ng-alain-change-password-form>\r\n    <ng-alain-personal-settings-form *ngIf=\"selectedTab === 1\"></ng-alain-personal-settings-form>\r\n  </div>\r\n\r\n</div>\r\n",
        animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])],
        styles: [":host{display:block;padding-top:24px}.main{background-color:#fff;display:flex;overflow:auto;padding-bottom:16px;padding-top:16px;width:100%}.menu{border-right:1px solid #f0f0f0;width:224px}.menu ::ng-deep .ant-menu-inline{border:none}.menu ::ng-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content{flex:1;padding:8px 40px}.content .title{color:rgba(0,0,0,.85);font-size:20px;font-weight:500;line-height:28px;margin-bottom:12px}.content ::ng-deep .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content ::ng-deep .ant-list-item{padding-bottom:14px;padding-top:14px}@media screen and (max-width:767px){.main{flex-direction:column}.main .menu{border:none;width:100%}.main .content{padding:40px}}"]
    })
], ManageProfileComponent);

let PersonalSettingsComponent = class PersonalSettingsComponent extends PersonalSettingsComponent$1 {
    constructor(_fb, _store, _toasterService) {
        super(_fb, _store, _toasterService);
        this._fb = _fb;
        this._store = _store;
        this._toasterService = _toasterService;
    }
};
PersonalSettingsComponent = __decorate([
    Component({
        selector: 'ng-alain-personal-settings-form',
        template: "<form novalidate *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"userName\" id=\"username\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"name\" id=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"surname\" id=\"surname\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"email\" id=\"email-address\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"phoneNumber\" id=\"phone-number\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <button nz-button nzType=\"primary\">\r\n    {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n</form>\r\n\r\n\r\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [FormBuilder, Store, ToasterService])
], PersonalSettingsComponent);

let ChangePasswordComponent = class ChangePasswordComponent extends ChangePasswordComponent$1 {
    constructor(_fb, _store, _toasterService) {
        super(_fb, _store, _toasterService);
        this._fb = _fb;
        this._store = _store;
        this._toasterService = _toasterService;
    }
};
ChangePasswordComponent = __decorate([
    Component({
        selector: 'ng-alain-change-password-form',
        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\">\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"current-password\">{{ 'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"password\" id=\"current-password\" placeholder=\"{{'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization}}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"newPassword\" id=\"new-password\" placeholder=\"{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"confirm-new-password\">{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"repeatNewPassword\" id=\"confirm-new-password\" placeholder=\"{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <button nz-button nzType=\"primary\">\r\n    {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n\r\n</form>\r\n\r\n\r\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [FormBuilder, Store, ToasterService])
], ChangePasswordComponent);

let AuthWrapperComponent = class AuthWrapperComponent {
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], AuthWrapperComponent.prototype, "mainContentRef", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], AuthWrapperComponent.prototype, "cancelContentRef", void 0);
AuthWrapperComponent = __decorate([
    Component({
        selector: 'ng-alain-auth-wrapper',
        template: "<ng-alain-tenant-box [mainContentRef]=\"mainContentRef\">\r\n\r\n</ng-alain-tenant-box>\r\n\r\n<ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>"
    })
], AuthWrapperComponent);

let TenantBoxComponent = class TenantBoxComponent extends TenantBoxComponent$1 {
    constructor(_store, _toasterService, _accountService) {
        super(_store, _toasterService, _accountService);
        this._store = _store;
        this._toasterService = _toasterService;
        this._accountService = _accountService;
    }
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], TenantBoxComponent.prototype, "mainContentRef", void 0);
__decorate([
    Select(ConfigState.getDeep('multiTenancy.isEnabled')),
    __metadata("design:type", Observable)
], TenantBoxComponent.prototype, "isMultiTenancyEnabled$", void 0);
TenantBoxComponent = __decorate([
    Component({
        selector: 'ng-alain-tenant-box',
        template: "<nz-card [nzTitle]=\"cardTitle\" [nzExtra]=\"extraTemplate\">\r\n  <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n</nz-card>\r\n<ng-template #extraTemplate>\r\n  <a id=\"AbpTenantSwitchLink\" href=\"javascript:void(0);\" class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n    *ngIf=\"isMultiTenancyEnabled$ | async\" (click)=\"onSwitch()\">{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a>\r\n</ng-template>\r\n\r\n<ng-template #cardTitle>\r\n  <div *ngIf=\"(currentTenant$ | async) || {} as currentTenant\">\r\n    <span *ngIf=\"isMultiTenancyEnabled$ | async\">\r\n      {{'AbpUiMultiTenancy::Tenant' | abpLocalization}}\r\n      ({{ currentTenant.name || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }})\r\n    </span>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n<nz-modal [nzStyle]=\"{ top: '20px' }\" [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\"\r\n  [nzFooter]=\"modalFooter\" (nzOnCancel)=\"isModalVisible=false\">\r\n  <ng-template #modalTitle>\r\n    {{'AbpUiMultiTenancy::Tenant' | abpLocalization}}\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form (ngSubmit)=\"save()\">\r\n\r\n\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}\r\n        </nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\"\r\n          nzExtra=\"{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}\">\r\n          <input nz-input [(ngModel)]=\"name\" id=\"name\" name=\"name\" />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n      {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n      {{\r\n      'AbpTenantManagement::Save' | abpLocalization\r\n        }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>"
    }),
    __metadata("design:paramtypes", [Store,
        ToasterService,
        AccountService])
], TenantBoxComponent);

var AccountNgAlainModule_1;
function accountOptionsFactory(options) {
    return Object.assign({ redirectUrl: '/' }, options);
}
let AccountNgAlainModule = AccountNgAlainModule_1 = class AccountNgAlainModule {
    static forChild(options) {
        return {
            ngModule: AccountNgAlainModule_1,
            providers: [
                AuthenticationFlowGuard,
                { provide: ACCOUNT_OPTIONS, useValue: options },
                {
                    provide: 'ACCOUNT_OPTIONS',
                    useFactory: accountOptionsFactory,
                    deps: [ACCOUNT_OPTIONS],
                },
            ],
        };
    }
    static forLazy(options) {
        return new LazyModuleFactory(AccountNgAlainModule_1.forChild(options));
    }
};
AccountNgAlainModule = AccountNgAlainModule_1 = __decorate([
    NgModule({
        imports: [
            CoreModule,
            NgAlainBasicModule,
            NgxValidateCoreModule,
            AccountModule
        ],
        declarations: [
            AuthWrapperComponent,
            TenantBoxComponent,
            UserLoginComponent,
            UserRegisterComponent,
            ManageProfileComponent,
            PersonalSettingsComponent,
            ChangePasswordComponent
        ],
        entryComponents: [
            UserLoginComponent,
            UserRegisterComponent,
            ManageProfileComponent
        ],
        providers: [
            LoginService
        ]
    })
], AccountNgAlainModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AccountNgAlainModule, ManageProfileComponent, UserLoginComponent, UserRegisterComponent, accountOptionsFactory, AuthWrapperComponent as ɵa, TenantBoxComponent as ɵb, LoginService as ɵc, PersonalSettingsComponent as ɵd, ChangePasswordComponent as ɵe };
//# sourceMappingURL=fs-account-ng-alain.js.map
