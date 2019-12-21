/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/traffic-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { TrafficChartData } from '../data/traffic-chart';
var TrafficChartService = /** @class */ (function (_super) {
    tslib_1.__extends(TrafficChartService, _super);
    function TrafficChartService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    TrafficChartService.prototype.getTrafficChartData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.data);
    };
    TrafficChartService.decorators = [
        { type: Injectable }
    ];
    return TrafficChartService;
}(TrafficChartData));
export { TrafficChartService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TrafficChartService.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy1jaGFydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AY29yZS9tb2NrL3RyYWZmaWMtY2hhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpEO0lBQ3lDLCtDQUFnQjtJQUR6RDtRQUFBLHFFQVdDO1FBUlMsVUFBSSxHQUFhO1lBQ3ZCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztTQUNuQixDQUFDOztJQUtKLENBQUM7Ozs7SUFIQyxpREFBbUI7OztJQUFuQjtRQUNFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFWRixVQUFVOztJQVdYLDBCQUFDO0NBQUEsQUFYRCxDQUN5QyxnQkFBZ0IsR0FVeEQ7U0FWWSxtQkFBbUI7Ozs7OztJQUU5QixtQ0FHRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUcmFmZmljQ2hhcnREYXRhIH0gZnJvbSAnLi4vZGF0YS90cmFmZmljLWNoYXJ0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyYWZmaWNDaGFydFNlcnZpY2UgZXh0ZW5kcyBUcmFmZmljQ2hhcnREYXRhIHtcclxuXHJcbiAgcHJpdmF0ZSBkYXRhOiBudW1iZXJbXSA9IFtcclxuICAgIDMwMCwgNTIwLCA0MzUsIDUzMCxcclxuICAgIDczMCwgNjIwLCA2NjAsIDg2MCxcclxuICBdO1xyXG5cclxuICBnZXRUcmFmZmljQ2hhcnREYXRhKCk6IE9ic2VydmFibGU8bnVtYmVyW10+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5kYXRhKTtcclxuICB9XHJcbn1cclxuIl19