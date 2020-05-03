/**
 * @fileoverview added by tsickle
 * Generated from: lib/strategies/projection.strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, } from '@angular/core';
import { CONTAINER_STRATEGY } from './container.strategy';
import { CONTEXT_STRATEGY } from './context.strategy';
import { DOM_STRATEGY } from './dom.strategy';
/**
 * @abstract
 * @template T
 */
export class ProjectionStrategy {
    /**
     * @param {?} content
     */
    constructor(content) {
        this.content = content;
    }
}
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
export class ComponentProjectionStrategy extends ProjectionStrategy {
    /**
     * @param {?} component
     * @param {?} containerStrategy
     * @param {?=} contextStrategy
     */
    constructor(component, containerStrategy, contextStrategy = CONTEXT_STRATEGY.None()) {
        super(component);
        this.containerStrategy = containerStrategy;
        this.contextStrategy = contextStrategy;
    }
    /**
     * @param {?} injector
     * @return {?}
     */
    injectContent(injector) {
        this.containerStrategy.prepare();
        /** @type {?} */
        const resolver = (/** @type {?} */ (injector.get(ComponentFactoryResolver)));
        /** @type {?} */
        const factory = resolver.resolveComponentFactory(this.content);
        /** @type {?} */
        const componentRef = this.containerStrategy.containerRef.createComponent(factory, this.containerStrategy.getIndex(), injector);
        this.contextStrategy.setContext(componentRef);
        return (/** @type {?} */ (componentRef));
    }
}
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
export class RootComponentProjectionStrategy extends ProjectionStrategy {
    /**
     * @param {?} component
     * @param {?=} contextStrategy
     * @param {?=} domStrategy
     */
    constructor(component, contextStrategy = CONTEXT_STRATEGY.None(), domStrategy = DOM_STRATEGY.AppendToBody()) {
        super(component);
        this.contextStrategy = contextStrategy;
        this.domStrategy = domStrategy;
    }
    /**
     * @param {?} injector
     * @return {?}
     */
    injectContent(injector) {
        /** @type {?} */
        const appRef = injector.get(ApplicationRef);
        /** @type {?} */
        const resolver = (/** @type {?} */ (injector.get(ComponentFactoryResolver)));
        /** @type {?} */
        const componentRef = resolver
            .resolveComponentFactory(this.content)
            .create(injector);
        this.contextStrategy.setContext(componentRef);
        appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const element = ((/** @type {?} */ (componentRef.hostView))).rootNodes[0];
        this.domStrategy.insertElement(element);
        return (/** @type {?} */ (componentRef));
    }
}
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
export class TemplateProjectionStrategy extends ProjectionStrategy {
    /**
     * @param {?} templateRef
     * @param {?} containerStrategy
     * @param {?=} contextStrategy
     */
    constructor(templateRef, containerStrategy, contextStrategy = CONTEXT_STRATEGY.None()) {
        super(templateRef);
        this.containerStrategy = containerStrategy;
        this.contextStrategy = contextStrategy;
    }
    /**
     * @return {?}
     */
    injectContent() {
        this.containerStrategy.prepare();
        /** @type {?} */
        const embeddedViewRef = this.containerStrategy.containerRef.createEmbeddedView(this.content, this.contextStrategy.context, this.containerStrategy.getIndex());
        embeddedViewRef.detectChanges();
        return (/** @type {?} */ (embeddedViewRef));
    }
}
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
export const PROJECTION_STRATEGY = {
    /**
     * @template T
     * @param {?} component
     * @param {?=} context
     * @return {?}
     */
    AppendComponentToBody(component, context) {
        return new RootComponentProjectionStrategy(component, context && CONTEXT_STRATEGY.Component(context));
    },
    /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    AppendComponentToContainer(component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    AppendTemplateToContainer(templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Append(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
    /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    PrependComponentToContainer(component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    PrependTemplateToContainer(templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Prepend(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
    /**
     * @template T
     * @param {?} component
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    ProjectComponentToContainer(component, containerRef, context) {
        return new ComponentProjectionStrategy(component, CONTAINER_STRATEGY.Clear(containerRef), context && CONTEXT_STRATEGY.Component(context));
    },
    /**
     * @template T
     * @param {?} templateRef
     * @param {?} containerRef
     * @param {?=} context
     * @return {?}
     */
    ProjectTemplateToContainer(templateRef, containerRef, context) {
        return new TemplateProjectionStrategy(templateRef, CONTAINER_STRATEGY.Clear(containerRef), context && CONTEXT_STRATEGY.Template(context));
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdGlvbi5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zdHJhdGVnaWVzL3Byb2plY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixHQU96QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQXFCLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUFtQixnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBZSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFM0QsTUFBTSxPQUFnQixrQkFBa0I7Ozs7SUFDdEMsWUFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7SUFBRyxDQUFDO0NBR2xDOzs7SUFIYSxxQ0FBaUI7Ozs7OztJQUU3QixxRUFBNkU7Ozs7O0FBRy9FLE1BQU0sT0FBTywyQkFBaUQsU0FBUSxrQkFBcUI7Ozs7OztJQUN6RixZQUNFLFNBQVksRUFDSixpQkFBb0MsRUFDcEMsa0JBQW1DLGdCQUFnQixDQUFDLElBQUksRUFBRTtRQUVsRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFIVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLG9CQUFlLEdBQWYsZUFBZSxDQUEyQztJQUdwRSxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxRQUFrQjtRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7O2NBRTNCLFFBQVEsR0FBRyxtQkFBQSxRQUFRLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLEVBQTRCOztjQUM3RSxPQUFPLEdBQUcsUUFBUSxDQUFDLHVCQUF1QixDQUF3QixJQUFJLENBQUMsT0FBTyxDQUFDOztjQUUvRSxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixD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QUU5QixPQUFPLElBQUksMEJBQTBCLENBQ25DLFdBQVcsRUFDWCxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQ3RDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQzlDLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRW1iZWRkZWRWaWV3UmVmLFxyXG4gIEluamVjdG9yLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5mZXJyZWRDb250ZXh0T2YsIEluZmVycmVkSW5zdGFuY2VPZiB9IGZyb20gJy4uL21vZGVscy91dGlsaXR5JztcclxuaW1wb3J0IHsgQ29udGFpbmVyU3RyYXRlZ3ksIENPTlRBSU5FUl9TVFJBVEVHWSB9IGZyb20gJy4vY29udGFpbmVyLnN0cmF0ZWd5JztcclxuaW1wb3J0IHsgQ29udGV4dFN0cmF0ZWd5LCBDT05URVhUX1NUUkFURUdZIH0gZnJvbSAnLi9jb250ZXh0LnN0cmF0ZWd5JztcclxuaW1wb3J0IHsgRG9tU3RyYXRlZ3ksIERPTV9TVFJBVEVHWSB9IGZyb20gJy4vZG9tLnN0cmF0ZWd5JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9qZWN0aW9uU3RyYXRlZ3k8VCA9IGFueT4ge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb250ZW50OiBUKSB7fVxyXG5cclxuICBhYnN0cmFjdCBpbmplY3RDb250ZW50KGluamVjdG9yOiBJbmplY3Rvcik6IENvbXBvbmVudFJlZk9yRW1iZWRkZWRWaWV3UmVmPFQ+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UHJvamVjdGlvblN0cmF0ZWd5PFQgZXh0ZW5kcyBUeXBlPGFueT4+IGV4dGVuZHMgUHJvamVjdGlvblN0cmF0ZWd5PFQ+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvbXBvbmVudDogVCxcclxuICAgIHByaXZhdGUgY29udGFpbmVyU3RyYXRlZ3k6IENvbnRhaW5lclN0cmF0ZWd5LFxyXG4gICAgcHJpdmF0ZSBjb250ZXh0U3RyYXRlZ3k6IENvbnRleHRTdHJhdGVneSA9IENPTlRFWFRfU1RSQVRFR1kuTm9uZSgpLFxyXG4gICkge1xyXG4gICAgc3VwZXIoY29tcG9uZW50KTtcclxuICB9XHJcblxyXG4gIGluamVjdENvbnRlbnQoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lclN0cmF0ZWd5LnByZXBhcmUoKTtcclxuXHJcbiAgICBjb25zdCByZXNvbHZlciA9IGluamVjdG9yLmdldChDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIGFzIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSByZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+KHRoaXMuY29udGVudCk7XHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXJTdHJhdGVneS5jb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxyXG4gICAgICBmYWN0b3J5LFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclN0cmF0ZWd5LmdldEluZGV4KCksXHJcbiAgICAgIGluamVjdG9yLFxyXG4gICAgKTtcclxuICAgIHRoaXMuY29udGV4dFN0cmF0ZWd5LnNldENvbnRleHQoY29tcG9uZW50UmVmKTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50UmVmIGFzIENvbXBvbmVudFJlZk9yRW1iZWRkZWRWaWV3UmVmPFQ+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VCBleHRlbmRzIFR5cGU8YW55Pj4gZXh0ZW5kcyBQcm9qZWN0aW9uU3RyYXRlZ3k8VD4ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29tcG9uZW50OiBULFxyXG4gICAgcHJpdmF0ZSBjb250ZXh0U3RyYXRlZ3k6IENvbnRleHRTdHJhdGVneSA9IENPTlRFWFRfU1RSQVRFR1kuTm9uZSgpLFxyXG4gICAgcHJpdmF0ZSBkb21TdHJhdGVneTogRG9tU3RyYXRlZ3kgPSBET01fU1RSQVRFR1kuQXBwZW5kVG9Cb2R5KCksXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgaW5qZWN0Q29udGVudChpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIGNvbnN0IGFwcFJlZiA9IGluamVjdG9yLmdldChBcHBsaWNhdGlvblJlZik7XHJcbiAgICBjb25zdCByZXNvbHZlciA9IGluamVjdG9yLmdldChDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIGFzIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHJlc29sdmVyXHJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxJbmZlcnJlZEluc3RhbmNlT2Y8VD4+KHRoaXMuY29udGVudClcclxuICAgICAgLmNyZWF0ZShpbmplY3Rvcik7XHJcblxyXG4gICAgdGhpcy5jb250ZXh0U3RyYXRlZ3kuc2V0Q29udGV4dChjb21wb25lbnRSZWYpO1xyXG5cclxuICAgIGFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXTtcclxuICAgIHRoaXMuZG9tU3RyYXRlZ3kuaW5zZXJ0RWxlbWVudChlbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50UmVmIGFzIENvbXBvbmVudFJlZk9yRW1iZWRkZWRWaWV3UmVmPFQ+O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJvamVjdGlvblN0cmF0ZWd5PFQgZXh0ZW5kcyBUZW1wbGF0ZVJlZjxhbnk+PiBleHRlbmRzIFByb2plY3Rpb25TdHJhdGVneTxUPiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0ZW1wbGF0ZVJlZjogVCxcclxuICAgIHByaXZhdGUgY29udGFpbmVyU3RyYXRlZ3k6IENvbnRhaW5lclN0cmF0ZWd5LFxyXG4gICAgcHJpdmF0ZSBjb250ZXh0U3RyYXRlZ3kgPSBDT05URVhUX1NUUkFURUdZLk5vbmUoKSxcclxuICApIHtcclxuICAgIHN1cGVyKHRlbXBsYXRlUmVmKTtcclxuICB9XHJcblxyXG4gIGluamVjdENvbnRlbnQoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lclN0cmF0ZWd5LnByZXBhcmUoKTtcclxuXHJcbiAgICBjb25zdCBlbWJlZGRlZFZpZXdSZWYgPSB0aGlzLmNvbnRhaW5lclN0cmF0ZWd5LmNvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoXHJcbiAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgdGhpcy5jb250ZXh0U3RyYXRlZ3kuY29udGV4dCxcclxuICAgICAgdGhpcy5jb250YWluZXJTdHJhdGVneS5nZXRJbmRleCgpLFxyXG4gICAgKTtcclxuICAgIGVtYmVkZGVkVmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgcmV0dXJuIGVtYmVkZGVkVmlld1JlZiBhcyBDb21wb25lbnRSZWZPckVtYmVkZGVkVmlld1JlZjxUPjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQUk9KRUNUSU9OX1NUUkFURUdZID0ge1xyXG4gIEFwcGVuZENvbXBvbmVudFRvQm9keTxUIGV4dGVuZHMgVHlwZTx1bmtub3duPj4oY29tcG9uZW50OiBULCBjb250ZXh0PzogSW5mZXJyZWRJbnN0YW5jZU9mPFQ+KSB7XHJcbiAgICByZXR1cm4gbmV3IFJvb3RDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLkNvbXBvbmVudChjb250ZXh0KSxcclxuICAgICk7XHJcbiAgfSxcclxuICBBcHBlbmRDb21wb25lbnRUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVHlwZTx1bmtub3duPj4oXHJcbiAgICBjb21wb25lbnQ6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogSW5mZXJyZWRJbnN0YW5jZU9mPFQ+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLkFwcGVuZChjb250YWluZXJSZWYpLFxyXG4gICAgICBjb250ZXh0ICYmIENPTlRFWFRfU1RSQVRFR1kuQ29tcG9uZW50KGNvbnRleHQpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIEFwcGVuZFRlbXBsYXRlVG9Db250YWluZXI8VCBleHRlbmRzIFRlbXBsYXRlUmVmPHVua25vd24+PihcclxuICAgIHRlbXBsYXRlUmVmOiBULFxyXG4gICAgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgY29udGV4dD86IEluZmVycmVkQ29udGV4dE9mPFQ+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZVByb2plY3Rpb25TdHJhdGVneTxUPihcclxuICAgICAgdGVtcGxhdGVSZWYsXHJcbiAgICAgIENPTlRBSU5FUl9TVFJBVEVHWS5BcHBlbmQoY29udGFpbmVyUmVmKSxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLlRlbXBsYXRlKGNvbnRleHQpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIFByZXBlbmRDb21wb25lbnRUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVHlwZTx1bmtub3duPj4oXHJcbiAgICBjb21wb25lbnQ6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogSW5mZXJyZWRJbnN0YW5jZU9mPFQ+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLlByZXBlbmQoY29udGFpbmVyUmVmKSxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLkNvbXBvbmVudChjb250ZXh0KSxcclxuICAgICk7XHJcbiAgfSxcclxuICBQcmVwZW5kVGVtcGxhdGVUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVGVtcGxhdGVSZWY8dW5rbm93bj4+KFxyXG4gICAgdGVtcGxhdGVSZWY6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogSW5mZXJyZWRDb250ZXh0T2Y8VD4sXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gbmV3IFRlbXBsYXRlUHJvamVjdGlvblN0cmF0ZWd5PFQ+KFxyXG4gICAgICB0ZW1wbGF0ZVJlZixcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLlByZXBlbmQoY29udGFpbmVyUmVmKSxcclxuICAgICAgY29udGV4dCAmJiBDT05URVhUX1NUUkFURUdZLlRlbXBsYXRlKGNvbnRleHQpLFxyXG4gICAgKTtcclxuICB9LFxyXG4gIFByb2plY3RDb21wb25lbnRUb0NvbnRhaW5lcjxUIGV4dGVuZHMgVHlwZTx1bmtub3duPj4oXHJcbiAgICBjb21wb25lbnQ6IFQsXHJcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjb250ZXh0PzogSW5mZXJyZWRJbnN0YW5jZU9mPFQ+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRQcm9qZWN0aW9uU3RyYXRlZ3k8VD4oXHJcbiAgICAgIGNvbXBvbmVudCxcclxuICAgICAgQ09OVEFJTkVSX1NUUkFURUdZLkNsZWFyKGNvbnRhaW5lclJlZiksXHJcbiAgICAgIGNvbnRleHQgJiYgQ09OVEVYVF9TVFJBVEVHWS5Db21wb25lbnQoY29udGV4dCksXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgUHJvamVjdFRlbXBsYXRlVG9Db250YWluZXI8VCBleHRlbmRzIFRlbXBsYXRlUmVmPHVua25vd24+PihcclxuICAgIHRlbXBsYXRlUmVmOiBULFxyXG4gICAgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgY29udGV4dD86IEluZmVycmVkQ29udGV4dE9mPFQ+LFxyXG4gICkge1xyXG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZVByb2plY3Rpb25TdHJhdGVneTxUPihcclxuICAgICAgdGVtcGxhdGVSZWYsXHJcbiAgICAgIENPTlRBSU5FUl9TVFJBVEVHWS5DbGVhcihjb250YWluZXJSZWYpLFxyXG4gICAgICBjb250ZXh0ICYmIENPTlRFWFRfU1RSQVRFR1kuVGVtcGxhdGUoY29udGV4dCksXHJcbiAgICApO1xyXG4gIH0sXHJcbn07XHJcblxyXG50eXBlIENvbXBvbmVudFJlZk9yRW1iZWRkZWRWaWV3UmVmPFQ+ID0gVCBleHRlbmRzIFR5cGU8aW5mZXIgVT5cclxuICA/IENvbXBvbmVudFJlZjxVPlxyXG4gIDogVCBleHRlbmRzIFRlbXBsYXRlUmVmPGluZmVyIEM+XHJcbiAgPyBFbWJlZGRlZFZpZXdSZWY8Qz5cclxuICA6IG5ldmVyO1xyXG4iXX0=