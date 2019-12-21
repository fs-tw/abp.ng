/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
var HeaderIconComponent = /** @class */ (function () {
    function HeaderIconComponent(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    /**
     * @return {?}
     */
    HeaderIconComponent.prototype.change = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.loading = false;
            _this.cdr.detectChanges();
        }), 500);
    };
    HeaderIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'header-icon',
                    template: "\n    <div\n      class=\"alain-default__nav-item\"\n      nz-dropdown\n      [nzDropdownMenu]=\"iconMenu\"\n      nzTrigger=\"click\"\n      nzPlacement=\"bottomRight\"\n      (nzVisibleChange)=\"change()\"\n    >\n      <i nz-icon nzType=\"appstore\"></i>\n    </div>\n    <nz-dropdown-menu #iconMenu=\"nzDropdownMenu\">\n      <div nz-menu class=\"wd-xl animated jello\">\n        <nz-spin [nzSpinning]=\"loading\" [nzTip]=\"'\u6B63\u5728\u8BFB\u53D6\u6570\u636E...'\">\n          <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"app-icons\">\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"calendar\" class=\"bg-error text-white\"></i>\n              <small>Calendar</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"file\" class=\"bg-geekblue text-white\"></i>\n              <small>Files</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"cloud\" class=\"bg-success text-white\"></i>\n              <small>Cloud</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"star\" class=\"bg-magenta text-white\"></i>\n              <small>Star</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"team\" class=\"bg-purple text-white\"></i>\n              <small>Team</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"scan\" class=\"bg-warning text-white\"></i>\n              <small>QR</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"pay-circle\" class=\"bg-cyan text-white\"></i>\n              <small>Pay</small>\n            </div>\n            <div nz-col [nzSpan]=\"6\">\n              <i nz-icon nzType=\"printer\" class=\"bg-grey text-white\"></i>\n              <small>Print</small>\n            </div>\n          </div>\n        </nz-spin>\n      </div>\n    </nz-dropdown-menu>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    HeaderIconComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    return HeaderIconComponent;
}());
export { HeaderIconComponent };
if (false) {
    /** @type {?} */
    HeaderIconComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    HeaderIconComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGO0lBMkRFLDZCQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUYxQyxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBRThCLENBQUM7Ozs7SUFFOUMsb0NBQU07OztJQUFOO1FBQUEsaUJBS0M7UUFKQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7Z0JBbEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDZoRUFtRFQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXpENEMsaUJBQWlCOztJQXFFOUQsMEJBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQVhZLG1CQUFtQjs7O0lBQzlCLHNDQUFlOzs7OztJQUVILGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci1pY29uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtXCJcclxuICAgICAgbnotZHJvcGRvd25cclxuICAgICAgW256RHJvcGRvd25NZW51XT1cImljb25NZW51XCJcclxuICAgICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgICBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJjaGFuZ2UoKVwiXHJcbiAgICA+XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiYXBwc3RvcmVcIj48L2k+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuei1kcm9wZG93bi1tZW51ICNpY29uTWVudT1cIm56RHJvcGRvd25NZW51XCI+XHJcbiAgICAgIDxkaXYgbnotbWVudSBjbGFzcz1cIndkLXhsIGFuaW1hdGVkIGplbGxvXCI+XHJcbiAgICAgICAgPG56LXNwaW4gW256U3Bpbm5pbmddPVwibG9hZGluZ1wiIFtuelRpcF09XCIn5q2j5Zyo6K+75Y+W5pWw5o2uLi4uJ1wiPlxyXG4gICAgICAgICAgPGRpdiBuei1yb3cgW256VHlwZV09XCInZmxleCdcIiBbbnpKdXN0aWZ5XT1cIidjZW50ZXInXCIgW256QWxpZ25dPVwiJ21pZGRsZSdcIiBjbGFzcz1cImFwcC1pY29uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjZcIj5cclxuICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNhbGVuZGFyXCIgY2xhc3M9XCJiZy1lcnJvciB0ZXh0LXdoaXRlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzbWFsbD5DYWxlbmRhcjwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjZcIj5cclxuICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImZpbGVcIiBjbGFzcz1cImJnLWdlZWtibHVlIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPkZpbGVzPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvdWRcIiBjbGFzcz1cImJnLXN1Y2Nlc3MgdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c21hbGw+Q2xvdWQ8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJzdGFyXCIgY2xhc3M9XCJiZy1tYWdlbnRhIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPlN0YXI8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJ0ZWFtXCIgY2xhc3M9XCJiZy1wdXJwbGUgdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c21hbGw+VGVhbTwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjZcIj5cclxuICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInNjYW5cIiBjbGFzcz1cImJnLXdhcm5pbmcgdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c21hbGw+UVI8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJwYXktY2lyY2xlXCIgY2xhc3M9XCJiZy1jeWFuIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPlBheTwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjZcIj5cclxuICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInByaW50ZXJcIiBjbGFzcz1cImJnLWdyZXkgdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c21hbGw+UHJpbnQ8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbnotc3Bpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L256LWRyb3Bkb3duLW1lbnU+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckljb25Db21wb25lbnQge1xyXG4gIGxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIGNoYW5nZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcbn1cclxuIl19