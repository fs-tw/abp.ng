import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/dropdown";
import * as i2 from "ng-zorro-antd/badge";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/menu";
import * as i6 from "@angular/common";
import * as i7 from "ng-zorro-antd/spin";
import * as i8 from "ng-zorro-antd/card";
import * as i9 from "ng-zorro-antd/grid";
import * as i10 from "ng-zorro-antd/avatar";
function HeaderTaskComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "nz-spin");
    i0.ɵɵelementEnd();
} }
function HeaderTaskComponent_nz_card_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 17);
} }
function HeaderTaskComponent_nz_card_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nz-card", 8);
    i0.ɵɵtemplate(1, HeaderTaskComponent_nz_card_7_ng_template_1_Template, 1, 0, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(3, "div", 10);
    i0.ɵɵelementStart(4, "div", 11);
    i0.ɵɵelement(5, "nz-avatar", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8, "cipchk");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 14);
    i0.ɵɵtext(10, "Please tell me what happened in a few words, don't go into details.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 10);
    i0.ɵɵelementStart(12, "div", 11);
    i0.ɵɵelement(13, "nz-avatar", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 13);
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16, "\u306F\u306A\u3055\u304D");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "p", 14);
    i0.ɵɵtext(18, "\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 10);
    i0.ɵɵelementStart(20, "div", 11);
    i0.ɵɵelement(21, "nz-avatar", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 13);
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24, "\u82CF\u5148\u751F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "p", 14);
    i0.ɵɵtext(26, "\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 10);
    i0.ɵɵelementStart(28, "div", 11);
    i0.ɵɵelement(29, "nz-avatar", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 13);
    i0.ɵɵelementStart(31, "strong");
    i0.ɵɵtext(32, "Kent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "p", 14);
    i0.ɵɵtext(34, "Please tell me what happened in a few words, don't go into details.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 10);
    i0.ɵɵelementStart(36, "div", 11);
    i0.ɵɵelement(37, "nz-avatar", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 13);
    i0.ɵɵelementStart(39, "strong");
    i0.ɵɵtext(40, "Jefferson");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "p", 14);
    i0.ɵɵtext(42, "Please tell me what happened in a few words, don't go into details.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div", 15);
    i0.ɵɵelementStart(44, "div", 16);
    i0.ɵɵtext(45, " See All ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSpan", 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSrc", "./assets/tmp/img/1.png");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSpan", 20);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSpan", 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSrc", "./assets/tmp/img/2.png");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSpan", 20);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSpan", 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSrc", "./assets/tmp/img/3.png");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSpan", 20);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSpan", 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSrc", "./assets/tmp/img/4.png");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSpan", 20);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSpan", 4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSrc", "./assets/tmp/img/5.png");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzSpan", 20);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("nzSpan", 24);
} }
export class HeaderTaskComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    change() {
        setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
        }, 500);
    }
}
HeaderTaskComponent.ɵfac = function HeaderTaskComponent_Factory(t) { return new (t || HeaderTaskComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
HeaderTaskComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderTaskComponent, selectors: [["header-task"]], decls: 8, vars: 4, consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", 3, "nzDropdownMenu", "nzVisibleChange"], [3, "nzDot"], ["nz-icon", "", "nzType", "bell", 1, "alain-default__nav-item-icon"], ["taskMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "wd-lg"], ["class", "mx-lg p-lg", 4, "ngIf"], ["nzTitle", "Notifications", "nzBordered", "false", "class", "ant-card__body-nopadding", 4, "ngIf"], [1, "mx-lg", "p-lg"], ["nzTitle", "Notifications", "nzBordered", "false", 1, "ant-card__body-nopadding"], ["extra", ""], ["nz-row", "", 1, "py-sm", "point", 3, "nzType", "nzJustify", "nzAlign"], ["nz-col", "", 1, "text-center", 3, "nzSpan"], [3, "nzSrc"], ["nz-col", "", 3, "nzSpan"], [1, "mb0"], ["nz-row", ""], ["nz-col", "", 1, "pt-md", "border-top-1", "text-center", "text-grey", "point", 3, "nzSpan"], ["nz-icon", "", "nzType", "plus"]], template: function HeaderTaskComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("nzVisibleChange", function HeaderTaskComponent_Template_div_nzVisibleChange_0_listener() { return ctx.change(); });
        i0.ɵɵelementStart(1, "nz-badge", 1);
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nz-dropdown-menu", null, 3);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵtemplate(6, HeaderTaskComponent_div_6_Template, 2, 0, "div", 5);
        i0.ɵɵtemplate(7, HeaderTaskComponent_nz_card_7_Template, 46, 31, "nz-card", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        i0.ɵɵproperty("nzDropdownMenu", _r0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzDot", true);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.loading);
    } }, directives: [i1.NzDropDownDirective, i2.NzBadgeComponent, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective, i1.NzDropdownMenuComponent, i5.NzMenuDirective, i6.NgIf, i7.NzSpinComponent, i8.NzCardComponent, i9.NzRowDirective, i9.NzColDirective, i10.NzAvatarComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderTaskComponent, [{
        type: Component,
        args: [{
                selector: 'header-task',
                template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="taskMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <nz-badge [nzDot]="true">
        <i nz-icon nzType="bell" class="alain-default__nav-item-icon"></i>
      </nz-badge>
    </div>
    <nz-dropdown-menu #taskMenu="nzDropdownMenu">
      <div nz-menu class="wd-lg">
        <div *ngIf="loading" class="mx-lg p-lg"><nz-spin></nz-spin></div>
        <nz-card *ngIf="!loading" nzTitle="Notifications" nzBordered="false" class="ant-card__body-nopadding">
          <ng-template #extra><i nz-icon nzType="plus"></i></ng-template>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/1.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>cipchk</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/2.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>はなさき</strong>
              <p class="mb0">ハルカソラトキヘダツヒカリ</p>
            </div>
          </div>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/3.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>苏先生</strong>
              <p class="mb0">请告诉我，我应该说点什么好？</p>
            </div>
          </div>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/4.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>Kent</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm point">
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/5.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>Jefferson</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div nz-row>
            <div nz-col [nzSpan]="24" class="pt-md border-top-1 text-center text-grey point">
              See All
            </div>
          </div>
        </nz-card>
      </div>
    </nz-dropdown-menu>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL3Rhc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFtQjlFLDhCQUF3QztJQUFBLDBCQUFtQjtJQUFBLGlCQUFNOzs7SUFFM0Msd0JBQTZCOzs7SUFEbkQsa0NBQ0U7SUFBQSwrSEFBb0I7SUFDcEIsK0JBQ0U7SUFBQSwrQkFDRTtJQUFBLGdDQUEwRDtJQUM1RCxpQkFBTTtJQUNOLCtCQUNFO0lBQUEsOEJBQVE7SUFBQSxzQkFBTTtJQUFBLGlCQUFTO0lBQ3ZCLDZCQUFlO0lBQUEsb0ZBQW1FO0lBQUEsaUJBQUk7SUFDeEYsaUJBQU07SUFDUixpQkFBTTtJQUNOLGdDQUNFO0lBQUEsZ0NBQ0U7SUFBQSxpQ0FBMEQ7SUFDNUQsaUJBQU07SUFDTixnQ0FDRTtJQUFBLCtCQUFRO0lBQUEseUNBQUk7SUFBQSxpQkFBUztJQUNyQiw4QkFBZTtJQUFBLCtGQUFhO0lBQUEsaUJBQUk7SUFDbEMsaUJBQU07SUFDUixpQkFBTTtJQUNOLGdDQUNFO0lBQUEsZ0NBQ0U7SUFBQSxpQ0FBMEQ7SUFDNUQsaUJBQU07SUFDTixnQ0FDRTtJQUFBLCtCQUFRO0lBQUEsbUNBQUc7SUFBQSxpQkFBUztJQUNwQiw4QkFBZTtJQUFBLHFHQUFjO0lBQUEsaUJBQUk7SUFDbkMsaUJBQU07SUFDUixpQkFBTTtJQUNOLGdDQUNFO0lBQUEsZ0NBQ0U7SUFBQSxpQ0FBMEQ7SUFDNUQsaUJBQU07SUFDTixnQ0FDRTtJQUFBLCtCQUFRO0lBQUEscUJBQUk7SUFBQSxpQkFBUztJQUNyQiw4QkFBZTtJQUFBLG9GQUFtRTtJQUFBLGlCQUFJO0lBQ3hGLGlCQUFNO0lBQ1IsaUJBQU07SUFDTixnQ0FDRTtJQUFBLGdDQUNFO0lBQUEsaUNBQTBEO0lBQzVELGlCQUFNO0lBQ04sZ0NBQ0U7SUFBQSwrQkFBUTtJQUFBLDBCQUFTO0lBQUEsaUJBQVM7SUFDMUIsOEJBQWU7SUFBQSxvRkFBbUU7SUFBQSxpQkFBSTtJQUN4RixpQkFBTTtJQUNSLGlCQUFNO0lBQ04sZ0NBQ0U7SUFBQSxnQ0FDRTtJQUFBLDBCQUNGO0lBQUEsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFVOztJQWxESSxlQUFpQjtJQUFqQiwrQkFBaUIsdUJBQUEscUJBQUE7SUFDZixlQUFZO0lBQVosMEJBQVk7SUFDWCxlQUFrQztJQUFsQyxnREFBa0M7SUFFbkMsZUFBYTtJQUFiLDJCQUFhO0lBS2YsZUFBaUI7SUFBakIsK0JBQWlCLHVCQUFBLHFCQUFBO0lBQ2YsZUFBWTtJQUFaLDBCQUFZO0lBQ1gsZUFBa0M7SUFBbEMsZ0RBQWtDO0lBRW5DLGVBQWE7SUFBYiwyQkFBYTtJQUtmLGVBQWlCO0lBQWpCLCtCQUFpQix1QkFBQSxxQkFBQTtJQUNmLGVBQVk7SUFBWiwwQkFBWTtJQUNYLGVBQWtDO0lBQWxDLGdEQUFrQztJQUVuQyxlQUFhO0lBQWIsMkJBQWE7SUFLZixlQUFpQjtJQUFqQiwrQkFBaUIsdUJBQUEscUJBQUE7SUFDZixlQUFZO0lBQVosMEJBQVk7SUFDWCxlQUFrQztJQUFsQyxnREFBa0M7SUFFbkMsZUFBYTtJQUFiLDJCQUFhO0lBS2YsZUFBaUI7SUFBakIsK0JBQWlCLHVCQUFBLHFCQUFBO0lBQ2YsZUFBWTtJQUFaLDBCQUFZO0lBQ1gsZUFBa0M7SUFBbEMsZ0RBQWtDO0lBRW5DLGVBQWE7SUFBYiwyQkFBYTtJQU1iLGVBQWE7SUFBYiwyQkFBYTs7QUFVckMsTUFBTSxPQUFPLG1CQUFtQjtJQUc5QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUYxQyxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBRThCLENBQUM7SUFFOUMsTUFBTTtRQUNKLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7O3NGQVZVLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FBekU1Qiw4QkFRRTtRQUZBLGlIQUFtQixZQUFRLElBQUM7UUFFNUIsbUNBQ0U7UUFBQSx1QkFBa0U7UUFDcEUsaUJBQVc7UUFDYixpQkFBTTtRQUNOLGlEQUNFO1FBQUEsOEJBQ0U7UUFBQSxvRUFBd0M7UUFDeEMsOEVBQ0U7UUFvREosaUJBQU07UUFDUixpQkFBbUI7OztRQWxFakIsb0NBQTJCO1FBS2pCLGVBQWM7UUFBZCw0QkFBYztRQU1qQixlQUFlO1FBQWYsa0NBQWU7UUFDWCxlQUFnQjtRQUFoQixtQ0FBZ0I7O2tEQTBEcEIsbUJBQW1CO2NBNUUvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1RVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWFkZXItdGFzaycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtaXRlbVwiXHJcbiAgICAgIG56LWRyb3Bkb3duXHJcbiAgICAgIFtuekRyb3Bkb3duTWVudV09XCJ0YXNrTWVudVwiXHJcbiAgICAgIG56VHJpZ2dlcj1cImNsaWNrXCJcclxuICAgICAgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICAgIChuelZpc2libGVDaGFuZ2UpPVwiY2hhbmdlKClcIlxyXG4gICAgPlxyXG4gICAgICA8bnotYmFkZ2UgW256RG90XT1cInRydWVcIj5cclxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImJlbGxcIiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtLWljb25cIj48L2k+XHJcbiAgICAgIDwvbnotYmFkZ2U+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuei1kcm9wZG93bi1tZW51ICN0YXNrTWVudT1cIm56RHJvcGRvd25NZW51XCI+XHJcbiAgICAgIDxkaXYgbnotbWVudSBjbGFzcz1cIndkLWxnXCI+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cIm14LWxnIHAtbGdcIj48bnotc3Bpbj48L256LXNwaW4+PC9kaXY+XHJcbiAgICAgICAgPG56LWNhcmQgKm5nSWY9XCIhbG9hZGluZ1wiIG56VGl0bGU9XCJOb3RpZmljYXRpb25zXCIgbnpCb3JkZXJlZD1cImZhbHNlXCIgY2xhc3M9XCJhbnQtY2FyZF9fYm9keS1ub3BhZGRpbmdcIj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZXh0cmE+PGkgbnotaWNvbiBuelR5cGU9XCJwbHVzXCI+PC9pPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8ZGl2IG56LXJvdyBbbnpUeXBlXT1cIidmbGV4J1wiIFtuekp1c3RpZnldPVwiJ2NlbnRlcidcIiBbbnpBbGlnbl09XCInbWlkZGxlJ1wiIGNsYXNzPVwicHktc20gcG9pbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI0XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxuei1hdmF0YXIgW256U3JjXT1cIicuL2Fzc2V0cy90bXAvaW1nLzEucG5nJ1wiPjwvbnotYXZhdGFyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCIyMFwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+Y2lwY2hrPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYjBcIj5QbGVhc2UgdGVsbCBtZSB3aGF0IGhhcHBlbmVkIGluIGEgZmV3IHdvcmRzLCBkb24ndCBnbyBpbnRvIGRldGFpbHMuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1yb3cgW256VHlwZV09XCInZmxleCdcIiBbbnpKdXN0aWZ5XT1cIidjZW50ZXInXCIgW256QWxpZ25dPVwiJ21pZGRsZSdcIiBjbGFzcz1cInB5LXNtIHBvaW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiNFwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8bnotYXZhdGFyIFtuelNyY109XCInLi9hc3NldHMvdG1wL2ltZy8yLnBuZydcIj48L256LWF2YXRhcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiMjBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPuOBr+OBquOBleOBjTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibWIwXCI+44OP44Or44Kr44K944Op44OI44Kt44OY44OA44OE44OS44Kr44OqPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1yb3cgW256VHlwZV09XCInZmxleCdcIiBbbnpKdXN0aWZ5XT1cIidjZW50ZXInXCIgW256QWxpZ25dPVwiJ21pZGRsZSdcIiBjbGFzcz1cInB5LXNtIHBvaW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiNFwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8bnotYXZhdGFyIFtuelNyY109XCInLi9hc3NldHMvdG1wL2ltZy8zLnBuZydcIj48L256LWF2YXRhcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiMjBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPuiLj+WFiOeUnzwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibWIwXCI+6K+35ZGK6K+J5oiR77yM5oiR5bqU6K+l6K+054K55LuA5LmI5aW977yfPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1yb3cgW256VHlwZV09XCInZmxleCdcIiBbbnpKdXN0aWZ5XT1cIidjZW50ZXInXCIgW256QWxpZ25dPVwiJ21pZGRsZSdcIiBjbGFzcz1cInB5LXNtIHBvaW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiNFwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8bnotYXZhdGFyIFtuelNyY109XCInLi9hc3NldHMvdG1wL2ltZy80LnBuZydcIj48L256LWF2YXRhcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiMjBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPktlbnQ8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iMFwiPlBsZWFzZSB0ZWxsIG1lIHdoYXQgaGFwcGVuZWQgaW4gYSBmZXcgd29yZHMsIGRvbid0IGdvIGludG8gZGV0YWlscy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LXJvdyBbbnpUeXBlXT1cIidmbGV4J1wiIFtuekp1c3RpZnldPVwiJ2NlbnRlcidcIiBbbnpBbGlnbl09XCInbWlkZGxlJ1wiIGNsYXNzPVwicHktc20gcG9pbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI0XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxuei1hdmF0YXIgW256U3JjXT1cIicuL2Fzc2V0cy90bXAvaW1nLzUucG5nJ1wiPjwvbnotYXZhdGFyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCIyMFwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+SmVmZmVyc29uPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYjBcIj5QbGVhc2UgdGVsbCBtZSB3aGF0IGhhcHBlbmVkIGluIGEgZmV3IHdvcmRzLCBkb24ndCBnbyBpbnRvIGRldGFpbHMuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1yb3c+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiMjRcIiBjbGFzcz1cInB0LW1kIGJvcmRlci10b3AtMSB0ZXh0LWNlbnRlciB0ZXh0LWdyZXkgcG9pbnRcIj5cclxuICAgICAgICAgICAgICBTZWUgQWxsXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uei1jYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbnotZHJvcGRvd24tbWVudT5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyVGFza0NvbXBvbmVudCB7XHJcbiAgbG9hZGluZyA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgY2hhbmdlKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxufVxyXG4iXX0=