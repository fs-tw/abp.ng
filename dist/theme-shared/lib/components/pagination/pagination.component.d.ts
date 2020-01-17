import { OnInit, EventEmitter, TrackByFunction } from '@angular/core';
export declare class PaginationComponent implements OnInit {
    private _value;
    value: number;
    readonly valueChange: EventEmitter<number>;
    totalPages: number;
    readonly pageArray: number[];
    trackByFn: TrackByFunction<number>;
    ngOnInit(): void;
    changePage(page: number): void;
}
