/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/user-activity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { PeriodsService } from './periods.service';
import { UserActivityData } from '../data/user-activity';
var UserActivityService = /** @class */ (function (_super) {
    tslib_1.__extends(UserActivityService, _super);
    function UserActivityService(periods) {
        var _this = _super.call(this) || this;
        _this.periods = periods;
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
     * @param {?} date
     * @return {?}
     */
    UserActivityService.prototype.generateUserActivityRandomData = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            date: date,
            pagesVisitCount: this.getRandom(1000),
            deltaUp: this.getRandom(1) % 2 === 0,
            newVisits: this.getRandom(100),
        };
    };
    /**
     * @private
     * @return {?}
     */
    UserActivityService.prototype.getDataWeek = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.periods.getWeeks().map((/**
         * @param {?} week
         * @return {?}
         */
        function (week) {
            return _this.generateUserActivityRandomData(week);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    UserActivityService.prototype.getDataMonth = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var currentDate = new Date();
        /** @type {?} */
        var days = currentDate.getDate();
        /** @type {?} */
        var month = this.periods.getMonths()[currentDate.getMonth()];
        return Array.from(Array(days)).map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        function (_, index) {
            /** @type {?} */
            var date = index + 1 + " " + month;
            return _this.generateUserActivityRandomData(date);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    UserActivityService.prototype.getDataYear = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.periods.getYears().map((/**
         * @param {?} year
         * @return {?}
         */
        function (year) {
            return _this.generateUserActivityRandomData(year);
        }));
    };
    /**
     * @param {?} period
     * @return {?}
     */
    UserActivityService.prototype.getUserActivityData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return observableOf(this.data[period]);
    };
    UserActivityService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserActivityService.ctorParameters = function () { return [
        { type: PeriodsService }
    ]; };
    return UserActivityService;
}(UserActivityData));
export { UserActivityService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserActivityService.prototype.getRandom;
    /** @type {?} */
    UserActivityService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    UserActivityService.prototype.periods;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY3Rpdml0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AY29yZS9tb2NrL3VzZXItYWN0aXZpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQWMsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRTtJQUN5QywrQ0FBZ0I7SUFjdkQsNkJBQW9CLE9BQXVCO1FBQTNDLFlBQ0UsaUJBQU8sU0FNUjtRQVBtQixhQUFPLEdBQVAsT0FBTyxDQUFnQjtRQVpuQyxlQUFTOzs7O1FBQUcsVUFBQyxPQUFlLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBbkMsQ0FBbUMsRUFBQztRQVU3RSxVQUFJLEdBQUcsRUFBRSxDQUFDO1FBSVIsS0FBSSxDQUFDLElBQUksR0FBRztZQUNWLElBQUksRUFBRSxLQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hCLEtBQUssRUFBRSxLQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFCLElBQUksRUFBRSxLQUFJLENBQUMsV0FBVyxFQUFFO1NBQ3pCLENBQUM7O0lBQ0osQ0FBQzs7Ozs7O0lBbEJPLDREQUE4Qjs7Ozs7SUFBdEMsVUFBdUMsSUFBSTtRQUN6QyxPQUFPO1lBQ0wsSUFBSSxNQUFBO1lBQ0osZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztTQUMvQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFhTyx5Q0FBVzs7OztJQUFuQjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLElBQUk7WUFDdEMsT0FBTyxLQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLDBDQUFZOzs7O0lBQXBCO1FBQUEsaUJBVUM7O1lBVE8sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFOztZQUN4QixJQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRTs7WUFDNUIsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTlELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUs7O2dCQUNwQyxJQUFJLEdBQU0sS0FBSyxHQUFHLENBQUMsU0FBSSxLQUFPO1lBRXBDLE9BQU8sS0FBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyx5Q0FBVzs7OztJQUFuQjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLElBQUk7WUFDdEMsT0FBTyxLQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGlEQUFtQjs7OztJQUFuQixVQUFvQixNQUFjO1FBQ2hDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDOztnQkFsREYsVUFBVTs7OztnQkFIRixjQUFjOztJQXNEdkIsMEJBQUM7Q0FBQSxBQW5ERCxDQUN5QyxnQkFBZ0IsR0FrRHhEO1NBbERZLG1CQUFtQjs7Ozs7O0lBRTlCLHdDQUE2RTs7SUFVN0UsbUNBQVU7Ozs7O0lBRUUsc0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcmlvZHNTZXJ2aWNlIH0gZnJvbSAnLi9wZXJpb2RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyQWN0aXZlLCBVc2VyQWN0aXZpdHlEYXRhIH0gZnJvbSAnLi4vZGF0YS91c2VyLWFjdGl2aXR5JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJBY3Rpdml0eVNlcnZpY2UgZXh0ZW5kcyBVc2VyQWN0aXZpdHlEYXRhIHtcclxuXHJcbiAgcHJpdmF0ZSBnZXRSYW5kb20gPSAocm91bmRUbzogbnVtYmVyKSA9PiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByb3VuZFRvKTtcclxuICBwcml2YXRlIGdlbmVyYXRlVXNlckFjdGl2aXR5UmFuZG9tRGF0YShkYXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRlLFxyXG4gICAgICBwYWdlc1Zpc2l0Q291bnQ6IHRoaXMuZ2V0UmFuZG9tKDEwMDApLFxyXG4gICAgICBkZWx0YVVwOiB0aGlzLmdldFJhbmRvbSgxKSAlIDIgPT09IDAsXHJcbiAgICAgIG5ld1Zpc2l0czogdGhpcy5nZXRSYW5kb20oMTAwKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBkYXRhID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVyaW9kczogUGVyaW9kc1NlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgIHdlZWs6IHRoaXMuZ2V0RGF0YVdlZWsoKSxcclxuICAgICAgbW9udGg6IHRoaXMuZ2V0RGF0YU1vbnRoKCksXHJcbiAgICAgIHllYXI6IHRoaXMuZ2V0RGF0YVllYXIoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFXZWVrKCk6IFVzZXJBY3RpdmVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5wZXJpb2RzLmdldFdlZWtzKCkubWFwKCh3ZWVrKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVXNlckFjdGl2aXR5UmFuZG9tRGF0YSh3ZWVrKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRhTW9udGgoKTogVXNlckFjdGl2ZVtdIHtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGRheXMgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XHJcbiAgICBjb25zdCBtb250aCA9IHRoaXMucGVyaW9kcy5nZXRNb250aHMoKVtjdXJyZW50RGF0ZS5nZXRNb250aCgpXTtcclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShkYXlzKSkubWFwKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRlID0gYCR7aW5kZXggKyAxfSAke21vbnRofWA7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVzZXJBY3Rpdml0eVJhbmRvbURhdGEoZGF0ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0YVllYXIoKTogVXNlckFjdGl2ZVtdIHtcclxuICAgIHJldHVybiB0aGlzLnBlcmlvZHMuZ2V0WWVhcnMoKS5tYXAoKHllYXIpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVc2VyQWN0aXZpdHlSYW5kb21EYXRhKHllYXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyQWN0aXZpdHlEYXRhKHBlcmlvZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyQWN0aXZlW10+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5kYXRhW3BlcmlvZF0pO1xyXG4gIH1cclxufVxyXG4iXX0=