import { TenantManagementWrapModule } from '@fs/tenant-management/wrap';
import { ListService, PermissionDirective, FormSubmitDirective, LocalizationPipe, LazyModuleFactory } from '@abp/ng.core';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵtextInterpolate, ɵɵelement, ɵɵtemplate, ɵɵreference, ɵɵproperty, ɵɵelementContainer, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵtemplateRefExtractor, ɵɵpureFunction0, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { TenantsComponent as TenantsComponent$1, TenantManagementService } from '@abp/ng.tenant-management';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { FormBuilder, DefaultValueAccessor, NgControlStatus, NgModel, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, FormControlName } from '@angular/forms';
import { Store } from '@ngxs/store';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormDirective } from 'ng-zorro-antd/form';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent } from 'ng-zorro-antd/table';
import { NgForOf, NgTemplateOutlet, NgIf, AsyncPipe } from '@angular/common';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { FeatureManagementComponent, FeatureManagementNgAlainModule } from '@fs/feature-management/ng-alain';
import { NzDropDownADirective, NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzMenuDirective, NzMenuItemDirective } from 'ng-zorro-antd/menu';
import { ValidationGroupDirective, ValidationDirective } from '@ngx-validate/core';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';

function TenantsComponent_tr_30_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 23);
    ɵɵlistener("click", function TenantsComponent_tr_30_li_11_Template_li_click_0_listener() { ɵɵrestoreView(_r20); const data_r12 = ɵɵnextContext().$implicit; const ctx_r18 = ɵɵnextContext(); return ctx_r18.editTenant(data_r12.id); });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "AbpTenantManagement::Edit"), "");
} }
function TenantsComponent_tr_30_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 23);
    ɵɵlistener("click", function TenantsComponent_tr_30_li_12_Template_li_click_0_listener() { ɵɵrestoreView(_r23); const data_r12 = ɵɵnextContext().$implicit; const ctx_r21 = ɵɵnextContext(); return ctx_r21.onEditConnectionString(data_r12.id); });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "AbpTenantManagement::Permission:ManageConnectionStrings"), "");
} }
function TenantsComponent_tr_30_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 23);
    ɵɵlistener("click", function TenantsComponent_tr_30_li_13_Template_li_click_0_listener() { ɵɵrestoreView(_r26); const data_r12 = ɵɵnextContext().$implicit; const ctx_r24 = ɵɵnextContext(); return ctx_r24.openFeaturesModal(data_r12.id); });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "AbpTenantManagement::Permission:ManageFeatures"), "");
} }
function TenantsComponent_tr_30_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 23);
    ɵɵlistener("click", function TenantsComponent_tr_30_li_14_Template_li_click_0_listener() { ɵɵrestoreView(_r29); const data_r12 = ɵɵnextContext().$implicit; const ctx_r27 = ɵɵnextContext(); return ctx_r27.delete(data_r12.id, data_r12.name); });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "AbpTenantManagement::Delete"));
} }
function TenantsComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td");
    ɵɵelementStart(4, "a", 18);
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelement(7, "i", 19);
    ɵɵelementEnd();
    ɵɵelementStart(8, "nz-dropdown-menu", null, 20);
    ɵɵelementStart(10, "ul", 21);
    ɵɵtemplate(11, TenantsComponent_tr_30_li_11_Template, 3, 3, "li", 22);
    ɵɵtemplate(12, TenantsComponent_tr_30_li_12_Template, 3, 3, "li", 22);
    ɵɵtemplate(13, TenantsComponent_tr_30_li_13_Template, 3, 3, "li", 22);
    ɵɵtemplate(14, TenantsComponent_tr_30_li_14_Template, 3, 3, "li", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const _r13 = ɵɵreference(9);
    ɵɵadvance(2);
    ɵɵtextInterpolate(data_r12.name);
    ɵɵadvance(2);
    ɵɵproperty("nzDropdownMenu", _r13);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 7, "AbpTenantManagement::Actions"), " ");
    ɵɵadvance(6);
    ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.Update");
    ɵɵadvance(1);
    ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.ManageConnectionStrings");
    ɵɵadvance(1);
    ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.ManageFeatures");
    ɵɵadvance(1);
    ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.Delete");
} }
function TenantsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, ctx_r3.selectedModalContent.title), " ");
} }
function TenantsComponent_ng_template_34_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function TenantsComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, TenantsComponent_ng_template_34_ng_container_0_Template, 1, 0, "ng-container", 24);
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r5.selectedModalContent == null ? null : ctx_r5.selectedModalContent.template);
} }
function TenantsComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 25);
    ɵɵlistener("click", function TenantsComponent_ng_template_36_Template_button_click_0_listener() { ɵɵrestoreView(_r32); const ctx_r31 = ɵɵnextContext(); return ctx_r31.isModalVisible = false; });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 26);
    ɵɵlistener("click", function TenantsComponent_ng_template_36_Template_button_click_3_listener() { ɵɵrestoreView(_r32); const ctx_r33 = ɵɵnextContext(); return ctx_r33.save(); });
    ɵɵpipe(4, "async");
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "AbpTenantManagement::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("nzLoading", ɵɵpipeBind1(4, 5, ctx_r7.list.isLoading$));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 7, "AbpIdentity::Save"), " ");
} }
function TenantsComponent_ng_template_38_nz_form_item_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-form-item");
    ɵɵelementStart(1, "nz-form-label", 32);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(4, "nz-form-control", 29);
    ɵɵelement(5, "input", 33);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("nzSm", 24)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "AbpTenantManagement::DisplayName:AdminEmailAddress"), "");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 24)("nzXs", 24);
} }
function TenantsComponent_ng_template_38_nz_form_item_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-form-item");
    ɵɵelementStart(1, "nz-form-label", 34);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(4, "nz-form-control", 29);
    ɵɵelement(5, "input", 35);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("nzSm", 24)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "AbpTenantManagement::DisplayName:AdminPassword"), "");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 24)("nzXs", 24);
} }
function TenantsComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 27);
    ɵɵlistener("ngSubmit", function TenantsComponent_ng_template_38_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r37); const ctx_r36 = ɵɵnextContext(); return ctx_r36.save(); });
    ɵɵelementStart(1, "nz-form-item");
    ɵɵelementStart(2, "nz-form-label", 28);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(5, "nz-form-control", 29);
    ɵɵelement(6, "input", 30);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(7, TenantsComponent_ng_template_38_nz_form_item_7_Template, 6, 7, "nz-form-item", 31);
    ɵɵtemplate(8, TenantsComponent_ng_template_38_nz_form_item_8_Template, 6, 7, "nz-form-item", 31);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r9.tenantForm)("nzLayout", "vertical");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 24)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 9, "AbpTenantManagement::TenantName"), "");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 24)("nzXs", 24);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r9.tenantForm.controls.adminEmailAddress);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.tenantForm.controls.adminPassword);
} }
function TenantsComponent_ng_template_40_nz_form_item_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "nz-form-item");
    ɵɵelementStart(1, "nz-form-label", 39);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(4, "nz-form-control", 29);
    ɵɵelement(5, "input", 40);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵproperty("nzSm", 24)("nzXs", 24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "AbpTenantManagement::DisplayName:DefaultConnectionString"), "");
    ɵɵadvance(2);
    ɵɵproperty("nzSm", 24)("nzXs", 24);
} }
function TenantsComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 36);
    ɵɵlistener("ngSubmit", function TenantsComponent_ng_template_40_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r40); const ctx_r39 = ɵɵnextContext(); return ctx_r39.save(); });
    ɵɵelementStart(1, "nz-form-item");
    ɵɵelementStart(2, "nz-form-control", 37);
    ɵɵelementStart(3, "label", 38);
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(7, TenantsComponent_ng_template_40_nz_form_item_7_Template, 6, 7, "nz-form-item", 31);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext();
    ɵɵproperty("nzLayout", "vertical")("formGroup", ctx_r11.defaultConnectionStringForm);
    ɵɵadvance(2);
    ɵɵproperty("nzSpan", 14)("nzOffset", 6);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 6, "AbpTenantManagement::DisplayName:UseSharedDatabase"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r11.useSharedDatabase);
} }
const _c0 = function () { return { xs: 8, sm: 8, md: 8, lg: 24, xl: 48, xxl: 48 }; };
class TenantsComponent extends TenantsComponent$1 {
    constructor(_list, _confirmationService, _tenantService, _fb, _store) {
        super(_list, _confirmationService, _tenantService, _fb, _store);
        this._list = _list;
        this._confirmationService = _confirmationService;
        this._tenantService = _tenantService;
        this._fb = _fb;
        this._store = _store;
    }
}
TenantsComponent.ɵfac = function TenantsComponent_Factory(t) { return new (t || TenantsComponent)(ɵɵdirectiveInject(ListService), ɵɵdirectiveInject(ConfirmationService), ɵɵdirectiveInject(TenantManagementService), ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(Store)); };
TenantsComponent.ɵcmp = ɵɵdefineComponent({ type: TenantsComponent, selectors: [["ng-alain-tenants"]], features: [ɵɵProvidersFeature([ListService]), ɵɵInheritDefinitionFeature], decls: 43, vars: 39, consts: [[3, "nzBordered"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzMd", "8", "nzSm", "24"], ["nzFor", "no"], ["nz-input", "", "type", "search", 3, "placeholder", "ngModel", "ngModelChange"], ["nz-button", "", 3, "abpPermission", "nzType", "click"], ["nz-icon", "", "nzType", "plus"], [1, "my-md"], [3, "nzData", "nzPageSize", "nzTotal", "nzLoading", "nzFrontPagination", "nzPageIndexChange"], ["basicTable", ""], [4, "ngFor", "ngForOf"], [3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["tenantModalTemplate", ""], ["connectionStringModalTemplate", ""], ["providerName", "T", 3, "visible", "providerKey", "visibleChange"], ["nz-dropdown", "", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["opMenu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click", 4, "abpPermission"], ["nz-menu-item", "", 3, "click"], [4, "ngTemplateOutlet"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"], ["nz-form", "", 3, "formGroup", "nzLayout", "ngSubmit"], ["nzRequired", "", "nzFor", "role-name", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "name"], [4, "ngIf"], ["nzRequired", "", "nzFor", "role-adminEmailAddress", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "adminEmailAddress", "type", "email"], ["nzRequired", "", "nzFor", "role-adminPassword", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "adminPassword", "type", "password"], ["nz-form", "", 3, "nzLayout", "formGroup", "ngSubmit"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "useSharedDatabase"], ["nzRequired", "", "nzFor", "defaultConnectionString", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "defaultConnectionString", "id", "defaultConnectionString"]], template: function TenantsComponent_Template(rf, ctx) { if (rf & 1) {
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
        ɵɵlistener("ngModelChange", function TenantsComponent_Template_input_ngModelChange_8_listener($event) { return ctx.list.filter = $event; });
        ɵɵpipe(9, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "button", 5);
        ɵɵlistener("click", function TenantsComponent_Template_button_click_10_listener() { return ctx.addTenant(); });
        ɵɵelement(11, "i", 6);
        ɵɵelementStart(12, "span");
        ɵɵtext(13);
        ɵɵpipe(14, "abpLocalization");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(15, "div", 7);
        ɵɵelementStart(16, "nz-table", 8, 9);
        ɵɵlistener("nzPageIndexChange", function TenantsComponent_Template_nz_table_nzPageIndexChange_16_listener($event) { return ctx.list.page = $event - 1; });
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
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(29, "tbody");
        ɵɵtemplate(30, TenantsComponent_tr_30_Template, 15, 9, "tr", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(31, "nz-modal", 11);
        ɵɵlistener("nzVisibleChange", function TenantsComponent_Template_nz_modal_nzVisibleChange_31_listener($event) { return ctx.isModalVisible = $event; })("nzOnCancel", function TenantsComponent_Template_nz_modal_nzOnCancel_31_listener() { return ctx.isModalVisible = false; });
        ɵɵtemplate(32, TenantsComponent_ng_template_32_Template, 2, 3, "ng-template", null, 12, ɵɵtemplateRefExtractor);
        ɵɵtemplate(34, TenantsComponent_ng_template_34_Template, 1, 1, "ng-template", null, 13, ɵɵtemplateRefExtractor);
        ɵɵtemplate(36, TenantsComponent_ng_template_36_Template, 7, 9, "ng-template", null, 14, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵtemplate(38, TenantsComponent_ng_template_38_Template, 9, 11, "ng-template", null, 15, ɵɵtemplateRefExtractor);
        ɵɵtemplate(40, TenantsComponent_ng_template_40_Template, 8, 8, "ng-template", null, 16, ɵɵtemplateRefExtractor);
        ɵɵelementStart(42, "ng-alain-feature-management", 17);
        ɵɵlistener("visibleChange", function TenantsComponent_Template_ng_alain_feature_management_visibleChange_42_listener($event) { return ctx.visibleFeatures = $event; });
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(17);
        const _r2 = ɵɵreference(33);
        const _r4 = ɵɵreference(35);
        const _r6 = ɵɵreference(37);
        ɵɵproperty("nzBordered", false);
        ɵɵadvance(1);
        ɵɵproperty("nzGutter", ɵɵpureFunction0(38, _c0));
        ɵɵadvance(4);
        ɵɵtextInterpolate(ɵɵpipeBind1(6, 22, "AbpIdentity::PagerSearch"));
        ɵɵadvance(3);
        ɵɵproperty("placeholder", ɵɵpipeBind1(9, 24, "AbpUi::PagerSearch"))("ngModel", ctx.list.filter);
        ɵɵadvance(2);
        ɵɵproperty("abpPermission", "AbpTenantManagement.Tenants.Create")("nzType", "primary");
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(14, 26, "AbpTenantManagement::NewTenant"));
        ɵɵadvance(3);
        ɵɵproperty("nzData", ɵɵpipeBind1(18, 28, ctx.data$))("nzPageSize", ctx.list.maxResultCount)("nzTotal", ɵɵpipeBind1(19, 30, ctx.totalCount$))("nzLoading", ɵɵpipeBind1(20, 32, ctx.list.isLoading$))("nzFrontPagination", false);
        ɵɵadvance(8);
        ɵɵtextInterpolate(ɵɵpipeBind1(25, 34, "AbpTenantManagement::DisplayName:TenantName"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(28, 36, "AbpTenantManagement::Actions"));
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", _r0.data);
        ɵɵadvance(1);
        ɵɵproperty("nzVisible", ctx.isModalVisible)("nzTitle", _r2)("nzContent", _r4)("nzFooter", _r6);
        ɵɵadvance(11);
        ɵɵproperty("visible", ctx.visibleFeatures)("providerKey", ctx.providerKey);
    } }, directives: [NzCardComponent, NzRowDirective, NzColDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzInputDirective, DefaultValueAccessor, NgControlStatus, NgModel, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective, PermissionDirective, NzIconDirective, NzTableComponent, NzTheadComponent, NzTrDirective, NzTableCellDirective, NzThMeasureDirective, NzTbodyComponent, NgForOf, NzModalComponent, FeatureManagementComponent, NzDropDownADirective, NzDropDownDirective, NzDropdownMenuComponent, NzMenuDirective, NzMenuItemDirective, NgTemplateOutlet, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, NzFormDirective, FormGroupDirective, ValidationGroupDirective, FormControlName, ValidationDirective, NgIf, NzCheckboxComponent], pipes: [LocalizationPipe, AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TenantsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-tenants',
                templateUrl: './tenants.component.html',
                providers: [ListService]
            }]
    }], function () { return [{ type: ListService }, { type: ConfirmationService }, { type: TenantManagementService }, { type: FormBuilder }, { type: Store }]; }, null); })();

class TenantManagementNgAlainModule {
    static forChild() {
        return {
            ngModule: TenantManagementNgAlainModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(TenantManagementNgAlainModule.forChild());
    }
}
TenantManagementNgAlainModule.ɵmod = ɵɵdefineNgModule({ type: TenantManagementNgAlainModule });
TenantManagementNgAlainModule.ɵinj = ɵɵdefineInjector({ factory: function TenantManagementNgAlainModule_Factory(t) { return new (t || TenantManagementNgAlainModule)(); }, imports: [[
            NgAlainBasicModule,
            FeatureManagementNgAlainModule,
            TenantManagementWrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TenantManagementNgAlainModule, { declarations: [TenantsComponent], imports: [NgAlainBasicModule,
        FeatureManagementNgAlainModule,
        TenantManagementWrapModule], exports: [TenantsComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TenantManagementNgAlainModule, [{
        type: NgModule,
        args: [{
                declarations: [TenantsComponent],
                entryComponents: [TenantsComponent],
                exports: [TenantsComponent],
                imports: [
                    NgAlainBasicModule,
                    FeatureManagementNgAlainModule,
                    TenantManagementWrapModule
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TenantManagementNgAlainModule, TenantsComponent };
//# sourceMappingURL=fs-tenant-management-ng-alain.js.map
