import { AfterViewInit, ElementRef } from '@angular/core';
export declare class HeaderSearchComponent implements AfterViewInit {
    private el;
    q: string;
    qIpt: HTMLInputElement;
    focus: boolean;
    searchToggled: boolean;
    set toggleChange(value: boolean);
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    qFocus(): void;
    qBlur(): void;
}
