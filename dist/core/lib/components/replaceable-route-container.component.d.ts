import { OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaceableComponentsService } from '../services/replaceable-components.service';
import { SubscriptionService } from '../services/subscription.service';
export declare class ReplaceableRouteContainerComponent implements OnInit {
    private route;
    private replaceableComponents;
    private subscription;
    defaultComponent: Type<any>;
    componentKey: string;
    externalComponent: Type<any>;
    constructor(route: ActivatedRoute, replaceableComponents: ReplaceableComponentsService, subscription: SubscriptionService);
    ngOnInit(): void;
}
