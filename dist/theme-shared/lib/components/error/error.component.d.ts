import { Config } from '@abp/ng.core';
import { AfterViewInit, ComponentFactoryResolver, ElementRef, OnDestroy, Type, ApplicationRef, Injector } from '@angular/core';
import { Subject } from 'rxjs';
export declare class ErrorComponent implements AfterViewInit, OnDestroy {
    appRef: ApplicationRef;
    cfRes: ComponentFactoryResolver;
    injector: Injector;
    status: number;
    title: Config.LocalizationParam;
    details: Config.LocalizationParam;
    customComponent: Type<any>;
    destroy$: Subject<void>;
    hideCloseIcon: boolean;
    containerRef: ElementRef<HTMLDivElement>;
    readonly statusText: string;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    destroy(): void;
}
