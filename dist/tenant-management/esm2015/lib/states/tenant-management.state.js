import { __decorate, __metadata } from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { CreateTenant, DeleteTenant, GetTenantById, GetTenants, UpdateTenant, } from '../actions/tenant-management.actions';
import { TenantManagementService } from '../services/tenant-management.service';
import { Injectable } from '@angular/core';
let TenantManagementState = class TenantManagementState {
    constructor(tenantManagementService) {
        this.tenantManagementService = tenantManagementService;
    }
    static get({ result }) {
        return result.items || [];
    }
    static getTenantsTotalCount({ result }) {
        return result.totalCount;
    }
    get({ patchState }, { payload }) {
        return this.tenantManagementService.getTenant(payload).pipe(tap(result => patchState({
            result,
        })));
    }
    getById({ patchState }, { payload }) {
        return this.tenantManagementService.getTenantById(payload).pipe(tap(selectedItem => patchState({
            selectedItem,
        })));
    }
    delete(_, { payload }) {
        return this.tenantManagementService.deleteTenant(payload);
    }
    add(_, { payload }) {
        return this.tenantManagementService.createTenant(payload);
    }
    update({ getState }, { payload }) {
        return this.tenantManagementService.updateTenant(Object.assign(Object.assign({}, getState().selectedItem), payload));
    }
};
__decorate([
    Action(GetTenants),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetTenants]),
    __metadata("design:returntype", void 0)
], TenantManagementState.prototype, "get", null);
__decorate([
    Action(GetTenantById),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetTenantById]),
    __metadata("design:returntype", void 0)
], TenantManagementState.prototype, "getById", null);
__decorate([
    Action(DeleteTenant),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteTenant]),
    __metadata("design:returntype", void 0)
], TenantManagementState.prototype, "delete", null);
__decorate([
    Action(CreateTenant),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateTenant]),
    __metadata("design:returntype", void 0)
], TenantManagementState.prototype, "add", null);
__decorate([
    Action(UpdateTenant),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateTenant]),
    __metadata("design:returntype", void 0)
], TenantManagementState.prototype, "update", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], TenantManagementState, "get", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Number)
], TenantManagementState, "getTenantsTotalCount", null);
TenantManagementState = __decorate([
    State({
        name: 'TenantManagementState',
        defaults: { result: {}, selectedItem: {} },
    }),
    Injectable(),
    __metadata("design:paramtypes", [TenantManagementService])
], TenantManagementState);
export { TenantManagementState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQuc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90ZW5hbnQtbWFuYWdlbWVudC9zcmMvbGliL3N0YXRlcy90ZW5hbnQtbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFnQixNQUFNLGFBQWEsQ0FBQztBQUNwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUNMLFlBQVksRUFDWixZQUFZLEVBQ1osYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBV2hDLFlBQW9CLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQUcsQ0FBQztJQVR4RSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUEwQjtRQUMzQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFHRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxNQUFNLEVBQTBCO1FBQzVELE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBS0QsR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUF3QyxFQUFFLEVBQUUsT0FBTyxFQUFjO1FBQy9FLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3pELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNYLFVBQVUsQ0FBQztZQUNULE1BQU07U0FDUCxDQUFDLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUdELE9BQU8sQ0FBQyxFQUFFLFVBQVUsRUFBd0MsRUFBRSxFQUFFLE9BQU8sRUFBaUI7UUFDdEYsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDN0QsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQ2pCLFVBQVUsQ0FBQztZQUNULFlBQVk7U0FDYixDQUFDLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUdELE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQWdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBR0QsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBZ0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFHRCxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQXdDLEVBQUUsRUFBRSxPQUFPLEVBQWdCO1FBQ2xGLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksaUNBQU0sUUFBUSxFQUFFLENBQUMsWUFBWSxHQUFLLE9BQU8sRUFBRyxDQUFDO0lBQy9GLENBQUM7Q0FDRixDQUFBO0FBbkNDO0lBREMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7NkNBQ29ELFVBQVU7O2dEQVFoRjtBQUdEO0lBREMsTUFBTSxDQUFDLGFBQWEsQ0FBQzs7NkNBQ3FELGFBQWE7O29EQVF2RjtBQUdEO0lBREMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7NkNBQ0UsWUFBWTs7bURBRWxDO0FBR0Q7SUFEQyxNQUFNLENBQUMsWUFBWSxDQUFDOzs2Q0FDRCxZQUFZOztnREFFL0I7QUFHRDtJQURDLE1BQU0sQ0FBQyxZQUFZLENBQUM7OzZDQUNtRCxZQUFZOzttREFFbkY7QUE5Q0Q7SUFEQyxRQUFRLEVBQUU7Ozs7c0NBR1Y7QUFHRDtJQURDLFFBQVEsRUFBRTs7Ozt1REFHVjtBQVRVLHFCQUFxQjtJQUxqQyxLQUFLLENBQXlCO1FBQzdCLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUE0QjtLQUNyRSxDQUFDO0lBQ0QsVUFBVSxFQUFFO3FDQVlrQyx1QkFBdUI7R0FYekQscUJBQXFCLENBaURqQztTQWpEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7XHJcbiAgQ3JlYXRlVGVuYW50LFxyXG4gIERlbGV0ZVRlbmFudCxcclxuICBHZXRUZW5hbnRCeUlkLFxyXG4gIEdldFRlbmFudHMsXHJcbiAgVXBkYXRlVGVuYW50LFxyXG59IGZyb20gJy4uL2FjdGlvbnMvdGVuYW50LW1hbmFnZW1lbnQuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFRlbmFudE1hbmFnZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvdGVuYW50LW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RlbmFudC1tYW5hZ2VtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AU3RhdGU8VGVuYW50TWFuYWdlbWVudC5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdUZW5hbnRNYW5hZ2VtZW50U3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IHJlc3VsdDoge30sIHNlbGVjdGVkSXRlbToge30gfSBhcyBUZW5hbnRNYW5hZ2VtZW50LlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRNYW5hZ2VtZW50U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldCh7IHJlc3VsdCB9OiBUZW5hbnRNYW5hZ2VtZW50LlN0YXRlKTogQUJQLkJhc2ljSXRlbVtdIHtcclxuICAgIHJldHVybiByZXN1bHQuaXRlbXMgfHwgW107XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRUZW5hbnRzVG90YWxDb3VudCh7IHJlc3VsdCB9OiBUZW5hbnRNYW5hZ2VtZW50LlN0YXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiByZXN1bHQudG90YWxDb3VudDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVuYW50TWFuYWdlbWVudFNlcnZpY2U6IFRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlKSB7fVxyXG5cclxuICBAQWN0aW9uKEdldFRlbmFudHMpXHJcbiAgZ2V0KHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8VGVuYW50TWFuYWdlbWVudC5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRUZW5hbnRzKSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZW5hbnRNYW5hZ2VtZW50U2VydmljZS5nZXRUZW5hbnQocGF5bG9hZCkucGlwZShcclxuICAgICAgdGFwKHJlc3VsdCA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oR2V0VGVuYW50QnlJZClcclxuICBnZXRCeUlkKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8VGVuYW50TWFuYWdlbWVudC5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRUZW5hbnRCeUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZW5hbnRNYW5hZ2VtZW50U2VydmljZS5nZXRUZW5hbnRCeUlkKHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChzZWxlY3RlZEl0ZW0gPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKERlbGV0ZVRlbmFudClcclxuICBkZWxldGUoXywgeyBwYXlsb2FkIH06IERlbGV0ZVRlbmFudCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50TWFuYWdlbWVudFNlcnZpY2UuZGVsZXRlVGVuYW50KHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihDcmVhdGVUZW5hbnQpXHJcbiAgYWRkKF8sIHsgcGF5bG9hZCB9OiBDcmVhdGVUZW5hbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlLmNyZWF0ZVRlbmFudChwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlVGVuYW50KVxyXG4gIHVwZGF0ZSh7IGdldFN0YXRlIH06IFN0YXRlQ29udGV4dDxUZW5hbnRNYW5hZ2VtZW50LlN0YXRlPiwgeyBwYXlsb2FkIH06IFVwZGF0ZVRlbmFudCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50TWFuYWdlbWVudFNlcnZpY2UudXBkYXRlVGVuYW50KHsgLi4uZ2V0U3RhdGUoKS5zZWxlY3RlZEl0ZW0sIC4uLnBheWxvYWQgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==