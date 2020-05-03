/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/container.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class ContainerStrategy {
    /**
     * @param {?} containerRef
     */
    constructor(containerRef) {
        this.containerRef = containerRef;
    }
    /**
     * @return {?}
     */
    prepare() { }
}
if (false) {
    /** @type {?} */
    ContainerStrategy.prototype.containerRef;
    /**
     * @abstract
     * @return {?}
     */
    ContainerStrategy.prototype.getIndex = function () { };
}
export class ClearContainerStrategy extends ContainerStrategy {
    /**
     * @return {?}
     */
    getIndex() {
        return 0;
    }
    /**
     * @return {?}
     */
    prepare() {
        this.containerRef.clear();
    }
}
export class InsertIntoContainerStrategy extends ContainerStrategy {
    /**
     * @param {?} containerRef
     * @param {?} index
     */
    constructor(containerRef, index) {
        super(containerRef);
        this.index = index;
    }
    /**
     * @return {?}
     */
    getIndex() {
        return Math.min(Math.max(0, this.index), this.containerRef.length);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    InsertIntoContainerStrategy.prototype.index;
}
/** @type {?} */
export const CONTAINER_STRATEGY = {
    /**
     * @param {?} containerRef
     * @return {?}
     */
    Clear(containerRef) {
        return new ClearContainerStrategy(containerRef);
    },
    /**
     * @param {?} containerRef
     * @return {?}
     */
    Append(containerRef) {
        return new InsertIntoContainerStrategy(containerRef, containerRef.length);
    },
    /**
     * @param {?} containerRef
     * @return {?}
     */
    Prepend(containerRef) {
        return new InsertIntoContainerStrategy(containerRef, 0);
    },
    /**
     * @param {?} containerRef
     * @param {?} index
     * @return {?}
     */
    Insert(containerRef, index) {
        return new InsertIntoContainerStrategy(containerRef, index);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0cmF0ZWdpZXMvY29udGFpbmVyLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTSxPQUFnQixpQkFBaUI7Ozs7SUFDckMsWUFBbUIsWUFBOEI7UUFBOUIsaUJBQVksR0FBWixZQUFZLENBQWtCO0lBQUcsQ0FBQzs7OztJQUlyRCxPQUFPLEtBQVUsQ0FBQztDQUNuQjs7O0lBTGEseUNBQXFDOzs7OztJQUVqRCx1REFBNEI7O0FBSzlCLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxpQkFBaUI7Ozs7SUFDM0QsUUFBUTtRQUNOLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxpQkFBaUI7Ozs7O0lBQ2hFLFlBQVksWUFBOEIsRUFBVSxLQUFhO1FBQy9ELEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUQ4QixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBRWpFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRjs7Ozs7O0lBUDZDLDRDQUFxQjs7O0FBU25FLE1BQU0sT0FBTyxrQkFBa0IsR0FBRzs7Ozs7SUFDaEMsS0FBSyxDQUFDLFlBQThCO1FBQ2xDLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUNELE1BQU0sQ0FBQyxZQUE4QjtRQUNuQyxPQUFPLElBQUksMkJBQTJCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUNELE9BQU8sQ0FBQyxZQUE4QjtRQUNwQyxPQUFPLElBQUksMkJBQTJCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7OztJQUNELE1BQU0sQ0FBQyxZQUE4QixFQUFFLEtBQWE7UUFDbEQsT0FBTyxJQUFJLDJCQUEyQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29udGFpbmVyU3RyYXRlZ3kge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG4gIGFic3RyYWN0IGdldEluZGV4KCk6IG51bWJlcjtcclxuXHJcbiAgcHJlcGFyZSgpOiB2b2lkIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbGVhckNvbnRhaW5lclN0cmF0ZWd5IGV4dGVuZHMgQ29udGFpbmVyU3RyYXRlZ3kge1xyXG4gIGdldEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIHByZXBhcmUoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lclJlZi5jbGVhcigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEluc2VydEludG9Db250YWluZXJTdHJhdGVneSBleHRlbmRzIENvbnRhaW5lclN0cmF0ZWd5IHtcclxuICBjb25zdHJ1Y3Rvcihjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5kZXg6IG51bWJlcikge1xyXG4gICAgc3VwZXIoY29udGFpbmVyUmVmKTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4KCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KDAsIHRoaXMuaW5kZXgpLCB0aGlzLmNvbnRhaW5lclJlZi5sZW5ndGgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9TVFJBVEVHWSA9IHtcclxuICBDbGVhcihjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHJldHVybiBuZXcgQ2xlYXJDb250YWluZXJTdHJhdGVneShjb250YWluZXJSZWYpO1xyXG4gIH0sXHJcbiAgQXBwZW5kKGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgcmV0dXJuIG5ldyBJbnNlcnRJbnRvQ29udGFpbmVyU3RyYXRlZ3koY29udGFpbmVyUmVmLCBjb250YWluZXJSZWYubGVuZ3RoKTtcclxuICB9LFxyXG4gIFByZXBlbmQoY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICByZXR1cm4gbmV3IEluc2VydEludG9Db250YWluZXJTdHJhdGVneShjb250YWluZXJSZWYsIDApO1xyXG4gIH0sXHJcbiAgSW5zZXJ0KGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG5ldyBJbnNlcnRJbnRvQ29udGFpbmVyU3RyYXRlZ3koY29udGFpbmVyUmVmLCBpbmRleCk7XHJcbiAgfSxcclxufTtcclxuIl19