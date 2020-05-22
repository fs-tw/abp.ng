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
export function validateStringLength({ maximumLength = Infinity, minimumLength = 0, } = {}) {
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
        const value = String(control.value);
        return getMinLengthError(value, minimumLength) || getMaxLengthError(value, maximumLength);
    });
}
/**
 * @param {?} value
 * @param {?} requiredLength
 * @return {?}
 */
function getMaxLengthError(value, requiredLength) {
    return value.length > requiredLength ? { maxlength: { requiredLength } } : null;
}
/**
 * @param {?} value
 * @param {?} requiredLength
 * @return {?}
 */
function getMinLengthError(value, requiredLength) {
    return value.length < requiredLength ? { minlength: { requiredLength } } : null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWxlbmd0aC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLmNvcmUvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9ycy9zdHJpbmctbGVuZ3RoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLHVDQU9DOzs7SUFOQyxzQ0FFRTs7SUFDRixzQ0FFRTs7Ozs7QUFHSix5Q0FHQzs7O0lBRkMsNENBQXVCOztJQUN2Qiw0Q0FBdUI7Ozs7OztBQUd6QixNQUFNLFVBQVUsb0JBQW9CLENBQUMsRUFDbkMsYUFBYSxHQUFHLFFBQVEsRUFDeEIsYUFBYSxHQUFHLENBQUMsTUFDTSxFQUFFO0lBQ3pCOzs7O0lBQU8sQ0FBQyxPQUF3QixFQUE0QixFQUFFO1FBQzVELElBQUksT0FBTyxDQUFDLFFBQVE7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVsQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDOztjQUU3RCxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFbkMsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzVGLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7OztBQUVELFNBQVMsaUJBQWlCLENBQUMsS0FBYSxFQUFFLGNBQXNCO0lBQzlELE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2xGLENBQUM7Ozs7OztBQUVELFNBQVMsaUJBQWlCLENBQUMsS0FBYSxFQUFFLGNBQXNCO0lBQzlELE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2xGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHJpbmdMZW5ndGhFcnJvciB7XHJcbiAgbWF4bGVuZ3RoPzoge1xyXG4gICAgcmVxdWlyZWRMZW5ndGg6IG51bWJlcjtcclxuICB9O1xyXG4gIG1pbmxlbmd0aD86IHtcclxuICAgIHJlcXVpcmVkTGVuZ3RoOiBudW1iZXI7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHJpbmdMZW5ndGhPcHRpb25zIHtcclxuICBtYXhpbXVtTGVuZ3RoPzogbnVtYmVyO1xyXG4gIG1pbmltdW1MZW5ndGg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZ0xlbmd0aCh7XHJcbiAgbWF4aW11bUxlbmd0aCA9IEluZmluaXR5LFxyXG4gIG1pbmltdW1MZW5ndGggPSAwLFxyXG59OiBTdHJpbmdMZW5ndGhPcHRpb25zID0ge30pOiBWYWxpZGF0b3JGbiB7XHJcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBTdHJpbmdMZW5ndGhFcnJvciB8IG51bGwgPT4ge1xyXG4gICAgaWYgKGNvbnRyb2wucHJpc3RpbmUpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGlmIChbJycsIG51bGwsIHVuZGVmaW5lZF0uaW5kZXhPZihjb250cm9sLnZhbHVlKSA+IC0xKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IFN0cmluZyhjb250cm9sLnZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4gZ2V0TWluTGVuZ3RoRXJyb3IodmFsdWUsIG1pbmltdW1MZW5ndGgpIHx8IGdldE1heExlbmd0aEVycm9yKHZhbHVlLCBtYXhpbXVtTGVuZ3RoKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNYXhMZW5ndGhFcnJvcih2YWx1ZTogc3RyaW5nLCByZXF1aXJlZExlbmd0aDogbnVtYmVyKTogU3RyaW5nTGVuZ3RoRXJyb3Ige1xyXG4gIHJldHVybiB2YWx1ZS5sZW5ndGggPiByZXF1aXJlZExlbmd0aCA/IHsgbWF4bGVuZ3RoOiB7IHJlcXVpcmVkTGVuZ3RoIH0gfSA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1pbkxlbmd0aEVycm9yKHZhbHVlOiBzdHJpbmcsIHJlcXVpcmVkTGVuZ3RoOiBudW1iZXIpOiBTdHJpbmdMZW5ndGhFcnJvciB7XHJcbiAgcmV0dXJuIHZhbHVlLmxlbmd0aCA8IHJlcXVpcmVkTGVuZ3RoID8geyBtaW5sZW5ndGg6IHsgcmVxdWlyZWRMZW5ndGggfSB9IDogbnVsbDtcclxufVxyXG4iXX0=