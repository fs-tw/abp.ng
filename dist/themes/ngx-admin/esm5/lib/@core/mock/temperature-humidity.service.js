/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/temperature-humidity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { TemperatureHumidityData } from '../data/temperature-humidity';
var TemperatureHumidityService = /** @class */ (function (_super) {
    tslib_1.__extends(TemperatureHumidityService, _super);
    function TemperatureHumidityService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.temperatureDate = {
            value: 24,
            min: 12,
            max: 30,
        };
        _this.humidityDate = {
            value: 87,
            min: 0,
            max: 100,
        };
        return _this;
    }
    /**
     * @return {?}
     */
    TemperatureHumidityService.prototype.getTemperatureData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.temperatureDate);
    };
    /**
     * @return {?}
     */
    TemperatureHumidityService.prototype.getHumidityData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.humidityDate);
    };
    TemperatureHumidityService.decorators = [
        { type: Injectable }
    ];
    return TemperatureHumidityService;
}(TemperatureHumidityData));
export { TemperatureHumidityService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGVyYXR1cmUtaHVtaWRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9jay90ZW1wZXJhdHVyZS1odW1pZGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFlLE1BQU0sOEJBQThCLENBQUM7QUFFcEY7SUFDZ0Qsc0RBQXVCO0lBRHZFO1FBQUEscUVBc0JDO1FBbkJTLHFCQUFlLEdBQWdCO1lBQ3JDLEtBQUssRUFBRSxFQUFFO1lBQ1QsR0FBRyxFQUFFLEVBQUU7WUFDUCxHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUM7UUFFTSxrQkFBWSxHQUFnQjtZQUNsQyxLQUFLLEVBQUUsRUFBRTtZQUNULEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDOztJQVNKLENBQUM7Ozs7SUFQQyx1REFBa0I7OztJQUFsQjtRQUNFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsb0RBQWU7OztJQUFmO1FBQ0UsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQXJCRixVQUFVOztJQXNCWCxpQ0FBQztDQUFBLEFBdEJELENBQ2dELHVCQUF1QixHQXFCdEU7U0FyQlksMEJBQTBCOzs7Ozs7SUFFckMscURBSUU7Ozs7O0lBRUYsa0RBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVGVtcGVyYXR1cmVIdW1pZGl0eURhdGEsIFRlbXBlcmF0dXJlIH0gZnJvbSAnLi4vZGF0YS90ZW1wZXJhdHVyZS1odW1pZGl0eSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZW1wZXJhdHVyZUh1bWlkaXR5U2VydmljZSBleHRlbmRzIFRlbXBlcmF0dXJlSHVtaWRpdHlEYXRhIHtcclxuXHJcbiAgcHJpdmF0ZSB0ZW1wZXJhdHVyZURhdGU6IFRlbXBlcmF0dXJlID0ge1xyXG4gICAgdmFsdWU6IDI0LFxyXG4gICAgbWluOiAxMixcclxuICAgIG1heDogMzAsXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBodW1pZGl0eURhdGU6IFRlbXBlcmF0dXJlID0ge1xyXG4gICAgdmFsdWU6IDg3LFxyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OiAxMDAsXHJcbiAgfTtcclxuXHJcbiAgZ2V0VGVtcGVyYXR1cmVEYXRhKCk6IE9ic2VydmFibGU8VGVtcGVyYXR1cmU+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy50ZW1wZXJhdHVyZURhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SHVtaWRpdHlEYXRhKCk6IE9ic2VydmFibGU8VGVtcGVyYXR1cmU+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5odW1pZGl0eURhdGUpO1xyXG4gIH1cclxufVxyXG4iXX0=