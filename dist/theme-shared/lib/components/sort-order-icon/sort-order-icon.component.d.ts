import { EventEmitter } from '@angular/core';
export declare class SortOrderIconComponent {
    private _order;
    private _selectedSortKey;
    sortKey: string;
    set selectedSortKey(value: string);
    get selectedSortKey(): string;
    set order(value: 'asc' | 'desc' | '');
    get order(): 'asc' | 'desc' | '';
    readonly orderChange: EventEmitter<string>;
    readonly selectedSortKeyChange: EventEmitter<string>;
    iconClass: string;
    get icon(): string;
    sort(key: string): void;
}
