/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/traffic-bar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { PeriodsService } from './periods.service';
import { TrafficBarData } from '../data/traffic-bar';
var TrafficBarService = /** @class */ (function (_super) {
    tslib_1.__extends(TrafficBarService, _super);
    function TrafficBarService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod(),
        };
        return _this;
    }
    /**
     * @return {?}
     */
    TrafficBarService.prototype.getDataForWeekPeriod = /**
     * @return {?}
     */
    function () {
        return {
            data: [10, 15, 19, 7, 20, 13, 15],
            labels: this.period.getWeeks(),
            formatter: '{c0} MB',
        };
    };
    /**
     * @return {?}
     */
    TrafficBarService.prototype.getDataForMonthPeriod = /**
     * @return {?}
     */
    function () {
        return {
            data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
            labels: this.period.getMonths(),
            formatter: '{c0} GB',
        };
    };
    /**
     * @return {?}
     */
    TrafficBarService.prototype.getDataForYearPeriod = /**
     * @return {?}
     */
    function () {
        return {
            data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
            labels: this.period.getYears(),
            formatter: '{c0} GB',
        };
    };
    /**
     * @param {?} period
     * @return {?}
     */
    TrafficBarService.prototype.getTrafficBarData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return observableOf(this.data[period]);
    };
    TrafficBarService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TrafficBarService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return TrafficBarService;
}(TrafficBarData));
export { TrafficBarService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TrafficBarService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    TrafficBarService.prototype.period;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy1iYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9jay90cmFmZmljLWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQWMsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRTtJQUN1Qyw2Q0FBYztJQUluRCwyQkFBb0IsTUFBc0I7UUFBMUMsWUFDRSxpQkFBTyxTQU1SO1FBUG1CLFlBQU0sR0FBTixNQUFNLENBQWdCO1FBRmxDLFVBQUksR0FBRyxFQUFHLENBQUM7UUFJakIsS0FBSSxDQUFDLElBQUksR0FBRztZQUNWLElBQUksRUFBRSxLQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDakMsS0FBSyxFQUFFLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUNuQyxJQUFJLEVBQUUsS0FBSSxDQUFDLG9CQUFvQixFQUFFO1NBQ2xDLENBQUM7O0lBQ0osQ0FBQzs7OztJQUVELGdEQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTztZQUNMLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDOUIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxpREFBcUI7OztJQUFyQjtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNoRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDL0IsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxnREFBb0I7OztJQUFwQjtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUN6QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDOUIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNkNBQWlCOzs7O0lBQWpCLFVBQWtCLE1BQWM7UUFDOUIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQXhDRixVQUFVOzs7O2dCQUhGLGNBQWM7O0lBNEN2Qix3QkFBQztDQUFBLEFBekNELENBQ3VDLGNBQWMsR0F3Q3BEO1NBeENZLGlCQUFpQjs7Ozs7O0lBRTVCLGlDQUFtQjs7Ozs7SUFFUCxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGVyaW9kc1NlcnZpY2UgfSBmcm9tICcuL3BlcmlvZHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYWZmaWNCYXJEYXRhLCBUcmFmZmljQmFyIH0gZnJvbSAnLi4vZGF0YS90cmFmZmljLWJhcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFmZmljQmFyU2VydmljZSBleHRlbmRzIFRyYWZmaWNCYXJEYXRhIHtcclxuXHJcbiAgcHJpdmF0ZSBkYXRhID0geyB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcmlvZDogUGVyaW9kc1NlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIHdlZWs6IHRoaXMuZ2V0RGF0YUZvcldlZWtQZXJpb2QoKSxcclxuICAgICAgbW9udGg6IHRoaXMuZ2V0RGF0YUZvck1vbnRoUGVyaW9kKCksXHJcbiAgICAgIHllYXI6IHRoaXMuZ2V0RGF0YUZvclllYXJQZXJpb2QoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXREYXRhRm9yV2Vla1BlcmlvZCgpOiBUcmFmZmljQmFyIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFsxMCwgMTUsIDE5LCA3LCAyMCwgMTMsIDE1XSxcclxuICAgICAgbGFiZWxzOiB0aGlzLnBlcmlvZC5nZXRXZWVrcygpLFxyXG4gICAgICBmb3JtYXR0ZXI6ICd7YzB9IE1CJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXREYXRhRm9yTW9udGhQZXJpb2QoKTogVHJhZmZpY0JhciB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBbMC41LCAwLjMsIDAuOCwgMC4yLCAwLjMsIDAuNywgMC44LCAxLCAwLjcsIDAuOCwgMC42LCAwLjddLFxyXG4gICAgICBsYWJlbHM6IHRoaXMucGVyaW9kLmdldE1vbnRocygpLFxyXG4gICAgICBmb3JtYXR0ZXI6ICd7YzB9IEdCJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXREYXRhRm9yWWVhclBlcmlvZCgpOiBUcmFmZmljQmFyIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFsxMCwgMTUsIDE5LCA3LCAyMCwgMTMsIDE1LCAxOSwgMTFdLFxyXG4gICAgICBsYWJlbHM6IHRoaXMucGVyaW9kLmdldFllYXJzKCksXHJcbiAgICAgIGZvcm1hdHRlcjogJ3tjMH0gR0InLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFRyYWZmaWNCYXJEYXRhKHBlcmlvZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUcmFmZmljQmFyPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuZGF0YVtwZXJpb2RdKTtcclxuICB9XHJcbn1cclxuIl19