/**
 * @fileoverview added by tsickle
 * Generated from: lib/shared/utils/yuan.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 转化成RMB元字符串
 * @param {?} value
 * @param {?=} digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 * @return {?}
 */
// tslint:disable-next-line:no-any
export function yuan(value, digits = 2) {
    if (typeof value === 'number') {
        value = value.toFixed(digits);
    }
    return `&yen ${value}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXVhbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZy1hbGFpbi8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvdXRpbHMveXVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFLQSxNQUFNLFVBQVUsSUFBSSxDQUFDLEtBQVUsRUFBRSxTQUFpQixDQUFDO0lBQ2pELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0lBQ0QsT0FBTyxRQUFRLEtBQUssRUFBRSxDQUFDO0FBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6L2s5YyW5oiQUk1C5YWD5a2X56ym5LiyXHJcbiAqIEBwYXJhbSBkaWdpdHMg5b2T5pWw5a2X57G75Z6L5pe277yM5YWB6K645oyH5a6a5bCP5pWw54K55ZCO5pWw5a2X55qE5Liq5pWw77yM6buY6K6kMuS9jeWwj+aVsFxyXG4gKi9cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgZnVuY3Rpb24geXVhbih2YWx1ZTogYW55LCBkaWdpdHM6IG51bWJlciA9IDIpOiBzdHJpbmcge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlLnRvRml4ZWQoZGlnaXRzKTtcclxuICB9XHJcbiAgcmV0dXJuIGAmeWVuICR7dmFsdWV9YDtcclxufVxyXG4iXX0=