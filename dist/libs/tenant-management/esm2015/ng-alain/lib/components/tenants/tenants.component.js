import { TenantManagementService, TenantsComponent as AbpTenantsComponent } from '@abp/ng.tenant-management';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ListService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "@abp/ng.theme.shared";
import * as i3 from "@abp/ng.tenant-management";
import * as i4 from "@angular/forms";
import * as i5 from "@ngxs/store";
import * as i6 from "ng-zorro-antd/card";
import * as i7 from "ng-zorro-antd/grid";
import * as i8 from "ng-zorro-antd/form";
import * as i9 from "ng-zorro-antd/input";
import * as i10 from "ng-zorro-antd/button";
import * as i11 from "ng-zorro-antd/core/wave";
import * as i12 from "ng-zorro-antd/core/transition-patch";
import * as i13 from "ng-zorro-antd/icon";
import * as i14 from "ng-zorro-antd/table";
import * as i15 from "@angular/common";
import * as i16 from "ng-zorro-antd/modal";
import * as i17 from "@fs/feature-management/ng-alain";
import * as i18 from "ng-zorro-antd/dropdown";
import * as i19 from "ng-zorro-antd/menu";
import * as i20 from "@ngx-validate/core";
import * as i21 from "ng-zorro-antd/checkbox";
function TenantsComponent_tr_30_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵlistener("click", function TenantsComponent_tr_30_li_11_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r20); const data_r12 = i0.ɵɵnextContext().$implicit; const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.editTenant(data_r12.id); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "AbpTenantManagement::Edit"), "");
} }
function TenantsComponent_tr_30_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵlistener("click", function TenantsComponent_tr_30_li_12_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r23); const data_r12 = i0.ɵɵnextContext().$implicit; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.onEditConnectionString(data_r12.id); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "AbpTenantManagement::Permission:ManageConnectionStrings"), "");
} }
function TenantsComponent_tr_30_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵlistener("click", function TenantsComponent_tr_30_li_13_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r26); const data_r12 = i0.ɵɵnextContext().$implicit; const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.openFeaturesModal(data_r12.id); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "AbpTenantManagement::Permission:ManageFeatures"), "");
} }
function TenantsComponent_tr_30_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵlistener("click", function TenantsComponent_tr_30_li_14_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r29); const data_r12 = i0.ɵɵnextContext().$implicit; const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.delete(data_r12.id, data_r12.name); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "AbpTenantManagement::Delete"));
} }
function TenantsComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵelementStart(4, "a", 18);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "abpLocalization");
    i0.ɵɵelement(7, "i", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nz-dropdown-menu", null, 20);
    i0.ɵɵelementStart(10, "ul", 21);
    i0.ɵɵtemplate(11, TenantsComponent_tr_30_li_11_Template, 3, 3, "li", 22);
    i0.ɵɵtemplate(12, TenantsComponent_tr_30_li_12_Template, 3, 3, "li", 22);
    i0.ɵɵtemplate(13, TenantsComponent_tr_30_li_13_Template, 3, 3, "li", 22);
    i0.ɵɵtemplate(14, TenantsComponent_tr_30_li_14_Template, 3, 3, "li", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const _r13 = i0.ɵɵreference(9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(data_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzDropdownMenu", _r13);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 7, "AbpTenantManagement::Actions"), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.Update");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.ManageConnectionStrings");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.ManageFeatures");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.Delete");
} }
function TenantsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "abpLocalization");
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(1, 1, ctx_r3.selectedModalContent.title), " ");
} }
function TenantsComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TenantsComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TenantsComponent_ng_template_34_ng_container_0_Template, 1, 0, "ng-container", 24);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r5.selectedModalContent == null ? null : ctx_r5.selectedModalContent.template);
} }
function TenantsComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function TenantsComponent_ng_template_36_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.isModalVisible = false; });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 26);
    i0.ɵɵlistener("click", function TenantsComponent_ng_template_36_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r32); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.save(); });
    i0.ɵɵpipe(4, "async");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 3, "AbpTenantManagement::Cancel"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzLoading", i0.ɵɵpipeBind1(4, 5, ctx_r7.list.isLoading$));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 7, "AbpIdentity::Save"), " ");
} }
function TenantsComponent_ng_template_38_nz_form_item_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-form-item");
    i0.ɵɵelementStart(1, "nz-form-label", 32);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nz-form-control", 29);
    i0.ɵɵelement(5, "input", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "AbpTenantManagement::DisplayName:AdminEmailAddress"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
} }
function TenantsComponent_ng_template_38_nz_form_item_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-form-item");
    i0.ɵɵelementStart(1, "nz-form-label", 34);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nz-form-control", 29);
    i0.ɵɵelement(5, "input", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "AbpTenantManagement::DisplayName:AdminPassword"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
} }
function TenantsComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 27);
    i0.ɵɵlistener("ngSubmit", function TenantsComponent_ng_template_38_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.save(); });
    i0.ɵɵelementStart(1, "nz-form-item");
    i0.ɵɵelementStart(2, "nz-form-label", 28);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nz-form-control", 29);
    i0.ɵɵelement(6, "input", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, TenantsComponent_ng_template_38_nz_form_item_7_Template, 6, 7, "nz-form-item", 31);
    i0.ɵɵtemplate(8, TenantsComponent_ng_template_38_nz_form_item_8_Template, 6, 7, "nz-form-item", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r9.tenantForm)("nzLayout", "vertical");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 9, "AbpTenantManagement::TenantName"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r9.tenantForm.controls.adminEmailAddress);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.tenantForm.controls.adminPassword);
} }
function TenantsComponent_ng_template_40_nz_form_item_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-form-item");
    i0.ɵɵelementStart(1, "nz-form-label", 39);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nz-form-control", 29);
    i0.ɵɵelement(5, "input", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 5, "AbpTenantManagement::DisplayName:DefaultConnectionString"), "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSm", 24)("nzXs", 24);
} }
function TenantsComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 36);
    i0.ɵɵlistener("ngSubmit", function TenantsComponent_ng_template_40_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.save(); });
    i0.ɵɵelementStart(1, "nz-form-item");
    i0.ɵɵelementStart(2, "nz-form-control", 37);
    i0.ɵɵelementStart(3, "label", 38);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, TenantsComponent_ng_template_40_nz_form_item_7_Template, 6, 7, "nz-form-item", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzLayout", "vertical")("formGroup", ctx_r11.defaultConnectionStringForm);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSpan", 14)("nzOffset", 6);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(6, 6, "AbpTenantManagement::DisplayName:UseSharedDatabase"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r11.useSharedDatabase);
} }
const _c0 = function () { return { xs: 8, sm: 8, md: 8, lg: 24, xl: 48, xxl: 48 }; };
export class TenantsComponent extends AbpTenantsComponent {
    constructor(_list, _confirmationService, _tenantService, _fb, _store) {
        super(_list, _confirmationService, _tenantService, _fb, _store);
        this._list = _list;
        this._confirmationService = _confirmationService;
        this._tenantService = _tenantService;
        this._fb = _fb;
        this._store = _store;
    }
}
TenantsComponent.ɵfac = function TenantsComponent_Factory(t) { return new (t || TenantsComponent)(i0.ɵɵdirectiveInject(i1.ListService), i0.ɵɵdirectiveInject(i2.ConfirmationService), i0.ɵɵdirectiveInject(i3.TenantManagementService), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i5.Store)); };
TenantsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TenantsComponent, selectors: [["ng-alain-tenants"]], features: [i0.ɵɵProvidersFeature([ListService]), i0.ɵɵInheritDefinitionFeature], decls: 43, vars: 39, consts: [[3, "nzBordered"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzMd", "8", "nzSm", "24"], ["nzFor", "no"], ["nz-input", "", "type", "search", 3, "placeholder", "ngModel", "ngModelChange"], ["nz-button", "", 3, "abpPermission", "nzType", "click"], ["nz-icon", "", "nzType", "plus"], [1, "my-md"], [3, "nzData", "nzPageSize", "nzTotal", "nzLoading", "nzFrontPagination", "nzPageIndexChange"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["tenantModalTemplate", ""], ["connectionStringModalTemplate", ""], ["providerName", "T", 3, "visible", "providerKey", "visibleChange"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["opMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click", 4, "abpPermission"], ["nz-menu-item", "", 3, "click"], [4, "ngTemplateOutlet"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"], ["nz-form", "", 3, "formGroup", "nzLayout", "ngSubmit"], ["nzRequired", "", "nzFor", "role-name", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "name"], [4, "ngIf"], ["nzRequired", "", "nzFor", "role-adminEmailAddress", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "adminEmailAddress", "type", "email"], ["nzRequired", "", "nzFor", "role-adminPassword", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "adminPassword", "type", "password"], ["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "useSharedDatabase"], ["nzRequired", "", "nzFor", "defaultConnectionString", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "defaultConnectionString", "id", "defaultConnectionString"]], template: function TenantsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-card", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "nz-form-item");
        i0.ɵɵelementStart(4, "nz-form-label", 3);
        i0.ɵɵtext(5);
        i0.ɵɵpipe(6, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "nz-form-control");
        i0.ɵɵelementStart(8, "input", 4);
        i0.ɵɵlistener("ngModelChange", function TenantsComponent_Template_input_ngModelChange_8_listener($event) { return ctx.list.filter = $event; });
        i0.ɵɵpipe(9, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 5);
        i0.ɵɵlistener("click", function TenantsComponent_Template_button_click_10_listener() { return ctx.addTenant(); });
        i0.ɵɵelement(11, "i", 6);
        i0.ɵɵelementStart(12, "span");
        i0.ɵɵtext(13);
        i0.ɵɵpipe(14, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(15, "div", 7);
        i0.ɵɵelementStart(16, "nz-table", 8, 9);
        i0.ɵɵlistener("nzPageIndexChange", function TenantsComponent_Template_nz_table_nzPageIndexChange_16_listener($event) { return ctx.list.page = $event - 1; });
        i0.ɵɵpipe(18, "async");
        i0.ɵɵpipe(19, "async");
        i0.ɵɵpipe(20, "async");
        i0.ɵɵelementStart(21, "thead");
        i0.ɵɵelementStart(22, "tr");
        i0.ɵɵelementStart(23, "th");
        i0.ɵɵtext(24);
        i0.ɵɵpipe(25, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "th");
        i0.ɵɵtext(27);
        i0.ɵɵpipe(28, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "tbody");
        i0.ɵɵtemplate(30, TenantsComponent_tr_30_Template, 15, 9, "tr", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "nz-modal", 11);
        i0.ɵɵlistener("nzVisibleChange", function TenantsComponent_Template_nz_modal_nzVisibleChange_31_listener($event) { return ctx.isModalVisible = $event; })("nzOnCancel", function TenantsComponent_Template_nz_modal_nzOnCancel_31_listener() { return ctx.isModalVisible = false; });
        i0.ɵɵtemplate(32, TenantsComponent_ng_template_32_Template, 2, 3, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(34, TenantsComponent_ng_template_34_Template, 1, 1, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(36, TenantsComponent_ng_template_36_Template, 7, 9, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(38, TenantsComponent_ng_template_38_Template, 9, 11, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(40, TenantsComponent_ng_template_40_Template, 8, 8, "ng-template", null, 16, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(42, "ng-alain-feature-management", 17);
        i0.ɵɵlistener("visibleChange", function TenantsComponent_Template_ng_alain_feature_management_visibleChange_42_listener($event) { return ctx.visibleFeatures = $event; });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(17);
        const _r2 = i0.ɵɵreference(33);
        const _r4 = i0.ɵɵreference(35);
        const _r6 = i0.ɵɵreference(37);
        i0.ɵɵproperty("nzBordered", false);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzGutter", i0.ɵɵpureFunction0(38, _c0));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(6, 22, "AbpIdentity::PagerSearch"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(9, 24, "AbpUi::PagerSearch"))("ngModel", ctx.list.filter);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.Create")("nzType", "primary");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 26, "AbpTenantManagement::NewTenant"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("nzData", i0.ɵɵpipeBind1(18, 28, ctx.data$))("nzPageSize", ctx.list.maxResultCount)("nzTotal", i0.ɵɵpipeBind1(19, 30, ctx.totalCount$))("nzLoading", i0.ɵɵpipeBind1(20, 32, ctx.list.isLoading$))("nzFrontPagination", false);
        i0.ɵɵadvance(8);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(25, 34, "AbpTenantManagement::DisplayName:TenantName"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(28, 36, "AbpTenantManagement::Actions"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", _r0.data);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzVisible", ctx.isModalVisible)("nzTitle", _r2)("nzContent", _r4)("nzFooter", _r6);
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("visible", ctx.visibleFeatures)("providerKey", ctx.providerKey);
    } }, directives: [i6.NzCardComponent, i7.NzRowDirective, i7.NzColDirective, i8.NzFormItemComponent, i8.NzFormLabelComponent, i8.NzFormControlComponent, i9.NzInputDirective, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i10.NzButtonComponent, i11.NzWaveDirective, i12.ɵNzTransitionPatchDirective, i1.PermissionDirective, i13.NzIconDirective, i14.NzTableComponent, i14.NzTheadComponent, i14.NzTrDirective, i14.NzTableCellDirective, i14.NzThMeasureDirective, i14.NzTbodyComponent, i15.NgForOf, i16.NzModalComponent, i17.FeatureManagementComponent, i18.NzDropDownADirective, i18.NzDropDownDirective, i18.NzDropdownMenuComponent, i19.NzMenuDirective, i19.NzMenuItemDirective, i15.NgTemplateOutlet, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i1.FormSubmitDirective, i8.NzFormDirective, i4.FormGroupDirective, i20.ValidationGroupDirective, i4.FormControlName, i20.ValidationDirective, i15.NgIf, i21.NzCheckboxComponent], pipes: [i1.LocalizationPipe, i15.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TenantsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-tenants',
                templateUrl: './tenants.component.html',
                providers: [ListService]
            }]
    }], function () { return [{ type: i1.ListService }, { type: i2.ConfirmationService }, { type: i3.TenantManagementService }, { type: i4.FormBuilder }, { type: i5.Store }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3RlbmFudC1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy90ZW5hbnRzL3RlbmFudHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy90ZW5hbnQtbWFuYWdlbWVudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvdGVuYW50cy90ZW5hbnRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsSUFBSSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMrQjdCLDhCQUNFO0lBRHFFLG1QQUE2QjtJQUNsRyxZQUFtRDs7SUFBQSxpQkFBSzs7SUFBeEQsZUFBbUQ7SUFBbkQsaUZBQW1EOzs7O0lBQ3JELDhCQUVFO0lBREEsK1BBQXlDO0lBQ3pDLFlBQWlGOztJQUFBLGlCQUFLOztJQUF0RixlQUFpRjtJQUFqRiwrR0FBaUY7Ozs7SUFDbkYsOEJBRUU7SUFEQSwwUEFBb0M7SUFDcEMsWUFBd0U7O0lBQUEsaUJBQUs7O0lBQTdFLGVBQXdFO0lBQXhFLHNHQUF3RTs7OztJQUMxRSw4QkFDdUM7SUFBckMsOFBBQW9DO0lBQUMsWUFBcUQ7O0lBQUEsaUJBQUs7O0lBQTFE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MkJGLHFIQUNFO1FBc0JGLHdEQUM4QjtRQURELHlLQUE2QjtRQUMxRCxpQkFBOEI7Ozs7OztRQWxJckIsa0NBQW9CO1FBRWYsZUFBNkQ7UUFBN0Qsc0RBQTZEO1FBR3pDLGVBQWlEO1FBQWpELHVFQUFpRDtRQUUzQyxlQUFzRDtRQUF0RCx5RUFBc0QsNEJBQUE7UUFNMUUsZUFBc0Q7UUFBdEQsb0VBQXNELHFCQUFBO1FBRWhFLGVBQXdEO1FBQXhELDhFQUF3RDtRQUcxQyxlQUF3QjtRQUF4QiwwREFBd0IsdUNBQUEsb0RBQUEsMERBQUEsNEJBQUE7UUFJcEMsZUFBcUU7UUFBckUsMkZBQXFFO1FBQ3JFLGVBQXNEO1FBQXRELDRFQUFzRDtRQUl4RCxlQUFvQztRQUFwQyxrQ0FBb0M7UUEyQnBDLGVBQThCO1FBQTlCLDhDQUE4QixnQkFBQSxrQkFBQSxpQkFBQTtRQTJFWCxnQkFBNkI7UUFBN0IsNkNBQTZCLGdDQUFBOztrRERySDdDLGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudFNlcnZpY2UsIFRlbmFudHNDb21wb25lbnQgYXMgQWJwVGVuYW50c0NvbXBvbmVudCB9IGZyb20gJ0BhYnAvbmcudGVuYW50LW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBMaXN0U2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmctYWxhaW4tdGVuYW50cycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVuYW50cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtMaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudHNDb21wb25lbnQgZXh0ZW5kcyBBYnBUZW5hbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2xpc3Q6IExpc3RTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2NvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfdGVuYW50U2VydmljZTogVGVuYW50TWFuYWdlbWVudFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX3N0b3JlOiBTdG9yZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoX2xpc3QsIF9jb25maXJtYXRpb25TZXJ2aWNlLCBfdGVuYW50U2VydmljZSwgX2ZiLCBfc3RvcmUpO1xyXG4gICAgfVxyXG59XHJcbiIsIjxuei1jYXJkIFtuekJvcmRlcmVkXT1cImZhbHNlXCI+XHJcbiAgPCEtLSA8Zm9ybSBuei1mb3JtIFtuekxheW91dF09XCInaW5saW5lJ1wiIGNsYXNzPVwic2VhcmNoX19mb3JtXCI+IC0tPlxyXG4gIDxkaXYgbnotcm93IFtuekd1dHRlcl09XCJ7IHhzOiA4LCBzbTogOCwgbWQ6IDgsIGxnOiAyNCwgeGw6IDQ4LCB4eGw6IDQ4IH1cIj5cclxuICAgIDxkaXYgbnotY29sIG56TWQ9XCI4XCIgbnpTbT1cIjI0XCI+XHJcbiAgICAgIDxuei1mb3JtLWl0ZW0+XHJcbiAgICAgICAgPG56LWZvcm0tbGFiZWwgbnpGb3I9XCJub1wiPnt7J0FicElkZW50aXR5OjpQYWdlclNlYXJjaCcgfCBhYnBMb2NhbGl6YXRpb24gfX08L256LWZvcm0tbGFiZWw+XHJcbiAgICAgICAgPG56LWZvcm0tY29udHJvbD5cclxuICAgICAgICAgIDxpbnB1dCBuei1pbnB1dCB0eXBlPVwic2VhcmNoXCIgW3BsYWNlaG9sZGVyXT1cIidBYnBVaTo6UGFnZXJTZWFyY2gnIHwgYWJwTG9jYWxpemF0aW9uXCIgWyhuZ01vZGVsKV09XCJsaXN0LmZpbHRlclwiIC8+XHJcbiAgICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgICAgIDwvbnotZm9ybS1pdGVtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSA8L2Zvcm0+IC0tPlxyXG4gIDxidXR0b24gbnotYnV0dG9uIFthYnBQZXJtaXNzaW9uXT1cIidBYnBUZW5hbnRNYW5hZ2VtZW50LlRlbmFudHMuQ3JlYXRlJ1wiIChjbGljayk9XCJhZGRUZW5hbnQoKVwiIFtuelR5cGVdPVwiJ3ByaW1hcnknXCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cInBsdXNcIj48L2k+XHJcbiAgICA8c3Bhbj57eyAnQWJwVGVuYW50TWFuYWdlbWVudDo6TmV3VGVuYW50JyB8IGFicExvY2FsaXphdGlvbiB9fTwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8ZGl2IGNsYXNzPVwibXktbWRcIj48L2Rpdj5cclxuICA8bnotdGFibGUgI2Jhc2ljVGFibGUgW256RGF0YV09XCJkYXRhJCB8IGFzeW5jXCIgW256UGFnZVNpemVdPVwibGlzdC5tYXhSZXN1bHRDb3VudFwiIFtuelRvdGFsXT1cInRvdGFsQ291bnQkIHwgYXN5bmNcIlxyXG4gICAgW256TG9hZGluZ109XCJsaXN0LmlzTG9hZGluZyQgfCBhc3luY1wiIFtuekZyb250UGFnaW5hdGlvbl09XCJmYWxzZVwiIChuelBhZ2VJbmRleENoYW5nZSk9XCJsaXN0LnBhZ2U9JGV2ZW50LTE7XCI+XHJcbiAgICA8dGhlYWQ+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGg+e3sgJ0FicFRlbmFudE1hbmFnZW1lbnQ6OkRpc3BsYXlOYW1lOlRlbmFudE5hbWUnIHwgYWJwTG9jYWxpemF0aW9uIH19PC90aD5cclxuICAgICAgICA8dGg+e3sgJ0FicFRlbmFudE1hbmFnZW1lbnQ6OkFjdGlvbnMnIHwgYWJwTG9jYWxpemF0aW9uIH19PC90aD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHk+XHJcbiAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBiYXNpY1RhYmxlLmRhdGFcIj5cclxuICAgICAgICA8dGQ+e3sgZGF0YS5uYW1lIH19PC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YSBuei1kcm9wZG93biBbbnpEcm9wZG93bk1lbnVdPVwib3BNZW51XCI+XHJcbiAgICAgICAgICAgIHt7ICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpBY3Rpb25zJyB8IGFicExvY2FsaXphdGlvbiB9fVxyXG4gICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIj48L2k+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8bnotZHJvcGRvd24tbWVudSAjb3BNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgICAgICAgICAgPHVsIG56LW1lbnU+XHJcbiAgICAgICAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAqYWJwUGVybWlzc2lvbj1cIidBYnBUZW5hbnRNYW5hZ2VtZW50LlRlbmFudHMuVXBkYXRlJ1wiIChjbGljayk9XCJlZGl0VGVuYW50KGRhdGEuaWQpXCI+XHJcbiAgICAgICAgICAgICAgICB7eyAnQWJwVGVuYW50TWFuYWdlbWVudDo6RWRpdCcgfCBhYnBMb2NhbGl6YXRpb24gfX08L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gKmFicFBlcm1pc3Npb249XCInQWJwVGVuYW50TWFuYWdlbWVudC5UZW5hbnRzLk1hbmFnZUNvbm5lY3Rpb25TdHJpbmdzJ1wiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FZGl0Q29ubmVjdGlvblN0cmluZyhkYXRhLmlkKVwiPlxyXG4gICAgICAgICAgICAgICAge3sgJ0FicFRlbmFudE1hbmFnZW1lbnQ6OlBlcm1pc3Npb246TWFuYWdlQ29ubmVjdGlvblN0cmluZ3MnIHwgYWJwTG9jYWxpemF0aW9uIH19PC9saT5cclxuICAgICAgICAgICAgICA8bGkgbnotbWVudS1pdGVtICphYnBQZXJtaXNzaW9uPVwiJ0FicFRlbmFudE1hbmFnZW1lbnQuVGVuYW50cy5NYW5hZ2VGZWF0dXJlcydcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5GZWF0dXJlc01vZGFsKGRhdGEuaWQpXCI+XHJcbiAgICAgICAgICAgICAgICB7eyAnQWJwVGVuYW50TWFuYWdlbWVudDo6UGVybWlzc2lvbjpNYW5hZ2VGZWF0dXJlcycgfCBhYnBMb2NhbGl6YXRpb24gfX08L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gKmFicFBlcm1pc3Npb249XCInQWJwVGVuYW50TWFuYWdlbWVudC5UZW5hbnRzLkRlbGV0ZSdcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRlbGV0ZShkYXRhLmlkLCBkYXRhLm5hbWUpXCI+e3sgJ0FicFRlbmFudE1hbmFnZW1lbnQ6OkRlbGV0ZScgfCBhYnBMb2NhbGl6YXRpb24gfX08L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9uei1kcm9wZG93bi1tZW51PlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvbnotdGFibGU+XHJcbjwvbnotY2FyZD5cclxuXHJcbjxuei1tb2RhbCBbKG56VmlzaWJsZSldPVwiaXNNb2RhbFZpc2libGVcIiBbbnpUaXRsZV09XCJtb2RhbFRpdGxlXCIgW256Q29udGVudF09XCJtb2RhbENvbnRlbnRcIiBbbnpGb290ZXJdPVwibW9kYWxGb290ZXJcIlxyXG4gIChuek9uQ2FuY2VsKT1cImlzTW9kYWxWaXNpYmxlPWZhbHNlXCI+XHJcbiAgPG5nLXRlbXBsYXRlICNtb2RhbFRpdGxlPlxyXG4gICAge3sgc2VsZWN0ZWRNb2RhbENvbnRlbnQudGl0bGUgfCBhYnBMb2NhbGl6YXRpb24gfX1cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8bmctdGVtcGxhdGUgI21vZGFsQ29udGVudD5cclxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzZWxlY3RlZE1vZGFsQ29udGVudD8udGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8bmctdGVtcGxhdGUgI21vZGFsRm9vdGVyPlxyXG4gICAgPGJ1dHRvbiBuei1idXR0b24gbnpUeXBlPVwiZGVmYXVsdFwiIChjbGljayk9XCJpc01vZGFsVmlzaWJsZT1mYWxzZVwiPlxyXG4gICAgICB7eyAnQWJwVGVuYW50TWFuYWdlbWVudDo6Q2FuY2VsJyB8IGFicExvY2FsaXphdGlvbiB9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG56LWJ1dHRvbiBuelR5cGU9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInNhdmUoKVwiIFtuekxvYWRpbmddPVwibGlzdC5pc0xvYWRpbmckIHwgYXN5bmNcIj5cclxuICAgICAge3tcclxuICAgICAgJ0FicElkZW50aXR5OjpTYXZlJyB8IGFicExvY2FsaXphdGlvblxyXG4gICAgICB9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9uei1tb2RhbD5cclxuXHJcblxyXG5cclxuPG5nLXRlbXBsYXRlICN0ZW5hbnRNb2RhbFRlbXBsYXRlPlxyXG4gIDxmb3JtIG56LWZvcm0gW2Zvcm1Hcm91cF09XCJ0ZW5hbnRGb3JtXCIgKG5nU3VibWl0KT1cInNhdmUoKVwiIFtuekxheW91dF09XCIndmVydGljYWwnXCI+XHJcbiAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICA8bnotZm9ybS1sYWJlbCBbbnpTbV09XCIyNFwiIFtuelhzXT1cIjI0XCIgbnpSZXF1aXJlZCBuekZvcj1cInJvbGUtbmFtZVwiPlxyXG4gICAgICAgIHt7ICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpUZW5hbnROYW1lJyB8IGFicExvY2FsaXphdGlvbiB9fTwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgPG56LWZvcm0tY29udHJvbCBbbnpTbV09XCIyNFwiIFtuelhzXT1cIjI0XCI+XHJcbiAgICAgICAgPGlucHV0IG56LWlucHV0IGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIiAvPlxyXG4gICAgICA8L256LWZvcm0tY29udHJvbD5cclxuICAgIDwvbnotZm9ybS1pdGVtPlxyXG5cclxuICAgIDxuei1mb3JtLWl0ZW0gKm5nSWY9XCJ0ZW5hbnRGb3JtLmNvbnRyb2xzLmFkbWluRW1haWxBZGRyZXNzXCI+XHJcbiAgICAgIDxuei1mb3JtLWxhYmVsIFtuelNtXT1cIjI0XCIgW256WHNdPVwiMjRcIiBuelJlcXVpcmVkIG56Rm9yPVwicm9sZS1hZG1pbkVtYWlsQWRkcmVzc1wiPlxyXG4gICAgICAgIHt7ICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpEaXNwbGF5TmFtZTpBZG1pbkVtYWlsQWRkcmVzcycgfCBhYnBMb2NhbGl6YXRpb24gfX08L256LWZvcm0tbGFiZWw+XHJcbiAgICAgIDxuei1mb3JtLWNvbnRyb2wgW256U21dPVwiMjRcIiBbbnpYc109XCIyNFwiPlxyXG4gICAgICAgIDxpbnB1dCBuei1pbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJhZG1pbkVtYWlsQWRkcmVzc1wiIHR5cGU9XCJlbWFpbFwiIC8+XHJcbiAgICAgIDwvbnotZm9ybS1jb250cm9sPlxyXG4gICAgPC9uei1mb3JtLWl0ZW0+XHJcblxyXG4gICAgPG56LWZvcm0taXRlbSAqbmdJZj1cInRlbmFudEZvcm0uY29udHJvbHMuYWRtaW5QYXNzd29yZFwiPlxyXG4gICAgICA8bnotZm9ybS1sYWJlbCBbbnpTbV09XCIyNFwiIFtuelhzXT1cIjI0XCIgbnpSZXF1aXJlZCBuekZvcj1cInJvbGUtYWRtaW5QYXNzd29yZFwiPlxyXG4gICAgICAgIHt7ICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpEaXNwbGF5TmFtZTpBZG1pblBhc3N3b3JkJyB8IGFicExvY2FsaXphdGlvbiB9fTwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgPG56LWZvcm0tY29udHJvbCBbbnpTbV09XCIyNFwiIFtuelhzXT1cIjI0XCI+XHJcbiAgICAgICAgPGlucHV0IG56LWlucHV0IGZvcm1Db250cm9sTmFtZT1cImFkbWluUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICA8L256LWZvcm0tY29udHJvbD5cclxuICAgIDwvbnotZm9ybS1pdGVtPlxyXG4gIDwvZm9ybT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY29ubmVjdGlvblN0cmluZ01vZGFsVGVtcGxhdGU+XHJcbiAgPGZvcm0gbnotZm9ybSBbbnpMYXlvdXRdPVwiJ3ZlcnRpY2FsJ1wiIFtmb3JtR3JvdXBdPVwiZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdGb3JtXCIgKG5nU3VibWl0KT1cInNhdmUoKVwiPlxyXG4gICAgPG56LWZvcm0taXRlbT5cclxuICAgICAgPG56LWZvcm0tY29udHJvbCBbbnpTcGFuXT1cIjE0XCIgW256T2Zmc2V0XT1cIjZcIj5cclxuICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwidXNlU2hhcmVkRGF0YWJhc2VcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7e1xyXG4gICAgICAgICAgICAgICAgICAnQWJwVGVuYW50TWFuYWdlbWVudDo6RGlzcGxheU5hbWU6VXNlU2hhcmVkRGF0YWJhc2UnIHwgYWJwTG9jYWxpemF0aW9uXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgICA8L256LWZvcm0taXRlbT5cclxuICAgIDxuei1mb3JtLWl0ZW0gKm5nSWY9XCIhdXNlU2hhcmVkRGF0YWJhc2VcIj5cclxuICAgICAgPG56LWZvcm0tbGFiZWwgW256U21dPVwiMjRcIiBbbnpYc109XCIyNFwiIG56UmVxdWlyZWQgbnpGb3I9XCJkZWZhdWx0Q29ubmVjdGlvblN0cmluZ1wiPlxyXG4gICAgICAgIHt7ICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpEaXNwbGF5TmFtZTpEZWZhdWx0Q29ubmVjdGlvblN0cmluZycgfCBhYnBMb2NhbGl6YXRpb24gfX08L256LWZvcm0tbGFiZWw+XHJcbiAgICAgIDxuei1mb3JtLWNvbnRyb2wgW256U21dPVwiMjRcIiBbbnpYc109XCIyNFwiPlxyXG4gICAgICAgIDxpbnB1dCBuei1pbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJkZWZhdWx0Q29ubmVjdGlvblN0cmluZ1wiIGlkPVwiZGVmYXVsdENvbm5lY3Rpb25TdHJpbmdcIiAvPlxyXG4gICAgICA8L256LWZvcm0tY29udHJvbD5cclxuICAgIDwvbnotZm9ybS1pdGVtPlxyXG4gIDwvZm9ybT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy1hbGFpbi1mZWF0dXJlLW1hbmFnZW1lbnQgWyh2aXNpYmxlKV09XCJ2aXNpYmxlRmVhdHVyZXNcIiBwcm92aWRlck5hbWU9XCJUXCIgW3Byb3ZpZGVyS2V5XT1cInByb3ZpZGVyS2V5XCI+XHJcbjwvbmctYWxhaW4tZmVhdHVyZS1tYW5hZ2VtZW50PiJdfQ==