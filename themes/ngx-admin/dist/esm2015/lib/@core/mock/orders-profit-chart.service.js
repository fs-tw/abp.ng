/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/orders-profit-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of as observableOf } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrdersChartData } from '../data/orders-chart';
import { OrdersProfitChartData } from '../data/orders-profit-chart';
import { ProfitChartData } from '../data/profit-chart';
export class OrdersProfitChartService extends OrdersProfitChartData {
    /**
     * @param {?} ordersChartService
     * @param {?} profitChartService
     */
    constructor(ordersChartService, profitChartService) {
        super();
        this.ordersChartService = ordersChartService;
        this.profitChartService = profitChartService;
        this.summary = [
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
    }
    /**
     * @return {?}
     */
    getOrderProfitChartSummary() {
        return observableOf(this.summary);
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getOrdersChartData(period) {
        return observableOf(this.ordersChartService.getOrdersChartData(period));
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getProfitChartData(period) {
        return observableOf(this.profitChartService.getProfitChartData(period));
    }
}
OrdersProfitChartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrdersProfitChartService.ctorParameters = () => [
    { type: OrdersChartData },
    { type: ProfitChartData }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLXByb2ZpdC1jaGFydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AY29yZS9tb2NrL29yZGVycy1wcm9maXQtY2hhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBMkIscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RixPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHcEUsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHFCQUFxQjs7Ozs7SUFxQmpFLFlBQW9CLGtCQUFtQyxFQUNuQyxrQkFBbUM7UUFDckQsS0FBSyxFQUFFLENBQUM7UUFGVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWlCO1FBQ25DLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBaUI7UUFwQi9DLFlBQU8sR0FBRztZQUNoQjtnQkFDRSxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLEtBQUssRUFBRSxZQUFZO2dCQUNuQixLQUFLLEVBQUUsR0FBRzthQUNYO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxHQUFHO2FBQ1g7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxLQUFLLEVBQUUsR0FBRzthQUNYO1NBQ0YsQ0FBQztJQUtGLENBQUM7Ozs7SUFFRCwwQkFBMEI7UUFDeEIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsTUFBYztRQUMvQixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLE1BQWM7UUFDL0IsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7O1lBckNGLFVBQVU7Ozs7WUFKVyxlQUFlO1lBRWYsZUFBZTs7Ozs7OztJQUtuQywyQ0FpQkU7Ozs7O0lBRVUsc0RBQTJDOzs7OztJQUMzQyxzREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3JkZXJzQ2hhcnQsIE9yZGVyc0NoYXJ0RGF0YSB9IGZyb20gJy4uL2RhdGEvb3JkZXJzLWNoYXJ0JztcclxuaW1wb3J0IHsgT3JkZXJQcm9maXRDaGFydFN1bW1hcnksIE9yZGVyc1Byb2ZpdENoYXJ0RGF0YSB9IGZyb20gJy4uL2RhdGEvb3JkZXJzLXByb2ZpdC1jaGFydCc7XHJcbmltcG9ydCB7IFByb2ZpdENoYXJ0LCBQcm9maXRDaGFydERhdGEgfSBmcm9tICcuLi9kYXRhL3Byb2ZpdC1jaGFydCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBPcmRlcnNQcm9maXRDaGFydFNlcnZpY2UgZXh0ZW5kcyBPcmRlcnNQcm9maXRDaGFydERhdGEge1xyXG5cclxuICBwcml2YXRlIHN1bW1hcnkgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnTWFya2V0cGxhY2UnLFxyXG4gICAgICB2YWx1ZTogMzY1NCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnTGFzdCBNb250aCcsXHJcbiAgICAgIHZhbHVlOiA5NDYsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0xhc3QgV2VlaycsXHJcbiAgICAgIHZhbHVlOiA2NTQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1RvZGF5JyxcclxuICAgICAgdmFsdWU6IDIzMCxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcmRlcnNDaGFydFNlcnZpY2U6IE9yZGVyc0NoYXJ0RGF0YSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHByb2ZpdENoYXJ0U2VydmljZTogUHJvZml0Q2hhcnREYXRhKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3JkZXJQcm9maXRDaGFydFN1bW1hcnkoKTogT2JzZXJ2YWJsZTxPcmRlclByb2ZpdENoYXJ0U3VtbWFyeVtdPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuc3VtbWFyeSk7XHJcbiAgfVxyXG5cclxuICBnZXRPcmRlcnNDaGFydERhdGEocGVyaW9kOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyc0NoYXJ0PiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMub3JkZXJzQ2hhcnRTZXJ2aWNlLmdldE9yZGVyc0NoYXJ0RGF0YShwZXJpb2QpKTtcclxuICB9XHJcblxyXG4gIGdldFByb2ZpdENoYXJ0RGF0YShwZXJpb2Q6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZml0Q2hhcnQ+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5wcm9maXRDaGFydFNlcnZpY2UuZ2V0UHJvZml0Q2hhcnREYXRhKHBlcmlvZCkpO1xyXG4gIH1cclxufVxyXG4iXX0=