/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/context.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
export class ContextStrategy {
    /**
     * @param {?} context
     */
    constructor(context) {
        this.context = context;
    }
    /* tslint:disable-next-line:no-unused-variable */
    /**
     * @param {?=} componentRef
     * @return {?}
     */
    setContext(componentRef) {
        return this.context;
    }
}
if (false) {
    /** @type {?} */
    ContextStrategy.prototype.context;
}
/**
 * @template T
 */
export class NoContextStrategy extends ContextStrategy {
    constructor() {
        super(undefined);
    }
}
/**
 * @template T
 */
export class ComponentContextStrategy extends ContextStrategy {
    /**
     * @param {?} componentRef
     * @return {?}
     */
    setContext(componentRef) {
        Object.keys(this.context).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => (componentRef.instance[key] = this.context[key])));
        componentRef.changeDetectorRef.detectChanges();
        return this.context;
    }
}
/**
 * @template T
 */
export class TemplateContextStrategy extends ContextStrategy {
    /**
     * @return {?}
     */
    setContext() {
        return this.context;
    }
}
/** @type {?} */
export const CONTEXT_STRATEGY = {
    /**
     * @template T
     * @return {?}
     */
    None() {
        return new NoContextStrategy();
    },
    /**
     * @template T
     * @param {?} context
     * @return {?}
     */
    Component(context) {
        return new ComponentContextStrategy(context);
    },
    /**
     * @template T
     * @param {?} context
     * @return {?}
     */
    Template(context) {
        return new TemplateContextStrategy(context);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL2NvbnRleHQuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EsTUFBTSxPQUFnQixlQUFlOzs7O0lBQ25DLFlBQW1CLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO0lBQUcsQ0FBQzs7Ozs7O0lBR3ZELFVBQVUsQ0FBQyxZQUFrRDtRQUMzRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztDQUNGOzs7SUFOYSxrQ0FBdUM7Ozs7O0FBUXJELE1BQU0sT0FBTyxpQkFFWCxTQUFRLGVBQWtCO0lBQzFCO1FBQ0UsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7Q0FDRjs7OztBQUVELE1BQU0sT0FBTyx3QkFBb0QsU0FBUSxlQUFrQjs7Ozs7SUFDekYsVUFBVSxDQUFDLFlBQWlEO1FBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUMzRixZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjs7OztBQUVELE1BQU0sT0FBTyx1QkFBMEQsU0FBUSxlQUFrQjs7OztJQUMvRixVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjs7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQUc7Ozs7O0lBQzlCLElBQUk7UUFDRixPQUFPLElBQUksaUJBQWlCLEVBQUssQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFDRCxTQUFTLENBQTRCLE9BQXVDO1FBQzFFLE9BQU8sSUFBSSx3QkFBd0IsQ0FBSSxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFDRCxRQUFRLENBQW1DLE9BQXNDO1FBQy9FLE9BQU8sSUFBSSx1QkFBdUIsQ0FBSSxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluZmVycmVkQ29udGV4dE9mLCBJbmZlcnJlZEluc3RhbmNlT2YgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRleHRTdHJhdGVneTxUID0gYW55PiB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRleHQ6IFBhcnRpYWw8Q29udGV4dFR5cGU8VD4+KSB7fVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLXZhcmlhYmxlICovXHJcbiAgc2V0Q29udGV4dChjb21wb25lbnRSZWY/OiBDb21wb25lbnRSZWY8SW5mZXJyZWRJbnN0YW5jZU9mPFQ+Pik6IFBhcnRpYWw8Q29udGV4dFR5cGU8VD4+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm9Db250ZXh0U3RyYXRlZ3k8XHJcbiAgVCBleHRlbmRzIFR5cGU8YW55PiB8IFRlbXBsYXRlUmVmPGFueT4gPSBhbnlcclxuPiBleHRlbmRzIENvbnRleHRTdHJhdGVneTxUPiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih1bmRlZmluZWQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudENvbnRleHRTdHJhdGVneTxUIGV4dGVuZHMgVHlwZTxhbnk+ID0gYW55PiBleHRlbmRzIENvbnRleHRTdHJhdGVneTxUPiB7XHJcbiAgc2V0Q29udGV4dChjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+KTogUGFydGlhbDxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+IHtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCkuZm9yRWFjaChrZXkgPT4gKGNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gdGhpcy5jb250ZXh0W2tleV0pKTtcclxuICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlQ29udGV4dFN0cmF0ZWd5PFQgZXh0ZW5kcyBUZW1wbGF0ZVJlZjxhbnk+ID0gYW55PiBleHRlbmRzIENvbnRleHRTdHJhdGVneTxUPiB7XHJcbiAgc2V0Q29udGV4dCgpOiBQYXJ0aWFsPEluZmVycmVkQ29udGV4dE9mPFQ+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTlRFWFRfU1RSQVRFR1kgPSB7XHJcbiAgTm9uZTxUIGV4dGVuZHMgVHlwZTxhbnk+IHwgVGVtcGxhdGVSZWY8YW55PiA9IGFueT4oKSB7XHJcbiAgICByZXR1cm4gbmV3IE5vQ29udGV4dFN0cmF0ZWd5PFQ+KCk7XHJcbiAgfSxcclxuICBDb21wb25lbnQ8VCBleHRlbmRzIFR5cGU8YW55PiA9IGFueT4oY29udGV4dDogUGFydGlhbDxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+KSB7XHJcbiAgICByZXR1cm4gbmV3IENvbXBvbmVudENvbnRleHRTdHJhdGVneTxUPihjb250ZXh0KTtcclxuICB9LFxyXG4gIFRlbXBsYXRlPFQgZXh0ZW5kcyBUZW1wbGF0ZVJlZjxhbnk+ID0gYW55Pihjb250ZXh0OiBQYXJ0aWFsPEluZmVycmVkQ29udGV4dE9mPFQ+Pikge1xyXG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZUNvbnRleHRTdHJhdGVneTxUPihjb250ZXh0KTtcclxuICB9LFxyXG59O1xyXG5cclxudHlwZSBDb250ZXh0VHlwZTxUPiA9IFQgZXh0ZW5kcyBUeXBlPGluZmVyIFU+IHwgVGVtcGxhdGVSZWY8aW5mZXIgVT4gPyBVIDogbmV2ZXI7XHJcbiJdfQ==