import { AccountModule } from '@fs/account';
import { AuthGuard, CoreModule } from '@abp/ng.core';
import { Component, Optional, Inject, NgModule, Input } from '@angular/core';
import { LayoutDefaultComponent, LayoutPassportComponent, NgAlainBasicModule } from '@fs/ng-alain/basic';
import { RouterModule } from '@angular/router';
import { __extends } from 'tslib';
import { LoginComponent, AccountService, RegisterComponent, PersonalSettingsComponent as PersonalSettingsComponent$1, ChangePasswordComponent as ChangePasswordComponent$1, TenantBoxComponent as TenantBoxComponent$1 } from '@abp/ng.account';
import { ToasterService, fadeIn } from '@abp/ng.theme.shared';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { trigger, transition, useAnimation } from '@angular/animations';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/login/login.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserLoginComponent = /** @class */ (function (_super) {
    __extends(UserLoginComponent, _super);
    function UserLoginComponent(_fb, _oauthService, _store, _toasterService, _options) {
        return _super.call(this, _fb, _oauthService, _store, _toasterService, _options) || this;
    }
    UserLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-login',
                    template: "<ng-alain-auth-wrapper [mainContentRef]=\"mainContentRef\">\r\n  <ng-template #mainContentRef>\r\n    <form nz-form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" role=\"form\">\r\n      <nz-tabset [nzAnimated]=\"false\" class=\"tabs\">\r\n        <nz-tab [nzTitle]=\"'AbpAccount::Login' | abpLocalization\">\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter mobile number!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"user\">\r\n                <input nz-input formControlName=\"username\" placeholder=\"{{'AbpAccount::UserNameOrEmailAddress' | abpLocalization}}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzErrorTip]=\"'Please enter password!' | abpLocalization\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"lock\">\r\n                <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"{{ 'AbpAccount::Password' | abpLocalization }}\" />\r\n              </nz-input-group>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n      <nz-form-item>\r\n        <nz-col [nzSpan]=\"12\">\r\n          <label nz-checkbox formControlName=\"remember\">{{ 'AbpAccount::RememberMe' | abpLocalization }}</label>\r\n        </nz-col>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"inProgress\" nzBlock>\r\n          {{ 'AbpAccount::Login' | abpLocalization }}\r\n        </button>\r\n      </nz-form-item>\r\n    </form>\r\n    <div class=\"other\">\r\n      <a class=\"register\" routerLink=\"/account/register\">{{ 'AbpAccount::Register' | abpLocalization }}</a>\r\n    </div>\r\n  </ng-template>\r\n</ng-alain-auth-wrapper>\r\n\r\n",
                    styles: [":host{display:block;width:368px;margin:0 auto}:host ::ng-deep .ant-tabs .ant-tabs-bar{margin-bottom:24px;text-align:center;border-bottom:0}:host ::ng-deep .ant-tabs-tab{font-size:16px;line-height:24px}:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:34px}:host ::ng-deep .icon{margin-left:16px;color:rgba(0,0,0,.2);font-size:24px;vertical-align:middle;cursor:pointer;transition:color .3s}:host ::ng-deep .icon:hover{color:#1890ff}:host ::ng-deep .other{margin-top:24px;line-height:22px;text-align:left}:host ::ng-deep .other nz-tooltip{vertical-align:middle}:host ::ng-deep .other .register{float:right}"]
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/register/register.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserRegisterComponent = /** @class */ (function (_super) {
    __extends(UserRegisterComponent, _super);
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
                    styles: [":host{display:block;width:368px;margin:0 auto}:host ::ng-deep h3{margin-bottom:20px;font-size:16px}:host ::ng-deep .submit{width:50%}:host ::ng-deep .login{float:right;line-height:40px}::ng-deep .register-password-cdk .error,::ng-deep .register-password-cdk .success,::ng-deep .register-password-cdk .warning{transition:color .3s}::ng-deep .register-password-cdk .success{color:#52c41a}::ng-deep .register-password-cdk .warning{color:#faad14}::ng-deep .register-password-cdk .error{color:#f5222d}::ng-deep .register-password-cdk .progress-pass>.progress .ant-progress-bg{background-color:#faad14}"]
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/manage-profile/manage-profile.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ManageProfileComponent = /** @class */ (function () {
    function ManageProfileComponent() {
        this.selectedTab = 0;
    }
    ManageProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-manage-profile',
                    template: "<div class=\"row entry-row\">\r\n  <div class=\"col-auto\"></div>\r\n  <div id=\"breadcrumb\" class=\"col-md-auto pl-md-0\"></div>\r\n  <div class=\"col\"></div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"menu\">\r\n    <ul nz-menu nzMode=\"inline\">\r\n      <li nz-menu-item [nzSelected]=\"selectedTab === 0\" (click)=\"selectedTab = 0\">\r\n        {{\r\n            'AbpUi::ChangePassword' | abpLocalization\r\n        }}\r\n      </li>\r\n      <li nz-menu-item [nzSelected]=\"selectedTab === 1\" (click)=\"selectedTab = 1\">\r\n        {{\r\n            'AbpAccount::PersonalSettings' | abpLocalization\r\n        }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div class=\"title\">{{ 'AbpAccount::ChangePassword' | abpLocalization }}</div>\r\n    <ng-alain-change-password-form *ngIf=\"selectedTab === 0\"></ng-alain-change-password-form>\r\n    <ng-alain-personal-settings-form *ngIf=\"selectedTab === 1\"></ng-alain-personal-settings-form>\r\n  </div>\r\n\r\n</div>\r\n",
                    animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])],
                    styles: [":host{display:block;padding-top:24px}.main{display:flex;width:100%;padding-top:16px;padding-bottom:16px;overflow:auto;background-color:#fff}.menu{width:224px;border-right:1px solid #e8e8e8}.menu ::ng-deep .ant-menu-inline{border:none}.menu ::ng-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content{flex:1;padding:8px 40px}.content .title{margin-bottom:12px;color:rgba(0,0,0,.85);font-weight:500;font-size:20px;line-height:28px}.content ::ng-deep .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content ::ng-deep .ant-list-item{padding-top:14px;padding-bottom:14px}@media screen and (max-width:767px){.main{flex-direction:column}.main .menu{width:100%;border:none}.main .content{padding:40px}}"]
                }] }
    ];
    return ManageProfileComponent;
}());
if (false) {
    /** @type {?} */
    ManageProfileComponent.prototype.selectedTab;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/account-ng-alain-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: LayoutDefaultComponent,
        children: [
            {
                canActivate: [AuthGuard],
                path: 'manage-profile',
                component: ManageProfileComponent,
            }
        ],
    },
    {
        path: '',
        component: LayoutPassportComponent,
        children: [
            { path: 'login', component: UserLoginComponent },
            { path: 'register', component: UserRegisterComponent },
        ],
    },
];
var AccountNgAlainRoutingModule = /** @class */ (function () {
    function AccountNgAlainRoutingModule() {
    }
    AccountNgAlainRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                },] }
    ];
    return AccountNgAlainRoutingModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/personal-settings/personal-settings.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PersonalSettingsComponent = /** @class */ (function (_super) {
    __extends(PersonalSettingsComponent, _super);
    function PersonalSettingsComponent(_fb, _store, _toasterService) {
        var _this = _super.call(this, _fb, _store, _toasterService) || this;
        _this._fb = _fb;
        _this._store = _store;
        _this._toasterService = _toasterService;
        return _this;
    }
    PersonalSettingsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-personal-settings-form',
                    template: "<form novalidate *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"userName\" id=\"username\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"name\" id=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"surname\" id=\"surname\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"email\" id=\"email-address\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-label nzRequired nzFor=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control>\r\n      <input nz-input formControlName=\"phoneNumber\" id=\"phone-number\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <button nz-button nzType=\"primary\">\r\n    {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n</form>\r\n\r\n\r\n",
                    styles: ["nz-form-item{margin-bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    PersonalSettingsComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Store },
        { type: ToasterService }
    ]; };
    return PersonalSettingsComponent;
}(PersonalSettingsComponent$1));
if (false) {
    /**
     * @type {?}
     * @private
     */
    PersonalSettingsComponent.prototype._fb;
    /**
     * @type {?}
     * @private
     */
    PersonalSettingsComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    PersonalSettingsComponent.prototype._toasterService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/change-password/change-password.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChangePasswordComponent = /** @class */ (function (_super) {
    __extends(ChangePasswordComponent, _super);
    function ChangePasswordComponent(_fb, _store, _toasterService) {
        var _this = _super.call(this, _fb, _store, _toasterService) || this;
        _this._fb = _fb;
        _this._store = _store;
        _this._toasterService = _toasterService;
        return _this;
    }
    ChangePasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-change-password-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\">\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"current-password\">{{ 'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"password\" id=\"current-password\" placeholder=\"{{'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization}}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"newPassword\" id=\"new-password\" placeholder=\"{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <!--<nz-form-label nzRequired nzFor=\"confirm-new-password\">{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}</nz-form-label>-->\r\n    <nz-form-control>\r\n      <input nz-input type=\"password\" formControlName=\"repeatNewPassword\" id=\"confirm-new-password\" placeholder=\"{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <button nz-button nzType=\"primary\">\r\n    {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n\r\n</form>\r\n\r\n\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Store },
        { type: ToasterService }
    ]; };
    return ChangePasswordComponent;
}(ChangePasswordComponent$1));
if (false) {
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype._fb;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype._toasterService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth-wrapper/auth-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthWrapperComponent = /** @class */ (function () {
    function AuthWrapperComponent() {
    }
    AuthWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-auth-wrapper',
                    template: "<ng-alain-tenant-box [mainContentRef]=\"mainContentRef\">\r\n\r\n</ng-alain-tenant-box>\r\n\r\n<ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n"
                }] }
    ];
    AuthWrapperComponent.propDecorators = {
        mainContentRef: [{ type: Input }],
        cancelContentRef: [{ type: Input }]
    };
    return AuthWrapperComponent;
}());
if (false) {
    /** @type {?} */
    AuthWrapperComponent.prototype.mainContentRef;
    /** @type {?} */
    AuthWrapperComponent.prototype.cancelContentRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tenant-box/tenant-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TenantBoxComponent = /** @class */ (function (_super) {
    __extends(TenantBoxComponent, _super);
    function TenantBoxComponent(_store, _toasterService, _accountService) {
        var _this = _super.call(this, _store, _toasterService, _accountService) || this;
        _this._store = _store;
        _this._toasterService = _toasterService;
        _this._accountService = _accountService;
        return _this;
    }
    TenantBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-tenant-box',
                    template: "  <nz-card nzTitle=\"{{'AbpUiMultiTenancy::Tenant' | abpLocalization}} ({{ tenantName || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}) \" [nzExtra]=\"extraTemplate\">\r\n    <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n  </nz-card>\r\n  <ng-template #extraTemplate>\r\n    <a id=\"AbpTenantSwitchLink\"\r\n       href=\"javascript:void(0);\"\r\n       class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n       (click)=\"onSwitch()\">{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a>\r\n  </ng-template>\r\n\r\n  <nz-modal [nzStyle]=\"{ top: '20px' }\"\r\n            [(nzVisible)]=\"isModalVisible\"\r\n            [nzTitle]=\"modalTitle\"\r\n            [nzContent]=\"modalContent\"\r\n            [nzFooter]=\"modalFooter\"\r\n            (nzOnCancel)=\"isModalVisible=false\">\r\n    <ng-template #modalTitle>\r\n      Switch Tenan\r\n    </ng-template>\r\n\r\n    <ng-template #modalContent>\r\n      <ng-template #loaderRef>\r\n        <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n      </ng-template>\r\n\r\n      <form nz-form *ngIf=\"tenant; else loaderRef\"  (ngSubmit)=\"save()\">\r\n\r\n\r\n        <nz-form-item>\r\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</nz-form-label>\r\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" nzExtra=\"{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}\">\r\n            <input nz-input [(ngModel)]=\"tenant.name\" id=\"name\" name=\"name\" />\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </form>\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooter>\r\n      <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n        {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button nz-button nzType=\"primary\" (click)=\"save()\">\r\n        {{\r\n      'AbpTenantManagement::Save' | abpLocalization\r\n        }}\r\n      </button>\r\n    </ng-template>\r\n  </nz-modal>\r\n\r\n"
                }] }
    ];
    /** @nocollapse */
    TenantBoxComponent.ctorParameters = function () { return [
        { type: Store },
        { type: ToasterService },
        { type: AccountService }
    ]; };
    TenantBoxComponent.propDecorators = {
        mainContentRef: [{ type: Input }]
    };
    return TenantBoxComponent;
}(TenantBoxComponent$1));
if (false) {
    /** @type {?} */
    TenantBoxComponent.prototype.mainContentRef;
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
 * Generated from: lib/account-ng-alain.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccountNgAlainModule = /** @class */ (function () {
    function AccountNgAlainModule() {
    }
    AccountNgAlainModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AuthWrapperComponent,
                        TenantBoxComponent,
                        UserLoginComponent,
                        UserRegisterComponent,
                        ManageProfileComponent,
                        PersonalSettingsComponent,
                        ChangePasswordComponent
                    ],
                    imports: [
                        CoreModule,
                        NgAlainBasicModule,
                        AccountNgAlainRoutingModule,
                        AccountModule
                    ]
                },] }
    ];
    return AccountNgAlainModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: fs-account-ng-alain.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AccountNgAlainModule, AuthWrapperComponent as ɵa, TenantBoxComponent as ɵb, UserLoginComponent as ɵc, UserRegisterComponent as ɵd, ManageProfileComponent as ɵe, PersonalSettingsComponent as ɵf, ChangePasswordComponent as ɵg, AccountNgAlainRoutingModule as ɵh };
//# sourceMappingURL=fs-account-ng-alain.js.map
