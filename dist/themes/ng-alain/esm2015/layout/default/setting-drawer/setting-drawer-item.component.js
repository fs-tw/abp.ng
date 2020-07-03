import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/input";
import * as i3 from "@angular/forms";
import * as i4 from "ng-zorro-antd/input-number";
import * as i5 from "ng-zorro-antd/switch";
const _c0 = function () { return { standalone: true }; };
function SettingDrawerItemComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 4);
    i0.ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.i.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.i.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function SettingDrawerItemComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 5);
    i0.ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_6_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.i.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.i.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function SettingDrawerItemComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nz-input-number", 6);
    i0.ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_7_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.pxVal = $event; })("ngModelChange", function SettingDrawerItemComponent_ng_container_7_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.pxChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.pxVal)("nzMin", ctx_r2.i.min)("nzMax", ctx_r2.i.max)("nzStep", ctx_r2.i.step || 2)("nzFormatter", ctx_r2.format);
} }
function SettingDrawerItemComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nz-switch", 7);
    i0.ɵɵlistener("ngModelChange", function SettingDrawerItemComponent_ng_container_8_Template_nz_switch_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.i.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r3.i.value)("ngModelOptions", i0.ɵɵpureFunction0(2, _c0));
} }
function SettingDrawerItemComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
const _c1 = ["*"];
export class SettingDrawerItemComponent {
    constructor() {
        this.i = {};
        this.format = value => `${value} px`;
    }
    set data(val) {
        this.i = val;
        if (val.type === 'px') {
            this.pxVal = +val.value.replace('px', '');
        }
    }
    pxChange(val) {
        this.i.value = `${val}px`;
    }
}
SettingDrawerItemComponent.ɵfac = function SettingDrawerItemComponent_Factory(t) { return new (t || SettingDrawerItemComponent)(); };
SettingDrawerItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SettingDrawerItemComponent, selectors: [["setting-drawer-item"]], hostVars: 2, hostBindings: function SettingDrawerItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("setting-drawer__body-item", true);
    } }, inputs: { data: "data" }, ngContentSelectors: _c1, decls: 10, vars: 7, consts: [[1, "pl-sm", "text-grey"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["nz-input", "", "type", "color", 2, "min-width", "88px", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nz-input", "", 2, "min-width", "88px", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngModel", "nzMin", "nzMax", "nzStep", "nzFormatter", "ngModelChange"], ["nzSize", "small", 3, "ngModel", "ngModelOptions", "ngModelChange"]], template: function SettingDrawerItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵtext(1);
        i0.ɵɵelementStart(2, "span", 0);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵtemplate(5, SettingDrawerItemComponent_ng_container_5_Template, 2, 3, "ng-container", 2);
        i0.ɵɵtemplate(6, SettingDrawerItemComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
        i0.ɵɵtemplate(7, SettingDrawerItemComponent_ng_container_7_Template, 2, 5, "ng-container", 2);
        i0.ɵɵtemplate(8, SettingDrawerItemComponent_ng_container_8_Template, 2, 3, "ng-container", 2);
        i0.ɵɵtemplate(9, SettingDrawerItemComponent_ng_container_9_Template, 2, 0, "ng-container", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.i.label);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.i.tip);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx.i.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "color");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "input");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "px");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "switch");
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.NzInputDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.NzInputNumberComponent, i5.NzSwitchComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SettingDrawerItemComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'setting-drawer-item',
                templateUrl: './setting-drawer-item.component.html',
                // tslint:disable-next-line: no-host-metadata-property
                host: {
                    '[class.setting-drawer__body-item]': 'true',
                },
            }]
    }], null, { data: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L3NldHRpbmctZHJhd2VyL3NldHRpbmctZHJhd2VyLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWVzL25nLWFsYWluL2xheW91dC9zcmMvZGVmYXVsdC9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lDSS9DLDZCQUNFO0lBQUEsZ0NBT0Y7SUFISSxnT0FBcUI7SUFKdkIsaUJBT0Y7SUFBQSwwQkFBZTs7O0lBSFgsZUFBcUI7SUFBckIsd0NBQXFCLDhDQUFBOzs7O0lBSXpCLDZCQUNFO0lBQUEsZ0NBQ0Y7SUFEMEMsZ09BQXFCO0lBQTdELGlCQUNGO0lBQUEsMEJBQWU7OztJQUQyQixlQUFxQjtJQUFyQix3Q0FBcUIsOENBQUE7Ozs7SUFFL0QsNkJBQ0U7SUFBQSwwQ0FPbUI7SUFOakIseU9BQW1CLGdPQUFBO0lBTXBCLGlCQUFrQjtJQUNyQiwwQkFBZTs7O0lBUFgsZUFBbUI7SUFBbkIsc0NBQW1CLHVCQUFBLHVCQUFBLDhCQUFBLDhCQUFBOzs7O0lBUXZCLDZCQUNFO0lBQUEsb0NBQW9HO0lBQTFFLHVPQUFxQjtJQUF5QyxpQkFBWTtJQUN0RywwQkFBZTs7O0lBRGEsZUFBcUI7SUFBckIsd0NBQXFCLDhDQUFBOzs7SUFFakQsNkJBQ0U7SUFBQSxrQkFBWTtJQUNkLDBCQUFlOzs7QURwQmpCLE1BQU0sT0FBTywwQkFBMEI7SUFUdkM7UUFVRSxNQUFDLEdBQVEsRUFBRSxDQUFDO1FBYVosV0FBTSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQztLQUNqQztJQWJDLElBQ0ksSUFBSSxDQUFDLEdBQVE7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNiLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFHRCxRQUFRLENBQUMsR0FBVztRQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7O29HQWJVLDBCQUEwQjsrREFBMUIsMEJBQTBCOzs7O1FDWHZDLDRCQUNHO1FBQUEsWUFBYTtRQUFBLCtCQUE4QjtRQUFBLFlBQVc7UUFBQSxpQkFBTztRQUFBLGlCQUMvRDtRQUNELDhCQUNFO1FBQUEsNkZBQ0U7UUFRRiw2RkFDRTtRQUVGLDZGQUNFO1FBU0YsNkZBQ0U7UUFFRiw2RkFDRTtRQUVKLGlCQUFNOztRQS9CSCxlQUFhO1FBQWIsaUNBQWE7UUFBOEIsZUFBVztRQUFYLCtCQUFXO1FBRXBELGVBQW1CO1FBQW5CLHFDQUFtQjtRQUNSLGVBQXVCO1FBQXZCLHNDQUF1QjtRQVN2QixlQUF1QjtRQUF2QixzQ0FBdUI7UUFHdkIsZUFBb0I7UUFBcEIsbUNBQW9CO1FBVXBCLGVBQXdCO1FBQXhCLHVDQUF3Qjs7a0REZjNCLDBCQUEwQjtjQVR0QyxTQUFTO2VBQUM7Z0JBQ1QsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxzREFBc0Q7Z0JBQ3RELElBQUksRUFBRTtvQkFDSixtQ0FBbUMsRUFBRSxNQUFNO2lCQUM1QzthQUNGOztrQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnc2V0dGluZy1kcmF3ZXItaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmctZHJhd2VyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3Muc2V0dGluZy1kcmF3ZXJfX2JvZHktaXRlbV0nOiAndHJ1ZScsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdEcmF3ZXJJdGVtQ29tcG9uZW50IHtcclxuICBpOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRhKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmkgPSB2YWw7XHJcbiAgICBpZiAodmFsLnR5cGUgPT09ICdweCcpIHtcclxuICAgICAgdGhpcy5weFZhbCA9ICt2YWwudmFsdWUucmVwbGFjZSgncHgnLCAnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBweFZhbDogbnVtYmVyO1xyXG4gIHB4Q2hhbmdlKHZhbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmkudmFsdWUgPSBgJHt2YWx9cHhgO1xyXG4gIH1cclxuICBmb3JtYXQgPSB2YWx1ZSA9PiBgJHt2YWx1ZX0gcHhgO1xyXG59XHJcbiIsIjxzcGFuXHJcbiAgPnt7IGkubGFiZWwgfX08c3BhbiBjbGFzcz1cInBsLXNtIHRleHQtZ3JleVwiPnt7IGkudGlwIH19PC9zcGFuPjwvc3BhblxyXG4+XHJcbjxkaXYgW25nU3dpdGNoXT1cImkudHlwZVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjb2xvcidcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICBuei1pbnB1dFxyXG4gICAgICB0eXBlPVwiY29sb3JcIlxyXG4gICAgICBzdHlsZT1cIm1pbi13aWR0aDogODhweFwiXHJcbiAgICAgIFsobmdNb2RlbCldPVwiaS52YWx1ZVwiXHJcbiAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXHJcbiAgICAvPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidpbnB1dCdcIj5cclxuICAgIDxpbnB1dCBuei1pbnB1dCBzdHlsZT1cIm1pbi13aWR0aDogODhweFwiIFsobmdNb2RlbCldPVwiaS52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiIC8+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3B4J1wiPlxyXG4gICAgPG56LWlucHV0LW51bWJlclxyXG4gICAgICBbKG5nTW9kZWwpXT1cInB4VmFsXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwicHhDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIFtuek1pbl09XCJpLm1pblwiXHJcbiAgICAgIFtuek1heF09XCJpLm1heFwiXHJcbiAgICAgIFtuelN0ZXBdPVwiaS5zdGVwIHx8IDJcIlxyXG4gICAgICBbbnpGb3JtYXR0ZXJdPVwiZm9ybWF0XCJcclxuICAgID48L256LWlucHV0LW51bWJlcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInc3dpdGNoJ1wiPlxyXG4gICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwiaS52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPjwvbnotc3dpdGNoPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbiJdfQ==