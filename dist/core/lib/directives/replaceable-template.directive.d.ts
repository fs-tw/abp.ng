import { ComponentFactoryResolver, Injector, OnChanges, OnInit, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ABP } from '../models/common';
import { ReplaceableComponents } from '../models/replaceable-components';
import { ReplaceableComponentsService } from '../services/replaceable-components.service';
import { SubscriptionService } from '../services/subscription.service';
export declare class ReplaceableTemplateDirective implements OnInit, OnChanges {
    private injector;
    private templateRef;
    private cfRes;
    private vcRef;
    private replaceableComponents;
    private subscription;
    data: ReplaceableComponents.ReplaceableTemplateDirectiveInput<any, any>;
    providedData: ReplaceableComponents.ReplaceableTemplateData<any, any>;
    context: any;
    externalComponent: Type<any>;
    defaultComponentRef: any;
    defaultComponentSubscriptions: ABP.Dictionary<Subscription>;
    initialized: boolean;
    constructor(injector: Injector, templateRef: TemplateRef<any>, cfRes: ComponentFactoryResolver, vcRef: ViewContainerRef, replaceableComponents: ReplaceableComponentsService, subscription: SubscriptionService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setDefaultComponentInputs(): void;
    setProvidedData(): void;
    resetDefaultComponent(): void;
}
