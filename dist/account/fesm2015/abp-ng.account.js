import { __decorate, __metadata } from 'tslib';
import { ConfigState, SetRemember, AuthService, RestService, DynamicLayoutComponent, ReplaceableRouteContainerComponent, AuthGuard, takeUntilDestroy, ChangePassword, GetProfile, UpdateProfile, ProfileState, SessionState, SetTenant, GetAppConfiguration, LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { ToasterService, fadeIn, getPasswordValidators, ThemeSharedModule } from '@abp/ng.theme.shared';
import { Component, ɵɵdefineInjectable, ɵɵinject, Injectable, NgModule, Input, TemplateRef, InjectionToken } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { comparePasswords, NgxValidateCoreModule } from '@ngx-validate/core';
import { RouterModule } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { throwError, Observable } from 'rxjs';
import { catchError, finalize, switchMap, withLatestFrom, take } from 'rxjs/operators';
import snq from 'snq';
import { trigger, transition, useAnimation } from '@angular/animations';

const { maxLength, minLength, required } = Validators;
let LoginComponent = class LoginComponent {
    constructor(fb, oauthService, store, toasterService, authService) {
        this.fb = fb;
        this.oauthService = oauthService;
        this.store = store;
        this.toasterService = toasterService;
        this.authService = authService;
        this.isSelfRegistrationEnabled = true;
        this.authWrapperKey = "Account.AuthWrapperComponent" /* AuthWrapper */;
    }
    ngOnInit() {
        this.isSelfRegistrationEnabled =
            (this.store.selectSnapshot(ConfigState.getSetting('Abp.Account.IsSelfRegistrationEnabled')) || '').toLowerCase() !== 'false';
        this.form = this.fb.group({
            username: ['', [required, maxLength(255)]],
            password: ['', [required, maxLength(128)]],
            remember: [false],
        });
    }
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.authService
            .login(this.form.get('username').value, this.form.get('password').value)
            .pipe(catchError(err => {
            this.toasterService.error(snq(() => err.error.error_description) ||
                snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return throwError(err);
        }), finalize(() => (this.inProgress = false)))
            .subscribe(() => {
            this.store.dispatch(new SetRemember(this.form.get('remember').value));
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'abp-login',
        template: "<abp-auth-wrapper\r\n  *abpReplaceableTemplate=\"{\r\n    componentKey: authWrapperKey,\r\n    inputs: {\r\n      mainContentRef: { value: mainContentRef },\r\n      cancelContentRef: { value: cancelContentRef }\r\n    }\r\n  }\"\r\n  [mainContentRef]=\"mainContentRef\"\r\n  [cancelContentRef]=\"cancelContentRef\"\r\n>\r\n</abp-auth-wrapper>\r\n<ng-template #mainContentRef>\r\n  <h4>{{ 'AbpAccount::Login' | abpLocalization }}</h4>\r\n  <strong *ngIf=\"isSelfRegistrationEnabled\">\r\n    {{ 'AbpAccount::AreYouANewUser' | abpLocalization }}\r\n    <a class=\"text-decoration-none\" routerLink=\"/account/register\">{{\r\n      'AbpAccount::Register' | abpLocalization\r\n    }}</a>\r\n  </strong>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" validateOnSubmit class=\"mt-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"login-input-user-name-or-email-address\">{{\r\n        'AbpAccount::UserNameOrEmailAddress' | abpLocalization\r\n      }}</label>\r\n      <input\r\n        class=\"form-control\"\r\n        type=\"text\"\r\n        id=\"login-input-user-name-or-email-address\"\r\n        formControlName=\"username\"\r\n        autocomplete=\"username\"\r\n        autofocus\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"login-input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label>\r\n      <input\r\n        class=\"form-control\"\r\n        type=\"password\"\r\n        id=\"login-input-password\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n    </div>\r\n    <div class=\"form-check\" validationTarget validationStyle>\r\n      <label class=\"form-check-label\" for=\"login-input-remember-me\">\r\n        <input\r\n          class=\"form-check-input\"\r\n          type=\"checkbox\"\r\n          id=\"login-input-remember-me\"\r\n          formControlName=\"remember\"\r\n        />\r\n        {{ 'AbpAccount::RememberMe' | abpLocalization }}\r\n      </label>\r\n    </div>\r\n    <abp-button\r\n      [loading]=\"inProgress\"\r\n      buttonType=\"submit\"\r\n      name=\"Action\"\r\n      buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n    >\r\n      {{ 'AbpAccount::Login' | abpLocalization }}\r\n    </abp-button>\r\n  </form>\r\n</ng-template>\r\n<ng-template #cancelContentRef>\r\n  <div class=\"card-footer text-center border-0\">\r\n    <a routerLink=\"/\">\r\n      <button type=\"button\" name=\"Action\" value=\"Cancel\" class=\"px-2 py-0 btn btn-link\">\r\n        {{ 'AbpAccount::Cancel' | abpLocalization }}\r\n      </button>\r\n    </a>\r\n  </div>\r\n</ng-template>\r\n"
    }),
    __metadata("design:paramtypes", [FormBuilder,
        OAuthService,
        Store,
        ToasterService,
        AuthService])
], LoginComponent);

let ManageProfileComponent = class ManageProfileComponent {
    constructor() {
        this.selectedTab = 0;
        this.changePasswordKey = "Account.ChangePasswordComponent" /* ChangePassword */;
        this.personalSettingsKey = "Account.PersonalSettingsComponent" /* PersonalSettings */;
    }
};
ManageProfileComponent = __decorate([
    Component({
        selector: 'abp-manage-profile',
        template: "<div id=\"AbpContentToolbar\"></div>\r\n\r\n<div class=\"card border-0 shadow-sm\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-3\">\r\n        <ul class=\"nav flex-column nav-pills\" id=\"nav-tab\" role=\"tablist\">\r\n          <li class=\"nav-item\" (click)=\"selectedTab = 0\">\r\n            <a\r\n              class=\"nav-link\"\r\n              [ngClass]=\"{ active: selectedTab === 0 }\"\r\n              role=\"tab\"\r\n              href=\"javascript:void(0)\"\r\n              >{{ 'AbpUi::ChangePassword' | abpLocalization }}</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item mb-2\" (click)=\"selectedTab = 1\">\r\n            <a\r\n              class=\"nav-link\"\r\n              [ngClass]=\"{ active: selectedTab === 1 }\"\r\n              role=\"tab\"\r\n              href=\"javascript:void(0)\"\r\n              >{{ 'AbpAccount::PersonalSettings' | abpLocalization }}</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-12 col-md-9\">\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 0\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::ChangePassword' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-change-password-form\r\n              *abpReplaceableTemplate=\"{ componentKey: changePasswordKey }\"\r\n            ></abp-change-password-form>\r\n          </div>\r\n        </div>\r\n        <div class=\"tab-content\" *ngIf=\"selectedTab === 1\" [@fadeIn]>\r\n          <div class=\"tab-pane active\" role=\"tabpanel\">\r\n            <h4>\r\n              {{ 'AbpIdentity::PersonalSettings' | abpLocalization }}\r\n              <hr />\r\n            </h4>\r\n            <abp-personal-settings-form\r\n              *abpReplaceableTemplate=\"{ componentKey: personalSettingsKey }\"\r\n            ></abp-personal-settings-form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
        animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])]
    })
], ManageProfileComponent);

