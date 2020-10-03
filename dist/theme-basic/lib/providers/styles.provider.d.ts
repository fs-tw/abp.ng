import { ReplaceableComponentsService, DomInsertionService } from '@abp/ng.core';
export declare const BASIC_THEME_STYLES_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureStyles;
    deps: (typeof DomInsertionService | typeof ReplaceableComponentsService)[];
    multi: boolean;
}[];
export declare function configureStyles(domInsertion: DomInsertionService, replaceableComponents: ReplaceableComponentsService): () => void;
