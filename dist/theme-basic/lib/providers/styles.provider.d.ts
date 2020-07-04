import { DomInsertionService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
export declare const BASIC_THEME_STYLES_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureStyles;
    deps: (typeof DomInsertionService | typeof Store)[];
    multi: boolean;
}[];
export declare function configureStyles(domInsertion: DomInsertionService, store: Store): () => void;
