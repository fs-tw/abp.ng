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
export class FeatureManagementService {
    /**
     * @param {?} rest
     * @param {?} store
     */
    constructor(rest, store) {
        this.rest = rest;
        this.store = store;
        this.apiName = 'FeatureManagement';
    }
    /**
     * @param {?} params
     * @return {?}
     */
    getFeatures(params) {
        /** @type {?} */
        const request = {
            method: 'GET',
            url: '/api/abp/features',
            params,
        };
        return this.rest.request(request, {
            apiName: this.apiName,
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    updateFeatures({ features, providerKey, providerName, }) {
        /** @type {?} */
        const request = {
            method: 'PUT',
            url: '/api/abp/features',
            body: { features },
            params: { providerKey, providerName },
        };
        return this.rest.request(request, { apiName: this.apiName });
    }
}
FeatureManagementService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
FeatureManagementService.ctorParameters = () => [
    { type: RestService },
    { type: Store }
];
/** @nocollapse */ FeatureManagementService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FeatureManagementService_Factory() { return new FeatureManagementService(i0.ɵɵinject(i1.RestService), i0.ɵɵinject(i2.Store)); }, token: FeatureManagementService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1tYW5hZ2VtZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmZlYXR1cmUtbWFuYWdlbWVudC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mZWF0dXJlLW1hbmFnZW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBUSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBT3BDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBR25DLFlBQW9CLElBQWlCLEVBQVUsS0FBWTtRQUF2QyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUYzRCxZQUFPLEdBQUcsbUJBQW1CLENBQUM7SUFFZ0MsQ0FBQzs7Ozs7SUFFL0QsV0FBVyxDQUFDLE1BQWtDOztjQUN0QyxPQUFPLEdBQXVCO1lBQ2xDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixNQUFNO1NBQ1A7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUF5RCxPQUFPLEVBQUU7WUFDeEYsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEVBQ2IsUUFBUSxFQUNSLFdBQVcsRUFDWCxZQUFZLEdBQzRDOztjQUNsRCxPQUFPLEdBQTZDO1lBQ3hELE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUU7WUFDbEIsTUFBTSxFQUFFLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRTtTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQW1DLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs7WUEvQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsV0FBVztZQUNYLEtBQUs7Ozs7O0lBUVosMkNBQThCOzs7OztJQUVsQix3Q0FBeUI7Ozs7O0lBQUUseUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXN0U2VydmljZSwgUmVzdCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZlYXR1cmVNYW5hZ2VtZW50IH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlTWFuYWdlbWVudFNlcnZpY2Uge1xyXG4gIGFwaU5hbWUgPSAnRmVhdHVyZU1hbmFnZW1lbnQnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc3Q6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgZ2V0RmVhdHVyZXMocGFyYW1zOiBGZWF0dXJlTWFuYWdlbWVudC5Qcm92aWRlcik6IE9ic2VydmFibGU8RmVhdHVyZU1hbmFnZW1lbnQuRmVhdHVyZXM+IHtcclxuICAgIGNvbnN0IHJlcXVlc3Q6IFJlc3QuUmVxdWVzdDxudWxsPiA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnL2FwaS9hYnAvZmVhdHVyZXMnLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PEZlYXR1cmVNYW5hZ2VtZW50LlByb3ZpZGVyLCBGZWF0dXJlTWFuYWdlbWVudC5GZWF0dXJlcz4ocmVxdWVzdCwge1xyXG4gICAgICBhcGlOYW1lOiB0aGlzLmFwaU5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUZlYXR1cmVzKHtcclxuICAgIGZlYXR1cmVzLFxyXG4gICAgcHJvdmlkZXJLZXksXHJcbiAgICBwcm92aWRlck5hbWUsXHJcbiAgfTogRmVhdHVyZU1hbmFnZW1lbnQuUHJvdmlkZXIgJiBGZWF0dXJlTWFuYWdlbWVudC5GZWF0dXJlcyk6IE9ic2VydmFibGU8bnVsbD4ge1xyXG4gICAgY29uc3QgcmVxdWVzdDogUmVzdC5SZXF1ZXN0PEZlYXR1cmVNYW5hZ2VtZW50LkZlYXR1cmVzPiA9IHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgdXJsOiAnL2FwaS9hYnAvZmVhdHVyZXMnLFxyXG4gICAgICBib2R5OiB7IGZlYXR1cmVzIH0sXHJcbiAgICAgIHBhcmFtczogeyBwcm92aWRlcktleSwgcHJvdmlkZXJOYW1lIH0sXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMucmVzdC5yZXF1ZXN0PEZlYXR1cmVNYW5hZ2VtZW50LkZlYXR1cmVzLCBudWxsPihyZXF1ZXN0LCB7IGFwaU5hbWU6IHRoaXMuYXBpTmFtZSB9KTtcclxuICB9XHJcbn1cclxuIl19