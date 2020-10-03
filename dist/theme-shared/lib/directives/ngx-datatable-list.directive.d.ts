import { ListService, LocalizationService } from '@abp/ng.core';
import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
export declare class NgxDatatableListDirective implements OnChanges, OnDestroy, OnInit {
    private table;
    private cdRef;
    private localizationService;
    private subscription;
    private querySubscription;
    list: ListService;
    constructor(table: DatatableComponent, cdRef: ChangeDetectorRef, localizationService: LocalizationService);
    private setInitialValues;
    private subscribeToPage;
    private subscribeToSort;
    private subscribeToQuery;
    ngOnChanges({ list }: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
}
