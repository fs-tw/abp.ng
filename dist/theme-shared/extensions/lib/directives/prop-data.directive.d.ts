import { Injector, OnChanges, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { PropData, PropList } from '../models/props';
export declare class PropDataDirective<L extends PropList<any>> extends PropData<InferredData<L>> implements OnChanges, OnDestroy {
    private tempRef;
    private vcRef;
    readonly propList: L;
    readonly record: InferredData<L>['record'];
    readonly index: number;
    readonly getInjected: InferredData<L>['getInjected'];
    constructor(tempRef: TemplateRef<any>, vcRef: ViewContainerRef, injector: Injector);
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
declare type InferredData<L> = PropData<InferredRecord<L>>;
declare type InferredRecord<L> = L extends PropList<infer R> ? R : never;
export {};
