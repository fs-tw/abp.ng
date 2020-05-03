/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/permission-management.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class PermissionManagementService {
    /**
     * @param {?} rest
     */
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpPermissionManagement';
    }
    /**
     * @param {?} params
     * @return {?}
     */
    getPermissions(params) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: '/api/abp/permissions',
            params,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    updatePermissions({ permissions, providerKey, providerName, }) {
        /** @type {?} */
        const request = {
            method: 'PUT',
            url: '/api/abp/permissions',
            body: { permissions },
            params: { providerKey, providerName },
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
}
PermissionManagementService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PermissionManagementService.ctorParameters = () => [
    { type: RestService }
];
/** @nocollapse */ PermissionManagementService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PermissionManagementService_Factory() { return new PermissionManagementService(i0.ɵɵinject(i1.RestService)); }, token: PermissionManagementService, providedIn: "root" });
if (false) {
    /** @type {?} */
    PermissionManagementService.prototype.apiName;
    /**
     * @type {?}
     * @private
     */
    PermissionManagementService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnBlcm1pc3Npb24tbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBUSxNQUFNLGNBQWMsQ0FBQzs7O0FBT2pELE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFHdEMsWUFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUZyQyxZQUFPLEdBQUcseUJBQXlCLENBQUM7SUFFSSxDQUFDOzs7OztJQUV6QyxjQUFjLENBQ1osTUFBNEM7O2NBRXRDLE9BQU8sR0FBdUQ7WUFDbEUsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsc0JBQXNCO1lBQzNCLE1BQU07U0FDUDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ3RCLE9BQU8sRUFDUCxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQzFCLENBQUM7SUFDSixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQ2hCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsWUFBWSxHQUM4RDs7Y0FDcEUsT0FBTyxHQUFxRDtZQUNoRSxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxzQkFBc0I7WUFDM0IsSUFBSSxFQUFFLEVBQUUsV0FBVyxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUU7U0FDdEM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUEyQyxPQUFPLEVBQUU7WUFDMUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxXQUFXOzs7OztJQVFsQiw4Q0FBb0M7Ozs7O0lBRXhCLDJDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzdFNlcnZpY2UsIFJlc3QgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBlcm1pc3Npb25NYW5hZ2VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3Blcm1pc3Npb24tbWFuYWdlbWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbk1hbmFnZW1lbnRTZXJ2aWNlIHtcclxuICBhcGlOYW1lID0gJ0FicFBlcm1pc3Npb25NYW5hZ2VtZW50JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0OiBSZXN0U2VydmljZSkge31cclxuXHJcbiAgZ2V0UGVybWlzc2lvbnMoXHJcbiAgICBwYXJhbXM6IFBlcm1pc3Npb25NYW5hZ2VtZW50LkdyYW50ZWRQcm92aWRlcixcclxuICApOiBPYnNlcnZhYmxlPFBlcm1pc3Npb25NYW5hZ2VtZW50LlJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8UGVybWlzc2lvbk1hbmFnZW1lbnQuR3JhbnRlZFByb3ZpZGVyPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL2FwaS9hYnAvcGVybWlzc2lvbnMnLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxQZXJtaXNzaW9uTWFuYWdlbWVudC5HcmFudGVkUHJvdmlkZXIsIFBlcm1pc3Npb25NYW5hZ2VtZW50LlJlc3BvbnNlPihcclxuICAgICAgcmVxdWVzdCxcclxuICAgICAgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQZXJtaXNzaW9ucyh7XHJcbiAgICBwZXJtaXNzaW9ucyxcclxuICAgIHByb3ZpZGVyS2V5LFxyXG4gICAgcHJvdmlkZXJOYW1lLFxyXG4gIH06IFBlcm1pc3Npb25NYW5hZ2VtZW50LkdyYW50ZWRQcm92aWRlciAmIFBlcm1pc3Npb25NYW5hZ2VtZW50LlVwZGF0ZVJlcXVlc3QpOiBPYnNlcnZhYmxlPG51bGw+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxQZXJtaXNzaW9uTWFuYWdlbWVudC5VcGRhdGVSZXF1ZXN0PiA9IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsOiAnL2FwaS9hYnAvcGVybWlzc2lvbnMnLFxyXG4gICAgICBib2R5OiB7IHBlcm1pc3Npb25zIH0sXHJcbiAgICAgIHBhcmFtczogeyBwcm92aWRlcktleSwgcHJvdmlkZXJOYW1lIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxQZXJtaXNzaW9uTWFuYWdlbWVudC5VcGRhdGVSZXF1ZXN0LCBudWxsPihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=