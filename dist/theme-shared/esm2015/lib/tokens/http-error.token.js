/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/http-error.token.ts
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
    return (/** @type {?} */ (Object.assign({ skipHandledErrorCodes: [], errorScreen: {} }, config)));
}
/** @type {?} */
export const HTTP_ERROR_CONFIG = new InjectionToken('HTTP_ERROR_CONFIG');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci50b2tlbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Rva2Vucy9odHRwLWVycm9yLnRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFHL0MsTUFBTSxVQUFVLHNCQUFzQixDQUFDLE1BQU0sR0FBRyxtQkFBQSxFQUFFLEVBQW1CO0lBQ25FLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1FBQzVGLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDMUQ7SUFFRCxPQUFPLG1DQUNMLHFCQUFxQixFQUFFLEVBQUUsRUFDekIsV0FBVyxFQUFFLEVBQUUsSUFDWixNQUFNLEdBQ1MsQ0FBQztBQUN2QixDQUFDOztBQUVELE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxJQUFJLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBFcnJvckNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb21tb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGh0dHBFcnJvckNvbmZpZ0ZhY3RvcnkoY29uZmlnID0ge30gYXMgSHR0cEVycm9yQ29uZmlnKSB7XHJcbiAgaWYgKGNvbmZpZy5lcnJvclNjcmVlbiAmJiBjb25maWcuZXJyb3JTY3JlZW4uY29tcG9uZW50ICYmICFjb25maWcuZXJyb3JTY3JlZW4uZm9yV2hpY2hFcnJvcnMpIHtcclxuICAgIGNvbmZpZy5lcnJvclNjcmVlbi5mb3JXaGljaEVycm9ycyA9IFs0MDEsIDQwMywgNDA0LCA1MDBdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNraXBIYW5kbGVkRXJyb3JDb2RlczogW10sXHJcbiAgICBlcnJvclNjcmVlbjoge30sXHJcbiAgICAuLi5jb25maWcsXHJcbiAgfSBhcyBIdHRwRXJyb3JDb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIVFRQX0VSUk9SX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbignSFRUUF9FUlJPUl9DT05GSUcnKTtcclxuIl19