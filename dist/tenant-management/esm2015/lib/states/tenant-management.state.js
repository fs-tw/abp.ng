import { __decorate, __metadata } from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { CreateTenant, DeleteTenant, GetTenantById, GetTenants, UpdateTenant, } from '../actions/tenant-management.actions';
import { Injectable } from '@angular/core';
import { TenantService } from '../proxy/tenant.service';
let TenantManagementState = class TenantManagementState {
    constructor(service) {
        this.service = service;
    }
    static get({ result }) {
        return result.items || [];
    }
    static getTenantsTotalCount({ result }) {
        return result.totalCount;
    }
    get({ patchState }, { payload }) {
        return this.service.getList(payload).pipe(tap(result => patchState({
            result,
        })));
    }
    getById({ patchState }, { payload }) {
        return this.service.get(payload).pipe(tap(selectedItem => patchState({
            selectedItem,
        })));
    }
    delete(_, { payload }) {
        return this.service.delete(payload);
    }
    add(_, { payload }) {
        return this.service.create(payload);
    }
    update({ getState }, { payload }) {
        return this.service.update(payload.id, Object.assign(Object.assign({}, getState().selectedItem), payload));
    }
};
TenantManagementState.decorators = [
    { type: Injectable }
];
TenantManagementState.ctorParameters = () => [
    { type: TenantService }
];
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
    __metadata("design:paramtypes", [TenantService])
], TenantManagementState);
export { TenantManagementState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQuc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90ZW5hbnQtbWFuYWdlbWVudC9zcmMvbGliL3N0YXRlcy90ZW5hbnQtbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFnQixNQUFNLGFBQWEsQ0FBQztBQUNwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUNMLFlBQVksRUFDWixZQUFZLEVBQ1osYUFBYSxFQUNiLFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztJQVEzQyxxQkFBcUIsU0FBckIscUJBQXFCO0lBV2hDLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFBRyxDQUFDO0lBVDlDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQTBCO1FBQzNDLE9BQU8sTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUdELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLE1BQU0sRUFBMEI7UUFDNUQsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFLRCxHQUFHLENBQUMsRUFBRSxVQUFVLEVBQXdDLEVBQUUsRUFBRSxPQUFPLEVBQWM7UUFDL0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNYLFVBQVUsQ0FBQztZQUNULE1BQU07U0FDUCxDQUFDLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUdELE9BQU8sQ0FBQyxFQUFFLFVBQVUsRUFBd0MsRUFBRSxFQUFFLE9BQU8sRUFBaUI7UUFDdEYsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ25DLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUNqQixVQUFVLENBQUM7WUFDVCxZQUFZO1NBQ2IsQ0FBQyxDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFHRCxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFnQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFHRCxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFnQjtRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFHRCxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQXdDLEVBQUUsRUFBRSxPQUFPLEVBQWdCO1FBQ2xGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsa0NBQU8sUUFBUSxFQUFFLENBQUMsWUFBWSxHQUFLLE9BQU8sRUFBRyxDQUFDO0lBQ3JGLENBQUM7Q0FDRixDQUFBOztZQWxEQSxVQUFVOzs7WUFQRixhQUFhOztBQXNCcEI7SUFEQyxNQUFNLENBQUMsVUFBVSxDQUFDOzs2Q0FDb0QsVUFBVTs7Z0RBUWhGO0FBR0Q7SUFEQyxNQUFNLENBQUMsYUFBYSxDQUFDOzs2Q0FDcUQsYUFBYTs7b0RBUXZGO0FBR0Q7SUFEQyxNQUFNLENBQUMsWUFBWSxDQUFDOzs2Q0FDRSxZQUFZOzttREFFbEM7QUFHRDtJQURDLE1BQU0sQ0FBQyxZQUFZLENBQUM7OzZDQUNELFlBQVk7O2dEQUUvQjtBQUdEO0lBREMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7NkNBQ21ELFlBQVk7O21EQUVuRjtBQTlDRDtJQURDLFFBQVEsRUFBRTs7OztzQ0FHVjtBQUdEO0lBREMsUUFBUSxFQUFFOzs7O3VEQUdWO0FBVFUscUJBQXFCO0lBTGpDLEtBQUssQ0FBeUI7UUFDN0IsSUFBSSxFQUFFLHVCQUF1QjtRQUM3QixRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQTRCO0tBQ3JFLENBQUM7cUNBYTZCLGFBQWE7R0FYL0IscUJBQXFCLENBaURqQztTQWpEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQlAsIFBhZ2VkUmVzdWx0RHRvIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIENyZWF0ZVRlbmFudCxcclxuICBEZWxldGVUZW5hbnQsXHJcbiAgR2V0VGVuYW50QnlJZCxcclxuICBHZXRUZW5hbnRzLFxyXG4gIFVwZGF0ZVRlbmFudCxcclxufSBmcm9tICcuLi9hY3Rpb25zL3RlbmFudC1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3RlbmFudC1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZW5hbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcHJveHkvdGVuYW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW5hbnREdG8gfSBmcm9tICcuLi9wcm94eS9tb2RlbHMnO1xyXG5cclxuQFN0YXRlPFRlbmFudE1hbmFnZW1lbnQuU3RhdGU+KHtcclxuICBuYW1lOiAnVGVuYW50TWFuYWdlbWVudFN0YXRlJyxcclxuICBkZWZhdWx0czogeyByZXN1bHQ6IHt9LCBzZWxlY3RlZEl0ZW06IHt9IH0gYXMgVGVuYW50TWFuYWdlbWVudC5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGVuYW50TWFuYWdlbWVudFN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXQoeyByZXN1bHQgfTogVGVuYW50TWFuYWdlbWVudC5TdGF0ZSk6IFRlbmFudER0b1tdIHtcclxuICAgIHJldHVybiByZXN1bHQuaXRlbXMgfHwgW107XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRUZW5hbnRzVG90YWxDb3VudCh7IHJlc3VsdCB9OiBUZW5hbnRNYW5hZ2VtZW50LlN0YXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiByZXN1bHQudG90YWxDb3VudDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogVGVuYW50U2VydmljZSkge31cclxuXHJcbiAgQEFjdGlvbihHZXRUZW5hbnRzKVxyXG4gIGdldCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFRlbmFudE1hbmFnZW1lbnQuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0VGVuYW50cykge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRMaXN0KHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChyZXN1bHQgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHJlc3VsdCxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEdldFRlbmFudEJ5SWQpXHJcbiAgZ2V0QnlJZCh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PFRlbmFudE1hbmFnZW1lbnQuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0VGVuYW50QnlJZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXQocGF5bG9hZCkucGlwZShcclxuICAgICAgdGFwKHNlbGVjdGVkSXRlbSA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oRGVsZXRlVGVuYW50KVxyXG4gIGRlbGV0ZShfLCB7IHBheWxvYWQgfTogRGVsZXRlVGVuYW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmRlbGV0ZShwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oQ3JlYXRlVGVuYW50KVxyXG4gIGFkZChfLCB7IHBheWxvYWQgfTogQ3JlYXRlVGVuYW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmNyZWF0ZShwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlVGVuYW50KVxyXG4gIHVwZGF0ZSh7IGdldFN0YXRlIH06IFN0YXRlQ29udGV4dDxUZW5hbnRNYW5hZ2VtZW50LlN0YXRlPiwgeyBwYXlsb2FkIH06IFVwZGF0ZVRlbmFudCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS51cGRhdGUocGF5bG9hZC5pZCwgeyAuLi5nZXRTdGF0ZSgpLnNlbGVjdGVkSXRlbSwgLi4ucGF5bG9hZCB9KTtcclxuICB9XHJcbn1cclxuIl19