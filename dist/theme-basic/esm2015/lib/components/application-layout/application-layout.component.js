import { __decorate, __metadata } from "tslib";
import { SubscriptionService } from '@abp/ng.core';
import { collapseWithMargin, slideFromBottom } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
let ApplicationLayoutComponent = class ApplicationLayoutComponent {
    constructor(subscription) {
        this.subscription = subscription;
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
        const resize$ = fromEvent(window, 'resize').pipe(debounceTime(150));
        this.subscription.addOne(resize$, () => this.checkWindowWidth());
    }
    ngOnDestroy() { }
};
// required for dynamic component
ApplicationLayoutComponent.type = "application" /* application */;
ApplicationLayoutComponent = __decorate([
    Component({
        selector: 'abp-layout-application',
        template: "<nav\r\n  class=\"navbar navbar-expand-lg navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4\"\r\n  id=\"main-navbar\"\r\n  style=\"min-height: 4rem;\"\r\n>\r\n  <div class=\"container\">\r\n    <abp-logo *abpReplaceableTemplate=\"{ componentKey: logoComponentKey }\"></abp-logo>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      (click)=\"isCollapsed = !isCollapsed\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [class.overflow-hidden]=\"smallScreen\" id=\"main-navbar-collapse\">\r\n      <ng-container *ngTemplateOutlet=\"!smallScreen ? navigations : null\"></ng-container>\r\n\r\n      <div *ngIf=\"smallScreen\" [@collapseWithMargin]=\"isCollapsed ? 'collapsed' : 'expanded'\">\r\n        <ng-container *ngTemplateOutlet=\"navigations\"></ng-container>\r\n      </div>\r\n\r\n      <ng-template #navigations>\r\n        <abp-routes\r\n          *abpReplaceableTemplate=\"{\r\n            componentKey: routesComponentKey,\r\n            inputs: {\r\n              smallScreen: { value: smallScreen }\r\n            }\r\n          }\"\r\n          class=\"mx-auto\"\r\n          [smallScreen]=\"smallScreen\"\r\n        ></abp-routes>\r\n\r\n        <abp-nav-items\r\n          *abpReplaceableTemplate=\"{\r\n            componentKey: navItemsComponentKey\r\n          }\"\r\n        ></abp-nav-items>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- [@slideFromBottom]=\"outlet.isActivated && outlet.activatedRoute?.routeConfig?.path\" TODO: throws ExpressionChangedAfterItHasBeenCheck when animation is active. It should be fixed -->\r\n<div class=\"container\">\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n",
        animations: [slideFromBottom, collapseWithMargin],
        providers: [SubscriptionService]
    }),
    __metadata("design:paramtypes", [SubscriptionService])
], ApplicationLayoutComponent);
export { ApplicationLayoutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lLWJhc2ljL3NyYy9saWIvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1sYXlvdXQvYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQWlCLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVM5QyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQWNyQyxZQUFvQixZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFWckQsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFJbkIscUJBQWdCLG9DQUE4QjtRQUU5Qyx1QkFBa0Isd0NBQWdDO1FBRWxELHlCQUFvQiw0Q0FBa0M7SUFFRSxDQUFDO0lBRWpELGdCQUFnQjtRQUN0QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtnQkFDM0IsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtvQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQzFCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDVDtnQkFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMxQjtRQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELFdBQVcsS0FBSSxDQUFDO0NBQ2pCLENBQUE7QUF2Q0MsaUNBQWlDO0FBQzFCLCtCQUFJLG1DQUEyQjtBQUYzQiwwQkFBMEI7SUFOdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQywweURBQWtEO1FBQ2xELFVBQVUsRUFBRSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztRQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUNqQyxDQUFDO3FDQWVrQyxtQkFBbUI7R0FkMUMsMEJBQTBCLENBd0N0QztTQXhDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlTGF5b3V0VHlwZSwgU3Vic2NyaXB0aW9uU2VydmljZSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IGNvbGxhcHNlV2l0aE1hcmdpbiwgc2xpZGVGcm9tQm90dG9tIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBlVGhlbWVCYXNpY0NvbXBvbmVudHMgfSBmcm9tICcuLi8uLi9lbnVtcy9jb21wb25lbnRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWxheW91dC1hcHBsaWNhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcGxpY2F0aW9uLWxheW91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlRnJvbUJvdHRvbSwgY29sbGFwc2VXaXRoTWFyZ2luXSxcclxuICBwcm92aWRlcnM6IFtTdWJzY3JpcHRpb25TZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAvLyByZXF1aXJlZCBmb3IgZHluYW1pYyBjb21wb25lbnRcclxuICBzdGF0aWMgdHlwZSA9IGVMYXlvdXRUeXBlLmFwcGxpY2F0aW9uO1xyXG5cclxuICBpc0NvbGxhcHNlZCA9IHRydWU7XHJcblxyXG4gIHNtYWxsU2NyZWVuOiBib29sZWFuOyAvLyBkbyBub3Qgc2V0IHRydWUgb3IgZmFsc2VcclxuXHJcbiAgbG9nb0NvbXBvbmVudEtleSA9IGVUaGVtZUJhc2ljQ29tcG9uZW50cy5Mb2dvO1xyXG5cclxuICByb3V0ZXNDb21wb25lbnRLZXkgPSBlVGhlbWVCYXNpY0NvbXBvbmVudHMuUm91dGVzO1xyXG5cclxuICBuYXZJdGVtc0NvbXBvbmVudEtleSA9IGVUaGVtZUJhc2ljQ29tcG9uZW50cy5OYXZJdGVtcztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tXaW5kb3dXaWR0aCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5OTIpIHtcclxuICAgICAgICBpZiAodGhpcy5zbWFsbFNjcmVlbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc21hbGxTY3JlZW4gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc21hbGxTY3JlZW4gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNoZWNrV2luZG93V2lkdGgoKTtcclxuXHJcbiAgICBjb25zdCByZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoZGVib3VuY2VUaW1lKDE1MCkpO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkT25lKHJlc2l6ZSQsICgpID0+IHRoaXMuY2hlY2tXaW5kb3dXaWR0aCgpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxufVxyXG4iXX0=