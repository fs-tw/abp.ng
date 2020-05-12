/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/application-layout/application-layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { takeUntilDestroy } from '@abp/ng.core';
import { collapseWithMargin, slideFromBottom } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var ApplicationLayoutComponent = /** @class */ (function () {
    function ApplicationLayoutComponent(store) {
        this.store = store;
        this.isCollapsed = true;
        // do not set true or false
        this.logoComponentKey = "Theme.LogoComponent" /* Logo */;
        this.routesComponentKey = "Theme.RoutesComponent" /* Routes */;
        this.navItemsComponentKey = "Theme.NavItemsComponent" /* NavItems */;
    }
    /**
     * @private
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.checkWindowWidth = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (window.innerWidth < 768) {
                _this.isDropdownChildDynamic = false;
                if (_this.smallScreen === false) {
                    _this.isCollapsed = false;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.isCollapsed = true;
                    }), 100);
                }
                _this.smallScreen = true;
            }
            else {
                _this.isDropdownChildDynamic = true;
                _this.smallScreen = false;
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkWindowWidth();
        fromEvent(window, 'resize')
            .pipe(takeUntilDestroy(this), debounceTime(150))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.checkWindowWidth();
        }));
    };
    /**
     * @return {?}
     */
    ApplicationLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    // required for dynamic component
    ApplicationLayoutComponent.type = "application" /* application */;
    ApplicationLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-layout-application',
                    template: "<nav\r\n  class=\"navbar navbar-expand-lg navbar-dark bg-dark shadow-sm flex-column flex-md-row mb-4\"\r\n  id=\"main-navbar\"\r\n  style=\"min-height: 4rem;\"\r\n>\r\n  <div class=\"container\">\r\n    <abp-logo *abpReplaceableTemplate=\"{ componentKey: logoComponentKey }\"></abp-logo>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      (click)=\"isCollapsed = !isCollapsed\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse\" [class.overflow-hidden]=\"smallScreen\" id=\"main-navbar-collapse\">\r\n      <ng-container *ngTemplateOutlet=\"!smallScreen ? navigations : null\"></ng-container>\r\n\r\n      <div *ngIf=\"smallScreen\" [@collapseWithMargin]=\"isCollapsed ? 'collapsed' : 'expanded'\">\r\n        <ng-container *ngTemplateOutlet=\"navigations\"></ng-container>\r\n      </div>\r\n\r\n      <ng-template #navigations>\r\n        <abp-routes\r\n          *abpReplaceableTemplate=\"{ componentKey: routesComponentKey }\"\r\n          class=\"mx-auto\"\r\n          [smallScreen]=\"smallScreen\"\r\n          [isDropdownChildDynamic]=\"isDropdownChildDynamic\"\r\n        ></abp-routes>\r\n\r\n        <abp-nav-items\r\n          *abpReplaceableTemplate=\"{ componentKey: navItemsComponentKey }\"\r\n          [smallScreen]=\"smallScreen\"\r\n        ></abp-nav-items>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div\r\n  [@slideFromBottom]=\"\r\n    outlet && outlet.isActivated && outlet.activatedRoute && outlet.activatedRoute.routeConfig.path\r\n  \"\r\n  class=\"container\"\r\n>\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n",
                    animations: [slideFromBottom, collapseWithMargin]
                }] }
    ];
    /** @nocollapse */
    ApplicationLayoutComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ApplicationLayoutComponent;
}());
export { ApplicationLayoutComponent };
if (false) {
    /** @type {?} */
    ApplicationLayoutComponent.type;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.isDropdownChildDynamic;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.isCollapsed;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.smallScreen;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.logoComponentKey;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.routesComponentKey;
    /** @type {?} */
    ApplicationLayoutComponent.prototype.navItemsComponentKey;
    /**
     * @type {?}
     * @private
     */
    ApplicationLayoutComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuYmFzaWMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1sYXlvdXQvYXBwbGljYXRpb24tbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBZSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFpQixTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc5QztJQXFCRSxvQ0FBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87UUFWaEMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7O1FBSW5CLHFCQUFnQixvQ0FBOEI7UUFFOUMsdUJBQWtCLHdDQUFnQztRQUVsRCx5QkFBb0IsNENBQWtDO0lBRW5CLENBQUM7Ozs7O0lBRTVCLHFEQUFnQjs7OztJQUF4QjtRQUFBLGlCQWdCQztRQWZDLFVBQVU7OztRQUFDO1lBQ1QsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztnQkFDcEMsSUFBSSxLQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtvQkFDOUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLFVBQVU7OztvQkFBQzt3QkFDVCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDMUIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNUO2dCQUNELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7OztJQUVELG9EQUFlOzs7SUFBZjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMvQyxTQUFTOzs7UUFBQztZQUNULEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELGdEQUFXOzs7SUFBWCxjQUFlLENBQUM7O0lBNUNULCtCQUFJLG1DQUEyQjs7Z0JBUHZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxndERBQWtEO29CQUNsRCxVQUFVLEVBQUUsQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUM7aUJBQ2xEOzs7O2dCQVRRLEtBQUs7O0lBeURkLGlDQUFDO0NBQUEsQUFwREQsSUFvREM7U0EvQ1ksMEJBQTBCOzs7SUFFckMsZ0NBQXNDOztJQUV0Qyw0REFBZ0M7O0lBRWhDLGlEQUFtQjs7SUFFbkIsaURBQXFCOztJQUVyQixzREFBOEM7O0lBRTlDLHdEQUFrRDs7SUFFbEQsMERBQXNEOzs7OztJQUUxQywyQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlTGF5b3V0VHlwZSwgdGFrZVVudGlsRGVzdHJveSB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IGNvbGxhcHNlV2l0aE1hcmdpbiwgc2xpZGVGcm9tQm90dG9tIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZVRoZW1lQmFzaWNDb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vZW51bXMvY29tcG9uZW50cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FicC1sYXlvdXQtYXBwbGljYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHBsaWNhdGlvbi1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUZyb21Cb3R0b20sIGNvbGxhcHNlV2l0aE1hcmdpbl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbkxheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8gcmVxdWlyZWQgZm9yIGR5bmFtaWMgY29tcG9uZW50XHJcbiAgc3RhdGljIHR5cGUgPSBlTGF5b3V0VHlwZS5hcHBsaWNhdGlvbjtcclxuXHJcbiAgaXNEcm9wZG93bkNoaWxkRHluYW1pYzogYm9vbGVhbjtcclxuXHJcbiAgaXNDb2xsYXBzZWQgPSB0cnVlO1xyXG5cclxuICBzbWFsbFNjcmVlbjogYm9vbGVhbjsgLy8gZG8gbm90IHNldCB0cnVlIG9yIGZhbHNlXHJcblxyXG4gIGxvZ29Db21wb25lbnRLZXkgPSBlVGhlbWVCYXNpY0NvbXBvbmVudHMuTG9nbztcclxuXHJcbiAgcm91dGVzQ29tcG9uZW50S2V5ID0gZVRoZW1lQmFzaWNDb21wb25lbnRzLlJvdXRlcztcclxuXHJcbiAgbmF2SXRlbXNDb21wb25lbnRLZXkgPSBlVGhlbWVCYXNpY0NvbXBvbmVudHMuTmF2SXRlbXM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBwcml2YXRlIGNoZWNrV2luZG93V2lkdGgoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XHJcbiAgICAgICAgdGhpcy5pc0Ryb3Bkb3duQ2hpbGREeW5hbWljID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuc21hbGxTY3JlZW4gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNtYWxsU2NyZWVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzRHJvcGRvd25DaGlsZER5bmFtaWMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc21hbGxTY3JlZW4gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNoZWNrV2luZG93V2lkdGgoKTtcclxuXHJcbiAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveSh0aGlzKSwgZGVib3VuY2VUaW1lKDE1MCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tXaW5kb3dXaWR0aCgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxufVxyXG4iXX0=