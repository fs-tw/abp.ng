import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Action, Selector, State } from '@ngxs/store';
import { pluck, tap } from 'rxjs/operators';
import { CreateRole, CreateUser, DeleteRole, DeleteUser, GetRoleById, GetRoles, GetUserById, GetUserRoles, GetUsers, UpdateRole, UpdateUser, } from '../actions/identity.actions';
import { IdentityRoleService } from '../proxy/identity/identity-role.service';
import { IdentityUserService } from '../proxy/identity/identity-user.service';
let IdentityState = class IdentityState {
    constructor(identityUserService, identityRoleService) {
        this.identityUserService = identityUserService;
        this.identityRoleService = identityRoleService;
    }
    static getRoles({ roles }) {
        return roles.items || [];
    }
    static getRolesTotalCount({ roles }) {
        return roles.totalCount || 0;
    }
    static getUsers({ users }) {
        return users.items || [];
    }
    static getUsersTotalCount({ users }) {
        return users.totalCount || 0;
    }
    getRoles({ patchState }, { payload }) {
        return this.identityRoleService.getList(payload).pipe(tap(roles => patchState({
            roles,
        })));
    }
    getRole({ patchState }, { payload }) {
        return this.identityRoleService.get(payload).pipe(tap(selectedRole => patchState({
            selectedRole,
        })));
    }
    deleteRole(_, { payload }) {
        return this.identityRoleService.delete(payload);
    }
    addRole(_, { payload }) {
        return this.identityRoleService.create(payload);
    }
    updateRole({ getState }, { payload }) {
        return this.identityRoleService.update(payload.id, Object.assign(Object.assign({}, getState().selectedRole), payload));
    }
    getUsers({ patchState }, { payload }) {
        return this.identityUserService.getList(payload).pipe(tap(users => patchState({
            users,
        })));
    }
    getUser({ patchState }, { payload }) {
        return this.identityUserService.get(payload).pipe(tap(selectedUser => patchState({
            selectedUser,
        })));
    }
    deleteUser(_, { payload }) {
        return this.identityUserService.delete(payload);
    }
    addUser(_, { payload }) {
        return this.identityUserService.create(payload);
    }
    updateUser({ getState }, { payload }) {
        return this.identityUserService.update(payload.id, Object.assign(Object.assign({}, getState().selectedUser), payload));
    }
    getUserRoles({ patchState }, { payload }) {
        return this.identityUserService.getRoles(payload).pipe(pluck('items'), tap(selectedUserRoles => patchState({
            selectedUserRoles,
        })));
    }
};
IdentityState.decorators = [
    { type: Injectable }
];
IdentityState.ctorParameters = () => [
    { type: IdentityUserService },
    { type: IdentityRoleService }
];
__decorate([
    Action(GetRoles),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetRoles]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "getRoles", null);
__decorate([
    Action(GetRoleById),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetRoleById]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "getRole", null);
__decorate([
    Action(DeleteRole),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetRoleById]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "deleteRole", null);
__decorate([
    Action(CreateRole),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateRole]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "addRole", null);
__decorate([
    Action(UpdateRole),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateRole]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "updateRole", null);
__decorate([
    Action(GetUsers),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetUsers]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "getUsers", null);
__decorate([
    Action(GetUserById),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetUserById]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "getUser", null);
