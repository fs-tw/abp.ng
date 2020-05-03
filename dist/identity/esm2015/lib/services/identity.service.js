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
        this.apiName = 'AbpIdentity';
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
        return this.rest.request(request, { apiName: this.apiName });
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
        return this.rest.request(request, { apiName: this.apiName });
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
        return this.rest.request(request, { apiName: this.apiName });
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
        return this.rest.request(request, { apiName: this.apiName });
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
        return this.rest.request(request, {
            apiName: this.apiName,
        });
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
        return this.rest.request(request, {
            apiName: this.apiName,
        });
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
        return this.rest.request(request, { apiName: this.apiName });
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
        return this.rest.request(request, { apiName: this.apiName });
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
        return this.rest.request(request, { apiName: this.apiName });
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
        return this.rest.request(request, { apiName: this.apiName });
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
        return this.rest.request(request, {
            apiName: this.apiName,
        });
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
        return this.rest.request(request, {
            apiName: this.apiName,
        });
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
    /** @type {?} */
    IdentityService.prototype.apiName;
    /**
     * @type {?}
     * @private
     */
    IdentityService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuaWRlbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaWRlbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGNBQWMsQ0FBQzs7O0FBTXRELE1BQU0sT0FBTyxlQUFlOzs7O0lBRzFCLFlBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFGckMsWUFBTyxHQUFHLGFBQWEsQ0FBQztJQUVnQixDQUFDOzs7OztJQUV6QyxRQUFRLENBQUMsTUFBTSxHQUFHLG1CQUFBLEVBQUUsRUFBdUI7O2NBQ25DLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUscUJBQXFCO1lBQzFCLE1BQU07U0FDUDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQThCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RixDQUFDOzs7O0lBRUQsV0FBVzs7Y0FDSCxPQUFPLEdBQXVCO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLHlCQUF5QjtTQUMvQjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQThCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxFQUFVOztjQUNkLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsdUJBQXVCLEVBQUUsRUFBRTtTQUNqQztRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQTBC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QyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBdUI7O2NBQzFCLEdBQUcsR0FBRyx1QkFBdUIsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUM1QyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7O2NBRVQsT0FBTyxHQUFvQztZQUMvQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUc7WUFDSCxJQUFJO1NBQ0w7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUF1QyxPQUFPLEVBQUU7WUFDdEUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRJRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSxXQUFXOzs7OztJQU9sQixrQ0FBd0I7Ozs7O0lBRVosK0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJlc3RTZXJ2aWNlLCBSZXN0LCBBQlAgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBJZGVudGl0eSB9IGZyb20gJy4uL21vZGVscy9pZGVudGl0eSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWRlbnRpdHlTZXJ2aWNlIHtcclxuICBhcGlOYW1lID0gJ0FicElkZW50aXR5JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0OiBSZXN0U2VydmljZSkge31cclxuXHJcbiAgZ2V0Um9sZXMocGFyYW1zID0ge30gYXMgQUJQLlBhZ2VRdWVyeVBhcmFtcyk6IE9ic2VydmFibGU8SWRlbnRpdHkuUm9sZVJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvaWRlbnRpdHkvcm9sZXMnLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBJZGVudGl0eS5Sb2xlUmVzcG9uc2U+KHJlcXVlc3QsIHsgYXBpTmFtZTogdGhpcy5hcGlOYW1lIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsUm9sZXMoKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL2FwaS9pZGVudGl0eS9yb2xlcy9hbGwnLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgSWRlbnRpdHkuUm9sZVJlc3BvbnNlPihyZXF1ZXN0LCB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9KTtcclxuICB9XHJcblxyXG4gIGdldFJvbGVCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElkZW50aXR5LlJvbGVJdGVtPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogYC9hcGkvaWRlbnRpdHkvcm9sZXMvJHtpZH1gLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgSWRlbnRpdHkuUm9sZUl0ZW0+KHJlcXVlc3QsIHsgYXBpTmFtZTogdGhpcy5hcGlOYW1lIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUm9sZShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlSXRlbT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICB1cmw6IGAvYXBpL2lkZW50aXR5L3JvbGVzLyR7aWR9YCxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIElkZW50aXR5LlJvbGVJdGVtPihyZXF1ZXN0LCB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVJvbGUoYm9keTogSWRlbnRpdHkuUm9sZVNhdmVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlSXRlbT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PElkZW50aXR5LlJvbGVTYXZlUmVxdWVzdD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvYXBpL2lkZW50aXR5L3JvbGVzJyxcclxuICAgICAgYm9keSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PElkZW50aXR5LlJvbGVTYXZlUmVxdWVzdCwgSWRlbnRpdHkuUm9sZUl0ZW0+KHJlcXVlc3QsIHtcclxuICAgICAgYXBpTmFtZTogdGhpcy5hcGlOYW1lLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSb2xlKGJvZHk6IElkZW50aXR5LlJvbGVJdGVtKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlSXRlbT4ge1xyXG4gICAgY29uc3QgdXJsID0gYC9hcGkvaWRlbnRpdHkvcm9sZXMvJHtib2R5LmlkfWA7XHJcbiAgICBkZWxldGUgYm9keS5pZDtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8SWRlbnRpdHkuUm9sZUl0ZW0+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxJZGVudGl0eS5Sb2xlSXRlbSwgSWRlbnRpdHkuUm9sZUl0ZW0+KHJlcXVlc3QsIHtcclxuICAgICAgYXBpTmFtZTogdGhpcy5hcGlOYW1lLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VycyhwYXJhbXMgPSB7fSBhcyBBQlAuUGFnZVF1ZXJ5UGFyYW1zKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Vc2VyUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL2FwaS9pZGVudGl0eS91c2VycycsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIElkZW50aXR5LlVzZXJSZXNwb25zZT4ocmVxdWVzdCwgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyQnlJZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Vc2VySXRlbT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6IGAvYXBpL2lkZW50aXR5L3VzZXJzLyR7aWR9YCxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIElkZW50aXR5LlVzZXJJdGVtPihyZXF1ZXN0LCB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJSb2xlcyhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiBgL2FwaS9pZGVudGl0eS91c2Vycy8ke2lkfS9yb2xlc2AsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBJZGVudGl0eS5Sb2xlUmVzcG9uc2U+KHJlcXVlc3QsIHsgYXBpTmFtZTogdGhpcy5hcGlOYW1lIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVXNlcihpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIHVybDogYC9hcGkvaWRlbnRpdHkvdXNlcnMvJHtpZH1gLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgbnVsbD4ocmVxdWVzdCwgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVc2VyKGJvZHk6IElkZW50aXR5LlVzZXJTYXZlUmVxdWVzdCk6IE9ic2VydmFibGU8SWRlbnRpdHkuVXNlckl0ZW0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxJZGVudGl0eS5Vc2VyU2F2ZVJlcXVlc3Q+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL2FwaS9pZGVudGl0eS91c2VycycsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxJZGVudGl0eS5Vc2VyU2F2ZVJlcXVlc3QsIElkZW50aXR5LlVzZXJJdGVtPihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVXNlcihib2R5OiBJZGVudGl0eS5Vc2VySXRlbSk6IE9ic2VydmFibGU8SWRlbnRpdHkuVXNlckl0ZW0+IHtcclxuICAgIGNvbnN0IHVybCA9IGAvYXBpL2lkZW50aXR5L3VzZXJzLyR7Ym9keS5pZH1gO1xyXG4gICAgZGVsZXRlIGJvZHkuaWQ7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PElkZW50aXR5LlVzZXJJdGVtPiA9IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8SWRlbnRpdHkuVXNlckl0ZW0sIElkZW50aXR5LlVzZXJJdGVtPihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=