import { IdentityWrapModule } from '@fs/identity/wrap';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵpipe, ɵɵelement, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵreference, ɵɵadvance, ɵɵtextInterpolate, ɵɵproperty, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵtemplate, ɵɵpropertyInterpolate, ɵɵtemplateRefExtractor, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵpureFunction0, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UsersComponent as UsersComponent$1, IdentityService, RolesComponent as RolesComponent$1 } from '@abp/ng.identity';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { FormBuilder, DefaultValueAccessor, NgControlStatus, NgModel, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, FormControlName, FormControlDirective } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ListService, PermissionDirective, FormSubmitDirective, LocalizationPipe, LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormDirective } from 'ng-zorro-antd/form';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { NgForOf, NgIf, AsyncPipe } from '@angular/common';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { PermissionManagementComponent, PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
import { NzDropDownADirective, NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzMenuDirective, NzMenuItemDirective } from 'ng-zorro-antd/menu';
import { ValidationGroupDirective, ValidationDirective } from '@ngx-validate/core';
import { NzTabSetComponent, NzTabComponent } from 'ng-zorro-antd/tabs';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NzTagComponent } from 'ng-zorro-antd/tag';

function UsersComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "td");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "td");
    ɵɵelementStart(8, "a", 16);
    ɵɵtext(9);
    ɵɵpipe(10, "abpLocalization");
    ɵɵelement(11, "i", 17);
    ɵɵelementEnd();
    ɵɵelementStart(12, "nz-dropdown-menu", null, 18);
    ɵɵelementStart(14, "ul", 19);
    ɵɵelementStart(15, "li", 20);
    ɵɵlistener("click", function UsersComponent_tr_36_Template_li_click_15_listener() { ɵɵrestoreView(_r11); const data_r8 = ctx.$implicit; const ctx_r10 = ɵɵnextContext(); return ctx_r10.edit(data_r8.id); });
    ɵɵtext(16);
    ɵɵpipe(17, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(18, "li", 20);
    ɵɵlistener("click", function UsersComponent_tr_36_Template_li_click_18_listener() { ɵɵrestoreView(_r11); const data_r8 = ctx.$implicit; const ctx_r12 = ɵɵnextContext(); return ctx_r12.openPermissionsModal(data_r8.id); });
    ɵɵtext(19);
    ɵɵpipe(20, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(21, "li", 20);
    ɵɵlistener("click", function UsersComponent_tr_36_Template_li_click_21_listener() { ɵɵrestoreView(_r11); const data_r8 = ctx.$implicit; const ctx_r13 = ɵɵnextContext(); return ctx_r13.delete(data_r8.id, data_r8.userName); });
    ɵɵtext(22);
    ɵɵpipe(23, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const _r9 = ɵɵreference(13);
    ɵɵadvance(2);
    ɵɵtextInterpolate(data_r8.userName);
    ɵɵadvance(2);
    ɵɵtextInterpolate(data_r8.email);
    ɵɵadvance(2);
    ɵɵtextInterpolate(data_r8.phoneNumber);
    ɵɵadvance(2);
    ɵɵproperty("nzDropdownMenu", _r9);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 11, "AbpIdentity::Actions"), " ");
    ɵɵadvance(6);
    ɵɵproperty("abpPermission", "AbpIdentity.Users.Update");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 13, "AbpIdentity::Edit"), "");
    ɵɵadvance(2);
    ɵɵproperty("abpPermission", "AbpIdentity.Users.ManagePermissions");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 15, "AbpIdentity::Permissions"), "");
    ɵɵadvance(2);
    ɵɵproperty("abpPermission", "AbpIdentity.Users.Delete");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 17, "AbpIdentity::Delete"), "");
} }
function UsersComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, (ctx_r3.selected == null ? null : ctx_r3.selected.id) ? "AbpIdentity::Edit" : "AbpIdentity::NewUser"), " ");
} }
function UsersComponent_ng_template_40_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵelement(1, "i", 24);
    ɵɵelementEnd();
} }
function UsersComponent_ng_template_40_form_2_nz_form_control_55_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-form-control");
    ɵɵelementStart(1, "label", 43);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const roleGroup_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r17 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("formControl", roleGroup_r18.controls[ctx_r17.roles[i_r19].name]);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r17.roles[i_r19].name, " ");
} }
function UsersComponent_ng_template_40_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 25);
    ɵɵlistener("ngSubmit", function UsersComponent_ng_template_40_form_2_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(2); return ctx_r20.save(); });
    ɵɵelementStart(1, "nz-tabset");
    ɵɵelementStart(2, "nz-tab", 26);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementStart(4, "nz-form-item");
    ɵɵelementStart(5, "nz-form-label", 27);
    ɵɵtext(6);
    ɵɵpipe(7, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(8, "nz-form-control", 28);
    ɵɵelement(9, "input", 29);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "nz-form-item");
    ɵɵelementStart(11, "nz-form-label", 30);
    ɵɵtext(12);
    ɵɵpipe(13, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(14, "nz-form-control", 28);
    ɵɵelement(15, "input", 31);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(16, "nz-form-item");
    ɵɵelementStart(17, "nz-form-label", 32);
    ɵɵtext(18);
    ɵɵpipe(19, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(20, "nz-form-control", 28);
    ɵɵelement(21, "input", 33);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(22, "nz-form-item");
    ɵɵelementStart(23, "nz-form-label", 34);
    ɵɵtext(24);
    ɵɵpipe(25, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(26, "nz-form-control", 28);
    ɵɵelement(27, "input", 35);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(28, "nz-form-item");
    ɵɵelementStart(29, "nz-form-label", 36);
    ɵɵtext(30);
    ɵɵpipe(31, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(32, "nz-form-control", 28);
    ɵɵelement(33, "input", 37);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(34, "nz-form-item");
    ɵɵelementStart(35, "nz-form-label", 38);
    ɵɵtext(36);
    ɵɵpipe(37, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(38, "nz-form-control", 28);
    ɵɵelement(39, "input", 39);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(40, "nz-form-item");
    ɵɵelementStart(41, "nz-form-control");
    ɵɵelementStart(42, "label", 40);
    ɵɵelementStart(43, "span");
    ɵɵtext(44);
    ɵɵpipe(45, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(46, "nz-form-item");
    ɵɵelementStart(47, "nz-form-control");
    ɵɵelementStart(48, "label", 41);
    ɵɵelementStart(49, "span");
    ɵɵtext(50);
    ɵɵpipe(51, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(52, "nz-tab", 26);
    ɵɵpipe(53, "abpLocalization");
    ɵɵelementStart(54, "nz-form-item");
    ɵɵtemplate(55, UsersComponent_ng_template_40_form_2_nz_form_control_55_Template, 4, 2, "nz-form-control", 42);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", ctx_r16.form);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("nzTitle", ɵɵpipeBind1(3, 37, "AbpIdentity::UserInformations"));
    ɵɵadvance(3);
    ɵɵproperty("nzSm", 6)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 39, "AbpIdentity::UserName"), "");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 14)("nzXs", 24);
    ɵɵadvance(3);
    ɵɵproperty("nzSm", 6)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(13, 41, "AbpIdentity::DisplayName:Name"), " ");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 14)("nzXs", 24);
    ɵɵadvance(3);
    ɵɵproperty("nzSm", 6)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 43, "AbpIdentity::DisplayName:Surname"), "");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 14)("nzXs", 24);
    ɵɵadvance(3);
    ɵɵproperty("nzSm", 6)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(25, 45, "AbpIdentity::Password"), "");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 14)("nzXs", 24);
    ɵɵadvance(3);
    ɵɵproperty("nzSm", 6)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(31, 47, "AbpIdentity::EmailAddress"), "");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 14)("nzXs", 24);
    ɵɵadvance(3);
    ɵɵproperty("nzSm", 6)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(37, 49, "AbpIdentity::PhoneNumber"), " ");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 14)("nzXs", 24);
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(45, 51, "AbpIdentity::DisplayName:LockoutEnabled"), " ");
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(51, 53, "AbpIdentity::DisplayName:TwoFactorEnabled"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("nzTitle", ɵɵpipeBind1(53, 55, "AbpIdentity::Roles"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r16.roleGroups)("ngForTrackBy", ctx_r16.trackByFn);
} }
function UsersComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, UsersComponent_ng_template_40_ng_template_0_Template, 2, 0, "ng-template", null, 21, ɵɵtemplateRefExtractor);
    ɵɵtemplate(2, UsersComponent_ng_template_40_form_2_Template, 56, 57, "form", 22);
} if (rf & 2) {
    const _r14 = ɵɵreference(1);
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r5.form)("ngIfElse", _r14);
} }
function UsersComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 44);
    ɵɵlistener("click", function UsersComponent_ng_template_42_Template_button_click_0_listener() { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(); return ctx_r22.isModalVisible = false; });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 45);
    ɵɵlistener("click", function UsersComponent_ng_template_42_Template_button_click_3_listener() { ɵɵrestoreView(_r23); const ctx_r24 = ɵɵnextContext(); return ctx_r24.save(); });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "AbpIdentity::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r7.form == null ? null : ctx_r7.form.invalid);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "AbpIdentity::Save"), " ");
} }
const _c0 = function () { return { xs: 8, sm: 8, md: 8, lg: 24, xl: 48, xxl: 48 }; };
const _c1 = function () { return { top: "20px" }; };
class UsersComponent extends UsersComponent$1 {
    constructor(_list, _confirmationService, _fb, _store, _identityService) {
        super(_list, _confirmationService, _fb, _store, _identityService);
        this._list = _list;
        this._confirmationService = _confirmationService;
        this._fb = _fb;
        this._store = _store;
        this._identityService = _identityService;
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(ɵɵdirectiveInject(ListService), ɵɵdirectiveInject(ConfirmationService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(Store), ɵɵdirectiveInject(IdentityService)); };
UsersComponent.ɵcmp = ɵɵdefineComponent({ type: UsersComponent, selectors: [["ng-alain-users"]], features: [ɵɵProvidersFeature([ListService]), ɵɵInheritDefinitionFeature], decls: 45, vars: 47, consts: [[3, "nzBordered"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzMd", "8", "nzSm", "24"], ["nzFor", "no"], ["nz-input", "", "type", "search", 3, "placeholder", "ngModel", "ngModelChange"], ["nz-button", "", 3, "abpPermission", "nzType", "click"], ["nz-icon", "", "nzType", "plus"], [1, "my-md"], [3, "nzData", "nzPageSize", "nzTotal", "nzLoading", "nzFrontPagination", "nzPageIndexChange"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [3, "nzStyle", "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["providerName", "U", 3, "visible", "providerKey", "visibleChange"], ["nz-dropdown", "", 1, "ant-dropdown-link", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["opMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "abpPermission", "click"], ["loaderRef", ""], ["nz-form", "", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], ["nz-form", "", 3, "formGroup", "ngSubmit"], [3, "nzTitle"], ["nzRequired", "", "nzFor", "user-name", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "userName", "id", "user-name"], ["nzFor", "name", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "name", "id", "name"], ["nzFor", "surname", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "surname", "id", "surname"], ["nzFor", "password", "nzRequired", "", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "password", "id", "password", "formControlName", "password"], ["nzRequired", "", "nzFor", "email", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "email", "id", "email"], ["nzFor", "phoneNumber", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "phoneNumber", "id", "phoneNumber"], ["nz-checkbox", "", "formControlName", "lockoutEnabled"], ["nz-checkbox", "", "formControlName", "twoFactorEnabled"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 3, "formControl"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-card", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "nz-form-item");
        ɵɵelementStart(4, "nz-form-label", 3);
        ɵɵtext(5);
        ɵɵpipe(6, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementStart(7, "nz-form-control");
        ɵɵelementStart(8, "input", 4);
        ɵɵlistener("ngModelChange", function UsersComponent_Template_input_ngModelChange_8_listener($event) { return ctx.list.filter = $event; });
        ɵɵpipe(9, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "button", 5);
        ɵɵlistener("click", function UsersComponent_Template_button_click_10_listener() { return ctx.add(); });
        ɵɵelement(11, "i", 6);
        ɵɵelementStart(12, "span");
        ɵɵtext(13);
        ɵɵpipe(14, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(15, "div", 7);
        ɵɵelementStart(16, "nz-table", 8, 9);
        ɵɵlistener("nzPageIndexChange", function UsersComponent_Template_nz_table_nzPageIndexChange_16_listener($event) { return ctx.list.page = $event - 1; });
        ɵɵpipe(18, "async");
        ɵɵpipe(19, "async");
        ɵɵpipe(20, "async");
        ɵɵelementStart(21, "thead");
        ɵɵelementStart(22, "tr");
        ɵɵelementStart(23, "th");
        ɵɵtext(24);
        ɵɵpipe(25, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementStart(26, "th");
        ɵɵtext(27);
        ɵɵpipe(28, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementStart(29, "th");
        ɵɵtext(30);
        ɵɵpipe(31, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementStart(32, "th");
        ɵɵtext(33);
        ɵɵpipe(34, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(35, "tbody");
        ɵɵtemplate(36, UsersComponent_tr_36_Template, 24, 19, "tr", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(37, "nz-modal", 11);
        ɵɵlistener("nzVisibleChange", function UsersComponent_Template_nz_modal_nzVisibleChange_37_listener($event) { return ctx.isModalVisible = $event; })("nzOnCancel", function UsersComponent_Template_nz_modal_nzOnCancel_37_listener() { return ctx.isModalVisible = false; });
        ɵɵtemplate(38, UsersComponent_ng_template_38_Template, 2, 3, "ng-template", null, 12, ɵɵtemplateRefExtractor);
        ɵɵtemplate(40, UsersComponent_ng_template_40_Template, 3, 2, "ng-template", null, 13, ɵɵtemplateRefExtractor);
        ɵɵtemplate(42, UsersComponent_ng_template_42_Template, 6, 7, "ng-template", null, 14, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(44, "ng-alain-permission-management", 15);
        ɵɵlistener("visibleChange", function UsersComponent_Template_ng_alain_permission_management_visibleChange_44_listener($event) { return ctx.visiblePermissions = $event; });
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(17);
        const _r2 = ɵɵreference(39);
        const _r4 = ɵɵreference(41);
        const _r6 = ɵɵreference(43);
        ɵɵproperty("nzBordered", false);
        ɵɵadvance(1);
        ɵɵproperty("nzGutter", ɵɵpureFunction0(45, _c0));
        ɵɵadvance(4);
        ɵɵtextInterpolate(ɵɵpipeBind1(6, 25, "AbpIdentity::PagerSearch"));
        ɵɵadvance(3);
        ɵɵproperty("placeholder", ɵɵpipeBind1(9, 27, "AbpUi::PagerSearch"))("ngModel", ctx.list.filter);
        ɵɵadvance(2);
        ɵɵproperty("abpPermission", "AbpIdentity.Users.Create")("nzType", "primary");
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(14, 29, "AbpIdentity::NewUser"));
        ɵɵadvance(3);
        ɵɵproperty("nzData", ɵɵpipeBind1(18, 31, ctx.data$))("nzPageSize", ctx.list.maxResultCount)("nzTotal", ɵɵpipeBind1(19, 33, ctx.totalCount$))("nzLoading", ɵɵpipeBind1(20, 35, ctx.list.isLoading$))("nzFrontPagination", false);
        ɵɵadvance(8);
        ɵɵtextInterpolate(ɵɵpipeBind1(25, 37, "AbpIdentity::DisplayName:UserName"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(28, 39, "AbpIdentity::DisplayName:Email"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(31, 41, "AbpIdentity::DisplayName:PhoneNumber"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(34, 43, "AbpIdentity::Actions"));
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", _r0.data);
        ɵɵadvance(1);
        ɵɵproperty("nzStyle", ɵɵpureFunction0(46, _c1))("nzVisible", ctx.isModalVisible)("nzTitle", _r2)("nzContent", _r4)("nzFooter", _r6);
        ɵɵadvance(7);
        ɵɵproperty("visible", ctx.visiblePermissions)("providerKey", ctx.providerKey);
    } }, directives: [NzCardComponent, NzRowDirective, NzColDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzInputDirective, DefaultValueAccessor, NgControlStatus, NgModel, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, PermissionDirective, NzIconDirective, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NgForOf, NzModalComponent, PermissionManagementComponent, NzDropDownADirective, NzDropDownDirective, NzDropdownMenuComponent, NzMenuDirective, NzMenuItemDirective, NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, NzFormDirective, FormGroupDirective, ValidationGroupDirective, NzTabSetComponent, NzTabComponent, FormControlName, ValidationDirective, NzCheckboxComponent, FormControlDirective], pipes: [LocalizationPipe, AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UsersComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-users',
                templateUrl: './users.component.html',
                providers: [ListService],
            }]
    }], function () { return [{ type: ListService }, { type: ConfirmationService }, { type: FormBuilder }, { type: Store }, { type: IdentityService }]; }, null); })();

function RolesComponent_tr_21_nz_tag_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-tag", 18);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("nzColor", "#17a2b8");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpIdentity::DisplayName:IsPublic"), "");
} }
function RolesComponent_tr_21_nz_tag_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-tag", 18);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("nzColor", "#28a745");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpIdentity::DisplayName:IsDefault"), "");
} }
function RolesComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵtext(2);
    ɵɵtemplate(3, RolesComponent_tr_21_nz_tag_3_Template, 3, 4, "nz-tag", 12);
    ɵɵtemplate(4, RolesComponent_tr_21_nz_tag_4_Template, 3, 4, "nz-tag", 12);
    ɵɵelementEnd();
    ɵɵelementStart(5, "td");
    ɵɵelementStart(6, "a", 13);
    ɵɵtext(7);
    ɵɵpipe(8, "abpLocalization");
    ɵɵelement(9, "i", 14);
    ɵɵelementEnd();
    ɵɵelementStart(10, "nz-dropdown-menu", null, 15);
    ɵɵelementStart(12, "ul", 16);
    ɵɵelementStart(13, "li", 17);
    ɵɵlistener("click", function RolesComponent_tr_21_Template_li_click_13_listener() { ɵɵrestoreView(_r13); const data_r8 = ctx.$implicit; const ctx_r12 = ɵɵnextContext(); return ctx_r12.edit(data_r8.id); });
    ɵɵtext(14);
    ɵɵpipe(15, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(16, "li", 17);
    ɵɵlistener("click", function RolesComponent_tr_21_Template_li_click_16_listener() { ɵɵrestoreView(_r13); const data_r8 = ctx.$implicit; const ctx_r14 = ɵɵnextContext(); return ctx_r14.openPermissionsModal(data_r8.name); });
    ɵɵtext(17);
    ɵɵpipe(18, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(19, "li", 17);
    ɵɵlistener("click", function RolesComponent_tr_21_Template_li_click_19_listener() { ɵɵrestoreView(_r13); const data_r8 = ctx.$implicit; const ctx_r15 = ɵɵnextContext(); return ctx_r15.delete(data_r8.id, data_r8.name); });
    ɵɵtext(20);
    ɵɵpipe(21, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const _r11 = ɵɵreference(11);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", data_r8.name, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", data_r8.isPublic);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", data_r8.isDefault);
    ɵɵadvance(2);
    ɵɵproperty("nzDropdownMenu", _r11);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 11, "AbpIdentity::Actions"), " ");
    ɵɵadvance(6);
    ɵɵproperty("abpPermission", "AbpIdentity.Roles.Update");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 13, "AbpIdentity::Edit"), "");
    ɵɵadvance(2);
    ɵɵproperty("abpPermission", "AbpIdentity.Roles.ManagePermissions");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 15, "AbpIdentity::Permissions"), "");
    ɵɵadvance(2);
    ɵɵproperty("abpPermission", "AbpIdentity.Roles.Delete");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(21, 17, "AbpIdentity::Delete"), "");
} }
function RolesComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, (ctx_r3.selected == null ? null : ctx_r3.selected.id) ? "AbpIdentity::Edit" : "AbpIdentity::NewRole"), " ");
} }
function RolesComponent_ng_template_25_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵelement(1, "i", 22);
    ɵɵelementEnd();
} }
function RolesComponent_ng_template_25_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 23);
    ɵɵlistener("ngSubmit", function RolesComponent_ng_template_25_form_2_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(2); return ctx_r19.save(); });
    ɵɵelementStart(1, "nz-form-item");
    ɵɵelementStart(2, "nz-form-label", 24);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(5, "nz-form-control", 25);
    ɵɵelement(6, "input", 26);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "nz-form-item");
    ɵɵelementStart(8, "nz-form-control", 27);
    ɵɵelementStart(9, "label", 28);
    ɵɵelementStart(10, "span");
    ɵɵtext(11);
    ɵɵpipe(12, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "label", 29);
    ɵɵelementStart(14, "span");
    ɵɵtext(15);
    ɵɵpipe(16, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", ctx_r18.form);
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 6)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 10, "AbpIdentity::RoleName"), "");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 14)("nzXs", 24);
    ɵɵadvance(3);
    ɵɵproperty("nzSpan", 14)("nzOffset", 6);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 12, "AbpIdentity::DisplayName:IsDefault"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 14, "AbpIdentity::DisplayName:IsPublic"), " ");
} }
function RolesComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, RolesComponent_ng_template_25_ng_template_0_Template, 2, 0, "ng-template", null, 19, ɵɵtemplateRefExtractor);
    ɵɵtemplate(2, RolesComponent_ng_template_25_form_2_Template, 17, 16, "form", 20);
} if (rf & 2) {
    const _r16 = ɵɵreference(1);
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r5.form)("ngIfElse", _r16);
} }
function RolesComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵlistener("click", function RolesComponent_ng_template_27_Template_button_click_0_listener() { ɵɵrestoreView(_r22); const ctx_r21 = ɵɵnextContext(); return ctx_r21.isModalVisible = false; });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 31);
    ɵɵlistener("click", function RolesComponent_ng_template_27_Template_button_click_3_listener() { ɵɵrestoreView(_r22); const ctx_r23 = ɵɵnextContext(); return ctx_r23.save(); });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "AbpIdentity::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r7.form == null ? null : ctx_r7.form.invalid);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "AbpIdentity::Save"), " ");
} }
const _c0$1 = function () { return { top: "20px" }; };
class RolesComponent extends RolesComponent$1 {
    constructor(_list, _confirmationService, _fb, _store) {
        super(_list, _confirmationService, _fb, _store);
        this._list = _list;
        this._confirmationService = _confirmationService;
        this._fb = _fb;
        this._store = _store;
    }
}
RolesComponent.ɵfac = function RolesComponent_Factory(t) { return new (t || RolesComponent)(ɵɵdirectiveInject(ListService), ɵɵdirectiveInject(ConfirmationService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(Store)); };
RolesComponent.ɵcmp = ɵɵdefineComponent({ type: RolesComponent, selectors: [["ng-alain-roles"]], features: [ɵɵProvidersFeature([ListService]), ɵɵInheritDefinitionFeature], decls: 30, vars: 32, consts: [[3, "nzBordered"], ["nz-button", "", 3, "abpPermission", "nzType", "click"], ["nz-icon", "", "nzType", "plus"], [1, "my-md"], [3, "nzData", "nzPageSize", "nzTotal", "nzLoading", "nzFrontPagination", "nzPageIndexChange"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [3, "nzStyle", "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["providerName", "R", 3, "visible", "providerKey", "visibleChange"], [3, "nzColor", 4, "ngIf"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["opMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "abpPermission", "click"], [3, "nzColor"], ["loaderRef", ""], ["nz-form", "", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "role-name", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "name", "id", "role-name"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "isDefault"], ["nz-checkbox", "", "formControlName", "isPublic"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"]], template: function RolesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-card", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("click", function RolesComponent_Template_button_click_1_listener() { return ctx.add(); });
        ɵɵelement(2, "i", 2);
        ɵɵelementStart(3, "span");
        ɵɵtext(4);
        ɵɵpipe(5, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(6, "div", 3);
        ɵɵelementStart(7, "nz-table", 4, 5);
        ɵɵlistener("nzPageIndexChange", function RolesComponent_Template_nz_table_nzPageIndexChange_7_listener($event) { return ctx.list.page = $event - 1; });
        ɵɵpipe(9, "async");
        ɵɵpipe(10, "async");
        ɵɵpipe(11, "async");
        ɵɵelementStart(12, "thead");
        ɵɵelementStart(13, "tr");
        ɵɵelementStart(14, "th");
        ɵɵtext(15);
        ɵɵpipe(16, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementStart(17, "th");
        ɵɵtext(18);
        ɵɵpipe(19, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "tbody");
        ɵɵtemplate(21, RolesComponent_tr_21_Template, 22, 19, "tr", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(22, "nz-modal", 7);
        ɵɵlistener("nzVisibleChange", function RolesComponent_Template_nz_modal_nzVisibleChange_22_listener($event) { return ctx.isModalVisible = $event; })("nzOnCancel", function RolesComponent_Template_nz_modal_nzOnCancel_22_listener() { return ctx.isModalVisible = false; });
        ɵɵtemplate(23, RolesComponent_ng_template_23_Template, 2, 3, "ng-template", null, 8, ɵɵtemplateRefExtractor);
        ɵɵtemplate(25, RolesComponent_ng_template_25_Template, 3, 2, "ng-template", null, 9, ɵɵtemplateRefExtractor);
        ɵɵtemplate(27, RolesComponent_ng_template_27_Template, 6, 7, "ng-template", null, 10, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(29, "ng-alain-permission-management", 11);
        ɵɵlistener("visibleChange", function RolesComponent_Template_ng_alain_permission_management_visibleChange_29_listener($event) { return ctx.visiblePermissions = $event; });
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(8);
        const _r2 = ɵɵreference(24);
        const _r4 = ɵɵreference(26);
        const _r6 = ɵɵreference(28);
        ɵɵproperty("nzBordered", false);
        ɵɵadvance(1);
        ɵɵproperty("abpPermission", "AbpIdentity.Roles.Create")("nzType", "primary");
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(5, 19, "AbpIdentity::NewRole"));
        ɵɵadvance(3);
        ɵɵproperty("nzData", ɵɵpipeBind1(9, 21, ctx.data$))("nzPageSize", ctx.list.maxResultCount)("nzTotal", ɵɵpipeBind1(10, 23, ctx.totalCount$))("nzLoading", ɵɵpipeBind1(11, 25, ctx.list.isLoading$))("nzFrontPagination", false);
        ɵɵadvance(8);
        ɵɵtextInterpolate(ɵɵpipeBind1(16, 27, "AbpIdentity::DisplayName:RoleName"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(19, 29, "AbpIdentity::Actions"));
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", _r0.data);
        ɵɵadvance(1);
        ɵɵproperty("nzStyle", ɵɵpureFunction0(31, _c0$1))("nzVisible", ctx.isModalVisible)("nzTitle", _r2)("nzContent", _r4)("nzFooter", _r6);
        ɵɵadvance(7);
        ɵɵproperty("visible", ctx.visiblePermissions)("providerKey", ctx.providerKey);
    } }, directives: [NzCardComponent, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, PermissionDirective, NzIconDirective, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NgForOf, NzModalComponent, PermissionManagementComponent, NgIf, NzDropDownADirective, NzDropDownDirective, NzDropdownMenuComponent, NzMenuDirective, NzMenuItemDirective, NzTagComponent, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, NzFormDirective, FormGroupDirective, ValidationGroupDirective, NzRowDirective, NzFormItemComponent, NzColDirective, NzFormLabelComponent, NzFormControlComponent, NzInputDirective, DefaultValueAccessor, NgControlStatus, FormControlName, ValidationDirective, NzCheckboxComponent], pipes: [LocalizationPipe, AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RolesComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-roles',
                templateUrl: './roles.component.html',
                providers: [ListService],
            }]
    }], function () { return [{ type: ListService }, { type: ConfirmationService }, { type: FormBuilder }, { type: Store }]; }, null); })();

//import { SettingManagementNgAlainModule } from '@fs/setting-management/ng-alain';
//import { InitialService} from './services/initial.service'
class IdentityNgAlainModule {
    static forChild() {
        return {
            ngModule: IdentityNgAlainModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(IdentityNgAlainModule.forChild());
    }
}
IdentityNgAlainModule.ɵmod = ɵɵdefineNgModule({ type: IdentityNgAlainModule });
IdentityNgAlainModule.ɵinj = ɵɵdefineInjector({ factory: function IdentityNgAlainModule_Factory(t) { return new (t || IdentityNgAlainModule)(); }, imports: [[
            CoreModule,
            NgAlainBasicModule,
            PermissionManagementNgAlainModule,
            IdentityWrapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(IdentityNgAlainModule, { declarations: [UsersComponent, RolesComponent], imports: [CoreModule,
        NgAlainBasicModule,
        PermissionManagementNgAlainModule,
        IdentityWrapModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(IdentityNgAlainModule, [{
        type: NgModule,
        args: [{
                declarations: [UsersComponent, RolesComponent],
                entryComponents: [UsersComponent, RolesComponent],
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    PermissionManagementNgAlainModule,
                    IdentityWrapModule,
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { IdentityNgAlainModule, RolesComponent, UsersComponent };
//# sourceMappingURL=fs-identity-ng-alain.js.map
