/**
 * @fileoverview added by tsickle
 * Generated from: lib/tokens/http-error.token.ts
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
    return (/** @type {?} */ (tslib_1.__assign({ skipHandledErrorCodes: [], errorScreen: {} }, config)));
}
/** @type {?} */
export var HTTP_ERROR_CONFIG = new InjectionToken('HTTP_ERROR_CONFIG');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci50b2tlbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL3Rva2Vucy9odHRwLWVycm9yLnRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRy9DLE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxNQUE4QjtJQUE5Qix1QkFBQSxFQUFBLDRCQUFTLEVBQUUsRUFBbUI7SUFDbkUsSUFBSSxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7UUFDNUYsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMxRDtJQUVELE9BQU8sc0NBQ0wscUJBQXFCLEVBQUUsRUFBRSxFQUN6QixXQUFXLEVBQUUsRUFBRSxJQUNaLE1BQU0sR0FDUyxDQUFDO0FBQ3ZCLENBQUM7O0FBRUQsTUFBTSxLQUFPLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFDLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cEVycm9yQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaHR0cEVycm9yQ29uZmlnRmFjdG9yeShjb25maWcgPSB7fSBhcyBIdHRwRXJyb3JDb25maWcpIHtcclxuICBpZiAoY29uZmlnLmVycm9yU2NyZWVuICYmIGNvbmZpZy5lcnJvclNjcmVlbi5jb21wb25lbnQgJiYgIWNvbmZpZy5lcnJvclNjcmVlbi5mb3JXaGljaEVycm9ycykge1xyXG4gICAgY29uZmlnLmVycm9yU2NyZWVuLmZvcldoaWNoRXJyb3JzID0gWzQwMSwgNDAzLCA0MDQsIDUwMF07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2tpcEhhbmRsZWRFcnJvckNvZGVzOiBbXSxcclxuICAgIGVycm9yU2NyZWVuOiB7fSxcclxuICAgIC4uLmNvbmZpZyxcclxuICB9IGFzIEh0dHBFcnJvckNvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhUVFBfRVJST1JfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuKCdIVFRQX0VSUk9SX0NPTkZJRycpO1xyXG4iXX0=