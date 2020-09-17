import { OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { SubscriptionService } from '../services/subscription.service';
export declare class ReplaceableRouteContainerComponent implements OnInit {
    private route;
    private store;
    private subscription;
    defaultComponent: Type<any>;
    componentKey: string;
    externalComponent: Type<any>;
    constructor(route: ActivatedRoute, store: Store, subscription: SubscriptionService);
    ngOnInit(): void;
}
