/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * @param {?=} config
 * @return {?}
 */
export function httpErrorConfigFactory(config = (/** @type {?} */ ({}))) {
    if (config.errorScreen && config.errorScreen.component && !config.errorScreen.forWhichErrors) {
        config.errorScreen.forWhichErrors = [401, 403, 404, 500];
    }
    return (/** @type {?} */ (Object.assign({ errorScreen: {} }, config)));
}
/** @type {?} */
export const HTTP_ERROR_CONFIG = new InjectionToken('HTTP_ERROR_CONFIG');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItcGFnZXMudG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRoZW1lLnNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi90b2tlbnMvZXJyb3ItcGFnZXMudG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRy9DLE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxNQUFNLEdBQUcsbUJBQUEsRUFBRSxFQUFtQjtJQUNuRSxJQUFJLE1BQU0sQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTtRQUM1RixNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFEO0lBRUQsT0FBTyxtQ0FDTCxXQUFXLEVBQUUsRUFBRSxJQUNaLE1BQU0sR0FDUyxDQUFDO0FBQ3ZCLENBQUM7O0FBRUQsTUFBTSxPQUFPLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFDLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cEVycm9yQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaHR0cEVycm9yQ29uZmlnRmFjdG9yeShjb25maWcgPSB7fSBhcyBIdHRwRXJyb3JDb25maWcpIHtcclxuICBpZiAoY29uZmlnLmVycm9yU2NyZWVuICYmIGNvbmZpZy5lcnJvclNjcmVlbi5jb21wb25lbnQgJiYgIWNvbmZpZy5lcnJvclNjcmVlbi5mb3JXaGljaEVycm9ycykge1xyXG4gICAgY29uZmlnLmVycm9yU2NyZWVuLmZvcldoaWNoRXJyb3JzID0gWzQwMSwgNDAzLCA0MDQsIDUwMF07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZXJyb3JTY3JlZW46IHt9LFxyXG4gICAgLi4uY29uZmlnLFxyXG4gIH0gYXMgSHR0cEVycm9yQ29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSFRUUF9FUlJPUl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0hUVFBfRVJST1JfQ09ORklHJyk7XHJcbiJdfQ==