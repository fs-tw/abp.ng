import { fadeIn } from '@abp/ng.theme.shared';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/menu";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "@angular/common";
import * as i4 from "../change-password/change-password.component";
import * as i5 from "../personal-settings/personal-settings.component";
import * as i6 from "@abp/ng.core";
function ManageProfileComponent_ng_alain_change_password_form_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ng-alain-change-password-form");
} }
function ManageProfileComponent_ng_alain_personal_settings_form_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ng-alain-personal-settings-form");
} }
export class ManageProfileComponent {
    constructor() {
        this.selectedTab = 0;
    }
}
ManageProfileComponent.ɵfac = function ManageProfileComponent_Factory(t) { return new (t || ManageProfileComponent)(); };
ManageProfileComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ManageProfileComponent, selectors: [["ng-alain-manage-profile"]], decls: 19, vars: 13, consts: [[1, "row", "entry-row"], [1, "col-auto"], ["id", "breadcrumb", 1, "col-md-auto", "pl-md-0"], [1, "col"], [1, "main"], [1, "menu"], ["nz-menu", "", "nzMode", "inline"], ["nz-menu-item", "", 3, "nzSelected", "click"], [1, "content"], [1, "title"], [4, "ngIf"]], template: function ManageProfileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelement(3, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "ul", 6);
        i0.ɵɵelementStart(7, "li", 7);
        i0.ɵɵlistener("click", function ManageProfileComponent_Template_li_click_7_listener() { return ctx.selectedTab = 0; });
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "li", 7);
        i0.ɵɵlistener("click", function ManageProfileComponent_Template_li_click_10_listener() { return ctx.selectedTab = 1; });
        i0.ɵɵtext(11);
        i0.ɵɵpipe(12, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 8);
        i0.ɵɵelementStart(14, "div", 9);
        i0.ɵɵtext(15);
        i0.ɵɵpipe(16, "abpLocalization");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, ManageProfileComponent_ng_alain_change_password_form_17_Template, 1, 0, "ng-alain-change-password-form", 10);
        i0.ɵɵtemplate(18, ManageProfileComponent_ng_alain_personal_settings_form_18_Template, 1, 0, "ng-alain-personal-settings-form", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("nzSelected", ctx.selectedTab === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 7, "AbpUi::ChangePassword"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzSelected", ctx.selectedTab === 1);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 9, "AbpAccount::PersonalSettings"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 11, "AbpAccount::ChangePassword"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.selectedTab === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selectedTab === 1);
    } }, directives: [i1.NzMenuDirective, i2.ɵNzTransitionPatchDirective, i1.NzMenuItemDirective, i3.NgIf, i4.ChangePasswordComponent, i5.PersonalSettingsComponent], pipes: [i6.LocalizationPipe], styles: ["[_nghost-%COMP%]{display:block;padding-top:24px}.main[_ngcontent-%COMP%]{background-color:#fff;display:flex;overflow:auto;padding-bottom:16px;padding-top:16px;width:100%}.menu[_ngcontent-%COMP%]{border-right:1px solid #f0f0f0;width:224px}.menu[_ngcontent-%COMP%]     .ant-menu-inline{border:none}.menu[_ngcontent-%COMP%]     .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{font-weight:700}.content[_ngcontent-%COMP%]{flex:1;padding:8px 40px}.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:rgba(0,0,0,.85);font-size:20px;font-weight:500;line-height:28px;margin-bottom:12px}.content[_ngcontent-%COMP%]     .ant-list-split .ant-list-item:last-child{border-bottom:1px solid #e8e8e8}.content[_ngcontent-%COMP%]     .ant-list-item{padding-bottom:14px;padding-top:14px}@media screen and (max-width:767px){.main[_ngcontent-%COMP%]{flex-direction:column}.main[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{border:none;width:100%}.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:40px}}"], data: { animation: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ManageProfileComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-manage-profile',
                templateUrl: './manage-profile.component.html',
                styleUrls: ['./manage-profile.component.less'],
                animations: [trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9hY2NvdW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9tYW5hZ2UtcHJvZmlsZS9tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL21hbmFnZS1wcm9maWxlL21hbmFnZS1wcm9maWxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNvQnRDLGdEQUF5Rjs7O0lBQ3pGLGtEQUE2Rjs7QURiakcsTUFBTSxPQUFPLHNCQUFzQjtJQU5uQztRQU9JLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO0tBQ25COzs0RkFGWSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQ1ZuQyw4QkFDRTtRQUFBLHlCQUE0QjtRQUM1Qix5QkFBdUQ7UUFDdkQseUJBQXVCO1FBQ3pCLGlCQUFNO1FBQ04sOEJBQ0U7UUFBQSw4QkFDRTtRQUFBLDZCQUNFO1FBQUEsNkJBQ0U7UUFEZ0QsaUhBQXVCLENBQUMsSUFBQztRQUN6RSxZQUdGOztRQUFBLGlCQUFLO1FBQ0wsOEJBQ0U7UUFEZ0Qsa0hBQXVCLENBQUMsSUFBQztRQUN6RSxhQUdGOztRQUFBLGlCQUFLO1FBQ1AsaUJBQUs7UUFDUCxpQkFBTTtRQUNOLCtCQUNFO1FBQUEsK0JBQW1CO1FBQUEsYUFBb0Q7O1FBQUEsaUJBQU07UUFDN0UsOEhBQXlEO1FBQ3pELGtJQUEyRDtRQUM3RCxpQkFBTTtRQUVSLGlCQUFNOztRQWxCaUIsZUFBZ0M7UUFBaEMsa0RBQWdDO1FBQy9DLGVBR0Y7UUFIRSw4RUFHRjtRQUNpQixlQUFnQztRQUFoQyxrREFBZ0M7UUFDL0MsZUFHRjtRQUhFLHNGQUdGO1FBSWlCLGVBQW9EO1FBQXBELDBFQUFvRDtRQUN4QyxlQUF5QjtRQUF6Qiw0Q0FBeUI7UUFDdkIsZUFBeUI7UUFBekIsNENBQXlCOzR0Q0RmOUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7a0RBRXBFLHNCQUFzQjtjQU5sQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7Z0JBQzlDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhZGVJbiB9IGZyb20gJ0BhYnAvbmcudGhlbWUuc2hhcmVkJztcclxuaW1wb3J0IHsgdHJhbnNpdGlvbiwgdHJpZ2dlciwgdXNlQW5pbWF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nLWFsYWluLW1hbmFnZS1wcm9maWxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tYW5hZ2UtcHJvZmlsZS5jb21wb25lbnQubGVzcyddLFxyXG4gICAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2ZhZGVJbicsIFt0cmFuc2l0aW9uKCc6ZW50ZXInLCB1c2VBbmltYXRpb24oZmFkZUluKSldKV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VQcm9maWxlQ29tcG9uZW50IHtcclxuICAgIHNlbGVjdGVkVGFiID0gMDtcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicm93IGVudHJ5LXJvd1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJjb2wtYXV0b1wiPjwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJicmVhZGNydW1iXCIgY2xhc3M9XCJjb2wtbWQtYXV0byBwbC1tZC0wXCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImNvbFwiPjwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1haW5cIj5cclxuICA8ZGl2IGNsYXNzPVwibWVudVwiPlxyXG4gICAgPHVsIG56LW1lbnUgbnpNb2RlPVwiaW5saW5lXCI+XHJcbiAgICAgIDxsaSBuei1tZW51LWl0ZW0gW256U2VsZWN0ZWRdPVwic2VsZWN0ZWRUYWIgPT09IDBcIiAoY2xpY2spPVwic2VsZWN0ZWRUYWIgPSAwXCI+XHJcbiAgICAgICAge3tcclxuICAgICAgICAgICAgJ0FicFVpOjpDaGFuZ2VQYXNzd29yZCcgfCBhYnBMb2NhbGl6YXRpb25cclxuICAgICAgICB9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgbnotbWVudS1pdGVtIFtuelNlbGVjdGVkXT1cInNlbGVjdGVkVGFiID09PSAxXCIgKGNsaWNrKT1cInNlbGVjdGVkVGFiID0gMVwiPlxyXG4gICAgICAgIHt7XHJcbiAgICAgICAgICAgICdBYnBBY2NvdW50OjpQZXJzb25hbFNldHRpbmdzJyB8IGFicExvY2FsaXphdGlvblxyXG4gICAgICAgIH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj57eyAnQWJwQWNjb3VudDo6Q2hhbmdlUGFzc3dvcmQnIHwgYWJwTG9jYWxpemF0aW9uIH19PC9kaXY+XHJcbiAgICA8bmctYWxhaW4tY2hhbmdlLXBhc3N3b3JkLWZvcm0gKm5nSWY9XCJzZWxlY3RlZFRhYiA9PT0gMFwiPjwvbmctYWxhaW4tY2hhbmdlLXBhc3N3b3JkLWZvcm0+XHJcbiAgICA8bmctYWxhaW4tcGVyc29uYWwtc2V0dGluZ3MtZm9ybSAqbmdJZj1cInNlbGVjdGVkVGFiID09PSAxXCI+PC9uZy1hbGFpbi1wZXJzb25hbC1zZXR0aW5ncy1mb3JtPlxyXG4gIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbiJdfQ==