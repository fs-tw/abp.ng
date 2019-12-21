/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/stats-bar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { StatsBarData } from '../data/stats-bar';
var StatsBarService = /** @class */ (function (_super) {
    tslib_1.__extends(StatsBarService, _super);
    function StatsBarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statsBarData = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    StatsBarService.prototype.getStatsBarData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.statsBarData);
    };
    StatsBarService.decorators = [
        { type: Injectable }
    ];
    return StatsBarService;
}(StatsBarData));
export { StatsBarService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StatsBarService.prototype.statsBarData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMtYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL21vY2svc3RhdHMtYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQ7SUFDcUMsMkNBQVk7SUFEakQ7UUFBQSxxRUFXQztRQVJTLGtCQUFZLEdBQWE7WUFDL0IsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1NBQ25CLENBQUM7O0lBS0osQ0FBQzs7OztJQUhDLHlDQUFlOzs7SUFBZjtRQUNFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkFWRixVQUFVOztJQVdYLHNCQUFDO0NBQUEsQUFYRCxDQUNxQyxZQUFZLEdBVWhEO1NBVlksZUFBZTs7Ozs7O0lBRTFCLHVDQUdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3RhdHNCYXJEYXRhIH0gZnJvbSAnLi4vZGF0YS9zdGF0cy1iYXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RhdHNCYXJTZXJ2aWNlIGV4dGVuZHMgU3RhdHNCYXJEYXRhIHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0c0JhckRhdGE6IG51bWJlcltdID0gW1xyXG4gICAgMzAwLCA1MjAsIDQzNSwgNTMwLFxyXG4gICAgNzMwLCA2MjAsIDY2MCwgODYwLFxyXG4gIF07XHJcblxyXG4gIGdldFN0YXRzQmFyRGF0YSgpOiBPYnNlcnZhYmxlPG51bWJlcltdPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuc3RhdHNCYXJEYXRhKTtcclxuICB9XHJcbn1cclxuIl19