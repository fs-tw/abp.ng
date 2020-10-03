import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "@ngxs/store";
/**
 * @deprecated Use FeaturesService instead. To be deleted in v4.0.
 */
export class FeatureManagementService {
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
}
FeatureManagementService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FeatureManagementService_Factory() { return new FeatureManagementService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i2.Store)); }, token: FeatureManagementService, providedIn: "root" });
FeatureManagementService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
FeatureManagementService.ctorParameters = () => [
    { type: RestService },
    { type: Store }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mZWF0dXJlLW1hbmFnZW1lbnQvc3JjL2xpYi9zZXJ2aWNlcy9mZWF0dXJlLW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQVEsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQU9wQzs7R0FFRztBQUNILE1BQU0sT0FBTyx3QkFBd0I7SUFHbkMsWUFBb0IsSUFBaUIsRUFBVSxLQUFZO1FBQXZDLFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBRjNELFlBQU8sR0FBRyxtQkFBbUIsQ0FBQztJQUVnQyxDQUFDO0lBRS9ELFdBQVcsQ0FBQyxNQUFrQztRQUM1QyxNQUFNLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsa0NBQWtDO1lBQ3ZDLE1BQU07U0FDUCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBeUQsT0FBTyxFQUFFO1lBQ3hGLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLEVBQ2IsUUFBUSxFQUNSLFdBQVcsRUFDWCxZQUFZLEdBQzRDO1FBQ3hELE1BQU0sT0FBTyxHQUE2QztZQUN4RCxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxrQ0FBa0M7WUFDdkMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFO1lBQ2xCLE1BQU0sRUFBRSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUU7U0FDdEMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQW1DLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs7O1lBbENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUFEsV0FBVztZQUNYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBSZXN0IH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRmVhdHVyZU1hbmFnZW1lbnQgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIFVzZSBGZWF0dXJlc1NlcnZpY2UgaW5zdGVhZC4gVG8gYmUgZGVsZXRlZCBpbiB2NC4wLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVNYW5hZ2VtZW50U2VydmljZSB7XHJcbiAgYXBpTmFtZSA9ICdGZWF0dXJlTWFuYWdlbWVudCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBnZXRGZWF0dXJlcyhwYXJhbXM6IEZlYXR1cmVNYW5hZ2VtZW50LlByb3ZpZGVyKTogT2JzZXJ2YWJsZTxGZWF0dXJlTWFuYWdlbWVudC5GZWF0dXJlcz4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6ICcvYXBpL2ZlYXR1cmUtbWFuYWdlbWVudC9mZWF0dXJlcycsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8RmVhdHVyZU1hbmFnZW1lbnQuUHJvdmlkZXIsIEZlYXR1cmVNYW5hZ2VtZW50LkZlYXR1cmVzPihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRmVhdHVyZXMoe1xyXG4gICAgZmVhdHVyZXMsXHJcbiAgICBwcm92aWRlcktleSxcclxuICAgIHByb3ZpZGVyTmFtZSxcclxuICB9OiBGZWF0dXJlTWFuYWdlbWVudC5Qcm92aWRlciAmIEZlYXR1cmVNYW5hZ2VtZW50LkZlYXR1cmVzKTogT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8RmVhdHVyZU1hbmFnZW1lbnQuRmVhdHVyZXM+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICB1cmw6ICcvYXBpL2ZlYXR1cmUtbWFuYWdlbWVudC9mZWF0dXJlcycsXHJcbiAgICAgIGJvZHk6IHsgZmVhdHVyZXMgfSxcclxuICAgICAgcGFyYW1zOiB7IHByb3ZpZGVyS2V5LCBwcm92aWRlck5hbWUgfSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8RmVhdHVyZU1hbmFnZW1lbnQuRmVhdHVyZXMsIG51bGw+KHJlcXVlc3QsIHsgYXBpTmFtZTogdGhpcy5hcGlOYW1lIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=