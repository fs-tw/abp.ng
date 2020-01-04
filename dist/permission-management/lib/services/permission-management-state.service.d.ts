import { Store } from '@ngxs/store';
import { PermissionManagement } from '../models';
import { GetPermissions, UpdatePermissions } from '../actions';
export declare class PermissionManagementStateService {
    private store;
    constructor(store: Store);
    getPermissionGroups(): PermissionManagement.Group[];
    getEntityDisplayName(): string;
    dispatchGetPermissions(...args: ConstructorParameters<typeof GetPermissions>): import("rxjs").Observable<any>;
    dispatchUpdatePermissions(...args: ConstructorParameters<typeof UpdatePermissions>): import("rxjs").Observable<any>;
}
