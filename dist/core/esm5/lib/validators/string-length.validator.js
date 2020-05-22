/**
 * @fileoverview added by tsickle
 * Generated from: lib/validators/string-length.validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function StringLengthError() { }
if (false) {
    /** @type {?|undefined} */
    StringLengthError.prototype.maxlength;
    /** @type {?|undefined} */
    StringLengthError.prototype.minlength;
}
/**
 * @record
 */
export function StringLengthOptions() { }
if (false) {
    /** @type {?|undefined} */
    StringLengthOptions.prototype.maximumLength;
    /** @type {?|undefined} */
    StringLengthOptions.prototype.minimumLength;
}
/**
 * @param {?=} __0
 * @return {?}
 */
export function validateStringLength(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maximumLength, maximumLength = _c === void 0 ? Infinity : _c, _d = _b.minimumLength, minimumLength = _d === void 0 ? 0 : _d;
    return (/**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.pristine)
            return null;
        if (['', null, undefined].indexOf(control.value) > -1)
            return null;
        /** @type {?} */
        var value = String(control.value);
        return getMinLengthError(value, minimumLength) || getMaxLengthError(value, maximumLength);
    });
}
/**
 * @param {?} value
 * @param {?} requiredLength
 * @return {?}
 */
function getMaxLengthError(value, requiredLength) {
    return value.length > requiredLength ? { maxlength: { requiredLength: requiredLength } } : null;
}
/**
 * @param {?} value
 * @param {?} requiredLength
 * @return {?}
 */
function getMinLengthError(value, requiredLength) {
    return value.length < requiredLength ? { minlength: { requiredLength: requiredLength } } : null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWxlbmd0aC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9ycy9zdHJpbmctbGVuZ3RoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLHVDQU9DOzs7SUFOQyxzQ0FFRTs7SUFDRixzQ0FFRTs7Ozs7QUFHSix5Q0FHQzs7O0lBRkMsNENBQXVCOztJQUN2Qiw0Q0FBdUI7Ozs7OztBQUd6QixNQUFNLFVBQVUsb0JBQW9CLENBQUMsRUFHVjtRQUhVLDRCQUdWLEVBRnpCLHFCQUF3QixFQUF4Qiw2Q0FBd0IsRUFDeEIscUJBQWlCLEVBQWpCLHNDQUFpQjtJQUVqQjs7OztJQUFPLFVBQUMsT0FBd0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsUUFBUTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWxDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7O1lBRTdELEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUVuQyxPQUFPLGlCQUFpQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUYsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsY0FBc0I7SUFDOUQsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxjQUFjLGdCQUFBLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDbEYsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsY0FBc0I7SUFDOUQsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxjQUFjLGdCQUFBLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDbEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ0xlbmd0aEVycm9yIHtcclxuICBtYXhsZW5ndGg/OiB7XHJcbiAgICByZXF1aXJlZExlbmd0aDogbnVtYmVyO1xyXG4gIH07XHJcbiAgbWlubGVuZ3RoPzoge1xyXG4gICAgcmVxdWlyZWRMZW5ndGg6IG51bWJlcjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ0xlbmd0aE9wdGlvbnMge1xyXG4gIG1heGltdW1MZW5ndGg/OiBudW1iZXI7XHJcbiAgbWluaW11bUxlbmd0aD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nTGVuZ3RoKHtcclxuICBtYXhpbXVtTGVuZ3RoID0gSW5maW5pdHksXHJcbiAgbWluaW11bUxlbmd0aCA9IDAsXHJcbn06IFN0cmluZ0xlbmd0aE9wdGlvbnMgPSB7fSk6IFZhbGlkYXRvckZuIHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFN0cmluZ0xlbmd0aEVycm9yIHwgbnVsbCA9PiB7XHJcbiAgICBpZiAoY29udHJvbC5wcmlzdGluZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgaWYgKFsnJywgbnVsbCwgdW5kZWZpbmVkXS5pbmRleE9mKGNvbnRyb2wudmFsdWUpID4gLTEpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gU3RyaW5nKGNvbnRyb2wudmFsdWUpO1xyXG5cclxuICAgIHJldHVybiBnZXRNaW5MZW5ndGhFcnJvcih2YWx1ZSwgbWluaW11bUxlbmd0aCkgfHwgZ2V0TWF4TGVuZ3RoRXJyb3IodmFsdWUsIG1heGltdW1MZW5ndGgpO1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1heExlbmd0aEVycm9yKHZhbHVlOiBzdHJpbmcsIHJlcXVpcmVkTGVuZ3RoOiBudW1iZXIpOiBTdHJpbmdMZW5ndGhFcnJvciB7XHJcbiAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IHJlcXVpcmVkTGVuZ3RoID8geyBtYXhsZW5ndGg6IHsgcmVxdWlyZWRMZW5ndGggfSB9IDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWluTGVuZ3RoRXJyb3IodmFsdWU6IHN0cmluZywgcmVxdWlyZWRMZW5ndGg6IG51bWJlcik6IFN0cmluZ0xlbmd0aEVycm9yIHtcclxuICByZXR1cm4gdmFsdWUubGVuZ3RoIDwgcmVxdWlyZWRMZW5ndGggPyB7IG1pbmxlbmd0aDogeyByZXF1aXJlZExlbmd0aCB9IH0gOiBudWxsO1xyXG59XHJcbiJdfQ==