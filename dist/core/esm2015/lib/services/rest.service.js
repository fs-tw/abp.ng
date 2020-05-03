/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/rest.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RestOccurError } from '../actions/rest.actions';
import { ConfigState } from '../states/config.state';
import { isUndefinedOrEmptyString } from '../utils/common-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngxs/store";
export class RestService {
    /**
     * @param {?} http
     * @param {?} store
     */
    constructor(http, store) {
        this.http = http;
        this.store = store;
    }
    /**
     * @private
     * @param {?} apiName
     * @return {?}
     */
    getApiFromStore(apiName) {
        return this.store.selectSnapshot(ConfigState.getApiUrl(apiName));
    }
    /**
     * @param {?} err
     * @return {?}
     */
    handleError(err) {
        this.store.dispatch(new RestOccurError(err));
        return throwError(err);
    }
    // TODO: Deprecate service or improve interface in v3.0
    /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    request(request, config, api) {
        config = config || ((/** @type {?} */ ({})));
        api = api || this.getApiFromStore(config.apiName);
        const { method, params } = request, options = tslib_1.__rest(request, ["method", "params"]);
        const { observe = "body" /* Body */, skipHandleError } = config;
        return this.http
            .request(method, api + request.url, (/** @type {?} */ (Object.assign({ observe }, (params && {
            params: Object.keys(params).reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            (acc, key) => {
                /** @type {?} */
                const value = params[key];
                if (!isUndefinedOrEmptyString(value))
                    acc[key] = value;
                return acc;
            }), {}),
        }), options))))
            .pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => (skipHandleError ? throwError(err) : this.handleError(err)))));
    }
}
RestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
RestService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store }
];
/** @nocollapse */ RestService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RestService_Factory() { return new RestService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Store)); }, token: RestService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    RestService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    RestService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Jlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFLakUsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBQ3RCLFlBQW9CLElBQWdCLEVBQVUsS0FBWTtRQUF0QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7Ozs7OztJQUV0RCxlQUFlLENBQUMsT0FBZTtRQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxHQUFRO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7Ozs7O0lBR0QsT0FBTyxDQUNMLE9BQXlDLEVBQ3pDLE1BQW9CLEVBQ3BCLEdBQVk7UUFFWixNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQUEsRUFBRSxFQUFlLENBQUMsQ0FBQztRQUN2QyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2NBQzVDLEVBQUUsTUFBTSxFQUFFLE1BQU0sS0FBaUIsT0FBTyxFQUF0Qix1REFBVTtjQUM1QixFQUFFLE9BQU8sb0JBQW9CLEVBQUUsZUFBZSxFQUFFLEdBQUcsTUFBTTtRQUUvRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsT0FBTyxDQUFJLE1BQU0sRUFBRSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxtQ0FDckMsT0FBTyxJQUNKLENBQUMsTUFBTSxJQUFJO1lBQ1osTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTTs7Ozs7WUFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTs7c0JBQ3hDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUV6QixJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDO29CQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBRXZELE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxHQUFFLEVBQUUsQ0FBQztTQUNQLENBQUMsRUFDQyxPQUFPLEdBQ0osQ0FBQzthQUNSLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7OztZQXpDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFaUSxVQUFVO1lBRVYsS0FBSzs7Ozs7Ozs7SUFZQSwyQkFBd0I7Ozs7O0lBQUUsNEJBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUmVzdE9jY3VyRXJyb3IgfSBmcm9tICcuLi9hY3Rpb25zL3Jlc3QuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFJlc3QgfSBmcm9tICcuLi9tb2RlbHMvcmVzdCc7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL2NvbmZpZy5zdGF0ZSc7XHJcbmltcG9ydCB7IGlzVW5kZWZpbmVkT3JFbXB0eVN0cmluZyB9IGZyb20gJy4uL3V0aWxzL2NvbW1vbi11dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzdFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBzdG9yZTogU3RvcmUpIHt9XHJcblxyXG4gIHByaXZhdGUgZ2V0QXBpRnJvbVN0b3JlKGFwaU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChDb25maWdTdGF0ZS5nZXRBcGlVcmwoYXBpTmFtZSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXJyb3IoZXJyOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgUmVzdE9jY3VyRXJyb3IoZXJyKSk7XHJcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG4gIH1cclxuXHJcbiAgLy8gVE9ETzogRGVwcmVjYXRlIHNlcnZpY2Ugb3IgaW1wcm92ZSBpbnRlcmZhY2UgaW4gdjMuMFxyXG4gIHJlcXVlc3Q8VCwgUj4oXHJcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxUPiB8IFJlc3QuUmVxdWVzdDxUPixcclxuICAgIGNvbmZpZz86IFJlc3QuQ29uZmlnLFxyXG4gICAgYXBpPzogc3RyaW5nLFxyXG4gICk6IE9ic2VydmFibGU8Uj4ge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8ICh7fSBhcyBSZXN0LkNvbmZpZyk7XHJcbiAgICBhcGkgPSBhcGkgfHwgdGhpcy5nZXRBcGlGcm9tU3RvcmUoY29uZmlnLmFwaU5hbWUpO1xyXG4gICAgY29uc3QgeyBtZXRob2QsIHBhcmFtcywgLi4ub3B0aW9ucyB9ID0gcmVxdWVzdDtcclxuICAgIGNvbnN0IHsgb2JzZXJ2ZSA9IFJlc3QuT2JzZXJ2ZS5Cb2R5LCBza2lwSGFuZGxlRXJyb3IgfSA9IGNvbmZpZztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5yZXF1ZXN0PFI+KG1ldGhvZCwgYXBpICsgcmVxdWVzdC51cmwsIHtcclxuICAgICAgICBvYnNlcnZlLFxyXG4gICAgICAgIC4uLihwYXJhbXMgJiYge1xyXG4gICAgICAgICAgcGFyYW1zOiBPYmplY3Qua2V5cyhwYXJhbXMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJhbXNba2V5XTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWRPckVtcHR5U3RyaW5nKHZhbHVlKSkgYWNjW2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICB9LCB7fSksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgfSBhcyBhbnkpXHJcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoZXJyID0+IChza2lwSGFuZGxlRXJyb3IgPyB0aHJvd0Vycm9yKGVycikgOiB0aGlzLmhhbmRsZUVycm9yKGVycikpKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==