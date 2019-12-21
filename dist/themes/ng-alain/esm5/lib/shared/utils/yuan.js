/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared/utils/yuan.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 转化成RMB元字符串
 * @param {?} value
 * @param {?=} digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 * @return {?}
 */
// tslint:disable-next-line:no-any
export function yuan(value, digits) {
    if (digits === void 0) { digits = 2; }
    if (typeof value === 'number') {
        value = value.toFixed(digits);
    }
    return "&yen " + value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXVhbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvdXRpbHMveXVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFLQSxNQUFNLFVBQVUsSUFBSSxDQUFDLEtBQVUsRUFBRSxNQUFrQjtJQUFsQix1QkFBQSxFQUFBLFVBQWtCO0lBQ2pELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0lBQ0QsT0FBTyxVQUFRLEtBQU8sQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOi9rOWMluaIkFJNQuWFg+Wtl+espuS4slxyXG4gKiBAcGFyYW0gZGlnaXRzIOW9k+aVsOWtl+exu+Wei+aXtu+8jOWFgeiuuOaMh+WumuWwj+aVsOeCueWQjuaVsOWtl+eahOS4quaVsO+8jOm7mOiupDLkvY3lsI/mlbBcclxuICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGZ1bmN0aW9uIHl1YW4odmFsdWU6IGFueSwgZGlnaXRzOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgdmFsdWUgPSB2YWx1ZS50b0ZpeGVkKGRpZ2l0cyk7XHJcbiAgfVxyXG4gIHJldHVybiBgJnllbiAke3ZhbHVlfWA7XHJcbn1cclxuIl19