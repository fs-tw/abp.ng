/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/traffic-list.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { PeriodsService } from './periods.service';
import { TrafficListData } from '../data/traffic-list';
var TrafficListService = /** @class */ (function (_super) {
    tslib_1.__extends(TrafficListService, _super);
    function TrafficListService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.getRandom = (/**
         * @param {?} roundTo
         * @return {?}
         */
        function (roundTo) { return Math.round(Math.random() * roundTo); });
        _this.data = {};
        _this.data = {
            week: _this.getDataWeek(),
            month: _this.getDataMonth(),
            year: _this.getDataYear(),
        };
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    TrafficListService.prototype.getDataWeek = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var getFirstDateInPeriod = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var weeks = _this.period.getWeeks();
            return weeks[weeks.length - 1];
        });
        return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
    };
    /**
     * @private
     * @return {?}
     */
    TrafficListService.prototype.getDataMonth = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var getFirstDateInPeriod = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var months = _this.period.getMonths();
            return months[months.length - 1];
        });
        return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
    };
    /**
     * @private
     * @return {?}
     */
    TrafficListService.prototype.getDataYear = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var getFirstDateInPeriod = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var years = _this.period.getYears();
            return "" + (parseInt(years[0], 10) - 1);
        });
        return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
    };
    /**
     * @private
     * @param {?} timePeriods
     * @param {?} getFirstDateInPeriod
     * @return {?}
     */
    TrafficListService.prototype.reduceData = /**
     * @private
     * @param {?} timePeriods
     * @param {?} getFirstDateInPeriod
     * @return {?}
     */
    function (timePeriods, getFirstDateInPeriod) {
        var _this = this;
        return timePeriods.reduce((/**
         * @param {?} result
         * @param {?} timePeriod
         * @param {?} index
         * @return {?}
         */
        function (result, timePeriod, index) {
            /** @type {?} */
            var hasResult = result[index - 1];
            /** @type {?} */
            var prevDate = hasResult ?
                result[index - 1].comparison.nextDate :
                getFirstDateInPeriod();
            /** @type {?} */
            var prevValue = hasResult ?
                result[index - 1].comparison.nextValue :
                _this.getRandom(100);
            /** @type {?} */
            var nextValue = _this.getRandom(100);
            /** @type {?} */
            var deltaValue = prevValue - nextValue;
            /** @type {?} */
            var item = {
                date: timePeriod,
                value: _this.getRandom(1000),
                delta: {
                    up: deltaValue <= 0,
                    value: Math.abs(deltaValue),
                },
                comparison: {
                    prevDate: prevDate,
                    prevValue: prevValue,
                    nextDate: timePeriod,
                    nextValue: nextValue,
                },
            };
            return tslib_1.__spread(result, [item]);
        }), []);
    };
    /**
     * @param {?} period
     * @return {?}
     */
    TrafficListService.prototype.getTrafficListData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return observableOf(this.data[period]);
    };
    TrafficListService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TrafficListService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return TrafficListService;
}(TrafficListData));
export { TrafficListService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TrafficListService.prototype.getRandom;
    /**
     * @type {?}
     * @private
     */
    TrafficListService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    TrafficListService.prototype.period;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL21vY2svdHJhZmZpYy1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBFO0lBQ3dDLDhDQUFlO0lBS3JELDRCQUFvQixNQUFzQjtRQUExQyxZQUNFLGlCQUFPLFNBTVI7UUFQbUIsWUFBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFIbEMsZUFBUzs7OztRQUFHLFVBQUMsT0FBZSxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQW5DLENBQW1DLEVBQUM7UUFDckUsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUloQixLQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsSUFBSSxFQUFFLEtBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsS0FBSyxFQUFFLEtBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUIsSUFBSSxFQUFFLEtBQUksQ0FBQyxXQUFXLEVBQUU7U0FDekIsQ0FBQzs7SUFDSixDQUFDOzs7OztJQUVPLHdDQUFXOzs7O0lBQW5CO1FBQUEsaUJBUUM7O1lBUE8sb0JBQW9COzs7UUFBRzs7Z0JBQ3JCLEtBQUssR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUVwQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQTtRQUVELE9B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IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGVyaW9kc1NlcnZpY2UgfSBmcm9tICcuL3BlcmlvZHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYWZmaWNMaXN0LCBUcmFmZmljTGlzdERhdGEgfSBmcm9tICcuLi9kYXRhL3RyYWZmaWMtbGlzdCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFmZmljTGlzdFNlcnZpY2UgZXh0ZW5kcyBUcmFmZmljTGlzdERhdGEge1xyXG5cclxuICBwcml2YXRlIGdldFJhbmRvbSA9IChyb3VuZFRvOiBudW1iZXIpID0+IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJvdW5kVG8pO1xyXG4gIHByaXZhdGUgZGF0YSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcmlvZDogUGVyaW9kc1NlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIHdlZWs6IHRoaXMuZ2V0RGF0YVdlZWsoKSxcclxuICAgICAgbW9udGg6IHRoaXMuZ2V0RGF0YU1vbnRoKCksXHJcbiAgICAgIHllYXI6IHRoaXMuZ2V0RGF0YVllYXIoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFXZWVrKCk6IFRyYWZmaWNMaXN0W10ge1xyXG4gICAgY29uc3QgZ2V0Rmlyc3REYXRlSW5QZXJpb2QgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHdlZWtzID0gdGhpcy5wZXJpb2QuZ2V0V2Vla3MoKTtcclxuXHJcbiAgICAgIHJldHVybiB3ZWVrc1t3ZWVrcy5sZW5ndGggLSAxXTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVkdWNlRGF0YSh0aGlzLnBlcmlvZC5nZXRXZWVrcygpLCBnZXRGaXJzdERhdGVJblBlcmlvZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFNb250aCgpOiBUcmFmZmljTGlzdFtdIHtcclxuICAgIGNvbnN0IGdldEZpcnN0RGF0ZUluUGVyaW9kID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBtb250aHMgPSB0aGlzLnBlcmlvZC5nZXRNb250aHMoKTtcclxuXHJcbiAgICAgIHJldHVybiBtb250aHNbbW9udGhzLmxlbmd0aCAtIDFdO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZWR1Y2VEYXRhKHRoaXMucGVyaW9kLmdldE1vbnRocygpLCBnZXRGaXJzdERhdGVJblBlcmlvZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFZZWFyKCk6IFRyYWZmaWNMaXN0W10ge1xyXG4gICAgY29uc3QgZ2V0Rmlyc3REYXRlSW5QZXJpb2QgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHllYXJzID0gdGhpcy5wZXJpb2QuZ2V0WWVhcnMoKTtcclxuXHJcbiAgICAgIHJldHVybiBgJHtwYXJzZUludCh5ZWFyc1swXSwgMTApIC0gMX1gO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZWR1Y2VEYXRhKHRoaXMucGVyaW9kLmdldFllYXJzKCksIGdldEZpcnN0RGF0ZUluUGVyaW9kKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVkdWNlRGF0YSh0aW1lUGVyaW9kczogc3RyaW5nW10sIGdldEZpcnN0RGF0ZUluUGVyaW9kOiAoKSA9PiBzdHJpbmcpOiBUcmFmZmljTGlzdFtdIHtcclxuICAgIHJldHVybiB0aW1lUGVyaW9kcy5yZWR1Y2UoKHJlc3VsdCwgdGltZVBlcmlvZCwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgaGFzUmVzdWx0ID0gcmVzdWx0W2luZGV4IC0gMV07XHJcbiAgICAgIGNvbnN0IHByZXZEYXRlID0gaGFzUmVzdWx0ID9cclxuICAgICAgICByZXN1bHRbaW5kZXggLSAxXS5jb21wYXJpc29uLm5leHREYXRlIDpcclxuICAgICAgICBnZXRGaXJzdERhdGVJblBlcmlvZCgpO1xyXG4gICAgICBjb25zdCBwcmV2VmFsdWUgPSBoYXNSZXN1bHQgP1xyXG4gICAgICAgIHJlc3VsdFtpbmRleCAtIDFdLmNvbXBhcmlzb24ubmV4dFZhbHVlIDpcclxuICAgICAgICB0aGlzLmdldFJhbmRvbSgxMDApO1xyXG4gICAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLmdldFJhbmRvbSgxMDApO1xyXG4gICAgICBjb25zdCBkZWx0YVZhbHVlID0gcHJldlZhbHVlIC0gbmV4dFZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgICBkYXRlOiB0aW1lUGVyaW9kLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLmdldFJhbmRvbSgxMDAwKSxcclxuICAgICAgICBkZWx0YToge1xyXG4gICAgICAgICAgdXA6IGRlbHRhVmFsdWUgPD0gMCxcclxuICAgICAgICAgIHZhbHVlOiBNYXRoLmFicyhkZWx0YVZhbHVlKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBhcmlzb246IHtcclxuICAgICAgICAgIHByZXZEYXRlLFxyXG4gICAgICAgICAgcHJldlZhbHVlLFxyXG4gICAgICAgICAgbmV4dERhdGU6IHRpbWVQZXJpb2QsXHJcbiAgICAgICAgICBuZXh0VmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiBbLi4ucmVzdWx0LCBpdGVtXTtcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIGdldFRyYWZmaWNMaXN0RGF0YShwZXJpb2Q6IHN0cmluZyk6IE9ic2VydmFibGU8VHJhZmZpY0xpc3Q+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5kYXRhW3BlcmlvZF0pO1xyXG4gIH1cclxufVxyXG4iXX0=