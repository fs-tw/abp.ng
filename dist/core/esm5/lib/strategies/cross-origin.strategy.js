/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/cross-origin.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CrossOriginStrategy = /** @class */ (function () {
    function CrossOriginStrategy(crossorigin, integrity) {
        this.crossorigin = crossorigin;
        this.integrity = integrity;
    }
    /**
     * @template T
     * @param {?} element
     * @return {?}
     */
    CrossOriginStrategy.prototype.setCrossOrigin = /**
     * @template T
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this.integrity)
            element.setAttribute('integrity', this.integrity);
        element.setAttribute('crossorigin', this.crossorigin);
    };
    return CrossOriginStrategy;
}());
export { CrossOriginStrategy };
if (false) {
    /** @type {?} */
    CrossOriginStrategy.prototype.crossorigin;
    /** @type {?} */
    CrossOriginStrategy.prototype.integrity;
}
/** @type {?} */
export var CROSS_ORIGIN_STRATEGY = {
    Anonymous: /**
     * @param {?=} integrity
     * @return {?}
     */
    function (integrity) {
        return new CrossOriginStrategy('anonymous', integrity);
    },
    UseCredentials: /**
     * @param {?=} integrity
     * @return {?}
     */
    function (integrity) {
        return new CrossOriginStrategy('use-credentials', integrity);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvc3Mtb3JpZ2luLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0cmF0ZWdpZXMvY3Jvc3Mtb3JpZ2luLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7SUFDRSw2QkFBbUIsV0FBNEMsRUFBUyxTQUFrQjtRQUF2RSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUM7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFTO0lBQUcsQ0FBQzs7Ozs7O0lBRTlGLDRDQUFjOzs7OztJQUFkLFVBQXNDLE9BQVU7UUFDOUMsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RSxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7Ozs7SUFOYSwwQ0FBbUQ7O0lBQUUsd0NBQXlCOzs7QUFRNUYsTUFBTSxLQUFPLHFCQUFxQixHQUFHO0lBQ25DLFNBQVM7Ozs7SUFBVCxVQUFVLFNBQWtCO1FBQzFCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELGNBQWM7Ozs7SUFBZCxVQUFlLFNBQWtCO1FBQy9CLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3Jvc3NPcmlnaW5TdHJhdGVneSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNyb3Nzb3JpZ2luOiAnYW5vbnltb3VzJyB8ICd1c2UtY3JlZGVudGlhbHMnLCBwdWJsaWMgaW50ZWdyaXR5Pzogc3RyaW5nKSB7fVxyXG5cclxuICBzZXRDcm9zc09yaWdpbjxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGVsZW1lbnQ6IFQpIHtcclxuICAgIGlmICh0aGlzLmludGVncml0eSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ludGVncml0eScsIHRoaXMuaW50ZWdyaXR5KTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsIHRoaXMuY3Jvc3NvcmlnaW4pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENST1NTX09SSUdJTl9TVFJBVEVHWSA9IHtcclxuICBBbm9ueW1vdXMoaW50ZWdyaXR5Pzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IENyb3NzT3JpZ2luU3RyYXRlZ3koJ2Fub255bW91cycsIGludGVncml0eSk7XHJcbiAgfSxcclxuICBVc2VDcmVkZW50aWFscyhpbnRlZ3JpdHk/OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgQ3Jvc3NPcmlnaW5TdHJhdGVneSgndXNlLWNyZWRlbnRpYWxzJywgaW50ZWdyaXR5KTtcclxuICB9LFxyXG59O1xyXG4iXX0=