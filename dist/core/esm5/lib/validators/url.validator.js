/**
 * @fileoverview added by tsickle
 * Generated from: lib/validators/url.validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function UrlError() { }
if (false) {
    /** @type {?} */
    UrlError.prototype.url;
}
/**
 * @return {?}
 */
export function validateUrl() {
    return (/**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.pristine)
            return null;
        if (['', null, undefined].indexOf(control.value) > -1)
            return null;
        return isValidUrl(control.value) ? null : { url: true };
    });
}
/**
 * @param {?} value
 * @return {?}
 */
function isValidUrl(value) {
    if (/^http(s)?:\/\/[^/]/.test(value) || /^ftp:\/\/[^/]/.test(value)) {
        /** @type {?} */
        var a = document.createElement('a');
        a.href = value;
        return !!a.host;
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi92YWxpZGF0b3JzL3VybC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSw4QkFFQzs7O0lBREMsdUJBQVU7Ozs7O0FBR1osTUFBTSxVQUFVLFdBQVc7SUFDekI7Ozs7SUFBTyxVQUFDLE9BQXdCO1FBQzlCLElBQUksT0FBTyxDQUFDLFFBQVE7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVsQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRW5FLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDLEVBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsVUFBVSxDQUFDLEtBQWE7SUFDL0IsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTs7WUFDN0QsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUNqQjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVybEVycm9yIHtcclxuICB1cmw6IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVVybCgpOiBWYWxpZGF0b3JGbiB7XHJcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBVcmxFcnJvciB8IG51bGwgPT4ge1xyXG4gICAgaWYgKGNvbnRyb2wucHJpc3RpbmUpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGlmIChbJycsIG51bGwsIHVuZGVmaW5lZF0uaW5kZXhPZihjb250cm9sLnZhbHVlKSA+IC0xKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gaXNWYWxpZFVybChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IHVybDogdHJ1ZSB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRVcmwodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGlmICgvXmh0dHAocyk/OlxcL1xcL1teL10vLnRlc3QodmFsdWUpIHx8IC9eZnRwOlxcL1xcL1teL10vLnRlc3QodmFsdWUpKSB7XHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYS5ocmVmID0gdmFsdWU7XHJcbiAgICByZXR1cm4gISFhLmhvc3Q7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIl19