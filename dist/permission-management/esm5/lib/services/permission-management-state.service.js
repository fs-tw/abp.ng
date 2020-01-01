/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/permission-management-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { PermissionManagementState } from '../states/permission-management.state';
import { GetPermissions, UpdatePermissions } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
var PermissionManagementStateService = /** @class */ (function () {
    function PermissionManagementStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    PermissionManagementStateService.prototype.getPermissionGroups = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(PermissionManagementState.getPermissionGroups);
    };
    /**
     * @return {?}
     */
    PermissionManagementStateService.prototype.getEntityDisplayName = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(PermissionManagementState.getEntityDisplayName);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    PermissionManagementStateService.prototype.dispatchGetPermissions = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (GetPermissions.bind.apply(GetPermissions, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    PermissionManagementStateService.prototype.dispatchUpdatePermissions = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (UpdatePermissions.bind.apply(UpdatePermissions, tslib_1.__spread([void 0], args)))());
    };
    PermissionManagementStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PermissionManagementStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ PermissionManagementStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PermissionManagementStateService_Factory() { return new PermissionManagementStateService(i0.ɵɵinject(i1.Store)); }, token: PermissionManagementStateService, providedIn: "root" });
    return PermissionManagementStateService;
}());
export { PermissionManagementStateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PermissionManagementStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnBlcm1pc3Npb24tbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBRS9EO0lBSUUsMENBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQzs7OztJQUVwQyw4REFBbUI7OztJQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7O0lBQ0QsK0RBQW9COzs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFRCxpRUFBc0I7Ozs7SUFBdEI7UUFBdUIsY0FBcUQ7YUFBckQsVUFBcUQsRUFBckQscUJBQXFELEVBQXJELElBQXFEO1lBQXJELHlCQUFxRDs7UUFDMUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsTUFBSyxjQUFjLFlBQWQsY0FBYyw2QkFBSSxJQUFJLE1BQUUsQ0FBQztJQUMxRCxDQUFDOzs7OztJQUVELG9FQUF5Qjs7OztJQUF6QjtRQUEwQixjQUF3RDthQUF4RCxVQUF3RCxFQUF4RCxxQkFBd0QsRUFBeEQsSUFBd0Q7WUFBeEQseUJBQXdEOztRQUNoRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxNQUFLLGlCQUFpQixZQUFqQixpQkFBaUIsNkJBQUksSUFBSSxNQUFFLENBQUM7SUFDN0QsQ0FBQzs7Z0JBbkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsS0FBSzs7OzJDQURkO0NBMEJDLEFBcEJELElBb0JDO1NBakJZLGdDQUFnQzs7Ozs7O0lBQy9CLGlEQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvcGVybWlzc2lvbi1tYW5hZ2VtZW50LnN0YXRlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBHZXRQZXJtaXNzaW9ucywgVXBkYXRlUGVybWlzc2lvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uTWFuYWdlbWVudFN0YXRlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGdldFBlcm1pc3Npb25Hcm91cHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChQZXJtaXNzaW9uTWFuYWdlbWVudFN0YXRlLmdldFBlcm1pc3Npb25Hcm91cHMpO1xyXG4gIH1cclxuICBnZXRFbnRpdHlEaXNwbGF5TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFBlcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUuZ2V0RW50aXR5RGlzcGxheU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hHZXRQZXJtaXNzaW9ucyguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIEdldFBlcm1pc3Npb25zPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFBlcm1pc3Npb25zKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoVXBkYXRlUGVybWlzc2lvbnMoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBVcGRhdGVQZXJtaXNzaW9ucz4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGRhdGVQZXJtaXNzaW9ucyguLi5hcmdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==