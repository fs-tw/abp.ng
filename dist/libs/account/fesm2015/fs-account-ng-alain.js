import { LocalizationPipe, ConfigState, AuthService, FormSubmitDirective, LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { ɵɵprojection, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵpipeBind1, ɵɵtemplate, ɵɵproperty, ɵɵtextInterpolate2, ɵɵpureFunction0, ɵɵtextInterpolate1, ɵɵelement, ɵɵtemplateRefExtractor, ɵɵpropertyInterpolate, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵInheritDefinitionFeature, ɵɵprojectionDef, ɵɵreference, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { TenantBoxComponent as TenantBoxComponent$1, AccountService, LoginComponent, RegisterComponent, ChangePasswordComponent as ChangePasswordComponent$1, PersonalSettingsComponent as PersonalSettingsComponent$1, ACCOUNT_OPTIONS } from '@abp/ng.account';
import { ToasterService, fadeIn } from '@abp/ng.theme.shared';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, NgControlStatus, NgModel, FormBuilder, FormGroupDirective, FormControlName } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { __decorate, __metadata } from 'tslib';
import { Observable } from 'rxjs';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NgTemplateOutlet, NgIf, AsyncPipe } from '@angular/common';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent } from 'ng-zorro-antd/form';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { NzInputDirective, NzInputGroupComponent } from 'ng-zorro-antd/input';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { ValidationGroupDirective, ValidationDirective } from '@ngx-validate/core';
import { NzTabSetComponent, NzTabComponent } from 'ng-zorro-antd/tabs';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { RouterLinkWithHref } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { NzMenuDirective, NzMenuItemDirective } from 'ng-zorro-antd/menu';
import { AccountWrapModule } from '@fs/account/wrap';

