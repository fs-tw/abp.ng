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
let TenantManagementState = class TenantManagementState {
    /**
     * @param {?} tenantManagementService
     */
    constructor(tenantManagementService) {
        this.tenantManagementService = tenantManagementService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static get({ result }) {
        return result.items || [];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getTenantsTotalCount({ result }) {
        return result.totalCount;
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    get({ patchState }, { payload }) {
        return this.tenantManagementService.getTenant(payload).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        result => patchState({
            result,
        }))));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getById({ patchState }, { payload }) {
        return this.tenantManagementService.getTenantById(payload).pipe(tap((/**
         * @param {?} selectedItem
         * @return {?}
         */
        selectedItem => patchState({
            selectedItem,
        }))));
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    delete(_, { payload }) {
        return this.tenantManagementService.deleteTenant(payload);
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    add(_, { payload }) {
        return this.tenantManagementService.createTenant(payload);
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    update({ getState }, { payload }) {
        return this.tenantManagementService.updateTenant(Object.assign({}, getState().selectedItem, payload));
    }
};
TenantManagementState.ctorParameters = () => [
    { type: TenantManagementService }
];
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
export { TenantManagementState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantManagementState.prototype.tenantManagementService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQuc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy90ZW5hbnQtbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQ0wsWUFBWSxFQUNaLFlBQVksRUFDWixhQUFhLEVBQ2IsVUFBVSxFQUNWLFlBQVksR0FDYixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0lBTW5FLHFCQUFxQixTQUFyQixxQkFBcUI7Ozs7SUFXaEMsWUFBb0IsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFBRyxDQUFDOzs7OztJQVR4RSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUEwQjtRQUMzQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBR0QsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsTUFBTSxFQUEwQjtRQUM1RCxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBS0QsR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUF3QyxFQUFFLEVBQUUsT0FBTyxFQUFjO1FBQy9FLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3pELEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUNYLFVBQVUsQ0FBQztZQUNULE1BQU07U0FDUCxDQUFDLEVBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsT0FBTyxDQUFDLEVBQUUsVUFBVSxFQUF3QyxFQUFFLEVBQUUsT0FBTyxFQUFpQjtRQUN0RixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM3RCxHQUFHOzs7O1FBQUMsWUFBWSxDQUFDLEVBQUUsQ0FDakIsVUFBVSxDQUFDO1lBQ1QsWUFBWTtTQUNiLENBQUMsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFnQjtRQUNqQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBR0QsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBZ0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBd0MsRUFBRSxFQUFFLE9BQU8sRUFBZ0I7UUFDbEYsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxtQkFBTSxRQUFRLEVBQUUsQ0FBQyxZQUFZLEVBQUssT0FBTyxFQUFHLENBQUM7SUFDL0YsQ0FBQztDQUNGLENBQUE7O1lBdEM4Qyx1QkFBdUI7O0FBR3BFO0lBREMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7cURBQ29ELFVBQVU7O2dEQVFoRjtBQUdEO0lBREMsTUFBTSxDQUFDLGFBQWEsQ0FBQzs7cURBQ3FELGFBQWE7O29EQVF2RjtBQUdEO0lBREMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7cURBQ0UsWUFBWTs7bURBRWxDO0FBR0Q7SUFEQyxNQUFNLENBQUMsWUFBWSxDQUFDOztxREFDRCxZQUFZOztnREFFL0I7QUFHRDtJQURDLE1BQU0sQ0FBQyxZQUFZLENBQUM7O3FEQUNtRCxZQUFZOzttREFFbkY7QUE5Q0Q7SUFEQyxRQUFRLEVBQUU7Ozs7c0NBR1Y7QUFHRDtJQURDLFFBQVEsRUFBRTs7Ozt1REFHVjtBQVRVLHFCQUFxQjtJQUpqQyxLQUFLLENBQXlCO1FBQzdCLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsUUFBUSxFQUFFLG1CQUFBLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLEVBQTBCO0tBQ3JFLENBQUM7NkNBWTZDLHVCQUF1QjtHQVh6RCxxQkFBcUIsQ0FpRGpDO1NBakRZLHFCQUFxQjs7Ozs7O0lBV3BCLHdEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFCUCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiwgU2VsZWN0b3IsIFN0YXRlLCBTdGF0ZUNvbnRleHQgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtcclxuICBDcmVhdGVUZW5hbnQsXHJcbiAgRGVsZXRlVGVuYW50LFxyXG4gIEdldFRlbmFudEJ5SWQsXHJcbiAgR2V0VGVuYW50cyxcclxuICBVcGRhdGVUZW5hbnQsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy90ZW5hbnQtbWFuYWdlbWVudC5hY3Rpb25zJztcclxuaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy90ZW5hbnQtbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdGVuYW50LW1hbmFnZW1lbnQuc2VydmljZSc7XHJcblxyXG5AU3RhdGU8VGVuYW50TWFuYWdlbWVudC5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdUZW5hbnRNYW5hZ2VtZW50U3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IHJlc3VsdDoge30sIHNlbGVjdGVkSXRlbToge30gfSBhcyBUZW5hbnRNYW5hZ2VtZW50LlN0YXRlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50TWFuYWdlbWVudFN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXQoeyByZXN1bHQgfTogVGVuYW50TWFuYWdlbWVudC5TdGF0ZSk6IEFCUC5CYXNpY0l0ZW1bXSB7XHJcbiAgICByZXR1cm4gcmVzdWx0Lml0ZW1zIHx8IFtdO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0VGVuYW50c1RvdGFsQ291bnQoeyByZXN1bHQgfTogVGVuYW50TWFuYWdlbWVudC5TdGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcmVzdWx0LnRvdGFsQ291bnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlOiBUZW5hbnRNYW5hZ2VtZW50U2VydmljZSkge31cclxuXHJcbiAgQEFjdGlvbihHZXRUZW5hbnRzKVxyXG4gIGdldCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFRlbmFudE1hbmFnZW1lbnQuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0VGVuYW50cykge1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50TWFuYWdlbWVudFNlcnZpY2UuZ2V0VGVuYW50KHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChyZXN1bHQgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEdldFRlbmFudEJ5SWQpXHJcbiAgZ2V0QnlJZCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFRlbmFudE1hbmFnZW1lbnQuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0VGVuYW50QnlJZCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50TWFuYWdlbWVudFNlcnZpY2UuZ2V0VGVuYW50QnlJZChwYXlsb2FkKS5waXBlKFxyXG4gICAgICB0YXAoc2VsZWN0ZWRJdGVtID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihEZWxldGVUZW5hbnQpXHJcbiAgZGVsZXRlKF8sIHsgcGF5bG9hZCB9OiBEZWxldGVUZW5hbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlLmRlbGV0ZVRlbmFudChwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oQ3JlYXRlVGVuYW50KVxyXG4gIGFkZChfLCB7IHBheWxvYWQgfTogQ3JlYXRlVGVuYW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZW5hbnRNYW5hZ2VtZW50U2VydmljZS5jcmVhdGVUZW5hbnQocGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKFVwZGF0ZVRlbmFudClcclxuICB1cGRhdGUoeyBnZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8VGVuYW50TWFuYWdlbWVudC5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBVcGRhdGVUZW5hbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlLnVwZGF0ZVRlbmFudCh7IC4uLmdldFN0YXRlKCkuc2VsZWN0ZWRJdGVtLCAuLi5wYXlsb2FkIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=