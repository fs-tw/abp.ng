/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/tenant-management.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
var TenantManagementService = /** @class */ (function () {
    function TenantManagementService(rest) {
        this.rest = rest;
        this.apiName = 'AbpTenantManagement';
    }
    /**
     * @param {?=} params
     * @return {?}
     */
    TenantManagementService.prototype.getTenant = /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (params === void 0) { params = (/** @type {?} */ ({})); }
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/multi-tenancy/tenants',
            params: params,
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TenantManagementService.prototype.getTenantById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: "/api/multi-tenancy/tenants/" + id,
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TenantManagementService.prototype.deleteTenant = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var request = {
            method: 'DELETE',
            url: "/api/multi-tenancy/tenants/" + id,
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    TenantManagementService.prototype.createTenant = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var request = {
            method: 'POST',
            url: '/api/multi-tenancy/tenants',
            body: body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    TenantManagementService.prototype.updateTenant = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var url = "/api/multi-tenancy/tenants/" + body.id;
        delete body.id;
        /** @type {?} */
        var request = {
            method: 'PUT',
            url: url,
            body: body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TenantManagementService.prototype.getDefaultConnectionString = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var url = "/api/multi-tenancy/tenants/" + id + "/default-connection-string";
        /** @type {?} */
        var request = {
            method: 'GET',
            responseType: "text" /* Text */,
            url: url,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    TenantManagementService.prototype.updateDefaultConnectionString = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        /** @type {?} */
        var url = "/api/multi-tenancy/tenants/" + payload.id + "/default-connection-string";
        /** @type {?} */
        var request = {
            method: 'PUT',
            url: url,
            params: { defaultConnectionString: payload.defaultConnectionString },
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    TenantManagementService.prototype.deleteDefaultConnectionString = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var url = "/api/multi-tenancy/tenants/" + id + "/default-connection-string";
        /** @type {?} */
        var request = {
            method: 'DELETE',
            url: url,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    };
    TenantManagementService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    TenantManagementService.ctorParameters = function () { return [
        { type: RestService }
    ]; };
    /** @nocollapse */ TenantManagementService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TenantManagementService_Factory() { return new TenantManagementService(i0.ɵɵinject(i1.RestService)); }, token: TenantManagementService, providedIn: "root" });
    return TenantManagementService;
}());
export { TenantManagementService };
if (false) {
    /** @type {?} */
    TenantManagementService.prototype.apiName;
    /**
     * @type {?}
     * @private
     */
    TenantManagementService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGVuYW50LW1hbmFnZW1lbnQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdGVuYW50LW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGNBQWMsQ0FBQzs7O0FBR3REO0lBTUUsaUNBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFGckMsWUFBTyxHQUFHLHFCQUFxQixDQUFDO0lBRVEsQ0FBQzs7Ozs7SUFFekMsMkNBQVM7Ozs7SUFBVCxVQUFVLE1BQWtDO1FBQWxDLHVCQUFBLEVBQUEsNEJBQVMsRUFBRSxFQUF1Qjs7WUFDcEMsT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSw0QkFBNEI7WUFDakMsTUFBTSxRQUFBO1NBQ1A7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFrQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDaEcsQ0FBQzs7Ozs7SUFFRCwrQ0FBYTs7OztJQUFiLFVBQWMsRUFBVTs7WUFDaEIsT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxnQ0FBOEIsRUFBSTtTQUN4QztRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQXNCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7OztJQUVELDhDQUFZOzs7O0lBQVosVUFBYSxFQUFVOztZQUNmLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLFFBQVE7WUFDaEIsR0FBRyxFQUFFLGdDQUE4QixFQUFJO1NBQ3hDO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBYSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsSUFBaUM7O1lBQ3RDLE9BQU8sR0FBOEM7WUFDekQsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLElBQUksTUFBQTtTQUNMO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBNkMsT0FBTyxFQUFFO1lBQzVFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDhDQUFZOzs7O0lBQVosVUFBYSxJQUFvQzs7WUFDekMsR0FBRyxHQUFHLGdDQUE4QixJQUFJLENBQUMsRUFBSTtRQUNuRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7O1lBRVQsT0FBTyxHQUFpRDtZQUM1RCxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsS0FBQTtZQUNILElBQUksTUFBQTtTQUNMO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBZ0QsT0FBTyxFQUFFO1lBQy9FLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDREQUEwQjs7OztJQUExQixVQUEyQixFQUFVOztZQUM3QixHQUFHLEdBQUcsZ0NBQThCLEVBQUUsK0JBQTRCOztZQUVsRSxPQUFPLEdBQWtFO1lBQzdFLE1BQU0sRUFBRSxLQUFLO1lBQ2IsWUFBWSxtQkFBd0I7WUFDcEMsR0FBRyxLQUFBO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUEwRCxPQUFPLEVBQUU7WUFDekYsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsK0RBQTZCOzs7O0lBQTdCLFVBQ0UsT0FBd0Q7O1lBRWxELEdBQUcsR0FBRyxnQ0FBOEIsT0FBTyxDQUFDLEVBQUUsK0JBQTRCOztZQUUxRSxPQUFPLEdBQWtFO1lBQzdFLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxLQUFBO1lBQ0gsTUFBTSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLHVCQUF1QixFQUFFO1NBQ3JFO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBdUQsT0FBTyxFQUFFO1lBQ3RGLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELCtEQUE2Qjs7OztJQUE3QixVQUE4QixFQUFVOztZQUNoQyxHQUFHLEdBQUcsZ0NBQThCLEVBQUUsK0JBQTRCOztZQUVsRSxPQUFPLEdBQWtFO1lBQzdFLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLEdBQUcsS0FBQTtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBdUQsT0FBTyxFQUFFO1lBQ3RGLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFyR0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxXQUFXOzs7a0NBRnBCO0NBMkdDLEFBdEdELElBc0dDO1NBbkdZLHVCQUF1Qjs7O0lBQ2xDLDBDQUFnQzs7Ozs7SUFFcEIsdUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBSZXN0LCBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3RlbmFudC1tYW5hZ2VtZW50JztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRNYW5hZ2VtZW50U2VydmljZSB7XHJcbiAgYXBpTmFtZSA9ICdBYnBUZW5hbnRNYW5hZ2VtZW50JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0OiBSZXN0U2VydmljZSkge31cclxuXHJcbiAgZ2V0VGVuYW50KHBhcmFtcyA9IHt9IGFzIEFCUC5QYWdlUXVlcnlQYXJhbXMpOiBPYnNlcnZhYmxlPFRlbmFudE1hbmFnZW1lbnQuUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL2FwaS9tdWx0aS10ZW5hbmN5L3RlbmFudHMnLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBUZW5hbnRNYW5hZ2VtZW50LlJlc3BvbnNlPihyZXF1ZXN0LCB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9KTtcclxuICB9XHJcblxyXG4gIGdldFRlbmFudEJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QUJQLkJhc2ljSXRlbT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6IGAvYXBpL211bHRpLXRlbmFuY3kvdGVuYW50cy8ke2lkfWAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBBQlAuQmFzaWNJdGVtPihyZXF1ZXN0LCB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRlbmFudChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIHVybDogYC9hcGkvbXVsdGktdGVuYW5jeS90ZW5hbnRzLyR7aWR9YCxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIG51bGw+KHJlcXVlc3QsIHsgYXBpTmFtZTogdGhpcy5hcGlOYW1lIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGVuYW50KGJvZHk6IFRlbmFudE1hbmFnZW1lbnQuQWRkUmVxdWVzdCk6IE9ic2VydmFibGU8QUJQLkJhc2ljSXRlbT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PFRlbmFudE1hbmFnZW1lbnQuQWRkUmVxdWVzdD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvYXBpL211bHRpLXRlbmFuY3kvdGVuYW50cycsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxUZW5hbnRNYW5hZ2VtZW50LkFkZFJlcXVlc3QsIEFCUC5CYXNpY0l0ZW0+KHJlcXVlc3QsIHtcclxuICAgICAgYXBpTmFtZTogdGhpcy5hcGlOYW1lLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUZW5hbnQoYm9keTogVGVuYW50TWFuYWdlbWVudC5VcGRhdGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxBQlAuQmFzaWNJdGVtPiB7XHJcbiAgICBjb25zdCB1cmwgPSBgL2FwaS9tdWx0aS10ZW5hbmN5L3RlbmFudHMvJHtib2R5LmlkfWA7XHJcbiAgICBkZWxldGUgYm9keS5pZDtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8VGVuYW50TWFuYWdlbWVudC5VcGRhdGVSZXF1ZXN0PiA9IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8VGVuYW50TWFuYWdlbWVudC5VcGRhdGVSZXF1ZXN0LCBBQlAuQmFzaWNJdGVtPihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVmYXVsdENvbm5lY3Rpb25TdHJpbmcoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICBjb25zdCB1cmwgPSBgL2FwaS9tdWx0aS10ZW5hbmN5L3RlbmFudHMvJHtpZH0vZGVmYXVsdC1jb25uZWN0aW9uLXN0cmluZ2A7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PFRlbmFudE1hbmFnZW1lbnQuRGVmYXVsdENvbm5lY3Rpb25TdHJpbmdSZXF1ZXN0PiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgcmVzcG9uc2VUeXBlOiBSZXN0LlJlc3BvbnNlVHlwZS5UZXh0LFxyXG4gICAgICB1cmwsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PFRlbmFudE1hbmFnZW1lbnQuRGVmYXVsdENvbm5lY3Rpb25TdHJpbmdSZXF1ZXN0LCBzdHJpbmc+KHJlcXVlc3QsIHtcclxuICAgICAgYXBpTmFtZTogdGhpcy5hcGlOYW1lLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEZWZhdWx0Q29ubmVjdGlvblN0cmluZyhcclxuICAgIHBheWxvYWQ6IFRlbmFudE1hbmFnZW1lbnQuRGVmYXVsdENvbm5lY3Rpb25TdHJpbmdSZXF1ZXN0LFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgL2FwaS9tdWx0aS10ZW5hbmN5L3RlbmFudHMvJHtwYXlsb2FkLmlkfS9kZWZhdWx0LWNvbm5lY3Rpb24tc3RyaW5nYDtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8VGVuYW50TWFuYWdlbWVudC5EZWZhdWx0Q29ubmVjdGlvblN0cmluZ1JlcXVlc3Q+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHBhcmFtczogeyBkZWZhdWx0Q29ubmVjdGlvblN0cmluZzogcGF5bG9hZC5kZWZhdWx0Q29ubmVjdGlvblN0cmluZyB9LFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxUZW5hbnRNYW5hZ2VtZW50LkRlZmF1bHRDb25uZWN0aW9uU3RyaW5nUmVxdWVzdCwgYW55PihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlRGVmYXVsdENvbm5lY3Rpb25TdHJpbmcoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICBjb25zdCB1cmwgPSBgL2FwaS9tdWx0aS10ZW5hbmN5L3RlbmFudHMvJHtpZH0vZGVmYXVsdC1jb25uZWN0aW9uLXN0cmluZ2A7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PFRlbmFudE1hbmFnZW1lbnQuRGVmYXVsdENvbm5lY3Rpb25TdHJpbmdSZXF1ZXN0PiA9IHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgdXJsLFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxUZW5hbnRNYW5hZ2VtZW50LkRlZmF1bHRDb25uZWN0aW9uU3RyaW5nUmVxdWVzdCwgYW55PihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=