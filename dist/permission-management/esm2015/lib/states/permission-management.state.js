import { __decorate, __metadata } from "tslib";
import { State, Action, Selector } from '@ngxs/store';
import { GetPermissions, UpdatePermissions } from '../actions/permission-management.actions';
import { PermissionManagementService } from '../services/permission-management.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
let PermissionManagementState = class PermissionManagementState {
    constructor(permissionManagementService) {
        this.permissionManagementService = permissionManagementService;
    }
    static getPermissionGroups({ permissionRes }) {
        return permissionRes.groups || [];
    }
    static getEntityDisplayName({ permissionRes }) {
        return permissionRes.entityDisplayName;
    }
    permissionManagementGet({ patchState }, { payload }) {
        return this.permissionManagementService.getPermissions(payload).pipe(tap(permissionResponse => patchState({
            permissionRes: permissionResponse,
        })));
    }
    permissionManagementUpdate(_, { payload }) {
        return this.permissionManagementService.updatePermissions(payload);
    }
};
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
    Injectable(),
    __metadata("design:paramtypes", [PermissionManagementService])
], PermissionManagementState);
export { PermissionManagementState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L3NyYy9saWIvc3RhdGVzL3Blcm1pc3Npb24tbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdCLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFN0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFXcEMsWUFBb0IsMkJBQXdEO1FBQXhELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFBRyxDQUFDO0lBVGhGLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLGFBQWEsRUFBOEI7UUFDdEUsT0FBTyxhQUFhLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBR0QsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsYUFBYSxFQUE4QjtRQUN2RSxPQUFPLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDO0lBS0QsdUJBQXVCLENBQ3JCLEVBQUUsVUFBVSxFQUE0QyxFQUN4RCxFQUFFLE9BQU8sRUFBa0I7UUFFM0IsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FDdkIsVUFBVSxDQUFDO1lBQ1QsYUFBYSxFQUFFLGtCQUFrQjtTQUNsQyxDQUFDLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUdELDBCQUEwQixDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBcUI7UUFDMUQsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQztDQUNGLENBQUE7QUFqQkM7SUFEQyxNQUFNLENBQUMsY0FBYyxDQUFDOzs2Q0FHUixjQUFjOzt3RUFTNUI7QUFHRDtJQURDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzs7NkNBQ2lCLGlCQUFpQjs7MkVBRTNEO0FBNUJEO0lBREMsUUFBUSxFQUFFOzs7OzBEQUdWO0FBR0Q7SUFEQyxRQUFRLEVBQUU7Ozs7MkRBR1Y7QUFUVSx5QkFBeUI7SUFMckMsS0FBSyxDQUE2QjtRQUNqQyxJQUFJLEVBQUUsMkJBQTJCO1FBQ2pDLFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQWdDO0tBQzlELENBQUM7SUFDRCxVQUFVLEVBQUU7cUNBWXNDLDJCQUEyQjtHQVhqRSx5QkFBeUIsQ0ErQnJDO1NBL0JZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlLCBBY3Rpb24sIFN0YXRlQ29udGV4dCwgU2VsZWN0b3IgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IEdldFBlcm1pc3Npb25zLCBVcGRhdGVQZXJtaXNzaW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFN0YXRlPFBlcm1pc3Npb25NYW5hZ2VtZW50LlN0YXRlPih7XHJcbiAgbmFtZTogJ1Blcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IHBlcm1pc3Npb25SZXM6IHt9IH0gYXMgUGVybWlzc2lvbk1hbmFnZW1lbnQuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25NYW5hZ2VtZW50U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFBlcm1pc3Npb25Hcm91cHMoeyBwZXJtaXNzaW9uUmVzIH06IFBlcm1pc3Npb25NYW5hZ2VtZW50LlN0YXRlKSB7XHJcbiAgICByZXR1cm4gcGVybWlzc2lvblJlcy5ncm91cHMgfHwgW107XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRFbnRpdHlEaXNwbGF5TmFtZSh7IHBlcm1pc3Npb25SZXMgfTogUGVybWlzc2lvbk1hbmFnZW1lbnQuU3RhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHBlcm1pc3Npb25SZXMuZW50aXR5RGlzcGxheU5hbWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcm1pc3Npb25NYW5hZ2VtZW50U2VydmljZTogUGVybWlzc2lvbk1hbmFnZW1lbnRTZXJ2aWNlKSB7fVxyXG5cclxuICBAQWN0aW9uKEdldFBlcm1pc3Npb25zKVxyXG4gIHBlcm1pc3Npb25NYW5hZ2VtZW50R2V0KFxyXG4gICAgeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxQZXJtaXNzaW9uTWFuYWdlbWVudC5TdGF0ZT4sXHJcbiAgICB7IHBheWxvYWQgfTogR2V0UGVybWlzc2lvbnMsXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9uTWFuYWdlbWVudFNlcnZpY2UuZ2V0UGVybWlzc2lvbnMocGF5bG9hZCkucGlwZShcclxuICAgICAgdGFwKHBlcm1pc3Npb25SZXNwb25zZSA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgcGVybWlzc2lvblJlczogcGVybWlzc2lvblJlc3BvbnNlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlUGVybWlzc2lvbnMpXHJcbiAgcGVybWlzc2lvbk1hbmFnZW1lbnRVcGRhdGUoXywgeyBwYXlsb2FkIH06IFVwZGF0ZVBlcm1pc3Npb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9uTWFuYWdlbWVudFNlcnZpY2UudXBkYXRlUGVybWlzc2lvbnMocGF5bG9hZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==