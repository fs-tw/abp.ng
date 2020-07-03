import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { AccountService } from '@abp/ng.account';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngxs/store';
import { AuthService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@abp/ng.account";
import * as i3 from "angular-oauth2-oidc";
import * as i4 from "@ngxs/store";
import * as i5 from "@abp/ng.theme.shared";
import * as i6 from "@abp/ng.core";
import * as i7 from "../auth-wrapper/auth-wrapper.component";
import * as i8 from "ng-zorro-antd/form";
import * as i9 from "@ngx-validate/core";
import * as i10 from "ng-zorro-antd/grid";
import * as i11 from "ng-zorro-antd/input";
import * as i12 from "ng-zorro-antd/button";
import * as i13 from "ng-zorro-antd/core/wave";
import * as i14 from "ng-zorro-antd/core/transition-patch";
import * as i15 from "@angular/router";
function UserRegisterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "form", 2);
    i0.ɵɵlistener("ngSubmit", function UserRegisterComponent_ng_template_1_Template_form_ngSubmit_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onSubmit(); });
    i0.ɵɵelementStart(4, "nz-form-item");
    i0.ɵɵelementStart(5, "nz-form-control");
    i0.ɵɵelementStart(6, "nz-input-group", 3);
    i0.ɵɵelement(7, "input", 4);
    i0.ɵɵpipe(8, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "nz-form-item");
    i0.ɵɵelementStart(10, "nz-form-control");
    i0.ɵɵelementStart(11, "nz-input-group", 3);
    i0.ɵɵelement(12, "input", 5);
    i0.ɵɵpipe(13, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "nz-form-item");
    i0.ɵɵelementStart(15, "nz-form-control");
    i0.ɵɵelementStart(16, "nz-input-group", 3);
    i0.ɵɵelement(17, "input", 6);
    i0.ɵɵpipe(18, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "nz-form-item");
    i0.ɵɵelementStart(20, "button", 7);
    i0.ɵɵtext(21);
    i0.ɵɵpipe(22, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "a", 8);
    i0.ɵɵtext(24);
    i0.ɵɵpipe(25, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 8, "AbpAccount::Register"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(4);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(8, 10, "AbpAccount::UserName"));
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(13, 12, "AbpAccount::EmailAddress"));
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(18, 14, "AbpAccount::Password"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzLoading", ctx_r1.inProgress);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(22, 16, "AbpAccount::Register"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(25, 18, "AbpAccount::Login"));
} }
export class UserRegisterComponent extends RegisterComponent {
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
UserRegisterComponent.ɵfac = function UserRegisterComponent_Factory(t) { return new (t || UserRegisterComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.AccountService), i0.ɵɵdirectiveInject(i3.OAuthService), i0.ɵɵdirectiveInject(i4.Store), i0.ɵɵdirectiveInject(i5.ToasterService), i0.ɵɵdirectiveInject(i6.AuthService)); };
UserRegisterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserRegisterComponent, selectors: [["fs-register"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[3, "mainContentRef"], ["mainContentRef", ""], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzSize", "large"], ["nz-input", "", "formControlName", "username", 3, "placeholder"], ["nz-input", "", "formControlName", "email", 3, "placeholder"], ["nz-input", "", "type", "password", "formControlName", "password", 3, "placeholder"], ["nz-button", "", "nzType", "primary", "nzSize", "large", "type", "submit", 1, "submit", 3, "nzLoading"], ["routerLink", "/account/login", 1, "login"]], template: function UserRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ng-alain-auth-wrapper", 0);
        i0.ɵɵtemplate(1, UserRegisterComponent_ng_template_1_Template, 26, 20, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("mainContentRef", _r0);
    } }, directives: [i7.AuthWrapperComponent, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i6.FormSubmitDirective, i8.NzFormDirective, i1.FormGroupDirective, i9.ValidationGroupDirective, i10.NzRowDirective, i8.NzFormItemComponent, i10.NzColDirective, i8.NzFormControlComponent, i11.NzInputGroupComponent, i11.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i9.ValidationDirective, i12.NzButtonComponent, i13.NzWaveDirective, i14.ɵNzTransitionPatchDirective, i15.RouterLinkWithHref], pipes: [i6.LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;margin:0 auto;width:368px}[_nghost-%COMP%]     h3{font-size:16px;margin-bottom:20px}[_nghost-%COMP%]     .submit{width:50%}[_nghost-%COMP%]     .login{float:right;line-height:40px}  .register-password-cdk .error,   .register-password-cdk .success,   .register-password-cdk .warning{transition:color .3s}  .register-password-cdk .success{color:#52c41a}  .register-password-cdk .warning{color:#faad14}  .register-password-cdk .error{color:#ff4d4f}  .register-password-cdk .progress-pass>.progress .ant-progress-bg{background-color:#faad14}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserRegisterComponent, [{
        type: Component,
        args: [{
                selector: 'fs-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.less'],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.AccountService }, { type: i3.OAuthService }, { type: i4.Store }, { type: i5.ToasterService }, { type: i6.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hY2NvdW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFhLFdBQVcsRUFBMkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNSdkMsMEJBQUk7SUFBQSxZQUE4Qzs7SUFBQSxpQkFBSztJQUN2RCwrQkFDRTtJQUQrQixtTUFBdUI7SUFDdEQsb0NBQ0U7SUFBQSx1Q0FDRTtJQUFBLHlDQUNFO0lBQUEsMkJBQ0Y7O0lBQUEsaUJBQWlCO0lBQ25CLGlCQUFrQjtJQUNwQixpQkFBZTtJQUNmLG9DQUNFO0lBQUEsd0NBQ0U7SUFBQSwwQ0FDRTtJQUFBLDRCQUNGOztJQUFBLGlCQUFpQjtJQUNuQixpQkFBa0I7SUFDcEIsaUJBQWU7SUFDZixxQ0FDRTtJQUFBLHdDQUNFO0lBQUEsMENBQ0U7SUFBQSw0QkFDRjs7SUFBQSxpQkFBaUI7SUFDbkIsaUJBQWtCO0lBQ3BCLGlCQUFlO0lBQ2YscUNBQ0U7SUFBQSxrQ0FDRTtJQUFBLGFBQ0Y7O0lBQUEsaUJBQVM7SUFDVCw2QkFBNkM7SUFBQSxhQUEyQzs7SUFBQSxpQkFBSTtJQUM5RixpQkFBZTtJQUNqQixpQkFBTzs7O0lBN0JILGVBQThDO0lBQTlDLGtFQUE4QztJQUNwQyxlQUFrQjtJQUFsQix1Q0FBa0I7SUFJbUIsZUFBNEQ7SUFBNUQsc0ZBQTREO0lBTy9ELGVBQWdFO0lBQWhFLDJGQUFnRTtJQU83QyxlQUE0RDtJQUE1RCx1RkFBNEQ7SUFLM0QsZUFBd0I7SUFBeEIsNkNBQXdCO0lBQ3RGLGVBQ0Y7SUFERSwrRUFDRjtJQUM2QyxlQUEyQztJQUEzQyxpRUFBMkM7O0FEWmhHLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBaUI7SUFDeEQsWUFDWSxHQUFnQixFQUNoQixlQUErQixFQUMvQixhQUEyQixFQUMzQixNQUFhLEVBQ2IsZUFBK0IsRUFDL0IsWUFBeUI7UUFFakMsS0FBSyxDQUFDLEdBQUcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBQyxlQUFlLEVBQUMsWUFBWSxDQUFDLENBQUM7UUFQeEUsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUd2QyxDQUFDOzswRkFWVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ2pCbEMsZ0RBQ0U7UUFBQSx5SEFDRTtRQStCSixpQkFBd0I7OztRQWpDRCxvQ0FBaUM7O2tERGlCM0MscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBfSHR0cENsaWVudCB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnQGFicC9uZy5hY2NvdW50JztcclxuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5hY2NvdW50JztcclxuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZzLXJlZ2lzdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyUmVnaXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBSZWdpc3RlckNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX29hdXRoU2VydmljZTogT0F1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3N0b3JlOiBTdG9yZSxcclxuICAgICAgICBwcml2YXRlIF90b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoX2ZiLCBfYWNjb3VudFNlcnZpY2UsIF9vYXV0aFNlcnZpY2UsIF9zdG9yZSxfdG9hc3RlclNlcnZpY2UsX2F1dGhTZXJ2aWNlKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWFsYWluLWF1dGgtd3JhcHBlciBbbWFpbkNvbnRlbnRSZWZdPVwibWFpbkNvbnRlbnRSZWZcIj5cclxuICA8bmctdGVtcGxhdGUgI21haW5Db250ZW50UmVmPlxyXG4gICAgPGgzPnt7ICdBYnBBY2NvdW50OjpSZWdpc3RlcicgfCBhYnBMb2NhbGl6YXRpb24gfX08L2gzPlxyXG4gICAgPGZvcm0gbnotZm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICAgIDxuei1mb3JtLWNvbnRyb2w+XHJcbiAgICAgICAgICA8bnotaW5wdXQtZ3JvdXAgbnpTaXplPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgPGlucHV0IG56LWlucHV0IGZvcm1Db250cm9sTmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJ7eyAnQWJwQWNjb3VudDo6VXNlck5hbWUnIHwgYWJwTG9jYWxpemF0aW9uIH19XCIgLz5cclxuICAgICAgICAgIDwvbnotaW5wdXQtZ3JvdXA+XHJcbiAgICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgICAgIDwvbnotZm9ybS1pdGVtPlxyXG4gICAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICAgIDxuei1mb3JtLWNvbnRyb2w+XHJcbiAgICAgICAgICA8bnotaW5wdXQtZ3JvdXAgbnpTaXplPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgPGlucHV0IG56LWlucHV0IGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJ7eyAnQWJwQWNjb3VudDo6RW1haWxBZGRyZXNzJyB8IGFicExvY2FsaXphdGlvbiB9fVwiIC8+XHJcbiAgICAgICAgICA8L256LWlucHV0LWdyb3VwPlxyXG4gICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxyXG4gICAgICA8L256LWZvcm0taXRlbT5cclxuICAgICAgPG56LWZvcm0taXRlbT5cclxuICAgICAgICA8bnotZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgPG56LWlucHV0LWdyb3VwIG56U2l6ZT1cImxhcmdlXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBuei1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwie3sgJ0FicEFjY291bnQ6OlBhc3N3b3JkJyB8IGFicExvY2FsaXphdGlvbiB9fVwiIC8+XHJcbiAgICAgICAgICA8L256LWlucHV0LWdyb3VwPlxyXG4gICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxyXG4gICAgICA8L256LWZvcm0taXRlbT5cclxuICAgICAgPG56LWZvcm0taXRlbT5cclxuICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiBuelR5cGU9XCJwcmltYXJ5XCIgbnpTaXplPVwibGFyZ2VcIiB0eXBlPVwic3VibWl0XCIgW256TG9hZGluZ109XCJpblByb2dyZXNzXCIgY2xhc3M9XCJzdWJtaXRcIj5cclxuICAgICAgICAgIHt7ICdBYnBBY2NvdW50OjpSZWdpc3RlcicgfCBhYnBMb2NhbGl6YXRpb24gfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YSBjbGFzcz1cImxvZ2luXCIgcm91dGVyTGluaz1cIi9hY2NvdW50L2xvZ2luXCI+e3sgJ0FicEFjY291bnQ6OkxvZ2luJyB8IGFicExvY2FsaXphdGlvbiB9fTwvYT5cclxuICAgICAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9uZy1hbGFpbi1hdXRoLXdyYXBwZXI+XHJcblxyXG4iXX0=