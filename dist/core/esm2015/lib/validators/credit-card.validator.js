/**
 * @fileoverview added by tsickle
 * Generated from: lib/validators/credit-card.validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function CreditCardError() { }
if (false) {
    /** @type {?} */
    CreditCardError.prototype.creditCard;
}
/**
 * @return {?}
 */
export function validateCreditCard() {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        if (control.pristine)
            return null;
        if (['', null, undefined].indexOf(control.value) > -1)
            return null;
        return isValidCreditCard(String(control.value)) ? null : { creditCard: true };
    });
}
/**
 * @param {?} value
 * @return {?}
 */
function isValidCreditCard(value) {
    value = value.replace(/[ -]/g, '');
    if (!/^[0-9]{13,19}$/.test(value))
        return false;
    /** @type {?} */
    let checksum = 0;
    /** @type {?} */
    let multiplier = 1;
    for (let i = value.length; i > 0; i--) {
        /** @type {?} */
        const digit = Number(value[i - 1]) * multiplier;
        /* tslint:disable-next-line:no-bitwise */
        checksum += (digit % 10) + ~~(digit / 10);
        multiplier = (multiplier * 2) % 3;
    }
    return checksum % 10 === 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0LWNhcmQudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRvcnMvY3JlZGl0LWNhcmQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEscUNBRUM7OztJQURDLHFDQUFpQjs7Ozs7QUFHbkIsTUFBTSxVQUFVLGtCQUFrQjtJQUNoQzs7OztJQUFPLENBQUMsT0FBd0IsRUFBMEIsRUFBRTtRQUMxRCxJQUFJLE9BQU8sQ0FBQyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFbEMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVuRSxPQUFPLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNoRixDQUFDLEVBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsaUJBQWlCLENBQUMsS0FBYTtJQUN0QyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQzs7UUFFNUMsUUFBUSxHQUFHLENBQUM7O1FBQ1osVUFBVSxHQUFHLENBQUM7SUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2NBQy9CLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVU7UUFDL0MseUNBQXlDO1FBQ3pDLFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFMUMsVUFBVSxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQztJQUVELE9BQU8sUUFBUSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyZWRpdENhcmRFcnJvciB7XHJcbiAgY3JlZGl0Q2FyZDogdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ3JlZGl0Q2FyZCgpOiBWYWxpZGF0b3JGbiB7XHJcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBDcmVkaXRDYXJkRXJyb3IgfCBudWxsID0+IHtcclxuICAgIGlmIChjb250cm9sLnByaXN0aW5lKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBpZiAoWycnLCBudWxsLCB1bmRlZmluZWRdLmluZGV4T2YoY29udHJvbC52YWx1ZSkgPiAtMSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsaWRDcmVkaXRDYXJkKFN0cmluZyhjb250cm9sLnZhbHVlKSkgPyBudWxsIDogeyBjcmVkaXRDYXJkOiB0cnVlIH07XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZENyZWRpdENhcmQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvWyAtXS9nLCAnJyk7XHJcblxyXG4gIGlmICghL15bMC05XXsxMywxOX0kLy50ZXN0KHZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBsZXQgY2hlY2tzdW0gPSAwO1xyXG4gIGxldCBtdWx0aXBsaWVyID0gMTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IHZhbHVlLmxlbmd0aDsgaSA+IDA7IGktLSkge1xyXG4gICAgY29uc3QgZGlnaXQgPSBOdW1iZXIodmFsdWVbaSAtIDFdKSAqIG11bHRpcGxpZXI7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZSAqL1xyXG4gICAgY2hlY2tzdW0gKz0gKGRpZ2l0ICUgMTApICsgfn4oZGlnaXQgLyAxMCk7XHJcblxyXG4gICAgbXVsdGlwbGllciA9IChtdWx0aXBsaWVyICogMikgJSAzO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNoZWNrc3VtICUgMTAgPT09IDA7XHJcbn1cclxuIl19