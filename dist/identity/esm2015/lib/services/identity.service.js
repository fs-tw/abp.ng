/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/identity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class IdentityService {
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
    getRoles(params = (/** @type {?} */ ({}))) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: '/api/identity/roles',
            params,
        };
        return this.rest.request(request);
    }
    /**
     * @return {?}
     */
    getAllRoles() {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: '/api/identity/roles/all',
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getRoleById(id) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: `/api/identity/roles/${id}`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteRole(id) {
        /** @type {?} */
        const request = {
            method: 'DELETE',
            url: `/api/identity/roles/${id}`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    createRole(body) {
        /** @type {?} */
        const request = {
            method: 'POST',
            url: '/api/identity/roles',
            body,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    updateRole(body) {
        /** @type {?} */
        const url = `/api/identity/roles/${body.id}`;
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
     * @param {?=} params
     * @return {?}
     */
    getUsers(params = (/** @type {?} */ ({}))) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: '/api/identity/users',
            params,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getUserById(id) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: `/api/identity/users/${id}`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getUserRoles(id) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: `/api/identity/users/${id}/roles`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteUser(id) {
        /** @type {?} */
        const request = {
            method: 'DELETE',
            url: `/api/identity/users/${id}`,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    createUser(body) {
        /** @type {?} */
        const request = {
            method: 'POST',
            url: '/api/identity/users',
            body,
        };
        return this.rest.request(request);
    }
    /**
     * @param {?} body
     * @return {?}
     */
    updateUser(body) {
        /** @type {?} */
        const url = `/api/identity/users/${body.id}`;
        delete body.id;
        /** @type {?} */
        const request = {
            method: 'PUT',
            url,
            body,
        };
        return this.rest.request(request);
    }
}
IdentityService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
IdentityService.ctorParameters = () => [
    { type: RestService }
];
/** @nocollapse */ IdentityService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IdentityService_Factory() { return new IdentityService(i0.ɵɵinject(i1.RestService)); }, token: IdentityService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    IdentityService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuaWRlbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaWRlbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGNBQWMsQ0FBQzs7O0FBTXRELE1BQU0sT0FBTyxlQUFlOzs7O0lBQzFCLFlBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFBRyxDQUFDOzs7OztJQUV6QyxRQUFRLENBQUMsTUFBTSxHQUFHLG1CQUFBLEVBQUUsRUFBdUI7O2NBQ25DLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUscUJBQXFCO1lBQzFCLE1BQU07U0FDUDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQThCLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCxXQUFXOztjQUNILE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUseUJBQXlCO1NBQy9CO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBOEIsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsRUFBVTs7Y0FDZCxPQUFPLEdBQXVCO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLHVCQUF1QixFQUFFLEVBQUU7U0FDakM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUEwQixPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxFQUFVOztjQUNiLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLFFBQVE7WUFDaEIsR0FBRyxFQUFFLHVCQUF1QixFQUFFLEVBQUU7U0FDakM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUEwQixPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUE4Qjs7Y0FDakMsT0FBTyxHQUEyQztZQUN0RCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxxQkFBcUI7WUFDMUIsSUFBSTtTQUNMO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBOEMsT0FBTyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBdUI7O2NBQzFCLEdBQUcsR0FBRyx1QkFBdUIsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUM1QyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7O2NBRVQsT0FBTyxHQUFvQztZQUMvQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUc7WUFDSCxJQUFJO1NBQ0w7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUF1QyxPQUFPLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFNLEdBQUcsbUJBQUEsRUFBRSxFQUF1Qjs7Y0FDbkMsT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxxQkFBcUI7WUFDMUIsTUFBTTtTQUNQO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBOEIsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsRUFBVTs7Y0FDZCxPQUFPLEdBQXVCO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLHVCQUF1QixFQUFFLEVBQUU7U0FDakM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUEwQixPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxFQUFVOztjQUNmLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsdUJBQXVCLEVBQUUsUUFBUTtTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQThCLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEVBQVU7O2NBQ2IsT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsUUFBUTtZQUNoQixHQUFHLEVBQUUsdUJBQXVCLEVBQUUsRUFBRTtTQUNqQztRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQWEsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBOEI7O2NBQ2pDLE9BQU8sR0FBMkM7WUFDdEQsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUscUJBQXFCO1lBQzFCLElBQUk7U0FDTDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQThDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQXVCOztjQUMxQixHQUFHLEdBQUcsdUJBQXVCLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDOztjQUVULE9BQU8sR0FBb0M7WUFDL0MsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHO1lBQ0gsSUFBSTtTQUNMO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBdUMsT0FBTyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7O1lBNUhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLFdBQVc7Ozs7Ozs7O0lBT04sK0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBSZXN0LCBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBJZGVudGl0eSB9IGZyb20gJy4uL21vZGVscy9pZGVudGl0eSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWRlbnRpdHlTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc3Q6IFJlc3RTZXJ2aWNlKSB7fVxyXG5cclxuICBnZXRSb2xlcyhwYXJhbXMgPSB7fSBhcyBBQlAuUGFnZVF1ZXJ5UGFyYW1zKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL2FwaS9pZGVudGl0eS9yb2xlcycsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIElkZW50aXR5LlJvbGVSZXNwb25zZT4ocmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxSb2xlcygpOiBPYnNlcnZhYmxlPElkZW50aXR5LlJvbGVSZXNwb25zZT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6ICcvYXBpL2lkZW50aXR5L3JvbGVzL2FsbCcsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBJZGVudGl0eS5Sb2xlUmVzcG9uc2U+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um9sZUJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SWRlbnRpdHkuUm9sZUl0ZW0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiBgL2FwaS9pZGVudGl0eS9yb2xlcy8ke2lkfWAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBJZGVudGl0eS5Sb2xlSXRlbT4ocmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVSb2xlKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElkZW50aXR5LlJvbGVJdGVtPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIHVybDogYC9hcGkvaWRlbnRpdHkvcm9sZXMvJHtpZH1gLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgSWRlbnRpdHkuUm9sZUl0ZW0+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUm9sZShib2R5OiBJZGVudGl0eS5Sb2xlU2F2ZVJlcXVlc3QpOiBPYnNlcnZhYmxlPElkZW50aXR5LlJvbGVJdGVtPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8SWRlbnRpdHkuUm9sZVNhdmVSZXF1ZXN0PiA9IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9hcGkvaWRlbnRpdHkvcm9sZXMnLFxyXG4gICAgICBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8SWRlbnRpdHkuUm9sZVNhdmVSZXF1ZXN0LCBJZGVudGl0eS5Sb2xlSXRlbT4ocmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSb2xlKGJvZHk6IElkZW50aXR5LlJvbGVJdGVtKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlSXRlbT4ge1xyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvaWRlbnRpdHkvcm9sZXMvJHtib2R5LmlkfWA7XHJcbiAgICBkZWxldGUgYm9keS5pZDtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8SWRlbnRpdHkuUm9sZUl0ZW0+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxJZGVudGl0eS5Sb2xlSXRlbSwgSWRlbnRpdHkuUm9sZUl0ZW0+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcnMocGFyYW1zID0ge30gYXMgQUJQLlBhZ2VRdWVyeVBhcmFtcyk6IE9ic2VydmFibGU8SWRlbnRpdHkuVXNlclJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvaWRlbnRpdHkvdXNlcnMnLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBJZGVudGl0eS5Vc2VyUmVzcG9uc2U+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SWRlbnRpdHkuVXNlckl0ZW0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiBgL2FwaS9pZGVudGl0eS91c2Vycy8ke2lkfWAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBJZGVudGl0eS5Vc2VySXRlbT4ocmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyUm9sZXMoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SWRlbnRpdHkuUm9sZVJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogYC9hcGkvaWRlbnRpdHkvdXNlcnMvJHtpZH0vcm9sZXNgLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgSWRlbnRpdHkuUm9sZVJlc3BvbnNlPihyZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVsbD4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICB1cmw6IGAvYXBpL2lkZW50aXR5L3VzZXJzLyR7aWR9YCxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIG51bGw+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVXNlcihib2R5OiBJZGVudGl0eS5Vc2VyU2F2ZVJlcXVlc3QpOiBPYnNlcnZhYmxlPElkZW50aXR5LlVzZXJJdGVtPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8SWRlbnRpdHkuVXNlclNhdmVSZXF1ZXN0PiA9IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9hcGkvaWRlbnRpdHkvdXNlcnMnLFxyXG4gICAgICBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8SWRlbnRpdHkuVXNlclNhdmVSZXF1ZXN0LCBJZGVudGl0eS5Vc2VySXRlbT4ocmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVVc2VyKGJvZHk6IElkZW50aXR5LlVzZXJJdGVtKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Vc2VySXRlbT4ge1xyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvaWRlbnRpdHkvdXNlcnMvJHtib2R5LmlkfWA7XHJcbiAgICBkZWxldGUgYm9keS5pZDtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8SWRlbnRpdHkuVXNlckl0ZW0+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxJZGVudGl0eS5Vc2VySXRlbSwgSWRlbnRpdHkuVXNlckl0ZW0+KHJlcXVlc3QpO1xyXG4gIH1cclxufVxyXG4iXX0=