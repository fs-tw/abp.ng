/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/visitors-analytics.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { PeriodsService } from './periods.service';
import { VisitorsAnalyticsData } from '../data/visitors-analytics';
var VisitorsAnalyticsService = /** @class */ (function (_super) {
    tslib_1.__extends(VisitorsAnalyticsService, _super);
    function VisitorsAnalyticsService(periodService) {
        var _this = _super.call(this) || this;
        _this.periodService = periodService;
        _this.pieChartValue = 75;
        _this.innerLinePoints = [
            94, 188, 225, 244, 253, 254, 249, 235, 208,
            173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
            183, 224, 265, 302, 333, 358, 375, 388, 395,
            400, 400, 397, 390, 377, 360, 338, 310, 278,
            241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
        ];
        _this.outerLinePoints = [
            85, 71, 59, 50, 45, 42, 41, 44, 58, 88,
            136, 199, 267, 326, 367, 391, 400, 397,
            376, 319, 200, 104, 60, 41, 36, 37, 44,
            55, 74, 100, 131, 159, 180, 193, 199, 200,
            195, 184, 164, 135, 103, 73, 50, 33, 22, 15, 11,
        ];
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    VisitorsAnalyticsService.prototype.generateOutlineLineData = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var months = this.periodService.getMonths();
        /** @type {?} */
        var outerLinePointsLength = this.outerLinePoints.length;
        /** @type {?} */
        var monthsLength = months.length;
        return this.outerLinePoints.map((/**
         * @param {?} p
         * @param {?} index
         * @return {?}
         */
        function (p, index) {
            /** @type {?} */
            var monthIndex = Math.round(index / 4);
            /** @type {?} */
            var label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
                ? months[monthIndex]
                : '';
            return {
                label: label,
                value: p,
            };
        }));
    };
    /**
     * @return {?}
     */
    VisitorsAnalyticsService.prototype.getInnerLineChartData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.innerLinePoints);
    };
    /**
     * @return {?}
     */
    VisitorsAnalyticsService.prototype.getOutlineLineChartData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.generateOutlineLineData());
    };
    /**
     * @return {?}
     */
    VisitorsAnalyticsService.prototype.getPieChartData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.pieChartValue);
    };
    VisitorsAnalyticsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VisitorsAnalyticsService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return VisitorsAnalyticsService;
}(VisitorsAnalyticsData));
export { VisitorsAnalyticsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VisitorsAnalyticsService.prototype.pieChartValue;
    /**
     * @type {?}
     * @private
     */
    VisitorsAnalyticsService.prototype.innerLinePoints;
    /**
     * @type {?}
     * @private
     */
    VisitorsAnalyticsService.prototype.outerLinePoints;
    /**
     * @type {?}
     * @private
     */
    VisitorsAnalyticsService.prototype.periodService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvcnMtYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL21vY2svdmlzaXRvcnMtYW5hbHl0aWNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFlLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEY7SUFDOEMsb0RBQXFCO0lBRWpFLGtDQUFvQixhQUE2QjtRQUFqRCxZQUNFLGlCQUFPLFNBQ1I7UUFGbUIsbUJBQWEsR0FBYixhQUFhLENBQWdCO1FBSXpDLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLHFCQUFlLEdBQWE7WUFDbEMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQzFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDN0MsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQzNDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUMzQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUM5QyxDQUFDO1FBQ00scUJBQWUsR0FBYTtZQUNsQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHLEVBQUUsRUFBRSxFQUFFO1lBQ3ZDLEdBQUcsRUFBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQ3ZDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUN0QyxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDMUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7U0FDaEQsQ0FBQzs7SUFoQkYsQ0FBQzs7Ozs7SUFpQk8sMERBQXVCOzs7O0lBQS9COztZQUNRLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTs7WUFDdkMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNOztZQUNuRCxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU07UUFFbEMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUc7Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSzs7Z0JBQ2pDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O2dCQUNsQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNwQixDQUFDLENBQUMsRUFBRTtZQUVOLE9BQU87Z0JBQ0wsS0FBSyxPQUFBO2dCQUNMLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHdEQUFxQjs7O0lBQXJCO1FBQ0UsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCwwREFBdUI7OztJQUF2QjtRQUNFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELGtEQUFlOzs7SUFBZjtRQUNFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFsREYsVUFBVTs7OztnQkFIRixjQUFjOztJQXNEdkIsK0JBQUM7Q0FBQSxBQW5ERCxDQUM4QyxxQkFBcUIsR0FrRGxFO1NBbERZLHdCQUF3Qjs7Ozs7O0lBTW5DLGlEQUEyQjs7Ozs7SUFDM0IsbURBTUU7Ozs7O0lBQ0YsbURBTUU7Ozs7O0lBbEJVLGlEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcmlvZHNTZXJ2aWNlIH0gZnJvbSAnLi9wZXJpb2RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPdXRsaW5lRGF0YSwgVmlzaXRvcnNBbmFseXRpY3NEYXRhIH0gZnJvbSAnLi4vZGF0YS92aXNpdG9ycy1hbmFseXRpY3MnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmlzaXRvcnNBbmFseXRpY3NTZXJ2aWNlIGV4dGVuZHMgVmlzaXRvcnNBbmFseXRpY3NEYXRhIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJpb2RTZXJ2aWNlOiBQZXJpb2RzU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGllQ2hhcnRWYWx1ZSA9IDc1O1xyXG4gIHByaXZhdGUgaW5uZXJMaW5lUG9pbnRzOiBudW1iZXJbXSA9IFtcclxuICAgIDk0LCAxODgsIDIyNSwgMjQ0LCAyNTMsIDI1NCwgMjQ5LCAyMzUsIDIwOCxcclxuICAgIDE3MywgMTQxLCAxMTgsIDEwNSwgOTcsIDk0LCA5NiwgMTA0LCAxMjEsIDE0NyxcclxuICAgIDE4MywgMjI0LCAyNjUsIDMwMiwgMzMzLCAzNTgsIDM3NSwgMzg4LCAzOTUsXHJcbiAgICA0MDAsIDQwMCwgMzk3LCAzOTAsIDM3NywgMzYwLCAzMzgsIDMxMCwgMjc4LFxyXG4gICAgMjQxLCAyMDQsIDE2NiwgMTMwLCA5OCwgNzEsIDQ5LCAzMiwgMjAsIDEzLCA5LFxyXG4gIF07XHJcbiAgcHJpdmF0ZSBvdXRlckxpbmVQb2ludHM6IG51bWJlcltdID0gW1xyXG4gICAgODUsIDcxLCA1OSwgNTAsIDQ1LCA0MiwgNDEsIDQ0ICwgNTgsIDg4LFxyXG4gICAgMTM2ICwgMTk5LCAyNjcsIDMyNiwgMzY3LCAzOTEsIDQwMCwgMzk3LFxyXG4gICAgMzc2LCAzMTksIDIwMCwgMTA0LCA2MCwgNDEsIDM2LCAzNywgNDQsXHJcbiAgICA1NSwgNzQsIDEwMCAsIDEzMSwgMTU5LCAxODAsIDE5MywgMTk5LCAyMDAsXHJcbiAgICAxOTUsIDE4NCwgMTY0LCAxMzUsIDEwMywgNzMsIDUwLCAzMywgMjIsIDE1LCAxMSxcclxuICBdO1xyXG4gIHByaXZhdGUgZ2VuZXJhdGVPdXRsaW5lTGluZURhdGEoKTogT3V0bGluZURhdGFbXSB7XHJcbiAgICBjb25zdCBtb250aHMgPSB0aGlzLnBlcmlvZFNlcnZpY2UuZ2V0TW9udGhzKCk7XHJcbiAgICBjb25zdCBvdXRlckxpbmVQb2ludHNMZW5ndGggPSB0aGlzLm91dGVyTGluZVBvaW50cy5sZW5ndGg7XHJcbiAgICBjb25zdCBtb250aHNMZW5ndGggPSBtb250aHMubGVuZ3RoO1xyXG5cclxuICAgIHJldHVybiB0aGlzLm91dGVyTGluZVBvaW50cy5tYXAoKHAsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IG1vbnRoSW5kZXggPSBNYXRoLnJvdW5kKGluZGV4IC8gNCk7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gKGluZGV4ICUgTWF0aC5yb3VuZChvdXRlckxpbmVQb2ludHNMZW5ndGggLyBtb250aHNMZW5ndGgpID09PSAwKVxyXG4gICAgICAgID8gbW9udGhzW21vbnRoSW5kZXhdXHJcbiAgICAgICAgOiAnJztcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgdmFsdWU6IHAsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldElubmVyTGluZUNoYXJ0RGF0YSgpOiBPYnNlcnZhYmxlPG51bWJlcltdPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuaW5uZXJMaW5lUG9pbnRzKTtcclxuICB9XHJcblxyXG4gIGdldE91dGxpbmVMaW5lQ2hhcnREYXRhKCk6IE9ic2VydmFibGU8T3V0bGluZURhdGFbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmdlbmVyYXRlT3V0bGluZUxpbmVEYXRhKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGllQ2hhcnREYXRhKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMucGllQ2hhcnRWYWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==