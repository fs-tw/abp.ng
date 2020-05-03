/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/context.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
ContextStrategy = /** @class */ (function () {
    function ContextStrategy(context) {
        this.context = context;
    }
    /* tslint:disable-next-line:no-unused-variable */
    /* tslint:disable-next-line:no-unused-variable */
    /**
     * @param {?=} componentRef
     * @return {?}
     */
    ContextStrategy.prototype.setContext = /* tslint:disable-next-line:no-unused-variable */
    /**
     * @param {?=} componentRef
     * @return {?}
     */
    function (componentRef) {
        return this.context;
    };
    return ContextStrategy;
}());
/**
 * @abstract
 * @template T
 */
export { ContextStrategy };
if (false) {
    /** @type {?} */
    ContextStrategy.prototype.context;
}
/**
 * @template T
 */
var /**
 * @template T
 */
NoContextStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(NoContextStrategy, _super);
    function NoContextStrategy() {
        return _super.call(this, undefined) || this;
    }
    return NoContextStrategy;
}(ContextStrategy));
/**
 * @template T
 */
export { NoContextStrategy };
/**
 * @template T
 */
var /**
 * @template T
 */
ComponentContextStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(ComponentContextStrategy, _super);
    function ComponentContextStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} componentRef
     * @return {?}
     */
    ComponentContextStrategy.prototype.setContext = /**
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        var _this = this;
        Object.keys(this.context).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return (componentRef.instance[key] = _this.context[key]); }));
        componentRef.changeDetectorRef.detectChanges();
        return this.context;
    };
    return ComponentContextStrategy;
}(ContextStrategy));
/**
 * @template T
 */
export { ComponentContextStrategy };
/**
 * @template T
 */
var /**
 * @template T
 */
TemplateContextStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateContextStrategy, _super);
    function TemplateContextStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    TemplateContextStrategy.prototype.setContext = /**
     * @return {?}
     */
    function () {
        return this.context;
    };
    return TemplateContextStrategy;
}(ContextStrategy));
/**
 * @template T
 */
