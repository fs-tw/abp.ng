/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/solar.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { SolarData } from '../data/solar';
var SolarService = /** @class */ (function (_super) {
    tslib_1.__extends(SolarService, _super);
    function SolarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 42;
        return _this;
    }
    /**
     * @return {?}
     */
    SolarService.prototype.getSolarData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.value);
    };
    SolarService.decorators = [
        { type: Injectable }
    ];
    return SolarService;
}(SolarData));
export { SolarService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SolarService.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9jay9zb2xhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQztJQUNrQyx3Q0FBUztJQUQzQztRQUFBLHFFQU9DO1FBTFMsV0FBSyxHQUFHLEVBQUUsQ0FBQzs7SUFLckIsQ0FBQzs7OztJQUhDLG1DQUFZOzs7SUFBWjtRQUNFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkFORixVQUFVOztJQU9YLG1CQUFDO0NBQUEsQUFQRCxDQUNrQyxTQUFTLEdBTTFDO1NBTlksWUFBWTs7Ozs7O0lBQ3ZCLDZCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTb2xhckRhdGEgfSBmcm9tICcuLi9kYXRhL3NvbGFyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNvbGFyU2VydmljZSBleHRlbmRzIFNvbGFyRGF0YSB7XHJcbiAgcHJpdmF0ZSB2YWx1ZSA9IDQyO1xyXG5cclxuICBnZXRTb2xhckRhdGEoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==