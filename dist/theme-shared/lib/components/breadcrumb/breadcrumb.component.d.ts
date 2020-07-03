import { ABP, RoutesService } from '@abp/ng.core';
import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class BreadcrumbComponent implements OnDestroy, OnInit {
    readonly cdRef: ChangeDetectorRef;
    private router;
    private routes;
    segments: Partial<ABP.Route>[];
    constructor(cdRef: ChangeDetectorRef, router: Router, routes: RoutesService);
    ngOnDestroy(): void;
    ngOnInit(): void;
}
