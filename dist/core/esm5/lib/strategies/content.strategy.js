/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/content.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CONTENT_SECURITY_STRATEGY } from './content-security.strategy';
import { DOM_STRATEGY } from './dom.strategy';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
ContentStrategy = /** @class */ (function () {
    function ContentStrategy(content, domStrategy, contentSecurityStrategy) {
        if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToHead(); }
        if (contentSecurityStrategy === void 0) { contentSecurityStrategy = CONTENT_SECURITY_STRATEGY.None(); }
        this.content = content;
        this.domStrategy = domStrategy;
        this.contentSecurityStrategy = contentSecurityStrategy;
    }
    /**
     * @return {?}
     */
    ContentStrategy.prototype.insertElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.createElement();
        this.contentSecurityStrategy.applyCSP(element);
        this.domStrategy.insertElement(element);
        return element;
    };
    return ContentStrategy;
}());
/**
 * @abstract
 * @template T
 */
export { ContentStrategy };
if (false) {
    /** @type {?} */
    ContentStrategy.prototype.content;
    /**
     * @type {?}
     * @protected
     */
    ContentStrategy.prototype.domStrategy;
    /**
     * @type {?}
     * @protected
     */
    ContentStrategy.prototype.contentSecurityStrategy;
    /**
     * @abstract
     * @return {?}
     */
    ContentStrategy.prototype.createElement = function () { };
}
var StyleContentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(StyleContentStrategy, _super);
    function StyleContentStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    StyleContentStrategy.prototype.createElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = document.createElement('style');
        element.textContent = this.content;
        return element;
    };
    return StyleContentStrategy;
}(ContentStrategy));
export { StyleContentStrategy };
var ScriptContentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(ScriptContentStrategy, _super);
    function ScriptContentStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ScriptContentStrategy.prototype.createElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = document.createElement('script');
        element.textContent = this.content;
        return element;
    };
    return ScriptContentStrategy;
}(ContentStrategy));
export { ScriptContentStrategy };
/** @type {?} */
export var CONTENT_STRATEGY = {
    AppendScriptToBody: /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        return new ScriptContentStrategy(content, DOM_STRATEGY.AppendToBody());
    },
    AppendScriptToHead: /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        return new ScriptContentStrategy(content, DOM_STRATEGY.AppendToHead());
    },
    AppendStyleToHead: /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        return new StyleContentStrategy(content, DOM_STRATEGY.AppendToHead());
    },
    PrependStyleToHead: /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        return new StyleContentStrategy(content, DOM_STRATEGY.PrependToHead());
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL2NvbnRlbnQuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUEyQix5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pHLE9BQU8sRUFBZSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFM0Q7Ozs7O0lBQ0UseUJBQ1MsT0FBZSxFQUNaLFdBQXNELEVBQ3RELHVCQUFtRjtRQURuRiw0QkFBQSxFQUFBLGNBQTJCLFlBQVksQ0FBQyxZQUFZLEVBQUU7UUFDdEQsd0NBQUEsRUFBQSwwQkFBbUQseUJBQXlCLENBQUMsSUFBSSxFQUFFO1FBRnRGLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDWixnQkFBVyxHQUFYLFdBQVcsQ0FBMkM7UUFDdEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUE0RDtJQUM1RixDQUFDOzs7O0lBSUosdUNBQWE7OztJQUFiOztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBRXBDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQzs7Ozs7Ozs7SUFmRyxrQ0FBc0I7Ozs7O0lBQ3RCLHNDQUFnRTs7Ozs7SUFDaEUsa0RBQTZGOzs7OztJQUcvRiwwREFBNEI7O0FBWTlCO0lBQTBDLGdEQUFpQztJQUEzRTs7SUFPQSxDQUFDOzs7O0lBTkMsNENBQWE7OztJQUFiOztZQUNRLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMvQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFbkMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQVBELENBQTBDLGVBQWUsR0FPeEQ7O0FBRUQ7SUFBMkMsaURBQWtDO0lBQTdFOztJQU9BLENBQUM7Ozs7SUFOQyw2Q0FBYTs7O0lBQWI7O1lBQ1EsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUVuQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBMkMsZUFBZSxHQU96RDs7O0FBRUQsTUFBTSxLQUFPLGdCQUFnQixHQUFHO0lBQzlCLGtCQUFrQjs7OztJQUFsQixVQUFtQixPQUFlO1FBQ2hDLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUNELGtCQUFrQjs7OztJQUFsQixVQUFtQixPQUFlO1FBQ2hDLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUNELGlCQUFpQjs7OztJQUFqQixVQUFrQixPQUFlO1FBQy9CLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNELGtCQUFrQjs7OztJQUFsQixVQUFtQixPQUFlO1FBQ2hDLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudFNlY3VyaXR5U3RyYXRlZ3ksIENPTlRFTlRfU0VDVVJJVFlfU1RSQVRFR1kgfSBmcm9tICcuL2NvbnRlbnQtc2VjdXJpdHkuc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBEb21TdHJhdGVneSwgRE9NX1NUUkFURUdZIH0gZnJvbSAnLi9kb20uc3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRlbnRTdHJhdGVneTxUIGV4dGVuZHMgSFRNTFNjcmlwdEVsZW1lbnQgfCBIVE1MU3R5bGVFbGVtZW50ID0gYW55PiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY29udGVudDogc3RyaW5nLFxyXG4gICAgcHJvdGVjdGVkIGRvbVN0cmF0ZWd5OiBEb21TdHJhdGVneSA9IERPTV9TVFJBVEVHWS5BcHBlbmRUb0hlYWQoKSxcclxuICAgIHByb3RlY3RlZCBjb250ZW50U2VjdXJpdHlTdHJhdGVneTogQ29udGVudFNlY3VyaXR5U3RyYXRlZ3kgPSBDT05URU5UX1NFQ1VSSVRZX1NUUkFURUdZLk5vbmUoKSxcclxuICApIHt9XHJcblxyXG4gIGFic3RyYWN0IGNyZWF0ZUVsZW1lbnQoKTogVDtcclxuXHJcbiAgaW5zZXJ0RWxlbWVudCgpOiBUIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICB0aGlzLmNvbnRlbnRTZWN1cml0eVN0cmF0ZWd5LmFwcGx5Q1NQKGVsZW1lbnQpO1xyXG4gICAgdGhpcy5kb21TdHJhdGVneS5pbnNlcnRFbGVtZW50KGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0eWxlQ29udGVudFN0cmF0ZWd5IGV4dGVuZHMgQ29udGVudFN0cmF0ZWd5PEhUTUxTdHlsZUVsZW1lbnQ+IHtcclxuICBjcmVhdGVFbGVtZW50KCk6IEhUTUxTdHlsZUVsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5jb250ZW50O1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmlwdENvbnRlbnRTdHJhdGVneSBleHRlbmRzIENvbnRlbnRTdHJhdGVneTxIVE1MU2NyaXB0RWxlbWVudD4ge1xyXG4gIGNyZWF0ZUVsZW1lbnQoKTogSFRNTFNjcmlwdEVsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuY29udGVudDtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1NUUkFURUdZID0ge1xyXG4gIEFwcGVuZFNjcmlwdFRvQm9keShjb250ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgU2NyaXB0Q29udGVudFN0cmF0ZWd5KGNvbnRlbnQsIERPTV9TVFJBVEVHWS5BcHBlbmRUb0JvZHkoKSk7XHJcbiAgfSxcclxuICBBcHBlbmRTY3JpcHRUb0hlYWQoY29udGVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFNjcmlwdENvbnRlbnRTdHJhdGVneShjb250ZW50LCBET01fU1RSQVRFR1kuQXBwZW5kVG9IZWFkKCkpO1xyXG4gIH0sXHJcbiAgQXBwZW5kU3R5bGVUb0hlYWQoY29udGVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0eWxlQ29udGVudFN0cmF0ZWd5KGNvbnRlbnQsIERPTV9TVFJBVEVHWS5BcHBlbmRUb0hlYWQoKSk7XHJcbiAgfSxcclxuICBQcmVwZW5kU3R5bGVUb0hlYWQoY29udGVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0eWxlQ29udGVudFN0cmF0ZWd5KGNvbnRlbnQsIERPTV9TVFJBVEVHWS5QcmVwZW5kVG9IZWFkKCkpO1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==