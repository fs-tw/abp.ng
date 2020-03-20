/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/identity.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { tap, pluck } from 'rxjs/operators';
import { CreateRole, CreateUser, DeleteRole, DeleteUser, GetRoleById, GetRoles, GetUserById, GetUsers, UpdateRole, UpdateUser, GetUserRoles, } from '../actions/identity.actions';
import { IdentityService } from '../services/identity.service';
import { Injectable } from '@angular/core';
let IdentityState = class IdentityState {
    /**
     * @param {?} identityService
     */
    constructor(identityService) {
        this.identityService = identityService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getRoles({ roles }) {
        return roles.items || [];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getRolesTotalCount({ roles }) {
        return roles.totalCount || 0;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getUsers({ users }) {
        return users.items || [];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getUsersTotalCount({ users }) {
        return users.totalCount || 0;
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getRoles({ patchState }, { payload }) {
        return this.identityService.getRoles(payload).pipe(tap((/**
         * @param {?} roles
         * @return {?}
         */
        roles => patchState({
            roles,
        }))));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getRole({ patchState }, { payload }) {
        return this.identityService.getRoleById(payload).pipe(tap((/**
         * @param {?} selectedRole
         * @return {?}
         */
        selectedRole => patchState({
            selectedRole,
        }))));
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    deleteRole(_, { payload }) {
        return this.identityService.deleteRole(payload);
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    addRole(_, { payload }) {
        return this.identityService.createRole(payload);
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    updateRole({ getState }, { payload }) {
        return this.identityService.updateRole(Object.assign({}, getState().selectedRole, payload));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getUsers({ patchState }, { payload }) {
        return this.identityService.getUsers(payload).pipe(tap((/**
         * @param {?} users
         * @return {?}
         */
        users => patchState({
            users,
        }))));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getUser({ patchState }, { payload }) {
        return this.identityService.getUserById(payload).pipe(tap((/**
         * @param {?} selectedUser
         * @return {?}
         */
        selectedUser => patchState({
            selectedUser,
        }))));
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    deleteUser(_, { payload }) {
        return this.identityService.deleteUser(payload);
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    addUser(_, { payload }) {
        return this.identityService.createUser(payload);
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    updateUser({ getState }, { payload }) {
        return this.identityService.updateUser(Object.assign({}, getState().selectedUser, payload));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getUserRoles({ patchState }, { payload }) {
        return this.identityService.getUserRoles(payload).pipe(pluck('items'), tap((/**
         * @param {?} selectedUserRoles
         * @return {?}
         */
        selectedUserRoles => patchState({
            selectedUserRoles,
        }))));
    }
};
IdentityState.ctorParameters = () => [
    { type: IdentityService }
];
IdentityState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
IdentityState.ctorParameters = () => [
    { type: IdentityService }
];
tslib_1.__decorate([
    Action(GetRoles),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, GetRoles]),
    tslib_1.__metadata("design:returntype", void 0)
], IdentityState.prototype, "getRoles", null);
tslib_1.__decorate([
    Action(GetRoleById),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, GetRoleById]),
    tslib_1.__metadata("design:returntype", void 0)
], IdentityState.prototype, "getRole", null);
tslib_1.__decorate([
    Action(DeleteRole),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, GetRoleById]),
    tslib_1.__metadata("design:returntype", void 0)
], IdentityState.prototype, "deleteRole", null);
tslib_1.__decorate([
    Action(CreateRole),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, CreateRole]),
    tslib_1.__metadata("design:returntype", void 0)
], IdentityState.prototype, "addRole", null);
tslib_1.__decorate([
    Action(UpdateRole),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, UpdateRole]),
    tslib_1.__metadata("design:returntype", void 0)
], IdentityState.prototype, "updateRole", null);
tslib_1.__decorate([
    Action(GetUsers),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, GetUsers]),
    tslib_1.__metadata("design:returntype", void 0)
], IdentityState.prototype, "getUsers", null);
tslib_1.__decorate([
    Action(GetUserById),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, GetUserById]),
    tslib_1.__metadata("design:returntype", void 0)
], IdentityState.prototype, "getUser", null);
tslib_1.__decorate([
    Action(DeleteUser),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, GetUserById]),
    tslib_1.__metadata("design:returntype", void 0)
], IdentityState.prototype, "deleteUser", null);
tslib_1.__decorate([
    Action(CreateUser),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, CreateUser]),
    tslib_1.__metadata("design:returntype", void 0)
], IdentityState.prototype, "addUser", null);
tslib_1.__decorate([
    Action(UpdateUser),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, UpdateUser]),
    tslib_1.__metadata("design:returntype", void 0)
], IdentityState.prototype, "updateUser", null);
tslib_1.__decorate([
    Action(GetUserRoles),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, GetUserRoles]),
    tslib_1.__metadata("design:returntype", void 0)
], IdentityState.prototype, "getUserRoles", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Array)
], IdentityState, "getRoles", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Number)
], IdentityState, "getRolesTotalCount", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Array)
], IdentityState, "getUsers", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Number)
], IdentityState, "getUsersTotalCount", null);
IdentityState = tslib_1.__decorate([
    State({
        name: 'IdentityState',
        defaults: (/** @type {?} */ ({ roles: {}, selectedRole: {}, users: {}, selectedUser: {} })),
    }),
    tslib_1.__metadata("design:paramtypes", [IdentityService])
], IdentityState);
export { IdentityState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IdentityState.prototype.identityService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmlkZW50aXR5LyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy9pZGVudGl0eS5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBYSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLFdBQVcsRUFDWCxRQUFRLEVBQ1IsVUFBVSxFQUNWLFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSw2QkFBNkIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztJQU85QixhQUFhLFNBQWIsYUFBYTs7OztJQXFCeEIsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQzs7Ozs7SUFuQnhELE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQWtCO1FBQ3ZDLE9BQU8sS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFHRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBRSxLQUFLLEVBQWtCO1FBQ2pELE9BQU8sS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFHRCxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFrQjtRQUN2QyxPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBR0QsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVB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QUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsRUFBa0I7S0FDekYsQ0FBQzs2Q0F1QnFDLGVBQWU7R0FyQnpDLGFBQWEsQ0E0R3pCO1NBNUdZLGFBQWE7Ozs7OztJQXFCWix3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24sIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCwgcGx1Y2sgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7XHJcbiAgQ3JlYXRlUm9sZSxcclxuICBDcmVhdGVVc2VyLFxyXG4gIERlbGV0ZVJvbGUsXHJcbiAgRGVsZXRlVXNlcixcclxuICBHZXRSb2xlQnlJZCxcclxuICBHZXRSb2xlcyxcclxuICBHZXRVc2VyQnlJZCxcclxuICBHZXRVc2VycyxcclxuICBVcGRhdGVSb2xlLFxyXG4gIFVwZGF0ZVVzZXIsXHJcbiAgR2V0VXNlclJvbGVzLFxyXG59IGZyb20gJy4uL2FjdGlvbnMvaWRlbnRpdHkuYWN0aW9ucyc7XHJcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi4vbW9kZWxzL2lkZW50aXR5JztcclxuaW1wb3J0IHsgSWRlbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaWRlbnRpdHkuc2VydmljZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBTdGF0ZTxJZGVudGl0eS5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdJZGVudGl0eVN0YXRlJyxcclxuICBkZWZhdWx0czogeyByb2xlczoge30sIHNlbGVjdGVkUm9sZToge30sIHVzZXJzOiB7fSwgc2VsZWN0ZWRVc2VyOiB7fSB9IGFzIElkZW50aXR5LlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eVN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRSb2xlcyh7IHJvbGVzIH06IElkZW50aXR5LlN0YXRlKTogSWRlbnRpdHkuUm9sZUl0ZW1bXSB7XHJcbiAgICByZXR1cm4gcm9sZXMuaXRlbXMgfHwgW107XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRSb2xlc1RvdGFsQ291bnQoeyByb2xlcyB9OiBJZGVudGl0eS5TdGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcm9sZXMudG90YWxDb3VudCB8fCAwO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0VXNlcnMoeyB1c2VycyB9OiBJZGVudGl0eS5TdGF0ZSk6IElkZW50aXR5LlVzZXJJdGVtW10ge1xyXG4gICAgcmV0dXJuIHVzZXJzLml0ZW1zIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0VXNlcnNUb3RhbENvdW50KHsgdXNlcnMgfTogSWRlbnRpdHkuU3RhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHVzZXJzLnRvdGFsQ291bnQgfHwgMDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaWRlbnRpdHlTZXJ2aWNlOiBJZGVudGl0eVNlcnZpY2UpIHt9XHJcblxyXG4gIEBBY3Rpb24oR2V0Um9sZXMpXHJcbiAgZ2V0Um9sZXMoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxJZGVudGl0eS5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRSb2xlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHlTZXJ2aWNlLmdldFJvbGVzKHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChyb2xlcyA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgcm9sZXMsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihHZXRSb2xlQnlJZClcclxuICBnZXRSb2xlKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8SWRlbnRpdHkuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0Um9sZUJ5SWQpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5U2VydmljZS5nZXRSb2xlQnlJZChwYXlsb2FkKS5waXBlKFxyXG4gICAgICB0YXAoc2VsZWN0ZWRSb2xlID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICBzZWxlY3RlZFJvbGUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihEZWxldGVSb2xlKVxyXG4gIGRlbGV0ZVJvbGUoXywgeyBwYXlsb2FkIH06IEdldFJvbGVCeUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZGVudGl0eVNlcnZpY2UuZGVsZXRlUm9sZShwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oQ3JlYXRlUm9sZSlcclxuICBhZGRSb2xlKF8sIHsgcGF5bG9hZCB9OiBDcmVhdGVSb2xlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZGVudGl0eVNlcnZpY2UuY3JlYXRlUm9sZShwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlUm9sZSlcclxuICB1cGRhdGVSb2xlKHsgZ2V0U3RhdGUgfTogU3RhdGVDb250ZXh0PElkZW50aXR5LlN0YXRlPiwgeyBwYXlsb2FkIH06IFVwZGF0ZVJvbGUpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5U2VydmljZS51cGRhdGVSb2xlKHsgLi4uZ2V0U3RhdGUoKS5zZWxlY3RlZFJvbGUsIC4uLnBheWxvYWQgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEdldFVzZXJzKVxyXG4gIGdldFVzZXJzKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8SWRlbnRpdHkuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0VXNlcnMpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5U2VydmljZS5nZXRVc2VycyhwYXlsb2FkKS5waXBlKFxyXG4gICAgICB0YXAodXNlcnMgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHVzZXJzLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oR2V0VXNlckJ5SWQpXHJcbiAgZ2V0VXNlcih7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PElkZW50aXR5LlN0YXRlPiwgeyBwYXlsb2FkIH06IEdldFVzZXJCeUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZGVudGl0eVNlcnZpY2UuZ2V0VXNlckJ5SWQocGF5bG9hZCkucGlwZShcclxuICAgICAgdGFwKHNlbGVjdGVkVXNlciA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgc2VsZWN0ZWRVc2VyLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oRGVsZXRlVXNlcilcclxuICBkZWxldGVVc2VyKF8sIHsgcGF5bG9hZCB9OiBHZXRVc2VyQnlJZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHlTZXJ2aWNlLmRlbGV0ZVVzZXIocGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKENyZWF0ZVVzZXIpXHJcbiAgYWRkVXNlcihfLCB7IHBheWxvYWQgfTogQ3JlYXRlVXNlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHlTZXJ2aWNlLmNyZWF0ZVVzZXIocGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFVwZGF0ZVVzZXIpXHJcbiAgdXBkYXRlVXNlcih7IGdldFN0YXRlIH06IFN0YXRlQ29udGV4dDxJZGVudGl0eS5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBVcGRhdGVVc2VyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZGVudGl0eVNlcnZpY2UudXBkYXRlVXNlcih7IC4uLmdldFN0YXRlKCkuc2VsZWN0ZWRVc2VyLCAuLi5wYXlsb2FkIH0pO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihHZXRVc2VyUm9sZXMpXHJcbiAgZ2V0VXNlclJvbGVzKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8SWRlbnRpdHkuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0VXNlclJvbGVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZGVudGl0eVNlcnZpY2UuZ2V0VXNlclJvbGVzKHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHBsdWNrKCdpdGVtcycpLFxyXG4gICAgICB0YXAoc2VsZWN0ZWRVc2VyUm9sZXMgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHNlbGVjdGVkVXNlclJvbGVzLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19