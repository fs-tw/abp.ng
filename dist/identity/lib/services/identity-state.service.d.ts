import { Store } from '@ngxs/store';
import { CreateRole, CreateUser, DeleteRole, DeleteUser, GetRoleById, GetRoles, GetUserById, GetUsers, UpdateRole, UpdateUser, GetUserRoles } from '../actions/identity.actions';
import { Identity } from '../models/identity';
export declare class IdentityStateService {
    private store;
    constructor(store: Store);
    getRoles(): Identity.RoleItem[];
    getRolesTotalCount(): number;
    getUsers(): Identity.UserItem[];
    getUsersTotalCount(): number;
    dispatchGetRoles(...args: ConstructorParameters<typeof GetRoles>): import("rxjs").Observable<any>;
    dispatchGetRoleById(...args: ConstructorParameters<typeof GetRoleById>): import("rxjs").Observable<any>;
    dispatchDeleteRole(...args: ConstructorParameters<typeof DeleteRole>): import("rxjs").Observable<any>;
    dispatchCreateRole(...args: ConstructorParameters<typeof CreateRole>): import("rxjs").Observable<any>;
    dispatchUpdateRole(...args: ConstructorParameters<typeof UpdateRole>): import("rxjs").Observable<any>;
    dispatchGetUsers(...args: ConstructorParameters<typeof GetUsers>): import("rxjs").Observable<any>;
    dispatchGetUserById(...args: ConstructorParameters<typeof GetUserById>): import("rxjs").Observable<any>;
    dispatchDeleteUser(...args: ConstructorParameters<typeof DeleteUser>): import("rxjs").Observable<any>;
    dispatchCreateUser(...args: ConstructorParameters<typeof CreateUser>): import("rxjs").Observable<any>;
    dispatchUpdateUser(...args: ConstructorParameters<typeof UpdateUser>): import("rxjs").Observable<any>;
    dispatchGetUserRoles(...args: ConstructorParameters<typeof GetUserRoles>): import("rxjs").Observable<any>;
}
