/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/country-order.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { CountryOrderData } from '../data/country-order';
export class CountryOrderService extends CountryOrderData {
    constructor() {
        super(...arguments);
        this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        this.countriesCategoriesLength = this.countriesCategories.length;
    }
    /**
     * @private
     * @param {?} nPoints
     * @return {?}
     */
    generateRandomData(nPoints) {
        return Array.from(Array(nPoints)).map((/**
         * @return {?}
         */
        () => {
            return Math.round(Math.random() * 20);
        }));
    }
    /**
     * @return {?}
     */
    getCountriesCategories() {
        return observableOf(this.countriesCategories);
    }
    /**
     * @param {?} country
     * @return {?}
     */
    getCountriesCategoriesData(country) {
        return observableOf(this.generateRandomData(this.countriesCategoriesLength));
    }
}
CountryOrderService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AY29yZS9tb2NrL2NvdW50cnktb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHekQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjtJQUR6RDs7UUFHVSx3QkFBbUIsR0FBRztZQUM1QixPQUFPO1lBQ1AsV0FBVztZQUNYLFVBQVU7WUFDVixRQUFRO1lBQ1IsVUFBVTtTQUNYLENBQUM7UUFDTSw4QkFBeUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBY3RFLENBQUM7Ozs7OztJQWJTLGtCQUFrQixDQUFDLE9BQWU7UUFDeEMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUc7OztRQUFDLEdBQUcsRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNwQixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELDBCQUEwQixDQUFDLE9BQWU7UUFDeEMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7O1lBdkJGLFVBQVU7Ozs7Ozs7SUFHVCxrREFNRTs7Ozs7SUFDRix3REFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb3VudHJ5T3JkZXJEYXRhIH0gZnJvbSAnLi4vZGF0YS9jb3VudHJ5LW9yZGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvdW50cnlPcmRlclNlcnZpY2UgZXh0ZW5kcyBDb3VudHJ5T3JkZXJEYXRhIHtcclxuXHJcbiAgcHJpdmF0ZSBjb3VudHJpZXNDYXRlZ29yaWVzID0gW1xyXG4gICAgJ1NvZmFzJyxcclxuICAgICdGdXJuaXR1cmUnLFxyXG4gICAgJ0xpZ2h0aW5nJyxcclxuICAgICdUYWJsZXMnLFxyXG4gICAgJ1RleHRpbGVzJyxcclxuICBdO1xyXG4gIHByaXZhdGUgY291bnRyaWVzQ2F0ZWdvcmllc0xlbmd0aCA9IHRoaXMuY291bnRyaWVzQ2F0ZWdvcmllcy5sZW5ndGg7XHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZVJhbmRvbURhdGEoblBvaW50czogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoblBvaW50cykpLm1hcCgoKSA9PiB7XHJcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldENvdW50cmllc0NhdGVnb3JpZXMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmNvdW50cmllc0NhdGVnb3JpZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q291bnRyaWVzQ2F0ZWdvcmllc0RhdGEoY291bnRyeTogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXJbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmdlbmVyYXRlUmFuZG9tRGF0YSh0aGlzLmNvdW50cmllc0NhdGVnb3JpZXNMZW5ndGgpKTtcclxuICB9XHJcbn1cclxuIl19