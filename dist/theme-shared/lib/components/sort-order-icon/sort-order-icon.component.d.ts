import { EventEmitter } from '@angular/core';
export declare class SortOrderIconComponent {
    private _order;
    private _selectedSortKey;
    sortKey: string;
    selectedSortKey: string;
    order: 'asc' | 'desc' | '';
    readonly orderChange: EventEmitter<string>;
    readonly selectedSortKeyChange: EventEmitter<string>;
    iconClass: string;
    readonly icon: string;
    sort(key: string): void;
}
