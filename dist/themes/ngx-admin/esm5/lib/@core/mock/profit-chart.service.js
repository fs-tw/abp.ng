/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/profit-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PeriodsService } from './periods.service';
import { ProfitChartData } from '../data/profit-chart';
var ProfitChartService = /** @class */ (function (_super) {
    tslib_1.__extends(ProfitChartService, _super);
    function ProfitChartService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod(),
        };
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    ProfitChartService.prototype.getDataForWeekPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nPoint = this.period.getWeeks().length;
        return {
            chartLabel: this.period.getWeeks(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    /**
     * @private
     * @return {?}
     */
    ProfitChartService.prototype.getDataForMonthPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nPoint = this.period.getMonths().length;
        return {
            chartLabel: this.period.getMonths(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    /**
     * @private
     * @return {?}
     */
    ProfitChartService.prototype.getDataForYearPeriod = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nPoint = this.year.length;
        return {
            chartLabel: this.year,
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    ProfitChartService.prototype.getRandomData = /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    function (nPoints) {
        return Array.from(Array(nPoints)).map((/**
         * @return {?}
         */
        function () {
            return Math.round(Math.random() * 500);
        }));
    };
    /**
     * @param {?} period
     * @return {?}
     */
    ProfitChartService.prototype.getProfitChartData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return this.data[period];
    };
    ProfitChartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProfitChartService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return ProfitChartService;
}(ProfitChartData));
export { ProfitChartService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfitChartService.prototype.year;
    /**
     * @type {?}
     * @private
     */
    ProfitChartService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    ProfitChartService.prototype.period;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZml0LWNoYXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL21vY2svcHJvZml0LWNoYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBFO0lBQ3dDLDhDQUFlO0lBY3JELDRCQUFvQixNQUFzQjtRQUExQyxZQUNFLGlCQUFPLFNBTVI7UUFQbUIsWUFBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFabEMsVUFBSSxHQUFHO1lBQ2IsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQLENBQUM7UUFFTSxVQUFJLEdBQUcsRUFBRyxDQUFDO1FBSWpCLEtBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixJQUFJLEVBQUUsS0FBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ2pDLEtBQUssRUFBRSxLQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDbkMsSUFBSSxFQUFFLEtBQUksQ0FBQyxvQkFBb0IsRUFBRTtTQUNsQyxDQUFDOztJQUNKLENBQUM7Ozs7O0lBRU8saURBQW9COzs7O0lBQTVCOztZQUNRLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU07UUFFNUMsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzthQUMzQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLGtEQUFxQjs7OztJQUE3Qjs7WUFDUSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNO1FBRTdDLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxFQUFFO2dCQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7YUFDM0I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyxpREFBb0I7Ozs7SUFBNUI7O1lBQ1EsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtRQUUvQixPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ3JCLElBQUksRUFBRTtnQkFDSixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2FBQzNCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLDBDQUFhOzs7OztJQUFyQixVQUFzQixPQUFlO1FBQ25DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7UUFBQztZQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwrQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsTUFBYztRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBdkVGLFVBQVU7Ozs7Z0JBSEYsY0FBYzs7SUEyRXZCLHlCQUFDO0NBQUEsQUF4RUQsQ0FDd0MsZUFBZSxHQXVFdEQ7U0F2RVksa0JBQWtCOzs7Ozs7SUFFN0Isa0NBUUU7Ozs7O0lBRUYsa0NBQW1COzs7OztJQUVQLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGVyaW9kc1NlcnZpY2UgfSBmcm9tICcuL3BlcmlvZHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFByb2ZpdENoYXJ0LCBQcm9maXRDaGFydERhdGEgfSBmcm9tICcuLi9kYXRhL3Byb2ZpdC1jaGFydCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maXRDaGFydFNlcnZpY2UgZXh0ZW5kcyBQcm9maXRDaGFydERhdGEge1xyXG5cclxuICBwcml2YXRlIHllYXIgPSBbXHJcbiAgICAnMjAxMicsXHJcbiAgICAnMjAxMycsXHJcbiAgICAnMjAxNCcsXHJcbiAgICAnMjAxNScsXHJcbiAgICAnMjAxNicsXHJcbiAgICAnMjAxNycsXHJcbiAgICAnMjAxOCcsXHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSBkYXRhID0geyB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcmlvZDogUGVyaW9kc1NlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIHdlZWs6IHRoaXMuZ2V0RGF0YUZvcldlZWtQZXJpb2QoKSxcclxuICAgICAgbW9udGg6IHRoaXMuZ2V0RGF0YUZvck1vbnRoUGVyaW9kKCksXHJcbiAgICAgIHllYXI6IHRoaXMuZ2V0RGF0YUZvclllYXJQZXJpb2QoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFGb3JXZWVrUGVyaW9kKCk6IFByb2ZpdENoYXJ0IHtcclxuICAgIGNvbnN0IG5Qb2ludCA9IHRoaXMucGVyaW9kLmdldFdlZWtzKCkubGVuZ3RoO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNoYXJ0TGFiZWw6IHRoaXMucGVyaW9kLmdldFdlZWtzKCksXHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcclxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcclxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFGb3JNb250aFBlcmlvZCgpOiBQcm9maXRDaGFydCB7XHJcbiAgICBjb25zdCBuUG9pbnQgPSB0aGlzLnBlcmlvZC5nZXRNb250aHMoKS5sZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hhcnRMYWJlbDogdGhpcy5wZXJpb2QuZ2V0TW9udGhzKCksXHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcclxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcclxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFGb3JZZWFyUGVyaW9kKCk6IFByb2ZpdENoYXJ0IHtcclxuICAgIGNvbnN0IG5Qb2ludCA9IHRoaXMueWVhci5sZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hhcnRMYWJlbDogdGhpcy55ZWFyLFxyXG4gICAgICBkYXRhOiBbXHJcbiAgICAgICAgdGhpcy5nZXRSYW5kb21EYXRhKG5Qb2ludCksXHJcbiAgICAgICAgdGhpcy5nZXRSYW5kb21EYXRhKG5Qb2ludCksXHJcbiAgICAgICAgdGhpcy5nZXRSYW5kb21EYXRhKG5Qb2ludCksXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRSYW5kb21EYXRhKG5Qb2ludHM6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KG5Qb2ludHMpKS5tYXAoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvZml0Q2hhcnREYXRhKHBlcmlvZDogc3RyaW5nKTogUHJvZml0Q2hhcnQge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVtwZXJpb2RdO1xyXG4gIH1cclxufVxyXG4iXX0=