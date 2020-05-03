/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/container.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @abstract
 */
var /**
 * @abstract
 */
ContainerStrategy = /** @class */ (function () {
    function ContainerStrategy(containerRef) {
        this.containerRef = containerRef;
    }
    /**
     * @return {?}
     */
    ContainerStrategy.prototype.prepare = /**
     * @return {?}
     */
    function () { };
    return ContainerStrategy;
}());
/**
 * @abstract
 */
export { ContainerStrategy };
if (false) {
    /** @type {?} */
    ContainerStrategy.prototype.containerRef;
    /**
     * @abstract
     * @return {?}
     */
    ContainerStrategy.prototype.getIndex = function () { };
}
var ClearContainerStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(ClearContainerStrategy, _super);
    function ClearContainerStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    ClearContainerStrategy.prototype.getIndex = /**
     * @return {?}
     */
    function () {
        return 0;
    };
    /**
     * @return {?}
     */
    ClearContainerStrategy.prototype.prepare = /**
     * @return {?}
     */
    function () {
        this.containerRef.clear();
    };
    return ClearContainerStrategy;
}(ContainerStrategy));
export { ClearContainerStrategy };
var InsertIntoContainerStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(InsertIntoContainerStrategy, _super);
    function InsertIntoContainerStrategy(containerRef, index) {
        var _this = _super.call(this, containerRef) || this;
        _this.index = index;
        return _this;
    }
    /**
     * @return {?}
     */
    InsertIntoContainerStrategy.prototype.getIndex = /**
     * @return {?}
     */
    function () {
        return Math.min(Math.max(0, this.index), this.containerRef.length);
    };
    return InsertIntoContainerStrategy;
}(ContainerStrategy));
export { InsertIntoContainerStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InsertIntoContainerStrategy.prototype.index;
}
/** @type {?} */
export var CONTAINER_STRATEGY = {
    Clear: /**
     * @param {?} containerRef
     * @return {?}
     */
    function (containerRef) {
        return new ClearContainerStrategy(containerRef);
    },
    Append: /**
     * @param {?} containerRef
     * @return {?}
     */
    function (containerRef) {
        return new InsertIntoContainerStrategy(containerRef, containerRef.length);
    },
    Prepend: /**
     * @param {?} containerRef
     * @return {?}
     */
    function (containerRef) {
        return new InsertIntoContainerStrategy(containerRef, 0);
    },
    Insert: /**
     * @param {?} containerRef
     * @param {?} index
     * @return {?}
     */
    function (containerRef, index) {
        return new InsertIntoContainerStrategy(containerRef, index);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFicC9uZy5jb3JlLyIsInNvdXJjZXMiOlsibGliL3N0cmF0ZWdpZXMvY29udGFpbmVyLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOzs7O0lBQ0UsMkJBQW1CLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtJQUFHLENBQUM7Ozs7SUFJckQsbUNBQU87OztJQUFQLGNBQWlCLENBQUM7SUFDcEIsd0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7Ozs7OztJQUxhLHlDQUFxQzs7Ozs7SUFFakQsdURBQTRCOztBQUs5QjtJQUE0QyxrREFBaUI7SUFBN0Q7O0lBUUEsQ0FBQzs7OztJQVBDLHlDQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7OztJQUVELHdDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQVJELENBQTRDLGlCQUFpQixHQVE1RDs7QUFFRDtJQUFpRCx1REFBaUI7SUFDaEUscUNBQVksWUFBOEIsRUFBVSxLQUFhO1FBQWpFLFlBQ0Usa0JBQU0sWUFBWSxDQUFDLFNBQ3BCO1FBRm1ELFdBQUssR0FBTCxLQUFLLENBQVE7O0lBRWpFLENBQUM7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNILGtDQUFDO0FBQUQsQ0FBQyxBQVJELENBQWlELGlCQUFpQixHQVFqRTs7Ozs7OztJQVA2Qyw0Q0FBcUI7OztBQVNuRSxNQUFNLEtBQU8sa0JBQWtCLEdBQUc7SUFDaEMsS0FBSzs7OztJQUFMLFVBQU0sWUFBOEI7UUFDbEMsT0FBTyxJQUFJLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxNQUFNOzs7O0lBQU4sVUFBTyxZQUE4QjtRQUNuQyxPQUFPLElBQUksMkJBQTJCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsT0FBTzs7OztJQUFQLFVBQVEsWUFBOEI7UUFDcEMsT0FBTyxJQUFJLDJCQUEyQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsTUFBTTs7Ozs7SUFBTixVQUFPLFlBQThCLEVBQUUsS0FBYTtRQUNsRCxPQUFPLElBQUksMkJBQTJCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250YWluZXJTdHJhdGVneSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cclxuXHJcbiAgYWJzdHJhY3QgZ2V0SW5kZXgoKTogbnVtYmVyO1xyXG5cclxuICBwcmVwYXJlKCk6IHZvaWQge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsZWFyQ29udGFpbmVyU3RyYXRlZ3kgZXh0ZW5kcyBDb250YWluZXJTdHJhdGVneSB7XHJcbiAgZ2V0SW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZSgpIHtcclxuICAgIHRoaXMuY29udGFpbmVyUmVmLmNsZWFyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5zZXJ0SW50b0NvbnRhaW5lclN0cmF0ZWd5IGV4dGVuZHMgQ29udGFpbmVyU3RyYXRlZ3kge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihjb250YWluZXJSZWYpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXgoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoMCwgdGhpcy5pbmRleCksIHRoaXMuY29udGFpbmVyUmVmLmxlbmd0aCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX1NUUkFURUdZID0ge1xyXG4gIENsZWFyKGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgcmV0dXJuIG5ldyBDbGVhckNvbnRhaW5lclN0cmF0ZWd5KGNvbnRhaW5lclJlZik7XHJcbiAgfSxcclxuICBBcHBlbmQoY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICByZXR1cm4gbmV3IEluc2VydEludG9Db250YWluZXJTdHJhdGVneShjb250YWluZXJSZWYsIGNvbnRhaW5lclJlZi5sZW5ndGgpO1xyXG4gIH0sXHJcbiAgUHJlcGVuZChjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgIHJldHVybiBuZXcgSW5zZXJ0SW50b0NvbnRhaW5lclN0cmF0ZWd5KGNvbnRhaW5lclJlZiwgMCk7XHJcbiAgfSxcclxuICBJbnNlcnQoY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IEluc2VydEludG9Db250YWluZXJTdHJhdGVneShjb250YWluZXJSZWYsIGluZGV4KTtcclxuICB9LFxyXG59O1xyXG4iXX0=