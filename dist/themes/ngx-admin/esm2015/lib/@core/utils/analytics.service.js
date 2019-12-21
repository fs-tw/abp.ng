/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/analytics.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
export class AnalyticsService {
    /**
     * @param {?} location
     * @param {?} router
     */
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    /**
     * @return {?}
     */
    trackPageViews() {
        if (this.enabled) {
            this.router.events.pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            (event) => event instanceof NavigationEnd)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                ga('send', { hitType: 'pageview', page: this.location.path() });
            }));
        }
    }
    /**
     * @param {?} eventName
     * @return {?}
     */
    trackEvent(eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    }
}
AnalyticsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AnalyticsService.ctorParameters = () => [
    { type: Location },
    { type: Router }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AnalyticsService.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    AnalyticsService.prototype.location;
    /**
     * @type {?}
     * @private
     */
    AnalyticsService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL3V0aWxzL2FuYWx5dGljcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLeEMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFHM0IsWUFBb0IsUUFBa0IsRUFBVSxNQUFjO1FBQTFDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDckIsTUFBTTs7OztZQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLFlBQVksYUFBYSxFQUFDLENBQ2xEO2lCQUNFLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLFNBQWlCO1FBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7OztZQXZCRixVQUFVOzs7O1lBTEYsUUFBUTtZQURPLE1BQU07Ozs7Ozs7SUFRNUIsbUNBQXlCOzs7OztJQUViLG9DQUEwQjs7Ozs7SUFBRSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBnYTogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5hbHl0aWNzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0cmFja1BhZ2VWaWV3cygpIHtcclxuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcclxuICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgZ2EoJ3NlbmQnLCB7aGl0VHlwZTogJ3BhZ2V2aWV3JywgcGFnZTogdGhpcy5sb2NhdGlvbi5wYXRoKCl9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgZ2EoJ3NlbmQnLCAnZXZlbnQnLCBldmVudE5hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=