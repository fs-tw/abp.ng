import { Observable } from 'rxjs';
import { RestService } from '@abp/ng.core';
import { RegisterResponse, RegisterRequest, TenantIdResponse } from '../models';
export declare class AccountService {
    private rest;
    apiName: string;
    constructor(rest: RestService);
    findTenant(tenantName: string): Observable<TenantIdResponse>;
    register(body: RegisterRequest): Observable<RegisterResponse>;
}
