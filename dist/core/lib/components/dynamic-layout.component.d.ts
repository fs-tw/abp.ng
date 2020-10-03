import { Injector, Type } from '@angular/core';
import { LocalizationService } from '../services/localization.service';
import { ReplaceableComponentsService } from '../services/replaceable-components.service';
import { SubscriptionService } from '../services/subscription.service';
export declare class DynamicLayoutComponent {
    private localizationService;
    private replaceableComponents;
    private subscription;
    layout: Type<any>;
    readonly layouts: Map<string, string>;
    isLayoutVisible: boolean;
    constructor(injector: Injector, localizationService: LocalizationService, replaceableComponents: ReplaceableComponentsService, subscription: SubscriptionService, dynamicLayoutComponent: DynamicLayoutComponent);
    private listenToLanguageChange;
    private getComponent;
}
