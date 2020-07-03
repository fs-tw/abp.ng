import { ComponentFactoryResolver, ComponentRef, ElementRef, Injector, OnInit, OnDestroy, Renderer2, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingComponent } from '../components/loading/loading.component';
export declare class LoadingDirective implements OnInit, OnDestroy {
    private elRef;
    private vcRef;
    private cdRes;
    private injector;
    private renderer;
    private _loading;
    position: string;
    get loading(): boolean;
    set loading(newValue: boolean);
    targetElement: HTMLElement;
    delay: number;
    componentRef: ComponentRef<LoadingComponent>;
    rootNode: HTMLDivElement;
    timerSubscription: Subscription;
    constructor(elRef: ElementRef<HTMLElement>, vcRef: ViewContainerRef, cdRes: ComponentFactoryResolver, injector: Injector, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
