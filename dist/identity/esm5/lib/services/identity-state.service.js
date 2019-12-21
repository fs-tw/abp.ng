/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/identity-state.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuaWRlbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaWRlbnRpdHktc3RhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUV6RDtJQUlFLDhCQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7Ozs7SUFFcEMsdUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELGlEQUFrQjs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBQ0QsdUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELGlEQUFrQjs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxLQUFLOzs7K0JBRGQ7Q0FzQkMsQUFsQkQsSUFrQkM7U0FmWSxvQkFBb0I7Ozs7OztJQUNuQixxQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBJZGVudGl0eVN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2lkZW50aXR5LnN0YXRlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eVN0YXRlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGdldFJvbGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoSWRlbnRpdHlTdGF0ZS5nZXRSb2xlcyk7XHJcbiAgfVxyXG4gIGdldFJvbGVzVG90YWxDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KElkZW50aXR5U3RhdGUuZ2V0Um9sZXNUb3RhbENvdW50KTtcclxuICB9XHJcbiAgZ2V0VXNlcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChJZGVudGl0eVN0YXRlLmdldFVzZXJzKTtcclxuICB9XHJcbiAgZ2V0VXNlcnNUb3RhbENvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoSWRlbnRpdHlTdGF0ZS5nZXRVc2Vyc1RvdGFsQ291bnQpO1xyXG4gIH1cclxufVxyXG4iXX0=