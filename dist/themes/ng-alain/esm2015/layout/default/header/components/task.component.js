import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
let HeaderTaskComponent = class HeaderTaskComponent {
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
};
HeaderTaskComponent = __decorate([
    Component({
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
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], HeaderTaskComponent);
export { HeaderTaskComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL3Rhc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBOEV0RixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUc5QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUYxQyxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBRThCLENBQUM7SUFFOUMsTUFBTTtRQUNKLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7Q0FDRixDQUFBO0FBWFksbUJBQW1CO0lBNUUvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUVUO1FBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FJeUIsaUJBQWlCO0dBSC9CLG1CQUFtQixDQVcvQjtTQVhZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hlYWRlci10YXNrJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtXCJcclxuICAgICAgbnotZHJvcGRvd25cclxuICAgICAgW256RHJvcGRvd25NZW51XT1cInRhc2tNZW51XCJcclxuICAgICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgICBuelBsYWNlbWVudD1cImJvdHRvbVJpZ2h0XCJcclxuICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJjaGFuZ2UoKVwiXHJcbiAgICA+XHJcbiAgICAgIDxuei1iYWRnZSBbbnpEb3RdPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiYmVsbFwiIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0taWNvblwiPjwvaT5cclxuICAgICAgPC9uei1iYWRnZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI3Rhc2tNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cclxuICAgICAgPGRpdiBuei1tZW51IGNsYXNzPVwid2QtbGdcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwibXgtbGcgcC1sZ1wiPjxuei1zcGluPjwvbnotc3Bpbj48L2Rpdj5cclxuICAgICAgICA8bnotY2FyZCAqbmdJZj1cIiFsb2FkaW5nXCIgbnpUaXRsZT1cIk5vdGlmaWNhdGlvbnNcIiBuekJvcmRlcmVkPVwiZmFsc2VcIiBjbGFzcz1cImFudC1jYXJkX19ib2R5LW5vcGFkZGluZ1wiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNleHRyYT48aSBuei1pY29uIG56VHlwZT1cInBsdXNcIj48L2k+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDxkaXYgbnotcm93IFtuelR5cGVdPVwiJ2ZsZXgnXCIgW256SnVzdGlmeV09XCInY2VudGVyJ1wiIFtuekFsaWduXT1cIidtaWRkbGUnXCIgY2xhc3M9XCJweS1zbSBwb2ludFwiPlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjRcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPG56LWF2YXRhciBbbnpTcmNdPVwiJy4vYXNzZXRzL3RtcC9pbWcvMS5wbmcnXCI+PC9uei1hdmF0YXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjIwXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5jaXBjaGs8L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iMFwiPlBsZWFzZSB0ZWxsIG1lIHdoYXQgaGFwcGVuZWQgaW4gYSBmZXcgd29yZHMsIGRvbid0IGdvIGludG8gZGV0YWlscy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LXJvdyBbbnpUeXBlXT1cIidmbGV4J1wiIFtuekp1c3RpZnldPVwiJ2NlbnRlcidcIiBbbnpBbGlnbl09XCInbWlkZGxlJ1wiIGNsYXNzPVwicHktc20gcG9pbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI0XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxuei1hdmF0YXIgW256U3JjXT1cIicuL2Fzc2V0cy90bXAvaW1nLzIucG5nJ1wiPjwvbnotYXZhdGFyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCIyMFwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+44Gv44Gq44GV44GNPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYjBcIj7jg4/jg6vjgqvjgr3jg6njg4jjgq3jg5jjg4Djg4Tjg5Ljgqvjg6o8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LXJvdyBbbnpUeXBlXT1cIidmbGV4J1wiIFtuekp1c3RpZnldPVwiJ2NlbnRlcidcIiBbbnpBbGlnbl09XCInbWlkZGxlJ1wiIGNsYXNzPVwicHktc20gcG9pbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI0XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxuei1hdmF0YXIgW256U3JjXT1cIicuL2Fzc2V0cy90bXAvaW1nLzMucG5nJ1wiPjwvbnotYXZhdGFyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCIyMFwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+6IuP5YWI55SfPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYjBcIj7or7flkYror4nmiJHvvIzmiJHlupTor6Xor7Tngrnku4DkuYjlpb3vvJ88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LXJvdyBbbnpUeXBlXT1cIidmbGV4J1wiIFtuekp1c3RpZnldPVwiJ2NlbnRlcidcIiBbbnpBbGlnbl09XCInbWlkZGxlJ1wiIGNsYXNzPVwicHktc20gcG9pbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI0XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxuei1hdmF0YXIgW256U3JjXT1cIicuL2Fzc2V0cy90bXAvaW1nLzQucG5nJ1wiPjwvbnotYXZhdGFyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCIyMFwiPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+S2VudDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibWIwXCI+UGxlYXNlIHRlbGwgbWUgd2hhdCBoYXBwZW5lZCBpbiBhIGZldyB3b3JkcywgZG9uJ3QgZ28gaW50byBkZXRhaWxzLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgbnotcm93IFtuelR5cGVdPVwiJ2ZsZXgnXCIgW256SnVzdGlmeV09XCInY2VudGVyJ1wiIFtuekFsaWduXT1cIidtaWRkbGUnXCIgY2xhc3M9XCJweS1zbSBwb2ludFwiPlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjRcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPG56LWF2YXRhciBbbnpTcmNdPVwiJy4vYXNzZXRzL3RtcC9pbWcvNS5wbmcnXCI+PC9uei1hdmF0YXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjIwXCI+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5KZWZmZXJzb248L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iMFwiPlBsZWFzZSB0ZWxsIG1lIHdoYXQgaGFwcGVuZWQgaW4gYSBmZXcgd29yZHMsIGRvbid0IGdvIGludG8gZGV0YWlscy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IG56LXJvdz5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCIyNFwiIGNsYXNzPVwicHQtbWQgYm9yZGVyLXRvcC0xIHRleHQtY2VudGVyIHRleHQtZ3JleSBwb2ludFwiPlxyXG4gICAgICAgICAgICAgIFNlZSBBbGxcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L256LWNhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uei1kcm9wZG93bi1tZW51PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJUYXNrQ29tcG9uZW50IHtcclxuICBsb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBjaGFuZ2UoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==