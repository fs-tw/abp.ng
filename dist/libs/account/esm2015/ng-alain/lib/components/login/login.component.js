import { LoginComponent } from '@abp/ng.account';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "angular-oauth2-oidc";
import * as i3 from "@ngxs/store";
import * as i4 from "@abp/ng.theme.shared";
import * as i5 from "@abp/ng.core";
import * as i6 from "../auth-wrapper/auth-wrapper.component";
import * as i7 from "ng-zorro-antd/form";
import * as i8 from "@ngx-validate/core";
import * as i9 from "ng-zorro-antd/tabs";
import * as i10 from "ng-zorro-antd/grid";
import * as i11 from "ng-zorro-antd/input";
import * as i12 from "ng-zorro-antd/checkbox";
import * as i13 from "ng-zorro-antd/button";
import * as i14 from "ng-zorro-antd/core/wave";
import * as i15 from "ng-zorro-antd/core/transition-patch";
import * as i16 from "@angular/router";
function UserLoginComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 2);
    i0.ɵɵlistener("ngSubmit", function UserLoginComponent_ng_template_1_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onSubmit(); });
    i0.ɵɵelementStart(1, "nz-tabset", 3);
    i0.ɵɵelementStart(2, "nz-tab", 4);
    i0.ɵɵpipe(3, "abpLocalization");
    i0.ɵɵelementStart(4, "nz-form-item");
    i0.ɵɵelementStart(5, "nz-form-control", 5);
    i0.ɵɵpipe(6, "abpLocalization");
    i0.ɵɵelementStart(7, "nz-input-group", 6);
    i0.ɵɵelement(8, "input", 7);
    i0.ɵɵpipe(9, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "nz-form-item");
    i0.ɵɵelementStart(11, "nz-form-control", 5);
    i0.ɵɵpipe(12, "abpLocalization");
    i0.ɵɵelementStart(13, "nz-input-group", 8);
    i0.ɵɵelement(14, "input", 9);
    i0.ɵɵpipe(15, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "nz-form-item");
    i0.ɵɵelementStart(17, "nz-col", 10);
    i0.ɵɵelementStart(18, "label", 11);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "nz-form-item");
    i0.ɵɵelementStart(22, "button", 12);
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 13);
    i0.ɵɵelementStart(26, "a", 14);
    i0.ɵɵtext(27);
    i0.ɵɵpipe(28, "abpLocalization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzAnimated", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzTitle", i0.ɵɵpipeBind1(3, 12, "AbpAccount::Login"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzErrorTip", i0.ɵɵpipeBind1(6, 14, "Please enter mobile number!"));
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(9, 16, "AbpAccount::UserNameOrEmailAddress"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzErrorTip", i0.ɵɵpipeBind1(12, 18, "Please enter password!"));
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(15, 20, "AbpAccount::Password"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzSpan", 12);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(20, 22, "AbpAccount::RememberMe"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzLoading", ctx_r1.inProgress);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(24, 24, "AbpAccount::Login"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(28, 26, "AbpAccount::Register"));
} }
export class UserLoginComponent extends LoginComponent {
    constructor(_fb, _oauthService, _store, _toasterService, _authService) {
        super(_fb, _oauthService, _store, _toasterService, _authService);
    }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OAuthService), i0.ɵɵdirectiveInject(i3.Store), i0.ɵɵdirectiveInject(i4.ToasterService), i0.ɵɵdirectiveInject(i5.AuthService)); };
UserLoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserLoginComponent, selectors: [["ng-alain-login"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [[3, "mainContentRef"], ["mainContentRef", ""], ["nz-form", "", "role", "form", 3, "formGroup", "ngSubmit"], [1, "tabs", 3, "nzAnimated"], [3, "nzTitle"], [3, "nzErrorTip"], ["nzSize", "large", "nzPrefixIcon", "user"], ["nz-input", "", "formControlName", "username", 3, "placeholder"], ["nzSize", "large", "nzPrefixIcon", "lock"], ["nz-input", "", "type", "password", "formControlName", "password", 3, "placeholder"], [3, "nzSpan"], ["nz-checkbox", "", "formControlName", "remember"], ["nz-button", "", "type", "submit", "nzType", "primary", "nzSize", "large", "nzBlock", "", 3, "nzLoading"], [1, "other"], ["routerLink", "/account/register", 1, "register"]], template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ng-alain-auth-wrapper", 0);
        i0.ɵɵtemplate(1, UserLoginComponent_ng_template_1_Template, 29, 28, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("mainContentRef", _r0);
    } }, directives: [i6.AuthWrapperComponent, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i5.FormSubmitDirective, i7.NzFormDirective, i1.FormGroupDirective, i8.ValidationGroupDirective, i9.NzTabSetComponent, i9.NzTabComponent, i10.NzRowDirective, i7.NzFormItemComponent, i10.NzColDirective, i7.NzFormControlComponent, i11.NzInputGroupComponent, i11.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i8.ValidationDirective, i12.NzCheckboxComponent, i13.NzButtonComponent, i14.NzWaveDirective, i15.ɵNzTransitionPatchDirective, i16.RouterLinkWithHref], pipes: [i5.LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;margin:0 auto;width:368px}[_nghost-%COMP%]     .ant-tabs .ant-tabs-bar{border-bottom:0;margin-bottom:24px;text-align:center}[_nghost-%COMP%]     .ant-tabs-tab{font-size:16px;line-height:24px}[_nghost-%COMP%]     .ant-input-affix-wrapper .ant-input:not(:first-child){padding-left:34px}[_nghost-%COMP%]     .icon{color:rgba(0,0,0,.2);cursor:pointer;font-size:24px;margin-left:16px;transition:color .3s;vertical-align:middle}[_nghost-%COMP%]     .icon:hover{color:#1890ff}[_nghost-%COMP%]     .other{line-height:22px;margin-top:24px;text-align:left}[_nghost-%COMP%]     .other nz-tooltip{vertical-align:middle}[_nghost-%COMP%]     .other .register{float:right}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserLoginComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.less']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OAuthService }, { type: i3.Store }, { type: i4.ToasterService }, { type: i5.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hY2NvdW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSnZDLCtCQUNFO0lBRCtCLGdNQUF1QjtJQUN0RCxvQ0FDRTtJQUFBLGlDQUNFOztJQUFBLG9DQUNFO0lBQUEsMENBQ0U7O0lBQUEseUNBQ0U7SUFBQSwyQkFDRjs7SUFBQSxpQkFBaUI7SUFDbkIsaUJBQWtCO0lBQ3BCLGlCQUFlO0lBQ2YscUNBQ0U7SUFBQSwyQ0FDRTs7SUFBQSwwQ0FDRTtJQUFBLDRCQUNGOztJQUFBLGlCQUFpQjtJQUNuQixpQkFBa0I7SUFDcEIsaUJBQWU7SUFDakIsaUJBQVM7SUFDWCxpQkFBWTtJQUNaLHFDQUNFO0lBQUEsbUNBQ0U7SUFBQSxrQ0FBOEM7SUFBQSxhQUFnRDs7SUFBQSxpQkFBUTtJQUN4RyxpQkFBUztJQUNYLGlCQUFlO0lBQ2YscUNBQ0U7SUFBQSxtQ0FDRTtJQUFBLGFBQ0Y7O0lBQUEsaUJBQVM7SUFDWCxpQkFBZTtJQUNqQixpQkFBTztJQUNQLGdDQUNFO0lBQUEsOEJBQW1EO0lBQUEsYUFBOEM7O0lBQUEsaUJBQUk7SUFDdkcsaUJBQU07OztJQWhDUSx1Q0FBa0I7SUFDbkIsZUFBb0I7SUFBcEIsa0NBQW9CO0lBQ3JCLGVBQWlEO0lBQWpELG9FQUFpRDtJQUVwQyxlQUE4RDtJQUE5RCxpRkFBOEQ7SUFFaEMsZUFBd0U7SUFBeEUsb0dBQXdFO0lBS3RHLGVBQXlEO0lBQXpELDZFQUF5RDtJQUVYLGVBQTREO0lBQTVELHVGQUE0RDtJQU92SCxlQUFhO0lBQWIsMkJBQWE7SUFDMkIsZUFBZ0Q7SUFBaEQsc0VBQWdEO0lBSWhDLGVBQXdCO0lBQXhCLDZDQUF3QjtJQUN0RixlQUNGO0lBREUsNEVBQ0Y7SUFJaUQsZUFBOEM7SUFBOUMsb0VBQThDOztBRHBCdkcsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGNBQWM7SUFFbEQsWUFDSSxHQUFnQixFQUNoQixhQUEyQixFQUMzQixNQUFhLEVBQ2IsZUFBK0IsRUFDL0IsWUFBeUI7UUFFekIsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNyRSxDQUFDOztvRkFWUSxrQkFBa0I7dURBQWxCLGtCQUFrQjtRQ2IvQixnREFDRTtRQUFBLHNIQUNFO1FBa0NKLGlCQUF3Qjs7O1FBcENELG9DQUFpQzs7a0REYTNDLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCwgT3B0aW9ucyB9IGZyb20gJ0BhYnAvbmcuYWNjb3VudCc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nLWFsYWluLWxvZ2luJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyTG9naW5Db21wb25lbnQgZXh0ZW5kcyBMb2dpbkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgX2ZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBfb2F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgX3N0b3JlOiBTdG9yZSxcclxuICAgICAgICBfdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKF9mYiwgX29hdXRoU2VydmljZSwgX3N0b3JlLCBfdG9hc3RlclNlcnZpY2UsIF9hdXRoU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIjxuZy1hbGFpbi1hdXRoLXdyYXBwZXIgW21haW5Db250ZW50UmVmXT1cIm1haW5Db250ZW50UmVmXCI+XHJcbiAgPG5nLXRlbXBsYXRlICNtYWluQ29udGVudFJlZj5cclxuICAgIDxmb3JtIG56LWZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiByb2xlPVwiZm9ybVwiPlxyXG4gICAgICA8bnotdGFic2V0IFtuekFuaW1hdGVkXT1cImZhbHNlXCIgY2xhc3M9XCJ0YWJzXCI+XHJcbiAgICAgICAgPG56LXRhYiBbbnpUaXRsZV09XCInQWJwQWNjb3VudDo6TG9naW4nIHwgYWJwTG9jYWxpemF0aW9uXCI+XHJcbiAgICAgICAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICAgICAgICA8bnotZm9ybS1jb250cm9sIFtuekVycm9yVGlwXT1cIidQbGVhc2UgZW50ZXIgbW9iaWxlIG51bWJlciEnIHwgYWJwTG9jYWxpemF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPG56LWlucHV0LWdyb3VwIG56U2l6ZT1cImxhcmdlXCIgbnpQcmVmaXhJY29uPVwidXNlclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG56LWlucHV0IGZvcm1Db250cm9sTmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJ7eydBYnBBY2NvdW50OjpVc2VyTmFtZU9yRW1haWxBZGRyZXNzJyB8IGFicExvY2FsaXphdGlvbn19XCIgLz5cclxuICAgICAgICAgICAgICA8L256LWlucHV0LWdyb3VwPlxyXG4gICAgICAgICAgICA8L256LWZvcm0tY29udHJvbD5cclxuICAgICAgICAgIDwvbnotZm9ybS1pdGVtPlxyXG4gICAgICAgICAgPG56LWZvcm0taXRlbT5cclxuICAgICAgICAgICAgPG56LWZvcm0tY29udHJvbCBbbnpFcnJvclRpcF09XCInUGxlYXNlIGVudGVyIHBhc3N3b3JkIScgfCBhYnBMb2NhbGl6YXRpb25cIj5cclxuICAgICAgICAgICAgICA8bnotaW5wdXQtZ3JvdXAgbnpTaXplPVwibGFyZ2VcIiBuelByZWZpeEljb249XCJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbnotaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInt7ICdBYnBBY2NvdW50OjpQYXNzd29yZCcgfCBhYnBMb2NhbGl6YXRpb24gfX1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvbnotaW5wdXQtZ3JvdXA+XHJcbiAgICAgICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgICAgICAgPC9uei10YWI+XHJcbiAgICAgIDwvbnotdGFic2V0PlxyXG4gICAgICA8bnotZm9ybS1pdGVtPlxyXG4gICAgICAgIDxuei1jb2wgW256U3Bhbl09XCIxMlwiPlxyXG4gICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cInJlbWVtYmVyXCI+e3sgJ0FicEFjY291bnQ6OlJlbWVtYmVyTWUnIHwgYWJwTG9jYWxpemF0aW9uIH19PC9sYWJlbD5cclxuICAgICAgICA8L256LWNvbD5cclxuICAgICAgPC9uei1mb3JtLWl0ZW0+XHJcbiAgICAgIDxuei1mb3JtLWl0ZW0+XHJcbiAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gdHlwZT1cInN1Ym1pdFwiIG56VHlwZT1cInByaW1hcnlcIiBuelNpemU9XCJsYXJnZVwiIFtuekxvYWRpbmddPVwiaW5Qcm9ncmVzc1wiIG56QmxvY2s+XHJcbiAgICAgICAgICB7eyAnQWJwQWNjb3VudDo6TG9naW4nIHwgYWJwTG9jYWxpemF0aW9uIH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbnotZm9ybS1pdGVtPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPGRpdiBjbGFzcz1cIm90aGVyXCI+XHJcbiAgICAgIDxhIGNsYXNzPVwicmVnaXN0ZXJcIiByb3V0ZXJMaW5rPVwiL2FjY291bnQvcmVnaXN0ZXJcIj57eyAnQWJwQWNjb3VudDo6UmVnaXN0ZXInIHwgYWJwTG9jYWxpemF0aW9uIH19PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9uZy1hbGFpbi1hdXRoLXdyYXBwZXI+XHJcblxyXG4iXX0=