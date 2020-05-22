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
export function validateRange({ maximum = Infinity, minimum = 0 } = {}) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        if (control.pristine)
            return null;
        if (['', null, undefined].indexOf(control.value) > -1)
            return null;
        /** @type {?} */
        const value = Number(control.value);
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
    return value > max ? { range: { max, min } } : null;
}
/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function getMinError(value, min, max) {
    return value < min ? { range: { min, max } } : null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRvcnMvcmFuZ2UudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsZ0NBS0M7OztJQUpDLDJCQUdFOzs7OztBQUdKLGtDQUdDOzs7SUFGQywrQkFBaUI7O0lBQ2pCLCtCQUFpQjs7Ozs7O0FBR25CLE1BQU0sVUFBVSxhQUFhLENBQUMsRUFBRSxPQUFPLEdBQUcsUUFBUSxFQUFFLE9BQU8sR0FBRyxDQUFDLEtBQW1CLEVBQUU7SUFDbEY7Ozs7SUFBTyxDQUFDLE9BQXdCLEVBQXFCLEVBQUU7UUFDckQsSUFBSSxPQUFPLENBQUMsUUFBUTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWxDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7O2NBRTdELEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNuQyxPQUFPLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RGLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7Ozs7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFhLEVBQUUsR0FBVyxFQUFFLEdBQVc7SUFDMUQsT0FBTyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDdEQsQ0FBQzs7Ozs7OztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQWEsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUMxRCxPQUFPLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN0RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VFcnJvciB7XHJcbiAgcmFuZ2U6IHtcclxuICAgIG1heDogbnVtYmVyO1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSYW5nZU9wdGlvbnMge1xyXG4gIG1heGltdW0/OiBudW1iZXI7XHJcbiAgbWluaW11bT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUmFuZ2UoeyBtYXhpbXVtID0gSW5maW5pdHksIG1pbmltdW0gPSAwIH06IFJhbmdlT3B0aW9ucyA9IHt9KTogVmFsaWRhdG9yRm4ge1xyXG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogUmFuZ2VFcnJvciB8IG51bGwgPT4ge1xyXG4gICAgaWYgKGNvbnRyb2wucHJpc3RpbmUpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGlmIChbJycsIG51bGwsIHVuZGVmaW5lZF0uaW5kZXhPZihjb250cm9sLnZhbHVlKSA+IC0xKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihjb250cm9sLnZhbHVlKTtcclxuICAgIHJldHVybiBnZXRNaW5FcnJvcih2YWx1ZSwgbWluaW11bSwgbWF4aW11bSkgfHwgZ2V0TWF4RXJyb3IodmFsdWUsIG1heGltdW0sIG1pbmltdW0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1heEVycm9yKHZhbHVlOiBudW1iZXIsIG1heDogbnVtYmVyLCBtaW46IG51bWJlcik6IFJhbmdlRXJyb3Ige1xyXG4gIHJldHVybiB2YWx1ZSA+IG1heCA/IHsgcmFuZ2U6IHsgbWF4LCBtaW4gfSB9IDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWluRXJyb3IodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogUmFuZ2VFcnJvciB7XHJcbiAgcmV0dXJuIHZhbHVlIDwgbWluID8geyByYW5nZTogeyBtaW4sIG1heCB9IH0gOiBudWxsO1xyXG59XHJcbiJdfQ==