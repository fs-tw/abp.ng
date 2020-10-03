import { StateContext } from '@ngxs/store';
import { CreateRole, CreateUser, GetRoleById, GetRoles, GetUserById, GetUserRoles, GetUsers, UpdateRole, UpdateUser } from '../actions/identity.actions';
import { Identity } from '../models/identity';
import { IdentityRoleService } from '../proxy/identity/identity-role.service';
import { IdentityUserService } from '../proxy/identity/identity-user.service';
import { IdentityUserDto } from '../proxy/identity/models';
export declare class IdentityState {
    private identityUserService;
    private identityRoleService;
    static getRoles({ roles }: Identity.State): Identity.RoleItem[];
    static getRolesTotalCount({ roles }: Identity.State): number;
    static getUsers({ users }: Identity.State): IdentityUserDto[];
    static getUsersTotalCount({ users }: Identity.State): number;
    constructor(identityUserService: IdentityUserService, identityRoleService: IdentityRoleService);
    getRoles({ patchState }: StateContext<Identity.State>, { payload }: GetRoles): import("rxjs").Observable<import("../../../../../dist/core/public-api").PagedResultDto<import("../proxy/identity/models").IdentityRoleDto>>;
    getRole({ patchState }: StateContext<Identity.State>, { payload }: GetRoleById): import("rxjs").Observable<import("../proxy/identity/models").IdentityRoleDto>;
    deleteRole(_: any, { payload }: GetRoleById): import("rxjs").Observable<void>;
    addRole(_: any, { payload }: CreateRole): import("rxjs").Observable<import("../proxy/identity/models").IdentityRoleDto>;
    updateRole({ getState }: StateContext<Identity.State>, { payload }: UpdateRole): import("rxjs").Observable<import("../proxy/identity/models").IdentityRoleDto>;
    getUsers({ patchState }: StateContext<Identity.State>, { payload }: GetUsers): import("rxjs").Observable<import("../../../../../dist/core/public-api").PagedResultDto<IdentityUserDto>>;
    getUser({ patchState }: StateContext<Identity.State>, { payload }: GetUserById): import("rxjs").Observable<IdentityUserDto>;
    deleteUser(_: any, { payload }: GetUserById): import("rxjs").Observable<void>;
    addUser(_: any, { payload }: CreateUser): import("rxjs").Observable<IdentityUserDto>;
    updateUser({ getState }: StateContext<Identity.State>, { payload }: UpdateUser): import("rxjs").Observable<IdentityUserDto>;
    getUserRoles({ patchState }: StateContext<Identity.State>, { payload }: GetUserRoles): import("rxjs").Observable<import("../proxy/identity/models").IdentityRoleDto[]>;
}
