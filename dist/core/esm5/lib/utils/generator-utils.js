/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/generator-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable: no-bitwise
/**
 * @param {?=} a
 * @return {?}
 */
export function uuid(a) {
    return a
        ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
        : ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}
/**
 * @param {?} value
 * @return {?}
 */
export function generateHash(value) {
    /** @type {?} */
    var hashed = 0;
    /** @type {?} */
    var charCode;
    for (var i = 0; i < value.length; i++) {
        charCode = value.charCodeAt(i);
        hashed = (hashed << 5) - hashed + charCode;
        hashed |= 0;
    }
    return hashed;
}
/**
 * @param {?=} length
 * @return {?}
 */
export function generatePassword(length) {
    if (length === void 0) { length = 8; }
    length = Math.min(Math.max(4, length), 128);
    /** @type {?} */
    var lowers = 'abcdefghijklmnopqrstuvwxyz';
    /** @type {?} */
    var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    /** @type {?} */
    var numbers = '0123456789';
    /** @type {?} */
    var specials = '!@#$%&*()_+{}<>?[]./';
    /** @type {?} */
    var all = lowers + uppers + numbers + specials;
    /** @type {?} */
    var getRandom = (/**
     * @param {?} chrSet
     * @return {?}
     */
    function (chrSet) { return chrSet[Math.floor(Math.random() * chrSet.length)]; });
    /** @type {?} */
    var password = Array({ length: length });
    password[0] = getRandom(lowers);
    password[1] = getRandom(uppers);
    password[2] = getRandom(numbers);
    password[3] = getRandom(specials);
    for (var i = 4; i < length; i++) {
        password[i] = getRandom(all);
    }
    return password.sort((/**
     * @return {?}
     */
    function () { return 0.5 - Math.random(); })).join('');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2dlbmVyYXRvci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLElBQUksQ0FBQyxDQUFPO0lBQzFCLE9BQU8sQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RFLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUFhOztRQUNwQyxNQUFNLEdBQUcsQ0FBQzs7UUFDVixRQUFnQjtJQUVwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUMzQyxNQUFNLElBQUksQ0FBQyxDQUFDO0tBQ2I7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxNQUFVO0lBQVYsdUJBQUEsRUFBQSxVQUFVO0lBQ3pDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztRQUV0QyxNQUFNLEdBQUcsNEJBQTRCOztRQUNyQyxNQUFNLEdBQUcsNEJBQTRCOztRQUNyQyxPQUFPLEdBQUcsWUFBWTs7UUFDdEIsUUFBUSxHQUFHLHNCQUFzQjs7UUFDakMsR0FBRyxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTyxHQUFHLFFBQVE7O1FBRTFDLFNBQVM7Ozs7SUFBRyxVQUFDLE1BQWMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBakQsQ0FBaUQsQ0FBQTs7UUFFakYsUUFBUSxHQUFHLEtBQUssQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7SUFDbEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDOUI7SUFFRCxPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7SUFBQyxjQUFNLE9BQUEsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBbkIsQ0FBbUIsRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IG5vLWJpdHdpc2VcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1dWlkKGE/OiBhbnkpOiBzdHJpbmcge1xyXG4gIHJldHVybiBhXHJcbiAgICA/IChhIF4gKChNYXRoLnJhbmRvbSgpICogMTYpID4+IChhIC8gNCkpKS50b1N0cmluZygxNilcclxuICAgIDogKCcnICsgMWU3ICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIHV1aWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIYXNoKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gIGxldCBoYXNoZWQgPSAwO1xyXG4gIGxldCBjaGFyQ29kZTogbnVtYmVyO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjaGFyQ29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaSk7XHJcbiAgICBoYXNoZWQgPSAoaGFzaGVkIDw8IDUpIC0gaGFzaGVkICsgY2hhckNvZGU7XHJcbiAgICBoYXNoZWQgfD0gMDtcclxuICB9XHJcbiAgcmV0dXJuIGhhc2hlZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGFzc3dvcmQobGVuZ3RoID0gOCkge1xyXG4gIGxlbmd0aCA9IE1hdGgubWluKE1hdGgubWF4KDQsIGxlbmd0aCksIDEyOCk7XHJcblxyXG4gIGNvbnN0IGxvd2VycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XHJcbiAgY29uc3QgdXBwZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcclxuICBjb25zdCBudW1iZXJzID0gJzAxMjM0NTY3ODknO1xyXG4gIGNvbnN0IHNwZWNpYWxzID0gJyFAIyQlJiooKV8re308Pj9bXS4vJztcclxuICBjb25zdCBhbGwgPSBsb3dlcnMgKyB1cHBlcnMgKyBudW1iZXJzICsgc3BlY2lhbHM7XHJcblxyXG4gIGNvbnN0IGdldFJhbmRvbSA9IChjaHJTZXQ6IHN0cmluZykgPT4gY2hyU2V0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoclNldC5sZW5ndGgpXTtcclxuXHJcbiAgY29uc3QgcGFzc3dvcmQgPSBBcnJheSh7IGxlbmd0aCB9KTtcclxuICBwYXNzd29yZFswXSA9IGdldFJhbmRvbShsb3dlcnMpO1xyXG4gIHBhc3N3b3JkWzFdID0gZ2V0UmFuZG9tKHVwcGVycyk7XHJcbiAgcGFzc3dvcmRbMl0gPSBnZXRSYW5kb20obnVtYmVycyk7XHJcbiAgcGFzc3dvcmRbM10gPSBnZXRSYW5kb20oc3BlY2lhbHMpO1xyXG5cclxuICBmb3IgKGxldCBpID0gNDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBwYXNzd29yZFtpXSA9IGdldFJhbmRvbShhbGwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhc3N3b3JkLnNvcnQoKCkgPT4gMC41IC0gTWF0aC5yYW5kb20oKSkuam9pbignJyk7XHJcbn1cclxuIl19