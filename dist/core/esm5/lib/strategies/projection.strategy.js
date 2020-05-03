/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/projection.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, } from '@angular/core';
import { CONTAINER_STRATEGY } from './container.strategy';
import { CONTEXT_STRATEGY } from './context.strategy';
import { DOM_STRATEGY } from './dom.strategy';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
ProjectionStrategy = /** @class */ (function () {
    function ProjectionStrategy(content) {
        this.content = content;
    }
    return ProjectionStrategy;
}());
/**
 * @abstract
 * @template T
 */
export { ProjectionStrategy };
if (false) {
    /** @type {?} */
    ProjectionStrategy.prototype.content;
    /**
     * @abstract
     * @param {?} injector
     * @return {?}
     */
    ProjectionStrategy.prototype.injectContent = function (injector) { };
}
/**
 * @template T
 */
var /**
 * @template T
 */
ComponentProjectionStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(ComponentProjectionStrategy, _super);
    function ComponentProjectionStrategy(component, containerStrategy, contextStrategy) {
        if (contextStrategy === void 0) { contextStrategy = CONTEXT_STRATEGY.None(); }
        var _this = _super.call(this, component) || this;
        _this.containerStrategy = containerStrategy;
        _this.contextStrategy = contextStrategy;
        return _this;
    }
    /**
     * @param {?} injector
     * @return {?}
     */
    ComponentProjectionStrategy.prototype.injectContent = /**
     * @param {?} injector
     * @return {?}
     */
    function (injector) {
        this.containerStrategy.prepare();
        /** @type {?} */
        var resolver = (/** @type {?} */ (injector.get(ComponentFactoryResolver)));
        /** @type {?} */
        var factory = resolver.resolveComponentFactory(this.content);
        /** @type {?} */
        var componentRef = this.containerStrategy.containerRef.createComponent(factory, this.containerStrategy.getIndex(), injector);
        this.contextStrategy.setContext(componentRef);
        return (/** @type {?} */ (componentRef));
    };
    return ComponentProjectionStrategy;
}(ProjectionStrategy));
/**
 * @template T
 */
export { ComponentProjectionStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentProjectionStrategy.prototype.containerStrategy;
    /**
     * @type {?}
     * @private
     */
    ComponentProjectionStrategy.prototype.contextStrategy;
}
/**
 * @template T
 */
var /**
 * @template T
 */
RootComponentProjectionStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(RootComponentProjectionStrategy, _super);
    function RootComponentProjectionStrategy(component, contextStrategy, domStrategy) {
        if (contextStrategy === void 0) { contextStrategy = CONTEXT_STRATEGY.None(); }
        if (domStrategy === void 0) { domStrategy = DOM_STRATEGY.AppendToBody(); }
        var _this = _super.call(this, component) || this;
        _this.contextStrategy = contextStrategy;
        _this.domStrategy = domStrategy;
        return _this;
    }
    /**
     * @param {?} injector
     * @return {?}
     */
    RootComponentProjectionStrategy.prototype.injectContent = /**
     * @param {?} injector
     * @return {?}
     */
    function (injector) {
        /** @type {?} */
        var appRef = injector.get(ApplicationRef);
        /** @type {?} */
        var resolver = (/** @type {?} */ (injector.get(ComponentFactoryResolver)));
        /** @type {?} */
        var componentRef = resolver
            .resolveComponentFactory(this.content)
            .create(injector);
        this.contextStrategy.setContext(componentRef);
        appRef.attachView(componentRef.hostView);
        /** @type {?} */
        var element = ((/** @type {?} */ (componentRef.hostView))).rootNodes[0];
        this.domStrategy.insertElement(element);
        return (/** @type {?} */ (componentRef));
    };
    return RootComponentProjectionStrategy;
}(ProjectionStrategy));
/**
 * @template T
 */
export { RootComponentProjectionStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RootComponentProjectionStrategy.prototype.contextStrategy;
    /**
     * @type {?}
     * @private
     */
    RootComponentProjectionStrategy.prototype.domStrategy;
}
/**
 * @template T
 */
var /**
 * @template T
 */
TemplateProjectionStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateProjectionStrategy, _super);
    function TemplateProjectionStrategy(templateRef, containerStrategy, contextStrategy) {
        if (contextStrategy === void 0) { contextStrategy = CONTEXT_STRATEGY.None(); }
        var _this = _super.call(this, templateRef) || this;
        _this.containerStrategy = containerStrategy;
        _this.contextStrategy = contextStrategy;
        return _this;
    }
    /**
     * @return {?}
     */
    TemplateProjectionStrategy.prototype.injectContent = /**
     * @return {?}
     */
    function () {
        this.containerStrategy.prepare();
        /** @type {?} */
        var embeddedViewRef = this.containerStrategy.containerRef.createEmbeddedView(this.content, this.contextStrategy.context, this.containerStrategy.getIndex());
        embeddedViewRef.detectChanges();
        return (/** @type {?} */ (embeddedViewRef));
    };
    return TemplateProjectionStrategy;
}(ProjectionStrategy));
/**
 * @template T
 */
