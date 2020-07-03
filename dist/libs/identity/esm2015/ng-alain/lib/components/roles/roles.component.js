import { RolesComponent as AbpRolesComponent } from '@abp/ng.identity';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ListService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "@abp/ng.theme.shared";
import * as i3 from "@angular/forms";
import * as i4 from "@ngxs/store";
import * as i5 from "ng-zorro-antd/card";
import * as i6 from "ng-zorro-antd/button";
import * as i7 from "ng-zorro-antd/core/wave";
import * as i8 from "ng-zorro-antd/core/transition-patch";
import * as i9 from "ng-zorro-antd/icon";
import * as i10 from "ng-zorro-antd/table";
import * as i11 from "@angular/common";
import * as i12 from "ng-zorro-antd/modal";
import * as i13 from "@fs/permission-management/ng-alain";
import * as i14 from "ng-zorro-antd/dropdown";
import * as i15 from "ng-zorro-antd/menu";
import * as i16 from "ng-zorro-antd/tag";
import * as i17 from "ng-zorro-antd/form";
import * as i18 from "@ngx-validate/core";
import * as i19 from "ng-zorro-antd/grid";
import * as i20 from "ng-zorro-antd/input";
import * as i21 from "ng-zorro-antd/checkbox";
function RolesComponent_tr_21_nz_tag_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-tag", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("nzColor", "#17a2b8");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpIdentity::DisplayName:IsPublic"), "");
} }
function RolesComponent_tr_21_nz_tag_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-tag", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("nzColor", "#28a745");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpIdentity::DisplayName:IsDefault"), "");
} }
function RolesComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, RolesComponent_tr_21_nz_tag_3_Template, 3, 4, "nz-tag", 12);
    i0.ɵɵtemplate(4, RolesComponent_tr_21_nz_tag_4_Template, 3, 4, "nz-tag", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵelementStart(6, "a", 13);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "abpLocalization");
    i0.ɵɵelement(9, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "nz-dropdown-menu", null, 15);
    i0.ɵɵelementStart(12, "ul", 16);
    i0.ɵɵelementStart(13, "li", 17);
    i0.ɵɵlistener("click", function RolesComponent_tr_21_Template_li_click_13_listener() { i0.ɵɵrestoreView(_r13); const data_r8 = ctx.$implicit; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.edit(data_r8.id); });
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "li", 17);
    i0.ɵɵlistener("click", function RolesComponent_tr_21_Template_li_click_16_listener() { i0.ɵɵrestoreView(_r13); const data_r8 = ctx.$implicit; const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.openPermissionsModal(data_r8.name); });
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "li", 17);
    i0.ɵɵlistener("click", function RolesComponent_tr_21_Template_li_click_19_listener() { i0.ɵɵrestoreView(_r13); const data_r8 = ctx.$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.delete(data_r8.id, data_r8.name); });
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const _r11 = i0.ɵɵreference(11);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", data_r8.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r8.isPublic);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", data_r8.isDefault);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzDropdownMenu", _r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(8, 11, "AbpIdentity::Actions"), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("abpPermission", "AbpIdentity.Roles.Update");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 13, "AbpIdentity::Edit"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("abpPermission", "AbpIdentity.Roles.ManagePermissions");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(18, 15, "AbpIdentity::Permissions"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("abpPermission", "AbpIdentity.Roles.Delete");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(21, 17, "AbpIdentity::Delete"), "");
} }
function RolesComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "abpLocalization");
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(1, 1, (ctx_r3.selected == null ? null : ctx_r3.selected.id) ? "AbpIdentity::Edit" : "AbpIdentity::NewRole"), " ");
} }
function RolesComponent_ng_template_25_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "i", 22);
    i0.ɵɵelementEnd();
} }
function RolesComponent_ng_template_25_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 23);
    i0.ɵɵlistener("ngSubmit", function RolesComponent_ng_template_25_form_2_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.save(); });
    i0.ɵɵelementStart(1, "nz-form-item");
    i0.ɵɵelementStart(2, "nz-form-label", 24);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nz-form-control", 25);
    i0.ɵɵelement(6, "input", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "nz-form-item");
    i0.ɵɵelementStart(8, "nz-form-control", 27);
    i0.ɵɵelementStart(9, "label", 28);
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "label", 29);
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r18.form);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSm", 6)("nzXs", 24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 10, "AbpIdentity::RoleName"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSm", 14)("nzXs", 24);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzSpan", 14)("nzOffset", 6);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 12, "AbpIdentity::DisplayName:IsDefault"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 14, "AbpIdentity::DisplayName:IsPublic"), " ");
} }
function RolesComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RolesComponent_ng_template_25_ng_template_0_Template, 2, 0, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(2, RolesComponent_ng_template_25_form_2_Template, 17, 16, "form", 20);
} if (rf & 2) {
    const _r16 = i0.ɵɵreference(1);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.form)("ngIfElse", _r16);
} }
function RolesComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function RolesComponent_ng_template_27_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.isModalVisible = false; });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 31);
    i0.ɵɵlistener("click", function RolesComponent_ng_template_27_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.save(); });
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, "AbpIdentity::Cancel"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r7.form == null ? null : ctx_r7.form.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 5, "AbpIdentity::Save"), " ");
} }
const _c0 = function () { return { top: "20px" }; };
export class RolesComponent extends AbpRolesComponent {
    constructor(_list, _confirmationService, _fb, _store) {
        super(_list, _confirmationService, _fb, _store);
        this._list = _list;
        this._confirmationService = _confirmationService;
        this._fb = _fb;
        this._store = _store;
    }
}
RolesComponent.ɵfac = function RolesComponent_Factory(t) { return new (t || RolesComponent)(i0.ɵɵdirectiveInject(i1.ListService), i0.ɵɵdirectiveInject(i2.ConfirmationService), i0.ɵɵdirectiveInject(i3.FormBuilder), i0.ɵɵdirectiveInject(i4.Store)); };
RolesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RolesComponent, selectors: [["ng-alain-roles"]], features: [i0.ɵɵProvidersFeature([ListService]), i0.ɵɵInheritDefinitionFeature], decls: 30, vars: 32, consts: [[3, "nzBordered"], ["nz-button", "", 3, "abpPermission", "nzType", "click"], ["nz-icon", "", "nzType", "plus"], [1, "my-md"], [3, "nzData", "nzPageSize", "nzTotal", "nzLoading", "nzFrontPagination", "nzPageIndexChange"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [3, "nzStyle", "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["providerName", "R", 3, "visible", "providerKey", "visibleChange"], [3, "nzColor", 4, "ngIf"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["opMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "abpPermission", "click"], [3, "nzColor"], ["loaderRef", ""], ["nz-form", "", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "role-name", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "name", "id", "role-name"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "isDefault"], ["nz-checkbox", "", "formControlName", "isPublic"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"]], template: function RolesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-card", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function RolesComponent_Template_button_click_1_listener() { return ctx.add(); });
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelementStart(3, "span");
        i0.ɵɵtext(4);
        i0.ɵɵpipe(5, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "div", 3);
        i0.ɵɵelementStart(7, "nz-table", 4, 5);
        i0.ɵɵlistener("nzPageIndexChange", function RolesComponent_Template_nz_table_nzPageIndexChange_7_listener($event) { return ctx.list.page = $event - 1; });
        i0.ɵɵpipe(9, "async");
        i0.ɵɵpipe(10, "async");
        i0.ɵɵpipe(11, "async");
        i0.ɵɵelementStart(12, "thead");
        i0.ɵɵelementStart(13, "tr");
        i0.ɵɵelementStart(14, "th");
        i0.ɵɵtext(15);
        i0.ɵɵpipe(16, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "th");
        i0.ɵɵtext(18);
        i0.ɵɵpipe(19, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "tbody");
        i0.ɵɵtemplate(21, RolesComponent_tr_21_Template, 22, 19, "tr", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "nz-modal", 7);
        i0.ɵɵlistener("nzVisibleChange", function RolesComponent_Template_nz_modal_nzVisibleChange_22_listener($event) { return ctx.isModalVisible = $event; })("nzOnCancel", function RolesComponent_Template_nz_modal_nzOnCancel_22_listener() { return ctx.isModalVisible = false; });
        i0.ɵɵtemplate(23, RolesComponent_ng_template_23_Template, 2, 3, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(25, RolesComponent_ng_template_25_Template, 3, 2, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(27, RolesComponent_ng_template_27_Template, 6, 7, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "ng-alain-permission-management", 11);
        i0.ɵɵlistener("visibleChange", function RolesComponent_Template_ng_alain_permission_management_visibleChange_29_listener($event) { return ctx.visiblePermissions = $event; });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(8);
        const _r2 = i0.ɵɵreference(24);
        const _r4 = i0.ɵɵreference(26);
        const _r6 = i0.ɵɵreference(28);
        i0.ɵɵproperty("nzBordered", false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("abpPermission", "AbpIdentity.Roles.Create")("nzType", "primary");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 19, "AbpIdentity::NewRole"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("nzData", i0.ɵɵpipeBind1(9, 21, ctx.data$))("nzPageSize", ctx.list.maxResultCount)("nzTotal", i0.ɵɵpipeBind1(10, 23, ctx.totalCount$))("nzLoading", i0.ɵɵpipeBind1(11, 25, ctx.list.isLoading$))("nzFrontPagination", false);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 27, "AbpIdentity::DisplayName:RoleName"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(19, 29, "AbpIdentity::Actions"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", _r0.data);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzStyle", i0.ɵɵpureFunction0(31, _c0))("nzVisible", ctx.isModalVisible)("nzTitle", _r2)("nzContent", _r4)("nzFooter", _r6);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("visible", ctx.visiblePermissions)("providerKey", ctx.providerKey);
    } }, directives: [i5.NzCardComponent, i6.NzButtonComponent, i7.NzWaveDirective, i8.ɵNzTransitionPatchDirective, i1.PermissionDirective, i9.NzIconDirective, i10.NzTableComponent, i10.NzTheadComponent, i10.NzTrDirective, i10.NzTableCellDirective, i10.NzThMeasureDirective, i10.NzTbodyComponent, i11.NgForOf, i12.NzModalComponent, i13.PermissionManagementComponent, i11.NgIf, i14.NzDropDownADirective, i14.NzDropDownDirective, i14.NzDropdownMenuComponent, i15.NzMenuDirective, i15.NzMenuItemDirective, i16.NzTagComponent, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i1.FormSubmitDirective, i17.NzFormDirective, i3.FormGroupDirective, i18.ValidationGroupDirective, i19.NzRowDirective, i17.NzFormItemComponent, i19.NzColDirective, i17.NzFormLabelComponent, i17.NzFormControlComponent, i20.NzInputDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlName, i18.ValidationDirective, i21.NzCheckboxComponent], pipes: [i1.LocalizationPipe, i11.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RolesComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-roles',
                templateUrl: './roles.component.html',
                providers: [ListService],
            }]
    }], function () { return [{ type: i1.ListService }, { type: i2.ConfirmationService }, { type: i3.FormBuilder }, { type: i4.Store }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9pZGVudGl0eS9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9pZGVudGl0eS9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsSUFBSSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDY2pDLGtDQUNFO0lBQUEsWUFBMkQ7O0lBQUEsaUJBQVM7O0lBRDlELG1DQUFxQjtJQUMzQixlQUEyRDtJQUEzRCx5RkFBMkQ7OztJQUM3RCxrQ0FDRTtJQUFBLFlBQTREOztJQUFBLGlCQUFTOztJQUQvRCxtQ0FBcUI7SUFDM0IsZUFBNEQ7SUFBNUQsMEZBQTREOzs7O0lBTGxFLDBCQUNFO0lBQUEsMEJBQUk7SUFBQSxZQUNGO0lBQUEsNEVBQ0U7SUFDRiw0RUFDRTtJQUNKLGlCQUFLO0lBQ0wsMEJBQ0U7SUFBQSw2QkFDRTtJQUFBLFlBQ0E7O0lBQUEsd0JBQTZCO0lBQy9CLGlCQUFJO0lBQ0osbURBQ0U7SUFBQSwrQkFDRTtJQUFBLCtCQUNFO0lBRDRELHFOQUF1QjtJQUNuRixhQUEyQzs7SUFBQSxpQkFBSztJQUNsRCwrQkFFRTtJQURBLHVPQUF5QztJQUN6QyxhQUFrRDs7SUFBQSxpQkFBSztJQUN6RCwrQkFDRTtJQUQ0RCxxT0FBb0M7SUFDaEcsYUFBNkM7O0lBQUEsaUJBQUs7SUFDdEQsaUJBQUs7SUFDUCxpQkFBbUI7SUFDckIsaUJBQUs7SUFDUCxpQkFBSzs7OztJQXZCQyxlQUNGO0lBREUsNENBQ0Y7SUFBOEIsZUFBcUI7SUFBckIsdUNBQXFCO0lBRXJCLGVBQXNCO0lBQXRCLHdDQUFzQjtJQUlyQyxlQUF5QjtJQUF6QixxQ0FBeUI7SUFDdEMsZUFDQTtJQURBLDhFQUNBO0lBSW1CLGVBQTRDO0lBQTVDLDBEQUE0QztJQUMzRCxlQUEyQztJQUEzQywyRUFBMkM7SUFDNUIsZUFBdUQ7SUFBdkQscUVBQXVEO0lBRXRFLGVBQWtEO0lBQWxELGtGQUFrRDtJQUNuQyxlQUE0QztJQUE1QywwREFBNEM7SUFDM0QsZUFBNkM7SUFBN0MsNkVBQTZDOzs7SUFXekQsWUFDRjs7OztJQURFLDJKQUNGOzs7SUFJSSwrQkFBeUI7SUFBQSx3QkFBc0M7SUFBQSxpQkFBTTs7OztJQUd2RSxnQ0FHRTtJQUg0RCxvTUFBbUI7SUFHL0Usb0NBQ0U7SUFBQSx5Q0FDRTtJQUFBLFlBQStDOztJQUFBLGlCQUFnQjtJQUNqRSwyQ0FDRTtJQUFBLDRCQUNGO0lBQUEsaUJBQWtCO0lBQ3BCLGlCQUFlO0lBQ2Ysb0NBQ0U7SUFBQSwyQ0FDRTtJQUFBLGlDQUNFO0lBQUEsNkJBQ0U7SUFBQSxhQUdGOztJQUFBLGlCQUFPO0lBQ1QsaUJBQVE7SUFDUixrQ0FDRTtJQUFBLDZCQUNFO0lBQUEsYUFHRjs7SUFBQSxpQkFBTztJQUNULGlCQUFRO0lBQ1YsaUJBQWtCO0lBQ3BCLGlCQUFlO0lBQ2pCLGlCQUFPOzs7SUE1Qm9DLHdDQUFrQjtJQUkxQyxlQUFVO0lBQVYsd0JBQVUsWUFBQTtJQUN2QixlQUErQztJQUEvQyw4RUFBK0M7SUFDaEMsZUFBVztJQUFYLHlCQUFXLFlBQUE7SUFLWCxlQUFhO0lBQWIsMkJBQWEsZUFBQTtJQUd4QixlQUdGO0lBSEUsNkZBR0Y7SUFJRSxlQUdGO0lBSEUsNEZBR0Y7OztJQTVCUixnSUFDRTtJQUdGLG1GQUdFOzs7O0lBSFksZUFBNEI7SUFBNUIsa0NBQTRCLGtCQUFBOzs7O0lBZ0MxQyxrQ0FDRTtJQURpQywrTEFBd0IsS0FBSyxJQUFDO0lBQy9ELFlBQ0Y7O0lBQUEsaUJBQVM7SUFDVCxrQ0FDRTtJQURpQyx3TEFBZ0I7SUFDakQsWUFHRjs7SUFBQSxpQkFBUzs7O0lBTlAsZUFDRjtJQURFLDRFQUNGO0lBQ29ELGVBQTBCO0lBQTFCLDJFQUEwQjtJQUM1RSxlQUdGO0lBSEUsMEVBR0Y7OztBRHBGSixNQUFNLE9BQU8sY0FBZSxTQUFRLGlCQUFpQjtJQUNuRCxZQUNVLEtBQWtCLEVBQ2xCLG9CQUF5QyxFQUN6QyxHQUFnQixFQUNoQixNQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLEVBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBSnZDLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUN6QyxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQU87SUFFdkIsQ0FBQzs7NEVBUFUsY0FBYzttREFBZCxjQUFjLG9FQUZkLENBQUMsV0FBVyxDQUFDO1FDUDFCLGtDQUNFO1FBQUEsaUNBQ0U7UUFENkQsMkZBQVMsU0FBSyxJQUFDO1FBQzVFLHVCQUE2QjtRQUM3Qiw0QkFBTTtRQUFBLFlBQThDOztRQUFBLGlCQUFPO1FBQzdELGlCQUFTO1FBQ1QseUJBQXlCO1FBQ3pCLHNDQUVFO1FBRGtFLG9KQUFzQyxDQUFDLElBQUU7Ozs7UUFDM0csOEJBQ0U7UUFBQSwyQkFDRTtRQUFBLDJCQUFJO1FBQUEsYUFBMkQ7O1FBQUEsaUJBQUs7UUFDcEUsMkJBQUk7UUFBQSxhQUE4Qzs7UUFBQSxpQkFBSztRQUN6RCxpQkFBSztRQUNQLGlCQUFRO1FBQ1IsOEJBQ0U7UUFBQSxpRUFDRTtRQXdCSixpQkFBUTtRQUNWLGlCQUFXO1FBQ2IsaUJBQVU7UUFDVixvQ0FFRTtRQUZvQyx1SkFBOEIsZ0hBQ1osS0FBSyxJQURPO1FBRWxFLGtIQUNFO1FBR0Ysa0hBQ0U7UUFtQ0YsbUhBQ0U7UUFTSixpQkFBVztRQUNYLDJEQUNpQztRQURELDZLQUFnQztRQUNoRSxpQkFBaUM7Ozs7OztRQWpHeEIsa0NBQW9CO1FBQ1QsZUFBNEM7UUFBNUMsMERBQTRDLHFCQUFBO1FBRXRELGVBQThDO1FBQTlDLG1FQUE4QztRQUdoQyxlQUF3QjtRQUF4Qix5REFBd0IsdUNBQUEsb0RBQUEsMERBQUEsNEJBQUE7UUFJcEMsZUFBMkQ7UUFBM0QsaUZBQTJEO1FBQzNELGVBQThDO1FBQTlDLG9FQUE4QztRQUloRCxlQUFvQztRQUFwQyxrQ0FBb0M7UUE0QnBDLGVBQTJCO1FBQTNCLHFEQUEyQixpQ0FBQSxnQkFBQSxrQkFBQSxpQkFBQTtRQXFETCxlQUFnQztRQUFoQyxnREFBZ0MsZ0NBQUE7O2tERHZGbkQsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9sZXNDb21wb25lbnQgYXMgQWJwUm9sZXNDb21wb25lbnQgfSBmcm9tICdAYWJwL25nLmlkZW50aXR5JztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBMaXN0U2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmctYWxhaW4tcm9sZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yb2xlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTGlzdFNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9sZXNDb21wb25lbnQgZXh0ZW5kcyBBYnBSb2xlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9saXN0OiBMaXN0U2VydmljZSxcclxuICAgIHByaXZhdGUgX2NvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIF9zdG9yZTogU3RvcmUpIHtcclxuICAgIHN1cGVyKF9saXN0LF9jb25maXJtYXRpb25TZXJ2aWNlLCBfZmIsIF9zdG9yZSk7XHJcbiAgfVxyXG59XHJcbiIsIjwhLS0gPG56LXBhZ2UtaGVhZGVyIGNsYXNzPVwic2l0ZS1wYWdlLWhlYWRlclwiIFtuelRpdGxlXT1cIidBYnBJZGVudGl0eTo6Um9sZXMnIHwgYWJwTG9jYWxpemF0aW9uXCI+XHJcbjwvbnotcGFnZS1oZWFkZXI+IC0tPlxyXG48bnotY2FyZCBbbnpCb3JkZXJlZF09XCJmYWxzZVwiPlxyXG4gIDxidXR0b24gbnotYnV0dG9uIFthYnBQZXJtaXNzaW9uXT1cIidBYnBJZGVudGl0eS5Sb2xlcy5DcmVhdGUnXCIgKGNsaWNrKT1cImFkZCgpXCIgW256VHlwZV09XCIncHJpbWFyeSdcIj5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwicGx1c1wiPjwvaT5cclxuICAgIDxzcGFuPnt7ICdBYnBJZGVudGl0eTo6TmV3Um9sZScgfCBhYnBMb2NhbGl6YXRpb24gfX08L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgPGRpdiBjbGFzcz1cIm15LW1kXCI+PC9kaXY+XHJcbiAgPG56LXRhYmxlICNiYXNpY1RhYmxlIFtuekRhdGFdPVwiZGF0YSQgfCBhc3luY1wiIFtuelBhZ2VTaXplXT1cImxpc3QubWF4UmVzdWx0Q291bnRcIiBbbnpUb3RhbF09XCJ0b3RhbENvdW50JCB8IGFzeW5jXCJcclxuICAgIFtuekxvYWRpbmddPVwibGlzdC5pc0xvYWRpbmckIHwgYXN5bmNcIiBbbnpGcm9udFBhZ2luYXRpb25dPVwiZmFsc2VcIiAobnpQYWdlSW5kZXhDaGFuZ2UpPVwibGlzdC5wYWdlPSRldmVudC0xO1wiPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoPnt7ICdBYnBJZGVudGl0eTo6RGlzcGxheU5hbWU6Um9sZU5hbWUnIHwgYWJwTG9jYWxpemF0aW9uIH19PC90aD5cclxuICAgICAgICA8dGg+e3sgJ0FicElkZW50aXR5OjpBY3Rpb25zJyB8IGFicExvY2FsaXphdGlvbiB9fTwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5PlxyXG4gICAgICA8dHIgKm5nRm9yPVwibGV0IGRhdGEgb2YgYmFzaWNUYWJsZS5kYXRhXCI+XHJcbiAgICAgICAgPHRkPnt7IGRhdGEubmFtZSB9fVxyXG4gICAgICAgICAgPG56LXRhZyBbbnpDb2xvcl09XCInIzE3YTJiOCdcIiAqbmdJZj1cImRhdGEuaXNQdWJsaWNcIj5cclxuICAgICAgICAgICAge3sgJ0FicElkZW50aXR5OjpEaXNwbGF5TmFtZTpJc1B1YmxpYycgfCBhYnBMb2NhbGl6YXRpb24gfX08L256LXRhZz5cclxuICAgICAgICAgIDxuei10YWcgW256Q29sb3JdPVwiJyMyOGE3NDUnXCIgKm5nSWY9XCJkYXRhLmlzRGVmYXVsdFwiPlxyXG4gICAgICAgICAgICB7eyAnQWJwSWRlbnRpdHk6OkRpc3BsYXlOYW1lOklzRGVmYXVsdCcgfCBhYnBMb2NhbGl6YXRpb24gfX08L256LXRhZz5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxhIG56LWRyb3Bkb3duIFtuekRyb3Bkb3duTWVudV09XCJvcE1lbnVcIj5cclxuICAgICAgICAgICAge3sgJ0FicElkZW50aXR5OjpBY3Rpb25zJyB8IGFicExvY2FsaXphdGlvbiB9fVxyXG4gICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIj48L2k+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8bnotZHJvcGRvd24tbWVudSAjb3BNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgICAgICAgICAgPHVsIG56LW1lbnU+XHJcbiAgICAgICAgICAgICAgPGxpIG56LW1lbnUtaXRlbSBbYWJwUGVybWlzc2lvbl09XCInQWJwSWRlbnRpdHkuUm9sZXMuVXBkYXRlJ1wiIChjbGljayk9XCJlZGl0KGRhdGEuaWQpXCI+XHJcbiAgICAgICAgICAgICAgICB7eyAnQWJwSWRlbnRpdHk6OkVkaXQnIHwgYWJwTG9jYWxpemF0aW9uIH19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgbnotbWVudS1pdGVtIFthYnBQZXJtaXNzaW9uXT1cIidBYnBJZGVudGl0eS5Sb2xlcy5NYW5hZ2VQZXJtaXNzaW9ucydcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5QZXJtaXNzaW9uc01vZGFsKGRhdGEubmFtZSlcIj5cclxuICAgICAgICAgICAgICAgIHt7ICdBYnBJZGVudGl0eTo6UGVybWlzc2lvbnMnIHwgYWJwTG9jYWxpemF0aW9uIH19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgbnotbWVudS1pdGVtIFthYnBQZXJtaXNzaW9uXT1cIidBYnBJZGVudGl0eS5Sb2xlcy5EZWxldGUnXCIgKGNsaWNrKT1cImRlbGV0ZShkYXRhLmlkLCBkYXRhLm5hbWUpXCI+XHJcbiAgICAgICAgICAgICAgICB7eyAnQWJwSWRlbnRpdHk6OkRlbGV0ZScgfCBhYnBMb2NhbGl6YXRpb24gfX08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9uei1kcm9wZG93bi1tZW51PlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvbnotdGFibGU+XHJcbjwvbnotY2FyZD5cclxuPG56LW1vZGFsIFtuelN0eWxlXT1cInsgdG9wOiAnMjBweCcgfVwiIFsobnpWaXNpYmxlKV09XCJpc01vZGFsVmlzaWJsZVwiIFtuelRpdGxlXT1cIm1vZGFsVGl0bGVcIiBbbnpDb250ZW50XT1cIm1vZGFsQ29udGVudFwiXHJcbiAgW256Rm9vdGVyXT1cIm1vZGFsRm9vdGVyXCIgKG56T25DYW5jZWwpPVwiaXNNb2RhbFZpc2libGU9ZmFsc2VcIj5cclxuICA8bmctdGVtcGxhdGUgI21vZGFsVGl0bGU+XHJcbiAgICB7eyhzZWxlY3RlZD8uaWQgPyAnQWJwSWRlbnRpdHk6OkVkaXQnIDogJ0FicElkZW50aXR5OjpOZXdSb2xlJykgfCBhYnBMb2NhbGl6YXRpb259fVxyXG4gIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjbW9kYWxDb250ZW50PlxyXG4gICAgPG5nLXRlbXBsYXRlICNsb2FkZXJSZWY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjxpIGNsYXNzPVwiZmEgZmEtcHVsc2UgZmEtc3Bpbm5lclwiPjwvaT48L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPGZvcm0gbnotZm9ybSAqbmdJZj1cImZvcm07IGVsc2UgbG9hZGVyUmVmXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cInNhdmUoKVwiPlxyXG5cclxuXHJcbiAgICAgIDxuei1mb3JtLWl0ZW0+XHJcbiAgICAgICAgPG56LWZvcm0tbGFiZWwgW256U21dPVwiNlwiIFtuelhzXT1cIjI0XCIgbnpSZXF1aXJlZCBuekZvcj1cInJvbGUtbmFtZVwiPlxyXG4gICAgICAgICAge3sgJ0FicElkZW50aXR5OjpSb2xlTmFtZScgfCBhYnBMb2NhbGl6YXRpb24gfX08L256LWZvcm0tbGFiZWw+XHJcbiAgICAgICAgPG56LWZvcm0tY29udHJvbCBbbnpTbV09XCIxNFwiIFtuelhzXT1cIjI0XCI+XHJcbiAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiIGlkPVwicm9sZS1uYW1lXCIgLz5cclxuICAgICAgICA8L256LWZvcm0tY29udHJvbD5cclxuICAgICAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgICAgIDxuei1mb3JtLWl0ZW0+XHJcbiAgICAgICAgPG56LWZvcm0tY29udHJvbCBbbnpTcGFuXT1cIjE0XCIgW256T2Zmc2V0XT1cIjZcIj5cclxuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJpc0RlZmF1bHRcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAge3tcclxuICAgICAgICAgICAgICAgICAgJ0FicElkZW50aXR5OjpEaXNwbGF5TmFtZTpJc0RlZmF1bHQnIHwgYWJwTG9jYWxpemF0aW9uXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJpc1B1YmxpY1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICB7e1xyXG4gICAgICAgICAgICAgICAgICAnQWJwSWRlbnRpdHk6OkRpc3BsYXlOYW1lOklzUHVibGljJyB8IGFicExvY2FsaXphdGlvblxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgICAgIDwvbnotZm9ybS1pdGVtPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjbW9kYWxGb290ZXI+XHJcbiAgICA8YnV0dG9uIG56LWJ1dHRvbiBuelR5cGU9XCJkZWZhdWx0XCIgKGNsaWNrKT1cImlzTW9kYWxWaXNpYmxlPWZhbHNlXCI+XHJcbiAgICAgIHt7ICdBYnBJZGVudGl0eTo6Q2FuY2VsJyB8IGFicExvY2FsaXphdGlvbiB9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG56LWJ1dHRvbiBuelR5cGU9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInNhdmUoKVwiIFtkaXNhYmxlZF09XCJmb3JtPy5pbnZhbGlkXCI+XHJcbiAgICAgIHt7XHJcbiAgICAgICdBYnBJZGVudGl0eTo6U2F2ZScgfCBhYnBMb2NhbGl6YXRpb25cclxuICAgICAgfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbjwvbnotbW9kYWw+XHJcbjxuZy1hbGFpbi1wZXJtaXNzaW9uLW1hbmFnZW1lbnQgWyh2aXNpYmxlKV09XCJ2aXNpYmxlUGVybWlzc2lvbnNcIiBwcm92aWRlck5hbWU9XCJSXCIgW3Byb3ZpZGVyS2V5XT1cInByb3ZpZGVyS2V5XCI+XHJcbjwvbmctYWxhaW4tcGVybWlzc2lvbi1tYW5hZ2VtZW50PiJdfQ==