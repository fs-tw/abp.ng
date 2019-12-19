/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/traffic-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { TrafficChartData } from '../data/traffic-chart';
export class TrafficChartService extends TrafficChartData {
    constructor() {
        super(...arguments);
        this.data = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    /**
     * @return {?}
     */
    getTrafficChartData() {
        return observableOf(this.data);
    }
}
TrafficChartService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TrafficChartService.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy1jaGFydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AY29yZS9tb2NrL3RyYWZmaWMtY2hhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHekQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjtJQUR6RDs7UUFHVSxTQUFJLEdBQWE7WUFDdkIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1NBQ25CLENBQUM7SUFLSixDQUFDOzs7O0lBSEMsbUJBQW1CO1FBQ2pCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFWRixVQUFVOzs7Ozs7O0lBR1QsbUNBR0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVHJhZmZpY0NoYXJ0RGF0YSB9IGZyb20gJy4uL2RhdGEvdHJhZmZpYy1jaGFydCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmFmZmljQ2hhcnRTZXJ2aWNlIGV4dGVuZHMgVHJhZmZpY0NoYXJ0RGF0YSB7XHJcblxyXG4gIHByaXZhdGUgZGF0YTogbnVtYmVyW10gPSBbXHJcbiAgICAzMDAsIDUyMCwgNDM1LCA1MzAsXHJcbiAgICA3MzAsIDYyMCwgNjYwLCA4NjAsXHJcbiAgXTtcclxuXHJcbiAgZ2V0VHJhZmZpY0NoYXJ0RGF0YSgpOiBPYnNlcnZhYmxlPG51bWJlcltdPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==