function TenantBoxComponent_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngTemplateOutlet", "mainContentRef"]);
} }
function TenantBoxComponent_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 9);
    ɵɵlistener("click", function TenantBoxComponent_ng_template_2_a_0_Template_a_click_0_listener() { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(2); return ctx_r12.onSwitch(); });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "AbpUiMultiTenancy::Switch"));
} }
function TenantBoxComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, TenantBoxComponent_ng_template_2_a_0_Template, 3, 3, "a", 8);
    ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r2.isMultiTenancyEnabled$));
} }
function TenantBoxComponent_ng_template_4_div_0_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    const currentTenant_r15 = ɵɵnextContext().ngIf;
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "AbpUiMultiTenancy::Tenant"), " (", currentTenant_r15.name || ɵɵpipeBind1(3, 4, "AbpUiMultiTenancy::NotSelected"), ") ");
} }
function TenantBoxComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, TenantBoxComponent_ng_template_4_div_0_span_1_Template, 4, 6, "span", 10);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r14.isMultiTenancyEnabled$));
} }
const _c0 = function () { return {}; };
function TenantBoxComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, TenantBoxComponent_ng_template_4_div_0_Template, 3, 3, "div", 10);
    ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r4.currentTenant$) || ɵɵpureFunction0(3, _c0));
} }
function TenantBoxComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
} if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "AbpUiMultiTenancy::Tenant"), " ");
} }
function TenantBoxComponent_ng_template_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "i", 17);
    ɵɵelementEnd();
} }
function TenantBoxComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵtemplate(0, TenantBoxComponent_ng_template_9_ng_template_0_Template, 2, 0, "ng-template", null, 11, ɵɵtemplateRefExtractor);
    ɵɵelementStart(2, "form", 12);
    ɵɵlistener("ngSubmit", function TenantBoxComponent_ng_template_9_Template_form_ngSubmit_2_listener() { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(); return ctx_r20.save(); });
    ɵɵelementStart(3, "nz-form-item");
    ɵɵelementStart(4, "nz-form-label", 13);
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(7, "nz-form-control", 14);
    ɵɵpipe(8, "abpLocalization");
    ɵɵelementStart(9, "input", 15);
    ɵɵlistener("ngModelChange", function TenantBoxComponent_ng_template_9_Template_input_ngModelChange_9_listener($event) { ɵɵrestoreView(_r21); const ctx_r22 = ɵɵnextContext(); return ctx_r22.name = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("nzSm", 6)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(6, 7, "AbpUiMultiTenancy::Name"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("nzExtra", ɵɵpipeBind1(8, 9, "AbpUiMultiTenancy::SwitchTenantHint"));
    ɵɵproperty("nzSm", 14)("nzXs", 24);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r8.name);
} }
function TenantBoxComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 18);
    ɵɵlistener("click", function TenantBoxComponent_ng_template_11_Template_button_click_0_listener() { ɵɵrestoreView(_r24); const ctx_r23 = ɵɵnextContext(); return ctx_r23.isModalVisible = false; });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 19);
    ɵɵlistener("click", function TenantBoxComponent_ng_template_11_Template_button_click_3_listener() { ɵɵrestoreView(_r24); const ctx_r25 = ɵɵnextContext(); return ctx_r25.save(); });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpTenantManagement::Cancel"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 4, "AbpTenantManagement::Save"), " ");
} }
const _c1 = function () { return { top: "20px" }; };
const _c2 = ["*"];
class TenantBoxComponent extends TenantBoxComponent$1 {
    constructor(_store, _toasterService, _accountService) {
        super(_store, _toasterService, _accountService);
        this._store = _store;
        this._toasterService = _toasterService;
        this._accountService = _accountService;
    }
}
TenantBoxComponent.ɵfac = function TenantBoxComponent_Factory(t) { return new (t || TenantBoxComponent)(ɵɵdirectiveInject(Store), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(AccountService)); };
TenantBoxComponent.ɵcmp = ɵɵdefineComponent({ type: TenantBoxComponent, selectors: [["ng-alain-tenant-box"]], inputs: { mainContentRef: "mainContentRef" }, features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 13, vars: 9, consts: [[3, "nzTitle", "nzExtra"], [4, "ngTemplateOutlet"], ["extraTemplate", ""], ["cardTitle", ""], [3, "nzStyle", "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["id", "AbpTenantSwitchLink", "href", "javascript:void(0);", "class", "btn btn-sm mt-3 btn-outline-primary", 3, "click", 4, "ngIf"], ["id", "AbpTenantSwitchLink", "href", "javascript:void(0);", 1, "btn", "btn-sm", "mt-3", "btn-outline-primary", 3, "click"], [4, "ngIf"], ["loaderRef", ""], ["nz-form", "", 3, "ngSubmit"], ["nzRequired", "", "nzFor", "name", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzExtra"], ["nz-input", "", "id", "name", "name", "name", 3, "ngModel", "ngModelChange"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function TenantBoxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "nz-card", 0);
        ɵɵtemplate(1, TenantBoxComponent_1_Template, 1, 0, undefined, 1);
        ɵɵelementEnd();
        ɵɵtemplate(2, TenantBoxComponent_ng_template_2_Template, 2, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(4, TenantBoxComponent_ng_template_4_Template, 2, 4, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵelementStart(6, "nz-modal", 4);
        ɵɵlistener("nzVisibleChange", function TenantBoxComponent_Template_nz_modal_nzVisibleChange_6_listener($event) { return ctx.isModalVisible = $event; })("nzOnCancel", function TenantBoxComponent_Template_nz_modal_nzOnCancel_6_listener() { return ctx.isModalVisible = false; });
        ɵɵtemplate(7, TenantBoxComponent_ng_template_7_Template, 2, 3, "ng-template", null, 5, ɵɵtemplateRefExtractor);
        ɵɵtemplate(9, TenantBoxComponent_ng_template_9_Template, 10, 11, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵtemplate(11, TenantBoxComponent_ng_template_11_Template, 6, 6, "ng-template", null, 7, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(3);
        const _r3 = ɵɵreference(5);
        const _r5 = ɵɵreference(8);
        const _r7 = ɵɵreference(10);
        const _r9 = ɵɵreference(12);
        ɵɵproperty("nzTitle", _r3)("nzExtra", _r1);
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.mainContentRef);
        ɵɵadvance(5);
        ɵɵproperty("nzStyle", ɵɵpureFunction0(8, _c1))("nzVisible", ctx.isModalVisible)("nzTitle", _r5)("nzContent", _r7)("nzFooter", _r9);
    } }, directives: [NzCardComponent, NgTemplateOutlet, NzModalComponent, NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, NzFormDirective, NzRowDirective, NzFormItemComponent, NzColDirective, NzFormLabelComponent, NzFormControlComponent, NzInputDirective, DefaultValueAccessor, NgControlStatus, NgModel, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective], pipes: [AsyncPipe, LocalizationPipe], encapsulation: 2 });
__decorate([
    Select(ConfigState.getDeep('multiTenancy.isEnabled')),
    __metadata("design:type", Observable)
], TenantBoxComponent.prototype, "isMultiTenancyEnabled$", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(TenantBoxComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-tenant-box',
                templateUrl: './tenant-box.component.html'
            }]
    }], function () { return [{ type: Store }, { type: ToasterService }, { type: AccountService }]; }, { mainContentRef: [{
            type: Input
        }], isMultiTenancyEnabled$: [] }); })();

