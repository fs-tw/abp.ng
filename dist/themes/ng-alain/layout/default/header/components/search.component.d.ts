import { AfterViewInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<HeaderSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HeaderSearchComponent, "header-search", never, { "toggleChange": "toggleChange"; }, {}, never, never>;
}
