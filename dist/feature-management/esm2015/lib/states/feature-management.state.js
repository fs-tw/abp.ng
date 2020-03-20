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
let FeatureManagementState = class FeatureManagementState {
    /**
     * @param {?} featureManagementService
     */
    constructor(featureManagementService) {
        this.featureManagementService = featureManagementService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getFeatures({ features }) {
        return features || [];
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getFeatures({ patchState }, { payload }) {
        return this.featureManagementService.getFeatures(payload).pipe(tap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ features }) => patchState({
            features,
        }))));
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    updateFeatures(_, { payload }) {
        return this.featureManagementService.updateFeatures(payload);
    }
};
FeatureManagementState.ctorParameters = () => [
    { type: FeatureManagementService }
];
FeatureManagementState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FeatureManagementState.ctorParameters = () => [
    { type: FeatureManagementService }
];
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
export { FeatureManagementState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FeatureManagementState.prototype.featureManagementService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5mZWF0dXJlLW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvc3RhdGVzL2ZlYXR1cmUtbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXBGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7SUFPOUIsc0JBQXNCLFNBQXRCLHNCQUFzQjs7OztJQU1qQyxZQUFvQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFHLENBQUM7Ozs7O0lBSjFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQTJCO1FBQ3RELE9BQU8sUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFLRCxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQXlDLEVBQUUsRUFBRSxPQUFPLEVBQWU7UUFDekYsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDNUQsR0FBRzs7OztRQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQ25CLFVBQVUsQ0FBQztZQUNULFFBQVE7U0FDVCxDQUFDLEVBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsY0FBYyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBa0I7UUFDM0MsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRixDQUFBOztZQWpCK0Msd0JBQXdCOzs7WUFQdkUsVUFBVTs7OztZQVBGLHdCQUF3Qjs7QUFpQi9CO0lBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7cURBQzRELFdBQVc7O3lEQVExRjtBQUdEO0lBREMsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7cURBQ1EsY0FBYzs7NERBRTVDO0FBcEJEO0lBREMsUUFBUSxFQUFFOzs7OytDQUdWO0FBSlUsc0JBQXNCO0lBTGxDLEtBQUssQ0FBMEI7UUFDOUIsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixRQUFRLEVBQUUsbUJBQUEsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQTJCO0tBQ3RELENBQUM7NkNBUThDLHdCQUF3QjtHQU4zRCxzQkFBc0IsQ0F1QmxDO1NBdkJZLHNCQUFzQjs7Ozs7O0lBTXJCLDBEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgU2VsZWN0b3IsIFN0YXRlLCBTdGF0ZUNvbnRleHQgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgR2V0RmVhdHVyZXMsIFVwZGF0ZUZlYXR1cmVzIH0gZnJvbSAnLi4vYWN0aW9ucy9mZWF0dXJlLW1hbmFnZW1lbnQuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEZlYXR1cmVNYW5hZ2VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL2ZlYXR1cmUtbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IEZlYXR1cmVNYW5hZ2VtZW50U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZlYXR1cmUtbWFuYWdlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFN0YXRlPEZlYXR1cmVNYW5hZ2VtZW50LlN0YXRlPih7XHJcbiAgbmFtZTogJ0ZlYXR1cmVNYW5hZ2VtZW50U3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IGZlYXR1cmVzOiB7fSB9IGFzIEZlYXR1cmVNYW5hZ2VtZW50LlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTWFuYWdlbWVudFN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRGZWF0dXJlcyh7IGZlYXR1cmVzIH06IEZlYXR1cmVNYW5hZ2VtZW50LlN0YXRlKSB7XHJcbiAgICByZXR1cm4gZmVhdHVyZXMgfHwgW107XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZlYXR1cmVNYW5hZ2VtZW50U2VydmljZTogRmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlKSB7fVxyXG5cclxuICBAQWN0aW9uKEdldEZlYXR1cmVzKVxyXG4gIGdldEZlYXR1cmVzKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8RmVhdHVyZU1hbmFnZW1lbnQuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0RmVhdHVyZXMpIHtcclxuICAgIHJldHVybiB0aGlzLmZlYXR1cmVNYW5hZ2VtZW50U2VydmljZS5nZXRGZWF0dXJlcyhwYXlsb2FkKS5waXBlKFxyXG4gICAgICB0YXAoKHsgZmVhdHVyZXMgfSkgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIGZlYXR1cmVzLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlRmVhdHVyZXMpXHJcbiAgdXBkYXRlRmVhdHVyZXMoXywgeyBwYXlsb2FkIH06IFVwZGF0ZUZlYXR1cmVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mZWF0dXJlTWFuYWdlbWVudFNlcnZpY2UudXBkYXRlRmVhdHVyZXMocGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==