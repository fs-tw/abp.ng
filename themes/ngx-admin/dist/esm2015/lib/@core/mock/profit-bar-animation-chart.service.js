/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/profit-bar-animation-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { ProfitBarAnimationChartData } from '../data/profit-bar-animation-chart';
export class ProfitBarAnimationChartService extends ProfitBarAnimationChartData {
    constructor() {
        super();
        this.data = {
            firstLine: this.getDataForFirstLine(),
            secondLine: this.getDataForSecondLine(),
        };
    }
    /**
     * @return {?}
     */
    getDataForFirstLine() {
        return this.createEmptyArray(100)
            .map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        (_, index) => {
            /** @type {?} */
            const oneFifth = index / 5;
            return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        }));
    }
    /**
     * @return {?}
     */
    getDataForSecondLine() {
        return this.createEmptyArray(100)
            .map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        (_, index) => {
            /** @type {?} */
            const oneFifth = index / 5;
            return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        }));
    }
    /**
     * @param {?} nPoints
     * @return {?}
     */
    createEmptyArray(nPoints) {
        return Array.from(Array(nPoints));
    }
    /**
     * @return {?}
     */
    getChartData() {
        return observableOf(this.data);
    }
}
ProfitBarAnimationChartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProfitBarAnimationChartService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfitBarAnimationChartService.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZml0LWJhci1hbmltYXRpb24tY2hhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9jay9wcm9maXQtYmFyLWFuaW1hdGlvbi1jaGFydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdqRixNQUFNLE9BQU8sOEJBQStCLFNBQVEsMkJBQTJCO0lBSTdFO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsU0FBUyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1NBQ3hDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzthQUM5QixHQUFHOzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFOztrQkFDVixRQUFRLEdBQUcsS0FBSyxHQUFHLENBQUM7WUFFMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2FBQzlCLEdBQUc7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7O2tCQUNWLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQztZQUUxQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFlO1FBQzlCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNWLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFyQ0YsVUFBVTs7Ozs7Ozs7O0lBR1QsOENBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFByb2ZpdEJhckFuaW1hdGlvbkNoYXJ0RGF0YSB9IGZyb20gJy4uL2RhdGEvcHJvZml0LWJhci1hbmltYXRpb24tY2hhcnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZml0QmFyQW5pbWF0aW9uQ2hhcnRTZXJ2aWNlIGV4dGVuZHMgUHJvZml0QmFyQW5pbWF0aW9uQ2hhcnREYXRhIHtcclxuXHJcbiAgcHJpdmF0ZSBkYXRhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgZmlyc3RMaW5lOiB0aGlzLmdldERhdGFGb3JGaXJzdExpbmUoKSxcclxuICAgICAgc2Vjb25kTGluZTogdGhpcy5nZXREYXRhRm9yU2Vjb25kTGluZSgpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldERhdGFGb3JGaXJzdExpbmUoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRW1wdHlBcnJheSgxMDApXHJcbiAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25lRmlmdGggPSBpbmRleCAvIDU7XHJcblxyXG4gICAgICAgIHJldHVybiAoTWF0aC5zaW4ob25lRmlmdGgpICogKG9uZUZpZnRoIC0gMTApICsgaW5kZXggLyA2KSAqIDU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YUZvclNlY29uZExpbmUoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRW1wdHlBcnJheSgxMDApXHJcbiAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25lRmlmdGggPSBpbmRleCAvIDU7XHJcblxyXG4gICAgICAgIHJldHVybiAoTWF0aC5jb3Mob25lRmlmdGgpICogKG9uZUZpZnRoIC0gMTApICsgaW5kZXggLyA2KSAqIDU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRW1wdHlBcnJheShuUG9pbnRzOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KG5Qb2ludHMpKTtcclxuICB9XHJcblxyXG4gIGdldENoYXJ0RGF0YSgpOiBPYnNlcnZhYmxlPHsgZmlyc3RMaW5lOiBudW1iZXJbXTsgc2Vjb25kTGluZTogbnVtYmVyW107IH0+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5kYXRhKTtcclxuICB9XHJcbn1cclxuIl19