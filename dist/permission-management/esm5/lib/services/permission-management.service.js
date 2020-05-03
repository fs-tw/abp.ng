/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/permission-management.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
var PermissionManagementService = /** @class */ (function () {
    function PermissionManagementService(rest) {
        this.rest = rest;
        this.apiName = 'AbpPermissionManagement';
    }
    /**
     * @param {?} params
     * @return {?}
     */
    PermissionManagementService.prototype.getPermissions = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/abp/permissions',
            params: params,
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    PermissionManagementService.prototype.updatePermissions = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var permissions = _a.permissions, providerKey = _a.providerKey, providerName = _a.providerName;
        /** @type {?} */
        var request = {
            method: 'PUT',
            url: '/api/abp/permissions',
            body: { permissions: permissions },
            params: { providerKey: providerKey, providerName: providerName },
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    };
    PermissionManagementService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PermissionManagementService.ctorParameters = function () { return [
        { type: RestService }
    ]; };
    /** @nocollapse */ PermissionManagementService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PermissionManagementService_Factory() { return new PermissionManagementService(i0.ɵɵinject(i1.RestService)); }, token: PermissionManagementService, providedIn: "root" });
    return PermissionManagementService;
}());
export { PermissionManagementService };
if (false) {
    /** @type {?} */
    PermissionManagementService.prototype.apiName;
    /**
     * @type {?}
     * @private
     */
    PermissionManagementService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnBlcm1pc3Npb24tbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBUSxNQUFNLGNBQWMsQ0FBQzs7O0FBSWpEO0lBTUUscUNBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFGckMsWUFBTyxHQUFHLHlCQUF5QixDQUFDO0lBRUksQ0FBQzs7Ozs7SUFFekMsb0RBQWM7Ozs7SUFBZCxVQUNFLE1BQTRDOztZQUV0QyxPQUFPLEdBQXVEO1lBQ2xFLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLHNCQUFzQjtZQUMzQixNQUFNLFFBQUE7U0FDUDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ3RCLE9BQU8sRUFDUCxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQzFCLENBQUM7SUFDSixDQUFDOzs7OztJQUVELHVEQUFpQjs7OztJQUFqQixVQUFrQixFQUkwRDtZQUgxRSw0QkFBVyxFQUNYLDRCQUFXLEVBQ1gsOEJBQVk7O1lBRU4sT0FBTyxHQUFxRDtZQUNoRSxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxzQkFBc0I7WUFDM0IsSUFBSSxFQUFFLEVBQUUsV0FBVyxhQUFBLEVBQUU7WUFDckIsTUFBTSxFQUFFLEVBQUUsV0FBVyxhQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUU7U0FDdEM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUEyQyxPQUFPLEVBQUU7WUFDMUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXRDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLFdBQVc7OztzQ0FEcEI7Q0E0Q0MsQUF2Q0QsSUF1Q0M7U0FwQ1ksMkJBQTJCOzs7SUFDdEMsOENBQW9DOzs7OztJQUV4QiwyQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBSZXN0IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25NYW5hZ2VtZW50U2VydmljZSB7XHJcbiAgYXBpTmFtZSA9ICdBYnBQZXJtaXNzaW9uTWFuYWdlbWVudCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UpIHt9XHJcblxyXG4gIGdldFBlcm1pc3Npb25zKFxyXG4gICAgcGFyYW1zOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5HcmFudGVkUHJvdmlkZXIsXHJcbiAgKTogT2JzZXJ2YWJsZTxQZXJtaXNzaW9uTWFuYWdlbWVudC5SZXNwb25zZT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PFBlcm1pc3Npb25NYW5hZ2VtZW50LkdyYW50ZWRQcm92aWRlcj4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvYWJwL3Blcm1pc3Npb25zJyxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8UGVybWlzc2lvbk1hbmFnZW1lbnQuR3JhbnRlZFByb3ZpZGVyLCBQZXJtaXNzaW9uTWFuYWdlbWVudC5SZXNwb25zZT4oXHJcbiAgICAgIHJlcXVlc3QsXHJcbiAgICAgIHsgYXBpTmFtZTogdGhpcy5hcGlOYW1lIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGVybWlzc2lvbnMoe1xyXG4gICAgcGVybWlzc2lvbnMsXHJcbiAgICBwcm92aWRlcktleSxcclxuICAgIHByb3ZpZGVyTmFtZSxcclxuICB9OiBQZXJtaXNzaW9uTWFuYWdlbWVudC5HcmFudGVkUHJvdmlkZXIgJiBQZXJtaXNzaW9uTWFuYWdlbWVudC5VcGRhdGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8UGVybWlzc2lvbk1hbmFnZW1lbnQuVXBkYXRlUmVxdWVzdD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIHVybDogJy9hcGkvYWJwL3Blcm1pc3Npb25zJyxcclxuICAgICAgYm9keTogeyBwZXJtaXNzaW9ucyB9LFxyXG4gICAgICBwYXJhbXM6IHsgcHJvdmlkZXJLZXksIHByb3ZpZGVyTmFtZSB9LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8UGVybWlzc2lvbk1hbmFnZW1lbnQuVXBkYXRlUmVxdWVzdCwgbnVsbD4ocmVxdWVzdCwge1xyXG4gICAgICBhcGlOYW1lOiB0aGlzLmFwaU5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19