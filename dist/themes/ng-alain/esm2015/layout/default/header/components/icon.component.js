import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/dropdown";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/menu";
import * as i5 from "ng-zorro-antd/spin";
import * as i6 from "ng-zorro-antd/grid";
export class HeaderIconComponent {
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
HeaderIconComponent.ɵfac = function HeaderIconComponent_Factory(t) { return new (t || HeaderIconComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
HeaderIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: HeaderIconComponent, selectors: [["header-icon"]], decls: 39, vars: 14, consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "alain-default__nav-item", 3, "nzDropdownMenu", "nzVisibleChange"], ["nz-icon", "", "nzType", "appstore"], ["iconMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "wd-xl", "animated", "jello"], [3, "nzSpinning", "nzTip"], ["nz-row", "", 1, "app-icons", 3, "nzType", "nzJustify", "nzAlign"], ["nz-col", "", 3, "nzSpan"], ["nz-icon", "", "nzType", "calendar", 1, "bg-error", "text-white"], ["nz-icon", "", "nzType", "file", 1, "bg-geekblue", "text-white"], ["nz-icon", "", "nzType", "cloud", 1, "bg-success", "text-white"], ["nz-icon", "", "nzType", "star", 1, "bg-magenta", "text-white"], ["nz-icon", "", "nzType", "team", 1, "bg-purple", "text-white"], ["nz-icon", "", "nzType", "scan", 1, "bg-warning", "text-white"], ["nz-icon", "", "nzType", "pay-circle", 1, "bg-cyan", "text-white"], ["nz-icon", "", "nzType", "printer", 1, "bg-grey", "text-white"]], template: function HeaderIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("nzVisibleChange", function HeaderIconComponent_Template_div_nzVisibleChange_0_listener() { return ctx.change(); });
        i0.ɵɵelement(1, "i", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "nz-dropdown-menu", null, 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelementStart(5, "nz-spin", 4);
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelementStart(7, "div", 6);
        i0.ɵɵelement(8, "i", 7);
        i0.ɵɵelementStart(9, "small");
        i0.ɵɵtext(10, "Calendar");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 6);
        i0.ɵɵelement(12, "i", 8);
        i0.ɵɵelementStart(13, "small");
        i0.ɵɵtext(14, "Files");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 6);
        i0.ɵɵelement(16, "i", 9);
        i0.ɵɵelementStart(17, "small");
        i0.ɵɵtext(18, "Cloud");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 6);
        i0.ɵɵelement(20, "i", 10);
        i0.ɵɵelementStart(21, "small");
        i0.ɵɵtext(22, "Star");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 6);
        i0.ɵɵelement(24, "i", 11);
        i0.ɵɵelementStart(25, "small");
        i0.ɵɵtext(26, "Team");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 6);
        i0.ɵɵelement(28, "i", 12);
        i0.ɵɵelementStart(29, "small");
        i0.ɵɵtext(30, "QR");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "div", 6);
        i0.ɵɵelement(32, "i", 13);
        i0.ɵɵelementStart(33, "small");
        i0.ɵɵtext(34, "Pay");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "div", 6);
        i0.ɵɵelement(36, "i", 14);
        i0.ɵɵelementStart(37, "small");
        i0.ɵɵtext(38, "Print");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        i0.ɵɵproperty("nzDropdownMenu", _r0);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("nzSpinning", ctx.loading)("nzTip", "\u6B63\u5728\u8BFB\u53D6\u6570\u636E...");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzType", "flex")("nzJustify", "center")("nzAlign", "middle");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzSpan", 6);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("nzSpan", 6);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("nzSpan", 6);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("nzSpan", 6);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("nzSpan", 6);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("nzSpan", 6);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("nzSpan", 6);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("nzSpan", 6);
    } }, directives: [i1.NzDropDownDirective, i2.ɵNzTransitionPatchDirective, i3.NzIconDirective, i1.NzDropdownMenuComponent, i4.NzMenuDirective, i5.NzSpinComponent, i6.NzRowDirective, i6.NzColDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HeaderIconComponent, [{
        type: Component,
        args: [{
                selector: 'header-icon',
                template: `
    <div
      class="alain-default__nav-item"
      nz-dropdown
      [nzDropdownMenu]="iconMenu"
      nzTrigger="click"
      nzPlacement="bottomRight"
      (nzVisibleChange)="change()"
    >
      <i nz-icon nzType="appstore"></i>
    </div>
    <nz-dropdown-menu #iconMenu="nzDropdownMenu">
      <div nz-menu class="wd-xl animated jello">
        <nz-spin [nzSpinning]="loading" [nzTip]="'正在读取数据...'">
          <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="app-icons">
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="calendar" class="bg-error text-white"></i>
              <small>Calendar</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="file" class="bg-geekblue text-white"></i>
              <small>Files</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="cloud" class="bg-success text-white"></i>
              <small>Cloud</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="star" class="bg-magenta text-white"></i>
              <small>Star</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="team" class="bg-purple text-white"></i>
              <small>Team</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="scan" class="bg-warning text-white"></i>
              <small>QR</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="pay-circle" class="bg-cyan text-white"></i>
              <small>Pay</small>
            </div>
            <div nz-col [nzSpan]="6">
              <i nz-icon nzType="printer" class="bg-grey text-white"></i>
              <small>Print</small>
            </div>
          </div>
        </nz-spin>
      </div>
    </nz-dropdown-menu>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBMER0RixNQUFNLE9BQU8sbUJBQW1CO0lBRzlCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRjFDLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFFOEIsQ0FBQztJQUU5QyxNQUFNO1FBQ0osVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7c0ZBVlUsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUFyRDVCLDhCQVFFO1FBRkEsaUhBQW1CLFlBQVEsSUFBQztRQUU1Qix1QkFBaUM7UUFDbkMsaUJBQU07UUFDTixpREFDRTtRQUFBLDhCQUNFO1FBQUEsa0NBQ0U7UUFBQSw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsdUJBQTZEO1FBQzdELDZCQUFPO1FBQUEseUJBQVE7UUFBQSxpQkFBUTtRQUN6QixpQkFBTTtRQUNOLCtCQUNFO1FBQUEsd0JBQTREO1FBQzVELDhCQUFPO1FBQUEsc0JBQUs7UUFBQSxpQkFBUTtRQUN0QixpQkFBTTtRQUNOLCtCQUNFO1FBQUEsd0JBQTREO1FBQzVELDhCQUFPO1FBQUEsc0JBQUs7UUFBQSxpQkFBUTtRQUN0QixpQkFBTTtRQUNOLCtCQUNFO1FBQUEseUJBQTJEO1FBQzNELDhCQUFPO1FBQUEscUJBQUk7UUFBQSxpQkFBUTtRQUNyQixpQkFBTTtRQUNOLCtCQUNFO1FBQUEseUJBQTBEO1FBQzFELDhCQUFPO1FBQUEscUJBQUk7UUFBQSxpQkFBUTtRQUNyQixpQkFBTTtRQUNOLCtCQUNFO1FBQUEseUJBQTJEO1FBQzNELDhCQUFPO1FBQUEsbUJBQUU7UUFBQSxpQkFBUTtRQUNuQixpQkFBTTtRQUNOLCtCQUNFO1FBQUEseUJBQThEO1FBQzlELDhCQUFPO1FBQUEsb0JBQUc7UUFBQSxpQkFBUTtRQUNwQixpQkFBTTtRQUNOLCtCQUNFO1FBQUEseUJBQTJEO1FBQzNELDhCQUFPO1FBQUEsc0JBQUs7UUFBQSxpQkFBUTtRQUN0QixpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQVU7UUFDWixpQkFBTTtRQUNSLGlCQUFtQjs7O1FBOUNqQixvQ0FBMkI7UUFTaEIsZUFBc0I7UUFBdEIsd0NBQXNCLG9EQUFBO1FBQ2pCLGVBQWlCO1FBQWpCLCtCQUFpQix1QkFBQSxxQkFBQTtRQUNmLGVBQVk7UUFBWiwwQkFBWTtRQUlaLGVBQVk7UUFBWiwwQkFBWTtRQUlaLGVBQVk7UUFBWiwwQkFBWTtRQUlaLGVBQVk7UUFBWiwwQkFBWTtRQUlaLGVBQVk7UUFBWiwwQkFBWTtRQUlaLGVBQVk7UUFBWiwwQkFBWTtRQUlaLGVBQVk7UUFBWiwwQkFBWTtRQUlaLGVBQVk7UUFBWiwwQkFBWTs7a0RBV3ZCLG1CQUFtQjtjQXhEL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1EVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci1pY29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtXCJcclxuICAgICAgbnotZHJvcGRvd25cclxuICAgICAgW256RHJvcGRvd25NZW51XT1cImljb25NZW51XCJcclxuICAgICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgICBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJjaGFuZ2UoKVwiXHJcbiAgICA+XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiYXBwc3RvcmVcIj48L2k+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuei1kcm9wZG93bi1tZW51ICNpY29uTWVudT1cIm56RHJvcGRvd25NZW51XCI+XHJcbiAgICAgIDxkaXYgbnotbWVudSBjbGFzcz1cIndkLXhsIGFuaW1hdGVkIGplbGxvXCI+XHJcbiAgICAgICAgPG56LXNwaW4gW256U3Bpbm5pbmddPVwibG9hZGluZ1wiIFtuelRpcF09XCIn5q2j5Zyo6K+75Y+W5pWw5o2uLi4uJ1wiPlxyXG4gICAgICAgICAgPGRpdiBuei1yb3cgW256VHlwZV09XCInZmxleCdcIiBbbnpKdXN0aWZ5XT1cIidjZW50ZXInXCIgW256QWxpZ25dPVwiJ21pZGRsZSdcIiBjbGFzcz1cImFwcC1pY29uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjZcIj5cclxuICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNhbGVuZGFyXCIgY2xhc3M9XCJiZy1lcnJvciB0ZXh0LXdoaXRlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzbWFsbD5DYWxlbmRhcjwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjZcIj5cclxuICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImZpbGVcIiBjbGFzcz1cImJnLWdlZWtibHVlIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPkZpbGVzPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvdWRcIiBjbGFzcz1cImJnLXN1Y2Nlc3MgdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c21hbGw+Q2xvdWQ8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJzdGFyXCIgY2xhc3M9XCJiZy1tYWdlbnRhIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPlN0YXI8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJ0ZWFtXCIgY2xhc3M9XCJiZy1wdXJwbGUgdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c21hbGw+VGVhbTwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjZcIj5cclxuICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInNjYW5cIiBjbGFzcz1cImJnLXdhcm5pbmcgdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c21hbGw+UVI8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJwYXktY2lyY2xlXCIgY2xhc3M9XCJiZy1jeWFuIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPlBheTwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjZcIj5cclxuICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInByaW50ZXJcIiBjbGFzcz1cImJnLWdyZXkgdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c21hbGw+UHJpbnQ8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbnotc3Bpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L256LWRyb3Bkb3duLW1lbnU+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckljb25Db21wb25lbnQge1xyXG4gIGxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIGNoYW5nZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcbn1cclxuIl19