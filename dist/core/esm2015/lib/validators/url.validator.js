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
    (control) => {
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
        const a = document.createElement('a');
        a.href = value;
        return !!a.host;
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi92YWxpZGF0b3JzL3VybC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSw4QkFFQzs7O0lBREMsdUJBQVU7Ozs7O0FBR1osTUFBTSxVQUFVLFdBQVc7SUFDekI7Ozs7SUFBTyxDQUFDLE9BQXdCLEVBQW1CLEVBQUU7UUFDbkQsSUFBSSxPQUFPLENBQUMsUUFBUTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWxDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFbkUsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzFELENBQUMsRUFBQztBQUNKLENBQUM7Ozs7O0FBRUQsU0FBUyxVQUFVLENBQUMsS0FBYTtJQUMvQixJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFOztjQUM3RCxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDckMsQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDZixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ2pCO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXJsRXJyb3Ige1xyXG4gIHVybDogdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVXJsKCk6IFZhbGlkYXRvckZuIHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFVybEVycm9yIHwgbnVsbCA9PiB7XHJcbiAgICBpZiAoY29udHJvbC5wcmlzdGluZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgaWYgKFsnJywgbnVsbCwgdW5kZWZpbmVkXS5pbmRleE9mKGNvbnRyb2wudmFsdWUpID4gLTEpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiBpc1ZhbGlkVXJsKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgdXJsOiB0cnVlIH07XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZFVybCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgaWYgKC9eaHR0cChzKT86XFwvXFwvW14vXS8udGVzdCh2YWx1ZSkgfHwgL15mdHA6XFwvXFwvW14vXS8udGVzdCh2YWx1ZSkpIHtcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLmhyZWYgPSB2YWx1ZTtcclxuICAgIHJldHVybiAhIWEuaG9zdDtcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG4iXX0=