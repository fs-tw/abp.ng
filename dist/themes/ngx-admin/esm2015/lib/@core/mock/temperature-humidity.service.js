/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/temperature-humidity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { TemperatureHumidityData } from '../data/temperature-humidity';
export class TemperatureHumidityService extends TemperatureHumidityData {
    constructor() {
        super(...arguments);
        this.temperatureDate = {
            value: 24,
            min: 12,
            max: 30,
        };
        this.humidityDate = {
            value: 87,
            min: 0,
            max: 100,
        };
    }
    /**
     * @return {?}
     */
    getTemperatureData() {
        return observableOf(this.temperatureDate);
    }
    /**
     * @return {?}
     */
    getHumidityData() {
        return observableOf(this.humidityDate);
    }
}
TemperatureHumidityService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TemperatureHumidityService.prototype.temperatureDate;
    /**
     * @type {?}
     * @private
     */
    TemperatureHumidityService.prototype.humidityDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGVyYXR1cmUtaHVtaWRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9jay90ZW1wZXJhdHVyZS1odW1pZGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQWUsTUFBTSw4QkFBOEIsQ0FBQztBQUdwRixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsdUJBQXVCO0lBRHZFOztRQUdVLG9CQUFlLEdBQWdCO1lBQ3JDLEtBQUssRUFBRSxFQUFFO1lBQ1QsR0FBRyxFQUFFLEVBQUU7WUFDUCxHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUM7UUFFTSxpQkFBWSxHQUFnQjtZQUNsQyxLQUFLLEVBQUUsRUFBRTtZQUNULEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDO0lBU0osQ0FBQzs7OztJQVBDLGtCQUFrQjtRQUNoQixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBckJGLFVBQVU7Ozs7Ozs7SUFHVCxxREFJRTs7Ozs7SUFFRixrREFJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUZW1wZXJhdHVyZUh1bWlkaXR5RGF0YSwgVGVtcGVyYXR1cmUgfSBmcm9tICcuLi9kYXRhL3RlbXBlcmF0dXJlLWh1bWlkaXR5JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRlbXBlcmF0dXJlSHVtaWRpdHlTZXJ2aWNlIGV4dGVuZHMgVGVtcGVyYXR1cmVIdW1pZGl0eURhdGEge1xyXG5cclxuICBwcml2YXRlIHRlbXBlcmF0dXJlRGF0ZTogVGVtcGVyYXR1cmUgPSB7XHJcbiAgICB2YWx1ZTogMjQsXHJcbiAgICBtaW46IDEyLFxyXG4gICAgbWF4OiAzMCxcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGh1bWlkaXR5RGF0ZTogVGVtcGVyYXR1cmUgPSB7XHJcbiAgICB2YWx1ZTogODcsXHJcbiAgICBtaW46IDAsXHJcbiAgICBtYXg6IDEwMCxcclxuICB9O1xyXG5cclxuICBnZXRUZW1wZXJhdHVyZURhdGEoKTogT2JzZXJ2YWJsZTxUZW1wZXJhdHVyZT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLnRlbXBlcmF0dXJlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRIdW1pZGl0eURhdGEoKTogT2JzZXJ2YWJsZTxUZW1wZXJhdHVyZT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmh1bWlkaXR5RGF0ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==