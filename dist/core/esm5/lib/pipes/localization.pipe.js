/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ConfigState } from '../states';
var LocalizationPipe = /** @class */ (function () {
    function LocalizationPipe(store) {
        this.store = store;
    }
    /**
     * @param {?=} value
     * @param {...?} interpolateParams
     * @return {?}
     */
    LocalizationPipe.prototype.transform = /**
     * @param {?=} value
     * @param {...?} interpolateParams
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        var interpolateParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interpolateParams[_i - 1] = arguments[_i];
        }
        return this.store.selectSnapshot(ConfigState.getLocalization.apply(ConfigState, tslib_1.__spread([value], interpolateParams.reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        function (acc, val) { return (Array.isArray(val) ? tslib_1.__spread(acc, val) : tslib_1.__spread(acc, [val])); }), []))));
    };
    LocalizationPipe.decorators = [
        { type: Injectable },
        { type: Pipe, args: [{
                    name: 'abpLocalization',
                },] }
    ];
    /** @nocollapse */
    LocalizationPipe.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return LocalizationPipe;
}());
export { LocalizationPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalizationPipe.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbG9jYWxpemF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXhDO0lBS0UsMEJBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQzs7Ozs7O0lBRXBDLG9DQUFTOzs7OztJQUFULFVBQVUsS0FBbUQ7UUFBbkQsc0JBQUEsRUFBQSxVQUFtRDtRQUFFLDJCQUE4QjthQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7WUFBOUIsMENBQThCOztRQUMzRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUM5QixXQUFXLENBQUMsZUFBZSxPQUEzQixXQUFXLG9CQUNULEtBQUssR0FDRixpQkFBaUIsQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFLLEdBQUcsRUFBSyxHQUFHLEVBQUUsQ0FBQyxrQkFBSyxHQUFHLEdBQUUsR0FBRyxFQUFDLENBQUMsRUFBdkQsQ0FBdUQsR0FBRSxFQUFFLENBQUMsR0FFekcsQ0FBQztJQUNKLENBQUM7O2dCQWRGLFVBQVU7Z0JBQ1YsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxpQkFBaUI7aUJBQ3hCOzs7O2dCQVBRLEtBQUs7O0lBbUJkLHVCQUFDO0NBQUEsQUFmRCxJQWVDO1NBWFksZ0JBQWdCOzs7Ozs7SUFDZixpQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYWJwTG9jYWxpemF0aW9uJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2FsaXphdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcgfCBDb25maWcuTG9jYWxpemF0aW9uV2l0aERlZmF1bHQgPSAnJywgLi4uaW50ZXJwb2xhdGVQYXJhbXM6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFxyXG4gICAgICBDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24oXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgLi4uaW50ZXJwb2xhdGVQYXJhbXMucmVkdWNlKChhY2MsIHZhbCkgPT4gKEFycmF5LmlzQXJyYXkodmFsKSA/IFsuLi5hY2MsIC4uLnZhbF0gOiBbLi4uYWNjLCB2YWxdKSwgW10pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19