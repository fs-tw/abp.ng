/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/earning.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { EarningData } from '../data/earning';
export class EarningService extends EarningData {
    constructor() {
        super(...arguments);
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        this.ONE_DAY = 24 * 3600 * 1000;
        this.pieChartData = [
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
        this.liveUpdateChartData = {
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
    }
    /**
     * @param {?} elementsNumber
     * @return {?}
     */
    getDefaultLiveChartData(elementsNumber) {
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        return Array.from(Array(elementsNumber))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => this.generateRandomLiveChartData()));
    }
    /**
     * @return {?}
     */
    generateRandomLiveChartData() {
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
    }
    /**
     * @param {?} currency
     * @return {?}
     */
    getEarningLiveUpdateCardData(currency) {
        /** @type {?} */
        const data = this.liveUpdateChartData[currency.toLowerCase()];
        /** @type {?} */
        const newValue = this.generateRandomLiveChartData();
        data.liveChart.shift();
        data.liveChart.push(newValue);
        return observableOf(data.liveChart);
    }
    /**
     * @param {?} currency
     * @return {?}
     */
    getEarningCardData(currency) {
        /** @type {?} */
        const data = this.liveUpdateChartData[currency.toLowerCase()];
        data.liveChart = this.getDefaultLiveChartData(150);
        return observableOf(data);
    }
    /**
     * @return {?}
     */
    getEarningPieChartData() {
        return observableOf(this.pieChartData);
    }
}
EarningService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFybmluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AY29yZS9tb2NrL2Vhcm5pbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUE2QixXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6RSxNQUFNLE9BQU8sY0FBZSxTQUFRLFdBQVc7SUFEL0M7O1FBR1UsZ0JBQVcsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQy9CLGlCQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwQyxZQUFPLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFFM0IsaUJBQVksR0FBRztZQUNyQjtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxRQUFRO2FBQ2Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsVUFBVTthQUNqQjtTQUNGLENBQUM7UUFFTSx3QkFBbUIsR0FBRztZQUM1QixPQUFPLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFO29CQUNMLEVBQUUsRUFBRSxJQUFJO29CQUNSLEtBQUssRUFBRSxDQUFDO2lCQUNUO2dCQUNELFdBQVcsRUFBRSxLQUFLO2FBQ25CO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLFNBQVMsRUFBRSxFQUFFO2dCQUNiLEtBQUssRUFBRTtvQkFDTCxFQUFFLEVBQUUsS0FBSztvQkFDVCxLQUFLLEVBQUUsQ0FBQztpQkFDVDtnQkFDRCxXQUFXLEVBQUUsSUFBSTthQUNsQjtZQUNELFFBQVEsRUFBRTtnQkFDUixTQUFTLEVBQUUsRUFBRTtnQkFDYixLQUFLLEVBQUU7b0JBQ0wsRUFBRSxFQUFFLEtBQUs7b0JBQ1QsS0FBSyxFQUFFLEVBQUU7aUJBQ1Y7Z0JBQ0QsV0FBVyxFQUFFLEdBQUc7YUFDakI7U0FDRixDQUFDO0lBbURKLENBQUM7Ozs7O0lBakRDLHVCQUF1QixDQUFDLGNBQXNCO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFekMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNyQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsRUFBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFRCwyQkFBMkI7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUVoRSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztTQUN6QztRQUVELE9BQU87WUFDTCxLQUFLLEVBQUU7Z0JBQ0w7b0JBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO29CQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtpQkFDM0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUM5QjtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDRCQUE0QixDQUFDLFFBQVE7O2NBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDOztjQUN2RCxRQUFRLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFO1FBRW5ELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsUUFBZ0I7O2NBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTdELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDcEIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQWpHRixVQUFVOzs7Ozs7O0lBR1QscUNBQXVDOzs7OztJQUN2QyxzQ0FBNEM7Ozs7O0lBQzVDLGlDQUFtQzs7Ozs7SUFFbkMsc0NBYUU7Ozs7O0lBRUYsNkNBeUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTGl2ZVVwZGF0ZUNoYXJ0LCBQaWVDaGFydCwgRWFybmluZ0RhdGEgfSBmcm9tICcuLi9kYXRhL2Vhcm5pbmcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRWFybmluZ1NlcnZpY2UgZXh0ZW5kcyBFYXJuaW5nRGF0YSB7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHByaXZhdGUgY3VycmVudFZhbHVlID0gTWF0aC5yYW5kb20oKSAqIDEwMDA7XHJcbiAgcHJpdmF0ZSBPTkVfREFZID0gMjQgKiAzNjAwICogMTAwMDtcclxuXHJcbiAgcHJpdmF0ZSBwaWVDaGFydERhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiA1MCxcclxuICAgICAgbmFtZTogJ0JpdGNvaW4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsdWU6IDI1LFxyXG4gICAgICBuYW1lOiAnVGV0aGVyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbHVlOiAyNSxcclxuICAgICAgbmFtZTogJ0V0aGVyZXVtJyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSBsaXZlVXBkYXRlQ2hhcnREYXRhID0ge1xyXG4gICAgYml0Y29pbjoge1xyXG4gICAgICBsaXZlQ2hhcnQ6IFtdLFxyXG4gICAgICBkZWx0YToge1xyXG4gICAgICAgIHVwOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiA0LFxyXG4gICAgICB9LFxyXG4gICAgICBkYWlseUluY29tZTogNDU4OTUsXHJcbiAgICB9LFxyXG4gICAgdGV0aGVyOiB7XHJcbiAgICAgIGxpdmVDaGFydDogW10sXHJcbiAgICAgIGRlbHRhOiB7XHJcbiAgICAgICAgdXA6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiA5LFxyXG4gICAgICB9LFxyXG4gICAgICBkYWlseUluY29tZTogNTg2MixcclxuICAgIH0sXHJcbiAgICBldGhlcmV1bToge1xyXG4gICAgICBsaXZlQ2hhcnQ6IFtdLFxyXG4gICAgICBkZWx0YToge1xyXG4gICAgICAgIHVwOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogMjEsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhaWx5SW5jb21lOiA1ODQsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGdldERlZmF1bHRMaXZlQ2hhcnREYXRhKGVsZW1lbnRzTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSBNYXRoLnJhbmRvbSgpICogMTAwMDtcclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShlbGVtZW50c051bWJlcikpXHJcbiAgICAgIC5tYXAoaXRlbSA9PiB0aGlzLmdlbmVyYXRlUmFuZG9tTGl2ZUNoYXJ0RGF0YSgpKTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlUmFuZG9tTGl2ZUNoYXJ0RGF0YSgpIHtcclxuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgrdGhpcy5jdXJyZW50RGF0ZSArIHRoaXMuT05FX0RBWSk7XHJcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuY3VycmVudFZhbHVlICsgTWF0aC5yYW5kb20oKSAqIDIwIC0gMTE7XHJcblxyXG4gICAgaWYgKHRoaXMuY3VycmVudFZhbHVlIDwgMCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IFtcclxuICAgICAgICBbXHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCksXHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlLmdldERhdGUoKSxcclxuICAgICAgICBdLmpvaW4oJy8nKSxcclxuICAgICAgICBNYXRoLnJvdW5kKHRoaXMuY3VycmVudFZhbHVlKSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRFYXJuaW5nTGl2ZVVwZGF0ZUNhcmREYXRhKGN1cnJlbmN5KTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMubGl2ZVVwZGF0ZUNoYXJ0RGF0YVtjdXJyZW5jeS50b0xvd2VyQ2FzZSgpXTtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUxpdmVDaGFydERhdGEoKTtcclxuXHJcbiAgICBkYXRhLmxpdmVDaGFydC5zaGlmdCgpO1xyXG4gICAgZGF0YS5saXZlQ2hhcnQucHVzaChuZXdWYWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZihkYXRhLmxpdmVDaGFydCk7XHJcbiAgfVxyXG5cclxuICBnZXRFYXJuaW5nQ2FyZERhdGEoY3VycmVuY3k6IHN0cmluZyk6IE9ic2VydmFibGU8TGl2ZVVwZGF0ZUNoYXJ0PiB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5saXZlVXBkYXRlQ2hhcnREYXRhW2N1cnJlbmN5LnRvTG93ZXJDYXNlKCldO1xyXG5cclxuICAgIGRhdGEubGl2ZUNoYXJ0ID0gdGhpcy5nZXREZWZhdWx0TGl2ZUNoYXJ0RGF0YSgxNTApO1xyXG5cclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRFYXJuaW5nUGllQ2hhcnREYXRhKCk6IE9ic2VydmFibGU8UGllQ2hhcnRbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLnBpZUNoYXJ0RGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==