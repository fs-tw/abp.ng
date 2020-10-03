import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Action, Selector, State } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { GetPermissions, UpdatePermissions } from '../actions/permission-management.actions';
import { PermissionsService } from '../proxy/permissions.service';
let PermissionManagementState = class PermissionManagementState {
    constructor(service) {
        this.service = service;
    }
    static getPermissionGroups({ permissionRes }) {
        return permissionRes.groups || [];
    }
    static getEntityDisplayName({ permissionRes }) {
        return permissionRes.entityDisplayName;
    }
    permissionManagementGet({ patchState }, { payload: { providerKey, providerName } = {}, }) {
        return this.service.get(providerName, providerKey).pipe(tap(permissionResponse => patchState({
            permissionRes: permissionResponse,
        })));
    }
    permissionManagementUpdate(_, { payload }) {
        return this.service.update(payload.providerName, payload.providerKey, {
            permissions: payload.permissions,
        });
    }
};
PermissionManagementState.decorators = [
    { type: Injectable }
];
PermissionManagementState.ctorParameters = () => [
    { type: PermissionsService }
];
__decorate([
    Action(GetPermissions),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetPermissions]),
    __metadata("design:returntype", void 0)
], PermissionManagementState.prototype, "permissionManagementGet", null);
__decorate([
    Action(UpdatePermissions),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdatePermissions]),
    __metadata("design:returntype", void 0)
], PermissionManagementState.prototype, "permissionManagementUpdate", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PermissionManagementState, "getPermissionGroups", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], PermissionManagementState, "getEntityDisplayName", null);
PermissionManagementState = __decorate([
    State({
        name: 'PermissionManagementState',
        defaults: { permissionRes: {} },
    }),
    __metadata("design:paramtypes", [PermissionsService])
], PermissionManagementState);
export { PermissionManagementState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L3NyYy9saWIvc3RhdGVzL3Blcm1pc3Npb24tbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7SUFPckQseUJBQXlCLFNBQXpCLHlCQUF5QjtJQVdwQyxZQUFvQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtJQUFHLENBQUM7SUFUbkQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsYUFBYSxFQUE4QjtRQUN0RSxPQUFPLGFBQWEsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFHRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxhQUFhLEVBQThCO1FBQ3ZFLE9BQU8sYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQ3pDLENBQUM7SUFLRCx1QkFBdUIsQ0FDckIsRUFBRSxVQUFVLEVBQTRDLEVBQ3hELEVBQ0UsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQTBDLEdBQ3BFO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDckQsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FDdkIsVUFBVSxDQUFDO1lBQ1QsYUFBYSxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUdELDBCQUEwQixDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBcUI7UUFDMUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDcEUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQXBDQSxVQUFVOzs7WUFORixrQkFBa0I7O0FBcUJ6QjtJQURDLE1BQU0sQ0FBQyxjQUFjLENBQUM7OzZDQUtsQixjQUFjOzt3RUFTbEI7QUFHRDtJQURDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzs7NkNBQ2lCLGlCQUFpQjs7MkVBSTNEO0FBaENEO0lBREMsUUFBUSxFQUFFOzs7OzBEQUdWO0FBR0Q7SUFEQyxRQUFRLEVBQUU7Ozs7MkRBR1Y7QUFUVSx5QkFBeUI7SUFMckMsS0FBSyxDQUE2QjtRQUNqQyxJQUFJLEVBQUUsMkJBQTJCO1FBQ2pDLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQWdDO0tBQzlELENBQUM7cUNBYTZCLGtCQUFrQjtHQVhwQyx5QkFBeUIsQ0FtQ3JDO1NBbkNZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uLCBTZWxlY3RvciwgU3RhdGUsIFN0YXRlQ29udGV4dCB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBHZXRQZXJtaXNzaW9ucywgVXBkYXRlUGVybWlzc2lvbnMgfSBmcm9tICcuLi9hY3Rpb25zL3Blcm1pc3Npb24tbWFuYWdlbWVudC5hY3Rpb25zJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMvcGVybWlzc2lvbi1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vcHJveHkvcGVybWlzc2lvbnMuc2VydmljZSc7XHJcblxyXG5AU3RhdGU8UGVybWlzc2lvbk1hbmFnZW1lbnQuU3RhdGU+KHtcclxuICBuYW1lOiAnUGVybWlzc2lvbk1hbmFnZW1lbnRTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgcGVybWlzc2lvblJlczoge30gfSBhcyBQZXJtaXNzaW9uTWFuYWdlbWVudC5TdGF0ZSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbk1hbmFnZW1lbnRTdGF0ZSB7XHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0UGVybWlzc2lvbkdyb3Vwcyh7IHBlcm1pc3Npb25SZXMgfTogUGVybWlzc2lvbk1hbmFnZW1lbnQuU3RhdGUpIHtcclxuICAgIHJldHVybiBwZXJtaXNzaW9uUmVzLmdyb3VwcyB8fCBbXTtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldEVudGl0eURpc3BsYXlOYW1lKHsgcGVybWlzc2lvblJlcyB9OiBQZXJtaXNzaW9uTWFuYWdlbWVudC5TdGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gcGVybWlzc2lvblJlcy5lbnRpdHlEaXNwbGF5TmFtZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogUGVybWlzc2lvbnNTZXJ2aWNlKSB7fVxyXG5cclxuICBAQWN0aW9uKEdldFBlcm1pc3Npb25zKVxyXG4gIHBlcm1pc3Npb25NYW5hZ2VtZW50R2V0KFxyXG4gICAgeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxQZXJtaXNzaW9uTWFuYWdlbWVudC5TdGF0ZT4sXHJcbiAgICB7XHJcbiAgICAgIHBheWxvYWQ6IHsgcHJvdmlkZXJLZXksIHByb3ZpZGVyTmFtZSB9ID0ge30gYXMgUGVybWlzc2lvbk1hbmFnZW1lbnQuR3JhbnRlZFByb3ZpZGVyLFxyXG4gICAgfTogR2V0UGVybWlzc2lvbnMsXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldChwcm92aWRlck5hbWUsIHByb3ZpZGVyS2V5KS5waXBlKFxyXG4gICAgICB0YXAocGVybWlzc2lvblJlc3BvbnNlID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICBwZXJtaXNzaW9uUmVzOiBwZXJtaXNzaW9uUmVzcG9uc2UsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihVcGRhdGVQZXJtaXNzaW9ucylcclxuICBwZXJtaXNzaW9uTWFuYWdlbWVudFVwZGF0ZShfLCB7IHBheWxvYWQgfTogVXBkYXRlUGVybWlzc2lvbnMpIHtcclxuICAgIHJldHVybiB0aGlzLnNlcnZpY2UudXBkYXRlKHBheWxvYWQucHJvdmlkZXJOYW1lLCBwYXlsb2FkLnByb3ZpZGVyS2V5LCB7XHJcbiAgICAgIHBlcm1pc3Npb25zOiBwYXlsb2FkLnBlcm1pc3Npb25zLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==