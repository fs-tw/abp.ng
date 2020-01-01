/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/permission-management-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { PermissionManagementState } from '../states/permission-management.state';
import { GetPermissions, UpdatePermissions } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
export class PermissionManagementStateService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    getPermissionGroups() {
        return this.store.selectSnapshot(PermissionManagementState.getPermissionGroups);
    }
    /**
     * @return {?}
     */
    getEntityDisplayName() {
        return this.store.selectSnapshot(PermissionManagementState.getEntityDisplayName);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchGetPermissions(...args) {
        return this.store.dispatch(new GetPermissions(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchUpdatePermissions(...args) {
        return this.store.dispatch(new UpdatePermissions(...args));
    }
}
PermissionManagementStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PermissionManagementStateService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ PermissionManagementStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PermissionManagementStateService_Factory() { return new PermissionManagementStateService(i0.ɵɵinject(i1.Store)); }, token: PermissionManagementStateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    PermissionManagementStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LXN0YXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnBlcm1pc3Npb24tbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVsRixPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFLL0QsTUFBTSxPQUFPLGdDQUFnQzs7OztJQUMzQyxZQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7Ozs7SUFFcEMsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7O0lBQ0Qsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQUVELHNCQUFzQixDQUFDLEdBQUcsSUFBa0Q7UUFDMUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxHQUFHLElBQXFEO1FBQ2hGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBbkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLEtBQUs7Ozs7Ozs7O0lBU0EsaURBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnRTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuc3RhdGUnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IEdldFBlcm1pc3Npb25zLCBVcGRhdGVQZXJtaXNzaW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25NYW5hZ2VtZW50U3RhdGVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgZ2V0UGVybWlzc2lvbkdyb3VwcygpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFBlcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUuZ2V0UGVybWlzc2lvbkdyb3Vwcyk7XHJcbiAgfVxyXG4gIGdldEVudGl0eURpc3BsYXlOYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoUGVybWlzc2lvbk1hbmFnZW1lbnRTdGF0ZS5nZXRFbnRpdHlEaXNwbGF5TmFtZSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaEdldFBlcm1pc3Npb25zKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgR2V0UGVybWlzc2lvbnM+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0UGVybWlzc2lvbnMoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hVcGRhdGVQZXJtaXNzaW9ucyguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIFVwZGF0ZVBlcm1pc3Npb25zPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZVBlcm1pc3Npb25zKC4uLmFyZ3MpKTtcclxuICB9XHJcbn1cclxuIl19