import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "@ngxs/store";
let FeatureManagementService = class FeatureManagementService {
    constructor(rest, store) {
        this.rest = rest;
        this.store = store;
        this.apiName = 'FeatureManagement';
    }
    getFeatures(params) {
        const request = {
            method: 'GET',
            url: '/api/feature-management/features',
            params,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    updateFeatures({ features, providerKey, providerName, }) {
        const request = {
            method: 'PUT',
            url: '/api/feature-management/features',
            body: { features },
            params: { providerKey, providerName },
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
};
FeatureManagementService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeatureManagementService_Factory() { return new FeatureManagementService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i2.Store)); }, token: FeatureManagementService, providedIn: "root" });
FeatureManagementService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [RestService, Store])
], FeatureManagementService);
export { FeatureManagementService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mZWF0dXJlLW1hbmFnZW1lbnQvc3JjL2xpYi9zZXJ2aWNlcy9mZWF0dXJlLW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFRLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFPcEMsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFHbkMsWUFBb0IsSUFBaUIsRUFBVSxLQUFZO1FBQXZDLFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBRjNELFlBQU8sR0FBRyxtQkFBbUIsQ0FBQztJQUVnQyxDQUFDO0lBRS9ELFdBQVcsQ0FBQyxNQUFrQztRQUM1QyxNQUFNLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsa0NBQWtDO1lBQ3ZDLE1BQU07U0FDUCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBeUQsT0FBTyxFQUFFO1lBQ3hGLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLEVBQ2IsUUFBUSxFQUNSLFdBQVcsRUFDWCxZQUFZLEdBQzRDO1FBQ3hELE1BQU0sT0FBTyxHQUE2QztZQUN4RCxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxrQ0FBa0M7WUFDdkMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFO1lBQ2xCLE1BQU0sRUFBRSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUU7U0FDdEMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQW1DLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNqRyxDQUFDO0NBQ0YsQ0FBQTs7QUE3Qlksd0JBQXdCO0lBSHBDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7cUNBSTBCLFdBQVcsRUFBaUIsS0FBSztHQUhoRCx3QkFBd0IsQ0E2QnBDO1NBN0JZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzdFNlcnZpY2UsIFJlc3QgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlIHtcclxuICBhcGlOYW1lID0gJ0ZlYXR1cmVNYW5hZ2VtZW50JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0OiBSZXN0U2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGdldEZlYXR1cmVzKHBhcmFtczogRmVhdHVyZU1hbmFnZW1lbnQuUHJvdmlkZXIpOiBPYnNlcnZhYmxlPEZlYXR1cmVNYW5hZ2VtZW50LkZlYXR1cmVzPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvZmVhdHVyZS1tYW5hZ2VtZW50L2ZlYXR1cmVzJyxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxGZWF0dXJlTWFuYWdlbWVudC5Qcm92aWRlciwgRmVhdHVyZU1hbmFnZW1lbnQuRmVhdHVyZXM+KHJlcXVlc3QsIHtcclxuICAgICAgYXBpTmFtZTogdGhpcy5hcGlOYW1lLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGZWF0dXJlcyh7XHJcbiAgICBmZWF0dXJlcyxcclxuICAgIHByb3ZpZGVyS2V5LFxyXG4gICAgcHJvdmlkZXJOYW1lLFxyXG4gIH06IEZlYXR1cmVNYW5hZ2VtZW50LlByb3ZpZGVyICYgRmVhdHVyZU1hbmFnZW1lbnQuRmVhdHVyZXMpOiBPYnNlcnZhYmxlPG51bGw+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxGZWF0dXJlTWFuYWdlbWVudC5GZWF0dXJlcz4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIHVybDogJy9hcGkvZmVhdHVyZS1tYW5hZ2VtZW50L2ZlYXR1cmVzJyxcclxuICAgICAgYm9keTogeyBmZWF0dXJlcyB9LFxyXG4gICAgICBwYXJhbXM6IHsgcHJvdmlkZXJLZXksIHByb3ZpZGVyTmFtZSB9LFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxGZWF0dXJlTWFuYWdlbWVudC5GZWF0dXJlcywgbnVsbD4ocmVxdWVzdCwgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==