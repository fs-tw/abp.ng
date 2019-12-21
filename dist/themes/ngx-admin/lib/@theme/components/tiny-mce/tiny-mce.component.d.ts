import { OnDestroy, AfterViewInit, EventEmitter, ElementRef } from '@angular/core';
import { LocationStrategy } from '@angular/common';
export declare class TinyMCEComponent implements OnDestroy, AfterViewInit {
    private host;
    private locationStrategy;
    editorKeyup: EventEmitter<any>;
    editor: any;
    constructor(host: ElementRef, locationStrategy: LocationStrategy);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
