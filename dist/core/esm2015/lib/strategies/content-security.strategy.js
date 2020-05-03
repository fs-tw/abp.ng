/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/content-security.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class ContentSecurityStrategy {
    /**
     * @param {?=} nonce
     */
    constructor(nonce) {
        this.nonce = nonce;
    }
}
if (false) {
    /** @type {?} */
    ContentSecurityStrategy.prototype.nonce;
    /**
     * @abstract
     * @param {?} element
     * @return {?}
     */
    ContentSecurityStrategy.prototype.applyCSP = function (element) { };
}
export class LooseContentSecurityStrategy extends ContentSecurityStrategy {
    /**
     * @param {?} nonce
     */
    constructor(nonce) {
        super(nonce);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    applyCSP(element) {
        element.setAttribute('nonce', this.nonce);
    }
}
export class NoContentSecurityStrategy extends ContentSecurityStrategy {
    constructor() {
        super();
    }
    /**
     * @param {?} _
     * @return {?}
     */
    applyCSP(_) { }
}
/** @type {?} */
export const CONTENT_SECURITY_STRATEGY = {
    /**
     * @param {?} nonce
     * @return {?}
     */
    Loose(nonce) {
        return new LooseContentSecurityStrategy(nonce);
    },
    /**
     * @return {?}
     */
    None() {
        return new NoContentSecurityStrategy();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zZWN1cml0eS5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL2NvbnRlbnQtc2VjdXJpdHkuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNLE9BQWdCLHVCQUF1Qjs7OztJQUMzQyxZQUFtQixLQUFjO1FBQWQsVUFBSyxHQUFMLEtBQUssQ0FBUztJQUFHLENBQUM7Q0FHdEM7OztJQUhhLHdDQUFxQjs7Ozs7O0lBRWpDLG9FQUF1RTs7QUFHekUsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHVCQUF1Qjs7OztJQUN2RSxZQUFZLEtBQWE7UUFDdkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBNkM7UUFDcEQsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSx1QkFBdUI7SUFDcEU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLENBQXVDLElBQUcsQ0FBQztDQUNyRDs7QUFFRCxNQUFNLE9BQU8seUJBQXlCLEdBQUc7Ozs7O0lBQ3ZDLEtBQUssQ0FBQyxLQUFhO1FBQ2pCLE9BQU8sSUFBSSw0QkFBNEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBQ0QsSUFBSTtRQUNGLE9BQU8sSUFBSSx5QkFBeUIsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250ZW50U2VjdXJpdHlTdHJhdGVneSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIG5vbmNlPzogc3RyaW5nKSB7fVxyXG5cclxuICBhYnN0cmFjdCBhcHBseUNTUChlbGVtZW50OiBIVE1MU2NyaXB0RWxlbWVudCB8IEhUTUxTdHlsZUVsZW1lbnQpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9vc2VDb250ZW50U2VjdXJpdHlTdHJhdGVneSBleHRlbmRzIENvbnRlbnRTZWN1cml0eVN0cmF0ZWd5IHtcclxuICBjb25zdHJ1Y3Rvcihub25jZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihub25jZSk7XHJcbiAgfVxyXG5cclxuICBhcHBseUNTUChlbGVtZW50OiBIVE1MU2NyaXB0RWxlbWVudCB8IEhUTUxTdHlsZUVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdub25jZScsIHRoaXMubm9uY2UpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vQ29udGVudFNlY3VyaXR5U3RyYXRlZ3kgZXh0ZW5kcyBDb250ZW50U2VjdXJpdHlTdHJhdGVneSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlDU1AoXzogSFRNTFNjcmlwdEVsZW1lbnQgfCBIVE1MU3R5bGVFbGVtZW50KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVEVOVF9TRUNVUklUWV9TVFJBVEVHWSA9IHtcclxuICBMb29zZShub25jZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IExvb3NlQ29udGVudFNlY3VyaXR5U3RyYXRlZ3kobm9uY2UpO1xyXG4gIH0sXHJcbiAgTm9uZSgpIHtcclxuICAgIHJldHVybiBuZXcgTm9Db250ZW50U2VjdXJpdHlTdHJhdGVneSgpO1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==