import { ABP, RoutesService, SubscriptionService } from '@abp/ng.core';
import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class BreadcrumbComponent implements OnInit {
    readonly cdRef: ChangeDetectorRef;
    private router;
    private routes;
    private subscription;
    segments: Partial<ABP.Route>[];
    constructor(cdRef: ChangeDetectorRef, router: Router, routes: RoutesService, subscription: SubscriptionService);
    ngOnInit(): void;
}
