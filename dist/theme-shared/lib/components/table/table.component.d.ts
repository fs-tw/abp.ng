import { ElementRef, EventEmitter, TemplateRef, TrackByFunction } from '@angular/core';
export declare class TableComponent {
    private _totalRecords;
    bodyScrollLeft: number;
    value: any[];
    headerTemplate: TemplateRef<any>;
    bodyTemplate: TemplateRef<any>;
    colgroupTemplate: TemplateRef<any>;
    scrollHeight: string;
    scrollable: boolean;
    rows: number;
    page: number;
    trackingProp: string;
    emptyMessage: string;
    readonly pageChange: EventEmitter<number>;
    wrapperRef: ElementRef<HTMLDivElement>;
    totalRecords: number;
    readonly totalPages: number;
    readonly slicedValue: any[];
    trackByFn: TrackByFunction<any>;
}
