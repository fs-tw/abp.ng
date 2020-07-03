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
    AppendComponentToContainer<T_1 extends Type<unknown>>(component: T_1, containerRef: ViewContainerRef, context?: Partial<InferredInstanceOf<T_1>>): ComponentProjectionStrategy<T_1>;
    AppendTemplateToContainer<T_2 extends TemplateRef<unknown>>(templateRef: T_2, containerRef: ViewContainerRef, context?: Partial<InferredContextOf<T_2>>): TemplateProjectionStrategy<T_2>;
    PrependComponentToContainer<T_3 extends Type<unknown>>(component: T_3, containerRef: ViewContainerRef, context?: Partial<InferredInstanceOf<T_3>>): ComponentProjectionStrategy<T_3>;
    PrependTemplateToContainer<T_4 extends TemplateRef<unknown>>(templateRef: T_4, containerRef: ViewContainerRef, context?: Partial<InferredContextOf<T_4>>): TemplateProjectionStrategy<T_4>;
    ProjectComponentToContainer<T_5 extends Type<unknown>>(component: T_5, containerRef: ViewContainerRef, context?: Partial<InferredInstanceOf<T_5>>): ComponentProjectionStrategy<T_5>;
    ProjectTemplateToContainer<T_6 extends TemplateRef<unknown>>(templateRef: T_6, containerRef: ViewContainerRef, context?: Partial<InferredContextOf<T_6>>): TemplateProjectionStrategy<T_6>;
};
declare type ComponentRefOrEmbeddedViewRef<T> = T extends Type<infer U> ? ComponentRef<U> : T extends TemplateRef<infer C> ? EmbeddedViewRef<C> : never;
export {};
