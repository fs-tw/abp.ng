/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/traffic-list.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { PeriodsService } from './periods.service';
import { TrafficListData } from '../data/traffic-list';
export class TrafficListService extends TrafficListData {
    /**
     * @param {?} period
     */
    constructor(period) {
        super();
        this.period = period;
        this.getRandom = (/**
         * @param {?} roundTo
         * @return {?}
         */
        (roundTo) => Math.round(Math.random() * roundTo));
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDataWeek() {
        /** @type {?} */
        const getFirstDateInPeriod = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const weeks = this.period.getWeeks();
            return weeks[weeks.length - 1];
        });
        return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
    }
    /**
     * @private
     * @return {?}
     */
    getDataMonth() {
        /** @type {?} */
        const getFirstDateInPeriod = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const months = this.period.getMonths();
            return months[months.length - 1];
        });
        return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
    }
    /**
     * @private
     * @return {?}
     */
    getDataYear() {
        /** @type {?} */
        const getFirstDateInPeriod = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const years = this.period.getYears();
            return `${parseInt(years[0], 10) - 1}`;
        });
        return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
    }
    /**
     * @private
     * @param {?} timePeriods
     * @param {?} getFirstDateInPeriod
     * @return {?}
     */
    reduceData(timePeriods, getFirstDateInPeriod) {
        return timePeriods.reduce((/**
         * @param {?} result
         * @param {?} timePeriod
         * @param {?} index
         * @return {?}
         */
        (result, timePeriod, index) => {
            /** @type {?} */
            const hasResult = result[index - 1];
            /** @type {?} */
            const prevDate = hasResult ?
                result[index - 1].comparison.nextDate :
                getFirstDateInPeriod();
            /** @type {?} */
            const prevValue = hasResult ?
                result[index - 1].comparison.nextValue :
                this.getRandom(100);
            /** @type {?} */
            const nextValue = this.getRandom(100);
            /** @type {?} */
            const deltaValue = prevValue - nextValue;
            /** @type {?} */
            const item = {
                date: timePeriod,
                value: this.getRandom(1000),
                delta: {
                    up: deltaValue <= 0,
                    value: Math.abs(deltaValue),
                },
                comparison: {
                    prevDate,
                    prevValue,
                    nextDate: timePeriod,
                    nextValue,
                },
            };
            return [...result, item];
        }), []);
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getTrafficListData(period) {
        return observableOf(this.data[period]);
    }
}
TrafficListService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TrafficListService.ctorParameters = () => [
    { type: PeriodsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL21vY2svdHJhZmZpYy1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHcEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQWU7Ozs7SUFLckQsWUFBb0IsTUFBc0I7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFEVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUhsQyxjQUFTOzs7O1FBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFDO1FBQ3JFLFNBQUksR0FBRyxFQUFFLENBQUM7UUFJaEIsSUFBSSxDQUFDLElBQUksR0FBRztZQUNWLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1NBQ3pCLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLFdBQVc7O2NBQ1gsb0JBQW9COzs7UUFBRyxHQUFHLEVBQUU7O2tCQUMxQixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFFcEMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUE7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7O0lBRU8sWUFBWTs7Y0FDWixvQkFBb0I7OztRQUFHLEdBQUcsRUFBRTs7a0JBQzFCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUV0QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQTtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFTyxXQUFXOztjQUNYLG9CQUFvQjs7O1FBQUcsR0FBRyxFQUFFOztrQkFDMUIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBRXBDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQTtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7OztJQUVPLFVBQVUsQ0FBQyxXQUFxQixFQUFFLG9CQUFrQztRQUMxRSxPQUFPLFdBQVcsQ0FBQyxNQUFNOzs7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUU7O2tCQUNoRCxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O2tCQUM3QixRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QyxvQkFBb0IsRUFBRTs7a0JBQ2xCLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDOztrQkFDZixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7O2tCQUMvQixVQUFVLEdBQUcsU0FBUyxHQUFHLFNBQVM7O2tCQUVsQyxJQUFJLEdBQUc7Z0JBQ1gsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDM0IsS0FBSyxFQUFFO29CQUNMLEVBQUUsRUFBRSxVQUFVLElBQUksQ0FBQztvQkFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO2lCQUM1QjtnQkFDRCxVQUFVLEVBQUU7b0JBQ1YsUUFBUTtvQkFDUixTQUFTO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixTQUFTO2lCQUNWO2FBQ0Y7WUFFRCxPQUFPLENBQUMsR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUFjO1FBQy9CLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUE5RUYsVUFBVTs7OztZQUhGLGNBQWM7Ozs7Ozs7SUFNckIsdUNBQTZFOzs7OztJQUM3RSxrQ0FBa0I7Ozs7O0lBRU4sb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcmlvZHNTZXJ2aWNlIH0gZnJvbSAnLi9wZXJpb2RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFmZmljTGlzdCwgVHJhZmZpY0xpc3REYXRhIH0gZnJvbSAnLi4vZGF0YS90cmFmZmljLWxpc3QnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJhZmZpY0xpc3RTZXJ2aWNlIGV4dGVuZHMgVHJhZmZpY0xpc3REYXRhIHtcclxuXHJcbiAgcHJpdmF0ZSBnZXRSYW5kb20gPSAocm91bmRUbzogbnVtYmVyKSA9PiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByb3VuZFRvKTtcclxuICBwcml2YXRlIGRhdGEgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJpb2Q6IFBlcmlvZHNTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICB3ZWVrOiB0aGlzLmdldERhdGFXZWVrKCksXHJcbiAgICAgIG1vbnRoOiB0aGlzLmdldERhdGFNb250aCgpLFxyXG4gICAgICB5ZWFyOiB0aGlzLmdldERhdGFZZWFyKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRhV2VlaygpOiBUcmFmZmljTGlzdFtdIHtcclxuICAgIGNvbnN0IGdldEZpcnN0RGF0ZUluUGVyaW9kID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB3ZWVrcyA9IHRoaXMucGVyaW9kLmdldFdlZWtzKCk7XHJcblxyXG4gICAgICByZXR1cm4gd2Vla3Nbd2Vla3MubGVuZ3RoIC0gMV07XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlZHVjZURhdGEodGhpcy5wZXJpb2QuZ2V0V2Vla3MoKSwgZ2V0Rmlyc3REYXRlSW5QZXJpb2QpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRhTW9udGgoKTogVHJhZmZpY0xpc3RbXSB7XHJcbiAgICBjb25zdCBnZXRGaXJzdERhdGVJblBlcmlvZCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgbW9udGhzID0gdGhpcy5wZXJpb2QuZ2V0TW9udGhzKCk7XHJcblxyXG4gICAgICByZXR1cm4gbW9udGhzW21vbnRocy5sZW5ndGggLSAxXTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVkdWNlRGF0YSh0aGlzLnBlcmlvZC5nZXRNb250aHMoKSwgZ2V0Rmlyc3REYXRlSW5QZXJpb2QpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRhWWVhcigpOiBUcmFmZmljTGlzdFtdIHtcclxuICAgIGNvbnN0IGdldEZpcnN0RGF0ZUluUGVyaW9kID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB5ZWFycyA9IHRoaXMucGVyaW9kLmdldFllYXJzKCk7XHJcblxyXG4gICAgICByZXR1cm4gYCR7cGFyc2VJbnQoeWVhcnNbMF0sIDEwKSAtIDF9YDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVkdWNlRGF0YSh0aGlzLnBlcmlvZC5nZXRZZWFycygpLCBnZXRGaXJzdERhdGVJblBlcmlvZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZHVjZURhdGEodGltZVBlcmlvZHM6IHN0cmluZ1tdLCBnZXRGaXJzdERhdGVJblBlcmlvZDogKCkgPT4gc3RyaW5nKTogVHJhZmZpY0xpc3RbXSB7XHJcbiAgICByZXR1cm4gdGltZVBlcmlvZHMucmVkdWNlKChyZXN1bHQsIHRpbWVQZXJpb2QsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGhhc1Jlc3VsdCA9IHJlc3VsdFtpbmRleCAtIDFdO1xyXG4gICAgICBjb25zdCBwcmV2RGF0ZSA9IGhhc1Jlc3VsdCA/XHJcbiAgICAgICAgcmVzdWx0W2luZGV4IC0gMV0uY29tcGFyaXNvbi5uZXh0RGF0ZSA6XHJcbiAgICAgICAgZ2V0Rmlyc3REYXRlSW5QZXJpb2QoKTtcclxuICAgICAgY29uc3QgcHJldlZhbHVlID0gaGFzUmVzdWx0ID9cclxuICAgICAgICByZXN1bHRbaW5kZXggLSAxXS5jb21wYXJpc29uLm5leHRWYWx1ZSA6XHJcbiAgICAgICAgdGhpcy5nZXRSYW5kb20oMTAwKTtcclxuICAgICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5nZXRSYW5kb20oMTAwKTtcclxuICAgICAgY29uc3QgZGVsdGFWYWx1ZSA9IHByZXZWYWx1ZSAtIG5leHRWYWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSB7XHJcbiAgICAgICAgZGF0ZTogdGltZVBlcmlvZCxcclxuICAgICAgICB2YWx1ZTogdGhpcy5nZXRSYW5kb20oMTAwMCksXHJcbiAgICAgICAgZGVsdGE6IHtcclxuICAgICAgICAgIHVwOiBkZWx0YVZhbHVlIDw9IDAsXHJcbiAgICAgICAgICB2YWx1ZTogTWF0aC5hYnMoZGVsdGFWYWx1ZSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wYXJpc29uOiB7XHJcbiAgICAgICAgICBwcmV2RGF0ZSxcclxuICAgICAgICAgIHByZXZWYWx1ZSxcclxuICAgICAgICAgIG5leHREYXRlOiB0aW1lUGVyaW9kLFxyXG4gICAgICAgICAgbmV4dFZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gWy4uLnJlc3VsdCwgaXRlbV07XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICBnZXRUcmFmZmljTGlzdERhdGEocGVyaW9kOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRyYWZmaWNMaXN0PiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuZGF0YVtwZXJpb2RdKTtcclxuICB9XHJcbn1cclxuIl19