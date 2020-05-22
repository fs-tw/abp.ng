import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ABP } from '../models/common';
import { PagedResultDto } from '../models/dtos';
export declare class ListService implements OnDestroy {
    private delay;
    private _filter;
    filter: string;
    private _maxResultCount;
    maxResultCount: number;
    private _page;
    page: number;
    private _sortKey;
    sortKey: string;
    private _sortOrder;
    sortOrder: string;
    private _query$;
    readonly query$: Observable<ABP.PageQueryParams>;
    private _isLoading$;
    readonly isLoading$: Observable<boolean>;
    get: () => void;
    constructor(delay: number);
    hookToQuery<T extends any>(streamCreatorCallback: QueryStreamCreatorCallback<T>): Observable<PagedResultDto<T>>;
    ngOnDestroy(): void;
}
export declare type QueryStreamCreatorCallback<T> = (query: ABP.PageQueryParams) => Observable<PagedResultDto<T>>;