function AuthWrapperComponent_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngTemplateOutlet", "cancelContentRef"]);
} }
const _c0$1 = ["*"];
class AuthWrapperComponent {
}
AuthWrapperComponent.ɵfac = function AuthWrapperComponent_Factory(t) { return new (t || AuthWrapperComponent)(); };
AuthWrapperComponent.ɵcmp = ɵɵdefineComponent({ type: AuthWrapperComponent, selectors: [["ng-alain-auth-wrapper"]], inputs: { mainContentRef: "mainContentRef", cancelContentRef: "cancelContentRef" }, ngContentSelectors: _c0$1, decls: 2, vars: 2, consts: [[3, "mainContentRef"], [4, "ngTemplateOutlet"]], template: function AuthWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelement(0, "ng-alain-tenant-box", 0);
        ɵɵtemplate(1, AuthWrapperComponent_1_Template, 1, 0, undefined, 1);
    } if (rf & 2) {
        ɵɵproperty("mainContentRef", ctx.mainContentRef);
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.cancelContentRef);
    } }, directives: [TenantBoxComponent, NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuthWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-auth-wrapper',
                templateUrl: './auth-wrapper.component.html',
            }]
    }], null, { mainContentRef: [{
            type: Input
        }], cancelContentRef: [{
            type: Input
        }] }); })();

function UserLoginComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 2);
    ɵɵlistener("ngSubmit", function UserLoginComponent_ng_template_1_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.onSubmit(); });
    ɵɵelementStart(1, "nz-tabset", 3);
    ɵɵelementStart(2, "nz-tab", 4);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementStart(4, "nz-form-item");
    ɵɵelementStart(5, "nz-form-control", 5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementStart(7, "nz-input-group", 6);
    ɵɵelement(8, "input", 7);
    ɵɵpipe(9, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "nz-form-item");
    ɵɵelementStart(11, "nz-form-control", 5);
    ɵɵpipe(12, "abpLocalization");
    ɵɵelementStart(13, "nz-input-group", 8);
    ɵɵelement(14, "input", 9);
    ɵɵpipe(15, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(16, "nz-form-item");
    ɵɵelementStart(17, "nz-col", 10);
    ɵɵelementStart(18, "label", 11);
    ɵɵtext(19);
    ɵɵpipe(20, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(21, "nz-form-item");
    ɵɵelementStart(22, "button", 12);
    ɵɵtext(23);
    ɵɵpipe(24, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(25, "div", 13);
    ɵɵelementStart(26, "a", 14);
    ɵɵtext(27);
    ɵɵpipe(28, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(1);
    ɵɵproperty("nzAnimated", false);
    ɵɵadvance(1);
    ɵɵproperty("nzTitle", ɵɵpipeBind1(3, 12, "AbpAccount::Login"));
    ɵɵadvance(3);
    ɵɵproperty("nzErrorTip", ɵɵpipeBind1(6, 14, "Please enter mobile number!"));
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(9, 16, "AbpAccount::UserNameOrEmailAddress"));
    ɵɵadvance(3);
    ɵɵproperty("nzErrorTip", ɵɵpipeBind1(12, 18, "Please enter password!"));
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(15, 20, "AbpAccount::Password"));
    ɵɵadvance(3);
    ɵɵproperty("nzSpan", 12);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(20, 22, "AbpAccount::RememberMe"));
    ɵɵadvance(3);
    ɵɵproperty("nzLoading", ctx_r1.inProgress);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 24, "AbpAccount::Login"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(28, 26, "AbpAccount::Register"));
} }
class UserLoginComponent extends LoginComponent {
    constructor(_fb, _oauthService, _store, _toasterService, _authService) {
        super(_fb, _oauthService, _store, _toasterService, _authService);
    }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(OAuthService), ɵɵdirectiveInject(Store), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(AuthService)); };
UserLoginComponent.ɵcmp = ɵɵdefineComponent({ type: UserLoginComponent, selectors: [["ng-alain-login"]], features: [ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[3, "mainContentRef"], ["mainContentRef", ""], ["nz-form", "", "role", "form", 3, "formGroup", "ngSubmit"], [1, "tabs", 3, "nzAnimated"], [3, "nzTitle"], [3, "nzErrorTip"], ["nzSize", "large", "nzPrefixIcon", "user"], ["nz-input", "", "formControlName", "username", 3, "placeholder"], ["nzSize", "large", "nzPrefixIcon", "lock"], ["nz-input", "", "type", "password", "formControlName", "password", 3, "placeholder"], [3, "nzSpan"], ["nz-checkbox", "", "formControlName", "remember"], ["nz-button", "", "type", "submit", "nzType", "primary", "nzSize", "large", "nzBlock", "", 3, "nzLoading"], [1, "other"], ["routerLink", "/account/register", 1, "register"]], template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ng-alain-auth-wrapper", 0);
        ɵɵtemplate(1, UserLoginComponent_ng_template_1_Template, 29, 28, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(2);
        ɵɵproperty("mainContentRef", _r0);
    } }, directives: [AuthWrapperComponent, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, NzFormDirective, FormGroupDirective, ValidationGroupDirective, NzTabSetComponent, NzTabComponent, NzRowDirective, NzFormItemComponent, NzColDirective, NzFormControlComponent, NzInputGroupComponent, NzInputDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ValidationDirective, NzCheckboxComponent, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, RouterLinkWithHref], pipes: [LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;margin:0 auto;width:368px}[_nghost-%COMP%]     .ant-tabs .ant-tabs-bar{border-bottom:0;margin-bottom:24px;text-align:center}[_nghost-%COMP%]     .ant-tabs-tab{font-size:16px;line-height:24px}[_nghost-%COMP%]     .ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:34px}[_nghost-%COMP%]     .icon{color:rgba(0,0,0,.2);cursor:pointer;font-size:24px;margin-left:16px;transition:color .3s;vertical-align:middle}[_nghost-%COMP%]     .icon:hover{color:#1890ff}[_nghost-%COMP%]     .other{line-height:22px;margin-top:24px;text-align:left}[_nghost-%COMP%]     .other nz-tooltip{vertical-align:middle}[_nghost-%COMP%]     .other .register{float:right}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserLoginComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.less']
            }]
    }], function () { return [{ type: FormBuilder }, { type: OAuthService }, { type: Store }, { type: ToasterService }, { type: AuthService }]; }, null); })();

function UserRegisterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "form", 2);
    ɵɵlistener("ngSubmit", function UserRegisterComponent_ng_template_1_Template_form_ngSubmit_3_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.onSubmit(); });
    ɵɵelementStart(4, "nz-form-item");
    ɵɵelementStart(5, "nz-form-control");
    ɵɵelementStart(6, "nz-input-group", 3);
    ɵɵelement(7, "input", 4);
    ɵɵpipe(8, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(9, "nz-form-item");
    ɵɵelementStart(10, "nz-form-control");
    ɵɵelementStart(11, "nz-input-group", 3);
    ɵɵelement(12, "input", 5);
    ɵɵpipe(13, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(14, "nz-form-item");
    ɵɵelementStart(15, "nz-form-control");
    ɵɵelementStart(16, "nz-input-group", 3);
    ɵɵelement(17, "input", 6);
    ɵɵpipe(18, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(19, "nz-form-item");
    ɵɵelementStart(20, "button", 7);
    ɵɵtext(21);
    ɵɵpipe(22, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(23, "a", 8);
    ɵɵtext(24);
    ɵɵpipe(25, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 8, "AbpAccount::Register"));
    ɵɵadvance(2);
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(4);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 10, "AbpAccount::UserName"));
    ɵɵadvance(5);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(13, 12, "AbpAccount::EmailAddress"));
    ɵɵadvance(5);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(18, 14, "AbpAccount::Password"));
    ɵɵadvance(3);
    ɵɵproperty("nzLoading", ctx_r1.inProgress);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(22, 16, "AbpAccount::Register"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(25, 18, "AbpAccount::Login"));
} }
class UserRegisterComponent extends RegisterComponent {
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
UserRegisterComponent.ɵfac = function UserRegisterComponent_Factory(t) { return new (t || UserRegisterComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(AccountService), ɵɵdirectiveInject(OAuthService), ɵɵdirectiveInject(Store), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(AuthService)); };
UserRegisterComponent.ɵcmp = ɵɵdefineComponent({ type: UserRegisterComponent, selectors: [["fs-register"]], features: [ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[3, "mainContentRef"], ["mainContentRef", ""], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzSize", "large"], ["nz-input", "", "formControlName", "username", 3, "placeholder"], ["nz-input", "", "formControlName", "email", 3, "placeholder"], ["nz-input", "", "type", "password", "formControlName", "password", 3, "placeholder"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "type", "submit", 1, "submit", 3, "nzLoading"], ["routerLink", "/account/login", 1, "login"]], template: function UserRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ng-alain-auth-wrapper", 0);
        ɵɵtemplate(1, UserRegisterComponent_ng_template_1_Template, 26, 20, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(2);
        ɵɵproperty("mainContentRef", _r0);
    } }, directives: [AuthWrapperComponent, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, NzFormDirective, FormGroupDirective, ValidationGroupDirective, NzRowDirective, NzFormItemComponent, NzColDirective, NzFormControlComponent, NzInputGroupComponent, NzInputDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ValidationDirective, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, RouterLinkWithHref], pipes: [LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;margin:0 auto;width:368px}[_nghost-%COMP%]     h3{font-size:16px;margin-bottom:20px}[_nghost-%COMP%]     .submit{width:50%}[_nghost-%COMP%]     .login{float:right;line-height:40px}  .register-password-cdk .error,   .register-password-cdk .success,   .register-password-cdk .warning{transition:color .3s}  .register-password-cdk .success{color:#52c41a}  .register-password-cdk .warning{color:#faad14}  .register-password-cdk .error{color:#ff4d4f}  .register-password-cdk .progress-pass>.progress .ant-progress-bg{background-color:#faad14}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserRegisterComponent, [{
        type: Component,
        args: [{
                selector: 'fs-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.less'],
            }]
    }], function () { return [{ type: FormBuilder }, { type: AccountService }, { type: OAuthService }, { type: Store }, { type: ToasterService }, { type: AuthService }]; }, null); })();

