/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/earning.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { EarningData } from '../data/earning';
var EarningService = /** @class */ (function (_super) {
    tslib_1.__extends(EarningService, _super);
    function EarningService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentDate = new Date();
        _this.currentValue = Math.random() * 1000;
        _this.ONE_DAY = 24 * 3600 * 1000;
        _this.pieChartData = [
            {
                value: 50,
                name: 'Bitcoin',
            },
            {
                value: 25,
                name: 'Tether',
            },
            {
                value: 25,
                name: 'Ethereum',
            },
        ];
        _this.liveUpdateChartData = {
            bitcoin: {
                liveChart: [],
                delta: {
                    up: true,
                    value: 4,
                },
                dailyIncome: 45895,
            },
            tether: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 9,
                },
                dailyIncome: 5862,
            },
            ethereum: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 21,
                },
                dailyIncome: 584,
            },
        };
        return _this;
    }
    /**
     * @param {?} elementsNumber
     * @return {?}
     */
    EarningService.prototype.getDefaultLiveChartData = /**
     * @param {?} elementsNumber
     * @return {?}
     */
    function (elementsNumber) {
        var _this = this;
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        return Array.from(Array(elementsNumber))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.generateRandomLiveChartData(); }));
    };
    /**
     * @return {?}
     */
    EarningService.prototype.generateRandomLiveChartData = /**
     * @return {?}
     */
    function () {
        this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
        this.currentValue = this.currentValue + Math.random() * 20 - 11;
        if (this.currentValue < 0) {
            this.currentValue = Math.random() * 100;
        }
        return {
            value: [
                [
                    this.currentDate.getFullYear(),
                    this.currentDate.getMonth(),
                    this.currentDate.getDate(),
                ].join('/'),
                Math.round(this.currentValue),
            ],
        };
    };
    /**
     * @param {?} currency
     * @return {?}
     */
    EarningService.prototype.getEarningLiveUpdateCardData = /**
     * @param {?} currency
     * @return {?}
     */
    function (currency) {
        /** @type {?} */
        var data = this.liveUpdateChartData[currency.toLowerCase()];
        /** @type {?} */
        var newValue = this.generateRandomLiveChartData();
        data.liveChart.shift();
        data.liveChart.push(newValue);
        return observableOf(data.liveChart);
    };
    /**
     * @param {?} currency
     * @return {?}
     */
    EarningService.prototype.getEarningCardData = /**
     * @param {?} currency
     * @return {?}
     */
    function (currency) {
        /** @type {?} */
        var data = this.liveUpdateChartData[currency.toLowerCase()];
        data.liveChart = this.getDefaultLiveChartData(150);
        return observableOf(data);
    };
    /**
     * @return {?}
     */
    EarningService.prototype.getEarningPieChartData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.pieChartData);
    };
    EarningService.decorators = [
        { type: Injectable }
    ];
    return EarningService;
}(EarningData));
export { EarningService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EarningService.prototype.currentDate;
    /**
     * @type {?}
     * @private
     */
    EarningService.prototype.currentValue;
    /**
     * @type {?}
     * @private
     */
    EarningService.prototype.ONE_DAY;
    /**
     * @type {?}
     * @private
     */
    EarningService.prototype.pieChartData;
    /**
     * @type {?}
     * @private
     */
    EarningService.prototype.liveUpdateChartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFybmluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AY29yZS9tb2NrL2Vhcm5pbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBNkIsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekU7SUFDb0MsMENBQVc7SUFEL0M7UUFBQSxxRUFrR0M7UUEvRlMsaUJBQVcsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQy9CLGtCQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwQyxhQUFPLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFFM0Isa0JBQVksR0FBRztZQUNyQjtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxRQUFRO2FBQ2Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsVUFBVTthQUNqQjtTQUNGLENBQUM7UUFFTSx5QkFBbUIsR0FBRztZQUM1QixPQUFPLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFO29CQUNMLEVBQUUsRUFBRSxJQUFJO29CQUNSLEtBQUssRUFBRSxDQUFDO2lCQUNUO2dCQUNELFdBQVcsRUFBRSxLQUFLO2FBQ25CO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLFNBQVMsRUFBRSxFQUFFO2dCQUNiLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsS0FBSztvQkFDVCxLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxXQUFX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cm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IExpdmVVcGRhdGVDaGFydCwgUGllQ2hhcnQsIEVhcm5pbmdEYXRhIH0gZnJvbSAnLi4vZGF0YS9lYXJuaW5nJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVhcm5pbmdTZXJ2aWNlIGV4dGVuZHMgRWFybmluZ0RhdGEge1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnREYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIGN1cnJlbnRWYWx1ZSA9IE1hdGgucmFuZG9tKCkgKiAxMDAwO1xyXG4gIHByaXZhdGUgT05FX0RBWSA9IDI0ICogMzYwMCAqIDEwMDA7XHJcblxyXG4gIHByaXZhdGUgcGllQ2hhcnREYXRhID0gW1xyXG4gICAge1xyXG4gICAgICB2YWx1ZTogNTAsXHJcbiAgICAgIG5hbWU6ICdCaXRjb2luJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiAyNSxcclxuICAgICAgbmFtZTogJ1RldGhlcicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWx1ZTogMjUsXHJcbiAgICAgIG5hbWU6ICdFdGhlcmV1bScsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHByaXZhdGUgbGl2ZVVwZGF0ZUNoYXJ0RGF0YSA9IHtcclxuICAgIGJpdGNvaW46IHtcclxuICAgICAgbGl2ZUNoYXJ0OiBbXSxcclxuICAgICAgZGVsdGE6IHtcclxuICAgICAgICB1cDogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogNCxcclxuICAgICAgfSxcclxuICAgICAgZGFpbHlJbmNvbWU6IDQ1ODk1LFxyXG4gICAgfSxcclxuICAgIHRldGhlcjoge1xyXG4gICAgICBsaXZlQ2hhcnQ6IFtdLFxyXG4gICAgICBkZWx0YToge1xyXG4gICAgICAgIHVwOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogOSxcclxuICAgICAgfSxcclxuICAgICAgZGFpbHlJbmNvbWU6IDU4NjIsXHJcbiAgICB9LFxyXG4gICAgZXRoZXJldW06IHtcclxuICAgICAgbGl2ZUNoYXJ0OiBbXSxcclxuICAgICAgZGVsdGE6IHtcclxuICAgICAgICB1cDogZmFsc2UsXHJcbiAgICAgICAgdmFsdWU6IDIxLFxyXG4gICAgICB9LFxyXG4gICAgICBkYWlseUluY29tZTogNTg0LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBnZXREZWZhdWx0TGl2ZUNoYXJ0RGF0YShlbGVtZW50c051bWJlcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHRoaXMuY3VycmVudFZhbHVlID0gTWF0aC5yYW5kb20oKSAqIDEwMDA7XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoZWxlbWVudHNOdW1iZXIpKVxyXG4gICAgICAubWFwKGl0ZW0gPT4gdGhpcy5nZW5lcmF0ZVJhbmRvbUxpdmVDaGFydERhdGEoKSk7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVJhbmRvbUxpdmVDaGFydERhdGEoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoK3RoaXMuY3VycmVudERhdGUgKyB0aGlzLk9ORV9EQVkpO1xyXG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmN1cnJlbnRWYWx1ZSArIE1hdGgucmFuZG9tKCkgKiAyMCAtIDExO1xyXG5cclxuICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSA8IDApIHtcclxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBNYXRoLnJhbmRvbSgpICogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBbXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZS5nZXREYXRlKCksXHJcbiAgICAgICAgXS5qb2luKCcvJyksXHJcbiAgICAgICAgTWF0aC5yb3VuZCh0aGlzLmN1cnJlbnRWYWx1ZSksXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0RWFybmluZ0xpdmVVcGRhdGVDYXJkRGF0YShjdXJyZW5jeSk6IE9ic2VydmFibGU8YW55W10+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxpdmVVcGRhdGVDaGFydERhdGFbY3VycmVuY3kudG9Mb3dlckNhc2UoKV07XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2VuZXJhdGVSYW5kb21MaXZlQ2hhcnREYXRhKCk7XHJcblxyXG4gICAgZGF0YS5saXZlQ2hhcnQuc2hpZnQoKTtcclxuICAgIGRhdGEubGl2ZUNoYXJ0LnB1c2gobmV3VmFsdWUpO1xyXG5cclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YoZGF0YS5saXZlQ2hhcnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWFybmluZ0NhcmREYXRhKGN1cnJlbmN5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPExpdmVVcGRhdGVDaGFydD4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMubGl2ZVVwZGF0ZUNoYXJ0RGF0YVtjdXJyZW5jeS50b0xvd2VyQ2FzZSgpXTtcclxuXHJcbiAgICBkYXRhLmxpdmVDaGFydCA9IHRoaXMuZ2V0RGVmYXVsdExpdmVDaGFydERhdGEoMTUwKTtcclxuXHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWFybmluZ1BpZUNoYXJ0RGF0YSgpOiBPYnNlcnZhYmxlPFBpZUNoYXJ0W10+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5waWVDaGFydERhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=