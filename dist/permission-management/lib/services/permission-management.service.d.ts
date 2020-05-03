import { RestService } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { PermissionManagement } from '../models/permission-management';
export declare class PermissionManagementService {
    private rest;
    apiName: string;
    constructor(rest: RestService);
    getPermissions(params: PermissionManagement.GrantedProvider): Observable<PermissionManagement.Response>;
    updatePermissions({ permissions, providerKey, providerName, }: PermissionManagement.GrantedProvider & PermissionManagement.UpdateRequest): Observable<null>;
}
