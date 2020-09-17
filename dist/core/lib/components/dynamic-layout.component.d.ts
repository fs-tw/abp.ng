import { Injector, Type } from '@angular/core';
import { Store } from '@ngxs/store';
import { LocalizationService } from '../services/localization.service';
import { SubscriptionService } from '../services/subscription.service';
export declare class DynamicLayoutComponent {
    private localizationService;
    private store;
    private subscription;
    layout: Type<any>;
    readonly layouts: Map<string, string>;
    isLayoutVisible: boolean;
    constructor(injector: Injector, localizationService: LocalizationService, store: Store, subscription: SubscriptionService, dynamicLayoutComponent: DynamicLayoutComponent);
    private listenToLanguageChange;
    private getComponent;
}
