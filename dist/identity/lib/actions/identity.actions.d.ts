import { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { GetIdentityUsersInput, IdentityRoleCreateDto, IdentityRoleUpdateDto, IdentityUserCreateDto, IdentityUserUpdateDto } from '../proxy/identity/models';
export declare class GetRoles {
    payload?: PagedAndSortedResultRequestDto;
    static readonly type = "[Identity] Get Roles";
    constructor(payload?: PagedAndSortedResultRequestDto);
}
export declare class GetRoleById {
    payload: string;
    static readonly type = "[Identity] Get Role By Id";
    constructor(payload: string);
}
export declare class DeleteRole {
    payload: string;
    static readonly type = "[Identity] Delete Role";
    constructor(payload: string);
}
export declare class CreateRole {
    payload: IdentityRoleCreateDto;
    static readonly type = "[Identity] Create Role";
    constructor(payload: IdentityRoleCreateDto);
}
export declare class UpdateRole {
    payload: IdentityRoleUpdateDto & {
        id: string;
    };
    static readonly type = "[Identity] Update Role";
    constructor(payload: IdentityRoleUpdateDto & {
        id: string;
    });
}
export declare class GetUsers {
    payload?: GetIdentityUsersInput;
    static readonly type = "[Identity] Get Users";
    constructor(payload?: GetIdentityUsersInput);
}
export declare class GetUserById {
    payload: string;
    static readonly type = "[Identity] Get User By Id";
    constructor(payload: string);
}
export declare class DeleteUser {
    payload: string;
    static readonly type = "[Identity] Delete User";
    constructor(payload: string);
}
export declare class CreateUser {
    payload: IdentityUserCreateDto;
    static readonly type = "[Identity] Create User";
    constructor(payload: IdentityUserCreateDto);
}
export declare class UpdateUser {
    payload: IdentityUserUpdateDto & {
        id: string;
    };
    static readonly type = "[Identity] Update User";
    constructor(payload: IdentityUserUpdateDto & {
        id: string;
    });
}
export declare class GetUserRoles {
    payload: string;
    static readonly type = "[Identity] Get User Roles";
    constructor(payload: string);
}
