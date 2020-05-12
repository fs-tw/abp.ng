import { ComponentRef, EmbeddedViewRef, Injector, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { InferredContextOf, InferredInstanceOf } from '../models/utility';
import { ContainerStrategy } from './container.strategy';
import { ContextStrategy } from './context.strategy';
import { DomStrategy } from './dom.strategy';
export declare abstract class ProjectionStrategy<T = any> {
    content: T;
    constructor(content: T);
    abstract injectContent(injector: Injector): ComponentRefOrEmbeddedViewRef<T>;
}
export declare class ComponentProjectionStrategy<T extends Type<any>> extends ProjectionStrategy<T> {
    private containerStrategy;
    private contextStrategy;
    constructor(component: T, containerStrategy: ContainerStrategy, contextStrategy?: ContextStrategy);
    injectContent(injector: Injector): ComponentRefOrEmbeddedViewRef<T>;
}
export declare class RootComponentProjectionStrategy<T extends Type<any>> extends ProjectionStrategy<T> {
    private contextStrategy;
    private domStrategy;
    constructor(component: T, contextStrategy?: ContextStrategy, domStrategy?: DomStrategy);
    injectContent(injector: Injector): ComponentRefOrEmbeddedViewRef<T>;
}
export declare class TemplateProjectionStrategy<T extends TemplateRef<any>> extends ProjectionStrategy<T> {
    private containerStrategy;
    private contextStrategy;
    constructor(templateRef: T, containerStrategy: ContainerStrategy, contextStrategy?: import("./context.strategy").NoContextStrategy<any>);
    injectContent(): ComponentRefOrEmbeddedViewRef<T>;
}
export declare const PROJECTION_STRATEGY: {
    AppendComponentToBody<T extends Type<unknown>>(component: T, context?: Partial<InferredInstanceOf<T>>): RootComponentProjectionStrategy<T>;
    AppendComponentToContainer<T extends Type<unknown>>(component: T, containerRef: ViewContainerRef, context?: Partial<InferredInstanceOf<T>>): ComponentProjectionStrategy<T>;
    AppendTemplateToContainer<T extends TemplateRef<unknown>>(templateRef: T, containerRef: ViewContainerRef, context?: Partial<InferredContextOf<T>>): TemplateProjectionStrategy<T>;
    PrependComponentToContainer<T extends Type<unknown>>(component: T, containerRef: ViewContainerRef, context?: Partial<InferredInstanceOf<T>>): ComponentProjectionStrategy<T>;
    PrependTemplateToContainer<T extends TemplateRef<unknown>>(templateRef: T, containerRef: ViewContainerRef, context?: Partial<InferredContextOf<T>>): TemplateProjectionStrategy<T>;
    ProjectComponentToContainer<T extends Type<unknown>>(component: T, containerRef: ViewContainerRef, context?: Partial<InferredInstanceOf<T>>): ComponentProjectionStrategy<T>;
    ProjectTemplateToContainer<T extends TemplateRef<unknown>>(templateRef: T, containerRef: ViewContainerRef, context?: Partial<InferredContextOf<T>>): TemplateProjectionStrategy<T>;
};
declare type ComponentRefOrEmbeddedViewRef<T> = T extends Type<infer U> ? ComponentRef<U> : T extends TemplateRef<infer C> ? EmbeddedViewRef<C> : never;
export {};
