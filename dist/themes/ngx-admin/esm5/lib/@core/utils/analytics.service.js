/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/utils/analytics.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    /**
     * @return {?}
     */
    AnalyticsService.prototype.trackPageViews = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.enabled) {
            this.router.events.pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof NavigationEnd; })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            }));
        }
    };
    /**
     * @param {?} eventName
     * @return {?}
     */
    AnalyticsService.prototype.trackEvent = /**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    AnalyticsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AnalyticsService.ctorParameters = function () { return [
        { type: Location },
        { type: Router }
    ]; };
    return AnalyticsService;
}());
export { AnalyticsService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL3V0aWxzL2FuYWx5dGljcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEM7SUFJRSwwQkFBb0IsUUFBa0IsRUFBVSxNQUFjO1FBQTFDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCx5Q0FBYzs7O0lBQWQ7UUFBQSxpQkFTQztRQVJDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLE1BQU07Ozs7WUFBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssWUFBWSxhQUFhLEVBQTlCLENBQThCLEVBQUMsQ0FDbEQ7aUJBQ0UsU0FBUzs7O1lBQUM7Z0JBQ1QsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDSCxDQUFDOzs7OztJQUVELHFDQUFVOzs7O0lBQVYsVUFBVyxTQUFpQjtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOztnQkF2QkYsVUFBVTs7OztnQkFMRixRQUFRO2dCQURPLE1BQU07O0lBOEI5Qix1QkFBQztDQUFBLEFBeEJELElBd0JDO1NBdkJZLGdCQUFnQjs7Ozs7O0lBQzNCLG1DQUF5Qjs7Ozs7SUFFYixvQ0FBMEI7Ozs7O0lBQUUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmRlY2xhcmUgY29uc3QgZ2E6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tQYWdlVmlld3MoKSB7XHJcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxyXG4gICAgICAgIGZpbHRlcigoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXHJcbiAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIGdhKCdzZW5kJywge2hpdFR5cGU6ICdwYWdldmlldycsIHBhZ2U6IHRoaXMubG9jYXRpb24ucGF0aCgpfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgZXZlbnROYW1lKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19