import { Injector } from '@angular/core';
import { LocaleDirection } from '../models/common';
export declare class LazyStyleHandler {
    private lazyLoad;
    private styles;
    private _dir;
    readonly loaded: Map<string, HTMLLinkElement>;
    set dir(dir: LocaleDirection);
    get dir(): LocaleDirection;
    constructor(injector: Injector);
    private getHrefFromLink;
    private getLoadedBootstrap;
    private listenToLanguageChanges;
    private setBodyDir;
    private setLazyLoad;
    private setStyles;
    private switchCSS;
}
export declare function createLazyStyleHref(style: string, dir: string): string;
export declare function initLazyStyleHandler(injector: Injector): () => LazyStyleHandler;
