/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/tenant-management-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { TenantManagementState } from '../states/tenant-management.state';
import { GetTenants, GetTenantById, CreateTenant, UpdateTenant, DeleteTenant } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
var TenantManagementStateService = /** @class */ (function () {
    function TenantManagementStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    TenantManagementStateService.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(TenantManagementState.get);
    };
    /**
     * @return {?}
     */
    TenantManagementStateService.prototype.getTenantsTotalCount = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(TenantManagementState.getTenantsTotalCount);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    TenantManagementStateService.prototype.dispatchGetTenants = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (GetTenants.bind.apply(GetTenants, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    TenantManagementStateService.prototype.dispatchGetTenantById = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (GetTenantById.bind.apply(GetTenantById, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    TenantManagementStateService.prototype.dispatchCreateTenant = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (CreateTenant.bind.apply(CreateTenant, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    TenantManagementStateService.prototype.dispatchUpdateTenant = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (UpdateTenant.bind.apply(UpdateTenant, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    TenantManagementStateService.prototype.dispatchDeleteTenant = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (DeleteTenant.bind.apply(DeleteTenant, tslib_1.__spread([void 0], args)))());
    };
    TenantManagementStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    TenantManagementStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ TenantManagementStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TenantManagementStateService_Factory() { return new TenantManagementStateService(i0.ɵɵinject(i1.Store)); }, token: TenantManagementStateService, providedIn: "root" });
    return TenantManagementStateService;
}());
export { TenantManagementStateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantManagementStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQtc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGVuYW50LW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdGVuYW50LW1hbmFnZW1lbnQtc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQUdqRztJQUlFLHNDQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7Ozs7SUFFcEMsMENBQUc7OztJQUFIO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBRUQsMkRBQW9COzs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUFFRCx5REFBa0I7Ozs7SUFBbEI7UUFBbUIsY0FBaUQ7YUFBakQsVUFBaUQsRUFBakQscUJBQWlELEVBQWpELElBQWlEO1lBQWpELHlCQUFpRDs7UUFDbEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsTUFBSyxVQUFVLFlBQVYsVUFBVSw2QkFBSSxJQUFJLE1BQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELDREQUFxQjs7OztJQUFyQjtRQUFzQixjQUFvRDthQUFwRCxVQUFvRCxFQUFwRCxxQkFBb0QsRUFBcEQsSUFBb0Q7WUFBcEQseUJBQW9EOztRQUN4RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxNQUFLLGFBQWEsWUFBYixhQUFhLDZCQUFJLElBQUksTUFBRSxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsMkRBQW9COzs7O0lBQXBCO1FBQXFCLGNBQW1EO2FBQW5ELFVBQW1ELEVBQW5ELHFCQUFtRCxFQUFuRCxJQUFtRDtZQUFuRCx5QkFBbUQ7O1FBQ3RFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLE1BQUssWUFBWSxZQUFaLFlBQVksNkJBQUksSUFBSSxNQUFFLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFRCwyREFBb0I7Ozs7SUFBcEI7UUFBcUIsY0FBbUQ7YUFBbkQsVUFBbUQsRUFBbkQscUJBQW1ELEVBQW5ELElBQW1EO1lBQW5ELHlCQUFtRDs7UUFDdEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsTUFBSyxZQUFZLFlBQVosWUFBWSw2QkFBSSxJQUFJLE1BQUUsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELDJEQUFvQjs7OztJQUFwQjtRQUFxQixjQUFtRDthQUFuRCxVQUFtRCxFQUFuRCxxQkFBbUQsRUFBbkQsSUFBbUQ7WUFBbkQseUJBQW1EOztRQUN0RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxNQUFLLFlBQVksWUFBWixZQUFZLDZCQUFJLElBQUksTUFBRSxDQUFDO0lBQ3hELENBQUM7O2dCQWhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJRLEtBQUs7Ozt1Q0FEZDtDQXdDQyxBQWpDRCxJQWlDQztTQTlCWSw0QkFBNEI7Ozs7OztJQUMzQiw2Q0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50U3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvdGVuYW50LW1hbmFnZW1lbnQuc3RhdGUnO1xyXG5pbXBvcnQgeyBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBHZXRUZW5hbnRzLCBHZXRUZW5hbnRCeUlkLCBDcmVhdGVUZW5hbnQsIFVwZGF0ZVRlbmFudCwgRGVsZXRlVGVuYW50IH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudE1hbmFnZW1lbnRTdGF0ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBnZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChUZW5hbnRNYW5hZ2VtZW50U3RhdGUuZ2V0KTtcclxuICB9XHJcblxyXG4gIGdldFRlbmFudHNUb3RhbENvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoVGVuYW50TWFuYWdlbWVudFN0YXRlLmdldFRlbmFudHNUb3RhbENvdW50KTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoR2V0VGVuYW50cyguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIEdldFRlbmFudHM+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0VGVuYW50cyguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaEdldFRlbmFudEJ5SWQoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBHZXRUZW5hbnRCeUlkPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFRlbmFudEJ5SWQoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hDcmVhdGVUZW5hbnQoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBDcmVhdGVUZW5hbnQ+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ3JlYXRlVGVuYW50KC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoVXBkYXRlVGVuYW50KC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgVXBkYXRlVGVuYW50Pikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZVRlbmFudCguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaERlbGV0ZVRlbmFudCguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIERlbGV0ZVRlbmFudD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVUZW5hbnQoLi4uYXJncykpO1xyXG4gIH1cclxufVxyXG4iXX0=