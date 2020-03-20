/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/tenant-management.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class TenantManagementService {
    /**
     * @param {?} rest
     */
    constructor(rest) {
        this.rest = rest;
    }
    /**
     * @param {?=} params
     * @return {?}
     */
    getTenant(params = (/** @type {?} */ ({}))) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: '/api/multi-tenancy/tenants',
            params,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getTenantById(id) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: `/api/multi-tenancy/tenants/${id}`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteTenant(id) {
        /** @type {?} */
        const request = {
            method: 'DELETE',
            url: `/api/multi-tenancy/tenants/${id}`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    createTenant(body) {
        /** @type {?} */
        const request = {
            method: 'POST',
            url: '/api/multi-tenancy/tenants',
            body,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    updateTenant(body) {
        /** @type {?} */
        const url = `/api/multi-tenancy/tenants/${body.id}`;
        delete body.id;
        /** @type {?} */
        const request = {
            method: 'PUT',
            url,
            body,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getDefaultConnectionString(id) {
        /** @type {?} */
        const url = `/api/multi-tenancy/tenants/${id}/default-connection-string`;
        /** @type {?} */
        const request = {
            method: 'GET',
            responseType: "text" /* Text */,
            url,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    updateDefaultConnectionString(payload) {
        /** @type {?} */
        const url = `/api/multi-tenancy/tenants/${payload.id}/default-connection-string`;
        /** @type {?} */
        const request = {
            method: 'PUT',
            url,
            params: { defaultConnectionString: payload.defaultConnectionString },
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteDefaultConnectionString(id) {
        /** @type {?} */
        const url = `/api/multi-tenancy/tenants/${id}/default-connection-string`;
        /** @type {?} */
        const request = {
            method: 'DELETE',
            url,
        };
        return this.rest.request(request);
    }
}
TenantManagementService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
TenantManagementService.ctorParameters = () => [
    { type: RestService }
];
/** @nocollapse */ TenantManagementService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TenantManagementService_Factory() { return new TenantManagementService(i0.ɵɵinject(i1.RestService)); }, token: TenantManagementService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantManagementService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGVuYW50LW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdGVuYW50LW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGNBQWMsQ0FBQzs7O0FBTXRELE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFDbEMsWUFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUFHLENBQUM7Ozs7O0lBRXpDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsbUJBQUEsRUFBRSxFQUF1Qjs7Y0FDcEMsT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSw0QkFBNEI7WUFDakMsTUFBTTtTQUNQO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBa0MsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsRUFBVTs7Y0FDaEIsT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSw4QkFBOEIsRUFBRSxFQUFFO1NBQ3hDO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBc0IsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsRUFBVTs7Y0FDZixPQUFPLEdBQXVCO1lBQ2xDLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLEdBQUcsRUFBRSw4QkFBOEIsRUFBRSxFQUFFO1NBQ3hDO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBYSxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxJQUFpQzs7Y0FDdEMsT0FBTyxHQUE4QztZQUN6RCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSw0QkFBNEI7WUFDakMsSUFBSTtTQUNMO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBNkMsT0FBTyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBb0M7O2NBQ3pDLEdBQUcsR0FBRyw4QkFBOEIsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNuRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7O2NBRVQsT0FBTyxHQUFpRDtZQUM1RCxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUc7WUFDSCxJQUFJO1NBQ0w7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFnRCxPQUFPLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQUVELDBCQUEwQixDQUFDLEVBQVU7O2NBQzdCLEdBQUcsR0FBRyw4QkFBOEIsRUFBRSw0QkFBNEI7O2NBRWxFLE9BQU8sR0FBa0U7WUFDN0UsTUFBTSxFQUFFLEtBQUs7WUFDYixZQUFZLG1CQUF3QjtZQUNwQyxHQUFHO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUEwRCxPQUFPLENBQUMsQ0FBQztJQUM3RixDQUFDOzs7OztJQUVELDZCQUE2QixDQUMzQixPQUF3RDs7Y0FFbEQsR0FBRyxHQUFHLDhCQUE4QixPQUFPLENBQUMsRUFBRSw0QkFBNEI7O2NBRTFFLE9BQU8sR0FBa0U7WUFDN0UsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHO1lBQ0gsTUFBTSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLHVCQUF1QixFQUFFO1NBQ3JFO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBdUQsT0FBTyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Ozs7SUFFRCw2QkFBNkIsQ0FBQyxFQUFVOztjQUNoQyxHQUFHLEdBQUcsOEJBQThCLEVBQUUsNEJBQTRCOztjQUVsRSxPQUFPLEdBQWtFO1lBQzdFLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLEdBQUc7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQXVELE9BQU8sQ0FBQyxDQUFDO0lBQzFGLENBQUM7OztZQXpGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSxXQUFXOzs7Ozs7OztJQU9OLHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSZXN0U2VydmljZSwgUmVzdCwgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscy90ZW5hbnQtbWFuYWdlbWVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVuYW50TWFuYWdlbWVudFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UpIHt9XHJcblxyXG4gIGdldFRlbmFudChwYXJhbXMgPSB7fSBhcyBBQlAuUGFnZVF1ZXJ5UGFyYW1zKTogT2JzZXJ2YWJsZTxUZW5hbnRNYW5hZ2VtZW50LlJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvbXVsdGktdGVuYW5jeS90ZW5hbnRzJyxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgVGVuYW50TWFuYWdlbWVudC5SZXNwb25zZT4ocmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICBnZXRUZW5hbnRCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFCUC5CYXNpY0l0ZW0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiBgL2FwaS9tdWx0aS10ZW5hbmN5L3RlbmFudHMvJHtpZH1gLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgQUJQLkJhc2ljSXRlbT4ocmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVUZW5hbnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVsbD4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICB1cmw6IGAvYXBpL211bHRpLXRlbmFuY3kvdGVuYW50cy8ke2lkfWAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBudWxsPihyZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRlbmFudChib2R5OiBUZW5hbnRNYW5hZ2VtZW50LkFkZFJlcXVlc3QpOiBPYnNlcnZhYmxlPEFCUC5CYXNpY0l0ZW0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxUZW5hbnRNYW5hZ2VtZW50LkFkZFJlcXVlc3Q+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL2FwaS9tdWx0aS10ZW5hbmN5L3RlbmFudHMnLFxyXG4gICAgICBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8VGVuYW50TWFuYWdlbWVudC5BZGRSZXF1ZXN0LCBBQlAuQmFzaWNJdGVtPihyZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRlbmFudChib2R5OiBUZW5hbnRNYW5hZ2VtZW50LlVwZGF0ZVJlcXVlc3QpOiBPYnNlcnZhYmxlPEFCUC5CYXNpY0l0ZW0+IHtcclxuICAgIGNvbnN0IHVybCA9IGAvYXBpL211bHRpLXRlbmFuY3kvdGVuYW50cy8ke2JvZHkuaWR9YDtcclxuICAgIGRlbGV0ZSBib2R5LmlkO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxUZW5hbnRNYW5hZ2VtZW50LlVwZGF0ZVJlcXVlc3Q+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxUZW5hbnRNYW5hZ2VtZW50LlVwZGF0ZVJlcXVlc3QsIEFCUC5CYXNpY0l0ZW0+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdENvbm5lY3Rpb25TdHJpbmcoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICBjb25zdCB1cmwgPSBgL2FwaS9tdWx0aS10ZW5hbmN5L3RlbmFudHMvJHtpZH0vZGVmYXVsdC1jb25uZWN0aW9uLXN0cmluZ2A7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PFRlbmFudE1hbmFnZW1lbnQuRGVmYXVsdENvbm5lY3Rpb25TdHJpbmdSZXF1ZXN0PiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgcmVzcG9uc2VUeXBlOiBSZXN0LlJlc3BvbnNlVHlwZS5UZXh0LFxyXG4gICAgICB1cmwsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PFRlbmFudE1hbmFnZW1lbnQuRGVmYXVsdENvbm5lY3Rpb25TdHJpbmdSZXF1ZXN0LCBzdHJpbmc+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGVmYXVsdENvbm5lY3Rpb25TdHJpbmcoXHJcbiAgICBwYXlsb2FkOiBUZW5hbnRNYW5hZ2VtZW50LkRlZmF1bHRDb25uZWN0aW9uU3RyaW5nUmVxdWVzdCxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvbXVsdGktdGVuYW5jeS90ZW5hbnRzLyR7cGF5bG9hZC5pZH0vZGVmYXVsdC1jb25uZWN0aW9uLXN0cmluZ2A7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PFRlbmFudE1hbmFnZW1lbnQuRGVmYXVsdENvbm5lY3Rpb25TdHJpbmdSZXF1ZXN0PiA9IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBwYXJhbXM6IHsgZGVmYXVsdENvbm5lY3Rpb25TdHJpbmc6IHBheWxvYWQuZGVmYXVsdENvbm5lY3Rpb25TdHJpbmcgfSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8VGVuYW50TWFuYWdlbWVudC5EZWZhdWx0Q29ubmVjdGlvblN0cmluZ1JlcXVlc3QsIGFueT4ocmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVEZWZhdWx0Q29ubmVjdGlvblN0cmluZyhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IHVybCA9IGAvYXBpL211bHRpLXRlbmFuY3kvdGVuYW50cy8ke2lkfS9kZWZhdWx0LWNvbm5lY3Rpb24tc3RyaW5nYDtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8VGVuYW50TWFuYWdlbWVudC5EZWZhdWx0Q29ubmVjdGlvblN0cmluZ1JlcXVlc3Q+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICB1cmwsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PFRlbmFudE1hbmFnZW1lbnQuRGVmYXVsdENvbm5lY3Rpb25TdHJpbmdSZXF1ZXN0LCBhbnk+KHJlcXVlc3QpO1xyXG4gIH1cclxufVxyXG4iXX0=