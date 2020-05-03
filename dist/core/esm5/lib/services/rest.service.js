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
var RestService = /** @class */ (function () {
    function RestService(http, store) {
        this.http = http;
        this.store = store;
    }
    /**
     * @private
     * @param {?} apiName
     * @return {?}
     */
    RestService.prototype.getApiFromStore = /**
     * @private
     * @param {?} apiName
     * @return {?}
     */
    function (apiName) {
        return this.store.selectSnapshot(ConfigState.getApiUrl(apiName));
    };
    /**
     * @param {?} err
     * @return {?}
     */
    RestService.prototype.handleError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.store.dispatch(new RestOccurError(err));
        return throwError(err);
    };
    // TODO: Deprecate service or improve interface in v3.0
    // TODO: Deprecate service or improve interface in v3.0
    /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    RestService.prototype.request = 
    // TODO: Deprecate service or improve interface in v3.0
    /**
     * @template T, R
     * @param {?} request
     * @param {?=} config
     * @param {?=} api
     * @return {?}
     */
    function (request, config, api) {
        var _this = this;
        config = config || ((/** @type {?} */ ({})));
        api = api || this.getApiFromStore(config.apiName);
        var method = request.method, params = request.params, options = tslib_1.__rest(request, ["method", "params"]);
        var _a = config.observe, observe = _a === void 0 ? "body" /* Body */ : _a, skipHandleError = config.skipHandleError;
        return this.http
            .request(method, api + request.url, (/** @type {?} */ (tslib_1.__assign({ observe: observe }, (params && {
            params: Object.keys(params).reduce((/**
             * @param {?} acc
             * @param {?} key
             * @return {?}
             */
            function (acc, key) {
                /** @type {?} */
                var value = params[key];
                if (!isUndefinedOrEmptyString(value))
                    acc[key] = value;
                return acc;
            }), {}),
        }), options))))
            .pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return (skipHandleError ? throwError(err) : _this.handleError(err)); })));
    };
    RestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    RestService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store }
    ]; };
    /** @nocollapse */ RestService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RestService_Factory() { return new RestService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Store)); }, token: RestService, providedIn: "root" });
    return RestService;
}());
export { RestService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Jlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFakU7SUFJRSxxQkFBb0IsSUFBZ0IsRUFBVSxLQUFZO1FBQXRDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQzs7Ozs7O0lBRXRELHFDQUFlOzs7OztJQUF2QixVQUF3QixPQUFlO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLEdBQVE7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsdURBQXVEOzs7Ozs7Ozs7SUFDdkQsNkJBQU87Ozs7Ozs7OztJQUFQLFVBQ0UsT0FBeUMsRUFDekMsTUFBb0IsRUFDcEIsR0FBWTtRQUhkLGlCQXlCQztRQXBCQyxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQUEsRUFBRSxFQUFlLENBQUMsQ0FBQztRQUN2QyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUEsdUJBQU0sRUFBRSx1QkFBTSxFQUFFLHVEQUFVO1FBQzFCLElBQUEsbUJBQTJCLEVBQTNCLGdEQUEyQixFQUFFLHdDQUFlO1FBRXBELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixPQUFPLENBQUksTUFBTSxFQUFFLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLHNDQUNyQyxPQUFPLFNBQUEsSUFDSixDQUFDLE1BQU0sSUFBSTtZQUNaLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU07Ozs7O1lBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRzs7b0JBQ3BDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUV6QixJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDO29CQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBRXZELE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxHQUFFLEVBQUUsQ0FBQztTQUNQLENBQUMsRUFDQyxPQUFPLEdBQ0osQ0FBQzthQUNSLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTNELENBQTJELEVBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7O2dCQXpDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVpRLFVBQVU7Z0JBRVYsS0FBSzs7O3NCQUZkO0NBb0RDLEFBMUNELElBMENDO1NBdkNZLFdBQVc7Ozs7OztJQUNWLDJCQUF3Qjs7Ozs7SUFBRSw0QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBSZXN0T2NjdXJFcnJvciB9IGZyb20gJy4uL2FjdGlvbnMvcmVzdC5hY3Rpb25zJztcclxuaW1wb3J0IHsgUmVzdCB9IGZyb20gJy4uL21vZGVscy9yZXN0JztcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvY29uZmlnLnN0YXRlJztcclxuaW1wb3J0IHsgaXNVbmRlZmluZWRPckVtcHR5U3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uLXV0aWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXN0U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgcHJpdmF0ZSBnZXRBcGlGcm9tU3RvcmUoYXBpTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KENvbmZpZ1N0YXRlLmdldEFwaVVybChhcGlOYW1lKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcihlcnI6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBSZXN0T2NjdXJFcnJvcihlcnIpKTtcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBEZXByZWNhdGUgc2VydmljZSBvciBpbXByb3ZlIGludGVyZmFjZSBpbiB2My4wXHJcbiAgcmVxdWVzdDxULCBSPihcclxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PFQ+IHwgUmVzdC5SZXF1ZXN0PFQ+LFxyXG4gICAgY29uZmlnPzogUmVzdC5Db25maWcsXHJcbiAgICBhcGk/OiBzdHJpbmcsXHJcbiAgKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwgKHt9IGFzIFJlc3QuQ29uZmlnKTtcclxuICAgIGFwaSA9IGFwaSB8fCB0aGlzLmdldEFwaUZyb21TdG9yZShjb25maWcuYXBpTmFtZSk7XHJcbiAgICBjb25zdCB7IG1ldGhvZCwgcGFyYW1zLCAuLi5vcHRpb25zIH0gPSByZXF1ZXN0O1xyXG4gICAgY29uc3QgeyBvYnNlcnZlID0gUmVzdC5PYnNlcnZlLkJvZHksIHNraXBIYW5kbGVFcnJvciB9ID0gY29uZmlnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnJlcXVlc3Q8Uj4obWV0aG9kLCBhcGkgKyByZXF1ZXN0LnVybCwge1xyXG4gICAgICAgIG9ic2VydmUsXHJcbiAgICAgICAgLi4uKHBhcmFtcyAmJiB7XHJcbiAgICAgICAgICBwYXJhbXM6IE9iamVjdC5rZXlzKHBhcmFtcykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtc1trZXldO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZE9yRW1wdHlTdHJpbmcodmFsdWUpKSBhY2Nba2V5XSA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgIH0sIHt9KSxcclxuICAgICAgICB9KSxcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICB9IGFzIGFueSlcclxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcihlcnIgPT4gKHNraXBIYW5kbGVFcnJvciA/IHRocm93RXJyb3IoZXJyKSA6IHRoaXMuaGFuZGxlRXJyb3IoZXJyKSkpKTtcclxuICB9XHJcbn1cclxuIl19