export { TemplateContextStrategy };
/** @type {?} */
export var CONTEXT_STRATEGY = {
    None: /**
     * @template T
     * @return {?}
     */
    function () {
        return new NoContextStrategy();
    },
    Component: /**
     * @template T
     * @param {?} context
     * @return {?}
     */
    function (context) {
        return new ComponentContextStrategy(context);
    },
    Template: /**
     * @template T
     * @param {?} context
     * @return {?}
     */
    function (context) {
        return new TemplateContextStrategy(context);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL2NvbnRleHQuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBOzs7OztJQUNFLHlCQUFtQixPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtJQUFHLENBQUM7SUFFdkQsaURBQWlEOzs7Ozs7SUFDakQsb0NBQVU7Ozs7O0lBQVYsVUFBVyxZQUFrRDtRQUMzRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7Ozs7Ozs7O0lBTmEsa0NBQXVDOzs7OztBQVFyRDs7OztJQUVVLDZDQUFrQjtJQUMxQjtlQUNFLGtCQUFNLFNBQVMsQ0FBQztJQUNsQixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBTkQsQ0FFVSxlQUFlLEdBSXhCOzs7Ozs7OztBQUVEOzs7O0lBQXlFLG9EQUFrQjtJQUEzRjs7SUFNQSxDQUFDOzs7OztJQUxDLDZDQUFVOzs7O0lBQVYsVUFBVyxZQUFpRDtRQUE1RCxpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWhELENBQWdELEVBQUMsQ0FBQztRQUMzRixZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUFORCxDQUF5RSxlQUFlLEdBTXZGOzs7Ozs7OztBQUVEOzs7O0lBQStFLG1EQUFrQjtJQUFqRzs7SUFJQSxDQUFDOzs7O0lBSEMsNENBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFKRCxDQUErRSxlQUFlLEdBSTdGOzs7Ozs7QUFFRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUc7SUFDOUIsSUFBSTs7OztJQUFKO1FBQ0UsT0FBTyxJQUFJLGlCQUFpQixFQUFLLENBQUM7SUFDcEMsQ0FBQztJQUNELFNBQVM7Ozs7O0lBQVQsVUFBcUMsT0FBdUM7UUFDMUUsT0FBTyxJQUFJLHdCQUF3QixDQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxRQUFROzs7OztJQUFSLFVBQTJDLE9BQXNDO1FBQy9FLE9BQU8sSUFBSSx1QkFBdUIsQ0FBSSxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluZmVycmVkQ29udGV4dE9mLCBJbmZlcnJlZEluc3RhbmNlT2YgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRleHRTdHJhdGVneTxUID0gYW55PiB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRleHQ6IFBhcnRpYWw8Q29udGV4dFR5cGU8VD4+KSB7fVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLXZhcmlhYmxlICovXHJcbiAgc2V0Q29udGV4dChjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8SW5mZXJyZWRJbnN0YW5jZU9mPFQ+Pik6IFBhcnRpYWw8Q29udGV4dFR5cGU8VD4+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm9Db250ZXh0U3RyYXRlZ3k8XHJcbiAgVCBleHRlbmRzIFR5cGU8YW55PiB8IFRlbXBsYXRlUmVmPGFueT4gPSBhbnlcclxuPiBleHRlbmRzIENvbnRleHRTdHJhdGVneTxUPiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih1bmRlZmluZWQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudENvbnRleHRTdHJhdGVneTxUIGV4dGVuZHMgVHlwZTxhbnk+ID0gYW55PiBleHRlbmRzIENvbnRleHRTdHJhdGVneTxUPiB7XHJcbiAgc2V0Q29udGV4dChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+KTogUGFydGlhbDxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+IHtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCkuZm9yRWFjaChrZXkgPT4gKGNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gdGhpcy5jb250ZXh0W2tleV0pKTtcclxuICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlQ29udGV4dFN0cmF0ZWd5PFQgZXh0ZW5kcyBUZW1wbGF0ZVJlZjxhbnk+ID0gYW55PiBleHRlbmRzIENvbnRleHRTdHJhdGVneTxUPiB7XHJcbiAgc2V0Q29udGV4dCgpOiBQYXJ0aWFsPEluZmVycmVkQ29udGV4dE9mPFQ+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRFWFRfU1RSQVRFR1kgPSB7XHJcbiAgTm9uZTxUIGV4dGVuZHMgVHlwZTxhbnk+IHwgVGVtcGxhdGVSZWY8YW55PiA9IGFueT4oKSB7XHJcbiAgICByZXR1cm4gbmV3IE5vQ29udGV4dFN0cmF0ZWd5PFQ+KCk7XHJcbiAgfSxcclxuICBDb21wb25lbnQ8VCBleHRlbmRzIFR5cGU8YW55PiA9IGFueT4oY29udGV4dDogUGFydGlhbDxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+KSB7XHJcbiAgICByZXR1cm4gbmV3IENvbXBvbmVudENvbnRleHRTdHJhdGVneTxUPihjb250ZXh0KTtcclxuICB9LFxyXG4gIFRlbXBsYXRlPFQgZXh0ZW5kcyBUZW1wbGF0ZVJlZjxhbnk+ID0gYW55Pihjb250ZXh0OiBQYXJ0aWFsPEluZmVycmVkQ29udGV4dE9mPFQ+Pikge1xyXG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZUNvbnRleHRTdHJhdGVneTxUPihjb250ZXh0KTtcclxuICB9LFxyXG59O1xyXG5cclxudHlwZSBDb250ZXh0VHlwZTxUPiA9IFQgZXh0ZW5kcyBUeXBlPGluZmVyIFU+IHwgVGVtcGxhdGVSZWY8aW5mZXIgVT4gPyBVIDogbmV2ZXI7XHJcbiJdfQ==