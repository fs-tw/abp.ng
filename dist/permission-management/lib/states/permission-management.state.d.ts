import { StateContext } from '@ngxs/store';
import { GetPermissions, UpdatePermissions } from '../actions/permission-management.actions';
import { PermissionManagement } from '../models/permission-management';
import { PermissionsService } from '../proxy/permissions.service';
export declare class PermissionManagementState {
    private service;
    static getPermissionGroups({ permissionRes }: PermissionManagement.State): PermissionManagement.Group[];
    static getEntityDisplayName({ permissionRes }: PermissionManagement.State): string;
    constructor(service: PermissionsService);
    permissionManagementGet({ patchState }: StateContext<PermissionManagement.State>, { payload: { providerKey, providerName }, }: GetPermissions): import("rxjs").Observable<import("../proxy").GetPermissionListResultDto>;
    permissionManagementUpdate(_: any, { payload }: UpdatePermissions): import("rxjs").Observable<void>;
}
