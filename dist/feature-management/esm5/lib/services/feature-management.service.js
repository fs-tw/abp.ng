/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/feature-management.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
import * as i2 from "@ngxs/store";
var FeatureManagementService = /** @class */ (function () {
    function FeatureManagementService(rest, store) {
        this.rest = rest;
        this.store = store;
        this.apiName = 'FeatureManagement';
    }
    /**
     * @param {?} params
     * @return {?}
     */
    FeatureManagementService.prototype.getFeatures = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var request = {
            method: 'GET',
            url: '/api/abp/features',
            params: params,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    FeatureManagementService.prototype.updateFeatures = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var features = _a.features, providerKey = _a.providerKey, providerName = _a.providerName;
        /** @type {?} */
        var request = {
            method: 'PUT',
            url: '/api/abp/features',
            body: { features: features },
            params: { providerKey: providerKey, providerName: providerName },
        };
        return this.rest.request(request, { apiName: this.apiName });
    };
    FeatureManagementService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    FeatureManagementService.ctorParameters = function () { return [
        { type: RestService },
        { type: Store }
    ]; };
    /** @nocollapse */ FeatureManagementService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FeatureManagementService_Factory() { return new FeatureManagementService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i2.Store)); }, token: FeatureManagementService, providedIn: "root" });
    return FeatureManagementService;
}());
export { FeatureManagementService };
if (false) {
    /** @type {?} */
    FeatureManagementService.prototype.apiName;
    /**
     * @type {?}
     * @private
     */
    FeatureManagementService.prototype.rest;
    /**
     * @type {?}
     * @private
     */
    FeatureManagementService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmZlYXR1cmUtbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mZWF0dXJlLW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBUSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBSXBDO0lBTUUsa0NBQW9CLElBQWlCLEVBQVUsS0FBWTtRQUF2QyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUYzRCxZQUFPLEdBQUcsbUJBQW1CLENBQUM7SUFFZ0MsQ0FBQzs7Ozs7SUFFL0QsOENBQVc7Ozs7SUFBWCxVQUFZLE1BQWtDOztZQUN0QyxPQUFPLEdBQXVCO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixNQUFNLFFBQUE7U0FDUDtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQXlELE9BQU8sRUFBRTtZQUN4RixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxpREFBYzs7OztJQUFkLFVBQWUsRUFJMkM7WUFIeEQsc0JBQVEsRUFDUiw0QkFBVyxFQUNYLDhCQUFZOztZQUVOLE9BQU8sR0FBNkM7WUFDeEQsTUFBTSxFQUFFLEtBQUs7WUFDYixHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLElBQUksRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFO1lBQ2xCLE1BQU0sRUFBRSxFQUFFLFdBQVcsYUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBbUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7O2dCQS9CRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFdBQVc7Z0JBQ1gsS0FBSzs7O21DQUZkO0NBc0NDLEFBaENELElBZ0NDO1NBN0JZLHdCQUF3Qjs7O0lBQ25DLDJDQUE4Qjs7Ozs7SUFFbEIsd0NBQXlCOzs7OztJQUFFLHlDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzdFNlcnZpY2UsIFJlc3QgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGZWF0dXJlTWFuYWdlbWVudCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZU1hbmFnZW1lbnRTZXJ2aWNlIHtcclxuICBhcGlOYW1lID0gJ0ZlYXR1cmVNYW5hZ2VtZW50JztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXN0OiBSZXN0U2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIGdldEZlYXR1cmVzKHBhcmFtczogRmVhdHVyZU1hbmFnZW1lbnQuUHJvdmlkZXIpOiBPYnNlcnZhYmxlPEZlYXR1cmVNYW5hZ2VtZW50LkZlYXR1cmVzPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0OiBSZXN0LlJlcXVlc3Q8bnVsbD4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJy9hcGkvYWJwL2ZlYXR1cmVzJyxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxGZWF0dXJlTWFuYWdlbWVudC5Qcm92aWRlciwgRmVhdHVyZU1hbmFnZW1lbnQuRmVhdHVyZXM+KHJlcXVlc3QsIHtcclxuICAgICAgYXBpTmFtZTogdGhpcy5hcGlOYW1lLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVGZWF0dXJlcyh7XHJcbiAgICBmZWF0dXJlcyxcclxuICAgIHByb3ZpZGVyS2V5LFxyXG4gICAgcHJvdmlkZXJOYW1lLFxyXG4gIH06IEZlYXR1cmVNYW5hZ2VtZW50LlByb3ZpZGVyICYgRmVhdHVyZU1hbmFnZW1lbnQuRmVhdHVyZXMpOiBPYnNlcnZhYmxlPG51bGw+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxGZWF0dXJlTWFuYWdlbWVudC5GZWF0dXJlcz4gPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIHVybDogJy9hcGkvYWJwL2ZlYXR1cmVzJyxcclxuICAgICAgYm9keTogeyBmZWF0dXJlcyB9LFxyXG4gICAgICBwYXJhbXM6IHsgcHJvdmlkZXJLZXksIHByb3ZpZGVyTmFtZSB9LFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLnJlc3QucmVxdWVzdDxGZWF0dXJlTWFuYWdlbWVudC5GZWF0dXJlcywgbnVsbD4ocmVxdWVzdCwgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==