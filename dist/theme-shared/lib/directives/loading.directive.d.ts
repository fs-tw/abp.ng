import { ElementRef, ViewContainerRef, ComponentFactoryResolver, Injector, ComponentRef, Renderer2, OnInit } from '@angular/core';
import { LoadingComponent } from '../components/loading/loading.component';
export declare class LoadingDirective implements OnInit {
    private elRef;
    private vcRef;
    private cdRes;
    private injector;
    private renderer;
    private _loading;
    position: string;
    loading: boolean;
    targetElement: HTMLElement;
    componentRef: ComponentRef<LoadingComponent>;
    rootNode: HTMLDivElement;
    constructor(elRef: ElementRef<HTMLElement>, vcRef: ViewContainerRef, cdRes: ComponentFactoryResolver, injector: Injector, renderer: Renderer2);
    ngOnInit(): void;
}
