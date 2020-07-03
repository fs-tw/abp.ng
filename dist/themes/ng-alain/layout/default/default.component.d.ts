import { AfterViewInit, ComponentFactoryResolver, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as i0 from "@angular/core";
export declare class LayoutDefaultComponent implements OnInit, AfterViewInit, OnDestroy {
    private resolver;
    private settings;
    private el;
    private renderer;
    private doc;
    private unsubscribe$;
    private settingHost;
    isFetching: boolean;
    constructor(router: Router, msgSrv: NzMessageService, resolver: ComponentFactoryResolver, settings: SettingsService, el: ElementRef, renderer: Renderer2, doc: any);
    private setClass;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<LayoutDefaultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayoutDefaultComponent, "layout-default", never, {}, {}, never, never>;
}
