/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/feature-management.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { GetFeatures, UpdateFeatures } from '../actions/feature-management.actions';
import { FeatureManagementService } from '../services/feature-management.service';
import { Injectable } from '@angular/core';
var FeatureManagementState = /** @class */ (function () {
    function FeatureManagementState(featureManagementService) {
        this.featureManagementService = featureManagementService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    FeatureManagementState.getFeatures = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var features = _a.features;
        return features || [];
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    FeatureManagementState.prototype.getFeatures = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.featureManagementService.getFeatures(payload).pipe(tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var features = _a.features;
            return patchState({
                features: features,
            });
        })));
    };
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    FeatureManagementState.prototype.updateFeatures = /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    function (_, _a) {
        var payload = _a.payload;
        return this.featureManagementService.updateFeatures(payload);
    };
    FeatureManagementState.ctorParameters = function () { return [
        { type: FeatureManagementService }
    ]; };
    FeatureManagementState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FeatureManagementState.ctorParameters = function () { return [
        { type: FeatureManagementService }
    ]; };
    tslib_1.__decorate([
        Action(GetFeatures),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, GetFeatures]),
        tslib_1.__metadata("design:returntype", void 0)
    ], FeatureManagementState.prototype, "getFeatures", null);
    tslib_1.__decorate([
        Action(UpdateFeatures),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, UpdateFeatures]),
        tslib_1.__metadata("design:returntype", void 0)
    ], FeatureManagementState.prototype, "updateFeatures", null);
    tslib_1.__decorate([
        Selector(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], FeatureManagementState, "getFeatures", null);
    FeatureManagementState = tslib_1.__decorate([
        State({
            name: 'FeatureManagementState',
            defaults: (/** @type {?} */ ({ features: {} })),
        }),
        tslib_1.__metadata("design:paramtypes", [FeatureManagementService])
    ], FeatureManagementState);
    return FeatureManagementState;
}());
export { FeatureManagementState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FeatureManagementState.prototype.featureManagementService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5mZWF0dXJlLW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvc3RhdGVzL2ZlYXR1cmUtbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXBGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBYXpDLGdDQUFvQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFHLENBQUM7Ozs7O0lBSm5FLGtDQUFXOzs7O0lBQWxCLFVBQW1CLEVBQXFDO1lBQW5DLHNCQUFRO1FBQzNCLE9BQU8sUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFLRCw0Q0FBVzs7Ozs7SUFBWCxVQUFZLEVBQXFELEVBQUUsRUFBd0I7WUFBN0UsMEJBQVU7WUFBNkMsb0JBQU87UUFDMUUsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDNUQsR0FBRzs7OztRQUFDLFVBQUMsRUFBWTtnQkFBVixzQkFBUTtZQUNiLE9BQUEsVUFBVSxDQUFDO2dCQUNULFFBQVEsVUFBQTthQUNULENBQUM7UUFGRixDQUVFLEVBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsK0NBQWM7Ozs7O0lBQWQsVUFBZSxDQUFDLEVBQUUsRUFBMkI7WUFBekIsb0JBQU87UUFDekIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUM7O2dCQWhCNkMsd0JBQXdCOzs7Z0JBUHZFLFVBQVU7Ozs7Z0JBUEYsd0JBQXdCOztJQWlCL0I7UUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDOzt5REFDNEQsV0FBVzs7NkRBUTFGO0lBR0Q7UUFEQyxNQUFNLENBQUMsY0FBYyxDQUFDOzt5REFDUSxjQUFjOztnRUFFNUM7SUFwQkQ7UUFEQyxRQUFRLEVBQUU7Ozs7bURBR1Y7SUFKVSxzQkFBc0I7UUFMbEMsS0FBSyxDQUEwQjtZQUM5QixJQUFJLEVBQUUsd0JBQXdCO1lBQzlCLFFBQVEsRUFBRSxtQkFBQSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBMkI7U0FDdEQsQ0FBQztpREFROEMsd0JBQXdCO09BTjNELHNCQUFzQixDQXVCbEM7SUFBRCw2QkFBQztDQUFBLElBQUE7U0F2Qlksc0JBQXNCOzs7Ozs7SUFNckIsMERBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBHZXRGZWF0dXJlcywgVXBkYXRlRmVhdHVyZXMgfSBmcm9tICcuLi9hY3Rpb25zL2ZlYXR1cmUtbWFuYWdlbWVudC5hY3Rpb25zJztcclxuaW1wb3J0IHsgRmVhdHVyZU1hbmFnZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvZmVhdHVyZS1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgRmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmVhdHVyZS1tYW5hZ2VtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AU3RhdGU8RmVhdHVyZU1hbmFnZW1lbnQuU3RhdGU+KHtcclxuICBuYW1lOiAnRmVhdHVyZU1hbmFnZW1lbnRTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgZmVhdHVyZXM6IHt9IH0gYXMgRmVhdHVyZU1hbmFnZW1lbnQuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNYW5hZ2VtZW50U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldEZlYXR1cmVzKHsgZmVhdHVyZXMgfTogRmVhdHVyZU1hbmFnZW1lbnQuU3RhdGUpIHtcclxuICAgIHJldHVybiBmZWF0dXJlcyB8fCBbXTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlOiBGZWF0dXJlTWFuYWdlbWVudFNlcnZpY2UpIHt9XHJcblxyXG4gIEBBY3Rpb24oR2V0RmVhdHVyZXMpXHJcbiAgZ2V0RmVhdHVyZXMoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxGZWF0dXJlTWFuYWdlbWVudC5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRGZWF0dXJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlLmdldEZlYXR1cmVzKHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcCgoeyBmZWF0dXJlcyB9KSA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgZmVhdHVyZXMsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihVcGRhdGVGZWF0dXJlcylcclxuICB1cGRhdGVGZWF0dXJlcyhfLCB7IHBheWxvYWQgfTogVXBkYXRlRmVhdHVyZXMpIHtcclxuICAgIHJldHVybiB0aGlzLmZlYXR1cmVNYW5hZ2VtZW50U2VydmljZS51cGRhdGVGZWF0dXJlcyhwYXlsb2FkKTtcclxuICB9XHJcbn1cclxuIl19