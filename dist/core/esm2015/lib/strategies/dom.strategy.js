/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/dom.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class DomStrategy {
    /**
     * @param {?=} target
     * @param {?=} position
     */
    constructor(target = document.head, position = 'beforeend') {
        this.target = target;
        this.position = position;
    }
    /**
     * @template T
     * @param {?} element
     * @return {?}
     */
    insertElement(element) {
        this.target.insertAdjacentElement(this.position, element);
    }
}
if (false) {
    /** @type {?} */
    DomStrategy.prototype.target;
    /** @type {?} */
    DomStrategy.prototype.position;
}
/** @type {?} */
export const DOM_STRATEGY = {
    /**
     * @param {?} element
     * @return {?}
     */
    AfterElement(element) {
        return new DomStrategy(element, 'afterend');
    },
    /**
     * @return {?}
     */
    AppendToBody() {
        return new DomStrategy(document.body, 'beforeend');
    },
    /**
     * @return {?}
     */
    AppendToHead() {
        return new DomStrategy(document.head, 'beforeend');
    },
    /**
     * @param {?} element
     * @return {?}
     */
    BeforeElement(element) {
        return new DomStrategy(element, 'beforebegin');
    },
    /**
     * @return {?}
     */
    PrependToHead() {
        return new DomStrategy(document.head, 'afterbegin');
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0cmF0ZWdpZXMvZG9tLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBQ3RCLFlBQ1MsU0FBc0IsUUFBUSxDQUFDLElBQUksRUFDbkMsV0FBMkIsV0FBVztRQUR0QyxXQUFNLEdBQU4sTUFBTSxDQUE2QjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUE4QjtJQUM1QyxDQUFDOzs7Ozs7SUFFSixhQUFhLENBQXdCLE9BQVU7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDRjs7O0lBUEcsNkJBQTBDOztJQUMxQywrQkFBNkM7OztBQVFqRCxNQUFNLE9BQU8sWUFBWSxHQUFHOzs7OztJQUMxQixZQUFZLENBQUMsT0FBb0I7UUFDL0IsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUNELFlBQVk7UUFDVixPQUFPLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNELFlBQVk7UUFDVixPQUFPLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFDRCxhQUFhLENBQUMsT0FBb0I7UUFDaEMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUNELGFBQWE7UUFDWCxPQUFPLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERvbVN0cmF0ZWd5IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuaGVhZCxcclxuICAgIHB1YmxpYyBwb3NpdGlvbjogSW5zZXJ0UG9zaXRpb24gPSAnYmVmb3JlZW5kJyxcclxuICApIHt9XHJcblxyXG4gIGluc2VydEVsZW1lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50PihlbGVtZW50OiBUKSB7XHJcbiAgICB0aGlzLnRhcmdldC5pbnNlcnRBZGphY2VudEVsZW1lbnQodGhpcy5wb3NpdGlvbiwgZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRE9NX1NUUkFURUdZID0ge1xyXG4gIEFmdGVyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgcmV0dXJuIG5ldyBEb21TdHJhdGVneShlbGVtZW50LCAnYWZ0ZXJlbmQnKTtcclxuICB9LFxyXG4gIEFwcGVuZFRvQm9keSgpIHtcclxuICAgIHJldHVybiBuZXcgRG9tU3RyYXRlZ3koZG9jdW1lbnQuYm9keSwgJ2JlZm9yZWVuZCcpO1xyXG4gIH0sXHJcbiAgQXBwZW5kVG9IZWFkKCkge1xyXG4gICAgcmV0dXJuIG5ldyBEb21TdHJhdGVneShkb2N1bWVudC5oZWFkLCAnYmVmb3JlZW5kJyk7XHJcbiAgfSxcclxuICBCZWZvcmVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gbmV3IERvbVN0cmF0ZWd5KGVsZW1lbnQsICdiZWZvcmViZWdpbicpO1xyXG4gIH0sXHJcbiAgUHJlcGVuZFRvSGVhZCgpIHtcclxuICAgIHJldHVybiBuZXcgRG9tU3RyYXRlZ3koZG9jdW1lbnQuaGVhZCwgJ2FmdGVyYmVnaW4nKTtcclxuICB9LFxyXG59O1xyXG4iXX0=