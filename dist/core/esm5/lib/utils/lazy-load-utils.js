/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/lazy-load-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { CROSS_ORIGIN_STRATEGY } from '../strategies/cross-origin.strategy';
import { DOM_STRATEGY } from '../strategies/dom.strategy';
/**
 * @template T
 * @param {?} element
 * @param {?=} domStrategy
 * @param {?=} crossOriginStrategy
 * @return {?}
 */
export function fromLazyLoad(element, domStrategy, crossOriginStrategy) {
    if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToHead(); }
    if (crossOriginStrategy === void 0) { crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous(); }
    crossOriginStrategy.setCrossOrigin(element);
    domStrategy.insertElement(element);
    return new Observable((/**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        element.onload = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            clearCallbacks(element);
            observer.next(event);
            observer.complete();
        });
        /** @type {?} */
        var handleError = createErrorHandler(observer, element);
        element.onerror = handleError;
        element.onabort = handleError;
        element.onemptied = handleError;
        element.onstalled = handleError;
        element.onsuspend = handleError;
        return (/**
         * @return {?}
         */
        function () {
            clearCallbacks(element);
            observer.complete();
        });
    }));
}
/**
 * @param {?} observer
 * @param {?} element
 * @return {?}
 */
function createErrorHandler(observer, element) {
    /* tslint:disable-next-line:only-arrow-functions */
    return (/**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        clearCallbacks(element);
        element.parentNode.removeChild(element);
        observer.error(event);
    });
}
/**
 * @param {?} element
 * @return {?}
 */
function clearCallbacks(element) {
    element.onload = null;
    element.onerror = null;
    element.onabort = null;
    element.onemptied = null;
    element.onstalled = null;
    element.onsuspend = null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1sb2FkLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2xhenktbG9hZC11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUF1QixxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pHLE9BQU8sRUFBZSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7QUFFdkUsTUFBTSxVQUFVLFlBQVksQ0FDMUIsT0FBNEMsRUFDNUMsV0FBc0QsRUFDdEQsbUJBQTRFO0lBRDVFLDRCQUFBLEVBQUEsY0FBMkIsWUFBWSxDQUFDLFlBQVksRUFBRTtJQUN0RCxvQ0FBQSxFQUFBLHNCQUEyQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUU7SUFFNUUsbUJBQW1CLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbkMsT0FBTyxJQUFJLFVBQVU7Ozs7SUFBQyxVQUFDLFFBQXFCO1FBQzFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUcsVUFBQyxLQUFRO1lBQ3hCLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUEsQ0FBQzs7WUFFSSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztRQUV6RCxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM5QixPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM5QixPQUFPLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUVoQzs7O1FBQU87WUFDTCxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBQztJQUNKLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxRQUF5QixFQUFFLE9BQW9CO0lBQ3pFLG1EQUFtRDtJQUNuRDs7OztJQUFPLFVBQVMsS0FBcUI7UUFDbkMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxPQUFvQjtJQUMxQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN0QixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN2QixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN2QixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN6QixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN6QixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ3Jvc3NPcmlnaW5TdHJhdGVneSwgQ1JPU1NfT1JJR0lOX1NUUkFURUdZIH0gZnJvbSAnLi4vc3RyYXRlZ2llcy9jcm9zcy1vcmlnaW4uc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBEb21TdHJhdGVneSwgRE9NX1NUUkFURUdZIH0gZnJvbSAnLi4vc3RyYXRlZ2llcy9kb20uc3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZyb21MYXp5TG9hZDxUIGV4dGVuZHMgRXZlbnQ+KFxyXG4gIGVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50IHwgSFRNTExpbmtFbGVtZW50LFxyXG4gIGRvbVN0cmF0ZWd5OiBEb21TdHJhdGVneSA9IERPTV9TVFJBVEVHWS5BcHBlbmRUb0hlYWQoKSxcclxuICBjcm9zc09yaWdpblN0cmF0ZWd5OiBDcm9zc09yaWdpblN0cmF0ZWd5ID0gQ1JPU1NfT1JJR0lOX1NUUkFURUdZLkFub255bW91cygpLFxyXG4pOiBPYnNlcnZhYmxlPFQ+IHtcclxuICBjcm9zc09yaWdpblN0cmF0ZWd5LnNldENyb3NzT3JpZ2luKGVsZW1lbnQpO1xyXG4gIGRvbVN0cmF0ZWd5Lmluc2VydEVsZW1lbnQoZWxlbWVudCk7XHJcblxyXG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB7XHJcbiAgICBlbGVtZW50Lm9ubG9hZCA9IChldmVudDogVCkgPT4ge1xyXG4gICAgICBjbGVhckNhbGxiYWNrcyhlbGVtZW50KTtcclxuICAgICAgb2JzZXJ2ZXIubmV4dChldmVudCk7XHJcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gY3JlYXRlRXJyb3JIYW5kbGVyKG9ic2VydmVyLCBlbGVtZW50KTtcclxuXHJcbiAgICBlbGVtZW50Lm9uZXJyb3IgPSBoYW5kbGVFcnJvcjtcclxuICAgIGVsZW1lbnQub25hYm9ydCA9IGhhbmRsZUVycm9yO1xyXG4gICAgZWxlbWVudC5vbmVtcHRpZWQgPSBoYW5kbGVFcnJvcjtcclxuICAgIGVsZW1lbnQub25zdGFsbGVkID0gaGFuZGxlRXJyb3I7XHJcbiAgICBlbGVtZW50Lm9uc3VzcGVuZCA9IGhhbmRsZUVycm9yO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFyQ2FsbGJhY2tzKGVsZW1lbnQpO1xyXG4gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRXJyb3JIYW5kbGVyKG9ic2VydmVyOiBPYnNlcnZlcjxFdmVudD4sIGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm9ubHktYXJyb3ctZnVuY3Rpb25zICovXHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50OiBFdmVudCB8IHN0cmluZykge1xyXG4gICAgY2xlYXJDYWxsYmFja3MoZWxlbWVudCk7XHJcbiAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICBvYnNlcnZlci5lcnJvcihldmVudCk7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJDYWxsYmFja3MoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICBlbGVtZW50Lm9ubG9hZCA9IG51bGw7XHJcbiAgZWxlbWVudC5vbmVycm9yID0gbnVsbDtcclxuICBlbGVtZW50Lm9uYWJvcnQgPSBudWxsO1xyXG4gIGVsZW1lbnQub25lbXB0aWVkID0gbnVsbDtcclxuICBlbGVtZW50Lm9uc3RhbGxlZCA9IG51bGw7XHJcbiAgZWxlbWVudC5vbnN1c3BlbmQgPSBudWxsO1xyXG59XHJcbiJdfQ==