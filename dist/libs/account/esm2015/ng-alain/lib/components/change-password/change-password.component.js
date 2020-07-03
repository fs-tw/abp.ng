import { ChangePasswordComponent as AbpChangePasswordComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngxs/store";
import * as i3 from "@abp/ng.theme.shared";
import * as i4 from "@abp/ng.core";
import * as i5 from "@ngx-validate/core";
import * as i6 from "ng-zorro-antd/grid";
import * as i7 from "ng-zorro-antd/form";
import * as i8 from "ng-zorro-antd/input";
import * as i9 from "ng-zorro-antd/button";
import * as i10 from "ng-zorro-antd/core/wave";
import * as i11 from "ng-zorro-antd/core/transition-patch";
export class ChangePasswordComponent extends AbpChangePasswordComponent {
    constructor(_fb, _store, _toasterService) {
        super(_fb, _store, _toasterService);
        this._fb = _fb;
        this._store = _store;
        this._toasterService = _toasterService;
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.Store), i0.ɵɵdirectiveInject(i3.ToasterService)); };
ChangePasswordComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ChangePasswordComponent, selectors: [["ng-alain-change-password-form"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 16, vars: 14, consts: [[3, "formGroup", "mapErrorsFn", "ngSubmit"], ["nz-input", "", "type", "password", "formControlName", "password", "id", "current-password", 3, "placeholder"], ["nz-input", "", "type", "password", "formControlName", "newPassword", "id", "new-password", 3, "placeholder"], ["nz-input", "", "type", "password", "formControlName", "repeatNewPassword", "id", "confirm-new-password", 3, "placeholder"], ["nz-button", "", "nzType", "primary"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        i0.ɵɵelementStart(1, "nz-form-item");
        i0.ɵɵelementStart(2, "nz-form-control");
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵpipe(4, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "nz-form-item");
        i0.ɵɵelementStart(6, "nz-form-control");
        i0.ɵɵelement(7, "input", 2);
        i0.ɵɵpipe(8, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "nz-form-item");
        i0.ɵɵelementStart(10, "nz-form-control");
        i0.ɵɵelement(11, "input", 3);
        i0.ɵɵpipe(12, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 4);
        i0.ɵɵtext(14);
        i0.ɵɵpipe(15, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form)("mapErrorsFn", ctx.mapErrorsFn);
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(4, 6, "AbpIdentity::DisplayName:CurrentPassword"));
        i0.ɵɵadvance(4);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(8, 8, "AbpIdentity::DisplayName:NewPassword"));
        i0.ɵɵadvance(4);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(12, 10, "AbpIdentity::DisplayName:NewPasswordConfirm"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 12, "AbpIdentity::Save"), " ");
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i4.FormSubmitDirective, i1.FormGroupDirective, i5.ValidationGroupDirective, i6.NzRowDirective, i7.NzFormItemComponent, i6.NzColDirective, i7.NzFormControlComponent, i8.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i5.ValidationDirective, i9.NzButtonComponent, i10.NzWaveDirective, i11.ɵNzTransitionPatchDirective], pipes: [i4.LocalizationPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChangePasswordComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-change-password-form',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.less']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.Store }, { type: i3.ToasterService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixJQUFJLDBCQUEwQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBYyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFPcEMsTUFBTSxPQUFPLHVCQUF3QixTQUFRLDBCQUEwQjtJQUVuRSxZQUFvQixHQUFnQixFQUFVLE1BQWEsRUFBVSxlQUErQjtRQUNoRyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztRQURwQixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUVwRyxDQUFDOzs4RkFKUSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1hwQywrQkFDRTtRQUR1Qix3R0FBWSxjQUFVLElBQUM7UUFDOUMsb0NBQ0U7UUFDQSx1Q0FDRTtRQUFBLDJCQUNGOztRQUFBLGlCQUFrQjtRQUNwQixpQkFBZTtRQUNmLG9DQUNFO1FBQ0EsdUNBQ0U7UUFBQSwyQkFDRjs7UUFBQSxpQkFBa0I7UUFDcEIsaUJBQWU7UUFDZixvQ0FDRTtRQUNBLHdDQUNFO1FBQUEsNEJBQ0Y7O1FBQUEsaUJBQWtCO1FBQ3BCLGlCQUFlO1FBQ2Ysa0NBQ0U7UUFBQSxhQUdGOztRQUFBLGlCQUFTO1FBRVgsaUJBQU87O1FBekJELG9DQUFrQixnQ0FBQTtRQUkrRCxlQUE4RTtRQUE5RSx5R0FBOEU7UUFNL0UsZUFBNEU7UUFBNUUscUdBQTRFO1FBTTlELGVBQW1GO1FBQW5GLDhHQUFtRjtRQUluTCxlQUdGO1FBSEUsNEVBR0Y7O2tERFpXLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCBhcyBBYnBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmctYWxhaW4tY2hhbmdlLXBhc3N3b3JkLWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50Lmxlc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgZXh0ZW5kcyBBYnBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9zdG9yZTogU3RvcmUsIHByaXZhdGUgX3RvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKF9mYiwgX3N0b3JlLCBfdG9hc3RlclNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiIFttYXBFcnJvcnNGbl09XCJtYXBFcnJvcnNGblwiPlxyXG4gIDxuei1mb3JtLWl0ZW0+XHJcbiAgICA8IS0tPG56LWZvcm0tbGFiZWwgbnpSZXF1aXJlZCBuekZvcj1cImN1cnJlbnQtcGFzc3dvcmRcIj57eyAnQWJwSWRlbnRpdHk6OkRpc3BsYXlOYW1lOkN1cnJlbnRQYXNzd29yZCcgfCBhYnBMb2NhbGl6YXRpb24gfX08L256LWZvcm0tbGFiZWw+LS0+XHJcbiAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICA8aW5wdXQgbnotaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIiBpZD1cImN1cnJlbnQtcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInt7J0FicElkZW50aXR5OjpEaXNwbGF5TmFtZTpDdXJyZW50UGFzc3dvcmQnIHwgYWJwTG9jYWxpemF0aW9ufX1cIiAvPlxyXG4gICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgPG56LWZvcm0taXRlbT5cclxuICAgIDwhLS08bnotZm9ybS1sYWJlbCBuelJlcXVpcmVkIG56Rm9yPVwibmV3LXBhc3N3b3JkXCI+e3sgJ0FicElkZW50aXR5OjpEaXNwbGF5TmFtZTpOZXdQYXNzd29yZCcgfCBhYnBMb2NhbGl6YXRpb24gfX08L256LWZvcm0tbGFiZWw+LS0+XHJcbiAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICA8aW5wdXQgbnotaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgZm9ybUNvbnRyb2xOYW1lPVwibmV3UGFzc3dvcmRcIiBpZD1cIm5ldy1wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwie3sgJ0FicElkZW50aXR5OjpEaXNwbGF5TmFtZTpOZXdQYXNzd29yZCcgfCBhYnBMb2NhbGl6YXRpb24gfX1cIiAvPlxyXG4gICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgPG56LWZvcm0taXRlbT5cclxuICAgIDwhLS08bnotZm9ybS1sYWJlbCBuelJlcXVpcmVkIG56Rm9yPVwiY29uZmlybS1uZXctcGFzc3dvcmRcIj57eyAnQWJwSWRlbnRpdHk6OkRpc3BsYXlOYW1lOk5ld1Bhc3N3b3JkQ29uZmlybScgfCBhYnBMb2NhbGl6YXRpb24gfX08L256LWZvcm0tbGFiZWw+LS0+XHJcbiAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICA8aW5wdXQgbnotaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgZm9ybUNvbnRyb2xOYW1lPVwicmVwZWF0TmV3UGFzc3dvcmRcIiBpZD1cImNvbmZpcm0tbmV3LXBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJ7eyAnQWJwSWRlbnRpdHk6OkRpc3BsYXlOYW1lOk5ld1Bhc3N3b3JkQ29uZmlybScgfCBhYnBMb2NhbGl6YXRpb24gfX1cIiAvPlxyXG4gICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgPGJ1dHRvbiBuei1idXR0b24gbnpUeXBlPVwicHJpbWFyeVwiPlxyXG4gICAge3tcclxuICAgICAgJ0FicElkZW50aXR5OjpTYXZlJyB8IGFicExvY2FsaXphdGlvblxyXG4gICAgfX1cclxuICA8L2J1dHRvbj5cclxuXHJcbjwvZm9ybT5cclxuXHJcblxyXG4iXX0=