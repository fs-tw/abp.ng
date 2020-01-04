/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/identity-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { CreateRole, CreateUser, DeleteRole, DeleteUser, GetRoleById, GetRoles, GetUserById, GetUsers, UpdateRole, UpdateUser, GetUserRoles, } from '../actions/identity.actions';
import { IdentityState } from '../states/identity.state';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
export class IdentityStateService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    getRoles() {
        return this.store.selectSnapshot(IdentityState.getRoles);
    }
    /**
     * @return {?}
     */
    getRolesTotalCount() {
        return this.store.selectSnapshot(IdentityState.getRolesTotalCount);
    }
    /**
     * @return {?}
     */
    getUsers() {
        return this.store.selectSnapshot(IdentityState.getUsers);
    }
    /**
     * @return {?}
     */
    getUsersTotalCount() {
        return this.store.selectSnapshot(IdentityState.getUsersTotalCount);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchGetRoles(...args) {
        return this.store.dispatch(new GetRoles(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchGetRoleById(...args) {
        return this.store.dispatch(new GetRoleById(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchDeleteRole(...args) {
        return this.store.dispatch(new DeleteRole(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchCreateRole(...args) {
        return this.store.dispatch(new CreateRole(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchUpdateRole(...args) {
        return this.store.dispatch(new UpdateRole(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchGetUsers(...args) {
        return this.store.dispatch(new GetUsers(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchGetUserById(...args) {
        return this.store.dispatch(new GetUserById(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchDeleteUser(...args) {
        return this.store.dispatch(new DeleteUser(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchCreateUser(...args) {
        return this.store.dispatch(new CreateUser(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchUpdateUser(...args) {
        return this.store.dispatch(new UpdateUser(...args));
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    dispatchGetUserRoles(...args) {
        return this.store.dispatch(new GetUserRoles(...args));
    }
}
IdentityStateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
IdentityStateService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ IdentityStateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IdentityStateService_Factory() { return new IdentityStateService(i0.ɵɵinject(i1.Store)); }, token: IdentityStateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    IdentityStateService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuaWRlbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaWRlbnRpdHktc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksR0FDYixNQUFNLDZCQUE2QixDQUFDO0FBRXJDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBS3pELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRyxDQUFDOzs7O0lBRXBDLFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBQ0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBQ0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFHLElBQTRDO1FBQzlELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsR0FBRyxJQUErQztRQUNwRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEdBQUcsSUFBOEM7UUFDbEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxHQUFHLElBQThDO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsR0FBRyxJQUE4QztRQUNsRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEdBQUcsSUFBNEM7UUFDOUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxHQUFHLElBQStDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsR0FBRyxJQUE4QztRQUNsRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLEdBQUcsSUFBOEM7UUFDbEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxHQUFHLElBQThDO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsR0FBRyxJQUFnRDtRQUN0RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7WUE3REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBbkJRLEtBQUs7Ozs7Ozs7O0lBcUJBLHFDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFCUCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ3JlYXRlUm9sZSxcclxuICBDcmVhdGVVc2VyLFxyXG4gIERlbGV0ZVJvbGUsXHJcbiAgRGVsZXRlVXNlcixcclxuICBHZXRSb2xlQnlJZCxcclxuICBHZXRSb2xlcyxcclxuICBHZXRVc2VyQnlJZCxcclxuICBHZXRVc2VycyxcclxuICBVcGRhdGVSb2xlLFxyXG4gIFVwZGF0ZVVzZXIsXHJcbiAgR2V0VXNlclJvbGVzLFxyXG59IGZyb20gJy4uL2FjdGlvbnMvaWRlbnRpdHkuYWN0aW9ucyc7XHJcbmltcG9ydCB7IElkZW50aXR5IH0gZnJvbSAnLi4vbW9kZWxzL2lkZW50aXR5JztcclxuaW1wb3J0IHsgSWRlbnRpdHlTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9pZGVudGl0eS5zdGF0ZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWRlbnRpdHlTdGF0ZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBnZXRSb2xlcygpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KElkZW50aXR5U3RhdGUuZ2V0Um9sZXMpO1xyXG4gIH1cclxuICBnZXRSb2xlc1RvdGFsQ291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChJZGVudGl0eVN0YXRlLmdldFJvbGVzVG90YWxDb3VudCk7XHJcbiAgfVxyXG4gIGdldFVzZXJzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoSWRlbnRpdHlTdGF0ZS5nZXRVc2Vycyk7XHJcbiAgfVxyXG4gIGdldFVzZXJzVG90YWxDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KElkZW50aXR5U3RhdGUuZ2V0VXNlcnNUb3RhbENvdW50KTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoR2V0Um9sZXMoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBHZXRSb2xlcz4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRSb2xlcyguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaEdldFJvbGVCeUlkKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgR2V0Um9sZUJ5SWQ+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Um9sZUJ5SWQoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hEZWxldGVSb2xlKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgRGVsZXRlUm9sZT4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEZWxldGVSb2xlKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoQ3JlYXRlUm9sZSguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIENyZWF0ZVJvbGU+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ3JlYXRlUm9sZSguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaFVwZGF0ZVJvbGUoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBVcGRhdGVSb2xlPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZVJvbGUoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hHZXRVc2VycyguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIEdldFVzZXJzPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFVzZXJzKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoR2V0VXNlckJ5SWQoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBHZXRVc2VyQnlJZD4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRVc2VyQnlJZCguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaERlbGV0ZVVzZXIoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPHR5cGVvZiBEZWxldGVVc2VyPikge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVVzZXIoLi4uYXJncykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hDcmVhdGVVc2VyKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczx0eXBlb2YgQ3JlYXRlVXNlcj4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDcmVhdGVVc2VyKC4uLmFyZ3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoVXBkYXRlVXNlciguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIFVwZGF0ZVVzZXI+KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBkYXRlVXNlciguLi5hcmdzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaEdldFVzZXJSb2xlcyguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8dHlwZW9mIEdldFVzZXJSb2xlcz4pIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRVc2VyUm9sZXMoLi4uYXJncykpO1xyXG4gIH1cclxufVxyXG4iXX0=