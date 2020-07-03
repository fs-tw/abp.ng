import { Component, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../tenant-box/tenant-box.component";
import * as i2 from "@angular/common";
function AuthWrapperComponent_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "cancelContentRef"]);
} }
const _c0 = ["*"];
export class AuthWrapperComponent {
}
AuthWrapperComponent.ɵfac = function AuthWrapperComponent_Factory(t) { return new (t || AuthWrapperComponent)(); };
AuthWrapperComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AuthWrapperComponent, selectors: [["ng-alain-auth-wrapper"]], inputs: { mainContentRef: "mainContentRef", cancelContentRef: "cancelContentRef" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[3, "mainContentRef"], [4, "ngTemplateOutlet"]], template: function AuthWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelement(0, "ng-alain-tenant-box", 0);
        i0.ɵɵtemplate(1, AuthWrapperComponent_1_Template, 1, 0, undefined, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("mainContentRef", ctx.mainContentRef);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.cancelContentRef);
    } }, directives: [i1.TenantBoxComponent, i2.NgTemplateOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'ng-alain-auth-wrapper',
                templateUrl: './auth-wrapper.component.html',
            }]
    }], null, { mainContentRef: [{
            type: Input
        }], cancelContentRef: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYWNjb3VudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvYXV0aC13cmFwcGVyL2F1dGgtd3JhcHBlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2FjY291bnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL2F1dGgtd3JhcHBlci9hdXRoLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFrQixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNJOUUsZ0VBQWlEOzs7QURJakQsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt5REFBcEIsb0JBQW9COztRQ1JqQyx5Q0FFc0I7UUFFdEIscUVBQWlEOztRQUo1QixtREFBaUM7UUFJMUMsZUFBb0M7UUFBcEMsdURBQW9DOztrRERJbkMsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsK0JBQStCO2FBQzdDOztrQkFHRSxLQUFLOztrQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIE9uSW5pdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICdAYWJwL25nLmFjY291bnQnO1xyXG5pbXBvcnQgeyBSZXBsYWNlYWJsZUNvbXBvbmVudHMgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZy1hbGFpbi1hdXRoLXdyYXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRoLXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFdyYXBwZXJDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIEFjY291bnQuQXV0aFdyYXBwZXJDb21wb25lbnRJbnB1dHMsIEFjY291bnQuQXV0aFdyYXBwZXJDb21wb25lbnRPdXRwdXRzIHtcclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IG1haW5Db250ZW50UmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHJlYWRvbmx5IGNhbmNlbENvbnRlbnRSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbn1cclxuIiwiPG5nLWFsYWluLXRlbmFudC1ib3ggW21haW5Db250ZW50UmVmXT1cIm1haW5Db250ZW50UmVmXCI+XHJcblxyXG48L25nLWFsYWluLXRlbmFudC1ib3g+XHJcblxyXG48bmctY29udGVudCAqbmdUZW1wbGF0ZU91dGxldD1cImNhbmNlbENvbnRlbnRSZWZcIj48L25nLWNvbnRlbnQ+Il19