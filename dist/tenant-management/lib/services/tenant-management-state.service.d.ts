import { Store } from '@ngxs/store';
import { ABP } from '@abp/ng.core';
import { GetTenants, GetTenantById, CreateTenant, UpdateTenant, DeleteTenant } from '../actions';
export declare class TenantManagementStateService {
    private store;
    constructor(store: Store);
    get(): ABP.BasicItem[];
    getTenantsTotalCount(): number;
    dispatchGetTenants(...args: ConstructorParameters<typeof GetTenants>): import("rxjs").Observable<any>;
    dispatchGetTenantById(...args: ConstructorParameters<typeof GetTenantById>): import("rxjs").Observable<any>;
    dispatchCreateTenant(...args: ConstructorParameters<typeof CreateTenant>): import("rxjs").Observable<any>;
    dispatchUpdateTenant(...args: ConstructorParameters<typeof UpdateTenant>): import("rxjs").Observable<any>;
    dispatchDeleteTenant(...args: ConstructorParameters<typeof DeleteTenant>): import("rxjs").Observable<any>;
}
