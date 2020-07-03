import { __decorate, __metadata } from "tslib";
import { ConfigState } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component, TemplateRef, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountService } from '@abp/ng.account';
import { TenantBoxComponent as AbpTenantBoxComponent } from '@abp/ng.account';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "@abp/ng.theme.shared";
import * as i3 from "@abp/ng.account";
import * as i4 from "ng-zorro-antd/card";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/modal";
import * as i7 from "@angular/forms";
import * as i8 from "ng-zorro-antd/form";
import * as i9 from "ng-zorro-antd/grid";
import * as i10 from "ng-zorro-antd/input";
import * as i11 from "ng-zorro-antd/button";
import * as i12 from "ng-zorro-antd/core/wave";
import * as i13 from "ng-zorro-antd/core/transition-patch";
import * as i14 from "@abp/ng.core";
function TenantBoxComponent_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "mainContentRef"]);
} }
function TenantBoxComponent_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵlistener("click", function TenantBoxComponent_ng_template_2_a_0_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onSwitch(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "AbpUiMultiTenancy::Switch"));
} }
function TenantBoxComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TenantBoxComponent_ng_template_2_a_0_Template, 3, 3, "a", 8);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx_r2.isMultiTenancyEnabled$));
} }
function TenantBoxComponent_ng_template_4_div_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const currentTenant_r15 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(2, 2, "AbpUiMultiTenancy::Tenant"), " (", currentTenant_r15.name || i0.ɵɵpipeBind1(3, 4, "AbpUiMultiTenancy::NotSelected"), ") ");
} }
function TenantBoxComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, TenantBoxComponent_ng_template_4_div_0_span_1_Template, 4, 6, "span", 10);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, ctx_r14.isMultiTenancyEnabled$));
} }
const _c0 = function () { return {}; };
function TenantBoxComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TenantBoxComponent_ng_template_4_div_0_Template, 3, 3, "div", 10);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx_r4.currentTenant$) || i0.ɵɵpureFunction0(3, _c0));
} }
function TenantBoxComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "abpLocalization");
} if (rf & 2) {
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(1, 1, "AbpUiMultiTenancy::Tenant"), " ");
} }
function TenantBoxComponent_ng_template_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "i", 17);
    i0.ɵɵelementEnd();
} }
function TenantBoxComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, TenantBoxComponent_ng_template_9_ng_template_0_Template, 2, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(2, "form", 12);
    i0.ɵɵlistener("ngSubmit", function TenantBoxComponent_ng_template_9_Template_form_ngSubmit_2_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.save(); });
    i0.ɵɵelementStart(3, "nz-form-item");
    i0.ɵɵelementStart(4, "nz-form-label", 13);
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "nz-form-control", 14);
    i0.ɵɵpipe(8, "abpLocalization");
    i0.ɵɵelementStart(9, "input", 15);
    i0.ɵɵlistener("ngModelChange", function TenantBoxComponent_ng_template_9_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.name = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzSm", 6)("nzXs", 24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(6, 7, "AbpUiMultiTenancy::Name"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("nzExtra", i0.ɵɵpipeBind1(8, 9, "AbpUiMultiTenancy::SwitchTenantHint"));
    i0.ɵɵproperty("nzSm", 14)("nzXs", 24);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r8.name);
} }
function TenantBoxComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function TenantBoxComponent_ng_template_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.isModalVisible = false; });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 19);
    i0.ɵɵlistener("click", function TenantBoxComponent_ng_template_11_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r24); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.save(); });
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpTenantManagement::Cancel"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 4, "AbpTenantManagement::Save"), " ");
} }
const _c1 = function () { return { top: "20px" }; };
const _c2 = ["*"];
export class TenantBoxComponent extends AbpTenantBoxComponent {
    constructor(_store, _toasterService, _accountService) {
        super(_store, _toasterService, _accountService);
        this._store = _store;
        this._toasterService = _toasterService;
        this._accountService = _accountService;
    }
}
TenantBoxComponent.ɵfac = function TenantBoxComponent_Factory(t) { return new (t || TenantBoxComponent)(i0.ɵɵdirectiveInject(i1.Store), i0.ɵɵdirectiveInject(i2.ToasterService), i0.ɵɵdirectiveInject(i3.AccountService)); };
TenantBoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TenantBoxComponent, selectors: [["ng-alain-tenant-box"]], inputs: { mainContentRef: "mainContentRef" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 13, vars: 9, consts: [[3, "nzTitle", "nzExtra"], [4, "ngTemplateOutlet"], ["extraTemplate", ""], ["cardTitle", ""], [3, "nzStyle", "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["id", "AbpTenantSwitchLink", "href", "javascript:void(0);", "class", "btn btn-sm mt-3 btn-outline-primary", 3, "click", 4, "ngIf"], ["id", "AbpTenantSwitchLink", "href", "javascript:void(0);", 1, "btn", "btn-sm", "mt-3", "btn-outline-primary", 3, "click"], [4, "ngIf"], ["loaderRef", ""], ["nz-form", "", 3, "ngSubmit"], ["nzRequired", "", "nzFor", "name", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzExtra"], ["nz-input", "", "id", "name", "name", "name", 3, "ngModel", "ngModelChange"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function TenantBoxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "nz-card", 0);
        i0.ɵɵtemplate(1, TenantBoxComponent_1_Template, 1, 0, undefined, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, TenantBoxComponent_ng_template_2_Template, 2, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, TenantBoxComponent_ng_template_4_Template, 2, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(6, "nz-modal", 4);
        i0.ɵɵlistener("nzVisibleChange", function TenantBoxComponent_Template_nz_modal_nzVisibleChange_6_listener($event) { return ctx.isModalVisible = $event; })("nzOnCancel", function TenantBoxComponent_Template_nz_modal_nzOnCancel_6_listener() { return ctx.isModalVisible = false; });
        i0.ɵɵtemplate(7, TenantBoxComponent_ng_template_7_Template, 2, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(9, TenantBoxComponent_ng_template_9_Template, 10, 11, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(11, TenantBoxComponent_ng_template_11_Template, 6, 6, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        const _r3 = i0.ɵɵreference(5);
        const _r5 = i0.ɵɵreference(8);
        const _r7 = i0.ɵɵreference(10);
        const _r9 = i0.ɵɵreference(12);
        i0.ɵɵproperty("nzTitle", _r3)("nzExtra", _r1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.mainContentRef);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("nzStyle", i0.ɵɵpureFunction0(8, _c1))("nzVisible", ctx.isModalVisible)("nzTitle", _r5)("nzContent", _r7)("nzFooter", _r9);
    } }, directives: [i4.NzCardComponent, i5.NgTemplateOutlet, i6.NzModalComponent, i5.NgIf, i7.ɵangular_packages_forms_forms_y, i7.NgControlStatusGroup, i7.NgForm, i8.NzFormDirective, i9.NzRowDirective, i8.NzFormItemComponent, i9.NzColDirective, i8.NzFormLabelComponent, i8.NzFormControlComponent, i10.NzInputDirective, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i11.NzButtonComponent, i12.NzWaveDirective, i13.ɵNzTransitionPatchDirective], pipes: [i5.AsyncPipe, i14.LocalizationPipe], encapsulation: 2 });
__decorate([
    Select(ConfigState.getDeep('multiTenancy.isEnabled')),
    __metadata("design:type", Observable)
], TenantBoxComponent.prototype, "isMultiTenancyEnabled$", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TenantBoxComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-tenant-box',
                templateUrl: './tenant-box.component.html'
            }]
    }], function () { return [{ type: i1.Store }, { type: i2.ToasterService }, { type: i3.AccountService }]; }, { mainContentRef: [{
            type: Input
        }], isMultiTenancyEnabled$: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL3RlbmFudC1ib3gvdGVuYW50LWJveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL3RlbmFudC1ib3gvdGVuYW50LWJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQyxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLElBQUkscUJBQXFCLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNObkYsOERBQStDOzs7O0lBRy9DLDRCQUM4RDtJQUFyQiwrTEFBb0I7SUFBQyxZQUFtRDs7SUFBQSxpQkFBSTs7SUFBdkQsZUFBbUQ7SUFBbkQsdUVBQW1EOzs7SUFEakgsNkVBQzhEOzs7O0lBQTVELDBFQUFzQzs7O0lBS3RDLDRCQUNFO0lBQUEsWUFFRjs7O0lBQUEsaUJBQU87OztJQUZMLGVBRUY7SUFGRSwyS0FFRjs7O0lBSkYsMkJBQ0U7SUFBQSwwRkFDRTs7SUFHSixpQkFBTTs7O0lBSkUsZUFBc0M7SUFBdEMsMkVBQXNDOzs7O0lBRDlDLGtGQUNFOzs7O0lBREcsZ0dBQXVEOzs7SUFZMUQsWUFDRjs7O0lBREUsa0ZBQ0Y7OztJQUlJLCtCQUF5QjtJQUFBLHdCQUFzQztJQUFBLGlCQUFNOzs7O0lBRHZFLG1JQUNFO0lBR0YsZ0NBR0U7SUFIWSwrTEFBbUI7SUFHL0Isb0NBQ0U7SUFBQSx5Q0FBOEQ7SUFBQSxZQUM5RDs7SUFBQSxpQkFBZ0I7SUFDaEIsMkNBRUU7O0lBQUEsaUNBQ0Y7SUFEa0IsdU5BQWtCO0lBQWxDLGlCQUNGO0lBQUEsaUJBQWtCO0lBQ3BCLGlCQUFlO0lBQ2pCLGlCQUFPOzs7SUFQWSxlQUFVO0lBQVYsd0JBQVUsWUFBQTtJQUFxQyxlQUM5RDtJQUQ4RCwrRUFDOUQ7SUFFRSxlQUF1RTtJQUF2RSxnR0FBdUU7SUFEeEQseUJBQVcsWUFBQTtJQUVWLGVBQWtCO0lBQWxCLHFDQUFrQjs7OztJQU94QyxrQ0FDRTtJQURpQyxtTUFBd0IsS0FBSyxJQUFDO0lBQy9ELFlBQ0Y7O0lBQUEsaUJBQVM7SUFDVCxrQ0FDRTtJQURpQyw0TEFBZ0I7SUFDakQsWUFHRjs7SUFBQSxpQkFBUzs7SUFOUCxlQUNGO0lBREUsb0ZBQ0Y7SUFFRSxlQUdGO0lBSEUsa0ZBR0Y7Ozs7QUR0Q0osTUFBTSxPQUFPLGtCQUNYLFNBQVEscUJBQXFCO0lBTzdCLFlBQ1UsTUFBYSxFQUNiLGVBQStCLEVBQy9CLGVBQStCO1FBRXZDLEtBQUssQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBSnhDLFdBQU0sR0FBTixNQUFNLENBQU87UUFDYixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBR3pDLENBQUM7O29GQWRVLGtCQUFrQjt1REFBbEIsa0JBQWtCOztRQ2IvQixrQ0FDRTtRQUFBLG1FQUErQztRQUNqRCxpQkFBVTtRQUNWLG9IQUNFO1FBSUYsb0hBQ0U7UUFTRixtQ0FFRTtRQUZvQywwSkFBOEIsbUhBQ1osS0FBSyxJQURPO1FBRWxFLG9IQUNFO1FBR0Ysc0hBQ0U7UUFrQkYsc0hBQ0U7UUFTSixpQkFBVzs7Ozs7OztRQXJERiw2QkFBcUIsZ0JBQUE7UUFDaEIsZUFBa0M7UUFBbEMscURBQWtDO1FBaUJ0QyxlQUEyQjtRQUEzQixvREFBMkIsaUNBQUEsZ0JBQUEsa0JBQUEsaUJBQUE7O0FERW5DO0lBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQzs4QkFDOUIsVUFBVTtrRUFBVTtrREFQakMsa0JBQWtCO2NBSjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsNkJBQTZCO2FBQzNDOztrQkFJRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQLCBTZXRUZW5hbnQsIFNlc3Npb25TdGF0ZSwgQ29uZmlnU3RhdGUgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUb2FzdGVyU2VydmljZSB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSAsU2VsZWN0fSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5hY2NvdW50JztcclxuaW1wb3J0IHsgVGVuYW50Qm94Q29tcG9uZW50IGFzIEFicFRlbmFudEJveENvbXBvbmVudCxBY2NvdW50fSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1hbGFpbi10ZW5hbnQtYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGVuYW50LWJveC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudEJveENvbXBvbmVudCBcclxuICBleHRlbmRzIEFicFRlbmFudEJveENvbXBvbmVudCBcclxuICBpbXBsZW1lbnRzIEFjY291bnQuVGVuYW50Qm94Q29tcG9uZW50SW5wdXRzLCBBY2NvdW50LlRlbmFudEJveENvbXBvbmVudE91dHB1dHMge1xyXG4gIEBJbnB1dCgpXHJcbiAgbWFpbkNvbnRlbnRSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBTZWxlY3QoQ29uZmlnU3RhdGUuZ2V0RGVlcCgnbXVsdGlUZW5hbmN5LmlzRW5hYmxlZCcpKVxyXG4gIGlzTXVsdGlUZW5hbmN5RW5hYmxlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9zdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIF90b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9hY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKF9zdG9yZSwgX3RvYXN0ZXJTZXJ2aWNlLCBfYWNjb3VudFNlcnZpY2UpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIjxuei1jYXJkIFtuelRpdGxlXT1cImNhcmRUaXRsZVwiIFtuekV4dHJhXT1cImV4dHJhVGVtcGxhdGVcIj5cclxuICA8bmctY29udGVudCAqbmdUZW1wbGF0ZU91dGxldD1cIm1haW5Db250ZW50UmVmXCI+PC9uZy1jb250ZW50PlxyXG48L256LWNhcmQ+XHJcbjxuZy10ZW1wbGF0ZSAjZXh0cmFUZW1wbGF0ZT5cclxuICA8YSBpZD1cIkFicFRlbmFudFN3aXRjaExpbmtcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBtdC0zIGJ0bi1vdXRsaW5lLXByaW1hcnlcIlxyXG4gICAgKm5nSWY9XCJpc011bHRpVGVuYW5jeUVuYWJsZWQkIHwgYXN5bmNcIiAoY2xpY2spPVwib25Td2l0Y2goKVwiPnt7ICdBYnBVaU11bHRpVGVuYW5jeTo6U3dpdGNoJyB8IGFicExvY2FsaXphdGlvbiB9fTwvYT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY2FyZFRpdGxlPlxyXG4gIDxkaXYgKm5nSWY9XCIoY3VycmVudFRlbmFudCQgfCBhc3luYykgfHwge30gYXMgY3VycmVudFRlbmFudFwiPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJpc011bHRpVGVuYW5jeUVuYWJsZWQkIHwgYXN5bmNcIj5cclxuICAgICAge3snQWJwVWlNdWx0aVRlbmFuY3k6OlRlbmFudCcgfCBhYnBMb2NhbGl6YXRpb259fVxyXG4gICAgICAoe3sgY3VycmVudFRlbmFudC5uYW1lIHx8ICgnQWJwVWlNdWx0aVRlbmFuY3k6Ok5vdFNlbGVjdGVkJyB8IGFicExvY2FsaXphdGlvbikgfX0pXHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcblxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG56LW1vZGFsIFtuelN0eWxlXT1cInsgdG9wOiAnMjBweCcgfVwiIFsobnpWaXNpYmxlKV09XCJpc01vZGFsVmlzaWJsZVwiIFtuelRpdGxlXT1cIm1vZGFsVGl0bGVcIiBbbnpDb250ZW50XT1cIm1vZGFsQ29udGVudFwiXHJcbiAgW256Rm9vdGVyXT1cIm1vZGFsRm9vdGVyXCIgKG56T25DYW5jZWwpPVwiaXNNb2RhbFZpc2libGU9ZmFsc2VcIj5cclxuICA8bmctdGVtcGxhdGUgI21vZGFsVGl0bGU+XHJcbiAgICB7eydBYnBVaU11bHRpVGVuYW5jeTo6VGVuYW50JyB8IGFicExvY2FsaXphdGlvbn19XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgPG5nLXRlbXBsYXRlICNtb2RhbENvbnRlbnQ+XHJcbiAgICA8bmctdGVtcGxhdGUgI2xvYWRlclJlZj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+PGkgY2xhc3M9XCJmYSBmYS1wdWxzZSBmYS1zcGlubmVyXCI+PC9pPjwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICA8Zm9ybSBuei1mb3JtIChuZ1N1Ym1pdCk9XCJzYXZlKClcIj5cclxuXHJcblxyXG4gICAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICAgIDxuei1mb3JtLWxhYmVsIFtuelNtXT1cIjZcIiBbbnpYc109XCIyNFwiIG56UmVxdWlyZWQgbnpGb3I9XCJuYW1lXCI+e3sgJ0FicFVpTXVsdGlUZW5hbmN5OjpOYW1lJyB8IGFicExvY2FsaXphdGlvbiB9fVxyXG4gICAgICAgIDwvbnotZm9ybS1sYWJlbD5cclxuICAgICAgICA8bnotZm9ybS1jb250cm9sIFtuelNtXT1cIjE0XCIgW256WHNdPVwiMjRcIlxyXG4gICAgICAgICAgbnpFeHRyYT1cInt7ICdBYnBVaU11bHRpVGVuYW5jeTo6U3dpdGNoVGVuYW50SGludCcgfCBhYnBMb2NhbGl6YXRpb24gfX1cIj5cclxuICAgICAgICAgIDxpbnB1dCBuei1pbnB1dCBbKG5nTW9kZWwpXT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XHJcbiAgICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgICAgIDwvbnotZm9ybS1pdGVtPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gIDxuZy10ZW1wbGF0ZSAjbW9kYWxGb290ZXI+XHJcbiAgICA8YnV0dG9uIG56LWJ1dHRvbiBuelR5cGU9XCJkZWZhdWx0XCIgKGNsaWNrKT1cImlzTW9kYWxWaXNpYmxlPWZhbHNlXCI+XHJcbiAgICAgIHt7ICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpDYW5jZWwnIHwgYWJwTG9jYWxpemF0aW9uIH19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbnotYnV0dG9uIG56VHlwZT1cInByaW1hcnlcIiAoY2xpY2spPVwic2F2ZSgpXCI+XHJcbiAgICAgIHt7XHJcbiAgICAgICdBYnBUZW5hbnRNYW5hZ2VtZW50OjpTYXZlJyB8IGFicExvY2FsaXphdGlvblxyXG4gICAgICAgIH19XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L256LW1vZGFsPiJdfQ==