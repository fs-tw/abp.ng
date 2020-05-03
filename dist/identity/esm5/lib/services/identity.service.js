/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/identity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
var IdentityService = /** @class */ (function () {
    function IdentityService(rest) {
        this.rest = rest;
        this.apiName = 'AbpIdentity';
    }
    /**
     * @param {?=} params
     * @return {?}
     */
    IdentityService.prototype.getRoles = /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (params === void 0) { params = (/** @type {?} */ ({})); }
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/identity/roles',
            params: params,
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @return {?}
     */
    IdentityService.prototype.getAllRoles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/identity/roles/all',
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IdentityService.prototype.getRoleById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: "/api/identity/roles/" + id,
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IdentityService.prototype.deleteRole = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var request = {
            method: 'DELETE',
            url: "/api/identity/roles/" + id,
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    IdentityService.prototype.createRole = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var request = {
            method: 'POST',
            url: '/api/identity/roles',
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
    IdentityService.prototype.updateRole = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var url = "/api/identity/roles/" + body.id;
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
     * @param {?=} params
     * @return {?}
     */
    IdentityService.prototype.getUsers = /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        if (params === void 0) { params = (/** @type {?} */ ({})); }
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/identity/users',
            params: params,
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IdentityService.prototype.getUserById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: "/api/identity/users/" + id,
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IdentityService.prototype.getUserRoles = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: "/api/identity/users/" + id + "/roles",
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IdentityService.prototype.deleteUser = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var request = {
            method: 'DELETE',
            url: "/api/identity/users/" + id,
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    IdentityService.prototype.createUser = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var request = {
            method: 'POST',
            url: '/api/identity/users',
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
    IdentityService.prototype.updateUser = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var url = "/api/identity/users/" + body.id;
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
    IdentityService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    IdentityService.ctorParameters = function () { return [
        { type: RestService }
    ]; };
    /** @nocollapse */ IdentityService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IdentityService_Factory() { return new IdentityService(i0.ɵɵinject(i1.RestService)); }, token: IdentityService, providedIn: "root" });
    return IdentityService;
}());
export { IdentityService };
if (false) {
    /** @type {?} */
    IdentityService.prototype.apiName;
    /**
     * @type {?}
     * @private
     */
    IdentityService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuaWRlbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaWRlbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGNBQWMsQ0FBQzs7O0FBR3REO0lBTUUseUJBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFGckMsWUFBTyxHQUFHLGFBQWEsQ0FBQztJQUVnQixDQUFDOzs7OztJQUV6QyxrQ0FBUTs7OztJQUFSLFVBQVMsTUFBa0M7UUFBbEMsdUJBQUEsRUFBQSw0QkFBUyxFQUFFLEVBQXVCOztZQUNuQyxPQUFPLEdBQXVCO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLHFCQUFxQjtZQUMxQixNQUFNLFFBQUE7U0FDUDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQThCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RixDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYOztZQUNRLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUseUJBQXlCO1NBQy9CO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBOEIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLEVBQVU7O1lBQ2QsT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSx5QkFBdUIsRUFBSTtTQUNqQztRQUVELE9BQU8sSUFBSSxDQUFD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QUMxQixJQUFJLE1BQUE7U0FDTDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQThDLE9BQU8sRUFBRTtZQUM3RSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxvQ0FBVTs7OztJQUFWLFVBQVcsSUFBdUI7O1lBQzFCLEdBQUcsR0FBRyx5QkFBdUIsSUFBSSxDQUFDLEVBQUk7UUFDNUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDOztZQUVULE9BQU8sR0FBb0M7WUFDL0MsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7U0FDTDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQXVDLE9BQU8sRUFBRTtZQUN0RSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdElGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsV0FBVzs7OzBCQUZwQjtDQTRJQyxBQXZJRCxJQXVJQztTQXBJWSxlQUFlOzs7SUFDMUIsa0NBQXdCOzs7OztJQUVaLCtCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSZXN0U2VydmljZSwgUmVzdCwgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuLi9tb2RlbHMvaWRlbnRpdHknO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIElkZW50aXR5U2VydmljZSB7XHJcbiAgYXBpTmFtZSA9ICdBYnBJZGVudGl0eSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UpIHt9XHJcblxyXG4gIGdldFJvbGVzKHBhcmFtcyA9IHt9IGFzIEFCUC5QYWdlUXVlcnlQYXJhbXMpOiBPYnNlcnZhYmxlPElkZW50aXR5LlJvbGVSZXNwb25zZT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6ICcvYXBpL2lkZW50aXR5L3JvbGVzJyxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgSWRlbnRpdHkuUm9sZVJlc3BvbnNlPihyZXF1ZXN0LCB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9KTtcclxuICB9XHJcblxyXG4gIGdldEFsbFJvbGVzKCk6IE9ic2VydmFibGU8SWRlbnRpdHkuUm9sZVJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvaWRlbnRpdHkvcm9sZXMvYWxsJyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIElkZW50aXR5LlJvbGVSZXNwb25zZT4ocmVxdWVzdCwgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRSb2xlQnlJZChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlSXRlbT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6IGAvYXBpL2lkZW50aXR5L3JvbGVzLyR7aWR9YCxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIElkZW50aXR5LlJvbGVJdGVtPihyZXF1ZXN0LCB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVJvbGUoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SWRlbnRpdHkuUm9sZUl0ZW0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgdXJsOiBgL2FwaS9pZGVudGl0eS9yb2xlcy8ke2lkfWAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBJZGVudGl0eS5Sb2xlSXRlbT4ocmVxdWVzdCwgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSb2xlKGJvZHk6IElkZW50aXR5LlJvbGVTYXZlUmVxdWVzdCk6IE9ic2VydmFibGU8SWRlbnRpdHkuUm9sZUl0ZW0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxJZGVudGl0eS5Sb2xlU2F2ZVJlcXVlc3Q+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL2FwaS9pZGVudGl0eS9yb2xlcycsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxJZGVudGl0eS5Sb2xlU2F2ZVJlcXVlc3QsIElkZW50aXR5LlJvbGVJdGVtPihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUm9sZShib2R5OiBJZGVudGl0eS5Sb2xlSXRlbSk6IE9ic2VydmFibGU8SWRlbnRpdHkuUm9sZUl0ZW0+IHtcclxuICAgIGNvbnN0IHVybCA9IGAvYXBpL2lkZW50aXR5L3JvbGVzLyR7Ym9keS5pZH1gO1xyXG4gICAgZGVsZXRlIGJvZHkuaWQ7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PElkZW50aXR5LlJvbGVJdGVtPiA9IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8SWRlbnRpdHkuUm9sZUl0ZW0sIElkZW50aXR5LlJvbGVJdGVtPihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcnMocGFyYW1zID0ge30gYXMgQUJQLlBhZ2VRdWVyeVBhcmFtcyk6IE9ic2VydmFibGU8SWRlbnRpdHkuVXNlclJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvaWRlbnRpdHkvdXNlcnMnLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBJZGVudGl0eS5Vc2VyUmVzcG9uc2U+KHJlcXVlc3QsIHsgYXBpTmFtZTogdGhpcy5hcGlOYW1lIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SWRlbnRpdHkuVXNlckl0ZW0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiBgL2FwaS9pZGVudGl0eS91c2Vycy8ke2lkfWAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBJZGVudGl0eS5Vc2VySXRlbT4ocmVxdWVzdCwgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyUm9sZXMoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SWRlbnRpdHkuUm9sZVJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogYC9hcGkvaWRlbnRpdHkvdXNlcnMvJHtpZH0vcm9sZXNgLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgSWRlbnRpdHkuUm9sZVJlc3BvbnNlPihyZXF1ZXN0LCB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVsbD4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICB1cmw6IGAvYXBpL2lkZW50aXR5L3VzZXJzLyR7aWR9YCxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIG51bGw+KHJlcXVlc3QsIHsgYXBpTmFtZTogdGhpcy5hcGlOYW1lIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVXNlcihib2R5OiBJZGVudGl0eS5Vc2VyU2F2ZVJlcXVlc3QpOiBPYnNlcnZhYmxlPElkZW50aXR5LlVzZXJJdGVtPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8SWRlbnRpdHkuVXNlclNhdmVSZXF1ZXN0PiA9IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHVybDogJy9hcGkvaWRlbnRpdHkvdXNlcnMnLFxyXG4gICAgICBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8SWRlbnRpdHkuVXNlclNhdmVSZXF1ZXN0LCBJZGVudGl0eS5Vc2VySXRlbT4ocmVxdWVzdCwge1xyXG4gICAgICBhcGlOYW1lOiB0aGlzLmFwaU5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXIoYm9keTogSWRlbnRpdHkuVXNlckl0ZW0pOiBPYnNlcnZhYmxlPElkZW50aXR5LlVzZXJJdGVtPiB7XHJcbiAgICBjb25zdCB1cmwgPSBgL2FwaS9pZGVudGl0eS91c2Vycy8ke2JvZHkuaWR9YDtcclxuICAgIGRlbGV0ZSBib2R5LmlkO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxJZGVudGl0eS5Vc2VySXRlbT4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIHVybCxcclxuICAgICAgYm9keSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PElkZW50aXR5LlVzZXJJdGVtLCBJZGVudGl0eS5Vc2VySXRlbT4ocmVxdWVzdCwge1xyXG4gICAgICBhcGlOYW1lOiB0aGlzLmFwaU5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19