import { Store } from '@ngxs/store';
export declare const STYLES_PROVIDERS: {
    provide: import("@angular/core").InjectionToken<(() => void)[]>;
    useFactory: typeof configureStyles;
    deps: (typeof Store)[];
    multi: boolean;
}[];
export declare function configureStyles(store: Store): () => void;
