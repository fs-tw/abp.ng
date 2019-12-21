import { Store } from '@ngxs/store';
export declare class IdentityStateService {
    private store;
    constructor(store: Store);
    getRoles(): import("../models/identity").Identity.RoleItem[];
    getRolesTotalCount(): number;
    getUsers(): import("../models/identity").Identity.UserItem[];
    getUsersTotalCount(): number;
}