class ChangePasswordComponent extends ChangePasswordComponent$1 {
    constructor(_fb, _store, _toasterService) {
        super(_fb, _store, _toasterService);
        this._fb = _fb;
        this._store = _store;
        this._toasterService = _toasterService;
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(Store), ɵɵdirectiveInject(ToasterService)); };
ChangePasswordComponent.ɵcmp = ɵɵdefineComponent({ type: ChangePasswordComponent, selectors: [["ng-alain-change-password-form"]], features: [ɵɵInheritDefinitionFeature], decls: 16, vars: 14, consts: [[3, "formGroup", "mapErrorsFn", "ngSubmit"], ["nz-input", "", "type", "password", "formControlName", "password", "id", "current-password", 3, "placeholder"], ["nz-input", "", "type", "password", "formControlName", "newPassword", "id", "new-password", 3, "placeholder"], ["nz-input", "", "type", "password", "formControlName", "repeatNewPassword", "id", "confirm-new-password", 3, "placeholder"], ["nz-button", "", "nzType", "primary"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵlistener("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        ɵɵelementStart(1, "nz-form-item");
        ɵɵelementStart(2, "nz-form-control");
        ɵɵelement(3, "input", 1);
        ɵɵpipe(4, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "nz-form-item");
        ɵɵelementStart(6, "nz-form-control");
        ɵɵelement(7, "input", 2);
        ɵɵpipe(8, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "nz-form-item");
        ɵɵelementStart(10, "nz-form-control");
        ɵɵelement(11, "input", 3);
        ɵɵpipe(12, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "button", 4);
        ɵɵtext(14);
        ɵɵpipe(15, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form)("mapErrorsFn", ctx.mapErrorsFn);
        ɵɵadvance(3);
        ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(4, 6, "AbpIdentity::DisplayName:CurrentPassword"));
        ɵɵadvance(4);
        ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 8, "AbpIdentity::DisplayName:NewPassword"));
        ɵɵadvance(4);
        ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(12, 10, "AbpIdentity::DisplayName:NewPasswordConfirm"));
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 12, "AbpIdentity::Save"), " ");
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, FormGroupDirective, ValidationGroupDirective, NzRowDirective, NzFormItemComponent, NzColDirective, NzFormControlComponent, NzInputDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ValidationDirective, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective], pipes: [LocalizationPipe], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ChangePasswordComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-change-password-form',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.less']
            }]
    }], function () { return [{ type: FormBuilder }, { type: Store }, { type: ToasterService }]; }, null); })();

function PersonalSettingsComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 1);
    ɵɵlistener("ngSubmit", function PersonalSettingsComponent_form_0_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.submit(); });
    ɵɵelementStart(1, "nz-form-item");
    ɵɵelementStart(2, "nz-form-label", 2);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(5, "nz-form-control");
    ɵɵelement(6, "input", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "nz-form-item");
    ɵɵelementStart(8, "nz-form-label", 4);
    ɵɵtext(9);
    ɵɵpipe(10, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(11, "nz-form-control");
    ɵɵelement(12, "input", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "nz-form-item");
    ɵɵelementStart(14, "nz-form-label", 6);
    ɵɵtext(15);
    ɵɵpipe(16, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(17, "nz-form-control");
    ɵɵelement(18, "input", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(19, "nz-form-item");
    ɵɵelementStart(20, "nz-form-label", 8);
    ɵɵtext(21);
    ɵɵpipe(22, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(23, "nz-form-control");
    ɵɵelement(24, "input", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(25, "nz-form-item");
    ɵɵelementStart(26, "nz-form-label", 10);
    ɵɵtext(27);
    ɵɵpipe(28, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(29, "nz-form-control");
    ɵɵelement(30, "input", 11);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(31, "button", 12);
    ɵɵtext(32);
    ɵɵpipe(33, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r0.form);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 7, "AbpIdentity::DisplayName:UserName"));
    ɵɵadvance(6);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 9, "AbpIdentity::DisplayName:Name"));
    ɵɵadvance(6);
    ɵɵtextInterpolate(ɵɵpipeBind1(16, 11, "AbpIdentity::DisplayName:Surname"));
    ɵɵadvance(6);
    ɵɵtextInterpolate(ɵɵpipeBind1(22, 13, "AbpIdentity::DisplayName:Email"));
    ɵɵadvance(6);
    ɵɵtextInterpolate(ɵɵpipeBind1(28, 15, "AbpIdentity::DisplayName:PhoneNumber"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(33, 17, "AbpIdentity::Save"), " ");
} }
class PersonalSettingsComponent extends PersonalSettingsComponent$1 {
    constructor(_fb, _store, _toasterService) {
        super(_fb, _store, _toasterService);
        this._fb = _fb;
        this._store = _store;
        this._toasterService = _toasterService;
    }
}
PersonalSettingsComponent.ɵfac = function PersonalSettingsComponent_Factory(t) { return new (t || PersonalSettingsComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(Store), ɵɵdirectiveInject(ToasterService)); };
PersonalSettingsComponent.ɵcmp = ɵɵdefineComponent({ type: PersonalSettingsComponent, selectors: [["ng-alain-personal-settings-form"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "username"], ["nz-input", "", "formControlName", "userName", "id", "username"], ["nzRequired", "", "nzFor", "name"], ["nz-input", "", "formControlName", "name", "id", "name"], ["nzRequired", "", "nzFor", "surname"], ["nz-input", "", "formControlName", "surname", "id", "surname"], ["nzRequired", "", "nzFor", "email-address"], ["nz-input", "", "formControlName", "email", "id", "email-address"], ["nzRequired", "", "nzFor", "phone-number"], ["nz-input", "", "formControlName", "phoneNumber", "id", "phone-number"], ["nz-button", "", "nzType", "primary"]], template: function PersonalSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PersonalSettingsComponent_form_0_Template, 34, 19, "form", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.form);
    } }, directives: [NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, FormGroupDirective, ValidationGroupDirective, NzRowDirective, NzFormItemComponent, NzColDirective, NzFormLabelComponent, NzFormControlComponent, NzInputDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ValidationDirective, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective], pipes: [LocalizationPipe], styles: ["nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PersonalSettingsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-personal-settings-form',
                templateUrl: './personal-settings.component.html',
                styleUrls: ['./personal-settings.component.less']
            }]
    }], function () { return [{ type: FormBuilder }, { type: Store }, { type: ToasterService }]; }, null); })();

