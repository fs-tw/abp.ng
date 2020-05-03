/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/profile.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import * as i0 from "@angular/core";
import * as i1 from "./rest.service";
var ProfileService = /** @class */ (function () {
    function ProfileService(rest) {
        this.rest = rest;
        this.apiName = 'AbpIdentity';
    }
    /**
     * @return {?}
     */
    ProfileService.prototype.get = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/identity/my-profile',
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    ProfileService.prototype.update = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var request = {
            method: 'PUT',
            url: '/api/identity/my-profile',
            body: body,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    };
    /**
     * @param {?} body
     * @param {?=} skipHandleError
     * @return {?}
     */
    ProfileService.prototype.changePassword = /**
     * @param {?} body
     * @param {?=} skipHandleError
     * @return {?}
     */
    function (body, skipHandleError) {
        if (skipHandleError === void 0) { skipHandleError = false; }
        /** @type {?} */
        var request = {
            method: 'POST',
            url: '/api/identity/my-profile/change-password',
            body: body,
        };
        return this.rest.request(request, {
            skipHandleError: skipHandleError,
            apiName: this.apiName,
        });
    };
    ProfileService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ProfileService.ctorParameters = function () { return [
        { type: RestService }
    ]; };
    /** @nocollapse */ ProfileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ProfileService_Factory() { return new ProfileService(i0.ɵɵinject(i1.RestService)); }, token: ProfileService, providedIn: "root" });
    return ProfileService;
}());
export { ProfileService };
if (false) {
    /** @type {?} */
    ProfileService.prototype.apiName;
    /**
     * @type {?}
     * @private
     */
    ProfileService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Byb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHN0M7SUFNRSx3QkFBb0IsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUZyQyxZQUFPLEdBQUcsYUFBYSxDQUFDO0lBRWdCLENBQUM7Ozs7SUFFekMsNEJBQUc7OztJQUFIOztZQUNRLE9BQU8sR0FBdUI7WUFDbEMsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsMEJBQTBCO1NBQ2hDO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBeUIsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Ozs7O0lBRUQsK0JBQU07Ozs7SUFBTixVQUFPLElBQXNCOztZQUNyQixPQUFPLEdBQW1DO1lBQzlDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLDBCQUEwQjtZQUMvQixJQUFJLE1BQUE7U0FDTDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQXFDLE9BQU8sRUFBRTtZQUNwRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsdUNBQWM7Ozs7O0lBQWQsVUFDRSxJQUFtQyxFQUNuQyxlQUFnQztRQUFoQyxnQ0FBQSxFQUFBLHVCQUFnQzs7WUFFMUIsT0FBTyxHQUFnRDtZQUMzRCxNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSwwQ0FBMEM7WUFDL0MsSUFBSSxNQUFBO1NBQ0w7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFzQyxPQUFPLEVBQUU7WUFDckUsZUFBZSxpQkFBQTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkEzQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSxXQUFXOzs7eUJBRnBCO0NBaURDLEFBNUNELElBNENDO1NBekNZLGNBQWM7OztJQUN6QixpQ0FBd0I7Ozs7O0lBRVosOEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9maWxlLCBSZXN0IH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XHJcbiAgYXBpTmFtZSA9ICdBYnBJZGVudGl0eSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UpIHt9XHJcblxyXG4gIGdldCgpOiBPYnNlcnZhYmxlPFByb2ZpbGUuUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL2FwaS9pZGVudGl0eS9teS1wcm9maWxlJyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PG51bGwsIFByb2ZpbGUuUmVzcG9uc2U+KHJlcXVlc3QsIHsgYXBpTmFtZTogdGhpcy5hcGlOYW1lIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGJvZHk6IFByb2ZpbGUuUmVzcG9uc2UpOiBPYnNlcnZhYmxlPFByb2ZpbGUuUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxQcm9maWxlLlJlc3BvbnNlPiA9IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsOiAnL2FwaS9pZGVudGl0eS9teS1wcm9maWxlJyxcclxuICAgICAgYm9keSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PFByb2ZpbGUuUmVzcG9uc2UsIFByb2ZpbGUuUmVzcG9uc2U+KHJlcXVlc3QsIHtcclxuICAgICAgYXBpTmFtZTogdGhpcy5hcGlOYW1lLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYXNzd29yZChcclxuICAgIGJvZHk6IFByb2ZpbGUuQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0LFxyXG4gICAgc2tpcEhhbmRsZUVycm9yOiBib29sZWFuID0gZmFsc2UsXHJcbiAgKTogT2JzZXJ2YWJsZTxudWxsPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8UHJvZmlsZS5DaGFuZ2VQYXNzd29yZFJlcXVlc3Q+ID0ge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgdXJsOiAnL2FwaS9pZGVudGl0eS9teS1wcm9maWxlL2NoYW5nZS1wYXNzd29yZCcsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxQcm9maWxlLkNoYW5nZVBhc3N3b3JkUmVxdWVzdCwgbnVsbD4ocmVxdWVzdCwge1xyXG4gICAgICBza2lwSGFuZGxlRXJyb3IsXHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=