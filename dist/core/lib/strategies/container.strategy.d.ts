import { ViewContainerRef } from '@angular/core';
export declare abstract class ContainerStrategy {
    containerRef: ViewContainerRef;
    constructor(containerRef: ViewContainerRef);
    abstract getIndex(): number;
    prepare(): void;
}
export declare class ClearContainerStrategy extends ContainerStrategy {
    getIndex(): number;
    prepare(): void;
}
export declare class InsertIntoContainerStrategy extends ContainerStrategy {
    private index;
    constructor(containerRef: ViewContainerRef, index: number);
    getIndex(): number;
}
export declare const CONTAINER_STRATEGY: {
    Clear(containerRef: ViewContainerRef): ClearContainerStrategy;
    Append(containerRef: ViewContainerRef): InsertIntoContainerStrategy;
    Prepend(containerRef: ViewContainerRef): InsertIntoContainerStrategy;
    Insert(containerRef: ViewContainerRef, index: number): InsertIntoContainerStrategy;
};
