import { AfterViewInit, OnDestroy } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
export declare class NgxDatatableDefaultDirective implements AfterViewInit, OnDestroy {
    private table;
    private document;
    private subscription;
    private resizeDiff;
    class: string;
    get classes(): string;
    constructor(table: DatatableComponent, document: MockDocument);
    private fixHorizontalGap;
    private fixStyleOnWindowResize;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
interface MockDocument {
    body: MockBody;
    documentElement: MockDocumentElement;
}
interface MockBody {
    offsetWidth: number;
}
interface MockDocumentElement {
    clientHeight: number;
    scrollHeight: number;
}
export {};
