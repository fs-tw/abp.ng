import { Config, SubscriptionService } from '@abp/ng.core';
import { AfterViewInit, ApplicationRef, ComponentFactoryResolver, ElementRef, Injector, OnDestroy, OnInit, Type } from '@angular/core';
import { Subject } from 'rxjs';
export declare class HttpErrorWrapperComponent implements AfterViewInit, OnDestroy, OnInit {
    private subscription;
    appRef: ApplicationRef;
    cfRes: ComponentFactoryResolver;
    injector: Injector;
    status: number;
    title: Config.LocalizationParam;
    details: Config.LocalizationParam;
    customComponent: Type<any>;
    destroy$: Subject<void>;
    hideCloseIcon: boolean;
    backgroundColor: string;
    isHomeShow: boolean;
    containerRef: ElementRef<HTMLDivElement>;
    get statusText(): string;
    constructor(subscription: SubscriptionService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    destroy(): void;
}
