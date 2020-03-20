/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/permission-management.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { State, Action, Selector } from '@ngxs/store';
import { GetPermissions, UpdatePermissions } from '../actions/permission-management.actions';
import { PermissionManagementService } from '../services/permission-management.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
var PermissionManagementState = /** @class */ (function () {
    function PermissionManagementState(permissionManagementService) {
        this.permissionManagementService = permissionManagementService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    PermissionManagementState.getPermissionGroups = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var permissionRes = _a.permissionRes;
        return permissionRes.groups || [];
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    PermissionManagementState.getEntityDisplayName = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var permissionRes = _a.permissionRes;
        return permissionRes.entityDisplayName;
    };
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    PermissionManagementState.prototype.permissionManagementGet = /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.permissionManagementService.getPermissions(payload).pipe(tap((/**
         * @param {?} permissionResponse
         * @return {?}
         */
        function (permissionResponse) {
            return patchState({
                permissionRes: permissionResponse,
            });
        })));
    };
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    PermissionManagementState.prototype.permissionManagementUpdate = /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    function (_, _a) {
        var payload = _a.payload;
        return this.permissionManagementService.updatePermissions(payload);
    };
    PermissionManagementState.ctorParameters = function () { return [
        { type: PermissionManagementService }
    ]; };
    PermissionManagementState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PermissionManagementState.ctorParameters = function () { return [
        { type: PermissionManagementService }
    ]; };
    tslib_1.__decorate([
        Action(GetPermissions),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, GetPermissions]),
        tslib_1.__metadata("design:returntype", void 0)
    ], PermissionManagementState.prototype, "permissionManagementGet", null);
    tslib_1.__decorate([
        Action(UpdatePermissions),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, UpdatePermissions]),
        tslib_1.__metadata("design:returntype", void 0)
    ], PermissionManagementState.prototype, "permissionManagementUpdate", null);
    tslib_1.__decorate([
        Selector(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], PermissionManagementState, "getPermissionGroups", null);
    tslib_1.__decorate([
        Selector(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", String)
    ], PermissionManagementState, "getEntityDisplayName", null);
    PermissionManagementState = tslib_1.__decorate([
        State({
            name: 'PermissionManagementState',
            defaults: (/** @type {?} */ ({ permissionRes: {} })),
        }),
        tslib_1.__metadata("design:paramtypes", [PermissionManagementService])
    ], PermissionManagementState);
    return PermissionManagementState;
}());
export { PermissionManagementState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PermissionManagementState.prototype.permissionManagementService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LnN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5wZXJtaXNzaW9uLW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvc3RhdGVzL3Blcm1pc3Npb24tbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZ0IsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUU3RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFrQnpDLG1DQUFvQiwyQkFBd0Q7UUFBeEQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtJQUFHLENBQUM7Ozs7O0lBVHpFLDZDQUFtQjs7OztJQUExQixVQUEyQixFQUE2QztZQUEzQyxnQ0FBYTtRQUN4QyxPQUFPLGFBQWEsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBR00sOENBQW9COzs7O0lBQTNCLFVBQTRCLEVBQTZDO1lBQTNDLGdDQUFhO1FBQ3pDLE9BQU8sYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUtELDJEQUF1Qjs7Ozs7SUFBdkIsVUFDRSxFQUF3RCxFQUN4RCxFQUEyQjtZQUR6QiwwQkFBVTtZQUNWLG9CQUFPO1FBRVQsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEUsR0FBRzs7OztRQUFDLFVBQUEsa0JBQWtCO1lBQ3BCLE9BQUEsVUFBVSxDQUFDO2dCQUNULGFBQWEsRUFBRSxrQkFBa0I7YUFDbEMsQ0FBQztRQUZGLENBRUUsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCw4REFBMEI7Ozs7O0lBQTFCLFVBQTJCLENBQUMsRUFBRSxFQUE4QjtZQUE1QixvQkFBTztRQUNyQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkFuQmdELDJCQUEyQjs7O2dCQVo3RSxVQUFVOzs7O2dCQVJGLDJCQUEyQjs7SUF1QmxDO1FBREMsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7eURBR1IsY0FBYzs7NEVBUzVCO0lBR0Q7UUFEQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7O3lEQUNpQixpQkFBaUI7OytFQUUzRDtJQTVCRDtRQURDLFFBQVEsRUFBRTs7Ozs4REFHVjtJQUdEO1FBREMsUUFBUSxFQUFFOzs7OytEQUdWO0lBVFUseUJBQXlCO1FBTHJDLEtBQUssQ0FBNkI7WUFDakMsSUFBSSxFQUFFLDJCQUEyQjtZQUNqQyxRQUFRLEVBQUUsbUJBQUEsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLEVBQThCO1NBQzlELENBQUM7aURBYWlELDJCQUEyQjtPQVhqRSx5QkFBeUIsQ0ErQnJDO0lBQUQsZ0NBQUM7Q0FBQSxJQUFBO1NBL0JZLHlCQUF5Qjs7Ozs7O0lBV3hCLGdFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlLCBBY3Rpb24sIFN0YXRlQ29udGV4dCwgU2VsZWN0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IEdldFBlcm1pc3Npb25zLCBVcGRhdGVQZXJtaXNzaW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFN0YXRlPFBlcm1pc3Npb25NYW5hZ2VtZW50LlN0YXRlPih7XHJcbiAgbmFtZTogJ1Blcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IHBlcm1pc3Npb25SZXM6IHt9IH0gYXMgUGVybWlzc2lvbk1hbmFnZW1lbnQuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFBlcm1pc3Npb25Hcm91cHMoeyBwZXJtaXNzaW9uUmVzIH06IFBlcm1pc3Npb25NYW5hZ2VtZW50LlN0YXRlKSB7XHJcbiAgICByZXR1cm4gcGVybWlzc2lvblJlcy5ncm91cHMgfHwgW107XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRFbnRpdHlEaXNwbGF5TmFtZSh7IHBlcm1pc3Npb25SZXMgfTogUGVybWlzc2lvbk1hbmFnZW1lbnQuU3RhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHBlcm1pc3Npb25SZXMuZW50aXR5RGlzcGxheU5hbWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcm1pc3Npb25NYW5hZ2VtZW50U2VydmljZTogUGVybWlzc2lvbk1hbmFnZW1lbnRTZXJ2aWNlKSB7fVxyXG5cclxuICBAQWN0aW9uKEdldFBlcm1pc3Npb25zKVxyXG4gIHBlcm1pc3Npb25NYW5hZ2VtZW50R2V0KFxyXG4gICAgeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxQZXJtaXNzaW9uTWFuYWdlbWVudC5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQgfTogR2V0UGVybWlzc2lvbnMsXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9uTWFuYWdlbWVudFNlcnZpY2UuZ2V0UGVybWlzc2lvbnMocGF5bG9hZCkucGlwZShcclxuICAgICAgdGFwKHBlcm1pc3Npb25SZXNwb25zZSA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgcGVybWlzc2lvblJlczogcGVybWlzc2lvblJlc3BvbnNlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlUGVybWlzc2lvbnMpXHJcbiAgcGVybWlzc2lvbk1hbmFnZW1lbnRVcGRhdGUoXywgeyBwYXlsb2FkIH06IFVwZGF0ZVBlcm1pc3Npb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9uTWFuYWdlbWVudFNlcnZpY2UudXBkYXRlUGVybWlzc2lvbnMocGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==