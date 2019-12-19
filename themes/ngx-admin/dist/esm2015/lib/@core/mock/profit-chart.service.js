/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/profit-chart.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PeriodsService } from './periods.service';
import { ProfitChartData } from '../data/profit-chart';
export class ProfitChartService extends ProfitChartData {
    /**
     * @param {?} period
     */
    constructor(period) {
        super();
        this.period = period;
        this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDataForWeekPeriod() {
        /** @type {?} */
        const nPoint = this.period.getWeeks().length;
        return {
            chartLabel: this.period.getWeeks(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDataForMonthPeriod() {
        /** @type {?} */
        const nPoint = this.period.getMonths().length;
        return {
            chartLabel: this.period.getMonths(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDataForYearPeriod() {
        /** @type {?} */
        const nPoint = this.year.length;
        return {
            chartLabel: this.year,
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    getRandomData(nPoints) {
        return Array.from(Array(nPoints)).map((/**
         * @return {?}
         */
        () => {
            return Math.round(Math.random() * 500);
        }));
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getProfitChartData(period) {
        return this.data[period];
    }
}
ProfitChartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProfitChartService.ctorParameters = () => [
    { type: PeriodsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProfitChartService.prototype.year;
    /**
     * @type {?}
     * @private
     */
    ProfitChartService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    ProfitChartService.prototype.period;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZml0LWNoYXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmd4LWFkbWluLyIsInNvdXJjZXMiOlsibGliL0Bjb3JlL21vY2svcHJvZml0LWNoYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHcEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQWU7Ozs7SUFjckQsWUFBb0IsTUFBc0I7UUFDeEMsS0FBSyxFQUFFLENBQUM7UUFEVSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQVpsQyxTQUFJLEdBQUc7WUFDYixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1NBQ1AsQ0FBQztRQUVNLFNBQUksR0FBRyxFQUFHLENBQUM7UUFJakIsSUFBSSxDQUFDLElBQUksR0FBRztZQUNWLElBQUksRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1NBQ2xDLENBQUM7SUFDSixDQUFDOzs7OztJQUVPLG9CQUFvQjs7Y0FDcEIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTTtRQUU1QyxPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUksRUFBRTtnQkFDSixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2FBQzNCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU8scUJBQXFCOztjQUNyQixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNO1FBRTdDLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxFQUFFO2dCQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7YUFDM0I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyxvQkFBb0I7O2NBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07UUFFL0IsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNyQixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzthQUMzQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsT0FBZTtRQUNuQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRzs7O1FBQUMsR0FBRyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLE1BQWM7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQXZFRixVQUFVOzs7O1lBSEYsY0FBYzs7Ozs7OztJQU1yQixrQ0FRRTs7Ozs7SUFFRixrQ0FBbUI7Ozs7O0lBRVAsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQZXJpb2RzU2VydmljZSB9IGZyb20gJy4vcGVyaW9kcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZml0Q2hhcnQsIFByb2ZpdENoYXJ0RGF0YSB9IGZyb20gJy4uL2RhdGEvcHJvZml0LWNoYXJ0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2ZpdENoYXJ0U2VydmljZSBleHRlbmRzIFByb2ZpdENoYXJ0RGF0YSB7XHJcblxyXG4gIHByaXZhdGUgeWVhciA9IFtcclxuICAgICcyMDEyJyxcclxuICAgICcyMDEzJyxcclxuICAgICcyMDE0JyxcclxuICAgICcyMDE1JyxcclxuICAgICcyMDE2JyxcclxuICAgICcyMDE3JyxcclxuICAgICcyMDE4JyxcclxuICBdO1xyXG5cclxuICBwcml2YXRlIGRhdGEgPSB7IH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVyaW9kOiBQZXJpb2RzU2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgd2VlazogdGhpcy5nZXREYXRhRm9yV2Vla1BlcmlvZCgpLFxyXG4gICAgICBtb250aDogdGhpcy5nZXREYXRhRm9yTW9udGhQZXJpb2QoKSxcclxuICAgICAgeWVhcjogdGhpcy5nZXREYXRhRm9yWWVhclBlcmlvZCgpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0YUZvcldlZWtQZXJpb2QoKTogUHJvZml0Q2hhcnQge1xyXG4gICAgY29uc3QgblBvaW50ID0gdGhpcy5wZXJpb2QuZ2V0V2Vla3MoKS5sZW5ndGg7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hhcnRMYWJlbDogdGhpcy5wZXJpb2QuZ2V0V2Vla3MoKSxcclxuICAgICAgZGF0YTogW1xyXG4gICAgICAgIHRoaXMuZ2V0UmFuZG9tRGF0YShuUG9pbnQpLFxyXG4gICAgICAgIHRoaXMuZ2V0UmFuZG9tRGF0YShuUG9pbnQpLFxyXG4gICAgICAgIHRoaXMuZ2V0UmFuZG9tRGF0YShuUG9pbnQpLFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0YUZvck1vbnRoUGVyaW9kKCk6IFByb2ZpdENoYXJ0IHtcclxuICAgIGNvbnN0IG5Qb2ludCA9IHRoaXMucGVyaW9kLmdldE1vbnRocygpLmxlbmd0aDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGFydExhYmVsOiB0aGlzLnBlcmlvZC5nZXRNb250aHMoKSxcclxuICAgICAgZGF0YTogW1xyXG4gICAgICAgIHRoaXMuZ2V0UmFuZG9tRGF0YShuUG9pbnQpLFxyXG4gICAgICAgIHRoaXMuZ2V0UmFuZG9tRGF0YShuUG9pbnQpLFxyXG4gICAgICAgIHRoaXMuZ2V0UmFuZG9tRGF0YShuUG9pbnQpLFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0YUZvclllYXJQZXJpb2QoKTogUHJvZml0Q2hhcnQge1xyXG4gICAgY29uc3QgblBvaW50ID0gdGhpcy55ZWFyLmxlbmd0aDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGFydExhYmVsOiB0aGlzLnllYXIsXHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcclxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcclxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJhbmRvbURhdGEoblBvaW50czogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoblBvaW50cykpLm1hcCgoKSA9PiB7XHJcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1MDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9maXRDaGFydERhdGEocGVyaW9kOiBzdHJpbmcpOiBQcm9maXRDaGFydCB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhW3BlcmlvZF07XHJcbiAgfVxyXG59XHJcbiJdfQ==