import { ElementRef, EventEmitter, OnInit, TemplateRef, TrackByFunction } from '@angular/core';
/**
 *
 * @deprecated use ngx-datatale instead.
 */
export declare class TableComponent implements OnInit {
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
    get totalRecords(): number;
    set totalRecords(newValue: number);
    get totalPages(): number;
    get slicedValue(): any[];
    marginCalculator: MarginCalculator;
    trackByFn: TrackByFunction<any>;
    ngOnInit(): void;
}
declare type MarginCalculator = (div: HTMLDivElement) => string;
export {};