export { TemplateProjectionStrategy };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TemplateProjectionStrategy.prototype.containerStrategy;
    /**
     * @type {?}
     * @private
     */
    TemplateProjectionStrategy.prototype.contextStrategy;
}
/** @type {?} */
export var PROJECTION_STRATEGY = {
    AppendComponentToBody: /**
     * @template T
     * @param {?} component
     * @param {?=} context
     * @return {?}
     */
    function (component, context) {
        return new RootComponentProjectionStrategy(component, context && CONTEXT_STRATEGY.Component(context));
    },
    AppendComponentToContainer: /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    AppendTemplateToContainer: /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
    PrependComponentToContainer: /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    PrependTemplateToContainer: /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
    ProjectComponentToContainer: /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Clear(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    ProjectTemplateToContainer: /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    function (templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Clear(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGlvbi5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL3Byb2plY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFDZCx3QkFBd0IsR0FPekIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFxQixrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdFLE9BQU8sRUFBbUIsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RSxPQUFPLEVBQWUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRTNEOzs7OztJQUNFLDRCQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztJQUFHLENBQUM7SUFHbkMseUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7SUFIYSxxQ0FBaUI7Ozs7OztJQUU3QixxRUFBNkU7Ozs7O0FBRy9FOzs7O0lBQXNFLHVEQUFxQjtJQUN6RixxQ0FDRSxTQUFZLEVBQ0osaUJBQW9DLEVBQ3BDLGVBQTBEO1FBQTFELGdDQUFBLEVBQUEsa0JBQW1DLGdCQUFnQixDQUFDLElBQUksRUFBRTtRQUhwRSxZQUtFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUpTLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMscUJBQWUsR0FBZixlQUFlLENBQTJDOztJQUdwRSxDQUFDOzs7OztJQUVELG1EQUFhOzs7O0lBQWIsVUFBYyxRQUFrQjtRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7O1lBRTNCLFFBQVEsR0FBRyxtQkFBQSxRQUFRLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLEVBQTRCOztZQUM3RSxPQUFPLEdBQUcsUUFBUSxDQUFDLHVCQUF1QixDQUF3QixJQUFJLENBQUMsT0FBTyxDQUFDOztZ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QUM7SUFDRCwyQkFBMkI7Ozs7Ozs7SUFBM0IsVUFDRSxTQUFZLEVBQ1osWUFBOEIsRUFDOUIsT0FBK0I7UUFFL0IsT0FBTyxJQUFJLDJCQUEyQixDQUNwQyxTQUFTLEVBQ1Qsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUN0QyxPQUFPLElBQUksZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUNELDBCQUEwQjs7Ozs7OztJQUExQixVQUNFLFdBQWMsRUFDZCxZQUE4QixFQUM5QixPQUE4QjtRQUU5QixPQUFPLElBQUksMEJBQTBCLENBQ25DLFdBQVcsRUFDWCxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQ3RDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQzlDLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEluamVjdG9yLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5mZXJyZWRDb250ZXh0T2YsIEluZmVycmVkSW5zdGFuY2VPZiB9IGZyb20gJy4uL21vZGVscy91dGlsaXR5JztcclxuaW1wb3J0IHsgQ29udGFpbmVyU3RyYXRlZ3ksIENPTlRBSU5FUl9TVFJBVEVHWSB9IGZyb20gJy4vY29udGFpbmVyLnN0cmF0ZWd5JztcclxuaW1wb3J0IHsgQ29udGV4dFN0cmF0ZWd5LCBDT05URVhUX1NUUkFURUdZIH0gZnJvbSAnLi9jb250ZXh0LnN0cmF0ZWd5JztcclxuaW1wb3J0IHsgRG9tU3RyYXRlZ3ksIERPTV9TVFJBVEVHWSB9IGZyb20gJy4vZG9tLnN0cmF0ZWd5JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9qZWN0aW9uU3RyYXRlZ3k8VCA9IGFueT4ge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250ZW50OiBUKSB7fVxyXG5cclxuICBhYnN0cmFjdCBpbmplY3RDb250ZW50KGluamVjdG9yOiBJbmplY3Rvcik6IENvbXBvbmVudFJlZk9yRW1iZWRkZWRWaWV3UmVmPFQ+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UHJvamVjdGlvblN0cmF0ZWd5PFQgZXh0ZW5kcyBUeXBlPGFueT4+IGV4dGVuZHMgUHJvamVjdGlvblN0cmF0ZWd5PFQ+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvbXBvbmVudDogVCxcclxuICAgIHByaXZhdGUgY29udGFpbmVyU3RyYXRlZ3k6IENvbnRhaW5lclN0cmF0ZWd5LFxyXG4gICAgcHJpdmF0ZSBjb250ZXh0U3RyYXRlZ3k6IENvbnRleHRTdHJhdGVneSA9IENPTlRFWFRfU1RSQVRFR1kuTm9uZSgpLFxyXG4gICkge1xyXG4gICAgc3VwZXIoY29tcG9uZW50KTtcclxuICB9XHJcblxyXG4gIGluamVjdENvbnRlbnQoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lclN0cmF0ZWd5LnByZXBhcmUoKTtcclxuXHJcbiAgICBjb25zdCByZXNvbHZlciA9IGluamVjdG9yLmdldChDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIGFzIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSByZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+KHRoaXMuY29udGVudCk7XHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXJTdHJhdGVneS5jb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxyXG4gICAgICBmYWN0b3J5LFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclN0cmF0ZWd5LmdldEluZGV4KCksXHJcbiAgICAgIGluamVjdG9yLFxyXG4gICAgKTtcclxuICAgIHRoaXMuY29udGV4dFN0cmF0ZWd5LnNldENvbnRleHQoY29tcG9uZW50UmVmKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50UmVmIGFzIENvbXBvbmVudFJlZk9yRW1iZWRkZWRWaWV3UmVmPFQ+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VCBleHRlbmRzIFR5cGU8YW55Pj4gZXh0ZW5kcyBQcm9qZWN0aW9uU3RyYXRlZ3k8VD4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29tcG9uZW50OiBULFxyXG4gICAgcHJpdmF0ZSBjb250ZXh0U3RyYXRlZ3k6IENvbnRleHRTdHJhdGVneSA9IENPTlRFWFRfU1RSQVRFR1kuTm9uZSgpLFxyXG4gICAgcHJpdmF0ZSBkb21TdHJhdGVneTogRG9tU3RyYXRlZ3kgPSBET01fU1RSQVRFR1kuQXBwZW5kVG9Cb2R5KCksXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgaW5qZWN0Q29udGVudChpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIGNvbnN0IGFwcFJlZiA9IGluamVjdG9yLmdldChBcHBsaWNhdGlvblJlZik7XHJcbiAgICBjb25zdCByZXNvbHZlciA9IGluamVjdG9yLmdldChDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIGFzIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHJlc29sdmVyXHJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+KHRoaXMuY29udGVudClcclxuICAgICAgLmNyZWF0ZShpbmplY3Rvcik7XHJcblxyXG4gICAgdGhpcy5jb250ZXh0U3RyYXRlZ3kuc2V0Q29udGV4dChjb21wb25lbnRSZWYpO1xyXG5cclxuICAgIGFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXTtcclxuICAgIHRoaXMuZG9tU3RyYXRlZ3kuaW5zZXJ0RWxlbWVudChlbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50UmVmIGFzIENvbXBvbmVudFJlZk9yRW1iZWRkZWRWaWV3UmVmPFQ+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvamVjdGlvblN0cmF0ZWd5PFQgZXh0ZW5kcyBUZW1wbGF0ZVJlZjxhbnk+PiBleHRlbmRzIFByb2plY3Rpb25TdHJhdGVneTxUPiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0ZW1wbGF0ZVJlZjogVCxcclxuICAgIHByaXZhdGUgY29udGFpbmVyU3RyYXRlZ3k6IENvbnRhaW5lclN0cmF0ZWd5LFxyXG4gICAgcHJpdmF0ZSBjb250ZXh0U3RyYXRlZ3kgPSBDT05URVhUX1NUUkFURUdZLk5vbmUoKSxcclxuICApIHtcclxuICAgIHN1cGVyKHRlbXBsYXRlUmVmKTtcclxuICB9XHJcblxyXG4gIGluamVjdENvbnRlbnQoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lclN0cmF0ZWd5LnByZXBhcmUoKTtcclxuXHJcbiAgICBjb25zdCBlbWJlZGRlZFZpZXdSZWYgPSB0aGlzLmNvbnRhaW5lclN0cmF0ZWd5LmNvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoXHJcbiAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgdGhpcy5jb250ZXh0U3RyYXRlZ3kuY29udGV4dCxcclxuICAgICAgdGhpcy5jb250YWluZXJTdHJhdGVneS5nZXRJbmRleCgpLFxyXG4gICAgKTtcclxuICAgIGVtYmVkZGVkVmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgcmV0dXJuIGVtYmVkZGVkVmlld1JlZiBhcyBDb21wb25lbnRSZWZPckVtYmVkZGVkVmlld1JlZjxUPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQUk9KRUNUSU9OX1NUUkFURUdZID0ge1xyXG4gIEFwcGVuZENvbXBvbmVudFRvQm9keTxUIGV4dGVuZHMgVHlwZTx1bmtub3duPj4oY29tcG9uZW50OiBULCBjb250ZXh0PzogSW5mZXJyZWRJbnN0YW5jZU9mPFQ+KSB7XHJcbiAgICByZXR1cm4gbmV3IFJvb3RDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLkNvbXBvbmVudChjb250ZXh0KSxcclxuICAgICk7XHJcbiAgfSxcclxuICBBcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVHlwZTx1bmtub3duPj4oXHJcbiAgICBjb21wb25lbnQ6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogSW5mZXJyZWRJbnN0YW5jZU9mPFQ+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLkFwcGVuZChjb250YWluZXJSZWYpLFxyXG4gICAgICBjb250ZXh0ICYmIENPTlRFWFRfU1RSQVRFR1kuQ29tcG9uZW50KGNvbnRleHQpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIEFwcGVuZFRlbXBsYXRlVG9Db250YWluZXI8VCBleHRlbmRzIFRlbXBsYXRlUmVmPHVua25vd24+PihcclxuICAgIHRlbXBsYXRlUmVmOiBULFxyXG4gICAgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgY29udGV4dD86IEluZmVycmVkQ29udGV4dE9mPFQ+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZVByb2plY3Rpb25TdHJhdGVneTxUPihcclxuICAgICAgdGVtcGxhdGVSZWYsXHJcbiAgICAgIENPTlRBSU5FUl9TVFJBVEVHWS5BcHBlbmQoY29udGFpbmVyUmVmKSxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLlRlbXBsYXRlKGNvbnRleHQpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIFByZXBlbmRDb21wb25lbnRUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVHlwZTx1bmtub3duPj4oXHJcbiAgICBjb21wb25lbnQ6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogSW5mZXJyZWRJbnN0YW5jZU9mPFQ+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLlByZXBlbmQoY29udGFpbmVyUmVmKSxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLkNvbXBvbmVudChjb250ZXh0KSxcclxuICAgICk7XHJcbiAgfSxcclxuICBQcmVwZW5kVGVtcGxhdGVUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVGVtcGxhdGVSZWY8dW5rbm93bj4+KFxyXG4gICAgdGVtcGxhdGVSZWY6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogSW5mZXJyZWRDb250ZXh0T2Y8VD4sXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gbmV3IFRlbXBsYXRlUHJvamVjdGlvblN0cmF0ZWd5PFQ+KFxyXG4gICAgICB0ZW1wbGF0ZVJlZixcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLlByZXBlbmQoY29udGFpbmVyUmVmKSxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLlRlbXBsYXRlKGNvbnRleHQpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIFByb2plY3RDb21wb25lbnRUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVHlwZTx1bmtub3duPj4oXHJcbiAgICBjb21wb25lbnQ6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogSW5mZXJyZWRJbnN0YW5jZU9mPFQ+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLkNsZWFyKGNvbnRhaW5lclJlZiksXHJcbiAgICAgIGNvbnRleHQgJiYgQ09OVEVYVF9TVFJBVEVHWS5Db21wb25lbnQoY29udGV4dCksXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgUHJvamVjdFRlbXBsYXRlVG9Db250YWluZXI8VCBleHRlbmRzIFRlbXBsYXRlUmVmPHVua25vd24+PihcclxuICAgIHRlbXBsYXRlUmVmOiBULFxyXG4gICAgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgY29udGV4dD86IEluZmVycmVkQ29udGV4dE9mPFQ+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZVByb2plY3Rpb25TdHJhdGVneTxUPihcclxuICAgICAgdGVtcGxhdGVSZWYsXHJcbiAgICAgIENPTlRBSU5FUl9TVFJBVEVHWS5DbGVhcihjb250YWluZXJSZWYpLFxyXG4gICAgICBjb250ZXh0ICYmIENPTlRFWFRfU1RSQVRFR1kuVGVtcGxhdGUoY29udGV4dCksXHJcbiAgICApO1xyXG4gIH0sXHJcbn07XHJcblxyXG50eXBlIENvbXBvbmVudFJlZk9yRW1iZWRkZWRWaWV3UmVmPFQ+ID0gVCBleHRlbmRzIFR5cGU8aW5mZXIgVT5cclxuICA/IENvbXBvbmVudFJlZjxVPlxyXG4gIDogVCBleHRlbmRzIFRlbXBsYXRlUmVmPGluZmVyIEM+XHJcbiAgPyBFbWJlZGRlZFZpZXdSZWY8Qz5cclxuICA6IG5ldmVyO1xyXG4iXX0=