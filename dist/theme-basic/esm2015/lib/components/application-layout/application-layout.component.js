import { __decorate } from "tslib";
import { takeUntilDestroy } from '@abp/ng.core';
import { collapseWithMargin, slideFromBottom } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
let ApplicationLayoutComponent = class ApplicationLayoutComponent {
    constructor() {
        this.isCollapsed = true;
        this.logoComponentKey = "Theme.LogoComponent" /* Logo */;
        this.routesComponentKey = "Theme.RoutesComponent" /* Routes */;
        this.navItemsComponentKey = "Theme.NavItemsComponent" /* NavItems */;
    }
    checkWindowWidth() {
        setTimeout(() => {
            if (window.innerWidth < 992) {
                if (this.smallScreen === false) {
                    this.isCollapsed = false;
                    setTimeout(() => {
                        this.isCollapsed = true;
                    }, 100);
                }
                this.smallScreen = true;
            }
            else {
                this.smallScreen = false;
            }
        }, 0);
    }
    ngAfterViewInit() {
        this.checkWindowWidth();
        fromEvent(window, 'resize')
            .pipe(takeUntilDestroy(this), debounceTime(150))
            .subscribe(() => {
            this.checkWindowWidth();
        });
    }
    ngOnDestroy() { }
};
// required for dynamic component
ApplicationLayoutComponent.type = "application" /* application */;
ApplicationLayoutComponent = __decorate([
    Component({
        selector: 'abp-layout-application',
        template: "<nav\r\n  class=\"navbar navbar-expand-lg navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4\"\r\n  id=\"main-navbar\"\r\n  style=\"min-height: 4rem;\"\r\n>\r\n  <div class=\"container\">\r\n    <abp-logo *abpReplaceableTemplate=\"{ componentKey: logoComponentKey }\"></abp-logo>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      (click)=\"isCollapsed = !isCollapsed\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [class.overflow-hidden]=\"smallScreen\" id=\"main-navbar-collapse\">\r\n      <ng-container *ngTemplateOutlet=\"!smallScreen ? navigations : null\"></ng-container>\r\n\r\n      <div *ngIf=\"smallScreen\" [@collapseWithMargin]=\"isCollapsed ? 'collapsed' : 'expanded'\">\r\n        <ng-container *ngTemplateOutlet=\"navigations\"></ng-container>\r\n      </div>\r\n\r\n      <ng-template #navigations>\r\n        <abp-routes\r\n          *abpReplaceableTemplate=\"{\r\n            componentKey: routesComponentKey,\r\n            inputs: {\r\n              smallScreen: { value: smallScreen }\r\n            }\r\n          }\"\r\n          class=\"mx-auto\"\r\n          [smallScreen]=\"smallScreen\"\r\n        ></abp-routes>\r\n\r\n        <abp-nav-items\r\n          *abpReplaceableTemplate=\"{\r\n            componentKey: navItemsComponentKey\r\n          }\"\r\n        ></abp-nav-items>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- [@slideFromBottom]=\"outlet.isActivated && outlet.activatedRoute?.routeConfig?.path\" TODO: throws ExpressionChangedAfterItHasBeenCheck when animation is active. It should be fixed -->\r\n<div class=\"container\">\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n",
        animations: [slideFromBottom, collapseWithMargin]
    })
], ApplicationLayoutComponent);
export { ApplicationLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLWJhc2ljL3NyYy9saWIvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1sYXlvdXQvYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFlLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQWlCLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVE5QyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUF2QztRQUlFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBSW5CLHFCQUFnQixvQ0FBOEI7UUFFOUMsdUJBQWtCLHdDQUFnQztRQUVsRCx5QkFBb0IsNENBQWtDO0lBNkJ4RCxDQUFDO0lBM0JTLGdCQUFnQjtRQUN0QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtnQkFDM0IsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtvQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQzFCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDVDtnQkFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMxQjtRQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMvQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVyxLQUFJLENBQUM7Q0FDakIsQ0FBQTtBQXhDQyxpQ0FBaUM7QUFDMUIsK0JBQUksbUNBQTJCO0FBRjNCLDBCQUEwQjtJQUx0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLDB5REFBa0Q7UUFDbEQsVUFBVSxFQUFFLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDO0tBQ2xELENBQUM7R0FDVywwQkFBMEIsQ0F5Q3RDO1NBekNZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVMYXlvdXRUeXBlLCB0YWtlVW50aWxEZXN0cm95IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgY29sbGFwc2VXaXRoTWFyZ2luLCBzbGlkZUZyb21Cb3R0b20gfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGVUaGVtZUJhc2ljQ29tcG9uZW50cyB9IGZyb20gJy4uLy4uL2VudW1zL2NvbXBvbmVudHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhYnAtbGF5b3V0LWFwcGxpY2F0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVGcm9tQm90dG9tLCBjb2xsYXBzZVdpdGhNYXJnaW5dLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25MYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vIHJlcXVpcmVkIGZvciBkeW5hbWljIGNvbXBvbmVudFxyXG4gIHN0YXRpYyB0eXBlID0gZUxheW91dFR5cGUuYXBwbGljYXRpb247XHJcblxyXG4gIGlzQ29sbGFwc2VkID0gdHJ1ZTtcclxuXHJcbiAgc21hbGxTY3JlZW46IGJvb2xlYW47IC8vIGRvIG5vdCBzZXQgdHJ1ZSBvciBmYWxzZVxyXG5cclxuICBsb2dvQ29tcG9uZW50S2V5ID0gZVRoZW1lQmFzaWNDb21wb25lbnRzLkxvZ287XHJcblxyXG4gIHJvdXRlc0NvbXBvbmVudEtleSA9IGVUaGVtZUJhc2ljQ29tcG9uZW50cy5Sb3V0ZXM7XHJcblxyXG4gIG5hdkl0ZW1zQ29tcG9uZW50S2V5ID0gZVRoZW1lQmFzaWNDb21wb25lbnRzLk5hdkl0ZW1zO1xyXG5cclxuICBwcml2YXRlIGNoZWNrV2luZG93V2lkdGgoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc21hbGxTY3JlZW4gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNtYWxsU2NyZWVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNtYWxsU2NyZWVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jaGVja1dpbmRvd1dpZHRoKCk7XHJcblxyXG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3kodGhpcyksIGRlYm91bmNlVGltZSgxNTApKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNoZWNrV2luZG93V2lkdGgoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcbn1cclxuIl19