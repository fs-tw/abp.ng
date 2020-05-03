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
export function fromLazyLoad(element, domStrategy = DOM_STRATEGY.AppendToHead(), crossOriginStrategy = CROSS_ORIGIN_STRATEGY.Anonymous()) {
    crossOriginStrategy.setCrossOrigin(element);
    domStrategy.insertElement(element);
    return new Observable((/**
     * @param {?} observer
     * @return {?}
     */
    (observer) => {
        element.onload = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            clearCallbacks(element);
            observer.next(event);
            observer.complete();
        });
        /** @type {?} */
        const handleError = createErrorHandler(observer, element);
        element.onerror = handleError;
        element.onabort = handleError;
        element.onemptied = handleError;
        element.onstalled = handleError;
        element.onsuspend = handleError;
        return (/**
         * @return {?}
         */
        () => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1sb2FkLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2xhenktbG9hZC11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUF1QixxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pHLE9BQU8sRUFBZSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7QUFFdkUsTUFBTSxVQUFVLFlBQVksQ0FDMUIsT0FBNEMsRUFDNUMsY0FBMkIsWUFBWSxDQUFDLFlBQVksRUFBRSxFQUN0RCxzQkFBMkMscUJBQXFCLENBQUMsU0FBUyxFQUFFO0lBRTVFLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLE9BQU8sSUFBSSxVQUFVOzs7O0lBQUMsQ0FBQyxRQUFxQixFQUFFLEVBQUU7UUFDOUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFBRyxDQUFDLEtBQVEsRUFBRSxFQUFFO1lBQzVCLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUEsQ0FBQzs7Y0FFSSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztRQUV6RCxPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM5QixPQUFPLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztRQUM5QixPQUFPLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUVoQzs7O1FBQU8sR0FBRyxFQUFFO1lBQ1YsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUM7SUFDSixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUM7Ozs7OztBQUVELFNBQVMsa0JBQWtCLENBQUMsUUFBeUIsRUFBRSxPQUFvQjtJQUN6RSxtREFBbUQ7SUFDbkQ7Ozs7SUFBTyxVQUFTLEtBQXFCO1FBQ25DLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7O0FBRUQsU0FBUyxjQUFjLENBQUMsT0FBb0I7SUFDMUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdEIsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdkIsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdkIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDekIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDekIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENyb3NzT3JpZ2luU3RyYXRlZ3ksIENST1NTX09SSUdJTl9TVFJBVEVHWSB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvY3Jvc3Mtb3JpZ2luLnN0cmF0ZWd5JztcclxuaW1wb3J0IHsgRG9tU3RyYXRlZ3ksIERPTV9TVFJBVEVHWSB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvZG9tLnN0cmF0ZWd5JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmcm9tTGF6eUxvYWQ8VCBleHRlbmRzIEV2ZW50PihcclxuICBlbGVtZW50OiBIVE1MU2NyaXB0RWxlbWVudCB8IEhUTUxMaW5rRWxlbWVudCxcclxuICBkb21TdHJhdGVneTogRG9tU3RyYXRlZ3kgPSBET01fU1RSQVRFR1kuQXBwZW5kVG9IZWFkKCksXHJcbiAgY3Jvc3NPcmlnaW5TdHJhdGVneTogQ3Jvc3NPcmlnaW5TdHJhdGVneSA9IENST1NTX09SSUdJTl9TVFJBVEVHWS5Bbm9ueW1vdXMoKSxcclxuKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgY3Jvc3NPcmlnaW5TdHJhdGVneS5zZXRDcm9zc09yaWdpbihlbGVtZW50KTtcclxuICBkb21TdHJhdGVneS5pbnNlcnRFbGVtZW50KGVsZW1lbnQpO1xyXG5cclxuICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xyXG4gICAgZWxlbWVudC5vbmxvYWQgPSAoZXZlbnQ6IFQpID0+IHtcclxuICAgICAgY2xlYXJDYWxsYmFja3MoZWxlbWVudCk7XHJcbiAgICAgIG9ic2VydmVyLm5leHQoZXZlbnQpO1xyXG4gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IGNyZWF0ZUVycm9ySGFuZGxlcihvYnNlcnZlciwgZWxlbWVudCk7XHJcblxyXG4gICAgZWxlbWVudC5vbmVycm9yID0gaGFuZGxlRXJyb3I7XHJcbiAgICBlbGVtZW50Lm9uYWJvcnQgPSBoYW5kbGVFcnJvcjtcclxuICAgIGVsZW1lbnQub25lbXB0aWVkID0gaGFuZGxlRXJyb3I7XHJcbiAgICBlbGVtZW50Lm9uc3RhbGxlZCA9IGhhbmRsZUVycm9yO1xyXG4gICAgZWxlbWVudC5vbnN1c3BlbmQgPSBoYW5kbGVFcnJvcjtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckNhbGxiYWNrcyhlbGVtZW50KTtcclxuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVycm9ySGFuZGxlcihvYnNlcnZlcjogT2JzZXJ2ZXI8RXZlbnQ+LCBlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvbmx5LWFycm93LWZ1bmN0aW9ucyAqL1xyXG4gIHJldHVybiBmdW5jdGlvbihldmVudDogRXZlbnQgfCBzdHJpbmcpIHtcclxuICAgIGNsZWFyQ2FsbGJhY2tzKGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgb2JzZXJ2ZXIuZXJyb3IoZXZlbnQpO1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ2FsbGJhY2tzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgZWxlbWVudC5vbmxvYWQgPSBudWxsO1xyXG4gIGVsZW1lbnQub25lcnJvciA9IG51bGw7XHJcbiAgZWxlbWVudC5vbmFib3J0ID0gbnVsbDtcclxuICBlbGVtZW50Lm9uZW1wdGllZCA9IG51bGw7XHJcbiAgZWxlbWVudC5vbnN0YWxsZWQgPSBudWxsO1xyXG4gIGVsZW1lbnQub25zdXNwZW5kID0gbnVsbDtcclxufVxyXG4iXX0=