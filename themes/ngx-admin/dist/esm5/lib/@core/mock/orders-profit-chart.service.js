/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/orders-profit-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of as observableOf } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrdersChartData } from '../data/orders-chart';
import { OrdersProfitChartData } from '../data/orders-profit-chart';
import { ProfitChartData } from '../data/profit-chart';
var OrdersProfitChartService = /** @class */ (function (_super) {
    tslib_1.__extends(OrdersProfitChartService, _super);
    function OrdersProfitChartService(ordersChartService, profitChartService) {
        var _this = _super.call(this) || this;
        _this.ordersChartService = ordersChartService;
        _this.profitChartService = profitChartService;
        _this.summary = [
            {
                title: 'Marketplace',
                value: 3654,
            },
            {
                title: 'Last Month',
                value: 946,
            },
            {
                title: 'Last Week',
                value: 654,
            },
            {
                title: 'Today',
                value: 230,
            },
        ];
        return _this;
    }
    /**
     * @return {?}
     */
    OrdersProfitChartService.prototype.getOrderProfitChartSummary = /**
     * @return {?}
     */
    function () {
        return observableOf(this.summary);
    };
    /**
     * @param {?} period
     * @return {?}
     */
    OrdersProfitChartService.prototype.getOrdersChartData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return observableOf(this.ordersChartService.getOrdersChartData(period));
    };
    /**
     * @param {?} period
     * @return {?}
     */
    OrdersProfitChartService.prototype.getProfitChartData = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        return observableOf(this.profitChartService.getProfitChartData(period));
    };
    OrdersProfitChartService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrdersProfitChartService.ctorParameters = function () { return [
        { type: OrdersChartData },
        { type: ProfitChartData }
    ]; };
    return OrdersProfitChartService;
}(OrdersProfitChartData));
export { OrdersProfitChartService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrdersProfitChartService.prototype.summary;
    /**
     * @type {?}
     * @private
     */
    OrdersProfitChartService.prototype.ordersChartService;
    /**
     * @type {?}
     * @private
     */
    OrdersProfitChartService.prototype.profitChartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLXByb2ZpdC1jaGFydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AY29yZS9tb2NrL29yZGVycy1wcm9maXQtY2hhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQTJCLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0YsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBFO0lBQzhDLG9EQUFxQjtJQXFCakUsa0NBQW9CLGtCQUFtQyxFQUNuQyxrQkFBbUM7UUFEdkQsWUFFRSxpQkFBTyxTQUNSO1FBSG1CLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBaUI7UUFDbkMsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFpQjtRQXBCL0MsYUFBTyxHQUFHO1lBQ2hCO2dCQUNFLEtBQUssRUFBRSxhQUFhO2dCQUNwQixLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLEtBQUssRUFBRSxHQUFHO2FBQ1g7WUFDRDtnQkFDRSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLEdBQUc7YUFDWDtZQUNEO2dCQUNFLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxHQUFHO2FBQ1g7U0FDRixDQUFDOztJQUtGLENBQUM7Ozs7SUFFRCw2REFBMEI7OztJQUExQjtRQUNFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELHFEQUFrQjs7OztJQUFsQixVQUFtQixNQUFjO1FBQy9CLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRUQscURBQWtCOzs7O0lBQWxCLFVBQW1CLE1BQWM7UUFDL0IsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Z0JBckNGLFVBQVU7Ozs7Z0JBSlcsZUFBZTtnQkFFZixlQUFlOztJQXdDckMsK0JBQUM7Q0FBQSxBQXRDRCxDQUM4QyxxQkFBcUIsR0FxQ2xFO1NBckNZLHdCQUF3Qjs7Ozs7O0lBRW5DLDJDQWlCRTs7Ozs7SUFFVSxzREFBMkM7Ozs7O0lBQzNDLHNEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPcmRlcnNDaGFydCwgT3JkZXJzQ2hhcnREYXRhIH0gZnJvbSAnLi4vZGF0YS9vcmRlcnMtY2hhcnQnO1xyXG5pbXBvcnQgeyBPcmRlclByb2ZpdENoYXJ0U3VtbWFyeSwgT3JkZXJzUHJvZml0Q2hhcnREYXRhIH0gZnJvbSAnLi4vZGF0YS9vcmRlcnMtcHJvZml0LWNoYXJ0JztcclxuaW1wb3J0IHsgUHJvZml0Q2hhcnQsIFByb2ZpdENoYXJ0RGF0YSB9IGZyb20gJy4uL2RhdGEvcHJvZml0LWNoYXJ0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE9yZGVyc1Byb2ZpdENoYXJ0U2VydmljZSBleHRlbmRzIE9yZGVyc1Byb2ZpdENoYXJ0RGF0YSB7XHJcblxyXG4gIHByaXZhdGUgc3VtbWFyeSA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdNYXJrZXRwbGFjZScsXHJcbiAgICAgIHZhbHVlOiAzNjU0LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdMYXN0IE1vbnRoJyxcclxuICAgICAgdmFsdWU6IDk0NixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnTGFzdCBXZWVrJyxcclxuICAgICAgdmFsdWU6IDY1NCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnVG9kYXknLFxyXG4gICAgICB2YWx1ZTogMjMwLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9yZGVyc0NoYXJ0U2VydmljZTogT3JkZXJzQ2hhcnREYXRhLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcHJvZml0Q2hhcnRTZXJ2aWNlOiBQcm9maXRDaGFydERhdGEpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRPcmRlclByb2ZpdENoYXJ0U3VtbWFyeSgpOiBPYnNlcnZhYmxlPE9yZGVyUHJvZml0Q2hhcnRTdW1tYXJ5W10+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5zdW1tYXJ5KTtcclxuICB9XHJcblxyXG4gIGdldE9yZGVyc0NoYXJ0RGF0YShwZXJpb2Q6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJzQ2hhcnQ+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5vcmRlcnNDaGFydFNlcnZpY2UuZ2V0T3JkZXJzQ2hhcnREYXRhKHBlcmlvZCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvZml0Q2hhcnREYXRhKHBlcmlvZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9maXRDaGFydD4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLnByb2ZpdENoYXJ0U2VydmljZS5nZXRQcm9maXRDaGFydERhdGEocGVyaW9kKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==