/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/identity-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { CreateRole, CreateUser, DeleteRole, DeleteUser, GetRoleById, GetRoles, GetUserById, GetUsers, UpdateRole, UpdateUser, GetUserRoles, } from '../actions/identity.actions';
import { IdentityState } from '../states/identity.state';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
var IdentityStateService = /** @class */ (function () {
    function IdentityStateService(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    IdentityStateService.prototype.getRoles = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(IdentityState.getRoles);
    };
    /**
     * @return {?}
     */
    IdentityStateService.prototype.getRolesTotalCount = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(IdentityState.getRolesTotalCount);
    };
    /**
     * @return {?}
     */
    IdentityStateService.prototype.getUsers = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(IdentityState.getUsers);
    };
    /**
     * @return {?}
     */
    IdentityStateService.prototype.getUsersTotalCount = /**
     * @return {?}
     */
    function () {
        return this.store.selectSnapshot(IdentityState.getUsersTotalCount);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    IdentityStateService.prototype.dispatchGetRoles = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (GetRoles.bind.apply(GetRoles, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    IdentityStateService.prototype.dispatchGetRoleById = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (GetRoleById.bind.apply(GetRoleById, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    IdentityStateService.prototype.dispatchDeleteRole = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (DeleteRole.bind.apply(DeleteRole, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    IdentityStateService.prototype.dispatchCreateRole = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (CreateRole.bind.apply(CreateRole, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    IdentityStateService.prototype.dispatchUpdateRole = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (UpdateRole.bind.apply(UpdateRole, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    IdentityStateService.prototype.dispatchGetUsers = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (GetUsers.bind.apply(GetUsers, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    IdentityStateService.prototype.dispatchGetUserById = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (GetUserById.bind.apply(GetUserById, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    IdentityStateService.prototype.dispatchDeleteUser = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (DeleteUser.bind.apply(DeleteUser, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    IdentityStateService.prototype.dispatchCreateUser = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (CreateUser.bind.apply(CreateUser, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    IdentityStateService.prototype.dispatchUpdateUser = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (UpdateUser.bind.apply(UpdateUser, tslib_1.__spread([void 0], args)))());
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    IdentityStateService.prototype.dispatchGetUserRoles = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (GetUserRoles.bind.apply(GetUserRoles, tslib_1.__spread([void 0], args)))());
    };
    IdentityStateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    IdentityStateService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ IdentityStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IdentityStateService_Factory() { return new IdentityStateService(i0.ɵɵinject(i1.Store)); }, token: IdentityStateService, providedIn: "root" });
    return IdentityStateService;
}());
export { IdentityStateService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IdentityStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuaWRlbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaWRlbnRpdHktc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLFdBQVcsRUFDWCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSw2QkFBNkIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUV6RDtJQUlFLDhCQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7Ozs7SUFFcEMsdUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELGlEQUFrQjs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBQ0QsdUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELGlEQUFrQjs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7OztJQUVE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LEVBQW5ELHFCQUFtRCxFQUFuRCxJQUFtRDtZQUFuRCx5QkFBbUQ7O1FBQ3RFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLE1BQUssWUFBWSxZQUFaLFlBQVksNkJBQUksSUFBSSxNQUFFLENBQUM7SUFDeEQsQ0FBQzs7Z0JBN0RGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBbkJRLEtBQUs7OzsrQkFGZDtDQWlGQyxBQTlERCxJQThEQztTQTNEWSxvQkFBb0I7Ozs7OztJQUNuQixxQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENyZWF0ZVJvbGUsXHJcbiAgQ3JlYXRlVXNlcixcclxuICBEZWxldGVSb2xlLFxyXG4gIERlbGV0ZVVzZXIsXHJcbiAgR2V0Um9sZUJ5SWQsXHJcbiAgR2V0Um9sZXMsXHJcbiAgR2V0VXNlckJ5SWQsXHJcbiAgR2V0VXNlcnMsXHJcbiAgVXBkYXRlUm9sZSxcclxuICBVcGRhdGVVc2VyLFxyXG4gIEdldFVzZXJSb2xlcyxcclxufSBmcm9tICcuLi9hY3Rpb25zL2lkZW50aXR5LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBJZGVudGl0eSB9IGZyb20gJy4uL21vZGVscy9pZGVudGl0eSc7XHJcbmltcG9ydCB7IElkZW50aXR5U3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvaWRlbnRpdHkuc3RhdGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIElkZW50aXR5U3RhdGVTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgZ2V0Um9sZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChJZGVudGl0eVN0YXRlLmdldFJvbGVzKTtcclxuICB9XHJcbiAgZ2V0Um9sZXNUb3RhbENvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoSWRlbnRpdHlTdGF0ZS5nZXRSb2xlc1RvdGFsQ291bnQpO1xyXG4gIH1cclxuICBnZXRVc2VycygpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KElkZW50aXR5U3RhdGUuZ2V0VXNlcnMpO1xyXG4gIH1cclxuICBnZXRVc2Vyc1RvdGFsQ291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChJZGVudGl0eVN0YXRlLmdldFVzZXJzVG90YWxDb3VudCk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaEdldFJvbGVzKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgR2V0Um9sZXM+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Um9sZXMoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hHZXRSb2xlQnlJZCguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIEdldFJvbGVCeUlkPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFJvbGVCeUlkKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoRGVsZXRlUm9sZSguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIERlbGV0ZVJvbGU+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlUm9sZSguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaENyZWF0ZVJvbGUoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBDcmVhdGVSb2xlPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENyZWF0ZVJvbGUoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hVcGRhdGVSb2xlKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgVXBkYXRlUm9sZT4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGRhdGVSb2xlKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoR2V0VXNlcnMoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBHZXRVc2Vycz4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRVc2VycyguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaEdldFVzZXJCeUlkKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgR2V0VXNlckJ5SWQ+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0VXNlckJ5SWQoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hEZWxldGVVc2VyKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgRGVsZXRlVXNlcj4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVVc2VyKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoQ3JlYXRlVXNlciguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIENyZWF0ZVVzZXI+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ3JlYXRlVXNlciguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaFVwZGF0ZVVzZXIoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBVcGRhdGVVc2VyPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZVVzZXIoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hHZXRVc2VyUm9sZXMoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBHZXRVc2VyUm9sZXM+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0VXNlclJvbGVzKC4uLmFyZ3MpKTtcclxuICB9XHJcbn1cclxuIl19