function ManageProfileComponent_ng_alain_change_password_form_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ng-alain-change-password-form");
} }
function ManageProfileComponent_ng_alain_personal_settings_form_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ng-alain-personal-settings-form");
} }
class ManageProfileComponent {
    constructor() {
        this.selectedTab = 0;
    }
}
ManageProfileComponent.ɵfac = function ManageProfileComponent_Factory(t) { return new (t || ManageProfileComponent)(); };
ManageProfileComponent.ɵcmp = ɵɵdefineComponent({ type: ManageProfileComponent, selectors: [["ng-alain-manage-profile"]], decls: 19, vars: 13, consts: [[1, "row", "entry-row"], [1, "col-auto"], ["id", "breadcrumb", 1, "col-md-auto", "pl-md-0"], [1, "col"], [1, "main"], [1, "menu"], ["nz-menu", "", "nzMode", "inline"], ["nz-menu-item", "", 3, "nzSelected", "click"], [1, "content"], [1, "title"], [4, "ngIf"]], template: function ManageProfileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1);
        ɵɵelement(2, "div", 2);
        ɵɵelement(3, "div", 3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵelementStart(6, "ul", 6);
        ɵɵelementStart(7, "li", 7);
        ɵɵlistener("click", function ManageProfileComponent_Template_li_click_7_listener() { return ctx.selectedTab = 0; });
        ɵɵtext(8);
        ɵɵpipe(9, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementStart(10, "li", 7);
        ɵɵlistener("click", function ManageProfileComponent_Template_li_click_10_listener() { return ctx.selectedTab = 1; });
        ɵɵtext(11);
        ɵɵpipe(12, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 8);
        ɵɵelementStart(14, "div", 9);
        ɵɵtext(15);
        ɵɵpipe(16, "abpLocalization");
        ɵɵelementEnd();
        ɵɵtemplate(17, ManageProfileComponent_ng_alain_change_password_form_17_Template, 1, 0, "ng-alain-change-password-form", 10);
        ɵɵtemplate(18, ManageProfileComponent_ng_alain_personal_settings_form_18_Template, 1, 0, "ng-alain-personal-settings-form", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(7);
        ɵɵproperty("nzSelected", ctx.selectedTab === 0);
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 7, "AbpUi::ChangePassword"), " ");
        ɵɵadvance(2);
        ɵɵproperty("nzSelected", ctx.selectedTab === 1);
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 9, "AbpAccount::PersonalSettings"), " ");
        ɵɵadvance(4);
        ɵɵtextInterpolate(ɵɵpipeBind1(16, 11, "AbpAccount::ChangePassword"));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.selectedTab === 0);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.selectedTab === 1);
    } }, directives: [NzMenuDirective, ɵNzTransitionPatchDirective, NzMenuItemDirective, NgIf, ChangePasswordComponent, PersonalSettingsComponent], pipes: [LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;padding-top:24px}.main[_ngcontent-%COMP%]{background-color:#fff;display:flex;overflow:auto;padding-bottom:16px;padding-top:16px;width:100%}.menu[_ngcontent-%COMP%]{border-right:1px solid #f0f0f0;width:224px}.menu[_ngcontent-%COMP%]     .ant-menu-inline{border:none}.menu[_ngcontent-%COMP%]     .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content[_ngcontent-%COMP%]{flex:1;padding:8px 40px}.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:rgba(0,0,0,.85);font-size:20px;font-weight:500;line-height:28px;margin-bottom:12px}.content[_ngcontent-%COMP%]     .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content[_ngcontent-%COMP%]     .ant-list-item{padding-bottom:14px;padding-top:14px}@media screen and (max-width:767px){.main[_ngcontent-%COMP%]{flex-direction:column}.main[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{border:none;width:100%}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:40px}}"], data: { animation: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ManageProfileComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-manage-profile',
                templateUrl: './manage-profile.component.html',
                styleUrls: ['./manage-profile.component.less'],
                animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])],
            }]
    }], null, null); })();

function accountOptionsFactory(options) {
    return Object.assign({ redirectUrl: '/' }, options);
}
class AccountNgAlainModule {
    static forChild(options) {
        return {
            ngModule: AccountNgAlainModule,
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
        return new LazyModuleFactory(AccountNgAlainModule.forChild(options));
    }
}
AccountNgAlainModule.ɵmod = ɵɵdefineNgModule({ type: AccountNgAlainModule });
AccountNgAlainModule.ɵinj = ɵɵdefineInjector({ factory: function AccountNgAlainModule_Factory(t) { return new (t || AccountNgAlainModule)(); }, imports: [[
            CoreModule,
            NgAlainBasicModule,
            AccountWrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AccountNgAlainModule, { declarations: [AuthWrapperComponent,
        TenantBoxComponent,
        UserLoginComponent,
        UserRegisterComponent,
        ManageProfileComponent,
        PersonalSettingsComponent,
        ChangePasswordComponent], imports: [CoreModule,
        NgAlainBasicModule,
        AccountWrapModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AccountNgAlainModule, [{
        type: NgModule,
        args: [{
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
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    AccountWrapModule
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AccountNgAlainModule, ManageProfileComponent, UserLoginComponent, UserRegisterComponent, accountOptionsFactory };
//# sourceMappingURL=fs-account-ng-alain.js.map
