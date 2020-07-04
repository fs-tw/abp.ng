import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';
let HeaderSearchComponent = class HeaderSearchComponent {
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
};
__decorate([
    HostBinding('class.alain-default__search-focus'),
    __metadata("design:type", Object)
], HeaderSearchComponent.prototype, "focus", void 0);
__decorate([
    HostBinding('class.alain-default__search-toggled'),
    __metadata("design:type", Object)
], HeaderSearchComponent.prototype, "searchToggled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], HeaderSearchComponent.prototype, "toggleChange", null);
HeaderSearchComponent = __decorate([
    Component({
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
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], HeaderSearchComponent);
export { HeaderSearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lcy9uZy1hbGFpbi9sYXlvdXQvc3JjL2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpQmxILElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBcUJoQyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQWZsQyxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBR2Qsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFZZSxDQUFDO0lBVHRDLElBQUksWUFBWSxDQUFDLEtBQWM7UUFDN0IsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7WUFDaEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUlELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBNkIsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFxQixDQUFDO0lBQ3JHLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQTtBQTdCQztJQURDLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQzs7b0RBQ25DO0FBR2Q7SUFEQyxXQUFXLENBQUMscUNBQXFDLENBQUM7OzREQUM3QjtBQUd0QjtJQURDLEtBQUssRUFBRTs7O3lEQVFQO0FBbkJVLHFCQUFxQjtJQWZqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDtRQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBc0J3QixVQUFVO0dBckJ2QixxQkFBcUIsQ0FtQ2pDO1NBbkNZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdoZWFkZXItc2VhcmNoJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56LWlucHV0LWdyb3VwIFtuekFkZE9uQmVmb3JlSWNvbl09XCJmb2N1cyA/ICdhcnJvdy1kb3duJyA6ICdzZWFyY2gnXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIG56LWlucHV0XHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJxXCJcclxuICAgICAgICAoZm9jdXMpPVwicUZvY3VzKClcIlxyXG4gICAgICAgIChibHVyKT1cInFCbHVyKClcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInbWVudS5zZWFyY2gucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcclxuICAgICAgLz5cclxuICAgIDwvbnotaW5wdXQtZ3JvdXA+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlclNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIHE6IHN0cmluZztcclxuXHJcbiAgcUlwdDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbGFpbi1kZWZhdWx0X19zZWFyY2gtZm9jdXMnKVxyXG4gIGZvY3VzID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWxhaW4tZGVmYXVsdF9fc2VhcmNoLXRvZ2dsZWQnKVxyXG4gIHNlYXJjaFRvZ2dsZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdG9nZ2xlQ2hhbmdlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlYXJjaFRvZ2dsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5mb2N1cyA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucUlwdC5mb2N1cygpLCAzMDApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5xSXB0ID0gKHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignLmFudC1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBxRm9jdXMoKSB7XHJcbiAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHFCbHVyKCkge1xyXG4gICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWFyY2hUb2dnbGVkID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==