__decorate([
    Action(DeleteUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetUserById]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "deleteUser", null);
__decorate([
    Action(CreateUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateUser]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "addUser", null);
__decorate([
    Action(UpdateUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateUser]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "updateUser", null);
__decorate([
    Action(GetUserRoles),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, GetUserRoles]),
    __metadata("design:returntype", void 0)
], IdentityState.prototype, "getUserRoles", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], IdentityState, "getRoles", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Number)
], IdentityState, "getRolesTotalCount", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Array)
], IdentityState, "getUsers", null);
__decorate([
    Selector(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Number)
], IdentityState, "getUsersTotalCount", null);
IdentityState = __decorate([
    State({
        name: 'IdentityState',
        defaults: { roles: {}, selectedRole: {}, users: {}, selectedUser: {} },
    }),
    __metadata("design:paramtypes", [IdentityUserService,
        IdentityRoleService])
], IdentityState);
export { IdentityState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pZGVudGl0eS9zcmMvbGliL3N0YXRlcy9pZGVudGl0eS5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLFdBQVcsRUFDWCxZQUFZLEVBQ1osUUFBUSxFQUNSLFVBQVUsRUFDVixVQUFVLEdBQ1gsTUFBTSw2QkFBNkIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztJQVFqRSxhQUFhLFNBQWIsYUFBYTtJQXFCeEIsWUFDVSxtQkFBd0MsRUFDeEMsbUJBQXdDO1FBRHhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUMvQyxDQUFDO0lBdEJKLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQWtCO1FBQ3ZDLE9BQU8sS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUdELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEtBQUssRUFBa0I7UUFDakQsT0FBTyxLQUFLLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBR0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUss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NkNBR1Y7QUFuQlUsYUFBYTtJQUx6QixLQUFLLENBQWlCO1FBQ3JCLElBQUksRUFBRSxlQUFlO1FBQ3JCLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQW9CO0tBQ3pGLENBQUM7cUNBd0IrQixtQkFBbUI7UUFDbkIsbUJBQW1CO0dBdkJ2QyxhQUFhLENBK0d6QjtTQS9HWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFNlbGVjdG9yLCBTdGF0ZSwgU3RhdGVDb250ZXh0IH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBwbHVjaywgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIENyZWF0ZVJvbGUsXHJcbiAgQ3JlYXRlVXNlcixcclxuICBEZWxldGVSb2xlLFxyXG4gIERlbGV0ZVVzZXIsXHJcbiAgR2V0Um9sZUJ5SWQsXHJcbiAgR2V0Um9sZXMsXHJcbiAgR2V0VXNlckJ5SWQsXHJcbiAgR2V0VXNlclJvbGVzLFxyXG4gIEdldFVzZXJzLFxyXG4gIFVwZGF0ZVJvbGUsXHJcbiAgVXBkYXRlVXNlcixcclxufSBmcm9tICcuLi9hY3Rpb25zL2lkZW50aXR5LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBJZGVudGl0eSB9IGZyb20gJy4uL21vZGVscy9pZGVudGl0eSc7XHJcbmltcG9ydCB7IElkZW50aXR5Um9sZVNlcnZpY2UgfSBmcm9tICcuLi9wcm94eS9pZGVudGl0eS9pZGVudGl0eS1yb2xlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJZGVudGl0eVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcHJveHkvaWRlbnRpdHkvaWRlbnRpdHktdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSWRlbnRpdHlVc2VyRHRvIH0gZnJvbSAnLi4vcHJveHkvaWRlbnRpdHkvbW9kZWxzJztcclxuXHJcbkBTdGF0ZTxJZGVudGl0eS5TdGF0ZT4oe1xyXG4gIG5hbWU6ICdJZGVudGl0eVN0YXRlJyxcclxuICBkZWZhdWx0czogeyByb2xlczoge30sIHNlbGVjdGVkUm9sZToge30sIHVzZXJzOiB7fSwgc2VsZWN0ZWRVc2VyOiB7fSB9IGFzIElkZW50aXR5LlN0YXRlLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJZGVudGl0eVN0YXRlIHtcclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRSb2xlcyh7IHJvbGVzIH06IElkZW50aXR5LlN0YXRlKTogSWRlbnRpdHkuUm9sZUl0ZW1bXSB7XHJcbiAgICByZXR1cm4gcm9sZXMuaXRlbXMgfHwgW107XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRSb2xlc1RvdGFsQ291bnQoeyByb2xlcyB9OiBJZGVudGl0eS5TdGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcm9sZXMudG90YWxDb3VudCB8fCAwO1xyXG4gIH1cclxuXHJcbiAgQFNlbGVjdG9yKClcclxuICBzdGF0aWMgZ2V0VXNlcnMoeyB1c2VycyB9OiBJZGVudGl0eS5TdGF0ZSk6IElkZW50aXR5VXNlckR0b1tdIHtcclxuICAgIHJldHVybiB1c2Vycy5pdGVtcyB8fCBbXTtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFVzZXJzVG90YWxDb3VudCh7IHVzZXJzIH06IElkZW50aXR5LlN0YXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB1c2Vycy50b3RhbENvdW50IHx8IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaWRlbnRpdHlVc2VyU2VydmljZTogSWRlbnRpdHlVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgaWRlbnRpdHlSb2xlU2VydmljZTogSWRlbnRpdHlSb2xlU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIEBBY3Rpb24oR2V0Um9sZXMpXHJcbiAgZ2V0Um9sZXMoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxJZGVudGl0eS5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRSb2xlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHlSb2xlU2VydmljZS5nZXRMaXN0KHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChyb2xlcyA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgcm9sZXMsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihHZXRSb2xlQnlJZClcclxuICBnZXRSb2xlKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8SWRlbnRpdHkuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0Um9sZUJ5SWQpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5Um9sZVNlcnZpY2UuZ2V0KHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChzZWxlY3RlZFJvbGUgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHNlbGVjdGVkUm9sZSxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKERlbGV0ZVJvbGUpXHJcbiAgZGVsZXRlUm9sZShfLCB7IHBheWxvYWQgfTogR2V0Um9sZUJ5SWQpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5Um9sZVNlcnZpY2UuZGVsZXRlKHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihDcmVhdGVSb2xlKVxyXG4gIGFkZFJvbGUoXywgeyBwYXlsb2FkIH06IENyZWF0ZVJvbGUpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5Um9sZVNlcnZpY2UuY3JlYXRlKHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihVcGRhdGVSb2xlKVxyXG4gIHVwZGF0ZVJvbGUoeyBnZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8SWRlbnRpdHkuU3RhdGU+LCB7IHBheWxvYWQgfTogVXBkYXRlUm9sZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHlSb2xlU2VydmljZS51cGRhdGUocGF5bG9hZC5pZCwgeyAuLi5nZXRTdGF0ZSgpLnNlbGVjdGVkUm9sZSwgLi4ucGF5bG9hZCB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oR2V0VXNlcnMpXHJcbiAgZ2V0VXNlcnMoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxJZGVudGl0eS5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRVc2Vycykge1xyXG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHlVc2VyU2VydmljZS5nZXRMaXN0KHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcCh1c2VycyA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgdXNlcnMsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihHZXRVc2VyQnlJZClcclxuICBnZXRVc2VyKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8SWRlbnRpdHkuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0VXNlckJ5SWQpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5VXNlclNlcnZpY2UuZ2V0KHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChzZWxlY3RlZFVzZXIgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHNlbGVjdGVkVXNlcixcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKERlbGV0ZVVzZXIpXHJcbiAgZGVsZXRlVXNlcihfLCB7IHBheWxvYWQgfTogR2V0VXNlckJ5SWQpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5VXNlclNlcnZpY2UuZGVsZXRlKHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihDcmVhdGVVc2VyKVxyXG4gIGFkZFVzZXIoXywgeyBwYXlsb2FkIH06IENyZWF0ZVVzZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5VXNlclNlcnZpY2UuY3JlYXRlKHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihVcGRhdGVVc2VyKVxyXG4gIHVwZGF0ZVVzZXIoeyBnZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8SWRlbnRpdHkuU3RhdGU+LCB7IHBheWxvYWQgfTogVXBkYXRlVXNlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHlVc2VyU2VydmljZS51cGRhdGUocGF5bG9hZC5pZCwgeyAuLi5nZXRTdGF0ZSgpLnNlbGVjdGVkVXNlciwgLi4ucGF5bG9hZCB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oR2V0VXNlclJvbGVzKVxyXG4gIGdldFVzZXJSb2xlcyh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PElkZW50aXR5LlN0YXRlPiwgeyBwYXlsb2FkIH06IEdldFVzZXJSb2xlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHlVc2VyU2VydmljZS5nZXRSb2xlcyhwYXlsb2FkKS5waXBlKFxyXG4gICAgICBwbHVjaygnaXRlbXMnKSxcclxuICAgICAgdGFwKHNlbGVjdGVkVXNlclJvbGVzID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICBzZWxlY3RlZFVzZXJSb2xlcyxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==