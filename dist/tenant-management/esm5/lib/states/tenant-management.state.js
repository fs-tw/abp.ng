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
import { Injectable } from '@angular/core';
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
    TenantManagementState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQuc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy90ZW5hbnQtbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQ0wsWUFBWSxFQUNaLFlBQVksRUFDWixhQUFhLEVBQ2IsVUFBVSxFQUNWLFlBQVksR0FDYixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBa0J6QywrQkFBb0IsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFBRyxDQUFDOzs7OztJQVRqRSx5QkFBRzs7OztJQUFWLFVBQVcsRUFBa0M7WUFBaEMsa0JBQU07UUFDakIsT0FBTyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUdNLDBDQUFvQjs7OztJQUEzQixVQUE0QixFQUFrQztZQUFoQyxrQkFBTTtRQUNsQyxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBS0QsbUNBQUc7Ozs7O0lBQUgsVUFBSSxFQUFvRCxFQUFFLEVBQXVCO1lBQTNFLDBCQUFVO1lBQTRDLG9CQUFPO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3pELEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU07WUFDUixPQUFBLFVBQVUsQ0FBQztnQkFDVCxNQUFNLFFBQUE7YUFDUCxDQUFDO1FBRkYsQ0FFRSxFQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUdELHVDQUFPOzs7OztJQUFQLFVBQVEsRUFBb0QsRUFBRSxFQUEwQjtZQUE5RSwwQkFBVTtZQUE0QyxvQkFBTztRQUNyRSxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM3RCxHQUFHOzs7O1FBQUMsVUFBQSxZQUFZO1lBQ2QsT0FBQSxVQUFVLENBQUM7Z0JBQ1QsWUFBWSxjQUFBO2FBQ2IsQ0FBQztRQUZGLENBRUUsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCxzQ0FBTTs7Ozs7SUFBTixVQUFPLENBQUMsRUFBRSxFQUF5QjtZQUF2QixvQkFBTztRQUNqQixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBR0QsbUNBQUc7Ozs7O0lBQUgsVUFBSSxDQUFDLEVBQUUsRUFBeUI7WUFBdkIsb0JBQU87UUFDZCxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBR0Qsc0NBQU07Ozs7O0lBQU4sVUFBTyxFQUFrRCxFQUFFLEVBQXlCO1lBQTNFLHNCQUFRO1lBQTRDLG9CQUFPO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksc0JBQU0sUUFBUSxFQUFFLENBQUMsWUFBWSxFQUFLLE9BQU8sRUFBRyxDQUFDO0lBQy9GLENBQUM7O2dCQXJDNEMsdUJBQXVCOzs7Z0JBWnJFLFVBQVU7Ozs7Z0JBUEYsdUJBQXVCOztJQXNCOUI7UUFEQyxNQUFNLENBQUMsVUFBVSxDQUFDOzt5REFDb0QsVUFBVTs7b0RBUWhGO0lBR0Q7UUFEQyxNQUFNLENBQUMsYUFBYSxDQUFDOzt5REFDcUQsYUFBYTs7d0RBUXZGO0lBR0Q7UUFEQyxNQUFNLENBQUMsWUFBWSxDQUFDOzt5REFDRSxZQUFZOzt1REFFbEM7SUFHRDtRQURDLE1BQU0sQ0FBQyxZQUFZLENBQUM7O3lEQUNELFlBQVk7O29EQUUvQjtJQUdEO1FBREMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7eURBQ21ELFlBQVk7O3VEQUVuRjtJQTlDRDtRQURDLFFBQVEsRUFBRTs7OzswQ0FHVjtJQUdEO1FBREMsUUFBUSxFQUFFOzs7OzJEQUdWO0lBVFUscUJBQXFCO1FBTGpDLEtBQUssQ0FBeUI7WUFDN0IsSUFBSSxFQUFFLHVCQUF1QjtZQUM3QixRQUFRLEVBQUUsbUJBQUEsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsRUFBMEI7U0FDckUsQ0FBQztpREFhNkMsdUJBQXVCO09BWHpELHFCQUFxQixDQWlEakM7SUFBRCw0QkFBQztDQUFBLElBQUE7U0FqRFkscUJBQXFCOzs7Ozs7SUFXcEIsd0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIENyZWF0ZVRlbmFudCxcclxuICBEZWxldGVUZW5hbnQsXHJcbiAgR2V0VGVuYW50QnlJZCxcclxuICBHZXRUZW5hbnRzLFxyXG4gIFVwZGF0ZVRlbmFudCxcclxufSBmcm9tICcuLi9hY3Rpb25zL3RlbmFudC1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3RlbmFudC1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90ZW5hbnQtbWFuYWdlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFN0YXRlPFRlbmFudE1hbmFnZW1lbnQuU3RhdGU+KHtcclxuICBuYW1lOiAnVGVuYW50TWFuYWdlbWVudFN0YXRlJyxcclxuICBkZWZhdWx0czogeyByZXN1bHQ6IHt9LCBzZWxlY3RlZEl0ZW06IHt9IH0gYXMgVGVuYW50TWFuYWdlbWVudC5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGVuYW50TWFuYWdlbWVudFN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXQoeyByZXN1bHQgfTogVGVuYW50TWFuYWdlbWVudC5TdGF0ZSk6IEFCUC5CYXNpY0l0ZW1bXSB7XHJcbiAgICByZXR1cm4gcmVzdWx0Lml0ZW1zIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0VGVuYW50c1RvdGFsQ291bnQoeyByZXN1bHQgfTogVGVuYW50TWFuYWdlbWVudC5TdGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcmVzdWx0LnRvdGFsQ291bnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlOiBUZW5hbnRNYW5hZ2VtZW50U2VydmljZSkge31cclxuXHJcbiAgQEFjdGlvbihHZXRUZW5hbnRzKVxyXG4gIGdldCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFRlbmFudE1hbmFnZW1lbnQuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0VGVuYW50cykge1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50TWFuYWdlbWVudFNlcnZpY2UuZ2V0VGVuYW50KHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChyZXN1bHQgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEdldFRlbmFudEJ5SWQpXHJcbiAgZ2V0QnlJZCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFRlbmFudE1hbmFnZW1lbnQuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0VGVuYW50QnlJZCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50TWFuYWdlbWVudFNlcnZpY2UuZ2V0VGVuYW50QnlJZChwYXlsb2FkKS5waXBlKFxyXG4gICAgICB0YXAoc2VsZWN0ZWRJdGVtID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihEZWxldGVUZW5hbnQpXHJcbiAgZGVsZXRlKF8sIHsgcGF5bG9hZCB9OiBEZWxldGVUZW5hbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlLmRlbGV0ZVRlbmFudChwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oQ3JlYXRlVGVuYW50KVxyXG4gIGFkZChfLCB7IHBheWxvYWQgfTogQ3JlYXRlVGVuYW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZW5hbnRNYW5hZ2VtZW50U2VydmljZS5jcmVhdGVUZW5hbnQocGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFVwZGF0ZVRlbmFudClcclxuICB1cGRhdGUoeyBnZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8VGVuYW50TWFuYWdlbWVudC5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBVcGRhdGVUZW5hbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlLnVwZGF0ZVRlbmFudCh7IC4uLmdldFN0YXRlKCkuc2VsZWN0ZWRJdGVtLCAuLi5wYXlsb2FkIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=