import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
let TenantManagementService = class TenantManagementService {
    constructor(rest) {
        this.rest = rest;
        this.apiName = 'AbpTenantManagement';
    }
    getTenant(params = {}) {
        const request = {
            method: 'GET',
            url: '/api/multi-tenancy/tenants',
            params,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    getTenantById(id) {
        const request = {
            method: 'GET',
            url: `/api/multi-tenancy/tenants/${id}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    deleteTenant(id) {
        const request = {
            method: 'DELETE',
            url: `/api/multi-tenancy/tenants/${id}`,
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
    createTenant(body) {
        const request = {
            method: 'POST',
            url: '/api/multi-tenancy/tenants',
            body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    updateTenant(body) {
        const url = `/api/multi-tenancy/tenants/${body.id}`;
        delete body.id;
        const request = {
            method: 'PUT',
            url,
            body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    getDefaultConnectionString(id) {
        const url = `/api/multi-tenancy/tenants/${id}/default-connection-string`;
        const request = {
            method: 'GET',
            responseType: "text" /* Text */,
            url,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    updateDefaultConnectionString(payload) {
        const url = `/api/multi-tenancy/tenants/${payload.id}/default-connection-string`;
        const request = {
            method: 'PUT',
            url,
            params: { defaultConnectionString: payload.defaultConnectionString },
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    deleteDefaultConnectionString(id) {
        const url = `/api/multi-tenancy/tenants/${id}/default-connection-string`;
        const request = {
            method: 'DELETE',
            url,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
};
TenantManagementService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TenantManagementService_Factory() { return new TenantManagementService(i0.ɵɵinject(i1.RestService)); }, token: TenantManagementService, providedIn: "root" });
TenantManagementService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [RestService])
], TenantManagementService);
export { TenantManagementService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RlbmFudC1tYW5hZ2VtZW50L3NyYy9saWIvc2VydmljZXMvdGVuYW50LW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sY0FBYyxDQUFDOzs7QUFNdEQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFHbEMsWUFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUZyQyxZQUFPLEdBQUcscUJBQXFCLENBQUM7SUFFUSxDQUFDO0lBRXpDLFNBQVMsQ0FBQyxTQUFTLEVBQXlCO1FBQzFDLE1BQU0sT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSw0QkFBNEI7WUFDakMsTUFBTTtTQUNQLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFrQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUFVO1FBQ3RCLE1BQU0sT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSw4QkFBOEIsRUFBRSxFQUFFO1NBQ3hDLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFzQixPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFVO1FBQ3JCLE1BQU0sT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsUUFBUTtZQUNoQixHQUFHLEVBQUUsOEJBQThCLEVBQUUsRUFBRTtTQUN4QyxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBYSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFpQztRQUM1QyxNQUFNLE9BQU8sR0FBOEM7WUFDekQsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLElBQUk7U0FDTCxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBNkMsT0FBTyxFQUFFO1lBQzVFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQW9DO1FBQy9DLE1BQU0sR0FBRyxHQUFHLDhCQUE4QixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDcEQsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRWYsTUFBTSxPQUFPLEdBQWlEO1lBQzVELE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRztZQUNILElBQUk7U0FDTCxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBZ0QsT0FBTyxFQUFFO1lBQy9FLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMEJBQTBCLENBQUMsRUFBVTtRQUNuQyxNQUFNLEdBQUcsR0FBRyw4QkFBOEIsRUFBRSw0QkFBNEIsQ0FBQztRQUV6RSxNQUFNLE9BQU8sR0FBa0U7WUFDN0UsTUFBTSxFQUFFLEtBQUs7WUFDYixZQUFZLG1CQUF3QjtZQUNwQyxHQUFHO1NBQ0osQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQTBELE9BQU8sRUFBRTtZQUN6RixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZCQUE2QixDQUMzQixPQUF3RDtRQUV4RCxNQUFNLEdBQUcsR0FBRyw4QkFBOEIsT0FBTyxDQUFDLEVBQUUsNEJBQTRCLENBQUM7UUFFakYsTUFBTSxPQUFPLEdBQWtFO1lBQzdFLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRztZQUNILE1BQU0sRUFBRSxFQUFFLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRTtTQUNyRSxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBdUQsT0FBTyxFQUFFO1lBQ3RGLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQTZCLENBQUMsRUFBVTtRQUN0QyxNQUFNLEdBQUcsR0FBRyw4QkFBOEIsRUFBRSw0QkFBNEIsQ0FBQztRQUV6RSxNQUFNLE9BQU8sR0FBa0U7WUFDN0UsTUFBTSxFQUFFLFFBQVE7WUFDaEIsR0FBRztTQUNKLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUF1RCxPQUFPLEVBQUU7WUFDdEYsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztBQW5HWSx1QkFBdUI7SUFIbkMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztxQ0FJMEIsV0FBVztHQUgxQix1QkFBdUIsQ0FtR25DO1NBbkdZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSZXN0U2VydmljZSwgUmVzdCwgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy90ZW5hbnQtbWFuYWdlbWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50TWFuYWdlbWVudFNlcnZpY2Uge1xyXG4gIGFwaU5hbWUgPSAnQWJwVGVuYW50TWFuYWdlbWVudCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UpIHt9XHJcblxyXG4gIGdldFRlbmFudChwYXJhbXMgPSB7fSBhcyBBQlAuUGFnZVF1ZXJ5UGFyYW1zKTogT2JzZXJ2YWJsZTxUZW5hbnRNYW5hZ2VtZW50LlJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvbXVsdGktdGVuYW5jeS90ZW5hbnRzJyxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgVGVuYW50TWFuYWdlbWVudC5SZXNwb25zZT4ocmVxdWVzdCwgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRUZW5hbnRCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFCUC5CYXNpY0l0ZW0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiBgL2FwaS9tdWx0aS10ZW5hbmN5L3RlbmFudHMvJHtpZH1gLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgQUJQLkJhc2ljSXRlbT4ocmVxdWVzdCwgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVUZW5hbnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVsbD4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICB1cmw6IGAvYXBpL211bHRpLXRlbmFuY3kvdGVuYW50cy8ke2lkfWAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBudWxsPihyZXF1ZXN0LCB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRlbmFudChib2R5OiBUZW5hbnRNYW5hZ2VtZW50LkFkZFJlcXVlc3QpOiBPYnNlcnZhYmxlPEFCUC5CYXNpY0l0ZW0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxUZW5hbnRNYW5hZ2VtZW50LkFkZFJlcXVlc3Q+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL2FwaS9tdWx0aS10ZW5hbmN5L3RlbmFudHMnLFxyXG4gICAgICBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8VGVuYW50TWFuYWdlbWVudC5BZGRSZXF1ZXN0LCBBQlAuQmFzaWNJdGVtPihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGVuYW50KGJvZHk6IFRlbmFudE1hbmFnZW1lbnQuVXBkYXRlUmVxdWVzdCk6IE9ic2VydmFibGU8QUJQLkJhc2ljSXRlbT4ge1xyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvbXVsdGktdGVuYW5jeS90ZW5hbnRzLyR7Ym9keS5pZH1gO1xyXG4gICAgZGVsZXRlIGJvZHkuaWQ7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PFRlbmFudE1hbmFnZW1lbnQuVXBkYXRlUmVxdWVzdD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIHVybCxcclxuICAgICAgYm9keSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PFRlbmFudE1hbmFnZW1lbnQuVXBkYXRlUmVxdWVzdCwgQUJQLkJhc2ljSXRlbT4ocmVxdWVzdCwge1xyXG4gICAgICBhcGlOYW1lOiB0aGlzLmFwaU5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldERlZmF1bHRDb25uZWN0aW9uU3RyaW5nKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvbXVsdGktdGVuYW5jeS90ZW5hbnRzLyR7aWR9L2RlZmF1bHQtY29ubmVjdGlvbi1zdHJpbmdgO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxUZW5hbnRNYW5hZ2VtZW50LkRlZmF1bHRDb25uZWN0aW9uU3RyaW5nUmVxdWVzdD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHJlc3BvbnNlVHlwZTogUmVzdC5SZXNwb25zZVR5cGUuVGV4dCxcclxuICAgICAgdXJsLFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxUZW5hbnRNYW5hZ2VtZW50LkRlZmF1bHRDb25uZWN0aW9uU3RyaW5nUmVxdWVzdCwgc3RyaW5nPihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGVmYXVsdENvbm5lY3Rpb25TdHJpbmcoXHJcbiAgICBwYXlsb2FkOiBUZW5hbnRNYW5hZ2VtZW50LkRlZmF1bHRDb25uZWN0aW9uU3RyaW5nUmVxdWVzdCxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvbXVsdGktdGVuYW5jeS90ZW5hbnRzLyR7cGF5bG9hZC5pZH0vZGVmYXVsdC1jb25uZWN0aW9uLXN0cmluZ2A7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PFRlbmFudE1hbmFnZW1lbnQuRGVmYXVsdENvbm5lY3Rpb25TdHJpbmdSZXF1ZXN0PiA9IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBwYXJhbXM6IHsgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmc6IHBheWxvYWQuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmcgfSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8VGVuYW50TWFuYWdlbWVudC5EZWZhdWx0Q29ubmVjdGlvblN0cmluZ1JlcXVlc3QsIGFueT4ocmVxdWVzdCwge1xyXG4gICAgICBhcGlOYW1lOiB0aGlzLmFwaU5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZURlZmF1bHRDb25uZWN0aW9uU3RyaW5nKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvbXVsdGktdGVuYW5jeS90ZW5hbnRzLyR7aWR9L2RlZmF1bHQtY29ubmVjdGlvbi1zdHJpbmdgO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxUZW5hbnRNYW5hZ2VtZW50LkRlZmF1bHRDb25uZWN0aW9uU3RyaW5nUmVxdWVzdD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIHVybCxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8VGVuYW50TWFuYWdlbWVudC5EZWZhdWx0Q29ubmVjdGlvblN0cmluZ1JlcXVlc3QsIGFueT4ocmVxdWVzdCwge1xyXG4gICAgICBhcGlOYW1lOiB0aGlzLmFwaU5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19