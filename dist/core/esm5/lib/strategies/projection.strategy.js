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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGlvbi5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL3Byb2plY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFDZCx3QkFBd0IsR0FPekIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFxQixrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdFLE9BQU8sRUFBbUIsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RSxPQUFPLEVBQWUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRTNEOzs7OztJQUNFLDRCQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztJQUFHLENBQUM7SUFHbkMseUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7SUFIYSxxQ0FBaUI7Ozs7OztJQUU3QixxRUFBNkU7Ozs7O0FBRy9FOzs7O0lBQXNFLHVEQUFxQjtJQUN6RixxQ0FDRSxTQUFZLEVBQ0osaUJBQW9DLEVBQ3BDLGVBQTBEO1FBQTFELGdDQUFBLEVBQUEsa0JBQW1DLGdCQUFnQixDQUFDLElBQUksRUFBRTtRQUhwRSxZQUtFLGtCQUFNLFNBQVMsQ0FBQyxTQUNqQjtRQUpTLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMscUJBQWUsR0FBZixlQUFlLENBQTJDOztJQUdwRSxDQUFDOzs7OztJQUVELG1EQUFhOzs7O0lBQWIsVUFBYyxRQUFrQjtRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7O1lBRTNCLFFBQVEsR0FBRyxtQkFBQSxRQUFRLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLEVBQTRCOztZQUM3RSxPQUFPLEdBQUcsUUFBUSxDQUFDLHVCQUF1QixDQUF3QixJQUFJLENBQUMsT0FBTyxDQUFDOztZ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QztJQUNELDJCQUEyQjs7Ozs7OztJQUEzQixVQUNFLFNBQVksRUFDWixZQUE4QixFQUM5QixPQUF3QztRQUV4QyxPQUFPLElBQUksMkJBQTJCLENBQ3BDLFNBQVMsRUFDVCxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQ3RDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQy9DLENBQUM7SUFDSixDQUFDO0lBQ0QsMEJBQTBCOzs7Ozs7O0lBQTFCLFVBQ0UsV0FBYyxFQUNkLFlBQThCLEVBQzlCLE9BQXVDO1FBRXZDLE9BQU8sSUFBSSwwQkFBMEIsQ0FDbkMsV0FBVyxFQUNYLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFDdEMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FDOUMsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5qZWN0b3IsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHlwZSxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmZlcnJlZENvbnRleHRPZiwgSW5mZXJyZWRJbnN0YW5jZU9mIH0gZnJvbSAnLi4vbW9kZWxzL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBDb250YWluZXJTdHJhdGVneSwgQ09OVEFJTkVSX1NUUkFURUdZIH0gZnJvbSAnLi9jb250YWluZXIuc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBDb250ZXh0U3RyYXRlZ3ksIENPTlRFWFRfU1RSQVRFR1kgfSBmcm9tICcuL2NvbnRleHQuc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBEb21TdHJhdGVneSwgRE9NX1NUUkFURUdZIH0gZnJvbSAnLi9kb20uc3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb2plY3Rpb25TdHJhdGVneTxUID0gYW55PiB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNvbnRlbnQ6IFQpIHt9XHJcblxyXG4gIGFic3RyYWN0IGluamVjdENvbnRlbnQoaW5qZWN0b3I6IEluamVjdG9yKTogQ29tcG9uZW50UmVmT3JFbWJlZGRlZFZpZXdSZWY8VD47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VCBleHRlbmRzIFR5cGU8YW55Pj4gZXh0ZW5kcyBQcm9qZWN0aW9uU3RyYXRlZ3k8VD4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29tcG9uZW50OiBULFxyXG4gICAgcHJpdmF0ZSBjb250YWluZXJTdHJhdGVneTogQ29udGFpbmVyU3RyYXRlZ3ksXHJcbiAgICBwcml2YXRlIGNvbnRleHRTdHJhdGVneTogQ29udGV4dFN0cmF0ZWd5ID0gQ09OVEVYVF9TVFJBVEVHWS5Ob25lKCksXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgaW5qZWN0Q29udGVudChpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIHRoaXMuY29udGFpbmVyU3RyYXRlZ3kucHJlcGFyZSgpO1xyXG5cclxuICAgIGNvbnN0IHJlc29sdmVyID0gaW5qZWN0b3IuZ2V0KENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgYXMgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xyXG4gICAgY29uc3QgZmFjdG9yeSA9IHJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PEluZmVycmVkSW5zdGFuY2VPZjxUPj4odGhpcy5jb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lclN0cmF0ZWd5LmNvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXHJcbiAgICAgIGZhY3RvcnksXHJcbiAgICAgIHRoaXMuY29udGFpbmVyU3RyYXRlZ3kuZ2V0SW5kZXgoKSxcclxuICAgICAgaW5qZWN0b3IsXHJcbiAgICApO1xyXG4gICAgdGhpcy5jb250ZXh0U3RyYXRlZ3kuc2V0Q29udGV4dChjb21wb25lbnRSZWYpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnRSZWYgYXMgQ29tcG9uZW50UmVmT3JFbWJlZGRlZFZpZXdSZWY8VD47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudFByb2plY3Rpb25TdHJhdGVneTxUIGV4dGVuZHMgVHlwZTxhbnk+PiBleHRlbmRzIFByb2plY3Rpb25TdHJhdGVneTxUPiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjb21wb25lbnQ6IFQsXHJcbiAgICBwcml2YXRlIGNvbnRleHRTdHJhdGVneTogQ29udGV4dFN0cmF0ZWd5ID0gQ09OVEVYVF9TVFJBVEVHWS5Ob25lKCksXHJcbiAgICBwcml2YXRlIGRvbVN0cmF0ZWd5OiBEb21TdHJhdGVneSA9IERPTV9TVFJBVEVHWS5BcHBlbmRUb0JvZHkoKSxcclxuICApIHtcclxuICAgIHN1cGVyKGNvbXBvbmVudCk7XHJcbiAgfVxyXG5cclxuICBpbmplY3RDb250ZW50KGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgY29uc3QgYXBwUmVmID0gaW5qZWN0b3IuZ2V0KEFwcGxpY2F0aW9uUmVmKTtcclxuICAgIGNvbnN0IHJlc29sdmVyID0gaW5qZWN0b3IuZ2V0KENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgYXMgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gcmVzb2x2ZXJcclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PEluZmVycmVkSW5zdGFuY2VPZjxUPj4odGhpcy5jb250ZW50KVxyXG4gICAgICAuY3JlYXRlKGluamVjdG9yKTtcclxuXHJcbiAgICB0aGlzLmNvbnRleHRTdHJhdGVneS5zZXRDb250ZXh0KGNvbXBvbmVudFJlZik7XHJcblxyXG4gICAgYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdO1xyXG4gICAgdGhpcy5kb21TdHJhdGVneS5pbnNlcnRFbGVtZW50KGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnRSZWYgYXMgQ29tcG9uZW50UmVmT3JFbWJlZGRlZFZpZXdSZWY8VD47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQcm9qZWN0aW9uU3RyYXRlZ3k8VCBleHRlbmRzIFRlbXBsYXRlUmVmPGFueT4+IGV4dGVuZHMgUHJvamVjdGlvblN0cmF0ZWd5PFQ+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRlbXBsYXRlUmVmOiBULFxyXG4gICAgcHJpdmF0ZSBjb250YWluZXJTdHJhdGVneTogQ29udGFpbmVyU3RyYXRlZ3ksXHJcbiAgICBwcml2YXRlIGNvbnRleHRTdHJhdGVneSA9IENPTlRFWFRfU1RSQVRFR1kuTm9uZSgpLFxyXG4gICkge1xyXG4gICAgc3VwZXIodGVtcGxhdGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgaW5qZWN0Q29udGVudCgpIHtcclxuICAgIHRoaXMuY29udGFpbmVyU3RyYXRlZ3kucHJlcGFyZSgpO1xyXG5cclxuICAgIGNvbnN0IGVtYmVkZGVkVmlld1JlZiA9IHRoaXMuY29udGFpbmVyU3RyYXRlZ3kuY29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhcclxuICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICB0aGlzLmNvbnRleHRTdHJhdGVneS5jb250ZXh0LFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclN0cmF0ZWd5LmdldEluZGV4KCksXHJcbiAgICApO1xyXG4gICAgZW1iZWRkZWRWaWV3UmVmLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICByZXR1cm4gZW1iZWRkZWRWaWV3UmVmIGFzIENvbXBvbmVudFJlZk9yRW1iZWRkZWRWaWV3UmVmPFQ+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBST0pFQ1RJT05fU1RSQVRFR1kgPSB7XHJcbiAgQXBwZW5kQ29tcG9uZW50VG9Cb2R5PFQgZXh0ZW5kcyBUeXBlPHVua25vd24+PihcclxuICAgIGNvbXBvbmVudDogVCxcclxuICAgIGNvbnRleHQ/OiBQYXJ0aWFsPEluZmVycmVkSW5zdGFuY2VPZjxUPj4sXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gbmV3IFJvb3RDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLkNvbXBvbmVudChjb250ZXh0KSxcclxuICAgICk7XHJcbiAgfSxcclxuICBBcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVHlwZTx1bmtub3duPj4oXHJcbiAgICBjb21wb25lbnQ6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogUGFydGlhbDxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLkFwcGVuZChjb250YWluZXJSZWYpLFxyXG4gICAgICBjb250ZXh0ICYmIENPTlRFWFRfU1RSQVRFR1kuQ29tcG9uZW50KGNvbnRleHQpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIEFwcGVuZFRlbXBsYXRlVG9Db250YWluZXI8VCBleHRlbmRzIFRlbXBsYXRlUmVmPHVua25vd24+PihcclxuICAgIHRlbXBsYXRlUmVmOiBULFxyXG4gICAgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgY29udGV4dD86IFBhcnRpYWw8SW5mZXJyZWRDb250ZXh0T2Y8VD4+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZVByb2plY3Rpb25TdHJhdGVneTxUPihcclxuICAgICAgdGVtcGxhdGVSZWYsXHJcbiAgICAgIENPTlRBSU5FUl9TVFJBVEVHWS5BcHBlbmQoY29udGFpbmVyUmVmKSxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLlRlbXBsYXRlKGNvbnRleHQpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIFByZXBlbmRDb21wb25lbnRUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVHlwZTx1bmtub3duPj4oXHJcbiAgICBjb21wb25lbnQ6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogUGFydGlhbDxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLlByZXBlbmQoY29udGFpbmVyUmVmKSxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLkNvbXBvbmVudChjb250ZXh0KSxcclxuICAgICk7XHJcbiAgfSxcclxuICBQcmVwZW5kVGVtcGxhdGVUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVGVtcGxhdGVSZWY8dW5rbm93bj4+KFxyXG4gICAgdGVtcGxhdGVSZWY6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogUGFydGlhbDxJbmZlcnJlZENvbnRleHRPZjxUPj4sXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gbmV3IFRlbXBsYXRlUHJvamVjdGlvblN0cmF0ZWd5PFQ+KFxyXG4gICAgICB0ZW1wbGF0ZVJlZixcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLlByZXBlbmQoY29udGFpbmVyUmVmKSxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLlRlbXBsYXRlKGNvbnRleHQpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIFByb2plY3RDb21wb25lbnRUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVHlwZTx1bmtub3duPj4oXHJcbiAgICBjb21wb25lbnQ6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogUGFydGlhbDxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLkNsZWFyKGNvbnRhaW5lclJlZiksXHJcbiAgICAgIGNvbnRleHQgJiYgQ09OVEVYVF9TVFJBVEVHWS5Db21wb25lbnQoY29udGV4dCksXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgUHJvamVjdFRlbXBsYXRlVG9Db250YWluZXI8VCBleHRlbmRzIFRlbXBsYXRlUmVmPHVua25vd24+PihcclxuICAgIHRlbXBsYXRlUmVmOiBULFxyXG4gICAgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgY29udGV4dD86IFBhcnRpYWw8SW5mZXJyZWRDb250ZXh0T2Y8VD4+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZVByb2plY3Rpb25TdHJhdGVneTxUPihcclxuICAgICAgdGVtcGxhdGVSZWYsXHJcbiAgICAgIENPTlRBSU5FUl9TVFJBVEVHWS5DbGVhcihjb250YWluZXJSZWYpLFxyXG4gICAgICBjb250ZXh0ICYmIENPTlRFWFRfU1RSQVRFR1kuVGVtcGxhdGUoY29udGV4dCksXHJcbiAgICApO1xyXG4gIH0sXHJcbn07XHJcblxyXG50eXBlIENvbXBvbmVudFJlZk9yRW1iZWRkZWRWaWV3UmVmPFQ+ID0gVCBleHRlbmRzIFR5cGU8aW5mZXIgVT5cclxuICA/IENvbXBvbmVudFJlZjxVPlxyXG4gIDogVCBleHRlbmRzIFRlbXBsYXRlUmVmPGluZmVyIEM+XHJcbiAgPyBFbWJlZGRlZFZpZXdSZWY8Qz5cclxuICA6IG5ldmVyO1xyXG4iXX0=