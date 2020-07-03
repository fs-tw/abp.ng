import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { FeatureManagementComponent as AbpFeatureManagementComponent } from '@abp/ng.feature-management';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "ng-zorro-antd/modal";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "@abp/ng.core";
import * as i6 from "ng-zorro-antd/form";
import * as i7 from "ng-zorro-antd/button";
import * as i8 from "ng-zorro-antd/core/wave";
import * as i9 from "ng-zorro-antd/core/transition-patch";
function FeatureManagementComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "AbpTenantManagement::Permission:ManageFeatures"));
} }
function FeatureManagementComponent_ng_template_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "i", 7);
    i0.ɵɵelementEnd();
} }
function FeatureManagementComponent_ng_template_3_form_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "input", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r11 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", i_r11);
} }
function FeatureManagementComponent_ng_template_3_form_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "input", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r11 = i0.ɵɵnextContext().index;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", i_r11);
} }
function FeatureManagementComponent_ng_template_3_form_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, FeatureManagementComponent_ng_template_3_form_2_div_1_div_3_Template, 2, 1, "div", 12);
    i0.ɵɵtemplate(4, FeatureManagementComponent_ng_template_3_form_2_div_1_div_4_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const feature_r10 = ctx.$implicit;
    i0.ɵɵproperty("ngSwitch", feature_r10.valueType.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(feature_r10.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "ToggleStringValueType");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "FreeTextStringValueType");
} }
function FeatureManagementComponent_ng_template_3_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 8);
    i0.ɵɵlistener("ngSubmit", function FeatureManagementComponent_ng_template_3_form_2_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.save(); });
    i0.ɵɵtemplate(1, FeatureManagementComponent_ng_template_3_form_2_div_1_Template, 5, 4, "div", 9);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r8.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 2, ctx_r8.features$));
} }
function FeatureManagementComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, FeatureManagementComponent_ng_template_3_ng_template_0_Template, 2, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(2, FeatureManagementComponent_ng_template_3_form_2_Template, 3, 4, "form", 5);
} if (rf & 2) {
    const _r6 = i0.ɵɵreference(1);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.form)("ngIfElse", _r6);
} }
function FeatureManagementComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function FeatureManagementComponent_ng_template_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.visible = false; });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 17);
    i0.ɵɵlistener("click", function FeatureManagementComponent_ng_template_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.save(); });
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "abpLocalization");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, "AbpFeatureManagement::Cancel"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 4, "AbpFeatureManagement::Save"), " ");
} }
export class FeatureManagementComponent extends AbpFeatureManagementComponent {
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
FeatureManagementComponent.ɵfac = function FeatureManagementComponent_Factory(t) { return new (t || FeatureManagementComponent)(i0.ɵɵdirectiveInject(i1.Store)); };
FeatureManagementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FeatureManagementComponent, selectors: [["ng-alain-feature-management"]], inputs: { providerKey: "providerKey", providerName: "providerName", visible: "visible" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 7, vars: 4, consts: [[3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["loaderRef", ""], ["nz-form", "", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], [1, "text-center"], [1, "fa", "fa-pulse", "fa-spinner"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["class", "row my-3", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [1, "row", "my-3", 3, "ngSwitch"], [1, "col-4"], ["class", "col-8", 4, "ngSwitchCase"], [1, "col-8"], ["type", "checkbox", "name", "feature.name", 3, "formControlName"], ["type", "text", "name", "feature.name", 3, "formControlName"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function FeatureManagementComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-modal", 0);
        i0.ɵɵlistener("nzVisibleChange", function FeatureManagementComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.visible = $event; })("nzOnCancel", function FeatureManagementComponent_Template_nz_modal_nzOnCancel_0_listener() { return ctx.visible = false; });
        i0.ɵɵtemplate(1, FeatureManagementComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, FeatureManagementComponent_ng_template_3_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, FeatureManagementComponent_ng_template_5_Template, 6, 6, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        const _r2 = i0.ɵɵreference(4);
        const _r4 = i0.ɵɵreference(6);
        i0.ɵɵproperty("nzVisible", ctx.visible)("nzTitle", _r0)("nzContent", _r2)("nzFooter", _r4);
    } }, directives: [i2.NzModalComponent, i3.NgIf, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i5.FormSubmitDirective, i6.NzFormDirective, i4.FormGroupDirective, i3.NgForOf, i3.NgSwitch, i3.NgSwitchCase, i4.CheckboxControlValueAccessor, i4.NgControlStatus, i4.FormControlName, i4.DefaultValueAccessor, i7.NzButtonComponent, i8.NzWaveDirective, i9.ɵNzTransitionPatchDirective], pipes: [i5.LocalizationPipe, i3.AsyncPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FeatureManagementComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-feature-management',
                templateUrl: './feature-management.component.html'
            }]
    }], function () { return [{ type: i1.Store }]; }, { providerKey: [{
            type: Input
        }], providerName: [{
            type: Input
        }], visible: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvZmVhdHVyZS1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9mZWF0dXJlLW1hbmFnZW1lbnQvZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvZmVhdHVyZS1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9mZWF0dXJlLW1hbmFnZW1lbnQvZmVhdHVyZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLDBCQUEwQixJQUFJLDZCQUE2QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7OztJQ0tyRywwQkFBSTtJQUFBLFlBQXdFOztJQUFBLGlCQUFLOztJQUE3RSxlQUF3RTtJQUF4RSw0RkFBd0U7OztJQUsxRSw4QkFBeUI7SUFBQSx1QkFBc0M7SUFBQSxpQkFBTTs7O0lBVW5FLCtCQUNFO0lBQUEsNEJBQ0Y7SUFBQSxpQkFBTTs7O0lBRHVDLGVBQXFCO0lBQXJCLHVDQUFxQjs7O0lBRWxFLCtCQUNFO0lBQUEsNEJBQ0Y7SUFBQSxpQkFBTTs7O0lBRG1DLGVBQXFCO0lBQXJCLHVDQUFxQjs7O0lBUmhFLCtCQUdFO0lBQUEsK0JBQW1CO0lBQUEsWUFBa0I7SUFBQSxpQkFBTTtJQUMzQyx1R0FDRTtJQUVGLHVHQUNFO0lBRUosaUJBQU07OztJQVJELHFEQUFtQztJQUNuQixlQUFrQjtJQUFsQixzQ0FBa0I7SUFDbEIsZUFBdUM7SUFBdkMsc0RBQXVDO0lBR3ZDLGVBQXlDO0lBQXpDLHdEQUF5Qzs7OztJQVZoRSwrQkFHRTtJQUg0RCwrTUFBbUI7SUFHL0UsZ0dBR0U7O0lBVUosaUJBQU87OztJQWhCb0MsdUNBQWtCO0lBSXRELGVBQXdEO0lBQXhELGdFQUF3RDs7O0lBUi9ELDBJQUNFO0lBR0YsMkZBR0U7Ozs7SUFIWSxlQUE0QjtJQUE1QixrQ0FBNEIsaUJBQUE7Ozs7SUFvQjFDLGtDQUNFO0lBRGlDLG1NQUFpQixLQUFLLElBQUM7SUFDeEQsWUFDRjs7SUFBQSxpQkFBUztJQUNULGtDQUNFO0lBRGlDLG1NQUFnQjtJQUNqRCxZQUdGOztJQUFBLGlCQUFTOztJQU5QLGVBQ0Y7SUFERSxxRkFDRjtJQUVFLGVBR0Y7SUFIRSxtRkFHRjs7QURuQ0osTUFBTSxPQUFPLDBCQUEyQixTQUFRLDZCQUE2QjtJQXFCM0UsWUFBb0IsTUFBYTtRQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFESSxXQUFNLEdBQU4sTUFBTSxDQUFPO0lBRWpDLENBQUM7SUFkRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsSUFBSSxLQUFLO1lBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7O29HQW5CVSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ1B2QyxtQ0FNRTtRQU5RLDJKQUF1QixvSEFJRCxLQUFLLElBSko7UUFNL0IsNEhBQ0U7UUFHRiw0SEFDRTtRQXVCRiw0SEFDRTtRQVNKLGlCQUFXOzs7OztRQTVDRCx1Q0FBdUIsZ0JBQUEsa0JBQUEsaUJBQUE7O2tERE9wQiwwQkFBMEI7Y0FKdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxxQ0FBcUM7YUFDbkQ7O2tCQUVFLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUtMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudCBhcyBBYnBGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gJ0BhYnAvbmcuZmVhdHVyZS1tYW5hZ2VtZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1hbGFpbi1mZWF0dXJlLW1hbmFnZW1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWF0dXJlLW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTWFuYWdlbWVudENvbXBvbmVudCBleHRlbmRzIEFicEZlYXR1cmVNYW5hZ2VtZW50Q29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHByb3ZpZGVyS2V5OiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJvdmlkZXJOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBfdmlzaWJsZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuXHJcbiAgICBpZiAodmFsdWUpIHRoaXMub3Blbk1vZGFsKCk7XHJcbiAgfVxyXG4gICAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmU6IFN0b3JlKSB7XHJcbiAgICBzdXBlcihfc3RvcmUpO1xyXG4gIH1cclxufVxyXG4iLCI8bnotbW9kYWwgWyhuelZpc2libGUpXT1cInZpc2libGVcIlxyXG4gICAgICAgICAgW256VGl0bGVdPVwibW9kYWxUaXRsZVwiXHJcbiAgICAgICAgICBbbnpDb250ZW50XT1cIm1vZGFsQ29udGVudFwiXHJcbiAgICAgICAgICBbbnpGb290ZXJdPVwibW9kYWxGb290ZXJcIlxyXG4gICAgICAgICAgKG56T25DYW5jZWwpPVwidmlzaWJsZT1mYWxzZVwiXHJcbj5cclxuICA8bmctdGVtcGxhdGUgI21vZGFsVGl0bGU+XHJcbiAgICA8aDM+e3sgJ0FicFRlbmFudE1hbmFnZW1lbnQ6OlBlcm1pc3Npb246TWFuYWdlRmVhdHVyZXMnIHwgYWJwTG9jYWxpemF0aW9uIH19PC9oMz5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8bmctdGVtcGxhdGUgI21vZGFsQ29udGVudD5cclxuICAgIDxuZy10ZW1wbGF0ZSAjbG9hZGVyUmVmPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj48aSBjbGFzcz1cImZhIGZhLXB1bHNlIGZhLXNwaW5uZXJcIj48L2k+PC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDxmb3JtIG56LWZvcm0gKm5nSWY9XCJmb3JtOyBlbHNlIGxvYWRlclJlZlwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJzYXZlKClcIj5cclxuXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IG15LTNcIlxyXG4gICAgICAgICAgICpuZ0Zvcj1cImxldCBmZWF0dXJlIG9mIGZlYXR1cmVzJCB8IGFzeW5jOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICBbbmdTd2l0Y2hdPVwiZmVhdHVyZS52YWx1ZVR5cGUubmFtZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNFwiPnt7IGZlYXR1cmUubmFtZSB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiICpuZ1N3aXRjaENhc2U9XCInVG9nZ2xlU3RyaW5nVmFsdWVUeXBlJ1wiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJmZWF0dXJlLm5hbWVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImlcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiICpuZ1N3aXRjaENhc2U9XCInRnJlZVRleHRTdHJpbmdWYWx1ZVR5cGUnXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmVhdHVyZS5uYW1lXCIgW2Zvcm1Db250cm9sTmFtZV09XCJpXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDwvZm9ybT5cclxuICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICA8bmctdGVtcGxhdGUgI21vZGFsRm9vdGVyPlxyXG4gICAgPGJ1dHRvbiBuei1idXR0b24gbnpUeXBlPVwiZGVmYXVsdFwiIChjbGljayk9XCJ2aXNpYmxlPWZhbHNlXCI+XHJcbiAgICAgIHt7ICdBYnBGZWF0dXJlTWFuYWdlbWVudDo6Q2FuY2VsJyB8IGFicExvY2FsaXphdGlvbiB9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG56LWJ1dHRvbiBuelR5cGU9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInNhdmUoKVwiPlxyXG4gICAgICB7e1xyXG4gICAgICAnQWJwRmVhdHVyZU1hbmFnZW1lbnQ6OlNhdmUnIHwgYWJwTG9jYWxpemF0aW9uXHJcbiAgICAgIH19XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L256LW1vZGFsPlxyXG4iXX0=