let AccountService = class AccountService {
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpAccount';
    }
    findTenant(tenantName) {
        const request = {
            method: 'GET',
            url: `/api/abp/multi-tenancy/tenants/by-name/${tenantName}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    register(body) {
        const request = {
            method: 'POST',
            url: '/api/account/register',
            body,
        };
        return this.rest.request(request, {
            skipHandleError: true,
            apiName: this.apiName,
        });
    }
};
AccountService.ɵprov = ɵɵdefineInjectable({ factory: function AccountService_Factory() { return new AccountService(ɵɵinject(RestService)); }, token: AccountService, providedIn: "root" });
AccountService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [RestService])
], AccountService);

const { maxLength: maxLength$1, required: required$1, email } = Validators;
let RegisterComponent = class RegisterComponent {
    constructor(fb, accountService, oauthService, store, toasterService, authService) {
        this.fb = fb;
        this.accountService = accountService;
        this.oauthService = oauthService;
        this.store = store;
        this.toasterService = toasterService;
        this.authService = authService;
        this.isSelfRegistrationEnabled = true;
        this.authWrapperKey = "Account.AuthWrapperComponent" /* AuthWrapper */;
    }
    ngOnInit() {
        this.isSelfRegistrationEnabled =
            (this.store.selectSnapshot(ConfigState.getSetting('Abp.Account.IsSelfRegistrationEnabled')) || '').toLowerCase() !== 'false';
        if (!this.isSelfRegistrationEnabled) {
            this.toasterService.warn({
                key: 'AbpAccount::SelfRegistrationDisabledMessage',
                defaultValue: 'Self registration is disabled.',
            }, null, { life: 10000 });
            return;
        }
        this.form = this.fb.group({
            username: ['', [required$1, maxLength$1(255)]],
            password: ['', [required$1, ...getPasswordValidators(this.store)]],
            email: ['', [required$1, email]],
        });
    }
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        const newUser = {
            userName: this.form.get('username').value,
            password: this.form.get('password').value,
            emailAddress: this.form.get('email').value,
            appName: 'Angular',
        };
        this.accountService
            .register(newUser)
            .pipe(switchMap(() => this.authService.login(newUser.userName, newUser.password)), catchError(err => {
            this.toasterService.error(snq(() => err.error.error_description) ||
                snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'), 'Error', { life: 7000 });
            return throwError(err);
        }), finalize(() => (this.inProgress = false)))
            .subscribe();
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'abp-register',
        template: "<abp-auth-wrapper\r\n  *abpReplaceableTemplate=\"{\r\n    componentKey: authWrapperKey,\r\n    inputs: {\r\n      mainContentRef: { value: mainContentRef }\r\n    }\r\n  }\"\r\n  [mainContentRef]=\"mainContentRef\"\r\n>\r\n</abp-auth-wrapper>\r\n<ng-template #mainContentRef>\r\n  <h4>{{ 'AbpAccount::Register' | abpLocalization }}</h4>\r\n  <strong>\r\n    {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }}\r\n    <a class=\"text-decoration-none\" routerLink=\"/account/login\">{{\r\n      'AbpAccount::Login' | abpLocalization\r\n    }}</a>\r\n  </strong>\r\n  <form\r\n    *ngIf=\"isSelfRegistrationEnabled\"\r\n    [formGroup]=\"form\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n    validateOnSubmit\r\n    class=\"mt-4\"\r\n  >\r\n    <div class=\"form-group\">\r\n      <label for=\"input-user-name\">{{ 'AbpAccount::UserName' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        autofocus\r\n        type=\"text\"\r\n        id=\"input-user-name\"\r\n        class=\"form-control\"\r\n        formControlName=\"username\"\r\n        autocomplete=\"username\"\r\n      />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-email-address\">{{ 'AbpAccount::EmailAddress' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input type=\"email\" id=\"input-email-address\" class=\"form-control\" formControlName=\"email\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"input-password\">{{ 'AbpAccount::Password' | abpLocalization }}</label\r\n      ><span> * </span\r\n      ><input\r\n        type=\"password\"\r\n        id=\"input-password\"\r\n        class=\"form-control\"\r\n        formControlName=\"password\"\r\n        autocomplete=\"current-password\"\r\n      />\r\n    </div>\r\n    <abp-button\r\n      [loading]=\"inProgress\"\r\n      buttonType=\"submit\"\r\n      name=\"Action\"\r\n      buttonClass=\"btn-block btn-lg mt-3 btn btn-primary\"\r\n    >\r\n      {{ 'AbpAccount::Register' | abpLocalization }}\r\n    </abp-button>\r\n  </form>\r\n</ng-template>\r\n"
    }),
    __metadata("design:paramtypes", [FormBuilder,
        AccountService,
        OAuthService,
        Store,
        ToasterService,
        AuthService])
], RegisterComponent);

const ɵ0 = {
    replaceableComponent: {
        key: "Account.LoginComponent" /* Login */,
        defaultComponent: LoginComponent,
    },
}, ɵ1 = {
    replaceableComponent: {
        key: "Account.RegisterComponent" /* Register */,
        defaultComponent: RegisterComponent,
    },
}, ɵ2 = {
    replaceableComponent: {
        key: "Account.ManageProfileComponent" /* ManageProfile */,
        defaultComponent: ManageProfileComponent,
    },
};
const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: '',
        component: DynamicLayoutComponent,
        children: [
            {
                path: 'login',
                component: ReplaceableRouteContainerComponent,
                data: ɵ0,
            },
            {
                path: 'register',
                component: ReplaceableRouteContainerComponent,
                data: ɵ1,
            },
            {
                path: 'manage-profile',
                component: ReplaceableRouteContainerComponent,
                canActivate: [AuthGuard],
                data: ɵ2,
            },
        ],
    },
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AccountRoutingModule);

let AuthWrapperComponent = class AuthWrapperComponent {
    constructor(store) {
        this.store = store;
        this.enableLocalLogin = true;
        this.tenantBoxKey = "Account.TenantBoxComponent" /* TenantBox */;
    }
    ngOnInit() {
        this.store
            .select(ConfigState.getSetting('Abp.Account.EnableLocalLogin'))
            .pipe(takeUntilDestroy(this))
            .subscribe(value => {
            if (value) {
                this.enableLocalLogin = value.toLowerCase() !== 'false';
            }
        });
    }
    ngOnDestroy() { }
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], AuthWrapperComponent.prototype, "mainContentRef", void 0);
__decorate([
    Input(),
    __metadata("design:type", TemplateRef)
], AuthWrapperComponent.prototype, "cancelContentRef", void 0);
__decorate([
    Select(ConfigState.getDeep('multiTenancy.isEnabled')),
    __metadata("design:type", Observable)
], AuthWrapperComponent.prototype, "isMultiTenancyEnabled$", void 0);
AuthWrapperComponent = __decorate([
    Component({
        selector: 'abp-auth-wrapper',
        template: "<div class=\"row\">\r\n  <div class=\"mx-auto col col-md-5\">\r\n    <ng-container *ngIf=\"isMultiTenancyEnabled$ | async\">\r\n      <abp-tenant-box *abpReplaceableTemplate=\"{ componentKey: tenantBoxKey }\"></abp-tenant-box>\r\n    </ng-container>\r\n\r\n    <div class=\"abp-account-container\">\r\n      <div\r\n        *ngIf=\"enableLocalLogin; else disableLocalLoginTemplate\"\r\n        class=\"card mt-3 shadow-sm rounded\"\r\n      >\r\n        <div class=\"card-body p-5\">\r\n          <ng-content *ngTemplateOutlet=\"mainContentRef\"></ng-content>\r\n        </div>\r\n        <ng-content *ngTemplateOutlet=\"cancelContentRef\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #disableLocalLoginTemplate>\r\n  <div class=\"alert alert-warning\">\r\n    <strong>{{ 'AbpAccount::InvalidLoginRequest' | abpLocalization }}</strong>\r\n    {{ 'AbpAccount::ThereAreNoLoginSchemesConfiguredForThisClient' | abpLocalization }}\r\n  </div>\r\n</ng-template>\r\n",
        exportAs: 'abpAuthWrapper'
    }),
    __metadata("design:paramtypes", [Store])
], AuthWrapperComponent);

const { required: required$2 } = Validators;
const PASSWORD_FIELDS = ['newPassword', 'repeatNewPassword'];
let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(fb, store, toasterService) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
        this.mapErrorsFn = (errors, groupErrors, control) => {
            if (PASSWORD_FIELDS.indexOf(String(control.name)) < 0)
                return errors;
            return errors.concat(groupErrors.filter(({ key }) => key === 'passwordMismatch'));
        };
    }
    ngOnInit() {
        const passwordValidations = getPasswordValidators(this.store);
        this.form = this.fb.group({
            password: ['', required$2],
            newPassword: [
                '',
                {
                    validators: [required$2, ...passwordValidations],
                },
            ],
            repeatNewPassword: [
                '',
                {
                    validators: [required$2, ...passwordValidations],
                },
            ],
        }, {
            validators: [comparePasswords(PASSWORD_FIELDS)],
        });
    }
    onSubmit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.store
            .dispatch(new ChangePassword({
            currentPassword: this.form.get('password').value,
            newPassword: this.form.get('newPassword').value,
        }))
            .pipe(finalize(() => (this.inProgress = false)))
            .subscribe({
            next: () => {
                this.form.reset();
                this.toasterService.success('AbpAccount::PasswordChangedMessage', 'Success', {
                    life: 5000,
                });
            },
            error: err => {
                this.toasterService.error(snq(() => err.error.error.message, 'AbpAccount::DefaultErrorMessage'), 'Error', {
                    life: 7000,
                });
            },
        });
    }
};
ChangePasswordComponent = __decorate([
    Component({
        selector: 'abp-change-password-form',
        template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\" validateOnSubmit>\r\n  <div class=\"form-group\">\r\n    <label for=\"current-password\">{{\r\n      'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"current-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"password\"\r\n      autofocus\r\n      autocomplete=\"current-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"newPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm-new-password\">{{\r\n      'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization\r\n    }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"password\"\r\n      id=\"confirm-new-password\"\r\n      class=\"form-control\"\r\n      formControlName=\"repeatNewPassword\"\r\n      autocomplete=\"new-password\"\r\n    />\r\n  </div>\r\n  <abp-button\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    buttonType=\"submit\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n    >{{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n",
        exportAs: 'abpChangePasswordForm'
    }),
    __metadata("design:paramtypes", [FormBuilder,
        Store,
        ToasterService])
], ChangePasswordComponent);

const { maxLength: maxLength$2, required: required$3, email: email$1 } = Validators;
let PersonalSettingsComponent = class PersonalSettingsComponent {
    constructor(fb, store, toasterService) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.store
            .dispatch(new GetProfile())
            .pipe(withLatestFrom(this.profile$), take(1))
            .subscribe(([, profile]) => {
            this.form = this.fb.group({
                userName: [profile.userName, [required$3, maxLength$2(256)]],
                email: [profile.email, [required$3, email$1, maxLength$2(256)]],
                name: [profile.name || '', [maxLength$2(64)]],
                surname: [profile.surname || '', [maxLength$2(64)]],
                phoneNumber: [profile.phoneNumber || '', [maxLength$2(16)]],
            });
        });
    }
    submit() {
        if (this.form.invalid)
            return;
        this.inProgress = true;
        this.store
            .dispatch(new UpdateProfile(this.form.value))
            .pipe(finalize(() => (this.inProgress = false)))
            .subscribe(() => {
            this.toasterService.success('AbpAccount::PersonalSettingsSaved', 'Success', { life: 5000 });
        });
    }
};
__decorate([
    Select(ProfileState.getProfile),
    __metadata("design:type", Observable)
], PersonalSettingsComponent.prototype, "profile$", void 0);
PersonalSettingsComponent = __decorate([
    Component({
        selector: 'abp-personal-settings-form',
        template: "<form validateOnSubmit *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">{{ 'AbpIdentity::DisplayName:UserName' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input\r\n      type=\"text\"\r\n      id=\"username\"\r\n      class=\"form-control\"\r\n      formControlName=\"userName\"\r\n      autofocus\r\n      (keydown.space)=\"$event.preventDefault()\"\r\n    />\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"surname\">{{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</label\r\n        ><input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email-address\">{{ 'AbpIdentity::DisplayName:Email' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input type=\"text\" id=\"email-address\" class=\"form-control\" formControlName=\"email\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"phone-number\">{{ 'AbpIdentity::DisplayName:PhoneNumber' | abpLocalization }}</label\r\n    ><input type=\"text\" id=\"phone-number\" class=\"form-control\" formControlName=\"phoneNumber\" />\r\n  </div>\r\n  <abp-button\r\n    buttonType=\"submit\"\r\n    iconClass=\"fa fa-check\"\r\n    buttonClass=\"btn btn-primary color-white\"\r\n    [loading]=\"inProgress\"\r\n    [disabled]=\"form?.invalid\"\r\n  >\r\n    {{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r\n  >\r\n</form>\r\n",
        exportAs: 'abpPersonalSettingsForm'
    }),
    __metadata("design:paramtypes", [FormBuilder,
        Store,
        ToasterService])
], PersonalSettingsComponent);

let TenantBoxComponent = class TenantBoxComponent {
    constructor(store, toasterService, accountService) {
        this.store = store;
        this.toasterService = toasterService;
        this.accountService = accountService;
    }
    onSwitch() {
        const tenant = this.store.selectSnapshot(SessionState.getTenant);
        this.name = (tenant || {}).name;
        this.isModalVisible = true;
    }
    save() {
        if (!this.name) {
            this.setTenant(null);
            this.isModalVisible = false;
            return;
        }
        this.modalBusy = true;
        this.accountService
            .findTenant(this.name)
            .pipe(finalize(() => (this.modalBusy = false)))
            .subscribe(({ success, tenantId: id, name }) => {
            if (!success) {
                this.showError();
                return;
            }
            this.setTenant({ id, name });
            this.isModalVisible = false;
        });
    }
    setTenant(tenant) {
        return this.store.dispatch([new SetTenant(tenant), new GetAppConfiguration()]);
    }
    showError() {
        this.toasterService.error('AbpUiMultiTenancy::GivenTenantIsNotAvailable', 'AbpUi::Error', {
            messageLocalizationParams: [this.name],
        });
    }
};
__decorate([
    Select(SessionState.getTenant),
    __metadata("design:type", Observable)
], TenantBoxComponent.prototype, "currentTenant$", void 0);
TenantBoxComponent = __decorate([
    Component({
        selector: 'abp-tenant-box',
        template: "<ng-container *ngIf=\"(currentTenant$ | async) || {} as currentTenant\">\r\n  <div class=\"card shadow-sm rounded mb-3\">\r\n    <div class=\"card-body px-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <span style=\"font-size: 0.8em;\" class=\"text-uppercase text-muted\">{{\r\n            'AbpUiMultiTenancy::Tenant' | abpLocalization\r\n          }}</span\r\n          ><br />\r\n          <h6 class=\"m-0 d-inline-block\">\r\n            <i>{{ currentTenant.name || ('AbpUiMultiTenancy::NotSelected' | abpLocalization) }}</i>\r\n          </h6>\r\n        </div>\r\n        <div class=\"col-auto\">\r\n          <a\r\n            id=\"AbpTenantSwitchLink\"\r\n            href=\"javascript:void(0);\"\r\n            class=\"btn btn-sm mt-3 btn-outline-primary\"\r\n            (click)=\"onSwitch()\"\r\n            >{{ 'AbpUiMultiTenancy::Switch' | abpLocalization }}</a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n    <ng-template #abpHeader>\r\n      <h5>Switch Tenant</h5>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <form (ngSubmit)=\"save()\">\r\n        <div class=\"mt-2\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">{{ 'AbpUiMultiTenancy::Name' | abpLocalization }}</label>\r\n            <input\r\n              [(ngModel)]=\"name\"\r\n              type=\"text\"\r\n              id=\"name\"\r\n              name=\"tenant\"\r\n              class=\"form-control\"\r\n              autofocus\r\n            />\r\n          </div>\r\n          <p>{{ 'AbpUiMultiTenancy::SwitchTenantHint' | abpLocalization }}</p>\r\n        </div>\r\n      </form>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button #abpClose type=\"button\" class=\"btn btn-secondary\">\r\n        {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button\r\n        type=\"abp-button\"\r\n        iconClass=\"fa fa-check\"\r\n        (click)=\"save()\"\r\n        [disabled]=\"currentTenant?.name === name\"\r\n      >\r\n        <span>{{ 'AbpTenantManagement::Save' | abpLocalization }}</span>\r\n      </abp-button>\r\n    </ng-template>\r\n  </abp-modal>\r\n</ng-container>\r\n"
    }),
    __metadata("design:paramtypes", [Store,
        ToasterService,
        AccountService])
], TenantBoxComponent);

const ACCOUNT_OPTIONS = new InjectionToken('ACCOUNT_OPTIONS');

function accountOptionsFactory(options) {
    return Object.assign({ redirectUrl: '/' }, options);
}

var AccountModule_1;
let AccountModule = AccountModule_1 = class AccountModule {
    static forChild(options) {
        return {
            ngModule: AccountModule_1,
            providers: [
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
        return new LazyModuleFactory(AccountModule_1.forChild(options));
    }
};
AccountModule = AccountModule_1 = __decorate([
    NgModule({
        declarations: [
            AuthWrapperComponent,
            LoginComponent,
            RegisterComponent,
            TenantBoxComponent,
            ChangePasswordComponent,
            ManageProfileComponent,
            PersonalSettingsComponent,
        ],
        imports: [
            CoreModule,
            AccountRoutingModule,
            ThemeSharedModule,
            NgbDropdownModule,
            NgxValidateCoreModule,
        ],
        exports: [],
    })
], AccountModule);

/**
 * Generated bundle index. Do not edit.
 */

export { ACCOUNT_OPTIONS, AccountModule, AccountService, ChangePasswordComponent, LoginComponent, ManageProfileComponent, PersonalSettingsComponent, RegisterComponent, TenantBoxComponent, AuthWrapperComponent as ɵa, LoginComponent as ɵb, RegisterComponent as ɵc, AccountService as ɵd, TenantBoxComponent as ɵe, ChangePasswordComponent as ɵf, ManageProfileComponent as ɵg, PersonalSettingsComponent as ɵh, AccountRoutingModule as ɵi, ACCOUNT_OPTIONS as ɵk, accountOptionsFactory as ɵl };
//# sourceMappingURL=abp-ng.account.js.map
