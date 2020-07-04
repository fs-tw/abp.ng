import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
export declare class StopPropagationDirective implements OnInit, OnDestroy {
    private el;
    readonly stopPropEvent: EventEmitter<MouseEvent>;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
