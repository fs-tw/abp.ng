import { PagedResultDto } from '@abp/ng.core';
import { StateContext } from '@ngxs/store';
import { CreateTenant, DeleteTenant, GetTenantById, GetTenants, UpdateTenant } from '../actions/tenant-management.actions';
import { TenantManagement } from '../models/tenant-management';
import { TenantService } from '../proxy/tenant.service';
import { TenantDto } from '../proxy/models';
export declare class TenantManagementState {
    private service;
    static get({ result }: TenantManagement.State): TenantDto[];
    static getTenantsTotalCount({ result }: TenantManagement.State): number;
    constructor(service: TenantService);
    get({ patchState }: StateContext<TenantManagement.State>, { payload }: GetTenants): import("rxjs").Observable<PagedResultDto<TenantDto>>;
    getById({ patchState }: StateContext<TenantManagement.State>, { payload }: GetTenantById): import("rxjs").Observable<TenantDto>;
    delete(_: any, { payload }: DeleteTenant): import("rxjs").Observable<void>;
    add(_: any, { payload }: CreateTenant): import("rxjs").Observable<TenantDto>;
    update({ getState }: StateContext<TenantManagement.State>, { payload }: UpdateTenant): import("rxjs").Observable<TenantDto>;
}
