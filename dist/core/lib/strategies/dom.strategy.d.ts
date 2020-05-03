export declare class DomStrategy {
    target: HTMLElement;
    position: InsertPosition;
    constructor(target?: HTMLElement, position?: InsertPosition);
    insertElement<T extends HTMLElement>(element: T): void;
}
export declare const DOM_STRATEGY: {
    AfterElement(element: HTMLElement): DomStrategy;
    AppendToBody(): DomStrategy;
    AppendToHead(): DomStrategy;
    BeforeElement(element: HTMLElement): DomStrategy;
    PrependToHead(): DomStrategy;
};
