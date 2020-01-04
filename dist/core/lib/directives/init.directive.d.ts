import { EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
export declare class InitDirective implements AfterViewInit {
    private elRef;
    readonly init: EventEmitter<ElementRef<any>>;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
}
