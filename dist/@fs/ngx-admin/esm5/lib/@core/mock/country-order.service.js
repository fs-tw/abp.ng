/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/country-order.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { CountryOrderData } from '../data/country-order';
var CountryOrderService = /** @class */ (function (_super) {
    tslib_1.__extends(CountryOrderService, _super);
    function CountryOrderService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        _this.countriesCategoriesLength = _this.countriesCategories.length;
        return _this;
    }
    /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    CountryOrderService.prototype.generateRandomData = /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    function (nPoints) {
        return Array.from(Array(nPoints)).map((/**
         * @return {?}
         */
        function () {
            return Math.round(Math.random() * 20);
        }));
    };
    /**
     * @return {?}
     */
    CountryOrderService.prototype.getCountriesCategories = /**
     * @return {?}
     */
    function () {
        return observableOf(this.countriesCategories);
    };
    /**
     * @param {?} country
     * @return {?}
     */
    CountryOrderService.prototype.getCountriesCategoriesData = /**
     * @param {?} country
     * @return {?}
     */
    function (country) {
        return observableOf(this.generateRandomData(this.countriesCategoriesLength));
    };
    CountryOrderService.decorators = [
        { type: Injectable }
    ];
    return CountryOrderService;
}(CountryOrderData));
export { CountryOrderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CountryOrderService.prototype.countriesCategories;
    /**
     * @type {?}
     * @private
     */
    CountryOrderService.prototype.countriesCategoriesLength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AY29yZS9tb2NrL2NvdW50cnktb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpEO0lBQ3lDLCtDQUFnQjtJQUR6RDtRQUFBLHFFQXdCQztRQXJCUyx5QkFBbUIsR0FBRztZQUM1QixPQUFPO1lBQ1AsV0FBVztZQUNYLFVBQVU7WUFDVixRQUFRO1lBQ1IsVUFBVTtTQUNYLENBQUM7UUFDTSwrQkFBeUIsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDOztJQWN0RSxDQUFDOzs7Ozs7SUFiUyxnREFBa0I7Ozs7O0lBQTFCLFVBQTJCLE9BQWU7UUFDeEMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUc7OztRQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsb0RBQXNCOzs7SUFBdEI7UUFDRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELHdEQUEwQjs7OztJQUExQixVQUEyQixPQUFlO1FBQ3hDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7O2dCQXZCRixVQUFVOztJQXdCWCwwQkFBQztDQUFBLEFBeEJELENBQ3lDLGdCQUFnQixHQXVCeEQ7U0F2QlksbUJBQW1COzs7Ozs7SUFFOUIsa0RBTUU7Ozs7O0lBQ0Ysd0RBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ291bnRyeU9yZGVyRGF0YSB9IGZyb20gJy4uL2RhdGEvY291bnRyeS1vcmRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJ5T3JkZXJTZXJ2aWNlIGV4dGVuZHMgQ291bnRyeU9yZGVyRGF0YSB7XHJcblxyXG4gIHByaXZhdGUgY291bnRyaWVzQ2F0ZWdvcmllcyA9IFtcclxuICAgICdTb2ZhcycsXHJcbiAgICAnRnVybml0dXJlJyxcclxuICAgICdMaWdodGluZycsXHJcbiAgICAnVGFibGVzJyxcclxuICAgICdUZXh0aWxlcycsXHJcbiAgXTtcclxuICBwcml2YXRlIGNvdW50cmllc0NhdGVnb3JpZXNMZW5ndGggPSB0aGlzLmNvdW50cmllc0NhdGVnb3JpZXMubGVuZ3RoO1xyXG4gIHByaXZhdGUgZ2VuZXJhdGVSYW5kb21EYXRhKG5Qb2ludHM6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KG5Qb2ludHMpKS5tYXAoKCkgPT4ge1xyXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRDb3VudHJpZXNDYXRlZ29yaWVzKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5jb3VudHJpZXNDYXRlZ29yaWVzKTtcclxuICB9XHJcblxyXG4gIGdldENvdW50cmllc0NhdGVnb3JpZXNEYXRhKGNvdW50cnk6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyW10+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5nZW5lcmF0ZVJhbmRvbURhdGEodGhpcy5jb3VudHJpZXNDYXRlZ29yaWVzTGVuZ3RoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==