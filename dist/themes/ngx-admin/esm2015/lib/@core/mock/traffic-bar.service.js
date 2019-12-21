/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/traffic-bar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { PeriodsService } from './periods.service';
import { TrafficBarData } from '../data/traffic-bar';
export class TrafficBarService extends TrafficBarData {
    /**
     * @param {?} period
     */
    constructor(period) {
        super();
        this.period = period;
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    /**
     * @return {?}
     */
    getDataForWeekPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15],
            labels: this.period.getWeeks(),
            formatter: '{c0} MB',
        };
    }
    /**
     * @return {?}
     */
    getDataForMonthPeriod() {
        return {
            data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
            labels: this.period.getMonths(),
            formatter: '{c0} GB',
        };
    }
    /**
     * @return {?}
     */
    getDataForYearPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
            labels: this.period.getYears(),
            formatter: '{c0} GB',
        };
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getTrafficBarData(period) {
        return observableOf(this.data[period]);
    }
}
TrafficBarService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TrafficBarService.ctorParameters = () => [
    { type: PeriodsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy1iYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9jay90cmFmZmljLWJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBYyxNQUFNLHFCQUFxQixDQUFDO0FBR2pFLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxjQUFjOzs7O0lBSW5ELFlBQW9CLE1BQXNCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBRFUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFGbEMsU0FBSSxHQUFHLEVBQUcsQ0FBQztRQUlqQixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7U0FDbEMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTztZQUNMLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDOUIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsT0FBTztZQUNMLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ2hFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUMvQixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNsQixPQUFPO1lBQ0wsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDekMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzlCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUM7SUFDSixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLE1BQWM7UUFDOUIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQXhDRixVQUFVOzs7O1lBSEYsY0FBYzs7Ozs7OztJQU1yQixpQ0FBbUI7Ozs7O0lBRVAsbUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcmlvZHNTZXJ2aWNlIH0gZnJvbSAnLi9wZXJpb2RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFmZmljQmFyRGF0YSwgVHJhZmZpY0JhciB9IGZyb20gJy4uL2RhdGEvdHJhZmZpYy1iYXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJhZmZpY0JhclNlcnZpY2UgZXh0ZW5kcyBUcmFmZmljQmFyRGF0YSB7XHJcblxyXG4gIHByaXZhdGUgZGF0YSA9IHsgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJpb2Q6IFBlcmlvZHNTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICB3ZWVrOiB0aGlzLmdldERhdGFGb3JXZWVrUGVyaW9kKCksXHJcbiAgICAgIG1vbnRoOiB0aGlzLmdldERhdGFGb3JNb250aFBlcmlvZCgpLFxyXG4gICAgICB5ZWFyOiB0aGlzLmdldERhdGFGb3JZZWFyUGVyaW9kKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YUZvcldlZWtQZXJpb2QoKTogVHJhZmZpY0JhciB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBbMTAsIDE1LCAxOSwgNywgMjAsIDEzLCAxNV0sXHJcbiAgICAgIGxhYmVsczogdGhpcy5wZXJpb2QuZ2V0V2Vla3MoKSxcclxuICAgICAgZm9ybWF0dGVyOiAne2MwfSBNQicsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YUZvck1vbnRoUGVyaW9kKCk6IFRyYWZmaWNCYXIge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogWzAuNSwgMC4zLCAwLjgsIDAuMiwgMC4zLCAwLjcsIDAuOCwgMSwgMC43LCAwLjgsIDAuNiwgMC43XSxcclxuICAgICAgbGFiZWxzOiB0aGlzLnBlcmlvZC5nZXRNb250aHMoKSxcclxuICAgICAgZm9ybWF0dGVyOiAne2MwfSBHQicsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YUZvclllYXJQZXJpb2QoKTogVHJhZmZpY0JhciB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBbMTAsIDE1LCAxOSwgNywgMjAsIDEzLCAxNSwgMTksIDExXSxcclxuICAgICAgbGFiZWxzOiB0aGlzLnBlcmlvZC5nZXRZZWFycygpLFxyXG4gICAgICBmb3JtYXR0ZXI6ICd7YzB9IEdCJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRUcmFmZmljQmFyRGF0YShwZXJpb2Q6IHN0cmluZyk6IE9ic2VydmFibGU8VHJhZmZpY0Jhcj4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmRhdGFbcGVyaW9kXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==