import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
export declare class BreadcrumbComponent implements OnInit {
    private router;
    private store;
    segments: string[];
    show: boolean;
    constructor(router: Router, store: Store);
    ngOnInit(): void;
}
