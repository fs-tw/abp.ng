import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
export declare class EllipsisDirective implements AfterViewInit {
    private cdRef;
    private elRef;
    width: string;
    title: string;
    enabled: boolean;
    get inlineClass(): string;
    get class(): boolean;
    get maxWidth(): string;
    constructor(cdRef: ChangeDetectorRef, elRef: ElementRef);
    ngAfterViewInit(): void;
}
