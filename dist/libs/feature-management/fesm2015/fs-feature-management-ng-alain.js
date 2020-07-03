import { FeatureManagementWrapModule } from '@fs/feature-management/wrap';
import { FormSubmitDirective, LocalizationPipe, CoreModule } from '@abp/ng.core';
import { ɵɵelementStart, ɵɵtext, ɵɵpipe, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵpipeBind1, ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵtemplate, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵtextInterpolate1, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵInheritDefinitionFeature, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { Store } from '@ngxs/store';
import { FeatureManagementComponent as FeatureManagementComponent$1 } from '@abp/ng.feature-management';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { NgIf, NgForOf, NgSwitch, NgSwitchCase, AsyncPipe } from '@angular/common';
import { ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, CheckboxControlValueAccessor, NgControlStatus, FormControlName, DefaultValueAccessor } from '@angular/forms';
import { NzFormDirective } from 'ng-zorro-antd/form';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzWaveDirective } from 'ng-zorro-antd/core/wave';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';

function FeatureManagementComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "AbpTenantManagement::Permission:ManageFeatures"));
} }
function FeatureManagementComponent_ng_template_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelement(1, "i", 7);
    ɵɵelementEnd();
} }
function FeatureManagementComponent_ng_template_3_form_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelement(1, "input", 14);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r11 = ɵɵnextContext().index;
    ɵɵadvance(1);
    ɵɵproperty("formControlName", i_r11);
} }
function FeatureManagementComponent_ng_template_3_form_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelement(1, "input", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r11 = ɵɵnextContext().index;
    ɵɵadvance(1);
    ɵɵproperty("formControlName", i_r11);
} }
function FeatureManagementComponent_ng_template_3_form_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelementStart(1, "div", 11);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, FeatureManagementComponent_ng_template_3_form_2_div_1_div_3_Template, 2, 1, "div", 12);
    ɵɵtemplate(4, FeatureManagementComponent_ng_template_3_form_2_div_1_div_4_Template, 2, 1, "div", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const feature_r10 = ctx.$implicit;
    ɵɵproperty("ngSwitch", feature_r10.valueType.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(feature_r10.name);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "ToggleStringValueType");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "FreeTextStringValueType");
} }
function FeatureManagementComponent_ng_template_3_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 8);
    ɵɵlistener("ngSubmit", function FeatureManagementComponent_ng_template_3_form_2_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r17); const ctx_r16 = ɵɵnextContext(2); return ctx_r16.save(); });
    ɵɵtemplate(1, FeatureManagementComponent_ng_template_3_form_2_div_1_Template, 5, 4, "div", 9);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", ctx_r8.form);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(2, 2, ctx_r8.features$));
} }
function FeatureManagementComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, FeatureManagementComponent_ng_template_3_ng_template_0_Template, 2, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵtemplate(2, FeatureManagementComponent_ng_template_3_form_2_Template, 3, 4, "form", 5);
} if (rf & 2) {
    const _r6 = ɵɵreference(1);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.form)("ngIfElse", _r6);
} }
function FeatureManagementComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 16);
    ɵɵlistener("click", function FeatureManagementComponent_ng_template_5_Template_button_click_0_listener() { ɵɵrestoreView(_r19); const ctx_r18 = ɵɵnextContext(); return ctx_r18.visible = false; });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 17);
    ɵɵlistener("click", function FeatureManagementComponent_ng_template_5_Template_button_click_3_listener() { ɵɵrestoreView(_r19); const ctx_r20 = ɵɵnextContext(); return ctx_r20.save(); });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpFeatureManagement::Cancel"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 4, "AbpFeatureManagement::Save"), " ");
} }
class FeatureManagementComponent extends FeatureManagementComponent$1 {
    constructor(_store) {
        super(_store);
        this._store = _store;
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
        this.visibleChange.emit(value);
        if (value)
            this.openModal();
    }
}
FeatureManagementComponent.ɵfac = function FeatureManagementComponent_Factory(t) { return new (t || FeatureManagementComponent)(ɵɵdirectiveInject(Store)); };
FeatureManagementComponent.ɵcmp = ɵɵdefineComponent({ type: FeatureManagementComponent, selectors: [["ng-alain-feature-management"]], inputs: { providerKey: "providerKey", providerName: "providerName", visible: "visible" }, features: [ɵɵInheritDefinitionFeature], decls: 7, vars: 4, consts: [[3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["loaderRef", ""], ["nz-form", "", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["class", "row my-3", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [1, "row", "my-3", 3, "ngSwitch"], [1, "col-4"], ["class", "col-8", 4, "ngSwitchCase"], [1, "col-8"], ["type", "checkbox", "name", "feature.name", 3, "formControlName"], ["type", "text", "name", "feature.name", 3, "formControlName"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function FeatureManagementComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-modal", 0);
        ɵɵlistener("nzVisibleChange", function FeatureManagementComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.visible = $event; })("nzOnCancel", function FeatureManagementComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.visible = false; });
        ɵɵtemplate(1, FeatureManagementComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, FeatureManagementComponent_ng_template_3_Template, 3, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(5, FeatureManagementComponent_ng_template_5_Template, 6, 6, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(2);
        const _r2 = ɵɵreference(4);
        const _r4 = ɵɵreference(6);
        ɵɵproperty("nzVisible", ctx.visible)("nzTitle", _r0)("nzContent", _r2)("nzFooter", _r4);
    } }, directives: [NzModalComponent, NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormSubmitDirective, NzFormDirective, FormGroupDirective, NgForOf, NgSwitch, NgSwitchCase, CheckboxControlValueAccessor, NgControlStatus, FormControlName, DefaultValueAccessor, NzButtonComponent, NzWaveDirective, ɵNzTransitionPatchDirective], pipes: [LocalizationPipe, AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FeatureManagementComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-feature-management',
                templateUrl: './feature-management.component.html'
            }]
    }], function () { return [{ type: Store }]; }, { providerKey: [{
            type: Input
        }], providerName: [{
            type: Input
        }], visible: [{
            type: Input
        }] }); })();

class FeatureManagementNgAlainModule {
}
FeatureManagementNgAlainModule.ɵmod = ɵɵdefineNgModule({ type: FeatureManagementNgAlainModule });
FeatureManagementNgAlainModule.ɵinj = ɵɵdefineInjector({ factory: function FeatureManagementNgAlainModule_Factory(t) { return new (t || FeatureManagementNgAlainModule)(); }, imports: [[
            CoreModule,
            NgAlainBasicModule,
            FeatureManagementWrapModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FeatureManagementNgAlainModule, { declarations: [FeatureManagementComponent], imports: [CoreModule,
        NgAlainBasicModule,
        FeatureManagementWrapModule], exports: [FeatureManagementComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FeatureManagementNgAlainModule, [{
        type: NgModule,
        args: [{
                declarations: [FeatureManagementComponent],
                imports: [
                    CoreModule,
                    NgAlainBasicModule,
                    FeatureManagementWrapModule
                ],
                exports: [FeatureManagementComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureManagementComponent, FeatureManagementNgAlainModule };
//# sourceMappingURL=fs-feature-management-ng-alain.js.map
