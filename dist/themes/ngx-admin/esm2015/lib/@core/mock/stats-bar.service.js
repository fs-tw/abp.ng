/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/stats-bar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { StatsBarData } from '../data/stats-bar';
export class StatsBarService extends StatsBarData {
    constructor() {
        super(...arguments);
        this.statsBarData = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    /**
     * @return {?}
     */
    getStatsBarData() {
        return observableOf(this.statsBarData);
    }
}
StatsBarService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StatsBarService.prototype.statsBarData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMtYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL21vY2svc3RhdHMtYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxZQUFZO0lBRGpEOztRQUdVLGlCQUFZLEdBQWE7WUFDL0IsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1NBQ25CLENBQUM7SUFLSixDQUFDOzs7O0lBSEMsZUFBZTtRQUNiLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7WUFWRixVQUFVOzs7Ozs7O0lBR1QsdUNBR0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTdGF0c0JhckRhdGEgfSBmcm9tICcuLi9kYXRhL3N0YXRzLWJhcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGF0c0JhclNlcnZpY2UgZXh0ZW5kcyBTdGF0c0JhckRhdGEge1xyXG5cclxuICBwcml2YXRlIHN0YXRzQmFyRGF0YTogbnVtYmVyW10gPSBbXHJcbiAgICAzMDAsIDUyMCwgNDM1LCA1MzAsXHJcbiAgICA3MzAsIDYyMCwgNjYwLCA4NjAsXHJcbiAgXTtcclxuXHJcbiAgZ2V0U3RhdHNCYXJEYXRhKCk6IE9ic2VydmFibGU8bnVtYmVyW10+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5zdGF0c0JhckRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=