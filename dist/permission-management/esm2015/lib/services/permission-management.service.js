import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
let PermissionManagementService = class PermissionManagementService {
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
};
PermissionManagementService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PermissionManagementService_Factory() { return new PermissionManagementService(i0.ɵɵinject(i1.RestService)); }, token: PermissionManagementService, providedIn: "root" });
PermissionManagementService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [RestService])
], PermissionManagementService);
export { PermissionManagementService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1tYW5hZ2VtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQvc3JjL2xpYi9zZXJ2aWNlcy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFRLE1BQU0sY0FBYyxDQUFDOzs7QUFPakQsSUFBYSwyQkFBMkIsR0FBeEMsTUFBYSwyQkFBMkI7SUFHdEMsWUFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUZyQyxZQUFPLEdBQUcseUJBQXlCLENBQUM7SUFFSSxDQUFDO0lBRXpDLGNBQWMsQ0FDWixNQUE0QztRQUU1QyxNQUFNLE9BQU8sR0FBdUQ7WUFDbEUsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsd0NBQXdDO1lBQzdDLE1BQU07U0FDUCxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FDdEIsT0FBTyxFQUNQLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FDMUIsQ0FBQztJQUNKLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUNoQixXQUFXLEVBQ1gsV0FBVyxFQUNYLFlBQVksR0FDOEQ7UUFDMUUsTUFBTSxPQUFPLEdBQXFEO1lBQ2hFLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLHdDQUF3QztZQUM3QyxJQUFJLEVBQUUsRUFBRSxXQUFXLEVBQUU7WUFDckIsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRTtTQUN0QyxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBMkMsT0FBTyxFQUFFO1lBQzFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7QUFwQ1ksMkJBQTJCO0lBSHZDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7cUNBSTBCLFdBQVc7R0FIMUIsMkJBQTJCLENBb0N2QztTQXBDWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBSZXN0IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9uTWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25NYW5hZ2VtZW50U2VydmljZSB7XHJcbiAgYXBpTmFtZSA9ICdBYnBQZXJtaXNzaW9uTWFuYWdlbWVudCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UpIHt9XHJcblxyXG4gIGdldFBlcm1pc3Npb25zKFxyXG4gICAgcGFyYW1zOiBQZXJtaXNzaW9uTWFuYWdlbWVudC5HcmFudGVkUHJvdmlkZXIsXHJcbiAgKTogT2JzZXJ2YWJsZTxQZXJtaXNzaW9uTWFuYWdlbWVudC5SZXNwb25zZT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PFBlcm1pc3Npb25NYW5hZ2VtZW50LkdyYW50ZWRQcm92aWRlcj4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvcGVybWlzc2lvbi1tYW5hZ2VtZW50L3Blcm1pc3Npb25zJyxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8UGVybWlzc2lvbk1hbmFnZW1lbnQuR3JhbnRlZFByb3ZpZGVyLCBQZXJtaXNzaW9uTWFuYWdlbWVudC5SZXNwb25zZT4oXHJcbiAgICAgIHJlcXVlc3QsXHJcbiAgICAgIHsgYXBpTmFtZTogdGhpcy5hcGlOYW1lIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGVybWlzc2lvbnMoe1xyXG4gICAgcGVybWlzc2lvbnMsXHJcbiAgICBwcm92aWRlcktleSxcclxuICAgIHByb3ZpZGVyTmFtZSxcclxuICB9OiBQZXJtaXNzaW9uTWFuYWdlbWVudC5HcmFudGVkUHJvdmlkZXIgJiBQZXJtaXNzaW9uTWFuYWdlbWVudC5VcGRhdGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8UGVybWlzc2lvbk1hbmFnZW1lbnQuVXBkYXRlUmVxdWVzdD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIHVybDogJy9hcGkvcGVybWlzc2lvbi1tYW5hZ2VtZW50L3Blcm1pc3Npb25zJyxcclxuICAgICAgYm9keTogeyBwZXJtaXNzaW9ucyB9LFxyXG4gICAgICBwYXJhbXM6IHsgcHJvdmlkZXJLZXksIHByb3ZpZGVyTmFtZSB9LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8UGVybWlzc2lvbk1hbmFnZW1lbnQuVXBkYXRlUmVxdWVzdCwgbnVsbD4ocmVxdWVzdCwge1xyXG4gICAgICBhcGlOYW1lOiB0aGlzLmFwaU5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19