/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/user-activity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { PeriodsService } from './periods.service';
import { UserActivityData } from '../data/user-activity';
export class UserActivityService extends UserActivityData {
    /**
     * @param {?} periods
     */
    constructor(periods) {
        super();
        this.periods = periods;
        this.getRandom = (/**
         * @param {?} roundTo
         * @return {?}
         */
        (roundTo) => Math.round(Math.random() * roundTo));
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    generateUserActivityRandomData(date) {
        return {
            date,
            pagesVisitCount: this.getRandom(1000),
            deltaUp: this.getRandom(1) % 2 === 0,
            newVisits: this.getRandom(100),
        };
    }
    /**
     * @private
     * @return {?}
     */
    getDataWeek() {
        return this.periods.getWeeks().map((/**
         * @param {?} week
         * @return {?}
         */
        (week) => {
            return this.generateUserActivityRandomData(week);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getDataMonth() {
        /** @type {?} */
        const currentDate = new Date();
        /** @type {?} */
        const days = currentDate.getDate();
        /** @type {?} */
        const month = this.periods.getMonths()[currentDate.getMonth()];
        return Array.from(Array(days)).map((/**
         * @param {?} _
         * @param {?} index
         * @return {?}
         */
        (_, index) => {
            /** @type {?} */
            const date = `${index + 1} ${month}`;
            return this.generateUserActivityRandomData(date);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getDataYear() {
        return this.periods.getYears().map((/**
         * @param {?} year
         * @return {?}
         */
        (year) => {
            return this.generateUserActivityRandomData(year);
        }));
    }
    /**
     * @param {?} period
     * @return {?}
     */
    getUserActivityData(period) {
        return observableOf(this.data[period]);
    }
}
UserActivityService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserActivityService.ctorParameters = () => [
    { type: PeriodsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserActivityService.prototype.getRandom;
    /** @type {?} */
    UserActivityService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    UserActivityService.prototype.periods;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY3Rpdml0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AY29yZS9tb2NrL3VzZXItYWN0aXZpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBYyxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR3JFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7Ozs7SUFjdkQsWUFBb0IsT0FBdUI7UUFDekMsS0FBSyxFQUFFLENBQUM7UUFEVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQVpuQyxjQUFTOzs7O1FBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFDO1FBVTdFLFNBQUksR0FBRyxFQUFFLENBQUM7UUFJUixJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7U0FDekIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQWxCTyw4QkFBOEIsQ0FBQyxJQUFJO1FBQ3pDLE9BQU87WUFDTCxJQUFJO1lBQ0osZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztTQUMvQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFhTyxXQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sWUFBWTs7Y0FDWixXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUU7O2NBQ3hCLElBQUksR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFOztjQUM1QixLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFOUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7O2tCQUN4QyxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUVwQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sV0FBVztRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLE1BQWM7UUFDaEMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OztZQWxERixVQUFVOzs7O1lBSEYsY0FBYzs7Ozs7OztJQU1yQix3Q0FBNkU7O0lBVTdFLG1DQUFVOzs7OztJQUVFLHNDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQZXJpb2RzU2VydmljZSB9IGZyb20gJy4vcGVyaW9kcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlckFjdGl2ZSwgVXNlckFjdGl2aXR5RGF0YSB9IGZyb20gJy4uL2RhdGEvdXNlci1hY3Rpdml0eSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyQWN0aXZpdHlTZXJ2aWNlIGV4dGVuZHMgVXNlckFjdGl2aXR5RGF0YSB7XHJcblxyXG4gIHByaXZhdGUgZ2V0UmFuZG9tID0gKHJvdW5kVG86IG51bWJlcikgPT4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcm91bmRUbyk7XHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVVzZXJBY3Rpdml0eVJhbmRvbURhdGEoZGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0ZSxcclxuICAgICAgcGFnZXNWaXNpdENvdW50OiB0aGlzLmdldFJhbmRvbSgxMDAwKSxcclxuICAgICAgZGVsdGFVcDogdGhpcy5nZXRSYW5kb20oMSkgJSAyID09PSAwLFxyXG4gICAgICBuZXdWaXNpdHM6IHRoaXMuZ2V0UmFuZG9tKDEwMCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcmlvZHM6IFBlcmlvZHNTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICB3ZWVrOiB0aGlzLmdldERhdGFXZWVrKCksXHJcbiAgICAgIG1vbnRoOiB0aGlzLmdldERhdGFNb250aCgpLFxyXG4gICAgICB5ZWFyOiB0aGlzLmdldERhdGFZZWFyKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREYXRhV2VlaygpOiBVc2VyQWN0aXZlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMucGVyaW9kcy5nZXRXZWVrcygpLm1hcCgod2VlaykgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVzZXJBY3Rpdml0eVJhbmRvbURhdGEod2Vlayk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0YU1vbnRoKCk6IFVzZXJBY3RpdmVbXSB7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBkYXlzID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3QgbW9udGggPSB0aGlzLnBlcmlvZHMuZ2V0TW9udGhzKClbY3VycmVudERhdGUuZ2V0TW9udGgoKV07XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoZGF5cykpLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgZGF0ZSA9IGAke2luZGV4ICsgMX0gJHttb250aH1gO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVc2VyQWN0aXZpdHlSYW5kb21EYXRhKGRhdGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERhdGFZZWFyKCk6IFVzZXJBY3RpdmVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5wZXJpb2RzLmdldFllYXJzKCkubWFwKCh5ZWFyKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVXNlckFjdGl2aXR5UmFuZG9tRGF0YSh5ZWFyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckFjdGl2aXR5RGF0YShwZXJpb2Q6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlckFjdGl2ZVtdPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuZGF0YVtwZXJpb2RdKTtcclxuICB9XHJcbn1cclxuIl19