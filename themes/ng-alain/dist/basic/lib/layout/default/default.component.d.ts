import { ComponentFactoryResolver, AfterViewInit, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { SettingsService } from '@delon/theme';
import { eLayoutType } from '@abp/ng.core';
export declare class LayoutDefaultComponent implements OnInit, AfterViewInit, OnDestroy {
    private resolver;
    private settings;
    private el;
    private renderer;
    private doc;
    static type: eLayoutType;
    private unsubscribe$;
    private settingHost;
    isFetching: boolean;
    constructor(router: Router, _message: NzMessageService, resolver: ComponentFactoryResolver, settings: SettingsService, el: ElementRef, renderer: Renderer2, doc: any);
    private setClass;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
