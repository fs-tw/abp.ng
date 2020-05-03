/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/content-security.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @abstract
 */
var /**
 * @abstract
 */
ContentSecurityStrategy = /** @class */ (function () {
    function ContentSecurityStrategy(nonce) {
        this.nonce = nonce;
    }
    return ContentSecurityStrategy;
}());
/**
 * @abstract
 */
export { ContentSecurityStrategy };
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
var LooseContentSecurityStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(LooseContentSecurityStrategy, _super);
    function LooseContentSecurityStrategy(nonce) {
        return _super.call(this, nonce) || this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    LooseContentSecurityStrategy.prototype.applyCSP = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.setAttribute('nonce', this.nonce);
    };
    return LooseContentSecurityStrategy;
}(ContentSecurityStrategy));
export { LooseContentSecurityStrategy };
var NoContentSecurityStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(NoContentSecurityStrategy, _super);
    function NoContentSecurityStrategy() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} _
     * @return {?}
     */
    NoContentSecurityStrategy.prototype.applyCSP = /**
     * @param {?} _
     * @return {?}
     */
    function (_) { };
    return NoContentSecurityStrategy;
}(ContentSecurityStrategy));
export { NoContentSecurityStrategy };
/** @type {?} */
export var CONTENT_SECURITY_STRATEGY = {
    Loose: /**
     * @param {?} nonce
     * @return {?}
     */
    function (nonce) {
        return new LooseContentSecurityStrategy(nonce);
    },
    None: /**
     * @return {?}
     */
    function () {
        return new NoContentSecurityStrategy();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zZWN1cml0eS5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL2NvbnRlbnQtc2VjdXJpdHkuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7SUFDRSxpQ0FBbUIsS0FBYztRQUFkLFVBQUssR0FBTCxLQUFLLENBQVM7SUFBRyxDQUFDO0lBR3ZDLDhCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIYSx3Q0FBcUI7Ozs7OztJQUVqQyxvRUFBdUU7O0FBR3pFO0lBQWtELHdEQUF1QjtJQUN2RSxzQ0FBWSxLQUFhO2VBQ3ZCLGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsK0NBQVE7Ozs7SUFBUixVQUFTLE9BQTZDO1FBQ3BELE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0gsbUNBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBa0QsdUJBQXVCLEdBUXhFOztBQUVEO0lBQStDLHFEQUF1QjtJQUNwRTtlQUNFLGlCQUFPO0lBQ1QsQ0FBQzs7Ozs7SUFFRCw0Q0FBUTs7OztJQUFSLFVBQVMsQ0FBdUMsSUFBRyxDQUFDO0lBQ3RELGdDQUFDO0FBQUQsQ0FBQyxBQU5ELENBQStDLHVCQUF1QixHQU1yRTs7O0FBRUQsTUFBTSxLQUFPLHlCQUF5QixHQUFHO0lBQ3ZDLEtBQUs7Ozs7SUFBTCxVQUFNLEtBQWE7UUFDakIsT0FBTyxJQUFJLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxJQUFJOzs7O1FBQ0YsT0FBTyxJQUFJLHlCQUF5QixFQUFFLENBQUM7SUFDekMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRlbnRTZWN1cml0eVN0cmF0ZWd5IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbm9uY2U/OiBzdHJpbmcpIHt9XHJcblxyXG4gIGFic3RyYWN0IGFwcGx5Q1NQKGVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50IHwgSFRNTFN0eWxlRWxlbWVudCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb29zZUNvbnRlbnRTZWN1cml0eVN0cmF0ZWd5IGV4dGVuZHMgQ29udGVudFNlY3VyaXR5U3RyYXRlZ3kge1xyXG4gIGNvbnN0cnVjdG9yKG5vbmNlOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKG5vbmNlKTtcclxuICB9XHJcblxyXG4gIGFwcGx5Q1NQKGVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50IHwgSFRNTFN0eWxlRWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgdGhpcy5ub25jZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm9Db250ZW50U2VjdXJpdHlTdHJhdGVneSBleHRlbmRzIENvbnRlbnRTZWN1cml0eVN0cmF0ZWd5IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBhcHBseUNTUChfOiBIVE1MU2NyaXB0RWxlbWVudCB8IEhUTUxTdHlsZUVsZW1lbnQpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1NFQ1VSSVRZX1NUUkFURUdZID0ge1xyXG4gIExvb3NlKG5vbmNlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgTG9vc2VDb250ZW50U2VjdXJpdHlTdHJhdGVneShub25jZSk7XHJcbiAgfSxcclxuICBOb25lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBOb0NvbnRlbnRTZWN1cml0eVN0cmF0ZWd5KCk7XHJcbiAgfSxcclxufTtcclxuIl19