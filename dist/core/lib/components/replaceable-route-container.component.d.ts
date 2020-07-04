import { OnDestroy, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
export declare class ReplaceableRouteContainerComponent implements OnInit, OnDestroy {
    private route;
    private store;
    defaultComponent: Type<any>;
    componentKey: string;
    externalComponent: Type<any>;
    constructor(route: ActivatedRoute, store: Store);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
