import { OnInit, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';
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
}
export {};
