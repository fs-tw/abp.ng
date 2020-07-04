import { ComponentFactoryResolver, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { ABP } from '../models/common';
import { ReplaceableComponents } from '../models/replaceable-components';
export declare class ReplaceableTemplateDirective implements OnInit, OnDestroy, OnChanges {
    private injector;
    private templateRef;
    private cfRes;
    private vcRef;
    private store;
    data: ReplaceableComponents.ReplaceableTemplateDirectiveInput<any, any>;
    providedData: ReplaceableComponents.ReplaceableTemplateData<any, any>;
    context: any;
    externalComponent: Type<any>;
    defaultComponentRef: any;
    defaultComponentSubscriptions: ABP.Dictionary<Subscription>;
    initialized: boolean;
    constructor(injector: Injector, templateRef: TemplateRef<any>, cfRes: ComponentFactoryResolver, vcRef: ViewContainerRef, store: Store);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    setDefaultComponentInputs(): void;
    setProvidedData(): void;
    resetDefaultComponent(): void;
}
