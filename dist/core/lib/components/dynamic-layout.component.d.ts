import { OnDestroy, Type } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
export declare class DynamicLayoutComponent implements OnDestroy {
    private router;
    private route;
    private store;
    layout: Type<any>;
    constructor(router: Router, route: ActivatedRoute, store: Store);
    private getComponent;
    ngOnDestroy(): void;
}
