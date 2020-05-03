/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/loading.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { fromLazyLoad } from '../utils';
import { CROSS_ORIGIN_STRATEGY } from './cross-origin.strategy';
import { DOM_STRATEGY } from './dom.strategy';
/**
 * @abstract
 * @template T
 */
export class LoadingStrategy {
    /**
     * @param {?} path
     * @param {?=} domStrategy
     * @param {?=} crossOriginStrategy
     */
    constructor(path, domStrategy = DOM_STRATEGY.AppendToHead(), crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous()) {
        this.path = path;
        this.domStrategy = domStrategy;
        this.crossOriginStrategy = crossOriginStrategy;
    }
    /**
     * @template E
     * @return {?}
     */
    createStream() {
        return of(null).pipe(switchMap((/**
         * @return {?}
         */
        () => fromLazyLoad(this.createElement(), this.domStrategy, this.crossOriginStrategy))));
    }
}
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
export class ScriptLoadingStrategy extends LoadingStrategy {
    /**
     * @param {?} src
     * @param {?=} domStrategy
     * @param {?=} crossOriginStrategy
     */
    constructor(src, domStrategy, crossOriginStrategy) {
        super(src, domStrategy, crossOriginStrategy);
    }
    /**
     * @return {?}
     */
    createElement() {
        /** @type {?} */
        const element = document.createElement('script');
        element.src = this.path;
        return element;
    }
}
export class StyleLoadingStrategy extends LoadingStrategy {
    /**
     * @param {?} href
     * @param {?=} domStrategy
     * @param {?=} crossOriginStrategy
     */
    constructor(href, domStrategy, crossOriginStrategy) {
        super(href, domStrategy, crossOriginStrategy);
    }
    /**
     * @return {?}
     */
    createElement() {
        /** @type {?} */
        const element = document.createElement('link');
        element.rel = 'stylesheet';
        element.href = this.path;
        return element;
    }
}
/** @type {?} */
export const LOADING_STRATEGY = {
    /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    AppendAnonymousScriptToBody(src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToBody(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    AppendAnonymousScriptToHead(src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    AppendAnonymousStyleToHead(src, integrity) {
        return new StyleLoadingStrategy(src, DOM_STRATEGY.AppendToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    PrependAnonymousScriptToHead(src, integrity) {
        return new ScriptLoadingStrategy(src, DOM_STRATEGY.PrependToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
    /**
     * @param {?} src
     * @param {?=} integrity
     * @return {?}
     */
    PrependAnonymousStyleToHead(src, integrity) {
        return new StyleLoadingStrategy(src, DOM_STRATEGY.PrependToHead(), CROSS_ORIGIN_STRATEGY.Anonymous(integrity));
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL2xvYWRpbmcuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hDLE9BQU8sRUFBdUIscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRixPQUFPLEVBQWUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRTNELE1BQU0sT0FBZ0IsZUFBZTs7Ozs7O0lBQ25DLFlBQ1MsSUFBWSxFQUNULGNBQTJCLFlBQVksQ0FBQyxZQUFZLEVBQUUsRUFDdEQsc0JBQTJDLHFCQUFxQixDQUFDLFNBQVMsRUFBRTtRQUYvRSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1QsZ0JBQVcsR0FBWCxXQUFXLENBQTJDO1FBQ3RELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBeUQ7SUFDckYsQ0FBQzs7Ozs7SUFJSixZQUFZO1FBQ1YsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNsQixTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FDYixZQUFZLENBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQ2xGLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRjs7O0lBZEcsK0JBQW1COzs7OztJQUNuQixzQ0FBZ0U7Ozs7O0lBQ2hFLDhDQUFzRjs7Ozs7SUFHeEYsMERBQTRCOztBQVc5QixNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBa0M7Ozs7OztJQUMzRSxZQUFZLEdBQVcsRUFBRSxXQUF5QixFQUFFLG1CQUF5QztRQUMzRixLQUFLLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxhQUFhOztjQUNMLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFeEIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQWdDOzs7Ozs7SUFDeEUsWUFBWSxJQUFZLEVBQUUsV0FBeUIsRUFBRSxtQkFBeUM7UUFDNUYsS0FBSyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsYUFBYTs7Y0FDTCxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7UUFDM0IsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXpCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjs7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQUc7Ozs7OztJQUM5QiwyQkFBMkIsQ0FBQyxHQUFXLEVBQUUsU0FBa0I7UUFDekQsT0FBTyxJQUFJLHFCQUFxQixDQUM5QixHQUFHLEVBQ0gsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUMzQixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFDRCwyQkFBMkIsQ0FBQyxHQUFXLEVBQUUsU0FBa0I7UUFDekQsT0FBTyxJQUFJLHFCQUFxQixDQUM5QixHQUFHLEVBQ0gsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUMzQixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFDRCwwQkFBMEIsQ0FBQyxHQUFXLEVBQUUsU0FBa0I7UUFDeEQsT0FBTyxJQUFJLG9CQUFvQixDQUM3QixHQUFHLEVBQ0gsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUMzQixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFDRCw0QkFBNEIsQ0FBQyxHQUFXLEVBQUUsU0FBa0I7UUFDMUQsT0FBTyxJQUFJLHFCQUFxQixDQUM5QixHQUFHLEVBQ0gsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUM1QixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFDRCwyQkFBMkIsQ0FBQyxHQUFXLEVBQUUsU0FBa0I7UUFDekQsT0FBTyxJQUFJLG9CQUFvQixDQUM3QixHQUFHLEVBQ0gsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUM1QixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGZyb21MYXp5TG9hZCB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgQ3Jvc3NPcmlnaW5TdHJhdGVneSwgQ1JPU1NfT1JJR0lOX1NUUkFURUdZIH0gZnJvbSAnLi9jcm9zcy1vcmlnaW4uc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBEb21TdHJhdGVneSwgRE9NX1NUUkFURUdZIH0gZnJvbSAnLi9kb20uc3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvYWRpbmdTdHJhdGVneTxUIGV4dGVuZHMgSFRNTFNjcmlwdEVsZW1lbnQgfCBIVE1MTGlua0VsZW1lbnQgPSBhbnk+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmcsXHJcbiAgICBwcm90ZWN0ZWQgZG9tU3RyYXRlZ3k6IERvbVN0cmF0ZWd5ID0gRE9NX1NUUkFURUdZLkFwcGVuZFRvSGVhZCgpLFxyXG4gICAgcHJvdGVjdGVkIGNyb3NzT3JpZ2luU3RyYXRlZ3k6IENyb3NzT3JpZ2luU3RyYXRlZ3kgPSBDUk9TU19PUklHSU5fU1RSQVRFR1kuQW5vbnltb3VzKCksXHJcbiAgKSB7fVxyXG5cclxuICBhYnN0cmFjdCBjcmVhdGVFbGVtZW50KCk6IFQ7XHJcblxyXG4gIGNyZWF0ZVN0cmVhbTxFIGV4dGVuZHMgRXZlbnQ+KCk6IE9ic2VydmFibGU8RT4ge1xyXG4gICAgcmV0dXJuIG9mKG51bGwpLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcCgoKSA9PlxyXG4gICAgICAgIGZyb21MYXp5TG9hZDxFPih0aGlzLmNyZWF0ZUVsZW1lbnQoKSwgdGhpcy5kb21TdHJhdGVneSwgdGhpcy5jcm9zc09yaWdpblN0cmF0ZWd5KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyaXB0TG9hZGluZ1N0cmF0ZWd5IGV4dGVuZHMgTG9hZGluZ1N0cmF0ZWd5PEhUTUxTY3JpcHRFbGVtZW50PiB7XHJcbiAgY29uc3RydWN0b3Ioc3JjOiBzdHJpbmcsIGRvbVN0cmF0ZWd5PzogRG9tU3RyYXRlZ3ksIGNyb3NzT3JpZ2luU3RyYXRlZ3k/OiBDcm9zc09yaWdpblN0cmF0ZWd5KSB7XHJcbiAgICBzdXBlcihzcmMsIGRvbVN0cmF0ZWd5LCBjcm9zc09yaWdpblN0cmF0ZWd5KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW1lbnQoKTogSFRNTFNjcmlwdEVsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgZWxlbWVudC5zcmMgPSB0aGlzLnBhdGg7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3R5bGVMb2FkaW5nU3RyYXRlZ3kgZXh0ZW5kcyBMb2FkaW5nU3RyYXRlZ3k8SFRNTExpbmtFbGVtZW50PiB7XHJcbiAgY29uc3RydWN0b3IoaHJlZjogc3RyaW5nLCBkb21TdHJhdGVneT86IERvbVN0cmF0ZWd5LCBjcm9zc09yaWdpblN0cmF0ZWd5PzogQ3Jvc3NPcmlnaW5TdHJhdGVneSkge1xyXG4gICAgc3VwZXIoaHJlZiwgZG9tU3RyYXRlZ3ksIGNyb3NzT3JpZ2luU3RyYXRlZ3kpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWxlbWVudCgpOiBIVE1MTGlua0VsZW1lbnQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgIGVsZW1lbnQucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG4gICAgZWxlbWVudC5ocmVmID0gdGhpcy5wYXRoO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURJTkdfU1RSQVRFR1kgPSB7XHJcbiAgQXBwZW5kQW5vbnltb3VzU2NyaXB0VG9Cb2R5KHNyYzogc3RyaW5nLCBpbnRlZ3JpdHk/OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgU2NyaXB0TG9hZGluZ1N0cmF0ZWd5KFxyXG4gICAgICBzcmMsXHJcbiAgICAgIERPTV9TVFJBVEVHWS5BcHBlbmRUb0JvZHkoKSxcclxuICAgICAgQ1JPU1NfT1JJR0lOX1NUUkFURUdZLkFub255bW91cyhpbnRlZ3JpdHkpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIEFwcGVuZEFub255bW91c1NjcmlwdFRvSGVhZChzcmM6IHN0cmluZywgaW50ZWdyaXR5Pzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFNjcmlwdExvYWRpbmdTdHJhdGVneShcclxuICAgICAgc3JjLFxyXG4gICAgICBET01fU1RSQVRFR1kuQXBwZW5kVG9IZWFkKCksXHJcbiAgICAgIENST1NTX09SSUdJTl9TVFJBVEVHWS5Bbm9ueW1vdXMoaW50ZWdyaXR5KSxcclxuICAgICk7XHJcbiAgfSxcclxuICBBcHBlbmRBbm9ueW1vdXNTdHlsZVRvSGVhZChzcmM6IHN0cmluZywgaW50ZWdyaXR5Pzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0eWxlTG9hZGluZ1N0cmF0ZWd5KFxyXG4gICAgICBzcmMsXHJcbiAgICAgIERPTV9TVFJBVEVHWS5BcHBlbmRUb0hlYWQoKSxcclxuICAgICAgQ1JPU1NfT1JJR0lOX1NUUkFURUdZLkFub255bW91cyhpbnRlZ3JpdHkpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIFByZXBlbmRBbm9ueW1vdXNTY3JpcHRUb0hlYWQoc3JjOiBzdHJpbmcsIGludGVncml0eT86IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBTY3JpcHRMb2FkaW5nU3RyYXRlZ3koXHJcbiAgICAgIHNyYyxcclxuICAgICAgRE9NX1NUUkFURUdZLlByZXBlbmRUb0hlYWQoKSxcclxuICAgICAgQ1JPU1NfT1JJR0lOX1NUUkFURUdZLkFub255bW91cyhpbnRlZ3JpdHkpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIFByZXBlbmRBbm9ueW1vdXNTdHlsZVRvSGVhZChzcmM6IHN0cmluZywgaW50ZWdyaXR5Pzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0eWxlTG9hZGluZ1N0cmF0ZWd5KFxyXG4gICAgICBzcmMsXHJcbiAgICAgIERPTV9TVFJBVEVHWS5QcmVwZW5kVG9IZWFkKCksXHJcbiAgICAgIENST1NTX09SSUdJTl9TVFJBVEVHWS5Bbm9ueW1vdXMoaW50ZWdyaXR5KSxcclxuICAgICk7XHJcbiAgfSxcclxufTtcclxuIl19