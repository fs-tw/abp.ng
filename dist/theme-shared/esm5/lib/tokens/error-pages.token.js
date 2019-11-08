/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
/**
 * @param {?=} config
 * @return {?}
 */
export function httpErrorConfigFactory(config) {
    if (config === void 0) { config = (/** @type {?} */ ({})); }
    if (config.errorScreen && config.errorScreen.component && !config.errorScreen.forWhichErrors) {
        config.errorScreen.forWhichErrors = [401, 403, 404, 500];
    }
    return (/** @type {?} */ (tslib_1.__assign({ errorScreen: {} }, config)));
}
/** @type {?} */
export var HTTP_ERROR_CONFIG = new InjectionToken('HTTP_ERROR_CONFIG');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItcGFnZXMudG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi90b2tlbnMvZXJyb3ItcGFnZXMudG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUcvQyxNQUFNLFVBQVUsc0JBQXNCLENBQUMsTUFBOEI7SUFBOUIsdUJBQUEsRUFBQSw0QkFBUyxFQUFFLEVBQW1CO0lBQ25FLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1FBQzVGLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDMUQ7SUFFRCxPQUFPLHNDQUNMLFdBQVcsRUFBRSxFQUFFLElBQ1osTUFBTSxHQUNTLENBQUM7QUFDdkIsQ0FBQzs7QUFFRCxNQUFNLEtBQU8saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQUMsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29tbW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBodHRwRXJyb3JDb25maWdGYWN0b3J5KGNvbmZpZyA9IHt9IGFzIEh0dHBFcnJvckNvbmZpZykge1xyXG4gIGlmIChjb25maWcuZXJyb3JTY3JlZW4gJiYgY29uZmlnLmVycm9yU2NyZWVuLmNvbXBvbmVudCAmJiAhY29uZmlnLmVycm9yU2NyZWVuLmZvcldoaWNoRXJyb3JzKSB7XHJcbiAgICBjb25maWcuZXJyb3JTY3JlZW4uZm9yV2hpY2hFcnJvcnMgPSBbNDAxLCA0MDMsIDQwNCwgNTAwXTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvclNjcmVlbjoge30sXHJcbiAgICAuLi5jb25maWcsXHJcbiAgfSBhcyBIdHRwRXJyb3JDb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIVFRQX0VSUk9SX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbignSFRUUF9FUlJPUl9DT05GSUcnKTtcclxuIl19