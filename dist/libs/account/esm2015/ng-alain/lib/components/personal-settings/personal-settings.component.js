import { PersonalSettingsComponent as AbpPersonalSettingsComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngxs/store";
import * as i3 from "@abp/ng.theme.shared";
import * as i4 from "@angular/common";
import * as i5 from "@abp/ng.core";
import * as i6 from "@ngx-validate/core";
import * as i7 from "ng-zorro-antd/grid";
import * as i8 from "ng-zorro-antd/form";
import * as i9 from "ng-zorro-antd/input";
import * as i10 from "ng-zorro-antd/button";
import * as i11 from "ng-zorro-antd/core/wave";
import * as i12 from "ng-zorro-antd/core/transition-patch";
function PersonalSettingsComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 1);
    i0.ɵɵlistener("ngSubmit", function PersonalSettingsComponent_form_0_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.submit(); });
    i0.ɵɵelementStart(1, "nz-form-item");
    i0.ɵɵelementStart(2, "nz-form-label", 2);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nz-form-control");
    i0.ɵɵelement(6, "input", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "nz-form-item");
    i0.ɵɵelementStart(8, "nz-form-label", 4);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "nz-form-control");
    i0.ɵɵelement(12, "input", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "nz-form-item");
    i0.ɵɵelementStart(14, "nz-form-label", 6);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "nz-form-control");
    i0.ɵɵelement(18, "input", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "nz-form-item");
    i0.ɵɵelementStart(20, "nz-form-label", 8);
    i0.ɵɵtext(21);
    i0.ɵɵpipe(22, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "nz-form-control");
    i0.ɵɵelement(24, "input", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "nz-form-item");
    i0.ɵɵelementStart(26, "nz-form-label", 10);
    i0.ɵɵtext(27);
    i0.ɵɵpipe(28, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "nz-form-control");
    i0.ɵɵelement(30, "input", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "button", 12);
    i0.ɵɵtext(32);
    i0.ɵɵpipe(33, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.form);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 7, "AbpIdentity::DisplayName:UserName"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 9, "AbpIdentity::DisplayName:Name"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 11, "AbpIdentity::DisplayName:Surname"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(22, 13, "AbpIdentity::DisplayName:Email"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(28, 15, "AbpIdentity::DisplayName:PhoneNumber"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(33, 17, "AbpIdentity::Save"), " ");
} }
export class PersonalSettingsComponent extends AbpPersonalSettingsComponent {
    constructor(_fb, _store, _toasterService) {
        super(_fb, _store, _toasterService);
        this._fb = _fb;
        this._store = _store;
        this._toasterService = _toasterService;
    }
}
PersonalSettingsComponent.ɵfac = function PersonalSettingsComponent_Factory(t) { return new (t || PersonalSettingsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.Store), i0.ɵɵdirectiveInject(i3.ToasterService)); };
PersonalSettingsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PersonalSettingsComponent, selectors: [["ng-alain-personal-settings-form"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "username"], ["nz-input", "", "formControlName", "userName", "id", "username"], ["nzRequired", "", "nzFor", "name"], ["nz-input", "", "formControlName", "name", "id", "name"], ["nzRequired", "", "nzFor", "surname"], ["nz-input", "", "formControlName", "surname", "id", "surname"], ["nzRequired", "", "nzFor", "email-address"], ["nz-input", "", "formControlName", "email", "id", "email-address"], ["nzRequired", "", "nzFor", "phone-number"], ["nz-input", "", "formControlName", "phoneNumber", "id", "phone-number"], ["nz-button", "", "nzType", "primary"]], template: function PersonalSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PersonalSettingsComponent_form_0_Template, 34, 19, "form", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.form);
    } }, directives: [i4.NgIf, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i5.FormSubmitDirective, i1.FormGroupDirective, i6.ValidationGroupDirective, i7.NzRowDirective, i8.NzFormItemComponent, i7.NzColDirective, i8.NzFormLabelComponent, i8.NzFormControlComponent, i9.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i6.ValidationDirective, i10.NzButtonComponent, i11.NzWaveDirective, i12.ɵNzTransitionPatchDirective], pipes: [i5.LocalizationPipe], styles: ["nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PersonalSettingsComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-personal-settings-form',
                templateUrl: './personal-settings.component.html',
                styleUrls: ['./personal-settings.component.less']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.Store }, { type: i3.ToasterService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwtc2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hY2NvdW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9wZXJzb25hbC1zZXR0aW5ncy9wZXJzb25hbC1zZXR0aW5ncy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL3BlcnNvbmFsLXNldHRpbmdzL3BlcnNvbmFsLXNldHRpbmdzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx5QkFBeUIsSUFBSSw0QkFBNEIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDSnBDLCtCQUNFO0lBRCtDLDhMQUFxQjtJQUNwRSxvQ0FDRTtJQUFBLHdDQUEyQztJQUFBLFlBQTJEOztJQUFBLGlCQUFnQjtJQUN0SCx1Q0FDRTtJQUFBLDJCQUNGO0lBQUEsaUJBQWtCO0lBQ3BCLGlCQUFlO0lBQ2Ysb0NBQ0U7SUFBQSx3Q0FBdUM7SUFBQSxZQUF1RDs7SUFBQSxpQkFBZ0I7SUFDOUcsd0NBQ0U7SUFBQSw0QkFDRjtJQUFBLGlCQUFrQjtJQUNwQixpQkFBZTtJQUNmLHFDQUNFO0lBQUEseUNBQTBDO0lBQUEsYUFBMEQ7O0lBQUEsaUJBQWdCO0lBQ3BILHdDQUNFO0lBQUEsNEJBQ0Y7SUFBQSxpQkFBa0I7SUFDcEIsaUJBQWU7SUFDZixxQ0FDRTtJQUFBLHlDQUFnRDtJQUFBLGFBQXdEOztJQUFBLGlCQUFnQjtJQUN4SCx3Q0FDRTtJQUFBLDRCQUNGO0lBQUEsaUJBQWtCO0lBQ3BCLGlCQUFlO0lBQ2YscUNBQ0U7SUFBQSwwQ0FBK0M7SUFBQSxhQUE4RDs7SUFBQSxpQkFBZ0I7SUFDN0gsd0NBQ0U7SUFBQSw2QkFDRjtJQUFBLGlCQUFrQjtJQUNwQixpQkFBZTtJQUNmLG1DQUNFO0lBQUEsYUFHRjs7SUFBQSxpQkFBUztJQUNYLGlCQUFPOzs7SUFwQ3VCLHVDQUFrQjtJQUVELGVBQTJEO0lBQTNELCtFQUEyRDtJQU0vRCxlQUF1RDtJQUF2RCw0RUFBdUQ7SUFNcEQsZUFBMEQ7SUFBMUQsZ0ZBQTBEO0lBTXBELGVBQXdEO0lBQXhELDhFQUF3RDtJQU16RCxlQUE4RDtJQUE5RCxvRkFBOEQ7SUFNN0csZUFHRjtJQUhFLDRFQUdGOztBRHpCRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsNEJBQTRCO0lBRXZFLFlBQW9CLEdBQWdCLEVBQVUsTUFBYSxFQUFVLGVBQStCO1FBQ2hHLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRHBCLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBRXBHLENBQUM7O2tHQUpRLHlCQUF5Qjs4REFBekIseUJBQXlCO1FDVnRDLDhFQUNFOztRQURlLCtCQUFZOztrRERVaEIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBlcnNvbmFsU2V0dGluZ3NDb21wb25lbnQgYXMgQWJwUGVyc29uYWxTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZy1hbGFpbi1wZXJzb25hbC1zZXR0aW5ncy1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wZXJzb25hbC1zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wZXJzb25hbC1zZXR0aW5ncy5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJzb25hbFNldHRpbmdzQ29tcG9uZW50IGV4dGVuZHMgQWJwUGVyc29uYWxTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9zdG9yZTogU3RvcmUsIHByaXZhdGUgX3RvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF9mYiwgX3N0b3JlLCBfdG9hc3RlclNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCI8Zm9ybSBub3ZhbGlkYXRlICpuZ0lmPVwiZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJzdWJtaXQoKVwiPlxyXG4gIDxuei1mb3JtLWl0ZW0+XHJcbiAgICA8bnotZm9ybS1sYWJlbCBuelJlcXVpcmVkIG56Rm9yPVwidXNlcm5hbWVcIj57eyAnQWJwSWRlbnRpdHk6OkRpc3BsYXlOYW1lOlVzZXJOYW1lJyB8IGFicExvY2FsaXphdGlvbiB9fTwvbnotZm9ybS1sYWJlbD5cclxuICAgIDxuei1mb3JtLWNvbnRyb2w+XHJcbiAgICAgIDxpbnB1dCBuei1pbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ1c2VyTmFtZVwiIGlkPVwidXNlcm5hbWVcIiAvPlxyXG4gICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgPG56LWZvcm0taXRlbT5cclxuICAgIDxuei1mb3JtLWxhYmVsIG56UmVxdWlyZWQgbnpGb3I9XCJuYW1lXCI+e3sgJ0FicElkZW50aXR5OjpEaXNwbGF5TmFtZTpOYW1lJyB8IGFicExvY2FsaXphdGlvbiB9fTwvbnotZm9ybS1sYWJlbD5cclxuICAgIDxuei1mb3JtLWNvbnRyb2w+XHJcbiAgICAgIDxpbnB1dCBuei1pbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgLz5cclxuICAgIDwvbnotZm9ybS1jb250cm9sPlxyXG4gIDwvbnotZm9ybS1pdGVtPlxyXG4gIDxuei1mb3JtLWl0ZW0+XHJcbiAgICA8bnotZm9ybS1sYWJlbCBuelJlcXVpcmVkIG56Rm9yPVwic3VybmFtZVwiPnt7ICdBYnBJZGVudGl0eTo6RGlzcGxheU5hbWU6U3VybmFtZScgfCBhYnBMb2NhbGl6YXRpb24gfX08L256LWZvcm0tbGFiZWw+XHJcbiAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICA8aW5wdXQgbnotaW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwic3VybmFtZVwiIGlkPVwic3VybmFtZVwiIC8+XHJcbiAgICA8L256LWZvcm0tY29udHJvbD5cclxuICA8L256LWZvcm0taXRlbT5cclxuICA8bnotZm9ybS1pdGVtPlxyXG4gICAgPG56LWZvcm0tbGFiZWwgbnpSZXF1aXJlZCBuekZvcj1cImVtYWlsLWFkZHJlc3NcIj57eyAnQWJwSWRlbnRpdHk6OkRpc3BsYXlOYW1lOkVtYWlsJyB8IGFicExvY2FsaXphdGlvbiB9fTwvbnotZm9ybS1sYWJlbD5cclxuICAgIDxuei1mb3JtLWNvbnRyb2w+XHJcbiAgICAgIDxpbnB1dCBuei1pbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWwtYWRkcmVzc1wiIC8+XHJcbiAgICA8L256LWZvcm0tY29udHJvbD5cclxuICA8L256LWZvcm0taXRlbT5cclxuICA8bnotZm9ybS1pdGVtPlxyXG4gICAgPG56LWZvcm0tbGFiZWwgbnpSZXF1aXJlZCBuekZvcj1cInBob25lLW51bWJlclwiPnt7ICdBYnBJZGVudGl0eTo6RGlzcGxheU5hbWU6UGhvbmVOdW1iZXInIHwgYWJwTG9jYWxpemF0aW9uIH19PC9uei1mb3JtLWxhYmVsPlxyXG4gICAgPG56LWZvcm0tY29udHJvbD5cclxuICAgICAgPGlucHV0IG56LWlucHV0IGZvcm1Db250cm9sTmFtZT1cInBob25lTnVtYmVyXCIgaWQ9XCJwaG9uZS1udW1iZXJcIiAvPlxyXG4gICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgPGJ1dHRvbiBuei1idXR0b24gbnpUeXBlPVwicHJpbWFyeVwiPlxyXG4gICAge3tcclxuICAgICAgJ0FicElkZW50aXR5OjpTYXZlJyB8IGFicExvY2FsaXphdGlvblxyXG4gICAgfX1cclxuICA8L2J1dHRvbj5cclxuPC9mb3JtPlxyXG5cclxuXHJcbiJdfQ==