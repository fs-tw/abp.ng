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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
        return this.rest.request(request);
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
    /**
     * @type {?}
     * @private
     */
    IdentityService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuaWRlbnRpdHkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaWRlbnRpdHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGNBQWMsQ0FBQzs7O0FBR3REO0lBSUUseUJBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7SUFBRyxDQUFDOzs7OztJQUV6QyxrQ0FBUTs7OztJQUFSLFVBQVMsTUFBa0M7UUFBbEMsdUJBQUEsRUFBQSw0QkFBUyxFQUFFLEVBQXVCOztZQUNuQyxPQUFPLEdBQXVCO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLHFCQUFxQjtZQUMxQixNQUFNLFFBQUE7U0FDUDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQThCLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7O1lBQ1EsT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSx5QkFBeUI7U0FDL0I7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUE4QixPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxFQUFVOztZQUNkLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUseUJBQXVCLEVBQUk7U0FDakM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUEwQixPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELG9DQUFVOzs7O0lBQVYsVUFBVyxFQUFVOztZQUNiLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLFFBQVE7WUFDaEIsR0FBRyxFQUFFLHlCQUF1QixFQUFJO1NBQ2pDO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBMEIsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxvQ0FBVTs7OztJQUFWLFVBQVcsSUFBOEI7O1lBQ2pDLE9BQU8sR0FBMkM7WUFDdEQsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUscUJBQXFCO1lBQzFCLElBQUksTUFBQTtTQUNMO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBOEMsT0FBTyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7SUFFRCxvQ0FBVTs7OztJQUFWLFVBQVcsSUFBdUI7O1lBQzFCLEdBQUcsR0FBRyx5QkFBdUIsSUFBSSxDQUFDLEVBQUk7UUFDNUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDOztZQUVULE9BQU8sR0FBb0M7WUFDL0MsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEtBQUE7WUFDSCxJQUFJLE1BQUE7U0FDTDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQXVDLE9BQU8sQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRUQsa0NBQVE7Ozs7SUFBUixVQUFTLE1BQWtDO1FBQWxDLHVCQUFBLEVBQUEsNEJBQVMsRUFBRSxFQUF1Qjs7WUFDbkMsT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsS0FBSztZQUNiLEdBQUcsRUFBRSxxQkFBcUI7WUFDMUIsTUFBTSxRQUFBO1NBQ1A7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUE4QixPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxFQUFVOztZQUNkLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUseUJBQXVCLEVBQUk7U0FDakM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUEwQixPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELHNDQUFZOzs7O0lBQVosVUFBYSxFQUFVOztZQUNmLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUseUJBQXVCLEVBQUUsV0FBUTtTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQThCLE9BQU8sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLEVBQVU7O1lBQ2IsT0FBTyxHQUF1QjtZQUNsQyxNQUFNLEVBQUUsUUFBUTtZQUNoQixHQUFHLEVBQUUseUJBQXVCLEVBQUk7U0FDakM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFhLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLElBQThCOztZQUNqQyxPQUFPLEdBQTJDO1lBQ3RELE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLHFCQUFxQjtZQUMxQixJQUFJLE1BQUE7U0FDTDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQThDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLElBQXVCOztZQUMxQixHQUFHLEdBQUcseUJBQXVCLElBQUksQ0FBQyxFQUFJO1FBQzVDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQzs7WUFFVCxPQUFPLEdBQW9DO1lBQy9DLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1NBQ0w7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUF1QyxPQUFPLENBQUMsQ0FBQztJQUMxRSxDQUFDOztnQkE1SEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxXQUFXOzs7MEJBRnBCO0NBa0lDLEFBN0hELElBNkhDO1NBMUhZLGVBQWU7Ozs7OztJQUNkLCtCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSZXN0U2VydmljZSwgUmVzdCwgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuLi9tb2RlbHMvaWRlbnRpdHknO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIElkZW50aXR5U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0OiBSZXN0U2VydmljZSkge31cclxuXHJcbiAgZ2V0Um9sZXMocGFyYW1zID0ge30gYXMgQUJQLlBhZ2VRdWVyeVBhcmFtcyk6IE9ic2VydmFibGU8SWRlbnRpdHkuUm9sZVJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvaWRlbnRpdHkvcm9sZXMnLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBJZGVudGl0eS5Sb2xlUmVzcG9uc2U+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsUm9sZXMoKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL2FwaS9pZGVudGl0eS9yb2xlcy9hbGwnLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgSWRlbnRpdHkuUm9sZVJlc3BvbnNlPihyZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIGdldFJvbGVCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElkZW50aXR5LlJvbGVJdGVtPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogYC9hcGkvaWRlbnRpdHkvcm9sZXMvJHtpZH1gLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgSWRlbnRpdHkuUm9sZUl0ZW0+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUm9sZShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlSXRlbT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICB1cmw6IGAvYXBpL2lkZW50aXR5L3JvbGVzLyR7aWR9YCxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIElkZW50aXR5LlJvbGVJdGVtPihyZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVJvbGUoYm9keTogSWRlbnRpdHkuUm9sZVNhdmVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Sb2xlSXRlbT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PElkZW50aXR5LlJvbGVTYXZlUmVxdWVzdD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvYXBpL2lkZW50aXR5L3JvbGVzJyxcclxuICAgICAgYm9keSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PElkZW50aXR5LlJvbGVTYXZlUmVxdWVzdCwgSWRlbnRpdHkuUm9sZUl0ZW0+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUm9sZShib2R5OiBJZGVudGl0eS5Sb2xlSXRlbSk6IE9ic2VydmFibGU8SWRlbnRpdHkuUm9sZUl0ZW0+IHtcclxuICAgIGNvbnN0IHVybCA9IGAvYXBpL2lkZW50aXR5L3JvbGVzLyR7Ym9keS5pZH1gO1xyXG4gICAgZGVsZXRlIGJvZHkuaWQ7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PElkZW50aXR5LlJvbGVJdGVtPiA9IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8SWRlbnRpdHkuUm9sZUl0ZW0sIElkZW50aXR5LlJvbGVJdGVtPihyZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJzKHBhcmFtcyA9IHt9IGFzIEFCUC5QYWdlUXVlcnlQYXJhbXMpOiBPYnNlcnZhYmxlPElkZW50aXR5LlVzZXJSZXNwb25zZT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6ICcvYXBpL2lkZW50aXR5L3VzZXJzJyxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgSWRlbnRpdHkuVXNlclJlc3BvbnNlPihyZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElkZW50aXR5LlVzZXJJdGVtPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogYC9hcGkvaWRlbnRpdHkvdXNlcnMvJHtpZH1gLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgSWRlbnRpdHkuVXNlckl0ZW0+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlclJvbGVzKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElkZW50aXR5LlJvbGVSZXNwb25zZT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PG51bGw+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6IGAvYXBpL2lkZW50aXR5L3VzZXJzLyR7aWR9L3JvbGVzYCxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIElkZW50aXR5LlJvbGVSZXNwb25zZT4ocmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVVc2VyKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bGw+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgdXJsOiBgL2FwaS9pZGVudGl0eS91c2Vycy8ke2lkfWAsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxudWxsLCBudWxsPihyZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVzZXIoYm9keTogSWRlbnRpdHkuVXNlclNhdmVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxJZGVudGl0eS5Vc2VySXRlbT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PElkZW50aXR5LlVzZXJTYXZlUmVxdWVzdD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICB1cmw6ICcvYXBpL2lkZW50aXR5L3VzZXJzJyxcclxuICAgICAgYm9keSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PElkZW50aXR5LlVzZXJTYXZlUmVxdWVzdCwgSWRlbnRpdHkuVXNlckl0ZW0+KHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVXNlcihib2R5OiBJZGVudGl0eS5Vc2VySXRlbSk6IE9ic2VydmFibGU8SWRlbnRpdHkuVXNlckl0ZW0+IHtcclxuICAgIGNvbnN0IHVybCA9IGAvYXBpL2lkZW50aXR5L3VzZXJzLyR7Ym9keS5pZH1gO1xyXG4gICAgZGVsZXRlIGJvZHkuaWQ7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PElkZW50aXR5LlVzZXJJdGVtPiA9IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8SWRlbnRpdHkuVXNlckl0ZW0sIElkZW50aXR5LlVzZXJJdGVtPihyZXF1ZXN0KTtcclxuICB9XHJcbn1cclxuIl19