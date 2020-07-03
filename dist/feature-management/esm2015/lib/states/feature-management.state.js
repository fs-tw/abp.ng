import { __decorate, __metadata } from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { GetFeatures, UpdateFeatures } from '../actions/feature-management.actions';
import { FeatureManagementService } from '../services/feature-management.service';
import { Injectable } from '@angular/core';
let FeatureManagementState = class FeatureManagementState {
    constructor(featureManagementService) {
        this.featureManagementService = featureManagementService;
    }
    static getFeatures({ features }) {
        return features || [];
    }
    getFeatures({ patchState }, { payload }) {
        return this.featureManagementService.getFeatures(payload).pipe(tap(({ features }) => patchState({
            features,
        })));
    }
    updateFeatures(_, { payload }) {
        return this.featureManagementService.updateFeatures(payload);
    }
};
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
    Injectable(),
    __metadata("design:paramtypes", [FeatureManagementService])
], FeatureManagementState);
export { FeatureManagementState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZmVhdHVyZS1tYW5hZ2VtZW50L3NyYy9saWIvc3RhdGVzL2ZlYXR1cmUtbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFnQixNQUFNLGFBQWEsQ0FBQztBQUNwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBTWpDLFlBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQUcsQ0FBQztJQUoxRSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsUUFBUSxFQUEyQjtRQUN0RCxPQUFPLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUtELFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBeUMsRUFBRSxFQUFFLE9BQU8sRUFBZTtRQUN6RixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1RCxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FDbkIsVUFBVSxDQUFDO1lBQ1QsUUFBUTtTQUNULENBQUMsQ0FDSCxDQUNGLENBQUM7SUFDSixDQUFDO0lBR0QsY0FBYyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBa0I7UUFDM0MsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRixDQUFBO0FBZEM7SUFEQyxNQUFNLENBQUMsV0FBVyxDQUFDOzs2Q0FDNEQsV0FBVzs7eURBUTFGO0FBR0Q7SUFEQyxNQUFNLENBQUMsY0FBYyxDQUFDOzs2Q0FDUSxjQUFjOzs0REFFNUM7QUFwQkQ7SUFEQyxRQUFRLEVBQUU7Ozs7K0NBR1Y7QUFKVSxzQkFBc0I7SUFMbEMsS0FBSyxDQUEwQjtRQUM5QixJQUFJLEVBQUUsd0JBQXdCO1FBQzlCLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQTZCO0tBQ3RELENBQUM7SUFDRCxVQUFVLEVBQUU7cUNBT21DLHdCQUF3QjtHQU4zRCxzQkFBc0IsQ0F1QmxDO1NBdkJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgU2VsZWN0b3IsIFN0YXRlLCBTdGF0ZUNvbnRleHQgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgR2V0RmVhdHVyZXMsIFVwZGF0ZUZlYXR1cmVzIH0gZnJvbSAnLi4vYWN0aW9ucy9mZWF0dXJlLW1hbmFnZW1lbnQuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEZlYXR1cmVNYW5hZ2VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL2ZlYXR1cmUtbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IEZlYXR1cmVNYW5hZ2VtZW50U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZlYXR1cmUtbWFuYWdlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFN0YXRlPEZlYXR1cmVNYW5hZ2VtZW50LlN0YXRlPih7XHJcbiAgbmFtZTogJ0ZlYXR1cmVNYW5hZ2VtZW50U3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IGZlYXR1cmVzOiB7fSB9IGFzIEZlYXR1cmVNYW5hZ2VtZW50LlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTWFuYWdlbWVudFN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRGZWF0dXJlcyh7IGZlYXR1cmVzIH06IEZlYXR1cmVNYW5hZ2VtZW50LlN0YXRlKSB7XHJcbiAgICByZXR1cm4gZmVhdHVyZXMgfHwgW107XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZlYXR1cmVNYW5hZ2VtZW50U2VydmljZTogRmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlKSB7fVxyXG5cclxuICBAQWN0aW9uKEdldEZlYXR1cmVzKVxyXG4gIGdldEZlYXR1cmVzKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8RmVhdHVyZU1hbmFnZW1lbnQuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0RmVhdHVyZXMpIHtcclxuICAgIHJldHVybiB0aGlzLmZlYXR1cmVNYW5hZ2VtZW50U2VydmljZS5nZXRGZWF0dXJlcyhwYXlsb2FkKS5waXBlKFxyXG4gICAgICB0YXAoKHsgZmVhdHVyZXMgfSkgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIGZlYXR1cmVzLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlRmVhdHVyZXMpXHJcbiAgdXBkYXRlRmVhdHVyZXMoXywgeyBwYXlsb2FkIH06IFVwZGF0ZUZlYXR1cmVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mZWF0dXJlTWFuYWdlbWVudFNlcnZpY2UudXBkYXRlRmVhdHVyZXMocGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==