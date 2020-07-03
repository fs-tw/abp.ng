import { __decorate, __metadata } from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { tap, pluck } from 'rxjs/operators';
import { CreateRole, CreateUser, DeleteRole, DeleteUser, GetRoleById, GetRoles, GetUserById, GetUsers, UpdateRole, UpdateUser, GetUserRoles, } from '../actions/identity.actions';
import { IdentityService } from '../services/identity.service';
import { Injectable } from '@angular/core';
let IdentityState = class IdentityState {
    constructor(identityService) {
        this.identityService = identityService;
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
        return this.identityService.getRoles(payload).pipe(tap(roles => patchState({
            roles,
        })));
    }
    getRole({ patchState }, { payload }) {
        return this.identityService.getRoleById(payload).pipe(tap(selectedRole => patchState({
            selectedRole,
        })));
    }
    deleteRole(_, { payload }) {
        return this.identityService.deleteRole(payload);
    }
    addRole(_, { payload }) {
        return this.identityService.createRole(payload);
    }
    updateRole({ getState }, { payload }) {
        return this.identityService.updateRole(Object.assign(Object.assign({}, getState().selectedRole), payload));
    }
    getUsers({ patchState }, { payload }) {
        return this.identityService.getUsers(payload).pipe(tap(users => patchState({
            users,
        })));
    }
    getUser({ patchState }, { payload }) {
        return this.identityService.getUserById(payload).pipe(tap(selectedUser => patchState({
            selectedUser,
        })));
    }
    deleteUser(_, { payload }) {
        return this.identityService.deleteUser(payload);
    }
    addUser(_, { payload }) {
        return this.identityService.createUser(payload);
    }
    updateUser({ getState }, { payload }) {
        return this.identityService.updateUser(Object.assign(Object.assign({}, getState().selectedUser), payload));
    }
    getUserRoles({ patchState }, { payload }) {
        return this.identityService.getUserRoles(payload).pipe(pluck('items'), tap(selectedUserRoles => patchState({
            selectedUserRoles,
        })));
    }
};
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
    Injectable(),
    __metadata("design:paramtypes", [IdentityService])
], IdentityState);
export { IdentityState };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9pZGVudGl0eS9zcmMvbGliL3N0YXRlcy9pZGVudGl0eS5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFnQixNQUFNLGFBQWEsQ0FBQztBQUNwRSxPQUFPLEVBQWEsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFDTCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLFFBQVEsRUFDUixXQUFXLEVBQ1gsUUFBUSxFQUNSLFVBQVUsRUFDVixVQUFVLEVBQ1YsWUFBWSxHQUNiLE1BQU0sNkJBQTZCLENBQUM7QUFFckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQXFCeEIsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQztJQW5CeEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBa0I7UUFDdkMsT0FBTyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0QsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsS0FBSyxFQUFrQjtRQUNqRCxPQUFPLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFHRCxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFrQjtRQUN2QyxPQUFPLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHRCxNQUFNLENBQUMsa0JBQWtCLENBQUMs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MEIsZUFBZTtHQXJCekMsYUFBYSxDQTRHekI7U0E1R1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgU2VsZWN0b3IsIFN0YXRlLCBTdGF0ZUNvbnRleHQgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFwLCBwbHVjayB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtcclxuICBDcmVhdGVSb2xlLFxyXG4gIENyZWF0ZVVzZXIsXHJcbiAgRGVsZXRlUm9sZSxcclxuICBEZWxldGVVc2VyLFxyXG4gIEdldFJvbGVCeUlkLFxyXG4gIEdldFJvbGVzLFxyXG4gIEdldFVzZXJCeUlkLFxyXG4gIEdldFVzZXJzLFxyXG4gIFVwZGF0ZVJvbGUsXHJcbiAgVXBkYXRlVXNlcixcclxuICBHZXRVc2VyUm9sZXMsXHJcbn0gZnJvbSAnLi4vYWN0aW9ucy9pZGVudGl0eS5hY3Rpb25zJztcclxuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuLi9tb2RlbHMvaWRlbnRpdHknO1xyXG5pbXBvcnQgeyBJZGVudGl0eVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pZGVudGl0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFN0YXRlPElkZW50aXR5LlN0YXRlPih7XHJcbiAgbmFtZTogJ0lkZW50aXR5U3RhdGUnLFxyXG4gIGRlZmF1bHRzOiB7IHJvbGVzOiB7fSwgc2VsZWN0ZWRSb2xlOiB7fSwgdXNlcnM6IHt9LCBzZWxlY3RlZFVzZXI6IHt9IH0gYXMgSWRlbnRpdHkuU3RhdGUsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIElkZW50aXR5U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFJvbGVzKHsgcm9sZXMgfTogSWRlbnRpdHkuU3RhdGUpOiBJZGVudGl0eS5Sb2xlSXRlbVtdIHtcclxuICAgIHJldHVybiByb2xlcy5pdGVtcyB8fCBbXTtcclxuICB9XHJcblxyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldFJvbGVzVG90YWxDb3VudCh7IHJvbGVzIH06IElkZW50aXR5LlN0YXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiByb2xlcy50b3RhbENvdW50IHx8IDA7XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRVc2Vycyh7IHVzZXJzIH06IElkZW50aXR5LlN0YXRlKTogSWRlbnRpdHkuVXNlckl0ZW1bXSB7XHJcbiAgICByZXR1cm4gdXNlcnMuaXRlbXMgfHwgW107XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRVc2Vyc1RvdGFsQ291bnQoeyB1c2VycyB9OiBJZGVudGl0eS5TdGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdXNlcnMudG90YWxDb3VudCB8fCAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpZGVudGl0eVNlcnZpY2U6IElkZW50aXR5U2VydmljZSkge31cclxuXHJcbiAgQEFjdGlvbihHZXRSb2xlcylcclxuICBnZXRSb2xlcyh7IHBhdGNoU3RhdGUgfTogU3RhdGVDb250ZXh0PElkZW50aXR5LlN0YXRlPiwgeyBwYXlsb2FkIH06IEdldFJvbGVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZGVudGl0eVNlcnZpY2UuZ2V0Um9sZXMocGF5bG9hZCkucGlwZShcclxuICAgICAgdGFwKHJvbGVzID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICByb2xlcyxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEdldFJvbGVCeUlkKVxyXG4gIGdldFJvbGUoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxJZGVudGl0eS5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRSb2xlQnlJZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHlTZXJ2aWNlLmdldFJvbGVCeUlkKHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChzZWxlY3RlZFJvbGUgPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHNlbGVjdGVkUm9sZSxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKERlbGV0ZVJvbGUpXHJcbiAgZGVsZXRlUm9sZShfLCB7IHBheWxvYWQgfTogR2V0Um9sZUJ5SWQpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5U2VydmljZS5kZWxldGVSb2xlKHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihDcmVhdGVSb2xlKVxyXG4gIGFkZFJvbGUoXywgeyBwYXlsb2FkIH06IENyZWF0ZVJvbGUpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5U2VydmljZS5jcmVhdGVSb2xlKHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihVcGRhdGVSb2xlKVxyXG4gIHVwZGF0ZVJvbGUoeyBnZXRTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8SWRlbnRpdHkuU3RhdGU+LCB7IHBheWxvYWQgfTogVXBkYXRlUm9sZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHlTZXJ2aWNlLnVwZGF0ZVJvbGUoeyAuLi5nZXRTdGF0ZSgpLnNlbGVjdGVkUm9sZSwgLi4ucGF5bG9hZCB9KTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oR2V0VXNlcnMpXHJcbiAgZ2V0VXNlcnMoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxJZGVudGl0eS5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRVc2Vycykge1xyXG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpdHlTZXJ2aWNlLmdldFVzZXJzKHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcCh1c2VycyA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgdXNlcnMsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihHZXRVc2VyQnlJZClcclxuICBnZXRVc2VyKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8SWRlbnRpdHkuU3RhdGU+LCB7IHBheWxvYWQgfTogR2V0VXNlckJ5SWQpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5U2VydmljZS5nZXRVc2VyQnlJZChwYXlsb2FkKS5waXBlKFxyXG4gICAgICB0YXAoc2VsZWN0ZWRVc2VyID0+XHJcbiAgICAgICAgcGF0Y2hTdGF0ZSh7XHJcbiAgICAgICAgICBzZWxlY3RlZFVzZXIsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihEZWxldGVVc2VyKVxyXG4gIGRlbGV0ZVVzZXIoXywgeyBwYXlsb2FkIH06IEdldFVzZXJCeUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZGVudGl0eVNlcnZpY2UuZGVsZXRlVXNlcihwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oQ3JlYXRlVXNlcilcclxuICBhZGRVc2VyKF8sIHsgcGF5bG9hZCB9OiBDcmVhdGVVc2VyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZGVudGl0eVNlcnZpY2UuY3JlYXRlVXNlcihwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlVXNlcilcclxuICB1cGRhdGVVc2VyKHsgZ2V0U3RhdGUgfTogU3RhdGVDb250ZXh0PElkZW50aXR5LlN0YXRlPiwgeyBwYXlsb2FkIH06IFVwZGF0ZVVzZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5U2VydmljZS51cGRhdGVVc2VyKHsgLi4uZ2V0U3RhdGUoKS5zZWxlY3RlZFVzZXIsIC4uLnBheWxvYWQgfSk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKEdldFVzZXJSb2xlcylcclxuICBnZXRVc2VyUm9sZXMoeyBwYXRjaFN0YXRlIH06IFN0YXRlQ29udGV4dDxJZGVudGl0eS5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRVc2VyUm9sZXMpIHtcclxuICAgIHJldHVybiB0aGlzLmlkZW50aXR5U2VydmljZS5nZXRVc2VyUm9sZXMocGF5bG9hZCkucGlwZShcclxuICAgICAgcGx1Y2soJ2l0ZW1zJyksXHJcbiAgICAgIHRhcChzZWxlY3RlZFVzZXJSb2xlcyA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgc2VsZWN0ZWRVc2VyUm9sZXMsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=