import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';
let HeaderFullScreenComponent = class HeaderFullScreenComponent {
    constructor() {
        this.status = false;
    }
    get sf() {
        return screenfull;
    }
    _resize() {
        this.status = this.sf.isFullscreen;
    }
    _click() {
        if (this.sf.isEnabled) {
            this.sf.toggle();
        }
    }
};
__decorate([
    HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeaderFullScreenComponent.prototype, "_resize", null);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeaderFullScreenComponent.prototype, "_click", null);
HeaderFullScreenComponent = __decorate([
    Component({
        selector: 'header-fullscreen',
        template: `
    <i nz-icon [nzType]="status ? 'fullscreen-exit' : 'fullscreen'"></i>
    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  `,
        // tslint:disable-next-line: no-host-metadata-property
        host: {
            '[class.d-block]': 'true',
        },
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], HeaderFullScreenComponent);
export { HeaderFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi90aGVtZXMvbmctYWxhaW4vbGF5b3V0L3NyYy9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL2Z1bGxzY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksQ0FBQztBQWN6QyxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUF0QztRQUNFLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFnQmpCLENBQUM7SUFmQyxJQUFZLEVBQUU7UUFDWixPQUFPLFVBQW1DLENBQUM7SUFDN0MsQ0FBQztJQUdELE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFHRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFWQztJQURDLFlBQVksQ0FBQyxlQUFlLENBQUM7Ozs7d0RBRzdCO0FBR0Q7SUFEQyxZQUFZLENBQUMsT0FBTyxDQUFDOzs7O3VEQUtyQjtBQWhCVSx5QkFBeUI7SUFackMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUU7OztHQUdUO1FBQ0Qsc0RBQXNEO1FBQ3RELElBQUksRUFBRTtZQUNKLGlCQUFpQixFQUFFLE1BQU07U0FDMUI7UUFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1cseUJBQXlCLENBaUJyQztTQWpCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgc2NyZWVuZnVsbCBmcm9tICdzY3JlZW5mdWxsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaGVhZGVyLWZ1bGxzY3JlZW4nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aSBuei1pY29uIFtuelR5cGVdPVwic3RhdHVzID8gJ2Z1bGxzY3JlZW4tZXhpdCcgOiAnZnVsbHNjcmVlbidcIj48L2k+XHJcbiAgICB7eyAoc3RhdHVzID8gJ21lbnUuZnVsbHNjcmVlbi5leGl0JyA6ICdtZW51LmZ1bGxzY3JlZW4nKSB8IHRyYW5zbGF0ZSB9fVxyXG4gIGAsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5kLWJsb2NrXSc6ICd0cnVlJyxcclxuICB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyRnVsbFNjcmVlbkNvbXBvbmVudCB7XHJcbiAgc3RhdHVzID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBnZXQgc2YoKTogc2NyZWVuZnVsbC5TY3JlZW5mdWxsIHtcclxuICAgIHJldHVybiBzY3JlZW5mdWxsIGFzIHNjcmVlbmZ1bGwuU2NyZWVuZnVsbDtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxyXG4gIF9yZXNpemUoKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuc2YuaXNGdWxsc2NyZWVuO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIF9jbGljaygpIHtcclxuICAgIGlmICh0aGlzLnNmLmlzRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLnNmLnRvZ2dsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=