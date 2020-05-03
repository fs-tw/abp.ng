/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/localization.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Pipe } from '@angular/core';
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
var MockLocalizationPipe = /** @class */ (function () {
    function MockLocalizationPipe() {
    }
    /**
     * @param {?=} value
     * @param {...?} _
     * @return {?}
     */
    MockLocalizationPipe.prototype.transform = /**
     * @param {?=} value
     * @param {...?} _
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        var _ = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _[_i - 1] = arguments[_i];
        }
        return typeof value === 'string' ? value : value.defaultValue;
    };
    MockLocalizationPipe.decorators = [
        { type: Injectable },
        { type: Pipe, args: [{
                    name: 'abpLocalization',
                },] }
    ];
    return MockLocalizationPipe;
}());
export { MockLocalizationPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbG9jYWxpemF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV4QztJQUtFLDBCQUFvQixLQUFZO1FBQVosVUFBSyxHQUFMLEtBQUssQ0FBTztJQUFHLENBQUM7Ozs7OztJQUVwQyxvQ0FBUzs7Ozs7SUFBVCxVQUNFLEtBQW1EO1FBQW5ELHNCQUFBLEVBQUEsVUFBbUQ7UUFDbkQsMkJBQThCO2FBQTlCLFVBQThCLEVBQTlCLHFCQUE4QixFQUE5QixJQUE4QjtZQUE5QiwwQ0FBOEI7O1FBRTlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQzlCLFdBQVcsQ0FBQyxlQUFlLE9BQTNCLFdBQVcsb0JBQ1QsS0FBSyxHQUNGLGlCQUFpQixDQUFDLE1BQU07Ozs7O1FBQ3pCLFVBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFLLEdBQUcsRUFBSyxHQUFHLEVBQUUsQ0FBQyxrQkFBSyxHQUFHLEdBQUUsR0FBRyxFQUFDLENBQUMsRUFBdkQsQ0FBdUQsR0FDckUsRUFBRSxDQUNILEdBRUosQ0FBQztJQUNKLENBQUM7O2dCQXBCRixVQUFVO2dCQUNWLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsaUJBQWlCO2lCQUN4Qjs7OztnQkFQUSxLQUFLOztJQXlCZCx1QkFBQztDQUFBLEFBckJELElBcUJDO1NBakJZLGdCQUFnQjs7Ozs7O0lBQ2YsaUNBQW9COztBQWtCbEM7SUFBQTtJQVFBLENBQUM7Ozs7OztJQUhDLHdDQUFTOzs7OztJQUFULFVBQVUsS0FBbUQ7UUFBbkQsc0JBQUEsRUFBQSxVQUFtRDtRQUFFLFdBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsMEJBQWM7O1FBQzNFLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDaEUsQ0FBQzs7Z0JBUEYsVUFBVTtnQkFDVixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGlCQUFpQjtpQkFDeEI7O0lBS0QsMkJBQUM7Q0FBQSxBQVJELElBUUM7U0FKWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYWJwTG9jYWxpemF0aW9uJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2FsaXphdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZSkge31cclxuXHJcbiAgdHJhbnNmb3JtKFxyXG4gICAgdmFsdWU6IHN0cmluZyB8IENvbmZpZy5Mb2NhbGl6YXRpb25XaXRoRGVmYXVsdCA9ICcnLFxyXG4gICAgLi4uaW50ZXJwb2xhdGVQYXJhbXM6IHN0cmluZ1tdXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdFNuYXBzaG90KFxyXG4gICAgICBDb25maWdTdGF0ZS5nZXRMb2NhbGl6YXRpb24oXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgLi4uaW50ZXJwb2xhdGVQYXJhbXMucmVkdWNlKFxyXG4gICAgICAgICAgKGFjYywgdmFsKSA9PiAoQXJyYXkuaXNBcnJheSh2YWwpID8gWy4uLmFjYywgLi4udmFsXSA6IFsuLi5hY2MsIHZhbF0pLFxyXG4gICAgICAgICAgW10sXHJcbiAgICAgICAgKSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYWJwTG9jYWxpemF0aW9uJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vY2tMb2NhbGl6YXRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcgfCBDb25maWcuTG9jYWxpemF0aW9uV2l0aERlZmF1bHQgPSAnJywgLi4uXzogc3RyaW5nW10pIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiB2YWx1ZS5kZWZhdWx0VmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==