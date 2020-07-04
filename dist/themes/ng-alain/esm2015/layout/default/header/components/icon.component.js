import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
let HeaderIconComponent = class HeaderIconComponent {
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
HeaderIconComponent = __decorate([
    Component({
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
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], HeaderIconComponent);
export { HeaderIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMER0RixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUc5QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUYxQyxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBRThCLENBQUM7SUFFOUMsTUFBTTtRQUNKLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7Q0FDRixDQUFBO0FBWFksbUJBQW1CO0lBeEQvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1EVDtRQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBSXlCLGlCQUFpQjtHQUgvQixtQkFBbUIsQ0FXL0I7U0FYWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWFkZXItaWNvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtaXRlbVwiXHJcbiAgICAgIG56LWRyb3Bkb3duXHJcbiAgICAgIFtuekRyb3Bkb3duTWVudV09XCJpY29uTWVudVwiXHJcbiAgICAgIG56VHJpZ2dlcj1cImNsaWNrXCJcclxuICAgICAgbnpQbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiXHJcbiAgICAgIChuelZpc2libGVDaGFuZ2UpPVwiY2hhbmdlKClcIlxyXG4gICAgPlxyXG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImFwcHN0b3JlXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bnotZHJvcGRvd24tbWVudSAjaWNvbk1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxyXG4gICAgICA8ZGl2IG56LW1lbnUgY2xhc3M9XCJ3ZC14bCBhbmltYXRlZCBqZWxsb1wiPlxyXG4gICAgICAgIDxuei1zcGluIFtuelNwaW5uaW5nXT1cImxvYWRpbmdcIiBbbnpUaXBdPVwiJ+ato+WcqOivu+WPluaVsOaNri4uLidcIj5cclxuICAgICAgICAgIDxkaXYgbnotcm93IFtuelR5cGVdPVwiJ2ZsZXgnXCIgW256SnVzdGlmeV09XCInY2VudGVyJ1wiIFtuekFsaWduXT1cIidtaWRkbGUnXCIgY2xhc3M9XCJhcHAtaWNvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjYWxlbmRhclwiIGNsYXNzPVwiYmctZXJyb3IgdGV4dC13aGl0ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c21hbGw+Q2FsZW5kYXI8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJmaWxlXCIgY2xhc3M9XCJiZy1nZWVrYmx1ZSB0ZXh0LXdoaXRlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzbWFsbD5GaWxlczwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjZcIj5cclxuICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3VkXCIgY2xhc3M9XCJiZy1zdWNjZXNzIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPkNsb3VkPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwic3RhclwiIGNsYXNzPVwiYmctbWFnZW50YSB0ZXh0LXdoaXRlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzbWFsbD5TdGFyPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwidGVhbVwiIGNsYXNzPVwiYmctcHVycGxlIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPlRlYW08L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJzY2FuXCIgY2xhc3M9XCJiZy13YXJuaW5nIHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPlFSPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwicGF5LWNpcmNsZVwiIGNsYXNzPVwiYmctY3lhbiB0ZXh0LXdoaXRlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzbWFsbD5QYXk8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJwcmludGVyXCIgY2xhc3M9XCJiZy1ncmV5IHRleHQtd2hpdGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPlByaW50PC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L256LXNwaW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uei1kcm9wZG93bi1tZW51PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJJY29uQ29tcG9uZW50IHtcclxuICBsb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBjaGFuZ2UoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==