import { __decorate, __metadata } from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { GetFeatures, UpdateFeatures } from '../actions/feature-management.actions';
import { FeatureManagementService } from '../services/feature-management.service';
import { Injectable } from '@angular/core';
/**
 * @deprecated To be deleted in v4.0.
 */
let FeatureManagementState = class FeatureManagementState {
    constructor(featureManagementService) {
        this.featureManagementService = featureManagementService;
    }
    static getFeatures({ features }) {
        return features || [];
    }
    getFeatures({ patchState }, { payload }) {
        return this.featureManagementService.getFeatures(payload).pipe(tap(({ features = [] }) => patchState({
            features,
        })));
    }
    updateFeatures(_, { payload }) {
        return this.featureManagementService.updateFeatures(payload);
    }
};
FeatureManagementState.decorators = [
    { type: Injectable }
];
FeatureManagementState.ctorParameters = () => [
    { type: FeatureManagementService }
];
__decorate([
    Action(GetFeatures),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetFeatures]),
    __metadata("design:returntype", void 0)
], FeatureManagementState.prototype, "getFeatures", null);
__decorate([
    Action(UpdateFeatures),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateFeatures]),
    __metadata("design:returntype", void 0)
], FeatureManagementState.prototype, "updateFeatures", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FeatureManagementState, "getFeatures", null);
FeatureManagementState = __decorate([
    State({
        name: 'FeatureManagementState',
        defaults: { features: {} },
    }),
    __metadata("design:paramtypes", [FeatureManagementService])
], FeatureManagementState);
export { FeatureManagementState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZmVhdHVyZS1tYW5hZ2VtZW50L3NyYy9saWIvc3RhdGVzL2ZlYXR1cmUtbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFnQixNQUFNLGFBQWEsQ0FBQztBQUNwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDOztHQUVHO0lBTVUsc0JBQXNCLFNBQXRCLHNCQUFzQjtJQU1qQyxZQUFvQix3QkFBa0Q7UUFBbEQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUFHLENBQUM7SUFKMUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBMkI7UUFDdEQsT0FBTyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFLRCxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQXlDLEVBQUUsRUFBRSxPQUFPLEVBQWU7UUFDekYsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDNUQsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUN4QixVQUFVLENBQUM7WUFDVCxRQUFRO1NBQ1QsQ0FBQyxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFHRCxjQUFjLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFrQjtRQUMzQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNGLENBQUE7O1lBeEJBLFVBQVU7OztZQVZGLHdCQUF3Qjs7QUFvQi9CO0lBREMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7NkNBQzRELFdBQVc7O3lEQVExRjtBQUdEO0lBREMsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7NkNBQ1EsY0FBYzs7NERBRTVDO0FBcEJEO0lBREMsUUFBUSxFQUFFOzs7OytDQUdWO0FBSlUsc0JBQXNCO0lBTGxDLEtBQUssQ0FBMEI7UUFDOUIsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUE2QjtLQUN0RCxDQUFDO3FDQVE4Qyx3QkFBd0I7R0FOM0Qsc0JBQXNCLENBdUJsQztTQXZCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEdldEZlYXR1cmVzLCBVcGRhdGVGZWF0dXJlcyB9IGZyb20gJy4uL2FjdGlvbnMvZmVhdHVyZS1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy9mZWF0dXJlLW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mZWF0dXJlLW1hbmFnZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBUbyBiZSBkZWxldGVkIGluIHY0LjAuXHJcbiAqL1xyXG5AU3RhdGU8RmVhdHVyZU1hbmFnZW1lbnQuU3RhdGU+KHtcclxuICBuYW1lOiAnRmVhdHVyZU1hbmFnZW1lbnRTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgZmVhdHVyZXM6IHt9IH0gYXMgRmVhdHVyZU1hbmFnZW1lbnQuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNYW5hZ2VtZW50U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldEZlYXR1cmVzKHsgZmVhdHVyZXMgfTogRmVhdHVyZU1hbmFnZW1lbnQuU3RhdGUpIHtcclxuICAgIHJldHVybiBmZWF0dXJlcyB8fCBbXTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlOiBGZWF0dXJlTWFuYWdlbWVudFNlcnZpY2UpIHt9XHJcblxyXG4gIEBBY3Rpb24oR2V0RmVhdHVyZXMpXHJcbiAgZ2V0RmVhdHVyZXMoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxGZWF0dXJlTWFuYWdlbWVudC5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRGZWF0dXJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlLmdldEZlYXR1cmVzKHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcCgoeyBmZWF0dXJlcyA9IFtdIH0pID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICBmZWF0dXJlcyxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFVwZGF0ZUZlYXR1cmVzKVxyXG4gIHVwZGF0ZUZlYXR1cmVzKF8sIHsgcGF5bG9hZCB9OiBVcGRhdGVGZWF0dXJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuZmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlLnVwZGF0ZUZlYXR1cmVzKHBheWxvYWQpO1xyXG4gIH1cclxufVxyXG4iXX0=