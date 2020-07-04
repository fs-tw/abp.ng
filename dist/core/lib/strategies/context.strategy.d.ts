import { ComponentRef, TemplateRef, Type } from '@angular/core';
import { InferredContextOf, InferredInstanceOf } from '../models';
export declare abstract class ContextStrategy<T = any> {
    context: Partial<ContextType<T>>;
    constructor(context: Partial<ContextType<T>>);
    setContext(componentRef?: ComponentRef<InferredInstanceOf<T>>): Partial<ContextType<T>>;
}
export declare class NoContextStrategy<T extends Type<any> | TemplateRef<any> = any> extends ContextStrategy<T> {
    constructor();
}
export declare class ComponentContextStrategy<T extends Type<any> = any> extends ContextStrategy<T> {
    setContext(componentRef: ComponentRef<InferredInstanceOf<T>>): Partial<InferredInstanceOf<T>>;
}
export declare class TemplateContextStrategy<T extends TemplateRef<any> = any> extends ContextStrategy<T> {
    setContext(): Partial<InferredContextOf<T>>;
}
export declare const CONTEXT_STRATEGY: {
    None<T extends Type<any> | TemplateRef<any> = any>(): NoContextStrategy<T>;
    Component<T_1 extends Type<any> = any>(context: Partial<InferredInstanceOf<T_1>>): ComponentContextStrategy<T_1>;
    Template<T_2 extends TemplateRef<any> = any>(context: Partial<InferredContextOf<T_2>>): TemplateContextStrategy<T_2>;
};
declare type ContextType<T> = T extends Type<infer U> | TemplateRef<infer U> ? U : never;
export {};
