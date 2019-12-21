/**
 * @fileoverview added by tsickle
 * Generated from: lib/layout/default/header/components/task.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
export class HeaderTaskComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    /**
     * @return {?}
     */
    change() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.loading = false;
            this.cdr.detectChanges();
        }), 500);
    }
}
HeaderTaskComponent.decorators = [
    { type: Component, args: [{
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
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/1.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>cipchk</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/2.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>はなさき</strong>
              <p class="mb0">ハルカソラトキヘダツヒカリ</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/3.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>苏先生</strong>
              <p class="mb0">请告诉我，我应该说点什么好？</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
            <div nz-col [nzSpan]="4" class="text-center">
              <nz-avatar [nzSrc]="'./assets/tmp/img/4.png'"></nz-avatar>
            </div>
            <div nz-col [nzSpan]="20">
              <strong>Kent</strong>
              <p class="mb0">Please tell me what happened in a few words, don't go into details.</p>
            </div>
          </div>
          <div
            nz-row
            [nzType]="'flex'"
            [nzJustify]="'center'"
            [nzAlign]="'middle'"
            class="py-sm bg-grey-lighter-h point"
          >
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
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
HeaderTaskComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    HeaderTaskComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    HeaderTaskComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvdGFzay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBNEd0RixNQUFNLE9BQU8sbUJBQW1COzs7O0lBRzlCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRjFDLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFFOEIsQ0FBQzs7OztJQUU5QyxNQUFNO1FBQ0osVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDOzs7WUFwSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUdUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBM0c0QyxpQkFBaUI7Ozs7SUE2RzVELHNDQUFlOzs7OztJQUVILGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci10YXNrJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtXCJcclxuICAgICAgbnotZHJvcGRvd25cclxuICAgICAgW256RHJvcGRvd25NZW51XT1cInRhc2tNZW51XCJcclxuICAgICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgICBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJjaGFuZ2UoKVwiXHJcbiAgICA+XHJcbiAgICAgIDxuei1iYWRnZSBbbnpEb3RdPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiYmVsbFwiIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0taWNvblwiPjwvaT5cclxuICAgICAgPC9uei1iYWRnZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI3Rhc2tNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgICAgPGRpdiBuei1tZW51IGNsYXNzPVwid2QtbGdcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwibXgtbGcgcC1sZ1wiPjxuei1zcGluPjwvbnotc3Bpbj48L2Rpdj5cclxuICAgICAgICA8bnotY2FyZCAqbmdJZj1cIiFsb2FkaW5nXCIgbnpUaXRsZT1cIk5vdGlmaWNhdGlvbnNcIiBuekJvcmRlcmVkPVwiZmFsc2VcIiBjbGFzcz1cImFudC1jYXJkX19ib2R5LW5vcGFkZGluZ1wiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNleHRyYT48aSBuei1pY29uIG56VHlwZT1cInBsdXNcIj48L2k+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgbnotcm93XHJcbiAgICAgICAgICAgIFtuelR5cGVdPVwiJ2ZsZXgnXCJcclxuICAgICAgICAgICAgW256SnVzdGlmeV09XCInY2VudGVyJ1wiXHJcbiAgICAgICAgICAgIFtuekFsaWduXT1cIidtaWRkbGUnXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJweS1zbSBiZy1ncmV5LWxpZ2h0ZXItaCBwb2ludFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiNFwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8bnotYXZhdGFyIFtuelNyY109XCInLi9hc3NldHMvdG1wL2ltZy8xLnBuZydcIj48L256LWF2YXRhcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiMjBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPmNpcGNoazwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibWIwXCI+UGxlYXNlIHRlbGwgbWUgd2hhdCBoYXBwZW5lZCBpbiBhIGZldyB3b3JkcywgZG9uJ3QgZ28gaW50byBkZXRhaWxzLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgbnotcm93XHJcbiAgICAgICAgICAgIFtuelR5cGVdPVwiJ2ZsZXgnXCJcclxuICAgICAgICAgICAgW256SnVzdGlmeV09XCInY2VudGVyJ1wiXHJcbiAgICAgICAgICAgIFtuekFsaWduXT1cIidtaWRkbGUnXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJweS1zbSBiZy1ncmV5LWxpZ2h0ZXItaCBwb2ludFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiNFwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8bnotYXZhdGFyIFtuelNyY109XCInLi9hc3NldHMvdG1wL2ltZy8yLnBuZydcIj48L256LWF2YXRhcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiMjBcIj5cclxuICAgICAgICAgICAgICA8c3Ryb25nPuOBr+OBquOBleOBjTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibWIwXCI+44OP44Or44Kr44K944Op44OI44Kt44OY44OA44OE44OS44Kr44OqPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBuei1yb3dcclxuICAgICAgICAgICAgW256VHlwZV09XCInZmxleCdcIlxyXG4gICAgICAgICAgICBbbnpKdXN0aWZ5XT1cIidjZW50ZXInXCJcclxuICAgICAgICAgICAgW256QWxpZ25dPVwiJ21pZGRsZSdcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInB5LXNtIGJnLWdyZXktbGlnaHRlci1oIHBvaW50XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI0XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxuei1hdmF0YXIgW256U3JjXT1cIicuL2Fzc2V0cy90bXAvaW1nLzMucG5nJ1wiPjwvbnotYXZhdGFyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCIyMFwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+6IuP5YWI55SfPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYjBcIj7or7flkYror4nmiJHvvIzmiJHlupTor6Xor7Tngrnku4DkuYjlpb3vvJ88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG56LXJvd1xyXG4gICAgICAgICAgICBbbnpUeXBlXT1cIidmbGV4J1wiXHJcbiAgICAgICAgICAgIFtuekp1c3RpZnldPVwiJ2NlbnRlcidcIlxyXG4gICAgICAgICAgICBbbnpBbGlnbl09XCInbWlkZGxlJ1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwicHktc20gYmctZ3JleS1saWdodGVyLWggcG9pbnRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjRcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPG56LWF2YXRhciBbbnpTcmNdPVwiJy4vYXNzZXRzL3RtcC9pbWcvNC5wbmcnXCI+PC9uei1hdmF0YXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjIwXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5LZW50PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYjBcIj5QbGVhc2UgdGVsbCBtZSB3aGF0IGhhcHBlbmVkIGluIGEgZmV3IHdvcmRzLCBkb24ndCBnbyBpbnRvIGRldGFpbHMuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBuei1yb3dcclxuICAgICAgICAgICAgW256VHlwZV09XCInZmxleCdcIlxyXG4gICAgICAgICAgICBbbnpKdXN0aWZ5XT1cIidjZW50ZXInXCJcclxuICAgICAgICAgICAgW256QWxpZ25dPVwiJ21pZGRsZSdcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInB5LXNtIGJnLWdyZXktbGlnaHRlci1oIHBvaW50XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI0XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxuei1hdmF0YXIgW256U3JjXT1cIicuL2Fzc2V0cy90bXAvaW1nLzUucG5nJ1wiPjwvbnotYXZhdGFyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCIyMFwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+SmVmZmVyc29uPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYjBcIj5QbGVhc2UgdGVsbCBtZSB3aGF0IGhhcHBlbmVkIGluIGEgZmV3IHdvcmRzLCBkb24ndCBnbyBpbnRvIGRldGFpbHMuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBuei1yb3c+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiMjRcIiBjbGFzcz1cInB0LW1kIGJvcmRlci10b3AtMSB0ZXh0LWNlbnRlciB0ZXh0LWdyZXkgcG9pbnRcIj5cclxuICAgICAgICAgICAgICBTZWUgQWxsXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uei1jYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbnotZHJvcGRvd24tbWVudT5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyVGFza0NvbXBvbmVudCB7XHJcbiAgbG9hZGluZyA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgY2hhbmdlKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxufVxyXG4iXX0=