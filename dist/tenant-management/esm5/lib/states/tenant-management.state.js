/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/tenant-management.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { CreateTenant, DeleteTenant, GetTenantById, GetTenants, UpdateTenant, } from '../actions/tenant-management.actions';
import { TenantManagementService } from '../services/tenant-management.service';
var TenantManagementState = /** @class */ (function () {
    function TenantManagementState(tenantManagementService) {
        this.tenantManagementService = tenantManagementService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    TenantManagementState.get = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var result = _a.result;
        return result.items || [];
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    TenantManagementState.getTenantsTotalCount = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var result = _a.result;
        return result.totalCount;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    TenantManagementState.prototype.get = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.tenantManagementService.getTenant(payload).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            return patchState({
                result: result,
            });
        })));
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    TenantManagementState.prototype.getById = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.tenantManagementService.getTenantById(payload).pipe(tap((/**
         * @param {?} selectedItem
         * @return {?}
         */
        function (selectedItem) {
            return patchState({
                selectedItem: selectedItem,
            });
        })));
    };
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    TenantManagementState.prototype.delete = /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    function (_, _a) {
        var payload = _a.payload;
        return this.tenantManagementService.deleteTenant(payload);
    };
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    TenantManagementState.prototype.add = /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    function (_, _a) {
        var payload = _a.payload;
        return this.tenantManagementService.createTenant(payload);
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    TenantManagementState.prototype.update = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var getState = _a.getState;
        var payload = _b.payload;
        return this.tenantManagementService.updateTenant(tslib_1.__assign({}, getState().selectedItem, payload));
    };
    TenantManagementState.ctorParameters = function () { return [
        { type: TenantManagementService }
    ]; };
    tslib_1.__decorate([
        Action(GetTenants),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, GetTenants]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TenantManagementState.prototype, "get", null);
    tslib_1.__decorate([
        Action(GetTenantById),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, GetTenantById]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TenantManagementState.prototype, "getById", null);
    tslib_1.__decorate([
        Action(DeleteTenant),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, DeleteTenant]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TenantManagementState.prototype, "delete", null);
    tslib_1.__decorate([
        Action(CreateTenant),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, CreateTenant]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TenantManagementState.prototype, "add", null);
    tslib_1.__decorate([
        Action(UpdateTenant),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, UpdateTenant]),
        tslib_1.__metadata("design:returntype", void 0)
    ], TenantManagementState.prototype, "update", null);
    tslib_1.__decorate([
        Selector(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Array)
    ], TenantManagementState, "get", null);
    tslib_1.__decorate([
        Selector(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Number)
    ], TenantManagementState, "getTenantsTotalCount", null);
    TenantManagementState = tslib_1.__decorate([
        State({
            name: 'TenantManagementState',
            defaults: (/** @type {?} */ ({ result: {}, selectedItem: {} })),
        }),
        tslib_1.__metadata("design:paramtypes", [TenantManagementService])
    ], TenantManagementState);
    return TenantManagementState;
}());
export { TenantManagementState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantManagementState.prototype.tenantManagementService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQuc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy90ZW5hbnQtbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQ0wsWUFBWSxFQUNaLFlBQVksRUFDWixhQUFhLEVBQ2IsVUFBVSxFQUNWLFlBQVksR0FDYixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztJQWlCOUUsK0JBQW9CLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQUcsQ0FBQzs7Ozs7SUFUakUseUJBQUc7Ozs7SUFBVixVQUFXLEVBQWtDO1lBQWhDLGtCQUFNO1FBQ2pCLE9BQU8sTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFHTSwwQ0FBb0I7Ozs7SUFBM0IsVUFBNEIsRUFBa0M7WUFBaEMsa0JBQU07UUFDbEMsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUtELG1DQUFHOzs7OztJQUFILFVBQUksRUFBb0QsRUFBRSxFQUF1QjtZQUEzRSwwQkFBVTtZQUE0QyxvQkFBTztRQUNqRSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUN6RCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ1IsT0FBQSxVQUFVLENBQUM7Z0JBQ1QsTUFBTSxRQUFBO2FBQ1AsQ0FBQztRQUZGLENBRUUsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCx1Q0FBTzs7Ozs7SUFBUCxVQUFRLEVBQW9ELEVBQUUsRUFBMEI7WUFBOUUsMEJBQVU7WUFBNEMsb0JBQU87UUFDckUsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDN0QsR0FBRzs7OztRQUFDLFVBQUEsWUFBWTtZQUNkLE9BQUEsVUFBVSxDQUFDO2dCQUNULFlBQVksY0FBQTthQUNiLENBQUM7UUFGRixDQUVFLEVBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0Qsc0NBQU07Ozs7O0lBQU4sVUFBTyxDQUFDLEVBQUUsRUFBeUI7WUFBdkIsb0JBQU87UUFDakIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7OztJQUdELG1DQUFHOzs7OztJQUFILFVBQUksQ0FBQyxFQUFFLEVBQXlCO1lBQXZCLG9CQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7OztJQUdELHNDQUFNOzs7OztJQUFOLFVBQU8sRUFBa0QsRUFBRSxFQUF5QjtZQUEzRSxzQkFBUTtZQUE0QyxvQkFBTztRQUNsRSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLHNCQUFNLFFBQVEsRUFBRSxDQUFDLFlBQVksRUFBSyxPQUFPLEVBQUcsQ0FBQztJQUMvRixDQUFDOztnQkFyQzRDLHVCQUF1Qjs7SUFHcEU7UUFEQyxNQUFNLENBQUMsVUFBVSxDQUFDOzt5REFDb0QsVUFBVTs7b0RBUWhGO0lBR0Q7UUFEQyxNQUFNLENBQUMsYUFBYSxDQUFDOzt5REFDcUQsYUFBYTs7d0RBUXZGO0lBR0Q7UUFEQyxNQUFNLENBQUMsWUFBWSxDQUFDOzt5REFDRSxZQUFZOzt1REFFbEM7SUFHRDtRQURDLE1BQU0sQ0FBQyxZQUFZLENBQUM7O3lEQUNELFlBQVk7O29EQUUvQjtJQUdEO1FBREMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7eURBQ21ELFlBQVk7O3VEQUVuRjtJQTlDRDtRQURDLFFBQVEsRUFBRTs7OzswQ0FHVjtJQUdEO1FBREMsUUFBUSxFQUFFOzs7OzJEQUdWO0lBVFUscUJBQXFCO1FBSmpDLEtBQUssQ0FBeUI7WUFDN0IsSUFBSSxFQUFFLHVCQUF1QjtZQUM3QixRQUFRLEVBQUUsbUJBQUEsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsRUFBMEI7U0FDckUsQ0FBQztpREFZNkMsdUJBQXVCO09BWHpELHFCQUFxQixDQWlEakM7SUFBRCw0QkFBQztDQUFBLElBQUE7U0FqRFkscUJBQXFCOzs7Ozs7SUFXcEIsd0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIENyZWF0ZVRlbmFudCxcclxuICBEZWxldGVUZW5hbnQsXHJcbiAgR2V0VGVuYW50QnlJZCxcclxuICBHZXRUZW5hbnRzLFxyXG4gIFVwZGF0ZVRlbmFudCxcclxufSBmcm9tICcuLi9hY3Rpb25zL3RlbmFudC1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3RlbmFudC1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90ZW5hbnQtbWFuYWdlbWVudC5zZXJ2aWNlJztcclxuXHJcbkBTdGF0ZTxUZW5hbnRNYW5hZ2VtZW50LlN0YXRlPih7XHJcbiAgbmFtZTogJ1RlbmFudE1hbmFnZW1lbnRTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgcmVzdWx0OiB7fSwgc2VsZWN0ZWRJdGVtOiB7fSB9IGFzIFRlbmFudE1hbmFnZW1lbnQuU3RhdGUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRNYW5hZ2VtZW50U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldCh7IHJlc3VsdCB9OiBUZW5hbnRNYW5hZ2VtZW50LlN0YXRlKTogQUJQLkJhc2ljSXRlbVtdIHtcclxuICAgIHJldHVybiByZXN1bHQuaXRlbXMgfHwgW107XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRUZW5hbnRzVG90YWxDb3VudCh7IHJlc3VsdCB9OiBUZW5hbnRNYW5hZ2VtZW50LlN0YXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiByZXN1bHQudG90YWxDb3VudDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVuYW50TWFuYWdlbWVudFNlcnZpY2U6IFRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlKSB7fVxyXG5cclxuICBAQWN0aW9uKEdldFRlbmFudHMpXHJcbiAgZ2V0KHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8VGVuYW50TWFuYWdlbWVudC5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRUZW5hbnRzKSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZW5hbnRNYW5hZ2VtZW50U2VydmljZS5nZXRUZW5hbnQocGF5bG9hZCkucGlwZShcclxuICAgICAgdGFwKHJlc3VsdCA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oR2V0VGVuYW50QnlJZClcclxuICBnZXRCeUlkKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8VGVuYW50TWFuYWdlbWVudC5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRUZW5hbnRCeUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZW5hbnRNYW5hZ2VtZW50U2VydmljZS5nZXRUZW5hbnRCeUlkKHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChzZWxlY3RlZEl0ZW0gPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKERlbGV0ZVRlbmFudClcclxuICBkZWxldGUoXywgeyBwYXlsb2FkIH06IERlbGV0ZVRlbmFudCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50TWFuYWdlbWVudFNlcnZpY2UuZGVsZXRlVGVuYW50KHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihDcmVhdGVUZW5hbnQpXHJcbiAgYWRkKF8sIHsgcGF5bG9hZCB9OiBDcmVhdGVUZW5hbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlLmNyZWF0ZVRlbmFudChwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlVGVuYW50KVxyXG4gIHVwZGF0ZSh7IGdldFN0YXRlIH06IFN0YXRlQ29udGV4dDxUZW5hbnRNYW5hZ2VtZW50LlN0YXRlPiwgeyBwYXlsb2FkIH06IFVwZGF0ZVRlbmFudCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50TWFuYWdlbWVudFNlcnZpY2UudXBkYXRlVGVuYW50KHsgLi4uZ2V0U3RhdGUoKS5zZWxlY3RlZEl0ZW0sIC4uLnBheWxvYWQgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==