/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/dom.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DomStrategy = /** @class */ (function () {
    function DomStrategy(target, position) {
        if (target === void 0) { target = document.head; }
        if (position === void 0) { position = 'beforeend'; }
        this.target = target;
        this.position = position;
    }
    /**
     * @template T
     * @param {?} element
     * @return {?}
     */
    DomStrategy.prototype.insertElement = /**
     * @template T
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this.target.insertAdjacentElement(this.position, element);
    };
    return DomStrategy;
}());
export { DomStrategy };
if (false) {
    /** @type {?} */
    DomStrategy.prototype.target;
    /** @type {?} */
    DomStrategy.prototype.position;
}
/** @type {?} */
export var DOM_STRATEGY = {
    AfterElement: /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return new DomStrategy(element, 'afterend');
    },
    AppendToBody: /**
     * @return {?}
     */
    function () {
        return new DomStrategy(document.body, 'beforeend');
    },
    AppendToHead: /**
     * @return {?}
     */
    function () {
        return new DomStrategy(document.head, 'beforeend');
    },
    BeforeElement: /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return new DomStrategy(element, 'beforebegin');
    },
    PrependToHead: /**
     * @return {?}
     */
    function () {
        return new DomStrategy(document.head, 'afterbegin');
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0cmF0ZWdpZXMvZG9tLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7SUFDRSxxQkFDUyxNQUFtQyxFQUNuQyxRQUFzQztRQUR0Qyx1QkFBQSxFQUFBLFNBQXNCLFFBQVEsQ0FBQyxJQUFJO1FBQ25DLHlCQUFBLEVBQUEsc0JBQXNDO1FBRHRDLFdBQU0sR0FBTixNQUFNLENBQTZCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQThCO0lBQzVDLENBQUM7Ozs7OztJQUVKLG1DQUFhOzs7OztJQUFiLFVBQXFDLE9BQVU7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFURCxJQVNDOzs7O0lBUEcsNkJBQTBDOztJQUMxQywrQkFBNkM7OztBQVFqRCxNQUFNLEtBQU8sWUFBWSxHQUFHO0lBQzFCLFlBQVk7Ozs7SUFBWixVQUFhLE9BQW9CO1FBQy9CLE9BQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxZQUFZOzs7O1FBQ1YsT0FBTyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxZQUFZOzs7O1FBQ1YsT0FBTyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxhQUFhOzs7O0lBQWIsVUFBYyxPQUFvQjtRQUNoQyxPQUFPLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsYUFBYTs7OztRQUNYLE9BQU8sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRG9tU3RyYXRlZ3kge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHRhcmdldDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5oZWFkLFxyXG4gICAgcHVibGljIHBvc2l0aW9uOiBJbnNlcnRQb3NpdGlvbiA9ICdiZWZvcmVlbmQnLFxyXG4gICkge31cclxuXHJcbiAgaW5zZXJ0RWxlbWVudDxUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGVsZW1lbnQ6IFQpIHtcclxuICAgIHRoaXMudGFyZ2V0Lmluc2VydEFkamFjZW50RWxlbWVudCh0aGlzLnBvc2l0aW9uLCBlbGVtZW50KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBET01fU1RSQVRFR1kgPSB7XHJcbiAgQWZ0ZXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gbmV3IERvbVN0cmF0ZWd5KGVsZW1lbnQsICdhZnRlcmVuZCcpO1xyXG4gIH0sXHJcbiAgQXBwZW5kVG9Cb2R5KCkge1xyXG4gICAgcmV0dXJuIG5ldyBEb21TdHJhdGVneShkb2N1bWVudC5ib2R5LCAnYmVmb3JlZW5kJyk7XHJcbiAgfSxcclxuICBBcHBlbmRUb0hlYWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IERvbVN0cmF0ZWd5KGRvY3VtZW50LmhlYWQsICdiZWZvcmVlbmQnKTtcclxuICB9LFxyXG4gIEJlZm9yZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHJldHVybiBuZXcgRG9tU3RyYXRlZ3koZWxlbWVudCwgJ2JlZm9yZWJlZ2luJyk7XHJcbiAgfSxcclxuICBQcmVwZW5kVG9IZWFkKCkge1xyXG4gICAgcmV0dXJuIG5ldyBEb21TdHJhdGVneShkb2N1bWVudC5oZWFkLCAnYWZ0ZXJiZWdpbicpO1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==