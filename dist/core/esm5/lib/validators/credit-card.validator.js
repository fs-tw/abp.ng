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
    function (control) {
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
    var checksum = 0;
    /** @type {?} */
    var multiplier = 1;
    for (var i = value.length; i > 0; i--) {
        /** @type {?} */
        var digit = Number(value[i - 1]) * multiplier;
        /* tslint:disable-next-line:no-bitwise */
        checksum += (digit % 10) + ~~(digit / 10);
        multiplier = (multiplier * 2) % 3;
    }
    return checksum % 10 === 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0LWNhcmQudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRvcnMvY3JlZGl0LWNhcmQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEscUNBRUM7OztJQURDLHFDQUFpQjs7Ozs7QUFHbkIsTUFBTSxVQUFVLGtCQUFrQjtJQUNoQzs7OztJQUFPLFVBQUMsT0FBd0I7UUFDOUIsSUFBSSxPQUFPLENBQUMsUUFBUTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRWxDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFbkUsT0FBTyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDaEYsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEtBQWE7SUFDdEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRW5DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7O1FBRTVDLFFBQVEsR0FBRyxDQUFDOztRQUNaLFVBQVUsR0FBRyxDQUFDO0lBRWxCLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUMvQixLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVO1FBQy9DLHlDQUF5QztRQUN6QyxRQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRTFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbkM7SUFFRCxPQUFPLFFBQVEsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcmVkaXRDYXJkRXJyb3Ige1xyXG4gIGNyZWRpdENhcmQ6IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNyZWRpdENhcmQoKTogVmFsaWRhdG9yRm4ge1xyXG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogQ3JlZGl0Q2FyZEVycm9yIHwgbnVsbCA9PiB7XHJcbiAgICBpZiAoY29udHJvbC5wcmlzdGluZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgaWYgKFsnJywgbnVsbCwgdW5kZWZpbmVkXS5pbmRleE9mKGNvbnRyb2wudmFsdWUpID4gLTEpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiBpc1ZhbGlkQ3JlZGl0Q2FyZChTdHJpbmcoY29udHJvbC52YWx1ZSkpID8gbnVsbCA6IHsgY3JlZGl0Q2FyZDogdHJ1ZSB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRDcmVkaXRDYXJkKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1sgLV0vZywgJycpO1xyXG5cclxuICBpZiAoIS9eWzAtOV17MTMsMTl9JC8udGVzdCh2YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgbGV0IGNoZWNrc3VtID0gMDtcclxuICBsZXQgbXVsdGlwbGllciA9IDE7XHJcblxyXG4gIGZvciAobGV0IGkgPSB2YWx1ZS5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcclxuICAgIGNvbnN0IGRpZ2l0ID0gTnVtYmVyKHZhbHVlW2kgLSAxXSkgKiBtdWx0aXBsaWVyO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2UgKi9cclxuICAgIGNoZWNrc3VtICs9IChkaWdpdCAlIDEwKSArIH5+KGRpZ2l0IC8gMTApO1xyXG5cclxuICAgIG11bHRpcGxpZXIgPSAobXVsdGlwbGllciAqIDIpICUgMztcclxuICB9XHJcblxyXG4gIHJldHVybiBjaGVja3N1bSAlIDEwID09PSAwO1xyXG59XHJcbiJdfQ==