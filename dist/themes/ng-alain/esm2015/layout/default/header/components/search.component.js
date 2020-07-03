import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/input";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class HeaderSearchComponent {
    constructor(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    set toggleChange(value) {
        if (typeof value === 'undefined') {
            return;
        }
        this.searchToggled = true;
        this.focus = true;
        setTimeout(() => this.qIpt.focus(), 300);
    }
    ngAfterViewInit() {
        this.qIpt = this.el.nativeElement.querySelector('.ant-input');
    }
    qFocus() {
        this.focus = true;
    }
    qBlur() {
        this.focus = false;
        this.searchToggled = false;
    }
}
HeaderSearchComponent.ɵfac = function HeaderSearchComponent_Factory(t) { return new (t || HeaderSearchComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
HeaderSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderSearchComponent, selectors: [["header-search"]], hostVars: 4, hostBindings: function HeaderSearchComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("alain-default__search-focus", ctx.focus)("alain-default__search-toggled", ctx.searchToggled);
    } }, inputs: { toggleChange: "toggleChange" }, decls: 3, vars: 5, consts: [[3, "nzAddOnBeforeIcon"], ["nz-input", "", 3, "ngModel", "placeholder", "ngModelChange", "focus", "blur"]], template: function HeaderSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-input-group", 0);
        i0.ɵɵelementStart(1, "input", 1);
        i0.ɵɵlistener("ngModelChange", function HeaderSearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.q = $event; })("focus", function HeaderSearchComponent_Template_input_focus_1_listener() { return ctx.qFocus(); })("blur", function HeaderSearchComponent_Template_input_blur_1_listener() { return ctx.qBlur(); });
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("nzAddOnBeforeIcon", ctx.focus ? "arrow-down" : "search");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.q)("placeholder", i0.ɵɵpipeBind1(2, 3, "menu.search.placeholder"));
    } }, directives: [i1.NzInputGroupComponent, i1.NzInputDirective, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], pipes: [i3.TranslatePipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderSearchComponent, [{
        type: Component,
        args: [{
                selector: 'header-search',
                template: `
    <nz-input-group [nzAddOnBeforeIcon]="focus ? 'arrow-down' : 'search'">
      <input
        nz-input
        [(ngModel)]="q"
        (focus)="qFocus()"
        (blur)="qBlur()"
        [placeholder]="'menu.search.placeholder' | translate"
      />
    </nz-input-group>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { focus: [{
            type: HostBinding,
            args: ['class.alain-default__search-focus']
        }], searchToggled: [{
            type: HostBinding,
            args: ['class.alain-default__search-toggled']
        }], toggleChange: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9sYXlvdXQvc3JjL2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFpQmxILE1BQU0sT0FBTyxxQkFBcUI7SUFxQmhDLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBZmxDLFVBQUssR0FBRyxLQUFLLENBQUM7UUFHZCxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQVllLENBQUM7SUFWdEMsSUFDSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBSUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUE2QixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQXFCLENBQUM7SUFDckcsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7OzBGQWxDVSxxQkFBcUI7MERBQXJCLHFCQUFxQjs7O1FBWjlCLHlDQUNFO1FBQUEsZ0NBT0Y7UUFMSSx5SUFBZSxvRkFDTixZQUFRLElBREYsa0ZBRVAsV0FBTyxJQUZBOztRQUZqQixpQkFPRjtRQUFBLGlCQUFpQjs7UUFSRCx1RUFBcUQ7UUFHakUsZUFBZTtRQUFmLCtCQUFlLGdFQUFBOztrREFTVixxQkFBcUI7Y0FmakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7a0JBTUUsV0FBVzttQkFBQyxtQ0FBbUM7O2tCQUcvQyxXQUFXO21CQUFDLHFDQUFxQzs7a0JBR2pELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVhZGVyLXNlYXJjaCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuei1pbnB1dC1ncm91cCBbbnpBZGRPbkJlZm9yZUljb25dPVwiZm9jdXMgPyAnYXJyb3ctZG93bicgOiAnc2VhcmNoJ1wiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBuei1pbnB1dFxyXG4gICAgICAgIFsobmdNb2RlbCldPVwicVwiXHJcbiAgICAgICAgKGZvY3VzKT1cInFGb2N1cygpXCJcclxuICAgICAgICAoYmx1cik9XCJxQmx1cigpXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ21lbnUuc2VhcmNoLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L256LWlucHV0LWdyb3VwPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBxOiBzdHJpbmc7XHJcblxyXG4gIHFJcHQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWxhaW4tZGVmYXVsdF9fc2VhcmNoLWZvY3VzJylcclxuICBmb2N1cyA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFsYWluLWRlZmF1bHRfX3NlYXJjaC10b2dnbGVkJylcclxuICBzZWFyY2hUb2dnbGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRvZ2dsZUNoYW5nZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWFyY2hUb2dnbGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnFJcHQuZm9jdXMoKSwgMzAwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMucUlwdCA9ICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcUZvY3VzKCkge1xyXG4gICAgdGhpcy5mb2N1cyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBxQmx1cigpIHtcclxuICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VhcmNoVG9nZ2xlZCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=