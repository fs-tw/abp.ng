import { OnInit, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import * as i0 from "@angular/core";
declare type SiteTheme = 'default' | 'dark' | 'compact';
export declare class LayoutThemeBtnComponent implements OnInit {
    private renderer;
    private configSrv;
    theme: SiteTheme;
    constructor(renderer: Renderer2, configSrv: AlainConfigService);
    ngOnInit(): void;
    private initTheme;
    private updateChartTheme;
    onThemeChange(theme: SiteTheme): void;
    static ɵfac: i0.ɵɵFactoryDef<LayoutThemeBtnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayoutThemeBtnComponent, "layout-theme-btn", never, {}, {}, never, never>;
}
export {};
