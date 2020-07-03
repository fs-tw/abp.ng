import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
let AccountService = class AccountService {
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpAccount';
    }
    findTenant(tenantName) {
        const request = {
            method: 'GET',
            url: `/api/abp/multi-tenancy/tenants/by-name/${tenantName}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    register(body) {
        const request = {
            method: 'POST',
            url: '/api/account/register',
            body,
        };
        return this.rest.request(request, {
            skipHandleError: true,
            apiName: this.apiName,
        });
    }
};
AccountService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AccountService_Factory() { return new AccountService(i0.ɵɵinject(i1.RestService)); }, token: AccountService, providedIn: "root" });
AccountService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [RestService])
], AccountService);
export { AccountService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWNjb3VudC9zcmMvbGliL3NlcnZpY2VzL2FjY291bnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFRLE1BQU0sY0FBYyxDQUFDOzs7QUFNakQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUd6QixZQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBRnJDLFlBQU8sR0FBRyxZQUFZLENBQUM7SUFFaUIsQ0FBQztJQUV6QyxVQUFVLENBQUMsVUFBa0I7UUFDM0IsTUFBTSxPQUFPLEdBQXVCO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLDBDQUEwQyxVQUFVLEVBQUU7U0FDNUQsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQXlCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsUUFBUSxDQUFDLElBQXFCO1FBQzVCLE1BQU0sT0FBTyxHQUFrQztZQUM3QyxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSx1QkFBdUI7WUFDNUIsSUFBSTtTQUNMLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFvQyxPQUFPLEVBQUU7WUFDbkUsZUFBZSxFQUFFLElBQUk7WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztBQTFCWSxjQUFjO0lBSDFCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7cUNBSTBCLFdBQVc7R0FIMUIsY0FBYyxDQTBCMUI7U0ExQlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSZXN0U2VydmljZSwgUmVzdCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFJlZ2lzdGVyUmVzcG9uc2UsIFJlZ2lzdGVyUmVxdWVzdCwgVGVuYW50SWRSZXNwb25zZSB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudFNlcnZpY2Uge1xyXG4gIGFwaU5hbWUgPSAnQWJwQWNjb3VudCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UpIHt9XHJcblxyXG4gIGZpbmRUZW5hbnQodGVuYW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUZW5hbnRJZFJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogYC9hcGkvYWJwL211bHRpLXRlbmFuY3kvdGVuYW50cy9ieS1uYW1lLyR7dGVuYW50TmFtZX1gLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgVGVuYW50SWRSZXNwb25zZT4ocmVxdWVzdCwgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlcihib2R5OiBSZWdpc3RlclJlcXVlc3QpOiBPYnNlcnZhYmxlPFJlZ2lzdGVyUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxSZWdpc3RlclJlcXVlc3Q+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL2FwaS9hY2NvdW50L3JlZ2lzdGVyJyxcclxuICAgICAgYm9keSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PFJlZ2lzdGVyUmVxdWVzdCwgUmVnaXN0ZXJSZXNwb25zZT4ocmVxdWVzdCwge1xyXG4gICAgICBza2lwSGFuZGxlRXJyb3I6IHRydWUsXHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=