/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/loading.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { fromLazyLoad } from '../utils';
import { CROSS_ORIGIN_STRATEGY } from './cross-origin.strategy';
import { DOM_STRATEGY } from './dom.strategy';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
LoadingStrategy = /** @class */ (function () {
    function LoadingStrategy(path, domStrategy, crossOriginStrategy) {
        if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToHead(); }
        if (crossOriginStrategy === void 0) { crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous(); }
        this.path = path;
        this.domStrategy = domStrategy;
        this.crossOriginStrategy = crossOriginStrategy;
    }
    /**
     * @template E
     * @return {?}
     */
    LoadingStrategy.prototype.createStream = /**
     * @template E
     * @return {?}
     */
    function () {
        var _this = this;
        return of(null).pipe(switchMap((/**
         * @return {?}
         */
        function () {
            return fromLazyLoad(_this.createElement(), _this.domStrategy, _this.crossOriginStrategy);
        })));
    };
    return LoadingStrategy;
}());
/**
 * @abstract
 * @template T
 */
export { LoadingStrategy };
if (false) {
    /** @type {?} */
    LoadingStrategy.prototype.path;
    /**
     * @type {?}
     * @protected
     */
    LoadingStrategy.prototype.domStrategy;
    /**
     * @type {?}
     * @protected
     */
    LoadingStrategy.prototype.crossOriginStrategy;
    /**
     * @abstract
     * @return {?}
     */
    LoadingStrategy.prototype.createElement = function () { };
}
var ScriptLoadingStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(ScriptLoadingStrategy, _super);
    function ScriptLoadingStrategy(src, domStrategy, crossOriginStrategy) {
        return _super.call(this, src, domStrategy, crossOriginStrategy) || this;
    }
    /**
     * @return {?}
     */
    ScriptLoadingStrategy.prototype.createElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = document.createElement('script');
        element.src = this.path;
        return element;
    };
    return ScriptLoadingStrategy;
}(LoadingStrategy));
export { ScriptLoadingStrategy };
var StyleLoadingStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(StyleLoadingStrategy, _super);
    function StyleLoadingStrategy(href, domStrategy, crossOriginStrategy) {
        return _super.call(this, href, domStrategy, crossOriginStrategy) || this;
    }
    /**
     * @return {?}
     */
    StyleLoadingStrategy.prototype.createElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = document.createElement('link');
        element.rel = 'stylesheet';
        element.href = this.path;
        return element;
    };
    return StyleLoadingStrategy;
}(LoadingStrategy));
export { StyleLoadingStrategy };
/** @type {?} */
export var LOADING_STRATEGY = {
    AppendAnonymousScriptToBody: /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    function (src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToBody(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    AppendAnonymousScriptToHead: /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    function (src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    AppendAnonymousStyleToHead: /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    function (src, integrity) {
        return new StyleLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    PrependAnonymousScriptToHead: /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    function (src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.PrependToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    PrependAnonymousStyleToHead: /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    function (src, integrity) {
        return new StyleLoadingStrategy(src, DOM_STRATEGY.PrependToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL2xvYWRpbmcuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQXVCLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckYsT0FBTyxFQUFlLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUUzRDs7Ozs7SUFDRSx5QkFDUyxJQUFZLEVBQ1QsV0FBc0QsRUFDdEQsbUJBQTRFO1FBRDVFLDRCQUFBLEVBQUEsY0FBMkIsWUFBWSxDQUFDLFlBQVksRUFBRTtRQUN0RCxvQ0FBQSxFQUFBLHNCQUEyQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUU7UUFGL0UsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNULGdCQUFXLEdBQVgsV0FBVyxDQUEyQztRQUN0RCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXlEO0lBQ3JGLENBQUM7Ozs7O0lBSUosc0NBQVk7Ozs7SUFBWjtRQUFBLGlCQU1DO1FBTEMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNsQixTQUFTOzs7UUFBQztZQUNSLE9BQUEsWUFBWSxDQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUFqRixDQUFpRixFQUNsRixDQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDOzs7Ozs7OztJQWRHLCtCQUFtQjs7Ozs7SUFDbkIsc0NBQWdFOzs7OztJQUNoRSw4Q0FBc0Y7Ozs7O0lBR3hGLDBEQUE0Qjs7QUFXOUI7SUFBMkMsaURBQWtDO0lBQzNFLCtCQUFZLEdBQVcsRUFBRSxXQUF5QixFQUFFLG1CQUF5QztlQUMzRixrQkFBTSxHQUFHLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7O1lBQ1EsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV4QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBMkMsZUFBZSxHQVd6RDs7QUFFRDtJQUEwQyxnREFBZ0M7SUFDeEUsOEJBQVksSUFBWSxFQUFFLFdBQXlCLEVBQUUsbUJBQXlDO2VBQzVGLGtCQUFNLElBQUksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELDRDQUFhOzs7SUFBYjs7WUFDUSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7UUFDM0IsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXpCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFaRCxDQUEwQyxlQUFlLEdBWXhEOzs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUc7SUFDOUIsMkJBQTJCOzs7OztJQUEzQixVQUE0QixHQUFXLEVBQUUsU0FBa0I7UUFDekQsT0FBTyxJQUFJLHFCQUFxQixDQUM5QixHQUFHLEVBQ0gsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUMzQixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDO0lBQ0QsMkJBQTJCOzs7OztJQUEzQixVQUE0QixHQUFXLEVBQUUsU0FBa0I7UUFDekQsT0FBTyxJQUFJLHFCQUFxQixDQUM5QixHQUFHLEVBQ0gsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUMzQixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDO0lBQ0QsMEJBQTBCOzs7OztJQUExQixVQUEyQixHQUFXLEVBQUUsU0FBa0I7UUFDeEQsT0FBTyxJQUFJLG9CQUFvQixDQUM3QixHQUFHLEVBQ0gsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUMzQixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDO0lBQ0QsNEJBQTRCOzs7OztJQUE1QixVQUE2QixHQUFXLEVBQUUsU0FBa0I7UUFDMUQsT0FBTyxJQUFJLHFCQUFxQixDQUM5QixHQUFHLEVBQ0gsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUM1QixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDO0lBQ0QsMkJBQTJCOzs7OztJQUEzQixVQUE0QixHQUFXLEVBQUUsU0FBa0I7UUFDekQsT0FBTyxJQUFJLG9CQUFvQixDQUM3QixHQUFHLEVBQ0gsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUM1QixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGZyb21MYXp5TG9hZCB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgQ3Jvc3NPcmlnaW5TdHJhdGVneSwgQ1JPU1NfT1JJR0lOX1NUUkFURUdZIH0gZnJvbSAnLi9jcm9zcy1vcmlnaW4uc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBEb21TdHJhdGVneSwgRE9NX1NUUkFURUdZIH0gZnJvbSAnLi9kb20uc3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvYWRpbmdTdHJhdGVneTxUIGV4dGVuZHMgSFRNTFNjcmlwdEVsZW1lbnQgfCBIVE1MTGlua0VsZW1lbnQgPSBhbnk+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmcsXHJcbiAgICBwcm90ZWN0ZWQgZG9tU3RyYXRlZ3k6IERvbVN0cmF0ZWd5ID0gRE9NX1NUUkFURUdZLkFwcGVuZFRvSGVhZCgpLFxyXG4gICAgcHJvdGVjdGVkIGNyb3NzT3JpZ2luU3RyYXRlZ3k6IENyb3NzT3JpZ2luU3RyYXRlZ3kgPSBDUk9TU19PUklHSU5fU1RSQVRFR1kuQW5vbnltb3VzKCksXHJcbiAgKSB7fVxyXG5cclxuICBhYnN0cmFjdCBjcmVhdGVFbGVtZW50KCk6IFQ7XHJcblxyXG4gIGNyZWF0ZVN0cmVhbTxFIGV4dGVuZHMgRXZlbnQ+KCk6IE9ic2VydmFibGU8RT4ge1xyXG4gICAgcmV0dXJuIG9mKG51bGwpLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcCgoKSA9PlxyXG4gICAgICAgIGZyb21MYXp5TG9hZDxFPih0aGlzLmNyZWF0ZUVsZW1lbnQoKSwgdGhpcy5kb21TdHJhdGVneSwgdGhpcy5jcm9zc09yaWdpblN0cmF0ZWd5KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyaXB0TG9hZGluZ1N0cmF0ZWd5IGV4dGVuZHMgTG9hZGluZ1N0cmF0ZWd5PEhUTUxTY3JpcHRFbGVtZW50PiB7XHJcbiAgY29uc3RydWN0b3Ioc3JjOiBzdHJpbmcsIGRvbVN0cmF0ZWd5PzogRG9tU3RyYXRlZ3ksIGNyb3NzT3JpZ2luU3RyYXRlZ3k/OiBDcm9zc09yaWdpblN0cmF0ZWd5KSB7XHJcbiAgICBzdXBlcihzcmMsIGRvbVN0cmF0ZWd5LCBjcm9zc09yaWdpblN0cmF0ZWd5KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW1lbnQoKTogSFRNTFNjcmlwdEVsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgZWxlbWVudC5zcmMgPSB0aGlzLnBhdGg7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3R5bGVMb2FkaW5nU3RyYXRlZ3kgZXh0ZW5kcyBMb2FkaW5nU3RyYXRlZ3k8SFRNTExpbmtFbGVtZW50PiB7XHJcbiAgY29uc3RydWN0b3IoaHJlZjogc3RyaW5nLCBkb21TdHJhdGVneT86IERvbVN0cmF0ZWd5LCBjcm9zc09yaWdpblN0cmF0ZWd5PzogQ3Jvc3NPcmlnaW5TdHJhdGVneSkge1xyXG4gICAgc3VwZXIoaHJlZiwgZG9tU3RyYXRlZ3ksIGNyb3NzT3JpZ2luU3RyYXRlZ3kpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWxlbWVudCgpOiBIVE1MTGlua0VsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgIGVsZW1lbnQucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG4gICAgZWxlbWVudC5ocmVmID0gdGhpcy5wYXRoO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURJTkdfU1RSQVRFR1kgPSB7XHJcbiAgQXBwZW5kQW5vbnltb3VzU2NyaXB0VG9Cb2R5KHNyYzogc3RyaW5nLCBpbnRlZ3JpdHk/OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgU2NyaXB0TG9hZGluZ1N0cmF0ZWd5KFxyXG4gICAgICBzcmMsXHJcbiAgICAgIERPTV9TVFJBVEVHWS5BcHBlbmRUb0JvZHkoKSxcclxuICAgICAgQ1JPU1NfT1JJR0lOX1NUUkFURUdZLkFub255bW91cyhpbnRlZ3JpdHkpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIEFwcGVuZEFub255bW91c1NjcmlwdFRvSGVhZChzcmM6IHN0cmluZywgaW50ZWdyaXR5Pzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFNjcmlwdExvYWRpbmdTdHJhdGVneShcclxuICAgICAgc3JjLFxyXG4gICAgICBET01fU1RSQVRFR1kuQXBwZW5kVG9IZWFkKCksXHJcbiAgICAgIENST1NTX09SSUdJTl9TVFJBVEVHWS5Bbm9ueW1vdXMoaW50ZWdyaXR5KSxcclxuICAgICk7XHJcbiAgfSxcclxuICBBcHBlbmRBbm9ueW1vdXNTdHlsZVRvSGVhZChzcmM6IHN0cmluZywgaW50ZWdyaXR5Pzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0eWxlTG9hZGluZ1N0cmF0ZWd5KFxyXG4gICAgICBzcmMsXHJcbiAgICAgIERPTV9TVFJBVEVHWS5BcHBlbmRUb0hlYWQoKSxcclxuICAgICAgQ1JPU1NfT1JJR0lOX1NUUkFURUdZLkFub255bW91cyhpbnRlZ3JpdHkpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIFByZXBlbmRBbm9ueW1vdXNTY3JpcHRUb0hlYWQoc3JjOiBzdHJpbmcsIGludGVncml0eT86IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBTY3JpcHRMb2FkaW5nU3RyYXRlZ3koXHJcbiAgICAgIHNyYyxcclxuICAgICAgRE9NX1NUUkFURUdZLlByZXBlbmRUb0hlYWQoKSxcclxuICAgICAgQ1JPU1NfT1JJR0lOX1NUUkFURUdZLkFub255bW91cyhpbnRlZ3JpdHkpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIFByZXBlbmRBbm9ueW1vdXNTdHlsZVRvSGVhZChzcmM6IHN0cmluZywgaW50ZWdyaXR5Pzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0eWxlTG9hZGluZ1N0cmF0ZWd5KFxyXG4gICAgICBzcmMsXHJcbiAgICAgIERPTV9TVFJBVEVHWS5QcmVwZW5kVG9IZWFkKCksXHJcbiAgICAgIENST1NTX09SSUdJTl9TVFJBVEVHWS5Bbm9ueW1vdXMoaW50ZWdyaXR5KSxcclxuICAgICk7XHJcbiAgfSxcclxufTtcclxuIl19