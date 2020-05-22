/**
 * @fileoverview added by tsickle
 * Generated from: lib/validators/range.validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function RangeError() { }
if (false) {
    /** @type {?} */
    RangeError.prototype.range;
}
/**
 * @record
 */
export function RangeOptions() { }
if (false) {
    /** @type {?|undefined} */
    RangeOptions.prototype.maximum;
    /** @type {?|undefined} */
    RangeOptions.prototype.minimum;
}
/**
 * @param {?=} __0
 * @return {?}
 */
export function validateRange(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.maximum, maximum = _c === void 0 ? Infinity : _c, _d = _b.minimum, minimum = _d === void 0 ? 0 : _d;
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
        var value = Number(control.value);
        return getMinError(value, minimum, maximum) || getMaxError(value, maximum, minimum);
    });
}
/**
 * @param {?} value
 * @param {?} max
 * @param {?} min
 * @return {?}
 */
function getMaxError(value, max, min) {
    return value > max ? { range: { max: max, min: min } } : null;
}
/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function getMinError(value, min, max) {
    return value < min ? { range: { min: min, max: max } } : null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRvcnMvcmFuZ2UudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsZ0NBS0M7OztJQUpDLDJCQUdFOzs7OztBQUdKLGtDQUdDOzs7SUFGQywrQkFBaUI7O0lBQ2pCLCtCQUFpQjs7Ozs7O0FBR25CLE1BQU0sVUFBVSxhQUFhLENBQUMsRUFBc0Q7UUFBdEQsNEJBQXNELEVBQXBELGVBQWtCLEVBQWxCLHVDQUFrQixFQUFFLGVBQVcsRUFBWCxnQ0FBVztJQUM3RDs7OztJQUFPLFVBQUMsT0FBd0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsUUFBUTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWxDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7O1lBRTdELEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNuQyxPQUFPLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RGLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDMUQsT0FBTyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3RELENBQUM7Ozs7Ozs7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDMUQsT0FBTyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3RELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSYW5nZUVycm9yIHtcclxuICByYW5nZToge1xyXG4gICAgbWF4OiBudW1iZXI7XHJcbiAgICBtaW46IG51bWJlcjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlT3B0aW9ucyB7XHJcbiAgbWF4aW11bT86IG51bWJlcjtcclxuICBtaW5pbXVtPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVSYW5nZSh7IG1heGltdW0gPSBJbmZpbml0eSwgbWluaW11bSA9IDAgfTogUmFuZ2VPcHRpb25zID0ge30pOiBWYWxpZGF0b3JGbiB7XHJcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBSYW5nZUVycm9yIHwgbnVsbCA9PiB7XHJcbiAgICBpZiAoY29udHJvbC5wcmlzdGluZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgaWYgKFsnJywgbnVsbCwgdW5kZWZpbmVkXS5pbmRleE9mKGNvbnRyb2wudmFsdWUpID4gLTEpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGNvbnRyb2wudmFsdWUpO1xyXG4gICAgcmV0dXJuIGdldE1pbkVycm9yKHZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtKSB8fCBnZXRNYXhFcnJvcih2YWx1ZSwgbWF4aW11bSwgbWluaW11bSk7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWF4RXJyb3IodmFsdWU6IG51bWJlciwgbWF4OiBudW1iZXIsIG1pbjogbnVtYmVyKTogUmFuZ2VFcnJvciB7XHJcbiAgcmV0dXJuIHZhbHVlID4gbWF4ID8geyByYW5nZTogeyBtYXgsIG1pbiB9IH0gOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNaW5FcnJvcih2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBSYW5nZUVycm9yIHtcclxuICByZXR1cm4gdmFsdWUgPCBtaW4gPyB7IHJhbmdlOiB7IG1pbiwgbWF4IH0gfSA6IG51bGw7XHJcbn1cclxuIl19