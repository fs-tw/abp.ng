/**
 * @fileoverview added by tsickle
 * Generated from: lib/validators/required.validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function RequiredError() { }
if (false) {
    /** @type {?} */
    RequiredError.prototype.required;
}
/**
 * @record
 */
export function RequiredOptions() { }
if (false) {
    /** @type {?|undefined} */
    RequiredOptions.prototype.allowEmptyStrings;
}
/**
 * @param {?=} __0
 * @return {?}
 */
export function validateRequired(_a) {
    var allowEmptyStrings = (_a === void 0 ? {} : _a).allowEmptyStrings;
    return (/**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return control.pristine || isValidRequired(control.value, allowEmptyStrings)
            ? null
            : { required: true };
    });
}
/**
 * @param {?} value
 * @param {?} allowEmptyStrings
 * @return {?}
 */
function isValidRequired(value, allowEmptyStrings) {
    if (value || value === 0 || value === false)
        return true;
    if (allowEmptyStrings && value === '')
        return true;
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRvcnMvcmVxdWlyZWQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsbUNBRUM7OztJQURDLGlDQUFlOzs7OztBQUdqQixxQ0FFQzs7O0lBREMsNENBQTRCOzs7Ozs7QUFHOUIsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEVBQTJDO1FBQXpDLCtEQUFpQjtJQUNsRDs7OztJQUFPLFVBQUMsT0FBd0I7UUFDOUIsT0FBTyxPQUFPLENBQUMsUUFBUSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDO1lBQzFFLENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7OztBQUVELFNBQVMsZUFBZSxDQUFDLEtBQVUsRUFBRSxpQkFBMEI7SUFDN0QsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRXpELElBQUksaUJBQWlCLElBQUksS0FBSyxLQUFLLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQztJQUVuRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1aXJlZEVycm9yIHtcclxuICByZXF1aXJlZDogdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1aXJlZE9wdGlvbnMge1xyXG4gIGFsbG93RW1wdHlTdHJpbmdzPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUmVxdWlyZWQoeyBhbGxvd0VtcHR5U3RyaW5ncyB9OiBSZXF1aXJlZE9wdGlvbnMgPSB7fSk6IFZhbGlkYXRvckZuIHtcclxuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFJlcXVpcmVkRXJyb3IgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBjb250cm9sLnByaXN0aW5lIHx8IGlzVmFsaWRSZXF1aXJlZChjb250cm9sLnZhbHVlLCBhbGxvd0VtcHR5U3RyaW5ncylcclxuICAgICAgPyBudWxsXHJcbiAgICAgIDogeyByZXF1aXJlZDogdHJ1ZSB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRSZXF1aXJlZCh2YWx1ZTogYW55LCBhbGxvd0VtcHR5U3RyaW5nczogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHJldHVybiB0cnVlO1xyXG5cclxuICBpZiAoYWxsb3dFbXB0eVN0cmluZ3MgJiYgdmFsdWUgPT09ICcnKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiJdfQ==