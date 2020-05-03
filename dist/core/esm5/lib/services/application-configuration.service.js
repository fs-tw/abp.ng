/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/application-configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Store } from '@ngxs/store';
import { ConfigState } from '../states/config.state';
import * as i0 from "@angular/core";
import * as i1 from "./rest.service";
import * as i2 from "@ngxs/store";
var ApplicationConfigurationService = /** @class */ (function () {
    function ApplicationConfigurationService(rest, store) {
        this.rest = rest;
        this.store = store;
    }
    Object.defineProperty(ApplicationConfigurationService.prototype, "apiName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.store.selectSnapshot(ConfigState.getDeep('environment.application.name'));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ApplicationConfigurationService.prototype.getConfiguration = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/abp/application-configuration',
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    };
    ApplicationConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ApplicationConfigurationService.ctorParameters = function () { return [
        { type: RestService },
        { type: Store }
    ]; };
    /** @nocollapse */ ApplicationConfigurationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ApplicationConfigurationService_Factory() { return new ApplicationConfigurationService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i2.Store)); }, token: ApplicationConfigurationService, providedIn: "root" });
    return ApplicationConfigurationService;
}());
export { ApplicationConfigurationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApplicationConfigurationService.prototype.rest;
    /**
     * @type {?}
     * @private
     */
    ApplicationConfigurationService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwcGxpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRXJEO0lBUUUseUNBQW9CLElBQWlCLEVBQVUsS0FBWTtRQUF2QyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7SUFKL0Qsc0JBQUksb0RBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDeEYsQ0FBQzs7O09BQUE7Ozs7SUFJRCwwREFBZ0I7OztJQUFoQjs7WUFDUSxPQUFPLEdBQXVCO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLG9DQUFvQztTQUMxQztRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQTBDLE9BQU8sRUFBRTtZQUN6RSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsV0FBVztnQkFDWCxLQUFLOzs7MENBTGQ7Q0E0QkMsQUFwQkQsSUFvQkM7U0FqQlksK0JBQStCOzs7Ozs7SUFLOUIsK0NBQXlCOzs7OztJQUFFLGdEQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSZXN0IH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvYXBwbGljYXRpb24tY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuICBnZXQgYXBpTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0U25hcHNob3QoQ29uZmlnU3RhdGUuZ2V0RGVlcCgnZW52aXJvbm1lbnQuYXBwbGljYXRpb24ubmFtZScpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdDogUmVzdFNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlKSB7fVxyXG5cclxuICBnZXRDb25maWd1cmF0aW9uKCk6IE9ic2VydmFibGU8QXBwbGljYXRpb25Db25maWd1cmF0aW9uLlJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvYWJwL2FwcGxpY2F0aW9uLWNvbmZpZ3VyYXRpb24nLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXN0LnJlcXVlc3Q8bnVsbCwgQXBwbGljYXRpb25Db25maWd1cmF0aW9uLlJlc3BvbnNlPihyZXF1ZXN0LCB7XHJcbiAgICAgIGFwaU5hbWU6IHRoaXMuYXBpTmFtZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=