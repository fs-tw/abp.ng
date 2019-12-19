/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/profit-bar-animation-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { ProfitBarAnimationChartData } from '../data/profit-bar-animation-chart';
var ProfitBarAnimationChartService = /** @class */ (function (_super) {
    tslib_1.__extends(ProfitBarAnimationChartService, _super);
    function ProfitBarAnimationChartService() {
        var _this = _super.call(this) || this;
        _this.data = {
            firstLine: _this.getDataForFirstLine(),
            secondLine: _this.getDataForSecondLine(),
        };
        return _this;
    }
    /**
     * @return {?}
     */
    ProfitBarAnimationChartService.prototype.getDataForFirstLine = /**
     * @return {?}
     */
    function () {
        return this.createEmptyArray(100)
            .map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        function (_, index) {
            /** @type {?} */
            var oneFifth = index / 5;
            return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        }));
    };
    /**
     * @return {?}
     */
    ProfitBarAnimationChartService.prototype.getDataForSecondLine = /**
     * @return {?}
     */
    function () {
        return this.createEmptyArray(100)
            .map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        function (_, index) {
            /** @type {?} */
            var oneFifth = index / 5;
            return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        }));
    };
    /**
     * @param {?} nPoints
     * @return {?}
     */
    ProfitBarAnimationChartService.prototype.createEmptyArray = /**
     * @param {?} nPoints
     * @return {?}
     */
    function (nPoints) {
        return Array.from(Array(nPoints));
    };
    /**
     * @return {?}
     */
    ProfitBarAnimationChartService.prototype.getChartData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.data);
    };
    ProfitBarAnimationChartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProfitBarAnimationChartService.ctorParameters = function () { return []; };
    return ProfitBarAnimationChartService;
}(ProfitBarAnimationChartData));
export { ProfitBarAnimationChartService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfitBarAnimationChartService.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZml0LWJhci1hbmltYXRpb24tY2hhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9jay9wcm9maXQtYmFyLWFuaW1hdGlvbi1jaGFydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFakY7SUFDb0QsMERBQTJCO0lBSTdFO1FBQUEsWUFDRSxpQkFBTyxTQUtSO1FBSkMsS0FBSSxDQUFDLElBQUksR0FBRztZQUNWLFNBQVMsRUFBRSxLQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDckMsVUFBVSxFQUFFLEtBQUksQ0FBQyxvQkFBb0IsRUFBRTtTQUN4QyxDQUFDOztJQUNKLENBQUM7Ozs7SUFFRCw0REFBbUI7OztJQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzthQUM5QixHQUFHOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUs7O2dCQUNOLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQztZQUUxQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELDZEQUFvQjs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2FBQzlCLEdBQUc7Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSzs7Z0JBQ04sUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDO1lBRTFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELHlEQUFnQjs7OztJQUFoQixVQUFpQixPQUFlO1FBQzlCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQscURBQVk7OztJQUFaO1FBQ0UsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQXJDRixVQUFVOzs7O0lBc0NYLHFDQUFDO0NBQUEsQUF0Q0QsQ0FDb0QsMkJBQTJCLEdBcUM5RTtTQXJDWSw4QkFBOEI7Ozs7OztJQUV6Qyw4Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUHJvZml0QmFyQW5pbWF0aW9uQ2hhcnREYXRhIH0gZnJvbSAnLi4vZGF0YS9wcm9maXQtYmFyLWFuaW1hdGlvbi1jaGFydCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maXRCYXJBbmltYXRpb25DaGFydFNlcnZpY2UgZXh0ZW5kcyBQcm9maXRCYXJBbmltYXRpb25DaGFydERhdGEge1xyXG5cclxuICBwcml2YXRlIGRhdGE6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICBmaXJzdExpbmU6IHRoaXMuZ2V0RGF0YUZvckZpcnN0TGluZSgpLFxyXG4gICAgICBzZWNvbmRMaW5lOiB0aGlzLmdldERhdGFGb3JTZWNvbmRMaW5lKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YUZvckZpcnN0TGluZSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVFbXB0eUFycmF5KDEwMClcclxuICAgICAgLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBvbmVGaWZ0aCA9IGluZGV4IC8gNTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChNYXRoLnNpbihvbmVGaWZ0aCkgKiAob25lRmlmdGggLSAxMCkgKyBpbmRleCAvIDYpICogNTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhRm9yU2Vjb25kTGluZSgpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVFbXB0eUFycmF5KDEwMClcclxuICAgICAgLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBvbmVGaWZ0aCA9IGluZGV4IC8gNTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChNYXRoLmNvcyhvbmVGaWZ0aCkgKiAob25lRmlmdGggLSAxMCkgKyBpbmRleCAvIDYpICogNTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVFbXB0eUFycmF5KG5Qb2ludHM6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoblBvaW50cykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2hhcnREYXRhKCk6IE9ic2VydmFibGU8eyBmaXJzdExpbmU6IG51bWJlcltdOyBzZWNvbmRMaW5lOiBudW1iZXJbXTsgfT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=