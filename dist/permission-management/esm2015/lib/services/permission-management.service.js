import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class PermissionManagementService {
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpPermissionManagement';
    }
    getPermissions(params) {
        const request = {
            method: 'GET',
            url: '/api/permission-management/permissions',
            params,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    updatePermissions({ permissions, providerKey, providerName, }) {
        const request = {
            method: 'PUT',
            url: '/api/permission-management/permissions',
            body: { permissions },
            params: { providerKey, providerName },
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
}
PermissionManagementService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PermissionManagementService_Factory() { return new PermissionManagementService(i0.ɵɵinject(i1.RestService)); }, token: PermissionManagementService, providedIn: "root" });
PermissionManagementService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
PermissionManagementService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQvc3JjL2xpYi9zZXJ2aWNlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQVEsTUFBTSxjQUFjLENBQUM7OztBQU9qRCxNQUFNLE9BQU8sMkJBQTJCO0lBR3RDLFlBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFGckMsWUFBTyxHQUFHLHlCQUF5QixDQUFDO0lBRUksQ0FBQztJQUV6QyxjQUFjLENBQ1osTUFBNEM7UUFFNUMsTUFBTSxPQUFPLEdBQXVEO1lBQ2xFLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLHdDQUF3QztZQUM3QyxNQUFNO1NBQ1AsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQ3RCLE9BQU8sRUFDUCxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQzFCLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFDaEIsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEdBQzhEO1FBQzFFLE1BQU0sT0FBTyxHQUFxRDtZQUNoRSxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSx3Q0FBd0M7WUFDN0MsSUFBSSxFQUFFLEVBQUUsV0FBVyxFQUFFO1lBQ3JCLE1BQU0sRUFBRSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUU7U0FDdEMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQTJDLE9BQU8sRUFBRTtZQUMxRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXRDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQU5RLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBSZXN0IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25NYW5hZ2VtZW50U2VydmljZSB7XHJcbiAgYXBpTmFtZSA9ICdBYnBQZXJtaXNzaW9uTWFuYWdlbWVudCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UpIHt9XHJcblxyXG4gIGdldFBlcm1pc3Npb25zKFxyXG4gICAgcGFyYW1zOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5HcmFudGVkUHJvdmlkZXIsXHJcbiAgKTogT2JzZXJ2YWJsZTxQZXJtaXNzaW9uTWFuYWdlbWVudC5SZXNwb25zZT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PFBlcm1pc3Npb25NYW5hZ2VtZW50LkdyYW50ZWRQcm92aWRlcj4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvcGVybWlzc2lvbi1tYW5hZ2VtZW50L3Blcm1pc3Npb25zJyxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8UGVybWlzc2lvbk1hbmFnZW1lbnQuR3JhbnRlZFByb3ZpZGVyLCBQZXJtaXNzaW9uTWFuYWdlbWVudC5SZXNwb25zZT4oXHJcbiAgICAgIHJlcXVlc3QsXHJcbiAgICAgIHsgYXBpTmFtZTogdGhpcy5hcGlOYW1lIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGVybWlzc2lvbnMoe1xyXG4gICAgcGVybWlzc2lvbnMsXHJcbiAgICBwcm92aWRlcktleSxcclxuICAgIHByb3ZpZGVyTmFtZSxcclxuICB9OiBQZXJtaXNzaW9uTWFuYWdlbWVudC5HcmFudGVkUHJvdmlkZXIgJiBQZXJtaXNzaW9uTWFuYWdlbWVudC5VcGRhdGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8UGVybWlzc2lvbk1hbmFnZW1lbnQuVXBkYXRlUmVxdWVzdD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIHVybDogJy9hcGkvcGVybWlzc2lvbi1tYW5hZ2VtZW50L3Blcm1pc3Npb25zJyxcclxuICAgICAgYm9keTogeyBwZXJtaXNzaW9ucyB9LFxyXG4gICAgICBwYXJhbXM6IHsgcHJvdmlkZXJLZXksIHByb3ZpZGVyTmFtZSB9LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8UGVybWlzc2lvbk1hbmFnZW1lbnQuVXBkYXRlUmVxdWVzdCwgbnVsbD4ocmVxdWVzdCwge1xyXG4gICAgICBhcGlOYW1lOiB0aGlzLmFwaU5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19