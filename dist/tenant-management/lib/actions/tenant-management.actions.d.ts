import { GetTenantsInput, TenantCreateDto, TenantUpdateDto } from '../proxy/models';
export declare class GetTenants {
    payload?: GetTenantsInput;
    static readonly type = "[TenantManagement] Get Tenant";
    constructor(payload?: GetTenantsInput);
}
export declare class GetTenantById {
    payload: string;
    static readonly type = "[TenantManagement] Get Tenant By Id";
    constructor(payload: string);
}
export declare class CreateTenant {
    payload: TenantCreateDto;
    static readonly type = "[TenantManagement] Create Tenant";
    constructor(payload: TenantCreateDto);
}
export declare class UpdateTenant {
    payload: TenantUpdateDto & {
        id: string;
    };
    static readonly type = "[TenantManagement] Update Tenant";
    constructor(payload: TenantUpdateDto & {
        id: string;
    });
}
export declare class DeleteTenant {
    payload: string;
    static readonly type = "[TenantManagement] Delete Tenant";
    constructor(payload: string);
}
