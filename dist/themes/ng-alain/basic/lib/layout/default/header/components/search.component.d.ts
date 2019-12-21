import { ElementRef, AfterViewInit } from '@angular/core';
export declare class HeaderSearchComponent implements AfterViewInit {
    private el;
    q: string;
    qIpt: HTMLInputElement;
    focus: boolean;
    searchToggled: boolean;
    toggleChange: boolean;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    qFocus(): void;
    qBlur(): void;
}
